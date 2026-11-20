'use client';

import { useEffect, useRef } from 'react';
import { createIndiaScene } from '@/lib/three/createIndiaScene';
import type { IndiaMeshManifest, IndiaScene } from '@/lib/three/types';
import { STATE_THEMES } from '@/lib/stateThemes';

interface Props {
  preview: string | null;
  selected: string | null;
  touring: boolean;
  onHover: (state: string | null) => void;
  onSelect: (state: string) => void;
  onFailure: () => void;
  onController: (scene: IndiaScene | null) => void;
  onReady: () => void;
  motif: () => SVGSVGElement | null;
}

/** Loads prepared meshes, never GeoJSON triangulation, into one owned scene. */
export default function MapThreeView(props: Props) {
  const host = useRef<HTMLDivElement>(null);
  const scene = useRef<IndiaScene | null>(null);
  const live = useRef(props);
  live.current = props;

  useEffect(() => {
    const element = host.current;
    if (!element) return;
    const abort = new AbortController();
    let dead = false;
    const timeout = setTimeout(() => abort.abort(), 20000);
    (async () => {
      if (typeof DecompressionStream === 'undefined') throw new Error('Mesh decoding unavailable');
      const response = await fetch('/maps/india-relief.json', { signal: abort.signal });
      if (!response.ok) throw new Error('Map manifest unavailable');
      const manifest = await response.json() as IndiaMeshManifest;
      if (manifest.version !== 1 || manifest.regions.length !== Object.keys(STATE_THEMES).length || !manifest.binary.startsWith('/maps/india-relief-')) throw new Error('Invalid map manifest');
      const data = await fetch(manifest.binary, { signal: abort.signal });
      if (!data.ok || !data.body) throw new Error('Map meshes unavailable');
      const buffer = data.headers.get('content-encoding') === 'gzip'
        ? await data.arrayBuffer()
        : await new Response(data.body.pipeThrough(new DecompressionStream('gzip'))).arrayBuffer();
      if (buffer.byteLength !== manifest.floatCount * Float32Array.BYTES_PER_ELEMENT) throw new Error('Incomplete map meshes');
      if (dead) return;
      scene.current = createIndiaScene({
        host: element, manifest, buffer,
        onHover: name => live.current.onHover(name),
        onSelect: name => live.current.onSelect(name),
        onFailure: () => live.current.onFailure(),
        motif: () => live.current.motif(),
      });
      scene.current.focus(live.current.preview, live.current.selected, live.current.touring);
      live.current.onController(scene.current);
      live.current.onReady();
      clearTimeout(timeout);
    })().catch(() => { if (!dead) live.current.onFailure(); });
    return () => {
      dead = true; abort.abort(); clearTimeout(timeout);
      scene.current?.dispose(); scene.current = null;
      live.current.onController(null);
    };
  }, []);

  useEffect(() => { scene.current?.focus(props.preview, props.selected, props.touring); }, [props.preview, props.selected, props.touring]);
  return <div ref={host} className="kk-relief-canvas" data-testid="relief-canvas" />;
}
