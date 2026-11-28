'use client';

import { ArrowUpRight, Search, X } from 'lucide-react';

import Link from 'next/link';
import { useEffect, useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { STATE_THEMES, displayName } from '@/lib/stateThemes';
import { slugForState } from '@/lib/states/slugs';

/** Search the existing cultural registry; never imply a live product catalogue. */
export default function CraftSearch() {
  const [expanded, setExpanded] = useState(false);
  const wrapper = useRef<HTMLDivElement>(null);
  const trigger = useRef<HTMLButtonElement>(null);
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState(false);
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) { setLastPath(pathname); setOpen(false); setExpanded(false); }
  const term = query.trim().toLocaleLowerCase();
  const results = term ? Object.entries(STATE_THEMES).filter(([state, theme]) =>
    [state, displayName(state), theme.art, ...theme.crafts].some(value => value.toLocaleLowerCase().includes(term)),
  ).slice(0, 6) : [];
  /* Show the craft that matched, so "silk" does not answer "Bidriware". */
  const matched = (art: string, crafts: string[]) => art.toLocaleLowerCase().includes(term) ? art : crafts.find(craft => craft.toLocaleLowerCase().includes(term)) ?? art;

  useEffect(() => {
    if (!expanded) return;
    input.current?.focus();
    const outside = (event: PointerEvent) => {
      if (!wrapper.current?.contains(event.target as Node)) { setExpanded(false); setOpen(false); }
    };
    window.addEventListener('pointerdown', outside);
    return () => window.removeEventListener('pointerdown', outside);
  }, [expanded]);

  return <div ref={wrapper} className="kk-craft-search" onBlur={e => {
    if (!e.currentTarget.contains(e.relatedTarget)) { setOpen(false); setExpanded(false); }
  }} onKeyDown={e => {
    if (e.key === 'Escape' && expanded) {
      e.preventDefault(); e.stopPropagation(); setOpen(false); setExpanded(false); trigger.current?.focus();
    }
  }}>
    <button ref={trigger} className="kk-search-toggle" type="button" aria-label="Search" aria-expanded={expanded} aria-controls={expanded ? `${id}-panel` : undefined} onClick={() => { setExpanded(value => !value); setOpen(false); }}><Search size={20} aria-hidden="true" /></button>
    {expanded && <div className="kk-search-panel" id={`${id}-panel`}>
      <form role="search" onSubmit={e => { e.preventDefault(); setOpen(true); setSearched(true); input.current?.focus(); }}>
        <label className="kk-sr-only" htmlFor={id}>Search regions and crafts</label>
        <input ref={input} id={id} type="search" placeholder={pathname.startsWith('/state/bihar') ? 'Search crafts…' : 'Search crafts, regions…'} value={query} onChange={e => { setQuery(e.target.value); setOpen(true); setSearched(false); }} onFocus={() => setOpen(true)} autoComplete="off" aria-controls={open && (term || searched) ? `${id}-results` : undefined} />
        {query.length > 0 && <button type="button" aria-label="Clear search" onClick={() => { setQuery(''); setSearched(false); setOpen(true); input.current?.focus(); }}><X size={18} aria-hidden="true" /></button>}
        <button type="submit" aria-label="Search traditions"><Search size={18} aria-hidden="true" /></button>
      </form>
      {open && (term || searched) && <div className="kk-search-results" id={`${id}-results`}>
        <p className="kk-home-eyebrow" role="status">{results.length ? 'Explore these traditions' : term ? 'No matching traditions. Try Bihar or silk.' : 'Enter a craft or a region to search.'}</p>
        {results.map(([state, theme]) => <Link key={state} href={`/state/${slugForState(state)}`} onClick={() => { setOpen(false); setExpanded(false); setQuery(''); }}><span>{displayName(state)}<small>{matched(theme.art, theme.crafts)}</small></span><ArrowUpRight className="kk-ui-icon" size={16} aria-hidden="true" /></Link>)}
      </div>}
    </div>}
  </div>;
}
