'use client';

import Image from 'next/image';
import { MapPin, Pause, Play } from 'lucide-react';
import { useEffect, useState } from 'react';

const SCENES = [
  { src: '/images/stitching-courtyard.webp', place: 'The living craft of India', detail: 'Stitched, woven, remembered.', position: '48% center' },
  { src: '/images/mithila-courtyard.webp', place: 'Mithila · Bihar', detail: 'Stories painted by hand.', position: '65% center' },
  { src: '/images/tp-hero.webp', place: 'Tripura', detail: 'Woven cloth. Bamboo. Cane.', position: 'center' },
  { src: '/images/sk-hero.webp', place: 'Sikkim', detail: 'Mountain looms and material stories.', position: 'center' },
  { src: '/images/mz-hero.webp', place: 'Mizoram', detail: 'A rhythm in every woven band.', position: 'center' },
];

/** Preload one scene ahead; motion never replaces or moves the account form. */
export default function AccountBackdrop() {
  const [active, setActive] = useState(0);
  const [mounted, setMounted] = useState([0, 1]);
  const [ready, setReady] = useState<number[]>([]);
  const [requested, setRequested] = useState<number | null>(null);
  const [paused, setPaused] = useState(false);
  const [reduced, setReduced] = useState(true);
  const [visible, setVisible] = useState(true);
  const [interacting, setInteracting] = useState(false);

  useEffect(() => {
    const media = window.matchMedia('(prefers-reduced-motion: reduce)');
    const motion = () => setReduced(media.matches);
    const visibility = () => setVisible(!document.hidden);
    motion(); visibility();
    media.addEventListener('change', motion);
    document.addEventListener('visibilitychange', visibility);
    return () => {
      media.removeEventListener('change', motion);
      document.removeEventListener('visibilitychange', visibility);
    };
  }, []);

  useEffect(() => {
    const next = (active + 1) % SCENES.length;
    setMounted(current => current.includes(next) ? current : [...current, next]);
  }, [active]);

  useEffect(() => {
    if (requested !== null && ready.includes(requested)) {
      setActive(requested);
      setRequested(null);
    }
  }, [ready, requested]);

  useEffect(() => {
    if (paused || reduced || !visible || interacting) return;
    const timer = window.setInterval(() => {
      const next = (active + 1) % SCENES.length;
      if (ready.includes(next)) setActive(next);
    }, 8000);
    return () => window.clearInterval(timer);
  }, [active, paused, reduced, visible, interacting, ready]);

  const choose = (index: number) => {
    setPaused(true);
    setMounted(current => current.includes(index) ? current : [...current, index]);
    setRequested(index);
  };

  return <>
    <div className="kk-auth-background" aria-hidden="true">
      {SCENES.map((scene, index) => <div key={scene.src} className="kk-auth-scene" data-active={index === active}>
        {mounted.includes(index) && <Image src={scene.src} alt="" fill sizes="100vw" priority={index === 0} loading={index === 0 ? undefined : 'eager'} fetchPriority={index === 0 ? 'high' : 'low'} style={{ objectPosition: scene.position }} onLoad={() => setReady(current => current.includes(index) ? current : [...current, index])} />}
      </div>)}
      <div className="kk-auth-shade" />
    </div>
    <aside className="kk-auth-story" aria-label="Kalakriti craft showcase">
      <p className="kk-auth-story-kicker">Craft · Culture · Community</p>
      <p className="kk-auth-story-title">A world of craft.<br /><em>A place to belong.</em></p>
      <p className="kk-auth-story-lead">From Mithila’s painted courtyards to the mountain looms of Sikkim. Discover the places, skills and stories behind the details.</p>
      <div className="kk-auth-scene-caption" aria-live="off">
        <p><MapPin size={16} aria-hidden="true" />{SCENES[active].place}</p>
        <span>{SCENES[active].detail}</span>
      </div>
      <div className="kk-auth-carousel-controls" role="group" aria-label="Background slideshow" onMouseEnter={() => setInteracting(true)} onMouseLeave={() => setInteracting(false)} onFocusCapture={() => setInteracting(true)} onBlurCapture={event => { if (!event.currentTarget.contains(event.relatedTarget)) setInteracting(false); }}>
        <div className="kk-auth-slide-selectors">{SCENES.map((scene, index) => <button key={scene.src} type="button" aria-label={`Show ${scene.place}`} aria-pressed={active === index} onClick={() => choose(index)}><span /></button>)}</div>
        <span className="kk-auth-carousel-divider" aria-hidden="true" />
        <button className="kk-auth-motion-toggle" type="button" disabled={reduced} aria-label={reduced ? 'Autoplay off: reduced motion preference' : paused ? 'Play background slideshow' : 'Pause background slideshow'} onClick={() => { setPaused(current => !current); setInteracting(false); setRequested(null); }}>
          {paused || reduced ? <Play size={15} aria-hidden="true" /> : <Pause size={15} aria-hidden="true" />}<span>{reduced ? 'Motion off' : paused ? 'Play' : 'Pause'}</span>
        </button>
      </div>
      <p className="kk-auth-scene-credit">Craft illustrations from our regional chapters</p>
    </aside>
  </>;
}
