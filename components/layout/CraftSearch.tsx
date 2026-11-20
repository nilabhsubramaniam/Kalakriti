'use client';

import { ArrowUpRight, Search } from 'lucide-react';

import Link from 'next/link';
import { useId, useRef, useState } from 'react';
import { usePathname } from 'next/navigation';
import { STATE_THEMES, displayName } from '@/lib/stateThemes';
import { slugForState } from '@/lib/states/slugs';

/** Search the existing cultural registry; never imply a live product catalogue. */
export default function CraftSearch() {
  const [query, setQuery] = useState('');
  const [open, setOpen] = useState(false);
  const [searched, setSearched] = useState(false);
  const id = useId();
  const input = useRef<HTMLInputElement>(null);
  const pathname = usePathname();
  const [lastPath, setLastPath] = useState(pathname);
  if (pathname !== lastPath) { setLastPath(pathname); setOpen(false); }
  const term = query.trim().toLocaleLowerCase();
  const results = term ? Object.entries(STATE_THEMES).filter(([state, theme]) =>
    [state, displayName(state), theme.art, ...theme.crafts].some(value => value.toLocaleLowerCase().includes(term)),
  ).slice(0, 6) : [];

  return <div className="kk-craft-search" onBlur={e => { if (!e.currentTarget.contains(e.relatedTarget)) setOpen(false); }}>
    <form role="search" onSubmit={e => { e.preventDefault(); setOpen(true); setSearched(true); input.current?.focus(); }} onKeyDown={e => { if (e.key === 'Escape') { setOpen(false); input.current?.focus(); } }}>
      <label className="kk-sr-only" htmlFor={id}>Search regions and crafts</label>
      <input ref={input} id={id} type="search" placeholder="Search crafts, regions…" value={query} onChange={e => { setQuery(e.target.value); setOpen(true); setSearched(false); }} onFocus={() => setOpen(true)} autoComplete="off" aria-controls={`${id}-results`} />
      <button type="submit" aria-label="Search"><Search className="kk-ui-icon" size={16} aria-hidden="true" /></button>
    </form>
    {open && (term || searched) && <div className="kk-search-results" id={`${id}-results`}>
      <p className="kk-home-eyebrow" role="status">{results.length ? 'Explore these traditions' : term ? 'No matching traditions. Try Bihar or silk.' : 'Enter a craft or a region to search.'}</p>
      {results.map(([state, theme]) => <Link key={state} href={`/state/${slugForState(state)}`} onClick={() => { setOpen(false); setQuery(''); }}><span>{displayName(state)}<small>{theme.art}</small></span><ArrowUpRight className="kk-ui-icon" size={16} aria-hidden="true" /></Link>)}
    </div>}
  </div>;
}
