import { ArrowRight } from 'lucide-react';
import Link from 'next/link';
import { Motif } from '@/components/ornament/Motifs';

export default function NewsletterStrip() {
  return <section className="kk-home-newsletter" aria-labelledby="newsletter-title"><Motif name="sun" size={61} /><div><p className="kk-home-eyebrow">Good things take time</p><h2 id="newsletter-title">There’s more to this story.</h2><p>Collection notes and maker updates are coming soon. Until then, explore our first chapter.</p></div><Link className="kk-home-button" href="/state/bihar">Begin in Bihar <ArrowRight className="kk-ui-icon" size={16} aria-hidden="true" /></Link></section>;
}
