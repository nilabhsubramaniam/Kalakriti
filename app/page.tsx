import { ArrowRight, ArrowUpRight, HandHeart, MapPin, Sparkles } from 'lucide-react';
import Image from 'next/image';
import type { CSSProperties } from 'react';
import Link from 'next/link';
import { BorderPatti } from '@/components/ornament/Motifs';
import HomeMotion from '@/components/landing/HomeMotion';
import RegionalStoryRail from '@/components/landing/RegionalStoryRail';
import { regionalStories, regionalStudies } from '@/lib/landing/editorial';
import { slugForState } from '@/lib/states/slugs';
import { themeFor } from '@/lib/stateThemes';

export default function LandingPage() {
  return <div className="kk-home kk-home-editorial kk-home-journal">
    <HomeMotion />
    <section className="kk-journal-opening" aria-labelledby="home-title">
      <div className="kk-journal-intro">
        <p className="kk-journal-kicker"><span className="kk-deva" lang="mai">मिथिलाक माटि</span><span className="kk-journal-kicker-dot" aria-hidden="true" />The soil of Mithila. The stories of India.</p>
        <h1 id="home-title">Living threads.<br /><em>Timeless traditions.</em></h1>
        <p>Hand embroidery, regional craft and the people who keep a place’s stories alive.<br className="kk-journal-desktop-break" /> Rooted in Mithila, with room for all of India.</p>
        <div className="kk-journal-intro-links"><a href="#collections">Explore the traditions <ArrowRight size={15} aria-hidden="true" /></a><Link href="/explore">Discover India <ArrowUpRight size={15} aria-hidden="true" /></Link></div>
      </div>
      <figure className="kk-journal-panorama">
        <Image src="/images/stitching-courtyard.webp" alt="Editorial illustration of women embroidering a shared textile frame in a sunlit stone courtyard" width={1920} height={819} priority sizes="100vw" />
        <figcaption>Editorial illustration</figcaption>
      </figure>
    </section>

    <section className="kk-journal-roots" aria-labelledby="roots-title">
      <div className="kk-roots-art" aria-hidden="true"><Image src="/images/painted-roots-background.webp" alt="" fill sizes="100vw" /></div>
      <div className="kk-journal-section kk-roots-content">
      <header className="kk-journal-section-head" data-home-reveal><p className="kk-journal-kicker">Place, practice & belonging</p><h2 id="roots-title">The roots of a living craft</h2><p>Six places. Distinct skills, materials and ways of carrying a story forward.</p></header>
      <RegionalStoryRail count={regionalStories.length}>{regionalStories.map(story => <article className="kk-journal-story kk-journal-frame" key={story.state} style={{ '--kk-story-pigment': themeFor(story.state).colors.accent } as CSSProperties} data-home-reveal>
        <Link href={story.href} className="kk-journal-story-link"><div className="kk-journal-story-image"><Image src={`/images/${story.image}.webp`} alt={story.alt} fill sizes="(min-width: 901px) 340px, (min-width: 641px) 45vw, 100vw" /></div><div className="kk-journal-story-copy"><p className="kk-journal-card-kicker"><span>{story.state}</span></p><h3>{story.title}</h3><p>{story.text}</p><dl className="kk-story-specialities"><div><dt>Signature craft</dt><dd>{themeFor(story.state).crafts[story.craftIndex]}</dd></div><div><dt>Also explore</dt><dd>{themeFor(story.state).crafts.filter((_, index) => index !== story.craftIndex).slice(0, 2).join(' · ')}</dd></div></dl><span className="kk-journal-story-native kk-indic" lang={story.lang}>{story.native}</span><span className="kk-journal-read">Read the regional story</span></div></Link>
      </article>)}</RegionalStoryRail>
      <p className="kk-journal-image-note">Illustrated regional scenes · Craft stories first, online shopping to follow.</p>
      </div>
    </section>

    <section className="kk-journal-regions" id="collections" aria-labelledby="traditions-title">
      <div className="kk-textile-art" aria-hidden="true"><Image src="/images/stitched-textile-background.webp" alt="" fill sizes="100vw" /></div>
      <div className="kk-journal-section kk-textile-content">
        <header className="kk-journal-section-head" data-home-reveal><p className="kk-journal-kicker">An atlas in cloth</p><h2 id="traditions-title">Stitched, woven, remembered.</h2><p>Explore embroidery and textile traditions across states and union territories.</p></header>
        <div className="kk-journal-tradition-grid" id="categories">{regionalStudies.map(study => <Link href={study.href ?? `/state/${slugForState(study.state)}`} prefetch={false} key={study.state} className="kk-journal-tradition kk-journal-frame" style={{ '--kk-story-pigment': themeFor(study.state).colors.accent } as CSSProperties} data-home-reveal><div className="kk-journal-swatch"><Image src={`/images/${study.image}.webp`} alt={`Illustrative study inspired by ${study.craft} from ${study.state}`} fill sizes="(min-width: 901px) 250px, (min-width: 481px) 45vw, 100vw" /><span>{study.kind}</span></div><div className="kk-journal-tradition-copy"><p>{study.state}</p><h3>{study.craft}</h3><span className="kk-tradition-detail">{study.detail}</span><span className="kk-journal-card-action">Explore the tradition <ArrowUpRight size={14} aria-hidden="true" /></span></div></Link>)}</div>
        <div className="kk-journal-region-end"><p>Illustrative studies, rather than a catalogue of items for sale.</p><Link href="/explore">Explore every region <ArrowRight size={16} aria-hidden="true" /></Link></div>
      </div>
    </section>

    <section className="kk-journal-people" id="community" aria-labelledby="people-title">
      <div className="kk-people-art" aria-hidden="true"><Image src="/images/craft-workshop-background.webp" alt="" fill sizes="100vw" /></div>
      <div className="kk-journal-section kk-people-content">
      <header className="kk-journal-section-head" data-home-reveal><p className="kk-journal-kicker">The hands behind the heritage</p><h2 id="people-title">The work is part of the story.</h2><p>Look beyond the finished object. Discover the place, the process and the people.</p></header>
      <div className="kk-journal-practice-grid">
        <Link href="/state/bihar#culture" className="kk-journal-practice kk-journal-frame" data-home-reveal><div className="kk-journal-practice-image"><Image src="/images/mithila-courtyard.webp" alt="Illustrated Mithila-inspired painting workspace" fill sizes="110px" /></div><div><p className="kk-journal-card-kicker">Place</p><h3>A courtyard in Mithila</h3><p>Start with the setting behind the painted line.</p><span className="kk-journal-card-action">Explore the story <ArrowRight size={14} aria-hidden="true" /></span></div></Link>
        <Link href="/state/bihar/crafts/sujani#process" className="kk-journal-practice kk-journal-frame" data-home-reveal><div className="kk-journal-practice-image"><Image src="/images/sujani-stitch-study.webp" alt="Illustrated close-up of running stitches on cloth" fill sizes="110px" /></div><div><p className="kk-journal-card-kicker">Process</p><h3>One stitch at a time</h3><p>Look closely at the patient work of Sujani.</p><span className="kk-journal-card-action">Discover the craft <ArrowRight size={14} aria-hidden="true" /></span></div></Link>
        <Link href="/state/bihar/crafts/tussar" className="kk-journal-practice kk-journal-frame" data-home-reveal><div className="kk-journal-practice-image"><Image src="/images/textile-study.webp" alt="Illustrated folded textile study" fill sizes="110px" /></div><div><p className="kk-journal-card-kicker">Material</p><h3>A thread to follow</h3><p>Meet Bhagalpur through its silk traditions.</p><span className="kk-journal-card-action">Follow the thread <ArrowRight size={14} aria-hidden="true" /></span></div></Link>
      </div>
      <p className="kk-journal-image-note">Individual artisan profiles will follow as they are documented with consent.</p>
      </div>
    </section>

    <div className="kk-journal-closing">
      <div className="kk-closing-art" aria-hidden="true"><Image src="/images/stitched-textile-background.webp" alt="" fill sizes="100vw" /></div>
    <section className="kk-journal-philosophy kk-journal-section" id="about" aria-labelledby="philosophy-title">
      <div className="kk-journal-philosophy-panel" data-home-reveal><div className="kk-journal-philosophy-copy"><p className="kk-journal-kicker">The Kalakriti idea</p><p className="kk-journal-native kk-deva" lang="mai">मिथिलाक माटि</p><h2 id="philosophy-title">A place lives on<br />in what its people make.</h2><p>We begin with Mithila’s crafts, then follow the thread across India. A space to discover regional skill, understand its roots and keep the story with the work.</p><Link href="/state/bihar">Begin with Bihar <ArrowRight size={16} aria-hidden="true" /></Link></div><div className="kk-journal-philosophy-image"><Image src="/images/india-heritage-embroidery.webp" alt="Editorial illustration of a painter and embroidered textiles in a warm Indian landscape" width={1536} height={1024} sizes="(min-width: 901px) 600px, 100vw" /></div></div>
    </section>
    <div className="kk-journal-values" aria-label="Our approach"><span><MapPin size={17} aria-hidden="true" />Rooted in a place</span><span><HandHeart size={17} aria-hidden="true" />Made with meaning</span><span><Sparkles size={17} aria-hidden="true" />Heritage, carried forward</span></div>
    <BorderPatti className="kk-journal-bottom-border" height={16} />
    </div>
  </div>;
}
