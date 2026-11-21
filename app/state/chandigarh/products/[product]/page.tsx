import ProductDetail, { productMetadata } from '@/components/product/ProductDetail';
import { productDetails } from '@/lib/commerce/productDetails';
const products = productDetails.filter(item => item.regionSlug === 'chandigarh');
export const dynamicParams = false;
export function generateStaticParams() { return products.map(item => ({ product: item.slug })); }
export function generateMetadata({ params }: { params: { product: string } }) {
  return productMetadata(products.find(item => item.slug === params.product)?.productId);
}
export default function RegionalProductPage({ params }: { params: { product: string } }) {
  return <ProductDetail productId={products.find(item => item.slug === params.product)?.productId} />;
}
