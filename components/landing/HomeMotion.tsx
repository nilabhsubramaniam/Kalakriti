'use client';

import { useEffect } from 'react';

/** Progressive motion: server-rendered content is visible before JS and on failure. */
export default function HomeMotion() {
  useEffect(() => {
    const root = document.querySelector('.kk-home-editorial');
    if (!root || !('IntersectionObserver' in window)) return;
    const preference = window.matchMedia('(prefers-reduced-motion: reduce)');
    const animations = new Set<Animation>();
    let observer: IntersectionObserver | undefined;
    const stop = () => {
      observer?.disconnect();
      animations.forEach(animation => animation.cancel());
      animations.clear();
    };
    const start = () => {
      stop();
      if (preference.matches) return;
      observer = new IntersectionObserver(entries => {
        entries.forEach(entry => {
          if (!entry.isIntersecting) return;
          observer?.unobserve(entry.target);
          // Never hide content with CSS: animation support is optional.
          if (typeof entry.target.animate !== 'function') return;
          const animation = entry.target.animate(
            [{ opacity: .65, transform: 'translateY(12px)' }, { opacity: 1, transform: 'translateY(0)' }],
            { duration: 520, easing: 'cubic-bezier(.2,.65,.3,1)' },
          );
          animations.add(animation);
          animation.finished.then(() => animations.delete(animation)).catch(() => animations.delete(animation));
        });
      }, { threshold: .12 });
      root.querySelectorAll('.kk-journal-intro > *, [data-home-reveal]').forEach(element => observer?.observe(element));
    };
    start();
    preference.addEventListener('change', start);
    return () => { preference.removeEventListener('change', start); stop(); };
  }, []);
  return null;
}
