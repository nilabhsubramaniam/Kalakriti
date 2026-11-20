import { ArrowRight, ArrowUpRight } from 'lucide-react';
import Link from 'next/link';
import Image from 'next/image';
import { bihar } from '@/lib/states/bihar';

export default function FeaturedProductsRow() {
  return <section className="kk-home-featured kk-home-section" id="collections" aria-labelledby="collections-title">
    <div className="kk-home-featured-intro"><Image className="kk-mithila-feature-image" src="/images/painting-study.webp" alt="Editorial Madhubani-inspired painting study" fill sizes="(min-width: 901px) 38vw, 100vw" /><p className="kk-home-eyebrow">The Mithila edit · Bihar</p><h2 id="collections-title">The soul<br />of <em>Mithila.</em></h2><p>A painted line. A woven thread. Discover the traditions at the heart of our first chapter.</p><Link className="kk-home-button" href="/state/bihar#crafts">Discover Bihar’s crafts <ArrowRight className="kk-ui-icon" size={16} aria-hidden="true" /></Link><p className="kk-home-small">Illustrated craft studies · Online shopping is coming soon.</p></div>
    <div className="kk-home-collection-grid">{['madhubani', 'sikki', 'tussar'].map((id, i) => {
      const craft = bihar.crafts!.find(c => c.id === id)!;
      return <Link href={`/state/bihar#craft-${id}`} className="kk-home-collection" key={id}>
        <div className={`kk-home-collection-art kk-home-collection-art--${id}`}><Image src={`/images/${id === 'madhubani' ? 'painting' : id === 'sikki' ? 'basket' : 'textile'}-study.webp`} alt={`Illustrated study inspired by ${craft.name}; not an item for sale`} fill sizes="(min-width: 901px) 20vw, (min-width: 641px) 30vw, 100vw" /><span className="kk-home-collection-tag">Craft study · 0{i + 1}</span></div>
        <div className="kk-home-collection-body"><p className="kk-home-eyebrow">{craft.district}, Bihar</p><h3>{craft.name}</h3><p>{id === 'madhubani' ? 'A world told in line and colour.' : id === 'sikki' ? 'Wetland grass, woven into gold.' : 'The natural beauty of woven silk.'}</p><span className="kk-home-card-link">Explore the tradition <ArrowUpRight className="kk-ui-icon" size={16} aria-hidden="true" /></span></div>
      </Link>;
    })}</div>
  </section>;
}
