'use client';

import { ArrowLeft, ArrowUpRight, ChevronLeft, ChevronRight, Minus, Pause, Play, Plus, RotateCcw } from 'lucide-react';

import dynamic from 'next/dynamic';
import Link from 'next/link';
import { useCallback, useEffect, useRef, useState } from 'react';
import { displayName, REGIONS, STATE_THEMES, TOUR_ORDER, themeFor } from '@/lib/stateThemes';
import { slugForState } from '@/lib/states/slugs';
import { stateThemeVars } from '@/lib/states/theme';
import { useRegionStore } from '@/lib/store/useRegionStore';
import { useCulturalShowcase } from '@/lib/store/useCulturalShowcase';
import { type IndiaScene } from '@/lib/three/types';
import { Motif } from '@/components/ornament/Motifs';
import SelectField from '@/components/shared/SelectField';
import RegionPreview from '@/components/landing/RegionPreview';

const MapThreeView = dynamic(() => import('@/components/landing/MapThreeView'), { ssr: false });
const IndiaMap = dynamic(() => import('@/components/landing/IndiaMap'), {
  ssr: false,
  loading: () => <p className="kk-relief-loading" role="status">Opening the cultural map…</p>,
});
const quickStates = ['Bihar', 'Rajasthan', 'West Bengal', 'Kerala'];

