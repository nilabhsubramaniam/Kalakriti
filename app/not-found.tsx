import type { Metadata } from 'next';
import Link from 'next/link';
import { Motif } from '@/components/ornament/Motifs';

export const metadata: Metadata = {
  title: 'Page not found | Kalakriti',
};

/** Shown for any unknown route, inside the site's own header and footer. */
export default function NotFound() {
  return (
    <section className="kk-not-found" aria-labelledby="not-found-title">
      <Motif name="fish" size={56} strokeWidth={1.2} />
      <p className="kk-not-found-eyebrow">Page not found</p>
      <h1 id="not-found-title">This thread leads nowhere.</h1>
      <p>The page may have moved, or the link may be mistyped. Pick up the story from one of these.</p>
      <div className="kk-not-found-actions">
        <Link className="kk-home-button" href="/">Return home</Link>
        <Link className="kk-not-found-link" href="/explore">Explore India</Link>
      </div>
    </section>
  );
}
