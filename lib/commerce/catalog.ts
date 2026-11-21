import { productHref } from '@/lib/commerce/productDetails';
import { commerceRegions } from '@/lib/commerce/regions';

export const markets = {
  IN: { label: 'India · INR', currency: 'INR', locale: 'en-IN' },
  EU: { label: 'Euro area · EUR', currency: 'EUR', locale: 'en-IE' },
  US: { label: 'United States · USD', currency: 'USD', locale: 'en-US' },
  GB: { label: 'United Kingdom · GBP', currency: 'GBP', locale: 'en-GB' },
} as const;
export type Market = keyof typeof markets;
export const catalog = commerceRegions.flatMap(region => (region.products ?? []).map(product => ({ ...product, regionSlug: region.slug, regionState: region.state, regionTitle: region.title, href: productHref(product.id) ?? `/state/${region.slug}/crafts/${product.craft}#${product.id}` })));

// Fixed sample market prices in minor units, not live foreign-exchange quotes.
// Replace this lookup with API product/market quotes when commerce is connected.
const internationalPrices: Record<string, [number, number, number]> = {
  'ch-phulkari': [5000, 5600, 4300], 'ch-pottery': [1800, 2100, 1600],
  'ch-cane': [5500, 6200, 4800], 'ch-mosaic': [3800, 4300, 3300],
  'dl-zardozi': [6100, 6800, 5300], 'dl-wood': [3800, 4300, 3300],
  'dl-pottery': [1700, 1900, 1500], 'dl-paper': [2000, 2300, 1700],
  'dl-engraving': [3500, 3900, 3000], 'dl-chik': [2700, 3000, 2300],
  'hr-durrie': [4100, 4600, 3500], 'hr-pottery': [2100, 2400, 1800],
  'hr-mudha': [2700, 3000, 2300], 'hr-peedha': [3500, 3900, 3000],
  'hr-brass': [3200, 3600, 2800], 'hr-embroidery': [3800, 4300, 3300],
  'pb-phulkari': [5200, 5800, 4500], 'pb-jutti': [2700, 3000, 2300],
  'pb-inlay': [4100, 4600, 3500], 'pb-metal': [3500, 3900, 3000],
  'pb-durrie': [3800, 4300, 3300], 'pb-paranda': [1100, 1300, 900],
  'cg-dhokra': [5000, 5600, 4300], 'cg-iron': [2800, 3200, 2400],
  'cg-kosa': [6100, 6800, 5300], 'cg-bamboo': [1800, 2100, 1600],
  'cg-terracotta': [1400, 1600, 1200], 'cg-wood': [3500, 3900, 3000],
  'mp-gond': [4700, 5200, 4000], 'mp-bagh': [2700, 3000, 2300],
  'mp-chanderi': [8100, 9000, 7000], 'mp-maheshwari': [7000, 7800, 6000],
  'mp-metal': [4000, 4500, 3400], 'mp-batik': [2400, 2700, 2100],
  'hp-rumal': [6100, 6800, 5300], 'hp-kullu': [4700, 5200, 4000],
  'hp-kinnauri': [9800, 10900, 8500], 'hp-kangra': [5500, 6200, 4800],
  'hp-chappal': [2700, 3000, 2300], 'hp-wood': [3500, 3900, 3000],
  'uk-aipan': [2700, 3000, 2300], 'uk-ringal': [1700, 1900, 1500],
  'uk-copper': [3800, 4300, 3300], 'uk-thulma': [8400, 9400, 7300],
  'uk-likhai': [4700, 5200, 4000], 'uk-nettle': [3500, 3900, 3000],
  'up-chikankari': [3500, 3900, 3000], 'up-banarasi': [11200, 12500, 9700],
  'up-brass': [2700, 3000, 2300], 'up-khurja': [1500, 1700, 1300],
  'up-carpet': [9000, 10000, 7800], 'up-terracotta': [2100, 2400, 1800],
  'jh-sohrai': [4100, 4600, 3500], 'jh-khovar': [3800, 4300, 3300],
  'jh-paitkar': [3200, 3600, 2800], 'jh-dhokra': [4500, 5000, 3900],
  'jh-bamboo': [1400, 1600, 1200], 'jh-tasar': [5200, 5800, 4500],
  'od-pattachitra': [6500, 7200, 5600], 'od-sambalpuri': [10200, 11400, 8800],
  'od-pipili': [2300, 2600, 2000], 'od-dhokra': [4100, 4600, 3500],
  'od-tarakasi': [4900, 5500, 4200], 'od-kotpad': [3800, 4300, 3300],
  'wb-kantha': [4500, 5000, 3900], 'wb-baluchari': [12000, 13500, 10500],
  'wb-terracotta': [2400, 2700, 2100], 'wb-dokra': [4200, 4700, 3600],
  'wb-patachitra': [3200, 3600, 2800], 'wb-jamdani': [7600, 8500, 6600],
  'jk-pashmina': [17500, 19500, 15000], 'jk-kani': [34000, 37500, 29000],
  'jk-embroidery': [9500, 10500, 8200], 'jk-papier-mache': [2800, 3100, 2400],
  'jk-walnut': [6200, 6800, 5300], 'jk-basohli': [5200, 5800, 4500],
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
