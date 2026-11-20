import Image from 'next/image';
import Link from 'next/link';
import { ChevronDown } from 'lucide-react';
import ProductRail from '@/components/state/ProductRail';
import { stateThemeVars } from '@/lib/states/theme';
import type { StatePage } from '@/lib/states/types';

const chapterImages = ['mithila-courtyard', 'painting-study', 'bihar-kachni-study', 'bihar-mithila-mural'];

/** Bihar's illustrated editorial page; the atlas remains a separate experience. */
export default function BiharJournal({ page }: { page: StatePage }) {
  const crafts = page.crafts ?? [];
  const experiences = page.experiences ?? [];
  const experienceImages: Record<string, string> = {
    'e-jitwarpur': 'mithila-courtyard', 'e-sikki': 'basket-study',
    'e-makhana': 'bihar-makhana-study', 'e-loom': 'textile-study', 'e-sujani': 'sujani-stitch-study',
  };

  return <article className="kk-bihar-journal" data-state="bihar" style={stateThemeVars('Bihar')}>
    <nav className="kk-bj-nav" aria-label="Bihar page sections"><div><a href="#culture">The painted story</a><a href="#crafts">Living crafts</a><a href="#experiences">The making</a><a href="#visit">Beyond the courtyard</a></div></nav>
    <header className="kk-bj-hero kk-bj-section">
      <div className="kk-bj-hero-copy">
        <p className="kk-bj-eyebrow">Bihar · The Mithila chapter</p>
        <p className="kk-bj-native" lang="mai">मिथिलाक माटि</p>
        <h1>Mithila,<br /><em>in every line.</em></h1>
        <p className="kk-bj-intro">A painted wall. A patient stitch. A story carried by hand. Discover Bihar through the art, materials and people of its living craft traditions.</p>
        <div className="kk-bj-actions"><a className="kk-bj-button" href="#crafts">Explore the crafts</a><a className="kk-bj-text-link" href="#culture">Read the Mithila story</a></div>
        <p className="kk-bj-hero-note">Rooted in Bihar. Made to be remembered.</p>
      </div>
      {page.hero && <figure className="kk-bj-hero-art"><Image src={page.hero.src} alt={page.hero.alt} width={page.hero.width} height={page.hero.height} priority sizes="(min-width: 901px) 52vw, 100vw" /><figcaption>Editorial illustration · A Mithila-inspired courtyard</figcaption></figure>}
    </header>


    <section className="kk-bj-section" id="culture" aria-labelledby="bihar-culture-title">
      <header className="kk-bj-heading"><p className="kk-bj-eyebrow">From wall to world</p><h2 id="bihar-culture-title">The home was the first canvas.</h2><p>{page.intro}</p></header>
      <div className="kk-bj-chapters">{page.chapters?.map((chapter, index) => <details className="kk-bj-chapter" key={chapter.title}>
        <summary><div className="kk-bj-chapter-image"><Image src={`/images/${chapterImages[index % chapterImages.length]}.webp`} alt={`Editorial illustration accompanying ${chapter.title.toLowerCase()}`} fill sizes="(min-width: 901px) 270px, (min-width: 641px) 45vw, 100vw" /></div><div className="kk-bj-chapter-title"><h3>{chapter.title}</h3><ChevronDown size={19} aria-hidden="true" /></div><span className="kk-bj-small">Read the chapter</span></summary>
        <p className="kk-bj-chapter-body">{chapter.body}</p>
      </details>)}</div>
    </section>

    <section className="kk-bj-section" id="crafts" aria-labelledby="bihar-crafts-title">
      <header className="kk-bj-heading"><p className="kk-bj-eyebrow">Painted, stitched, woven, shaped</p><h2 id="bihar-crafts-title">Many crafts. One living landscape.</h2><p>{page.craftIntro}</p></header>
      <p className="kk-bj-disclosure">All images are editorial illustrations. Product cards and prices are previews; shopping is not yet available.</p>
      <div className="kk-bj-crafts">{crafts.map(craft => <details className="kk-bj-craft" id={`craft-${craft.id}`} key={craft.id} name="bihar-craft">
        <summary>
          {craft.image && <div className="kk-bj-craft-image"><Image src={craft.image.src} alt={craft.image.alt} fill sizes="(min-width: 901px) 370px, (min-width: 641px) 45vw, 100vw" /><span>Illustrative craft study</span></div>}
          <div className="kk-bj-craft-copy"><p className="kk-bj-eyebrow">{page.districts?.find(district => district.id === craft.district)?.name ?? craft.district}</p><h3>{craft.name}</h3>{craft.native && <p className="kk-bj-craft-native" lang="hi">{craft.native}</p>}<p>{craft.hook}</p><span className="kk-bj-craft-action">Explore the story <ChevronDown size={18} aria-hidden="true" /></span></div>
        </summary>
        <div className="kk-bj-craft-detail"><p>{craft.story}</p><dl><div><dt>The process</dt><dd>{craft.technique}</dd></div><div><dt>The makers</dt><dd>{craft.makers}</dd></div></dl><ProductRail craft={craft} products={page.products?.filter(product => product.craft === craft.id) ?? []} /></div>
      </details>)}</div>
    </section>

    <section className="kk-bj-section" id="experiences" aria-labelledby="bihar-making-title">
      <header className="kk-bj-heading"><p className="kk-bj-eyebrow">Look a little closer</p><h2 id="bihar-making-title">The beauty is in the making.</h2><p>Follow a painted line, a coiled strand or the rhythm of a loom. These illustrated experience ideas introduce the work behind the object.</p></header>
      <div className="kk-bj-experiences">{experiences.map(experience => <article className="kk-bj-experience" key={experience.id}>
        <div className="kk-bj-experience-image"><Image src={`/images/${experienceImages[experience.id] ?? 'mithila-courtyard'}.webp`} alt={`Illustrative craft study for ${experience.name.toLowerCase()}`} fill sizes="(min-width: 901px) 350px, (min-width: 641px) 45vw, 100vw" /></div>
        <div><p className="kk-bj-eyebrow">{experience.district}</p><h3>{experience.name}</h3><p>{experience.blurb}</p><span className="kk-bj-small">Experience concept · Bookings are not available</span></div>
      </article>)}</div>
    </section>

    <section className="kk-bj-section" id="visit" aria-labelledby="bihar-visit-title">
      <div className="kk-bj-places-panel"><header className="kk-bj-heading"><p className="kk-bj-eyebrow">A wider Bihar</p><h2 id="bihar-visit-title">Beyond the painted courtyard.</h2><p>Keep the craft as your starting point, then follow Bihar’s wider cultural landscape.</p></header><ul className="kk-bj-places">{page.destinations?.map(destination => <li key={destination.id}><p className="kk-bj-small">{destination.district}</p><h3>{destination.name}</h3><p>{destination.blurb}</p></li>)}</ul></div>
    </section>

    <section className="kk-bj-section kk-bj-closing" aria-labelledby="bihar-closing-title"><div><p className="kk-bj-native" lang="mai">मिथिलाक माटि</p><h2 id="bihar-closing-title">Every line keeps<br /><em>a story alive.</em></h2><p>Return to the craft that caught your eye, or follow another thread across India.</p><div className="kk-bj-actions"><a className="kk-bj-button" href="#crafts">Find your craft story</a><Link className="kk-bj-text-link" href="/explore">Discover another region</Link></div></div></section>
  </article>;
}
