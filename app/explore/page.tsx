import type { Metadata } from 'next';
import RegionalDiscovery from '@/components/landing/RegionalDiscovery';

export const metadata: Metadata = {
  title: 'Explore India — Kalakriti',
  description: 'Discover the crafts and living traditions of India through an interactive cultural map. Explore every state and union territory in 3D or 2D.',
};

export default function ExplorePage() {
  return <div className="kk-home kk-explore"><RegionalDiscovery /></div>;
}
