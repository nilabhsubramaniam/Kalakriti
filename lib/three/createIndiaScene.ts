import {
  ACESFilmicToneMapping, AmbientLight, BufferAttribute, BufferGeometry, CanvasTexture, Color,
  DirectionalLight, Float32BufferAttribute, Group, LineBasicMaterial,
  LineSegments, Mesh, MeshDepthMaterial, MeshStandardMaterial, OrthographicCamera,
  PCFShadowMap, PlaneGeometry, Raycaster, Scene, ShadowMaterial,
  SRGBColorSpace, Vector2, Vector3, WebGLRenderer,
} from 'three';
import { OrbitControls } from 'three/addons/controls/OrbitControls.js';
import { BASE_THEME, themeFor } from '@/lib/stateThemes';
import { type IndiaMeshManifest, type IndiaScene } from '@/lib/three/types';

interface SceneOptions {
  host: HTMLDivElement;
  manifest: IndiaMeshManifest;
  buffer: ArrayBuffer;
  onHover: (name: string | null) => void;
  onSelect: (name: string) => void;
  onFailure: () => void;
  motif: () => SVGSVGElement | null;
}

/** Owns one WebGL context. No business data or React state is held by the scene. */
export function createIndiaScene(options: SceneOptions): IndiaScene {
  const { host, manifest, buffer, onHover, onSelect, onFailure, motif } = options;
  const renderer = new WebGLRenderer({ antialias: true, alpha: true, powerPreference: 'low-power' });
  renderer.setPixelRatio(Math.min(devicePixelRatio || 1, 1.5));
  renderer.outputColorSpace = SRGBColorSpace;
  renderer.toneMapping = ACESFilmicToneMapping;
  renderer.toneMappingExposure = .9;
  renderer.shadowMap.enabled = true;
  renderer.shadowMap.type = PCFShadowMap;
  renderer.domElement.setAttribute('aria-hidden', 'true');
  host.appendChild(renderer.domElement);
  const scene = new Scene();
  const camera = new OrthographicCamera(-450, 450, 450, -450, .1, 4000);
  camera.position.set(-60, 900, 700);
  const controls = new OrbitControls(camera, renderer.domElement);
  controls.enablePan = false;
  controls.enableRotate = !matchMedia('(pointer: coarse)').matches;
  renderer.domElement.style.touchAction = 'pan-y';
  controls.enableDamping = false;
  controls.enableZoom = false; // Let the document scroll; explicit zoom controls are outside WebGL.
  controls.minPolarAngle = .16;
  controls.maxPolarAngle = .9;
  controls.minAzimuthAngle = -.4;
  controls.maxAzimuthAngle = .4;
  controls.target.set(0, 0, 0);
  controls.update();
  scene.add(new AmbientLight(BASE_THEME.paper, 1.05));
  const sun = new DirectionalLight(BASE_THEME.paper, 2.4);
  sun.position.set(-350, 900, 450);
  sun.castShadow = true;
  sun.shadow.mapSize.set(1024, 1024);
  sun.shadow.camera.left = -500;
  sun.shadow.camera.right = 500;
  sun.shadow.camera.top = 500;
  sun.shadow.camera.bottom = -500;
  sun.shadow.camera.far = 2000;
  sun.shadow.normalBias = .5;
  sun.shadow.bias = -.0002;
  sun.shadow.radius = 4;
  scene.add(sun);
  const root = new Group();
  root.rotation.x = -Math.PI / 2;
  scene.add(root);
  const groundGeometry = new PlaneGeometry(2200, 2200);
  const groundMaterial = new ShadowMaterial({ color: BASE_THEME.ink, opacity: .2 });
  const ground = new Mesh(groundGeometry, groundMaterial);
  ground.rotation.x = -Math.PI / 2;
  ground.position.y = -1;
  ground.receiveShadow = true;
  scene.add(ground);
  const floats = new Float32Array(buffer);
  const slice = (attribute: { offset: number; length: number }) => floats.subarray(attribute.offset, attribute.offset + attribute.length);
  const borderMaterial = new LineBasicMaterial({ color: BASE_THEME.paper, transparent: true, opacity: .76 });
  const grainCanvas = document.createElement('canvas');
  grainCanvas.width = 256; grainCanvas.height = 256;
  const grainContext = grainCanvas.getContext('2d');
  if (grainContext) {
    const pixels = grainContext.createImageData(256, 256);
    let seed = 5489;
    for (let i = 0; i < pixels.data.length; i += 4) {
      seed = (seed * 1664525 + 1013904223) >>> 0;
      const shade = 230 + seed % 26;
      pixels.data[i] = pixels.data[i+1] = pixels.data[i+2] = shade;
      pixels.data[i+3] = 255;
    }
    grainContext.putImageData(pixels, 0, 0);
  }
  const paperTexture = new CanvasTexture(grainCanvas);
  paperTexture.colorSpace = SRGBColorSpace;
  const shadowDepthMaterial = new MeshDepthMaterial();
  const tiles = manifest.regions.map(region => {
    const geometry = new BufferGeometry();
    geometry.setAttribute('position', new Float32BufferAttribute(slice(region.position), 3));
    geometry.setAttribute('normal', new Float32BufferAttribute(slice(region.normal), 3));
    geometry.setAttribute('uv', new Float32BufferAttribute(slice(region.uv), 2));
    geometry.setIndex(new BufferAttribute(Uint32Array.from(slice(region.index)), 1));
    region.groups.forEach(group => geometry.addGroup(group.start, group.count, group.materialIndex));
    geometry.computeBoundingSphere();
    const accent = new Color(themeFor(region.name).colors.accent);
    const base = accent.clone().lerp(new Color(BASE_THEME.paper), .15);
    const top = new MeshStandardMaterial({ color: base, map: paperTexture, roughness: .93, metalness: .02 });
    const side = new MeshStandardMaterial({ color: accent.clone().lerp(new Color(themeFor(region.name).colors.ink), .28), roughness: .86, metalness: .03 });
    const mesh = new Mesh(geometry, [top, side]);
    mesh.name = region.name;
    mesh.customDepthMaterial = shadowDepthMaterial;
    mesh.castShadow = true;
    mesh.receiveShadow = true;
    const outlineGeometry = new BufferGeometry();
    geometry.computeBoundingBox();
    const topZ = geometry.boundingBox!.max.z;
    const edges = slice(region.edges);
    const rim: number[] = [];
    // Keep the top perimeter; vertical tessellation edges made solid sides look striped.
    for (let i = 0; i < edges.length; i += 6) {
      if (edges[i + 2] >= topZ - .001 && edges[i + 5] >= topZ - .001) {
        for (let j = 0; j < 6; j++) rim.push(edges[i + j]);
      }
    }
    outlineGeometry.setAttribute('position', new Float32BufferAttribute(rim, 3));
    const outline = new LineSegments(outlineGeometry, borderMaterial);
    const group = new Group();
    group.add(mesh, outline);
    group.scale.z = 1.45;
    root.add(group);
    // Pick against the resting footprint: lifted tiles cannot flicker between neighbours.
    // Three's Raycaster tests layers, not visibility; these share existing GPU resources.
    const pickMesh = new Mesh(geometry, [top, side]);
    pickMesh.name = region.name;
    pickMesh.visible = false;
    pickMesh.scale.z = 1.45;
    root.add(pickMesh);
    return { region, geometry, outlineGeometry, mesh, pickMesh, group, top, side, base, accent, target: 0 };
  });
  const meshes = tiles.map(tile => tile.pickMesh);
  const raycaster = new Raycaster();
  const pointer = new Vector2();
  const motion = matchMedia('(prefers-reduced-motion: reduce)');
  let dead = false;
  let inView = true;
  let raf = 0;
  let lastTime = 0;
  let framePreview: string | null = null;
  let focusName: string | null = null;
  let selectedName: string | null = null;
  let touring = false;
  let pointerStart: { x: number; y: number } | null = null;
  let dragged = false;
  const textures = new Map<string, CanvasTexture>();
  const loadingTextures = new Set<string>();
  const pendingImages = new Set<HTMLImageElement>();
  const projectedTarget = new Vector3();
  const target = new Vector3();
  let targetZoom = 1;
  let manualZoom = 1;

  function draw(now: number) {
    raf = 0;
    if (dead || !inView || document.hidden) return;
    const ease = motion.matches ? 1 : 1 - Math.exp(-Math.min(now - (lastTime || now - 16), 64) / 90);
    lastTime = now;
    let moving = false;
    for (const tile of tiles) {
      const isFocus = tile.region.name === focusName;
      const isSelected = tile.region.name === selectedName;
      tile.target = isFocus ? 18 : isSelected ? 8 : 0;
      tile.group.position.z += (tile.target - tile.group.position.z) * ease;
      if (Math.abs(tile.target - tile.group.position.z) > .02) moving = true;
      const desired = isFocus || isSelected ? tile.accent : tile.base;
      tile.top.color.lerp(desired, ease);
      if (Math.abs(tile.top.color.r - desired.r) + Math.abs(tile.top.color.g - desired.g) + Math.abs(tile.top.color.b - desired.b) > .002) moving = true;
    }
    controls.target.lerp(target, ease);
    if (controls.target.distanceTo(target) > .02) moving = true;
    camera.zoom += (targetZoom - camera.zoom) * ease;
    if (Math.abs(targetZoom - camera.zoom) > .001) moving = true;
    camera.updateProjectionMatrix();
    controls.update();
    renderer.render(scene, camera);
    if (moving) invalidate();
  }
  function invalidate() {
    if (!dead && inView && !document.hidden && !raf) raf = requestAnimationFrame(draw);
  }
  function resize() {
    const { width, height } = host.getBoundingClientRect();
    if (!width || !height) return;
    const aspect = width / height;
    // A canonical projected map makes resize a camera refit, never new geometry.
    const halfHeight = Math.max(330, 345 / aspect);
    camera.left = -halfHeight * aspect;
    camera.right = halfHeight * aspect;
    camera.top = halfHeight;
    camera.bottom = -halfHeight;
    camera.updateProjectionMatrix();
    renderer.setSize(width, height, false);
    invalidate();
  }
  function hit(x: number, y: number) {
    const rect = host.getBoundingClientRect();
    pointer.set((x - rect.left) / rect.width * 2 - 1, -(y - rect.top) / rect.height * 2 + 1);
    raycaster.setFromCamera(pointer, camera);
    return raycaster.intersectObjects(meshes, false)[0]?.object.name ?? null;
  }
  function pointerMove(event: PointerEvent) {
    if (pointerStart && Math.hypot(event.clientX-pointerStart.x, event.clientY-pointerStart.y)>7) dragged = true;
    if (event.pointerType === 'touch' || pointerStart) return;
    const name = hit(event.clientX, event.clientY);
    host.style.cursor = name ? 'pointer' : 'grab';
    if (name !== framePreview) { framePreview = name; onHover(name); }
  }
  function pointerDown(event: PointerEvent) { if (!event.isPrimary || event.button !== 0) return; pointerStart = { x: event.clientX, y: event.clientY }; dragged = false; }
  function pointerUp(event: PointerEvent) {
    if (!dragged && pointerStart) {
      const name = hit(event.clientX, event.clientY);
      if (name) onSelect(name);
    }
    pointerStart = null;
  }
  function pointerLeave() { pointerStart = null; framePreview = null; onHover(null); }
  function contextLost(event: Event) { event.preventDefault(); onFailure(); }
  function visibility() { lastTime = 0; invalidate(); }
  function reducedMotion() { invalidate(); }
  const observer = new ResizeObserver(resize);
  observer.observe(host);
  const intersection = new IntersectionObserver(entries => {
    inView = entries.some(entry => entry.isIntersecting);
    if (!inView && raf) { cancelAnimationFrame(raf); raf = 0; }
    if (!inView && touring) onHover(null);
    lastTime = 0;
    invalidate();
  });
  intersection.observe(host);
  renderer.domElement.addEventListener('pointermove', pointerMove);
  renderer.domElement.addEventListener('pointerdown', pointerDown);
  renderer.domElement.addEventListener('pointerup', pointerUp);
  renderer.domElement.addEventListener('pointerleave', pointerLeave);
  renderer.domElement.addEventListener('pointercancel', pointerLeave);
  renderer.domElement.addEventListener('webglcontextlost', contextLost);
  document.addEventListener('visibilitychange', visibility);
  motion.addEventListener('change', reducedMotion);
  controls.addEventListener('change', invalidate);
  resize();

  function applyMotif(name: string) {
    const tile = tiles.find(value => value.region.name === name);
    const svg = motif();
    if (!tile || !svg || textures.has(name) || loadingTextures.has(name)) return;
    loadingTextures.add(name);
    const clone = svg.cloneNode(true) as SVGSVGElement;
    clone.setAttribute('xmlns', 'http://www.w3.org/2000/svg');
    clone.setAttribute('width', '256'); clone.setAttribute('height', '256');
    clone.setAttribute('stroke-width', '2.5');
    clone.setAttribute('stroke', themeFor(name).colors.ink);
    clone.setAttribute('color', themeFor(name).colors.ink);
    clone.removeAttribute('class'); clone.removeAttribute('style');
    const image = new Image();
    pendingImages.add(image);
    image.onload = () => {
      pendingImages.delete(image);
      loadingTextures.delete(name);
      if (dead) return;
      const canvas = document.createElement('canvas'); canvas.width = 256; canvas.height = 256;
      const ctx = canvas.getContext('2d');
      if (!ctx) return;
      ctx.drawImage(grainCanvas, 0, 0);
      ctx.globalAlpha = .5; ctx.drawImage(image, 25, 25, 206, 206);
      const texture = new CanvasTexture(canvas); texture.colorSpace = SRGBColorSpace;
      textures.set(name, texture);
      if (focusName === name) { tile.top.map = texture; tile.top.needsUpdate = true; }
      // The whole registry is bounded at 36 lightweight 256px motif textures.
      invalidate();
    };
    image.onerror = () => { pendingImages.delete(image); loadingTextures.delete(name); };
    image.src = `data:image/svg+xml;charset=utf-8,${encodeURIComponent(new XMLSerializer().serializeToString(clone))}`;
  }

  return {
    focus(preview, selected, isTouring) {
      focusName = preview; selectedName = selected; touring = isTouring;
      tiles.forEach(tile => {
        const texture = tile.region.name === preview ? textures.get(tile.region.name) ?? paperTexture : paperTexture;
        if (tile.top.map !== texture) { tile.top.map = texture; tile.top.needsUpdate = true; }
      });
      if (preview) applyMotif(preview);
      const destination = touring ? tiles.find(tile => tile.region.name === selected) : null;
      target.set(0, 0, 0);
      if (destination) {
        projectedTarget.set(destination.region.center[0] * .1, 0, -destination.region.center[1] * .1);
        target.copy(projectedTarget);
      }
      targetZoom = touring ? Math.max(manualZoom, 1.06) : manualZoom;
      invalidate();
    },
    zoom(direction) { manualZoom = Math.max(.8, Math.min(1.8, manualZoom + direction * .15)); targetZoom = manualZoom; invalidate(); },
    reset() { controls.reset(); target.set(0, 0, 0); manualZoom = 1; targetZoom = 1; invalidate(); },
    dispose() {
      dead = true;
      cancelAnimationFrame(raf);
      observer.disconnect(); intersection.disconnect();
      controls.removeEventListener('change', invalidate); controls.dispose();
      document.removeEventListener('visibilitychange', visibility);
      motion.removeEventListener('change', reducedMotion);
      renderer.domElement.removeEventListener('pointermove', pointerMove);
      renderer.domElement.removeEventListener('pointerdown', pointerDown);
      renderer.domElement.removeEventListener('pointerup', pointerUp);
      renderer.domElement.removeEventListener('pointerleave', pointerLeave);
      renderer.domElement.removeEventListener('pointercancel', pointerLeave);
      renderer.domElement.removeEventListener('webglcontextlost', contextLost);
      for (const image of pendingImages) { image.onload = null; image.onerror = null; image.src = ''; }
      textures.forEach(texture => texture.dispose());
      tiles.forEach(tile => { tile.geometry.dispose(); tile.outlineGeometry.dispose(); tile.top.dispose(); tile.side.dispose(); });
      paperTexture.dispose(); shadowDepthMaterial.dispose();
      groundGeometry.dispose(); groundMaterial.dispose(); borderMaterial.dispose();
      sun.shadow.dispose(); scene.clear(); renderer.renderLists.dispose(); renderer.dispose(); renderer.forceContextLoss(); renderer.domElement.remove();
      host.style.cursor = '';
    },
  };
}
