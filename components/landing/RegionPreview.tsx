import { ArrowRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Motif } from '@/components/ornament/Motifs';
import { displayName, themeFor } from '@/lib/stateThemes';
import { slugForState } from '@/lib/states/slugs';

interface Props { region: string; previewing: boolean; touring: boolean; onSelect: () => void }

export default function RegionPreview({ region, previewing, touring, onSelect }: Props) {
  const theme = themeFor(region);
  const isBihar = region === 'Bihar';
  return <aside className="kk-region-preview" aria-label={`${displayName(region)} cultural preview`}>
    <div className="kk-region-preview-top"><p className="kk-home-eyebrow">{touring ? 'Cultural showcase' : previewing ? 'A glimpse of the region' : isBihar ? 'Our first chapter' : 'Discover a tradition'}</p><span data-region-motif><Motif name={theme.motif} size={35} /></span></div>
    <div className="kk-region-identity">
      <h3>{displayName(region)}</h3>
      <p className="kk-region-native kk-indic">{theme.script.native}</p>
      <p className="kk-region-art">{theme.art}</p>
    </div>
    {isBihar ? <div className="kk-region-preview-image"><Image src="/images/painting-study.webp" alt="Illustrated Madhubani-inspired painting study" fill sizes="110px" /><span>Illustration</span></div> : <div className="kk-region-preview-motif" aria-hidden="true"><Motif name={theme.motif} size={75} /></div>}
    <p className="kk-region-description">{theme.description}</p>
    <div className="kk-region-crafts">{theme.crafts.slice(0, 3).map(craft => <span key={craft}>{craft}</span>)}</div>
    <Link href={`/state/${slugForState(region)}`} className="kk-region-explore" onClick={onSelect}>Explore {displayName(region)} <ArrowRight className="kk-ui-icon" size={16} aria-hidden="true" /></Link>
    <p className="kk-region-footnote">{isBihar ? 'Stories, districts and a collection preview.' : 'A cultural overview. The catalogue will follow.'}</p>
  </aside>;
}
