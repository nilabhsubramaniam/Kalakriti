'use client';

import { useRef } from 'react';
import Link from 'next/link';
import { ArrowRight, ChevronLeft, ChevronRight } from 'lucide-react';
import { Motif } from '@/components/ornament/Motifs';
import { displayName, themeFor } from '@/lib/stateThemes';
import { slugForState } from '@/lib/states/slugs';

const states = ['Bihar', 'Uttar Pradesh', 'Rajasthan', 'Tamil Nadu', 'Gujarat', 'Maharashtra', 'West Bengal', 'Karnataka', 'Kerala', 'Punjab'];

/** Real state-page links remain available without carousel JavaScript. */
export default function StateDiscoveryStrip() {
  const track = useRef<HTMLDivElement>(null);
  const move = (direction: number) => track.current?.scrollBy({ left: direction * track.current.clientWidth * .7, behavior: window.matchMedia('(prefers-reduced-motion: reduce)').matches ? 'instant' : 'smooth' });
  return <section className="kk-state-strip" aria-labelledby="state-strip-title">
    <div className="kk-state-strip-intro"><p className="kk-home-eyebrow">A country of craft</p><h2 id="state-strip-title">Explore<br />by state</h2><p>Find the people, places and traditions behind every region.</p><Link href="/explore">View all states <ArrowRight size={15} aria-hidden="true" /></Link></div>
    <div className="kk-state-strip-content">
      <div className="kk-state-strip-controls"><span>Our journey begins in Bihar</span><div><button type="button" aria-label="Previous states" onClick={() => move(-1)}><ChevronLeft size={18} aria-hidden="true" /></button><button type="button" aria-label="Next states" onClick={() => move(1)}><ChevronRight size={18} aria-hidden="true" /></button></div></div>
      <div className="kk-state-strip-track" ref={track} tabIndex={0} aria-label="Featured states; scroll for more">
        {states.map(state => { const theme = themeFor(state); return <Link key={state} href={`/state/${slugForState(state)}`} prefetch={false} className={`kk-state-tile${state === 'Bihar' ? ' kk-state-tile--first' : ''}`}><div style={{ color: theme.colors.accent }}><Motif name={theme.motif} size={66} /></div><strong>{displayName(state)}</strong><span>{theme.art}</span></Link>; })}
      </div>
    </div>
  </section>;
}
