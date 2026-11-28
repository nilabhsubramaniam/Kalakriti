'use client';

import { useEffect, useId, useMemo, useRef, useState } from 'react';
import { ArrowRight, ArrowUpRight, Search, X, ZoomIn, SlidersHorizontal } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { MarketSelector, ProductPurchase } from '@/components/commerce/ShopControls';
import CraftImagePreview from '@/components/crafts/CraftImagePreview';
import { type ImageAsset } from '@/lib/states/types';
import SelectField from '@/components/shared/SelectField';
import { stateThemeVars } from '@/lib/states/theme';

type Region = {
  slug: string;
  state: string;
  name: string;
  crafts: { id: string; name: string; href: string; image?: ImageAsset; product?: { id: string; name: string; href: string } }[];
};

/** Regional craft cards with existing preview products; all entries render in the initial HTML. */
export default function CraftDirectory({ regions }: { regions: Region[] }) {
  const id = useId();
  const filters = useRef<HTMLDetailsElement>(null);
  const input = useRef<HTMLInputElement>(null);
  const [query, setQuery] = useState('');
  const [state, setState] = useState('');
  const [preview, setPreview] = useState<{ image: ImageAsset; name: string; href: string } | null>(null);
  const term = query.trim().toLocaleLowerCase();
  const visible = useMemo(() => regions.flatMap(region => {
    if (state && region.slug !== state) return [];
    const crafts = region.crafts.filter(craft => !term || `${region.name} ${craft.name}`.toLocaleLowerCase().includes(term));
    return crafts.length ? [{ ...region, crafts }] : [];
  }), [regions, state, term]);
  const count = visible.reduce((sum, region) => sum + region.crafts.length, 0);
  const reset = () => { setQuery(''); setState(''); if (filters.current?.open) input.current?.focus({ preventScroll: true }); else filters.current?.querySelector('summary')?.focus(); };

  useEffect(() => {
    const dismiss = (event: PointerEvent) => {
      const target = event.target;
      if (filters.current?.open && target instanceof Element && !filters.current.contains(target) && !target.closest('.kk-select-menu')) filters.current.open = false;
    };
    window.addEventListener('pointerdown', dismiss);
    return () => window.removeEventListener('pointerdown', dismiss);
  }, []);

  return <main className="kk-craft-directory kk-craft-shop">
    <h1 className="kk-sr-only">Crafts of India</h1>
    <section className="kk-craft-directory-body" aria-label="All regional crafts">
      <div className="kk-craft-shop-toolbar">
        <p role="status" aria-live="polite">{count} craft {count === 1 ? 'entry' : 'entries'} · {visible.length} regional {visible.length === 1 ? 'chapter' : 'chapters'} <span className="kk-craft-price-note">· Preview prices</span></p>
        {(query || state) && <button className="kk-craft-filter-reset" type="button" onClick={reset}>Reset <X size={15} aria-hidden="true" /></button>}
        <details className="kk-craft-filter-disclosure" ref={filters} onKeyDown={event => {
          if (event.key === 'Escape') { event.preventDefault(); event.stopPropagation(); if (filters.current) { filters.current.open = false; filters.current.querySelector('summary')?.focus(); } }
        }}>
          <summary aria-label={`Filters${query || state ? ', active filters applied' : ''}`} title="Filter crafts"><SlidersHorizontal size={20} aria-hidden="true" />{(query || state) && <span className="kk-craft-filter-count" aria-hidden="true">{Number(Boolean(query)) + Number(Boolean(state))}</span>}</summary>
          <div className="kk-craft-filter-panel"><h2>Filter crafts</h2>
      <div className="kk-craft-directory-filters" role="search" aria-label="Find a craft">
        <div><label htmlFor={`${id}-search`}>Find a craft or state</label><div className="kk-craft-directory-search"><Search size={18} aria-hidden="true" /><input ref={input} id={`${id}-search`} type="search" placeholder="Try Madhubani, weaving or Bihar" value={query} onChange={event => setQuery(event.target.value)} aria-controls={`${id}-results`} />{query && <button type="button" aria-label="Clear craft search" onClick={() => { setQuery(''); input.current?.focus({ preventScroll: true }); }}><X size={18} aria-hidden="true" /></button>}</div></div>
        <div><label htmlFor={`${id}-state`}>State or union territory</label><SelectField id={`${id}-state`} aria-label="State or union territory" value={state} onChange={event => setState(event.target.value)}><option value="">All states & union territories</option>{regions.map(region => <option key={region.slug} value={region.slug}>{region.name}</option>)}</SelectField></div>
      </div>
      <MarketSelector />
          </div>
        </details>
      </div>
      <div id={`${id}-results`} className="kk-craft-directory-grid">
        {visible.flatMap(region => region.crafts.map(craft => <article className="kk-craft-shop-card" key={`${region.slug}-${craft.id}`} style={stateThemeVars(region.state)}>
          <div className="kk-craft-shop-image">
            <Link href={craft.product?.href ?? craft.href} prefetch={false} aria-label={`View ${craft.product?.name ?? craft.name} details`}>
              {craft.image ? <Image src={craft.image.src} alt={craft.image.alt} fill sizes="(min-width: 1024px) 390px, (min-width: 641px) 45vw, 100vw" /> : <span>{craft.name}</span>}
            </Link>
            {craft.image && <button type="button" aria-label={`Zoom ${craft.product?.name ?? craft.name}`} onClick={() => setPreview({ image: craft.image!, name: craft.product?.name ?? craft.name, href: craft.product?.href ?? craft.href })}><ZoomIn size={20} aria-hidden="true" /></button>}
          </div>
          <div className="kk-craft-shop-copy">
            <Link className="kk-craft-shop-state" href={`/state/${region.slug}`} prefetch={false}>{region.name}<ArrowUpRight size={13} aria-hidden="true" /></Link>
            <h2><Link href={craft.product?.href ?? craft.href} prefetch={false}>{craft.product?.name ?? craft.name}</Link></h2>
            <Link className="kk-craft-shop-collection" href={craft.href} prefetch={false}>{craft.name}<ArrowRight size={14} aria-hidden="true" /></Link>
            {craft.product && <ProductPurchase productId={craft.product.id} />}
            <Link className="kk-craft-shop-details" href={craft.product?.href ?? craft.href} prefetch={false}>View details <ArrowUpRight size={15} aria-hidden="true" /></Link>
          </div>
        </article>))}
      </div>
      {!visible.length && <div className="kk-craft-directory-empty"><h2>No crafts found</h2><p>Try another craft name or choose a different state.</p><button type="button" onClick={reset}>Show all crafts <ArrowRight size={16} aria-hidden="true" /></button></div>}
    </section>
    {preview && <CraftImagePreview {...preview} onClose={() => setPreview(null)} />}
  </main>;
}
