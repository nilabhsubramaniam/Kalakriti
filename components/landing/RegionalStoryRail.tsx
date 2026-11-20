'use client';

import { type ReactNode, useEffect, useId, useRef, useState } from 'react';

/** Server-rendered stories remain available through native scrolling. */
export default function RegionalStoryRail({ children, count }: { children: ReactNode; count: number }) {
  const track = useRef<HTMLDivElement>(null);
  const container = useRef<HTMLDivElement>(null);
  const id = useId();
  const [paused, setPaused] = useState(false);
  const [reducedMotion, setReducedMotion] = useState(false);

  useEffect(() => {
    const element = track.current;
    const wrapper = container.current;
    if (!element || !wrapper) return;
    const preference = matchMedia('(prefers-reduced-motion: reduce)');
    const updatePreference = () => setReducedMotion(preference.matches);
    updatePreference();
    preference.addEventListener('change', updatePreference);
    let visible = false;
    let interactingUntil = 0;
    const observer = new IntersectionObserver(entries => {
      visible = entries[0]?.isIntersecting ?? false;
    }, { threshold: 0.25 });
    observer.observe(element);
    const defer = () => { interactingUntil = Date.now() + 8000; };
    element.addEventListener('pointerdown', defer, { passive: true });
    element.addEventListener('wheel', defer, { passive: true });
    element.addEventListener('keydown', defer);
    const timer = window.setInterval(() => {
      if (paused || preference.matches || !visible || document.hidden || wrapper.matches(':hover') || wrapper.contains(document.activeElement) || Date.now() < interactingUntil) return;
      const card = element.firstElementChild?.getBoundingClientRect();
      if (!card || element.scrollWidth <= element.clientWidth) return;
      const gap = Number.parseFloat(getComputedStyle(element).columnGap) || 0;
      const atEnd = element.scrollLeft + element.clientWidth >= element.scrollWidth - 6;
      element.scrollTo({ left: atEnd ? 0 : element.scrollLeft + card.width + gap, behavior: 'smooth' });
    }, 6000);
    return () => {
      window.clearInterval(timer);
      observer.disconnect();
      preference.removeEventListener('change', updatePreference);
      element.removeEventListener('pointerdown', defer);
      element.removeEventListener('wheel', defer);
      element.removeEventListener('keydown', defer);
    };
  }, [paused]);

  return <div className="kk-regional-stories" ref={container}>
    <div className="kk-story-rail-controls"><p>{count} regional stories <span>· Swipe or scroll to explore</span></p>{!reducedMotion && <button type="button" aria-controls={id} aria-pressed={paused} onClick={() => setPaused(value => !value)}>{paused ? 'Resume carousel' : 'Pause carousel'}</button>}</div>
    <div className="kk-journal-story-grid kk-story-rail" ref={track} id={id} tabIndex={0} role="region" aria-roledescription="carousel" aria-label="Regional craft stories">{children}</div>
  </div>;
}
