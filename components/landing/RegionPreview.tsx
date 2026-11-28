import { ArrowUpRight } from 'lucide-react';
import Image from 'next/image';
import Link from 'next/link';
import { Motif } from '@/components/ornament/Motifs';
import { displayName, themeFor } from '@/lib/stateThemes';
import { slugForState } from '@/lib/states/slugs';
import { regionalJournals } from '@/lib/states/journalTheme';

interface Props { region: string; previewing: boolean; touring: boolean; onSelect: () => void }

export default function RegionPreview({ region, previewing, touring, onSelect }: Props) {
  const theme = themeFor(region);
  const slug = slugForState(region) ?? 'bihar';
  const image = regionalJournals[slug]?.footerImage ?? '/images/painting-study.webp';
  return <aside className="kk-region-preview" aria-label={`${displayName(region)} cultural preview`} data-previewing={previewing}>
    <div className="kk-region-preview-top"><p className="kk-home-eyebrow">{touring ? 'Cultural showcase' : previewing ? 'Hover preview' : 'Your regional chapter'}</p><span data-region-motif><Motif name={theme.motif} size={26} /></span></div>
    <div className="kk-region-preview-image"><Image src={image} alt={`Regional craft illustration for ${displayName(region)}`} fill sizes="(min-width: 901px) 340px, (min-width: 641px) 500px, 100vw" /></div>
    <div className="kk-region-identity"><h2>{displayName(region)}</h2><p className="kk-region-native kk-indic">{theme.script.native}</p></div>
    <p className="kk-region-description">{theme.description}</p>
    <div className="kk-region-crafts" aria-label="Craft highlights">{theme.crafts.slice(0, 3).map(craft => <span key={craft}>{craft}</span>)}</div>
    <Link href={`/state/${slug}`} className="kk-region-explore" onClick={onSelect}>Explore {displayName(region)}<ArrowUpRight className="kk-ui-icon" size={18} aria-hidden="true" /></Link>
    <p className="kk-region-footnote">Craft collections, stories and places to discover.</p>
  </aside>;
}
