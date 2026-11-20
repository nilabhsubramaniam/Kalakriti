import { MapPin, Users, HandHeart, Sprout, type LucideIcon } from 'lucide-react';

const values: { title: string; description: string; icon: LucideIcon }[] = [
  { title: 'Origin matters', description: 'Discover the place behind the craft', icon: MapPin },
  { title: 'People before products', description: 'Make room for the maker’s story', icon: Users },
  { title: 'Made with meaning', description: 'Learn the material and the process', icon: HandHeart },
  { title: 'Heritage, carried forward', description: 'Keep living traditions in view', icon: Sprout },
];

export default function TrustSignalsBar() {
  return <section className="kk-home-values" aria-label="The ideas behind Kalakriti">{values.map(({ title, description, icon: Icon }) => <div key={title}><Icon size={32} aria-hidden="true" /><div><h3>{title}</h3><p>{description}</p></div></div>)}</section>;
}
