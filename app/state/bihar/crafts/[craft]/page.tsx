import { productHref } from '@/lib/commerce/productDetails';
import { MarketSelector, ProductPurchase } from '@/components/commerce/ShopControls';
import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { bihar } from '@/lib/states/bihar';
import { biharCraftHref } from '@/lib/states/biharNavigation';
import { stateThemeVars } from '@/lib/states/theme';

export const dynamicParams = false;

export function generateStaticParams() {
  return (bihar.crafts ?? []).map(craft => ({ craft: craft.id }));
}

export function generateMetadata({ params }: { params: { craft: string } }): Metadata {
  const craft = bihar.crafts?.find(item => item.id === params.craft);
  return craft ? { title: `${craft.name} · ${craft.district}, Bihar | Kalakriti`, description: craft.hook } : {};
}

export default function BiharCraftPage({ params }: { params: { craft: string } }) {
  const craft = bihar.crafts?.find(item => item.id === params.craft);
  if (!craft) notFound();
  const works = bihar.products?.filter(work => work.craft === craft.id) ?? [];
  const districts = bihar.districts?.filter(district => district.crafts.includes(craft.id)) ?? [];
  const paintingIds = ['madhubani', 'manjusha', 'tikuli'];
  const related = (bihar.crafts ?? []).filter(item => item.id !== craft.id && (paintingIds.includes(craft.id) ? paintingIds.includes(item.id) : item.district === craft.district));
  const alternatives = related.length ? related : (bihar.crafts ?? []).filter(item => item.id !== craft.id).slice(0, 3);

  return <article className="kk-bihar-journal kk-bj-detail-page" data-state="bihar" style={stateThemeVars('Bihar')}>
    <nav className="kk-bj-nav" aria-label="Collection navigation"><div><Link href="/state/bihar#crafts">Bihar collections</Link><a href="#collection">The collection</a><a href="#about-craft">About the craft</a><a href="#process">The process</a></div></nav>
    <header className="kk-bj-section kk-bj-collection-hero">
      <div className="kk-bj-hero-copy"><p className="kk-bj-eyebrow">{craft.district} · Bihar</p><h1>{craft.name}</h1>{craft.native && <p className="kk-bj-native" lang="hi">{craft.native}</p>}<p className="kk-bj-intro">{craft.hook}</p><div className="kk-bj-actions"><a className="kk-bj-button" href="#collection">Browse the collection</a><a className="kk-bj-text-link" href="#about-craft">About {craft.name}</a></div></div>
      {craft.image && <figure className="kk-bj-hero-art"><Image src={craft.image.src} alt={craft.image.alt} width={craft.image.width} height={craft.image.height} priority sizes="(min-width: 901px) 520px, 100vw" /></figure>}
    </header>

    <section className="kk-bj-section" id="collection" aria-labelledby="collection-title"><header className="kk-bj-heading"><p className="kk-bj-eyebrow">The collection</p><h2 id="collection-title">{craft.name}, in different forms.</h2><p>Discover the work and the district behind it.</p></header><MarketSelector /><div className="kk-bj-work-grid">{works.map(work => <article className="kk-bj-work" key={work.id} id={work.id}>
      {work.image && <div className="kk-bj-work-image">{productHref(work.id) ? <Link href={productHref(work.id)!} aria-label={`View ${work.name} details`}><Image src={work.image.src} alt={work.image.alt} fill sizes="(min-width: 901px) 370px, (min-width: 641px) 45vw, 100vw" /></Link> : <Image src={work.image.src} alt={work.image.alt} fill sizes="(min-width: 901px) 370px, (min-width: 641px) 45vw, 100vw" />}</div>}
      <div><p className="kk-bj-eyebrow">{craft.district} · Bihar</p><h3>{productHref(work.id) ? <Link href={productHref(work.id)!}>{work.name}</Link> : work.name}</h3><p>{work.blurb}</p>{productHref(work.id) && <Link className="kk-bj-text-link" href={productHref(work.id)!}>View details</Link>}<ProductPurchase productId={work.id} /></div>
    </article>)}</div></section>

    <section className="kk-bj-section" id="about-craft" aria-labelledby="about-craft-title"><div className="kk-bj-prose-panel"><p className="kk-bj-eyebrow">A tradition and its place</p><h2 id="about-craft-title">The story of {craft.name}</h2><p>{craft.story}</p>{districts.length > 0 && <div className="kk-bj-districts"><h3>Districts to discover</h3><ul>{districts.map(district => <li key={district.id}><span>{district.name}</span><p>{district.note}</p></li>)}</ul></div>}</div></section>
    <section className="kk-bj-section" id="process" aria-labelledby="process-title"><div className="kk-bj-prose-panel"><p className="kk-bj-eyebrow">The work behind the object</p><h2 id="process-title">How it is made</h2><p>{craft.technique}</p><h3>The makers</h3><p>{craft.makers}</p></div></section>

    <section className="kk-bj-section" aria-labelledby="related-crafts-title"><header className="kk-bj-heading"><p className="kk-bj-eyebrow">Continue through Bihar</p><h2 id="related-crafts-title">{paintingIds.includes(craft.id) ? 'Painting across the districts.' : 'Another craft to discover.'}</h2></header><div className="kk-bj-crafts">{alternatives.map(item => <Link className="kk-bj-craft kk-bj-collection-link" href={biharCraftHref(item.id)} key={item.id}>{item.image && <div className="kk-bj-craft-image"><Image src={item.image.src} alt={item.image.alt} fill sizes="(min-width: 901px) 370px, 100vw" /></div>}<div className="kk-bj-craft-copy"><p className="kk-bj-eyebrow">{item.district} · Bihar</p><h3>{item.name}</h3><span className="kk-bj-craft-action">View collection</span></div></Link>)}</div></section>
  </article>;
}
