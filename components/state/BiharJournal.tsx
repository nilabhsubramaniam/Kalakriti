import { Landmark, MapPin, ExternalLink } from 'lucide-react';
import { biharTourism } from '@/lib/states/biharTourism';
import Image from 'next/image';
import Link from 'next/link';
import { stateThemeVars } from '@/lib/states/theme';
import { biharArticles, biharCraftHref } from '@/lib/states/biharNavigation';
import type { StatePage } from '@/lib/states/types';

/** A concise district-led entry point; collections and reading have their own pages. */
export default function BiharJournal({ page }: { page: StatePage }) {
  const crafts = page.crafts ?? [];
  const makingIds = ['madhubani', 'sikki', 'makhana', 'tussar', 'sujani'];

  return <article className="kk-bihar-journal" data-state="bihar" style={stateThemeVars('Bihar')}>
    <nav className="kk-bj-nav" aria-label="Bihar page sections"><div><a href="#crafts">Living crafts</a><a href="#culture">The painted story</a><a href="#experiences">The making</a><a href="#visit">Beyond the courtyard</a></div></nav>
    <header className="kk-bj-hero kk-bj-section">
      <div className="kk-bj-hero-copy">
        <p className="kk-bj-eyebrow">Bihar · The Mithila chapter</p>
        <p className="kk-bj-native" lang="mai">मिथिलाक माटि</p>
        <h1>Mithila,<br /><em>in every line.</em></h1>
        <p className="kk-bj-intro">Discover Bihar through its paintings, textiles and handmade traditions. Choose a craft, find its district and follow what interests you.</p>
        <div className="kk-bj-actions"><a className="kk-bj-button" href="#crafts">Explore the crafts</a><a className="kk-bj-text-link" href="#culture">From the journal</a></div>
        <p className="kk-bj-hero-note">Rooted in Bihar. Made to be remembered.</p>
      </div>
      {page.hero && <figure className="kk-bj-hero-art"><Image src={page.hero.src} alt={page.hero.alt} width={page.hero.width} height={page.hero.height} priority sizes="(min-width: 901px) 52vw, 100vw" /></figure>}
    </header>

    <section className="kk-bj-section" id="crafts" aria-labelledby="bihar-crafts-title">
      <header className="kk-bj-heading"><p className="kk-bj-eyebrow">Choose a craft. Discover its place.</p><h2 id="bihar-crafts-title">Many crafts. One living landscape.</h2><p>Browse collections by craft and district, from Mithila painting to Bhagalpur silk.</p></header>
      <div className="kk-bj-crafts">{crafts.map(craft => <Link className="kk-bj-craft kk-bj-collection-link" id={`craft-${craft.id}`} href={biharCraftHref(craft.id)} key={craft.id}>
        {craft.image && <div className="kk-bj-craft-image"><Image src={craft.image.src} alt={craft.image.alt} fill sizes="(min-width: 901px) 370px, (min-width: 641px) 45vw, 100vw" /></div>}
        <div className="kk-bj-craft-copy"><p className="kk-bj-eyebrow">{page.districts?.find(district => district.id === craft.district)?.name ?? craft.district} · Bihar</p><h3>{craft.name}</h3>{craft.native && <p className="kk-bj-craft-native" lang="hi">{craft.native}</p>}<span className="kk-bj-craft-action">View collection</span></div>
      </Link>)}</div>
    </section>

    <section className="kk-bj-section" id="culture" aria-labelledby="bihar-culture-title">
      <header className="kk-bj-heading"><p className="kk-bj-eyebrow">From the Mithila journal</p><h2 id="bihar-culture-title">The home was the first canvas.</h2><p>Choose a story to understand the art, its history and the details within it.</p></header>
      <div className="kk-bj-reading-list">{biharArticles.map(article => <Link className="kk-bj-reading-link" key={article.slug} href={`/state/bihar/journal/${article.slug}`}>
        <div className="kk-bj-reading-image"><Image src={article.image.src} alt={`Artwork accompanying ${article.title.toLowerCase()}`} fill sizes="(min-width: 641px) 160px, 90px" /></div><div><h3>{article.title}</h3><p>{article.excerpt}</p><span className="kk-bj-small">Read article</span></div>
      </Link>)}</div>
    </section>

    <section className="kk-bj-section" id="experiences" aria-labelledby="bihar-making-title">
      <header className="kk-bj-heading"><p className="kk-bj-eyebrow">Look a little closer</p><h2 id="bihar-making-title">The beauty is in the making.</h2><p>Follow the material to understand the tools and techniques behind each craft.</p></header>
      <div className="kk-bj-experiences">{makingIds.map(id => {
        const craft = crafts.find(item => item.id === id);
        if (!craft) return null;
        return <Link className="kk-bj-experience kk-bj-collection-link" href={`${biharCraftHref(id)}#process`} key={id}>
          {craft.image && <div className="kk-bj-experience-image"><Image src={craft.image.src} alt={craft.image.alt} fill sizes="(min-width: 901px) 350px, (min-width: 641px) 45vw, 100vw" /></div>}
          <div><p className="kk-bj-eyebrow">{craft.district}</p><h3>{craft.name}</h3><span className="kk-bj-craft-action">See the process</span></div>
        </Link>;
      })}</div>
    </section>

    <section className="kk-bj-section" id="visit" aria-labelledby="bihar-visit-title">
      <div className="kk-bj-places-panel"><header className="kk-bj-heading"><p className="kk-bj-eyebrow">Discover Bihar · Places & journeys</p><h2 id="bihar-visit-title">Beyond the painted courtyard.</h2><p>Stay a little longer. Discover sacred landmarks, ancient learning and the hills beyond Bihar’s craft villages.</p></header><div className="kk-tourism-grid">{biharTourism.map(place => <article className="kk-tourism-card" key={place.name}><Landmark className="kk-tourism-landmark" size={40} strokeWidth={1.2} aria-hidden="true" /><p className="kk-bj-eyebrow">{place.theme}</p><h3>{place.name}</h3><p className="kk-tourism-district"><MapPin size={15} aria-hidden="true" />{place.district}, Bihar</p><p>{place.description}</p><p className="kk-tourism-highlights">{place.highlights}</p><a href={place.href} target="_blank" rel="noopener noreferrer" aria-label={`Explore ${place.name} on Bihar Tourism (opens in a new tab)`}>Explore {place.name}<ExternalLink size={15} aria-hidden="true" /></a></article>)}</div><div className="kk-tourism-more"><h3>More places to discover</h3><p>{page.destinations?.filter(place => !['d-bodhgaya', 'd-nalanda', 'd-rajgir'].includes(place.id)).map(place => place.name).join(' · ')}</p><a href="https://tourism.bihar.gov.in/en/destinations" target="_blank" rel="noopener noreferrer">Plan your journey with Bihar Tourism<ExternalLink size={15} aria-hidden="true" /></a></div></div>
    </section>

    <section className="kk-bj-section kk-bj-closing" aria-labelledby="bihar-closing-title"><div><p className="kk-bj-native" lang="mai">मिथिलाक माटि</p><h2 id="bihar-closing-title">Every line keeps<br /><em>a story alive.</em></h2><p>Find a craft that speaks to you, then discover the place behind it.</p><div className="kk-bj-actions"><a className="kk-bj-button" href="#crafts">Browse the collections</a><Link className="kk-bj-text-link" href="/explore">Discover another region</Link></div></div></section>
  </article>;
}
