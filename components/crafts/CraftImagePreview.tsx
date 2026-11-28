'use client';

import { useEffect, useId, useRef, useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { ArrowUpRight, Minus, Plus, RotateCcw, X } from 'lucide-react';
import { type ImageAsset } from '@/lib/states/types';

/** A native modal keeps keyboard focus contained while inspecting existing artwork. */
export default function CraftImagePreview({ image, name, href, onClose }: { image: ImageAsset; name: string; href: string; onClose: () => void }) {
  const dialog = useRef<HTMLDialogElement>(null);
  const viewport = useRef<HTMLDivElement>(null);
  const id = useId();
  const [zoom, setZoom] = useState(1);
  useEffect(() => {
    const element = dialog.current;
    const previousFocus = document.activeElement;
    const overflow = document.body.style.overflow;
    element?.showModal();
    document.body.style.overflow = 'hidden';
    return () => {
      element?.close();
      document.body.style.overflow = overflow;
      if (previousFocus instanceof HTMLElement && previousFocus.isConnected) previousFocus.focus({ preventScroll: true });
    };
  }, []);
  useEffect(() => {
    const area = viewport.current;
    if (area) area.scrollTo((area.scrollWidth - area.clientWidth) / 2, (area.scrollHeight - area.clientHeight) / 2);
  }, [zoom]);
  const reset = () => { setZoom(1); viewport.current?.scrollTo(0, 0); };
  return <dialog ref={dialog} className="kk-craft-zoom" aria-labelledby={`${id}-title`} aria-describedby={`${id}-help`} onCancel={onClose} onClick={event => { if (event.target === dialog.current) { const r = event.currentTarget.getBoundingClientRect(); if (event.clientX < r.left || event.clientX > r.right || event.clientY < r.top || event.clientY > r.bottom) onClose(); } }} onKeyDown={event => {
    if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); onClose(); return; }
    if (event.key === '+' || event.key === '=') { event.preventDefault(); setZoom(value => Math.min(3, value + .5)); }
    if (event.key === '-') { event.preventDefault(); setZoom(value => Math.max(1, value - .5)); }
  }}>
    <header><h2 id={`${id}-title`}>{name}</h2><button type="button" aria-label="Close image preview" onClick={onClose}><X size={22} aria-hidden="true" /></button></header>
    <div className="kk-craft-zoom-viewport" ref={viewport} tabIndex={0} role="region" aria-label="Artwork detail; scroll to inspect when enlarged"><div style={{ width: `${zoom * 100}%`, height: `${zoom * 100}%` }}><Image src={image.src} alt={image.alt} fill sizes="(min-width: 1024px) 1200px, 100vw" quality={90} /></div></div>
    <div className="kk-craft-zoom-controls"><button type="button" aria-label="Zoom out" disabled={zoom <= 1} onClick={() => setZoom(value => Math.max(1, value - .5))}><Minus size={20} aria-hidden="true" /></button><span role="status">{Math.round(zoom * 100)}%</span><button type="button" aria-label="Zoom in" disabled={zoom >= 3} onClick={() => setZoom(value => Math.min(3, value + .5))}><Plus size={20} aria-hidden="true" /></button><button type="button" aria-label="Reset zoom" onClick={reset}><RotateCcw size={18} aria-hidden="true" /></button><Link href={href}>Full details &amp; 3D view <ArrowUpRight size={16} aria-hidden="true" /></Link></div>
    <p id={`${id}-help`}>Zoom in to inspect the pattern. Scroll or swipe to move around the image.</p>
  </dialog>;
}
