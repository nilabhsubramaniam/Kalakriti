'use client';

import { useEffect, useState } from 'react';
import { TOUR_ORDER } from '@/lib/stateThemes';
import { useRegionStore } from '@/lib/store/useRegionStore';

export const SHOWCASE_HOLD = 4500;

/** One timer drives either renderer. Pauses while the page or map is hidden. */
export function useCulturalShowcase(visible: boolean) {
  const tour = useRegionStore(s => s.tour);
  const index = useRegionStore(s => s.tourIndex);
  const select = useRegionStore(s => s.select);
  const selectFromTour = useRegionStore(s => s.selectFromTour);
  const setTour = useRegionStore(s => s.setTour);
  const stopTour = useRegionStore(s => s.stopTour);
  const [pageVisible, setPageVisible] = useState(true);

  useEffect(() => {
    stopTour(); // Opening the homepage never starts a tour without a request.
    const change = () => setPageVisible(!document.hidden);
    change();
    document.addEventListener('visibilitychange', change);
    return () => { document.removeEventListener('visibilitychange', change); stopTour(); };
  }, [stopTour]);

  useEffect(() => {
    if (tour !== 'running' || !visible || !pageVisible) return;
    const timer = setTimeout(() => {
      if (index + 1 >= TOUR_ORDER.length) { select(null); return; }
      selectFromTour(TOUR_ORDER[index + 1], index + 1);
    }, SHOWCASE_HOLD);
    return () => clearTimeout(timer);
  }, [tour, index, visible, pageVisible, select, selectFromTour]);

  useEffect(() => {
    if (tour !== 'running') return;
    const interrupt = (event: Event) => {
      if (event.target instanceof Element && event.target.closest('[data-showcase-control]')) return;
      stopTour();
    };
    window.addEventListener('pointerdown', interrupt);
    window.addEventListener('keydown', interrupt);
    window.addEventListener('wheel', interrupt, { passive: true });
    return () => {
      window.removeEventListener('pointerdown', interrupt);
      window.removeEventListener('keydown', interrupt);
      window.removeEventListener('wheel', interrupt);
    };
  }, [tour, stopTour]);

  return {
    running: tour === 'running', index,
    toggle: () => {
      if (tour === 'running') { stopTour(); return; }
      const current = useRegionStore.getState().selected;
      const currentIndex = current ? TOUR_ORDER.indexOf(current) : -1;
      const start = currentIndex >= 0 && currentIndex < TOUR_ORDER.length - 1 ? currentIndex : 0;
      selectFromTour(TOUR_ORDER[start], start);
      setTour('running');
    },
    step: (direction: number) => {
      const selected = useRegionStore.getState().selected;
      const current = selected ? TOUR_ORDER.indexOf(selected) : -1;
      const next = current < 0 ? (direction > 0 ? 0 : TOUR_ORDER.length - 1) : (current + direction + TOUR_ORDER.length) % TOUR_ORDER.length;
      selectFromTour(TOUR_ORDER[next], next);
    },
    stop: stopTour,
  };
}
