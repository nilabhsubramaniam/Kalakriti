import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import { MarketSelector, ProductPurchase } from '@/components/commerce/ShopControls';
import { productHref } from '@/lib/commerce/productDetails';
import { kerala as page, klBase } from '@/lib/states/kerala';
import { stateThemeVars } from '@/lib/states/theme';
export const dynamicParams = false;
export function generateStaticParams() { return page.crafts!.map(craft => ({ craft: craft.id })); }
export function generateMetadata({ params }: { params: { craft: string } }): Metadata {
  const craft = page.crafts!.find(item => item.id === params.craft);
  return craft ? { title: `${craft.name} · Kerala | Kalakriti`, description: craft.hook } : {};
}
export default function RegionalCraftPage({ params }: { params: { craft: string } }) {
  const craft = page.crafts!.find(item => item.id === params.craft);
  if (!craft) notFound();
  const works = page.products!.filter(product => product.craft === craft.id);
  return <article className="kk-region-journal kk-kl-journal kk-rj-detail" data-state={page.slug} style={stateThemeVars(page.state)}><div className="kk-rj-section"><nav className="kk-painting-breadcrumb" aria-label="Breadcrumb"><Link href={klBase}>Kerala</Link><span aria-hidden="true">/</span><span aria-current="page">{craft.name}</span></nav><header className="kk-rj-collection-hero"><div><p className="kk-rj-eyebrow">{craft.district} · Kerala</p><h1>{craft.name}</h1><p className="kk-rj-lede">{craft.hook}</p><div className="kk-rj-actions"><a className="kk-rj-button" href="#collection">Browse the collection</a><a className="kk-rj-text-link" href="#process">How it is made</a></div></div><figure className="kk-rj-collection-image"><Image src={craft.image!.src} alt={craft.image!.alt} width={craft.image!.width} height={craft.image!.height} priority sizes="(min-width: 901px) 520px, 100vw" /></figure></header><section id="collection" className="kk-rj-detail-section" aria-labelledby="craft-collection-title"><header className="kk-rj-heading"><p className="kk-rj-eyebrow">The collection</p><h2 id="craft-collection-title">A closer look at {craft.name}.</h2></header><MarketSelector /><div className="kk-rj-product-grid">{works.map(work => <article className="kk-rj-product" key={work.id}><Link className="kk-rj-product-image" href={productHref(work.id)!}><Image src={work.image!.src} alt={work.name} fill sizes="(min-width: 901px) 370px, (min-width: 641px) 45vw, 100vw" /></Link><div className="kk-rj-card-copy"><h3><Link href={productHref(work.id)!}>{work.name}</Link></h3><p>{work.blurb}</p><Link className="kk-rj-text-link" href={productHref(work.id)!}>View details &amp; 3D</Link><ProductPurchase productId={work.id} /></div></article>)}</div></section><section className="kk-rj-prose" id="about-craft"><p className="kk-rj-eyebrow">A tradition and its place</p><h2>The story of {craft.name}.</h2><p>{craft.story}</p></section><section className="kk-rj-prose" id="process"><p className="kk-rj-eyebrow">The making</p><h2>Material, tool and a practiced hand.</h2><p>{craft.technique}</p><h3>The skills behind the work</h3><p>{craft.makers}</p></section><Link className="kk-rj-button" href={`${klBase}#crafts`}>Discover another craft</Link></div></article>;
}
