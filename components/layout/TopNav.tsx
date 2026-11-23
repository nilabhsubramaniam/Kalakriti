'use client';

import { ArrowLeft, ArrowRight, ChevronDown, Menu, X, ArrowUpRight, UserRound } from 'lucide-react';

import { useEffect, useRef, useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { usePathname } from 'next/navigation';
import { CartLink } from '@/components/commerce/ShopControls';
import CraftSearch from '@/components/layout/CraftSearch';
import { regionalJournals } from '@/lib/states/journalTheme';
import { SLUG_TO_STATE } from '@/lib/states/slugs';
import { stateThemeVars } from '@/lib/states/theme';
import { REGIONS, STATE_THEMES, displayName, themeFor } from '@/lib/stateThemes';
/* The slug map only — importing the registry would pull every state's
   catalogue into the bundle for a nav that renders on every page. */
import { slugForState } from '@/lib/states/slugs';
import { useRegionStore } from '@/lib/store/useRegionStore';
import { Motif } from '@/components/ornament/Motifs';

const pageLinks = [
  { href: '/', label: 'Home' },
  { href: '/#collections', label: 'Traditions' },
  { href: '/#community', label: 'Craft stories' },
  { href: '/#about', label: 'Our idea' },
];

export default function TopNav() {
  const pathname = usePathname();
  const routeState = pathname.startsWith('/state/') ? SLUG_TO_STATE[pathname.split('/')[2]] : null;
  const regionalSlug = pathname.startsWith('/state/') ? pathname.split('/')[2] : '';
  const regional = Boolean(regionalJournals[regionalSlug]);
  const regionalRoot = `/state/${regionalSlug}`;
  const accountPage = pathname === '/login' || pathname === '/signup';
  const links = regional ? [{ href: regionalRoot, label: 'Overview' }, { href: `${regionalRoot}#crafts`, label: 'Crafts' }, { href: `${regionalRoot}#culture`, label: 'The journal' }, { href: `${regionalRoot}#visit`, label: 'Discover' }] : pageLinks;
  const triggerRef = useRef<HTMLButtonElement>(null);
  const [open, setOpen] = useState(false);
  const [hash, setHash] = useState('');
  const selected = useRegionStore(s => s.selected);
  const select   = useRegionStore(s => s.select);
  const menuRef  = useRef<HTMLDivElement>(null);

  const visibleRegion = routeState ?? selected;
  const current = visibleRegion ? themeFor(visibleRegion) : null;

  useEffect(() => {
    const update = () => setHash(window.location.hash);
    update();
    setOpen(false);
    window.addEventListener('hashchange', update);
    return () => window.removeEventListener('hashchange', update);
  }, [pathname]);

  const currentPage = (href: string): 'page' | 'location' | undefined => {
    if (regional) return pathname === regionalRoot && href === `${regionalRoot}${hash}` ? (hash ? 'location' : 'page') : undefined;
    if (pathname !== '/') return undefined;
    if (href === '/') return hash ? undefined : 'page';
    return href === `/${hash}` || (href === '/#collections' && hash === '#categories') ? 'location' : undefined;
  };
  const followPage = (href: string) => { setOpen(false); setHash(href.includes('#') ? href.slice(href.indexOf('#')) : ''); };

  /* Escape and outside clicks close the menu. */
  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => { if (e.key === 'Escape') { setOpen(false); triggerRef.current?.focus(); } };
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
    <nav className="nav" aria-label="Main navigation" style={routeState ? stateThemeVars(routeState) : undefined}>
      <Link href="/" className="nav-logo" aria-label="Kalakriti — home" onClick={() => { choose(null); setHash(''); }}>
        <Image className="nav-brand-lockup" src="/brand/kalakriti-logo.webp" alt="Kalakriti — Craft, Culture, Community" width={2149} height={732} priority sizes="(min-width: 1200px) 236px, 195px" />
        <span className="nav-brand-compact" aria-hidden="true"><Image src="/brand/kalakriti-emblem.webp" alt="" width={1254} height={1254} sizes="44px" /><span>Kalakriti</span></span>
      </Link>

      <div className="nav-primary-links">{links.map(item => <Link key={item.href} href={item.href} aria-current={currentPage(item.href)} onClick={() => followPage(item.href)}>{item.label}</Link>)}</div>
      <div className="nav-right" ref={menuRef} onBlur={event => { if (!event.currentTarget.contains(event.relatedTarget)) setOpen(false); }} onFocusCapture={event => { if (event.target instanceof Element && event.target.closest('.kk-craft-search')) setOpen(false); }}>
        <Link className="nav-explore-link" href="/explore" aria-current={pathname === "/explore" ? "page" : undefined} onClick={() => choose(null)}>Explore India <ArrowUpRight size={14} aria-hidden="true" /></Link>
        {/* What is currently open, so the navbar always names the region */}
        {current && visibleRegion && (
          <span className="nav-current">
            <Motif name={current.motif} size={13} strokeWidth={2.2} />
            <span className="nav-current-name">{displayName(visibleRegion)}</span>
            <span className="nav-current-art">{current.art}</span>
          </span>
        )}

        <div className="nav-utility-actions"><button
          ref={triggerRef}
          className="nav-menu-btn"
          type="button"
          aria-label="Browse navigation and states"
          aria-controls="state-navigation"
          onClick={() => setOpen(o => !o)}
          aria-expanded={open}
        >
          <span className="nav-states-label">States</span><span className="nav-mobile-label">{open ? 'Close' : 'Menu'}</span>
          <ChevronDown className="kk-ui-icon nav-caret" data-open={open} size={16} aria-hidden="true" />
          <span className="nav-mobile-icon" aria-hidden="true">{open ? <X size={17} /> : <Menu size={17} />}</span>
        </button><Link className="kk-account-link" href="/login" aria-label="Sign in or create an account" aria-current={accountPage ? 'page' : undefined}><UserRound size={22} aria-hidden="true" /></Link><CartLink /></div>

        {open && (
          <div className="nav-menu" id="state-navigation" aria-label="Pages and states">
            <div className="nav-menu-primary" aria-label="Explore Kalakriti">{links.map(item => <Link key={item.href} href={item.href} aria-current={currentPage(item.href)} onClick={() => followPage(item.href)}>{item.label}<ArrowUpRight size={14} aria-hidden="true" /></Link>)}<Link className="nav-menu-account" href="/login" aria-current={accountPage ? 'page' : undefined} onClick={() => setOpen(false)}>Sign in<UserRound size={15} aria-hidden="true" /></Link></div>
            <div className="nav-menu-heading"><span><span className="kk-deva" lang="mai">मिथिलाक माटि</span><strong>A country of living traditions</strong></span><span>Choose your next chapter</span></div>
            <Link className="nav-menu-all" href="/explore" onClick={() => choose(null)}><ArrowLeft className="kk-ui-icon" size={16} aria-hidden="true" /> All of India</Link>

            <div className="nav-menu-grid">
              {REGIONS.map(region => (
                <section key={region.label} className="nav-menu-group">
                  <p className="nav-menu-label kk-label">{region.label}</p>
                  <ul className="nav-menu-list">
                    {region.states.map(state => {
                      const t = STATE_THEMES[state];
                      if (!t) return null;
                      const slug = slugForState(state);
                      /* Each row wears its own tradition's pigment. */
                      const rowStyle = { ['--row' as string]: t.colors.accent };
                      const inner = (
                        <>
                          <Motif name={t.motif} size={15} strokeWidth={2} className="nav-menu-motif" />
                          <span className="nav-menu-name">{displayName(state)}</span>
                          <span className="nav-menu-art">{t.art}</span>
                          {slug && <ArrowRight className="kk-ui-icon nav-menu-go" size={16} aria-hidden="true" />}
                        </>
                      );

                      return (
                        <li key={state}>
                          {slug ? (
                            /* A state with its own page is a link, not a map
                               selection — so it opens the page, and it behaves
                               like a link: middle-click, ⌘-click, prefetch. */
                            <Link
                              className="nav-menu-item"
                              href={`/state/${slug}`}
                              aria-current={routeState === state ? 'page' : undefined}
                              prefetch={false}
                              style={rowStyle}
                              onClick={() => setOpen(false)}
                            >
                              {inner}
                            </Link>
                          ) : (
                            <button
                              className="nav-menu-item"
                              data-active={state === selected}
                              style={rowStyle}
                              onClick={() => choose(state)}
                            >
                              {inner}
                            </button>
                          )}
                        </li>
                      );
                    })}
                  </ul>
                </section>
              ))}
            </div>
          </div>
        )}

        <CraftSearch />
      </div>
    </nav>
  );
}
