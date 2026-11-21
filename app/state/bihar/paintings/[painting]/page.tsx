import ProductDetail, { productMetadata } from '@/components/product/ProductDetail';
import { productDetails } from '@/lib/commerce/productDetails';

const paintings = productDetails.filter(item => item.productId === 'p-kohbar');
export const dynamicParams = false;
export function generateStaticParams() { return paintings.map(item => ({ painting: item.slug })); }
export function generateMetadata({ params }: { params: { painting: string } }) {
  return productMetadata(paintings.find(item => item.slug === params.painting)?.productId);
}
export default function PaintingPage({ params }: { params: { painting: string } }) {
  return <ProductDetail productId={paintings.find(item => item.slug === params.painting)?.productId} />;
}
