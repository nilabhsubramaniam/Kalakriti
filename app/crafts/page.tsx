import { type Metadata } from 'next';
import { productHref } from '@/lib/commerce/productDetails';
import CraftDirectory from '@/components/crafts/CraftDirectory';
import { statePage, stateSlugs } from '@/lib/states';

export const metadata: Metadata = {
  title: 'Crafts of India — Kalakriti',
  description: 'Browse regional crafts from every state and union territory in one place. Find a tradition and follow its collection, story and making process.',
};

export default function CraftsPage() {
  // Keep long craft stories and product descriptions on their detail pages.
  const regions = stateSlugs().flatMap(slug => {
    const page = statePage(slug);
    if (!page?.crafts?.length) return [];
    return [{ slug, state: page.state, name: page.title, crafts: page.crafts.map(craft => {
      const products = page.products?.filter(product => product.craft === craft.id) ?? [];
      const product = products.find(item => item.image) ?? products[0];
      return {
        id: craft.id, name: craft.name, href: `/state/${slug}/crafts/${encodeURIComponent(craft.id)}`,
        image: product?.image ?? craft.image,
        product: product ? { id: product.id, name: product.name, href: productHref(product.id) ?? `/state/${slug}/crafts/${encodeURIComponent(craft.id)}#${product.id}` } : undefined,
      };
    }) }];
  }).sort((a, b) => a.name.localeCompare(b.name, 'en'));
  return <CraftDirectory regions={regions} />;
}
