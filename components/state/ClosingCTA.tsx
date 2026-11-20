import Link from 'next/link';
import { Motif } from '@/components/ornament/Motifs';
import type { MotifKey } from '@/lib/stateThemes';

/**
 * The page used to end on a list of tourist sites, which is a strange place to
 * leave someone who has just read nine craft stories. This closes on the two
 * decisions the page has been building toward.
 */
export default function ClosingCTA({
  state,
  motif,
  shloka,
  detailed,
}: {
  state: string;
  motif: MotifKey;
  shloka: string;
  /** False for a state whose catalogue is not written yet. */
  detailed: boolean;
}) {
  return (
    <section className="kk-st-close" data-reveal>
      <Motif name={motif} className="kk-st-close-mark" size={180} strokeWidth={1} />

      <p className="kk-st-close-shloka kk-deva">{shloka}</p>

      {detailed ? (
        <>
          <h2 className="kk-st-close-title">Take a piece of {state} home</h2>
          <p className="kk-st-close-body">
            Discover the districts, materials and processes behind these traditions.
            The catalogue is a preview; online shopping and bookings are coming soon.
          </p>
          <p className="kk-st-hero-cta">
            <a className="kk-st-cta kk-st-cta--lead" href="#crafts">Explore the crafts</a>
            <a className="kk-st-cta" href="#experiences">See experiences</a>
          </p>
        </>
      ) : (
        <>
          <h2 className="kk-st-close-title">Keep exploring {state}</h2>
          <p className="kk-st-close-body">
            Follow the materials, patterns and techniques introduced here, or
            continue across India to discover another regional craft story.
          </p>
          <p className="kk-st-hero-cta">
            <a className="kk-st-cta kk-st-cta--lead" href="#crafts">
              Revisit the traditions
            </a>
            <Link className="kk-st-cta" href="/explore">All of India</Link>
          </p>
        </>
      )}
    </section>
  );
}
