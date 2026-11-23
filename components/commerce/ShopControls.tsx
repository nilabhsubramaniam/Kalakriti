'use client';
import { useEffect, useId, useState } from 'react';
import Link from 'next/link';
import { ShoppingBag, Plus } from 'lucide-react';
import SelectField from '@/components/shared/SelectField';
import { useShopStore } from '@/lib/store/useShopStore';
import { markets, priceFor, formatPrice, type Market } from '@/lib/commerce/catalog';

export function CartLink() {
  const lines = useShopStore(s => s.lines);
  const hydrate = useShopStore(s => s.hydrate);
  useEffect(hydrate, [hydrate]);
  const count = lines.reduce((sum, line) => sum + line.quantity, 0);
  return <Link href="/cart" className="kk-cart-link" aria-label={`Cart, ${count} items`}><ShoppingBag size={22} aria-hidden="true" /><span className="kk-cart-count" aria-hidden="true">{count}</span></Link>;
}
export function MarketSelector() {
  const id = useId();
  const market = useShopStore(s => s.market);
  const setMarket = useShopStore(s => s.setMarket);
  return <div className="kk-market"><label htmlFor={id}>Shopping region</label><SelectField id={id} value={market} onChange={event => setMarket(event.target.value as Market)}>{Object.entries(markets).map(([key, value]) => <option key={key} value={key}>{value.label}</option>)}</SelectField><p className="kk-market-note">Preview prices. Online ordering opens soon.</p></div>;
}
export function ProductPurchase({ productId }: { productId: string }) {
  const market = useShopStore(s => s.market);
  const add = useShopStore(s => s.add);
  const quantity = useShopStore(s => s.lines.find(line => line.productId === productId)?.quantity ?? 0);
  const [added, setAdded] = useState(false);
  useEffect(() => { if (!added) return; const timer = setTimeout(() => setAdded(false), 2200); return () => clearTimeout(timer); }, [added]);
  return <div className="kk-purchase"><strong className="kk-price">{formatPrice(priceFor(productId, market), market)}</strong><button className="kk-bj-button" type="button" disabled={quantity >= 20} onClick={() => { add(productId); setAdded(true); }}><Plus size={17} aria-hidden="true" />{quantity >= 20 ? 'Basket limit reached' : 'Add to cart'}</button><span className="kk-purchase-status" role="status">{added ? 'Added to your cart' : ''}</span></div>;
}
