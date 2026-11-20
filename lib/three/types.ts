/** Float offsets into the offline-generated, gzip-compressed mesh buffer. */
export interface MeshSlice { offset: number; length: number }
export interface RegionMesh {
  name: string;
  polygons: number;
  position: MeshSlice;
  normal: MeshSlice;
  uv: MeshSlice;
  index: MeshSlice;
  edges: MeshSlice;
  groups: { start: number; count: number; materialIndex: number }[];
  center: [number, number];
  bounds: [number, number, number, number];
}
export interface IndiaMeshManifest {
  version: number;
  sourceHash: string;
  binary: string;
  floatCount: number;
  regions: RegionMesh[];
}
export interface IndiaScene {
  focus: (preview: string | null, selected: string | null, touring: boolean) => void;
  zoom: (direction: number) => void;
  reset: () => void;
  dispose: () => void;
}
