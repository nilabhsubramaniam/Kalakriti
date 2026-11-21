import type { Metadata } from 'next';
import Cart from '@/components/commerce/Cart';
export const metadata: Metadata = { title: 'Your cart | Kalakriti', robots: { index: false, follow: true } };
export default function CartPage() { return <Cart />; }
