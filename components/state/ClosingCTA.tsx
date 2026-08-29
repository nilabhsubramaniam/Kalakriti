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
}: {
  state: string;
  motif: MotifKey;
  shloka: string;
}) {
  return (
    <section className="kk-st-close" data-reveal>
      <Motif name={motif} className="kk-st-close-mark" size={180} strokeWidth={1} />

      <p className="kk-st-close-shloka kk-deva">{shloka}</p>
      <h2 className="kk-st-close-title">Take a piece of {state} home</h2>
      <p className="kk-st-close-body">
        Every piece here names the household and the district it came from. Buy
        the work, or go and watch it being made.
      </p>

      <p className="kk-st-hero-cta">
        <a className="kk-st-cta kk-st-cta--lead" href="#crafts">Shop the crafts</a>
        <a className="kk-st-cta" href="#experiences">Book an experience</a>
      </p>
    </section>
  );
}