/** Both renderers share one selection, one theme preview and one tour clock. */
export default function RegionalDiscovery() {
  const selected = useRegionStore(s => s.selected);
  const select = useRegionStore(s => s.select);
  const [hovered, setHovered] = useState<string | null>(null);
  const [mode, setMode] = useState<'3d' | '2d'>('3d');
  const [ready, setReady] = useState(false);
  const [failure, setFailure] = useState(false);
  const [visible, setVisible] = useState(false);
  const [activated, setActivated] = useState(false);
  const section = useRef<HTMLElement>(null);
  const scene = useRef<IndiaScene | null>(null);
  const previewCard = useRef<HTMLDivElement>(null);
  const hoverClear = useRef<ReturnType<typeof setTimeout> | null>(null);
  const showcase = useCulturalShowcase(visible && (mode === '2d' || ready));
  const region = (showcase.running ? selected : hovered ?? selected) ?? 'Bihar';
  const theme = themeFor(region);
  const keepPreview = useCallback(() => {
    if (hoverClear.current) clearTimeout(hoverClear.current);
    hoverClear.current = null;
  }, []);
  const choose = useCallback((name: string) => { keepPreview(); setHovered(null); select(name); }, [keepPreview, select]);
  const preview = useCallback((name: string | null) => {
    keepPreview();
    if (name) { setHovered(name); useRegionStore.getState().stopTour(); }
    else hoverClear.current = setTimeout(() => {
      hoverClear.current = null;
      // Native canvas leave can arrive after React's card-enter event.
      const card = previewCard.current;
      if (!card?.matches(':hover') && !card?.contains(document.activeElement)) setHovered(null);
    }, 300);
  }, [keepPreview]);

  useEffect(() => () => keepPreview(), [keepPreview]);
  const controller = useCallback((value: IndiaScene | null) => { scene.current = value; }, []);
  const onReady = useCallback(() => setReady(true), []);
  const fallback = useCallback(() => { setMode('2d'); setReady(false); setFailure(true); setHovered(null); }, []);
  const motif = useCallback(() => previewCard.current?.querySelector<SVGSVGElement>('[data-region-motif] svg') ?? null, []);

  useEffect(() => {
    const element = section.current;
    if (!element) return;
    const observer = new IntersectionObserver(entries => {
      const isVisible = entries.some(entry => entry.isIntersecting);
      setVisible(isVisible);
      if (isVisible) setActivated(true);
    }, { rootMargin: '100px' });
    observer.observe(element);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const fromHash = () => {
      let name: string;
      try { name = decodeURIComponent(location.hash.slice(1)); } catch { return; }
      if (STATE_THEMES[name]) {
        choose(name);
        section.current?.scrollIntoView({ behavior: 'instant', block: 'start' });
      }
      else if (!name || name === 'heritage') select(null);
    };
    fromHash();
    window.addEventListener('hashchange', fromHash);
    return () => window.removeEventListener('hashchange', fromHash);
  }, [choose, select]);

  useEffect(() => {
    // Leave normal section anchors intact when no state has been selected.
    if (selected) window.history.replaceState(null, '', `#${encodeURIComponent(selected)}`);
  }, [selected]);

  useEffect(() => {
    const escape = (event: KeyboardEvent) => {
      if (event.target instanceof Element && event.target.closest('.nav')) return;
      if (event.key === 'Escape') { select(null); setHovered(null); scene.current?.reset(); }
    };
    window.addEventListener('keydown', escape);
    return () => window.removeEventListener('keydown', escape);
  }, [select]);

  const reset = () => {
    keepPreview(); select(null); setHovered(null); scene.current?.reset();
    history.replaceState(null, '', location.pathname + location.search + '#heritage');
  };
  const changeMode = (next: '3d' | '2d') => {
    showcase.stop(); setHovered(null); setReady(false); setFailure(false); setMode(next);
  };

  return <section ref={section} className="kk-discovery-hero kk-explore-page" id="heritage" aria-labelledby="heritage-title" style={stateThemeVars(region)} data-map-mode={mode}>
    <header className="kk-discovery-intro">
      <div><Link className="kk-explore-back" href="/"><ArrowLeft className="kk-ui-icon" size={16} aria-hidden="true" /> Back to Kalakriti</Link><p className="kk-home-eyebrow">Explore India · One region at a time</p><h1 id="heritage-title">An atlas of <em>living traditions.</em></h1></div>
      <p>Follow the map to the people,<br />materials and traditions behind the craft.</p>
    </header>
    <div className="kk-discovery-workspace">
      <div className="kk-discovery-controls">
        <div className="kk-region-picker"><label htmlFor="map-region">Choose a state</label><SelectField aria-label="Choose a state" id="map-region" value={selected ?? ''} onChange={e => e.target.value ? choose(e.target.value) : reset()}><option value="">All of India</option>{REGIONS.map(group => <optgroup key={group.label} label={group.label}>{group.states.map(state => <option key={state} value={state}>{displayName(state)}</option>)}</optgroup>)}</SelectField></div>
        <div className="kk-showcase" data-showcase-control>
          <button type="button" className="kk-showcase-step" aria-label="Previous showcase state" onClick={() => showcase.step(-1)}><ChevronLeft className="kk-ui-icon" size={16} aria-hidden="true" /></button>
          <button type="button" className="kk-showcase-play" onClick={showcase.toggle} aria-pressed={showcase.running}>{showcase.running ? <Pause className="kk-ui-icon" size={16} aria-hidden="true" /> : <Play className="kk-ui-icon" size={16} aria-hidden="true" />}{showcase.running ? 'Pause showcase' : 'Cultural showcase'}</button>
          <button type="button" className="kk-showcase-step" aria-label="Next showcase state" onClick={() => showcase.step(1)}><ChevronRight className="kk-ui-icon" size={16} aria-hidden="true" /></button>
          <span className="kk-showcase-progress" aria-label="Showcase progress">{Math.max(showcase.index + 1, 1)} / {TOUR_ORDER.length}</span>
        </div>
      </div>
      <div className="kk-discovery-body">
        <div className="kk-discovery-map" aria-label="Interactive regional discovery">
          <div className="kk-map-topline"><span><span className="kk-map-live-dot" />{hovered ? 'Previewing' : selected ? 'Exploring' : 'Our first chapter'} <strong>{displayName(region)}</strong></span><button type="button" onClick={reset} aria-label="Reset to all of India"><RotateCcw className="kk-ui-icon" size={16} aria-hidden="true" /> <span>All India</span></button></div>
          <div className="kk-relief-stage">
            {mode === '3d' && <>
              {/* eslint-disable-next-line @next/next/no-img-element */}
              {!ready && <img className="kk-relief-poster" src="/maps/india-poster.svg" width="720" height="740" alt="" aria-hidden="true" />}
              {activated && <MapThreeView preview={region} selected={selected} touring={showcase.running} onHover={preview} onSelect={choose} onFailure={fallback} onController={controller} onReady={onReady} motif={motif} />}
              {!ready && <p className="kk-relief-loading" role="status">Preparing your journey…</p>}
              <div className="kk-relief-zoom" aria-label="3D map zoom"><button type="button" onClick={() => scene.current?.zoom(1)} disabled={!ready} aria-label="Zoom in"><Plus className="kk-ui-icon" size={16} aria-hidden="true" /></button><button type="button" onClick={() => scene.current?.zoom(-1)} disabled={!ready} aria-label="Zoom out"><Minus className="kk-ui-icon" size={16} aria-hidden="true" /></button></div>
              <span className="kk-relief-hint">Hover to discover · Tap or click to select<br /><small>Drag gently to change your view</small></span>
            </>}
            {mode === '2d' && <IndiaMap embedded managed onPreview={preview} />}
          </div>
          <div className="kk-map-bottomline"><p><span /> State colours follow their regional craft palettes</p><div className="kk-map-modes" aria-label="Map display"><button type="button" aria-pressed={mode === '3d'} onClick={() => changeMode('3d')}>3D map</button><button type="button" aria-pressed={mode === '2d'} onClick={() => changeMode('2d')}>2D map</button></div></div>
          <div className="kk-quick-regions" aria-label="Featured regions">{quickStates.map(state => <button key={state} type="button" onClick={() => choose(state)} aria-pressed={selected === state}>{displayName(state)}</button>)}</div>
          {failure && <p className="kk-map-fallback" role="status">The 3D view isn’t available right now. The interactive 2D map and region selector remain available.</p>}
        </div>
        <div ref={previewCard} className="kk-discovery-preview" onPointerEnter={keepPreview} onPointerLeave={() => preview(null)} onFocusCapture={keepPreview} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) preview(null); }}><RegionPreview region={region} previewing={Boolean(hovered && hovered !== selected)} touring={showcase.running} onSelect={() => choose(region)} /></div>
      </div>
      <p className="kk-sr-only" role="status" aria-live="polite">{selected ? `${displayName(selected)} selected. Explore its traditions in the state preview.` : 'All of India. Bihar is our featured first chapter.'}</p>
      <div className="kk-discovery-caption"><span><Motif name={theme.motif} size={19} />{theme.script.roman} <span aria-hidden="true">·</span> {theme.script.meaning}</span><Link href={`/state/${slugForState(region)}`}>The stories of {displayName(region)} <ArrowUpRight className="kk-ui-icon" size={16} aria-hidden="true" /></Link></div>
    </div>
  </section>;
}
