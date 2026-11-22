import type { Metadata } from 'next';
import Image from 'next/image';
import Link from 'next/link';
import { notFound } from 'next/navigation';
import ProductGallery from '@/components/product/ProductGallery';
import { MarketSelector, ProductPurchase } from '@/components/commerce/ShopControls';
import { productDetails, productHref } from '@/lib/commerce/productDetails';
import { commerceRegions } from '@/lib/commerce/regions';
import { journalClassFor } from '@/lib/states/journalTheme';
import { stateThemeVars } from '@/lib/states/theme';

export function productMetadata(productId?: string): Metadata {
  const page = commerceRegions.find(region => region.products?.some(item => item.id === productId));
  const product = page?.products?.find(item => item.id === productId);
  const craft = page?.crafts?.find(item => item.id === product?.craft);
  return product && craft ? { title: `${product.name} · ${craft.name} | Kalakriti`, description: product.blurb } : {};
}

/** One server-rendered detail layout for paintings, textiles, objects and produce. */
export default function ProductDetail({ productId }: { productId?: string }) {
  const entry = productDetails.find(item => item.productId === productId);
  const page = commerceRegions.find(region => region.products?.some(item => item.id === productId));
  const product = page?.products?.find(item => item.id === productId);
  const craft = page?.crafts?.find(item => item.id === product?.craft);
  if (!entry || !product?.image || !craft || !page) notFound();
  const related = (page.products ?? []).filter(item => item.id !== product.id && item.craft === craft.id);
  const otherWorks = related.length ? related : (page.products ?? []).filter(item => item.id !== product.id).slice(0, 3);
  return <article className={`${journalClassFor(page.slug)} kk-painting-page`} data-state={page.slug} style={stateThemeVars(page.state)}>
    <div className="kk-bj-section"><nav className="kk-painting-breadcrumb" aria-label="Breadcrumb"><Link href={`/state/${page.slug}`}>{page.title}</Link><span aria-hidden="true">/</span><Link href={`/state/${page.slug}/crafts/${craft.id}#collection`}>{craft.name}</Link><span aria-hidden="true">/</span><span aria-current="page">{product.name}</span></nav>
      <div className="kk-painting-product"><ProductGallery key={product.id} source={product.image.src} name={product.name} crop={entry.crop} imageAspect={product.image.width / product.image.height} detailLabel={entry.detailLabel} credit={product.image.credit} /><div className="kk-painting-info"><p className="kk-bj-eyebrow">{craft.district} · {page.title}</p><h1>{product.name}</h1><p className="kk-painting-description">{product.blurb}</p><dl><div><dt>Craft</dt><dd>{craft.name}</dd></div><div><dt>Size & material</dt><dd>{product.spec}</dd></div><div><dt>Origin</dt><dd>{craft.district}, {page.title}</dd></div></dl><MarketSelector /><ProductPurchase productId={product.id} /><Link className="kk-bj-text-link" href={`/state/${page.slug}/crafts/${craft.id}#process`}>Discover how it is made</Link></div></div>
      <section className="kk-painting-story" aria-labelledby="product-story-title"><p className="kk-bj-eyebrow">Look a little closer</p><h2 id="product-story-title">The tradition behind {craft.name}.</h2><p>{craft.story}</p><Link className="kk-bj-text-link" href={`/state/${page.slug}/crafts/${craft.id}#about-craft`}>Explore {craft.name}</Link></section>
      <section className="kk-product-related" aria-labelledby="related-products-title"><header className="kk-bj-heading"><p className="kk-bj-eyebrow">Continue discovering</p><h2 id="related-products-title">{related.length ? 'More from this collection.' : `Another piece of ${page.title}.`}</h2></header><div className="kk-bj-crafts">{otherWorks.map(work => <Link href={productHref(work.id)!} key={work.id} className="kk-bj-craft kk-bj-collection-link">{work.image && <div className="kk-bj-craft-image"><Image src={work.image.src} alt={work.name} fill sizes="(min-width: 901px) 370px, (min-width: 641px) 45vw, 100vw" /></div>}<div className="kk-bj-craft-copy"><h3>{work.name}</h3><span className="kk-bj-craft-action">View details</span></div></Link>)}</div></section>
    </div>
  </article>;
}
