import Link from 'next/link';
import { Motif } from '@/components/ornament/Motifs';
import type { MotifKey } from '@/lib/stateThemes';

const categories: { name: string; detail: string; motif: MotifKey; craft: string }[] = [
  { name: 'Paintings & art', detail: 'Stories in every stroke', motif: 'fish', craft: 'madhubani' },
  { name: 'Grass & basketry', detail: 'Nature, shaped by hand', motif: 'lotus', craft: 'sikki' },
  { name: 'Handloom & textiles', detail: 'Threads of a tradition', motif: 'diamond', craft: 'tussar' },
  { name: 'Home & living', detail: 'Objects with a story', motif: 'sun', craft: 'tikuli' },
  { name: 'Jewellery & adornment', detail: 'A little everyday colour', motif: 'chakra', craft: 'lac' },
  { name: 'Farm & pantry', detail: 'Rooted in the region', motif: 'kalash', craft: 'makhana' },
];

export default function CategoryTileGrid() {
  return <section className="kk-home-categories kk-home-section" id="categories" aria-labelledby="categories-title">
    <div className="kk-home-centered-heading"><p className="kk-home-eyebrow">Find something that speaks to you</p><h2 id="categories-title"><span aria-hidden="true">❧</span> A world of handmade <span aria-hidden="true">❧</span></h2></div>
    <div className="kk-home-category-grid">{categories.map(c => <Link key={c.craft} href={`/state/bihar#craft-${c.craft}`} className="kk-home-category"><div className="kk-home-category-frame"><Motif name={c.motif} size={68} /></div><h3>{c.name}</h3><p>{c.detail}</p></Link>)}</div>
  </section>;
}
