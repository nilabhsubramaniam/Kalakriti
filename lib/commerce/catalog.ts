import { productHref } from '@/lib/commerce/productDetails';
import { bihar } from '@/lib/states/bihar';

export const markets = {
  IN: { label: 'India · INR', currency: 'INR', locale: 'en-IN' },
  EU: { label: 'Euro area · EUR', currency: 'EUR', locale: 'en-IE' },
  US: { label: 'United States · USD', currency: 'USD', locale: 'en-US' },
  GB: { label: 'United Kingdom · GBP', currency: 'GBP', locale: 'en-GB' },
} as const;
export type Market = keyof typeof markets;
export const catalog = (bihar.products ?? []).map(product => ({ ...product, href: productHref(product.id) ?? `/state/bihar/crafts/${product.craft}#${product.id}` }));

// Fixed sample market prices in minor units, not live foreign-exchange quotes.
// Replace this lookup with API product/market quotes when commerce is connected.
const internationalPrices: Record<string, [number, number, number]> = {
  'p-kohbar': [6500, 7200, 5600], 'p-kachni': [3400, 3800, 2900],
  'p-stole-mad': [4500, 5000, 3900], 'p-pauti': [2200, 2500, 1900],
  'p-sikki-doll': [1400, 1600, 1200], 'p-sujani': [9500, 10500, 8200],
  'p-manjusha': [3700, 4100, 3200], 'p-tikuli': [1800, 2000, 1600],
  'p-tussar': [4200, 4700, 3600], 'p-lahthi': [1200, 1400, 1000],
  'p-stone': [2800, 3100, 2400], 'p-makhana': [700, 800, 600],
};
export function priceFor(productId: string, market: Market): number {
  const product = catalog.find(item => item.id === productId);
  if (!product) throw new Error(`Unknown product: ${productId}`);
  return market === 'IN' ? product.price * 100 : internationalPrices[productId][{ EU: 0, US: 1, GB: 2 }[market]];
}
export function formatPrice(minor: number, market: Market): string {
  return new Intl.NumberFormat(markets[market].locale, { style: 'currency', currency: markets[market].currency, minimumFractionDigits: minor % 100 ? 2 : 0, maximumFractionDigits: 2 }).format(minor / 100);
}
