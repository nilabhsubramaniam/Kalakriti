'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useShopStore } from '@/lib/store/useShopStore';
import { catalog, priceFor, formatPrice } from '@/lib/commerce/catalog';
import { journalClassFor, regionalJournals } from '@/lib/states/journalTheme';
import { stateThemeVars } from '@/lib/states/theme';
import { MarketSelector } from '@/components/commerce/ShopControls';

export default function Cart() {
  const { lines, market, quantity, hydrated } = useShopStore();
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = lines.reduce((sum, line) => sum + priceFor(line.productId, market) * line.quantity, 0);
  const regionSlugs = [...new Set(lines.map(line => catalog.find(product => product.id === line.productId)?.regionSlug))];
  const regional = regionSlugs.length === 1 && regionSlugs[0] ? regionalJournals[regionSlugs[0]] : undefined;
  const browseHref = regionSlugs.length === 1 ? `/state/${regionSlugs[0]}#crafts` : '/explore';
  return <article className={`${regional && regionSlugs[0] ? journalClassFor(regionSlugs[0]) : 'kk-bihar-journal'} kk-cart-page`} style={regional ? stateThemeVars(regional.state) : undefined}><div className="kk-bj-section"><header className="kk-bj-heading"><p className="kk-bj-eyebrow">Chosen with care</p><h1>Your cart</h1><p>Crafts from the places you love, chosen with care.</p></header><MarketSelector />{!hydrated ? <p role="status">Loading your cart…</p> : lines.length === 0 ? <div className="kk-cart-empty"><ShoppingBag size={36} aria-hidden="true" /><h2>Your next favourite is waiting.</h2><p>Discover paintings, woven textiles and objects made by hand.</p><Link className="kk-bj-button" href="/explore">Explore India’s crafts</Link></div> : <div className="kk-cart-layout"><ul className="kk-cart-lines">{lines.map(line => {
    const product = catalog.find(item => item.id === line.productId)!;
    return <li key={line.productId}>{product.image && <Link href={product.href} className="kk-cart-image"><Image src={product.image.src} alt={product.name} fill sizes="(max-width: 640px) 90px, 140px" /></Link>}<div className="kk-cart-item"><Link href={product.href}><h2>{product.name}</h2></Link><p>{product.regionTitle} · {product.spec}</p><p>{formatPrice(priceFor(product.id, market), market)} each</p><div className="kk-cart-quantity"><button type="button" aria-label={`Decrease quantity of ${product.name}`} onClick={() => quantity(product.id, line.quantity - 1)}><Minus size={16} /></button><output aria-label={`Quantity of ${product.name}`}>{line.quantity}</output><button type="button" aria-label={`Increase quantity of ${product.name}`} disabled={line.quantity >= 20} onClick={() => quantity(product.id, line.quantity + 1)}><Plus size={16} /></button><button type="button" aria-label={`Remove ${product.name}`} onClick={() => quantity(product.id, 0)}><Trash2 size={17} /></button></div></div><strong className="kk-cart-line-total">{formatPrice(priceFor(product.id, market) * line.quantity, market)}</strong></li>;
  })}</ul><aside className="kk-cart-summary" aria-label="Cart summary"><h2>Your selection</h2><p>{count} {count === 1 ? 'item' : 'items'}</p><div aria-live="polite"><span>Subtotal</span><strong>{formatPrice(subtotal, market)}</strong></div><Link className="kk-bj-button" href={browseHref}>Continue exploring</Link></aside></div>}</div></article>;
}
