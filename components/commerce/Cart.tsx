'use client';
import Image from 'next/image';
import Link from 'next/link';
import { Minus, Plus, Trash2, ShoppingBag } from 'lucide-react';
import { useShopStore } from '@/lib/store/useShopStore';
import { catalog, priceFor, formatPrice } from '@/lib/commerce/catalog';
import { MarketSelector } from '@/components/commerce/ShopControls';

export default function Cart() {
  const { lines, market, quantity, hydrated } = useShopStore();
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  const subtotal = lines.reduce((sum, line) => sum + priceFor(line.productId, market) * line.quantity, 0);
  return <article className="kk-bihar-journal kk-cart-page"><div className="kk-bj-section"><header className="kk-bj-heading"><p className="kk-bj-eyebrow">Chosen with care</p><h1>Your cart</h1><p>A little of Bihar, to make your own.</p></header><MarketSelector />{!hydrated ? <p role="status">Loading your cart…</p> : lines.length === 0 ? <div className="kk-cart-empty"><ShoppingBag size={36} aria-hidden="true" /><h2>Your next favourite is waiting.</h2><p>Discover paintings, woven textiles and objects made by hand.</p><Link className="kk-bj-button" href="/state/bihar#crafts">Explore Bihar’s crafts</Link></div> : <div className="kk-cart-layout"><ul className="kk-cart-lines">{lines.map(line => {
    const product = catalog.find(item => item.id === line.productId)!;
    return <li key={line.productId}>{product.image && <Link href={product.href} className="kk-cart-image"><Image src={product.image.src} alt={product.name} fill sizes="(max-width: 640px) 90px, 140px" /></Link>}<div className="kk-cart-item"><Link href={product.href}><h2>{product.name}</h2></Link><p>{product.spec}</p><p>{formatPrice(priceFor(product.id, market), market)} each</p><div className="kk-cart-quantity"><button type="button" aria-label={`Decrease quantity of ${product.name}`} onClick={() => quantity(product.id, line.quantity - 1)}><Minus size={16} /></button><output aria-label={`Quantity of ${product.name}`}>{line.quantity}</output><button type="button" aria-label={`Increase quantity of ${product.name}`} disabled={line.quantity >= 20} onClick={() => quantity(product.id, line.quantity + 1)}><Plus size={16} /></button><button type="button" aria-label={`Remove ${product.name}`} onClick={() => quantity(product.id, 0)}><Trash2 size={17} /></button></div></div><strong className="kk-cart-line-total">{formatPrice(priceFor(product.id, market) * line.quantity, market)}</strong></li>;
  })}</ul><aside className="kk-cart-summary" aria-label="Cart summary"><h2>Your selection</h2><p>{count} {count === 1 ? 'item' : 'items'}</p><div aria-live="polite"><span>Subtotal</span><strong>{formatPrice(subtotal, market)}</strong></div><Link className="kk-bj-button" href="/state/bihar#crafts">Continue exploring</Link></aside></div>}</div></article>;
}
