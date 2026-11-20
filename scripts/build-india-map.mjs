import { readFile, writeFile } from 'node:fs/promises';
import { createHash } from 'node:crypto';
import { gzipSync } from 'node:zlib';
import { geoMercator, geoPath, polygonArea } from 'd3';
import { Shape, Path, ExtrudeGeometry, EdgesGeometry } from 'three';
import { mergeVertices } from 'three/addons/utils/BufferGeometryUtils.js';

// Prepare the relief offline; preserve every polygon and hole, including tiny
// islands. Reject simplifications that compromise area or triangulation.
const source = await readFile(new URL('../public/india-states.geojson', import.meta.url));
const data = JSON.parse(source);
const projection = geoMercator().fitExtent([[-340, -350], [340, 350]], data);
const path = geoPath(projection);
const chunks = [];
const regions = [];
const posterPaths = [];
let floatOffset = 0;
let polygonCount = 0;
let maxAreaError = 0;
function push(values) {
  const offset = floatOffset;
  const array = Float32Array.from(values, value => Math.round(value * 10000) / 10000);
  chunks.push(Buffer.from(array.buffer));
  floatOffset += array.length;
  return { offset, length: array.length };
}
function distanceSquared(point, a, b) {
  const dx = b[0] - a[0], dy = b[1] - a[1];
  const t = Math.max(0, Math.min(1, ((point[0]-a[0])*dx+(point[1]-a[1])*dy)/(dx*dx+dy*dy || 1)));
  return (point[0]-a[0]-t*dx)**2 + (point[1]-a[1]-t*dy)**2;
}
function simplify(points, tolerance) {
  if (!tolerance || points.length <= 4) return points;
  let best = tolerance*tolerance, index = -1;
  for (let i=1;i<points.length-1;i++) {
    const distance = distanceSquared(points[i], points[0], points.at(-1));
    if (distance>best) { best=distance; index=i; }
  }
  return index < 0 ? [points[0],points.at(-1)] : [...simplify(points.slice(0,index+1),tolerance).slice(0,-1),...simplify(points.slice(index),tolerance)];
}
function projectRing(raw, tolerance) {
  const points = raw.map(coordinate => { const point=projection(coordinate); return [point[0],-point[1]]; });
  const reduced = simplify(points, tolerance);
  const originalArea = Math.abs(polygonArea(points));
  const error = Math.abs(Math.abs(polygonArea(reduced))-originalArea)/(originalArea || 1);
  if (reduced.length<4 || error>.015) return points;
  maxAreaError=Math.max(maxAreaError,error);
  return reduced;
}
function prepare(polygons, tolerance) {
  const projected = polygons.map(polygon => polygon.map(raw => projectRing(raw, tolerance)));
  const shapes = projected.map(rings => {
    const shape = new Shape();
    rings[0].forEach(([x,y],i) => i ? shape.lineTo(x,y) : shape.moveTo(x,y));
    rings.slice(1).forEach(points => {
      const hole=new Path(); points.forEach(([x,y],i) => i ? hole.lineTo(x,y) : hole.moveTo(x,y)); shape.holes.push(hole);
    });
    return shape;
  });
  const geometry = new ExtrudeGeometry(shapes, { depth:14, bevelEnabled:false, steps:1, curveSegments:1 });
  const position = geometry.getAttribute('position');
  let topArea = 0;
  for (let i=0;i<position.count;i+=3) {
    if (position.getZ(i)!==14 || position.getZ(i+1)!==14 || position.getZ(i+2)!==14) continue;
    const ax=position.getX(i), ay=position.getY(i), bx=position.getX(i+1), by=position.getY(i+1), cx=position.getX(i+2), cy=position.getY(i+2);
    topArea += Math.abs((bx-ax)*(cy-ay)-(by-ay)*(cx-ax))/2;
  }
  const expectedArea = projected.reduce((sum,rings) => sum+Math.abs(polygonArea(rings[0]))-rings.slice(1).reduce((area,ring) => area+Math.abs(polygonArea(ring)),0),0);
  return { projected, geometry, valid: Math.abs(topArea-expectedArea)<=Math.max(.02,expectedArea*.002) };
}
for (const feature of data.features) {
  const name = feature.properties.ST_NM;
  if (!name) throw Error('Region without an ST_NM identity');
  const polygons = feature.geometry.type==='MultiPolygon' ? feature.geometry.coordinates : [feature.geometry.coordinates];
  polygonCount += polygons.length;
  let prepared;
  for (const tolerance of [.45,.2,.08,0]) {
    prepared?.geometry.dispose();
    prepared=prepare(polygons,tolerance);
    if (prepared.valid) break;
  }
  if (!prepared.valid) throw Error(`Triangulation area mismatch for ${name}`);
  const { geometry, projected } = prepared;
  posterPaths.push(...projected.map(rings => rings.map(points => points.map(([x,y],i) => `${i?'L':'M'}${x.toFixed(1)} ${(-y).toFixed(1)}`).join('')+'Z').join('')));
  geometry.computeBoundingBox();
  const bounds=geometry.boundingBox;
  const position=geometry.getAttribute('position');
  const cx=(bounds.min.x+bounds.max.x)/2, cy=(bounds.min.y+bounds.max.y)/2;
  // Keep seams visible without changing the projected positions of islands.
  for (let i=0;i<position.count;i++) position.setXY(i,cx+(position.getX(i)-cx)*.997,cy+(position.getY(i)-cy)*.997);
  const clean=mergeVertices(geometry,.0001);
  const uv=[];
  const vertices=clean.getAttribute('position');
  for (let i=0;i<vertices.count;i++) uv.push((vertices.getX(i)-bounds.min.x)/(bounds.max.x-bounds.min.x || 1),(vertices.getY(i)-bounds.min.y)/(bounds.max.y-bounds.min.y || 1));
  // ExtrudeGeometry emits a group per polygon. Consolidate equal materials
  // offline so archipelagos do not cost hundreds of draw calls every frame.
  const indices=clean.getIndex().array;
  const sortedIndices=[];
  const groups=[];
  for (const materialIndex of [0,1]) {
    const start=sortedIndices.length;
    for (const group of geometry.groups) {
      if (group.materialIndex!==materialIndex) continue;
      for (let i=group.start;i<group.start+group.count;i++) sortedIndices.push(indices[i]);
    }
    groups.push({start,count:sortedIndices.length-start,materialIndex});
  }
  if (sortedIndices.length!==indices.length) throw Error(`Lost triangles for ${name}`);
  const edges=new EdgesGeometry(clean,35);
  const centroid=path.centroid(feature);
  const region={name,polygons:polygons.length,position:push(vertices.array),normal:push(clean.getAttribute('normal').array),uv:push(uv),index:push(sortedIndices),edges:push(edges.getAttribute('position').array),groups,center:[centroid[0],-centroid[1]],bounds:[bounds.min.x,bounds.min.y,bounds.max.x,bounds.max.y]};
  if (!Array.from(vertices.array).every(Number.isFinite)) throw Error(`Non-finite geometry for ${name}`);
  regions.push(region); geometry.dispose(); clean.dispose(); edges.dispose();
}
if (new Set(regions.map(region => region.name)).size!==data.features.length) throw Error('Duplicate/missing regions');
const binary=gzipSync(Buffer.concat(chunks),{level:9,mtime:0});
const hash=createHash('sha256').update(binary).digest('hex').slice(0,12);
const filename=`india-relief-${hash}.bin.gz`;
await writeFile(new URL('../public/maps/'+filename,import.meta.url),binary);
await writeFile(new URL('../public/maps/india-relief.json',import.meta.url),JSON.stringify({version:1,sourceHash:createHash('sha256').update(source).digest('hex'),binary:'/maps/'+filename,floatCount:floatOffset,regions}));
await writeFile(new URL('../public/maps/india-poster.svg',import.meta.url),`<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 720 740" fill="none" stroke="currentColor" stroke-width=".7"><g transform="translate(360 370)">${posterPaths.map(d=>`<path d="${d}"/>`).join('')}</g></svg>`);
console.log(`Prepared ${regions.length} regions, preserved ${polygonCount} polygons; maximum ring simplification area error ${(maxAreaError*100).toFixed(2)}%; ${(binary.length/1024).toFixed(0)} KiB compressed mesh buffer.`);
