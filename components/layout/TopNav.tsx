'use client';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import { REGIONS, STATE_THEMES, displayName, themeFor } from '@/lib/stateThemes';
import { useRegionStore } from '@/lib/store/useRegionStore';
import { Motif } from '@/components/ornament/Motifs';

export default function TopNav() {
  const [open, setOpen] = useState(false);
  const selected = useRegionStore(s => s.selected);
  const select   = useRegionStore(s => s.select);
  const menuRef  = useRef<HTMLDivElement>(null);

  const current = selected ? themeFor(selected) : null;

  /* Escape and outside clicks close the menu. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') setOpen(false); };
    const onDown = (e: PointerEvent) => {
      if (!menuRef.current?.contains(e.target as Node)) setOpen(false);
    };
    window.addEventListener('keydown', onKey);
    window.addEventListener('pointerdown', onDown);
    return () => {
      window.removeEventListener('keydown', onKey);
      window.removeEventListener('pointerdown', onDown);
    };
  }, [open]);

  const choose = (state: string | null) => {
    select(state);
    setOpen(false);
  };

  return (
    <nav className="nav">
      <Link href="/" className="nav-logo" aria-label="Kalakriti — home" onClick={() => choose(null)}>
        <span>Kalakriti</span>
        <span className="nav-logo-deva kk-deva" aria-hidden="true">कलाकृति</span>
      </Link>

      <div className="nav-right" ref={menuRef}>
        {/* What is currently open, so the navbar always names the region */}
        {current && selected && (
          <span className="nav-current">
            <Motif name={current.motif} size={13} strokeWidth={2.2} />
            <span className="nav-current-name">{displayName(selected)}</span>
            <span className="nav-current-art">{current.art}</span>
          </span>
        )}

        <button
          className="nav-menu-btn"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
          aria-haspopup="true"
        >
          States <span aria-hidden="true" className="nav-caret" data-open={open}>▾</span>
        </button>

        {open && (
          <div className="nav-menu" role="menu" aria-label="Choose a state">
            <button className="nav-menu-all" role="menuitem" onClick={() => choose(null)}>
              ← All of India
            </button>

            <div className="nav-menu-grid">
              {REGIONS.map(region => (
                <section key={region.label} className="nav-menu-group">
                  <p className="nav-menu-label kk-label">{region.label}</p>
                  <ul className="nav-menu-list">
                    {region.states.map(state => {
                      const t = STATE_THEMES[state];
                      if (!t) return null;
                      return (
                        <li key={state}>
                          <button
                            role="menuitem"
                            className="nav-menu-item"
                            data-active={state === selected}
                            /* Each row wears its own tradition's pigment. */
                            style={{ ['--row' as string]: t.colors.accent }}
                            onClick={() => choose(state)}
                          >
                            <Motif name={t.motif} size={15} strokeWidth={2} className="nav-menu-motif" />
                            <span className="nav-menu-name">{displayName(state)}</span>
                            <span className="nav-menu-art">{t.art}</span>
                          </button>
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        )}

        <span className="nav-tagline kk-deva" aria-hidden="true">हस्तकला · भारत</span>
      </div>
    </nav>
  );
}
