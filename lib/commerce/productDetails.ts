export type ProductCrop = { x: number; y: number; width: number; height: number };
export type ProductDetailEntry = { productId: string; slug: string; detailLabel: string; crop: ProductCrop };
const fullImage: ProductCrop = { x: 0, y: 0, width: 1, height: 1 };

/** Explicit media entries keep detail URLs stable and avoid inferred product geometry. */
export const productDetails: ProductDetailEntry[] = [
  { productId: 'p-kohbar', slug: 'kohbar-wedding-panel', detailLabel: 'Painted detail', crop: { x: 0.154, y: 0.114, width: 0.694, height: 0.68 } },
  { productId: 'p-kachni', slug: 'kachni-line-study', detailLabel: 'Line detail', crop: fullImage },
  { productId: 'p-stole-mad', slug: 'hand-painted-mithila-stole', detailLabel: 'Painted detail', crop: fullImage },
  { productId: 'p-pauti', slug: 'sikki-pauti-box', detailLabel: 'Coiling detail', crop: fullImage },
  { productId: 'p-sikki-doll', slug: 'sikki-doll-pair', detailLabel: 'Coiling detail', crop: fullImage },
  { productId: 'p-sujani', slug: 'sujani-narrative-throw', detailLabel: 'Stitch detail', crop: fullImage },
  { productId: 'p-manjusha', slug: 'manjusha-scroll', detailLabel: 'Painted detail', crop: fullImage },
  { productId: 'p-tikuli', slug: 'tikuli-coasters', detailLabel: 'Painted detail', crop: fullImage },
  { productId: 'p-tussar', slug: 'bhagalpuri-tussar-stole', detailLabel: 'Weave detail', crop: fullImage },
  { productId: 'p-lahthi', slug: 'lac-bangle-set', detailLabel: 'Surface detail', crop: fullImage },
  { productId: 'p-stone', slug: 'patharkatti-stone-bowl', detailLabel: 'Surface detail', crop: fullImage },
  { productId: 'p-makhana', slug: 'mithila-makhana', detailLabel: 'Closer look', crop: fullImage },
];
export function productHref(productId: string): string | undefined {
  const entry = productDetails.find(item => item.productId === productId);
  if (!entry) return undefined;
  // Preserve the first published detail URL instead of creating a duplicate page.
  return entry.productId === 'p-kohbar' ? `/state/bihar/paintings/${entry.slug}` : `/state/bihar/products/${entry.slug}`;
}
export const productViews = [
  { id: 'front', label: 'Full view', yaw: 0, pitch: 0, zoom: 1 },
  { id: 'left', label: 'Left angle', yaw: -0.5, pitch: 0.06, zoom: 1 },
  { id: 'right', label: 'Right angle', yaw: 0.5, pitch: 0.06, zoom: 1 },
  { id: 'detail', label: 'Detail', yaw: 0, pitch: 0, zoom: 1.7 },
] as const;
export type ProductView = typeof productViews[number];
