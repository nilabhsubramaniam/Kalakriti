'use client';
import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import { Box, ImageIcon, RotateCcw, RotateCw, ZoomIn, ZoomOut, RefreshCcw } from 'lucide-react';
import { productViews, type ProductCrop, type ProductView } from '@/lib/commerce/productDetails';
import type { ProductScene } from '@/lib/three/createProductScene';

export default function ProductGallery({ source, name, crop, imageAspect, detailLabel, credit }: { source: string; name: string; crop: ProductCrop; imageAspect: number; detailLabel: string; credit?: string }) {
  const host = useRef<HTMLDivElement>(null);
  const controller = useRef<ProductScene | null>(null);
  const [mode, setMode] = useState<'image' | '3d'>('image');
  const [status, setStatus] = useState<'idle' | 'loading' | 'ready' | 'failed'>('idle');
  const [active, setActive] = useState('front');
  const helpId = useId();
  useEffect(() => {
    if (mode !== '3d' || !host.current) return;
    const element = host.current;
    let dead = false;
    let owned: ProductScene | null = null;
    setStatus('loading'); setActive('front');
    const fail = () => { if (!dead) { owned?.dispose(); controller.current = null; setStatus('failed'); setMode('image'); } };
    const timeout = setTimeout(fail, 20000);
    import('@/lib/three/createProductScene').then(({ createProductScene }) => {
      if (dead) return;
      owned = createProductScene(element, source, crop, imageAspect, () => { if (!dead) { clearTimeout(timeout); setStatus('ready'); } }, fail, () => { if (!dead) setActive('custom'); });
      controller.current = owned;
    }).catch(fail);
    return () => { dead = true; clearTimeout(timeout); owned?.dispose(); controller.current = null; };
  }, [mode, source, crop, imageAspect]);
  const view = (next: ProductView) => { controller.current?.view(next); setActive(next.id); };
  return <section className="kk-painting-gallery" aria-label={`${name} gallery`}>
    <div className="kk-painting-mode" role="group" aria-label="Viewing mode"><button type="button" aria-pressed={mode === 'image'} onClick={() => { setMode('image'); setStatus('idle'); }}><ImageIcon size={17} aria-hidden="true" />Image</button><button type="button" aria-pressed={mode === '3d'} onClick={() => setMode('3d')}><Box size={17} aria-hidden="true" />Close-up view</button></div>
    <div className="kk-painting-stage" style={{ aspectRatio: imageAspect * crop.width / crop.height }} aria-busy={status === 'loading'}>
      {(mode === 'image' || status !== 'ready') && <Image src={source} alt={name} fill priority sizes="(min-width: 901px) 60vw, 100vw" className="kk-painting-poster" />}
      {mode === '3d' && <div className="kk-painting-canvas" ref={host} tabIndex={status === 'ready' ? 0 : -1} role="group" aria-label="Interactive product view" aria-describedby={helpId} onKeyDown={event => {
        if (status !== 'ready') return;
        if (['ArrowLeft', 'ArrowRight', '+', '=', '-', 'Home'].includes(event.key)) event.preventDefault();
        if (event.key === 'ArrowLeft' || event.key === 'ArrowRight') controller.current?.rotate(event.key === 'ArrowLeft' ? -1 : 1);
        if (event.key === '+' || event.key === '=') controller.current?.zoom(1);
        if (event.key === '-') controller.current?.zoom(-1);
        if (event.key === 'Home') view(productViews[0]);
      }} />}
      {status === 'loading' && <span className="kk-painting-loading" role="status">Opening the close-up view…</span>}
    </div>
    {mode === '3d' && <><div className="kk-painting-views" role="group" aria-label="Product viewing angles">{productViews.map(item => <button key={item.id} type="button" aria-pressed={active === item.id} disabled={status !== 'ready'} onClick={() => view(item)}>{item.id === 'detail' ? detailLabel : item.label}</button>)}</div><div className="kk-painting-tools" role="group" aria-label="Close-up controls">
      <button type="button" aria-label="Rotate product left" disabled={status !== 'ready'} onClick={() => controller.current?.rotate(-1)}><RotateCcw size={19} /></button><button type="button" aria-label="Rotate product right" disabled={status !== 'ready'} onClick={() => controller.current?.rotate(1)}><RotateCw size={19} /></button><button type="button" aria-label="Zoom in on product" disabled={status !== 'ready'} onClick={() => controller.current?.zoom(1)}><ZoomIn size={19} /></button><button type="button" aria-label="Zoom out of product" disabled={status !== 'ready'} onClick={() => controller.current?.zoom(-1)}><ZoomOut size={19} /></button><button type="button" aria-label="Reset product view" disabled={status !== 'ready'} onClick={() => view(productViews[0])}><RefreshCcw size={19} /></button>
    </div><p className="kk-painting-help" id={helpId}>Drag to turn. Choose an angle to inspect the work step by step. Keyboard: left/right to turn, +/− to zoom, Home to reset.</p><span className="kk-sr-only" role="status">{status === 'ready' ? `${active === 'detail' ? detailLabel : productViews.find(item => item.id === active)?.label ?? 'Custom angle'}. Close-up view ready.` : ''}</span></>}
    {credit && <p className="kk-painting-credit">{credit}. Not a photograph of the actual piece.</p>}
    {status === 'failed' && <p className="kk-painting-help" role="status">The close-up view couldn’t open. You can still explore the image and product details.</p>}
  </section>;
}
