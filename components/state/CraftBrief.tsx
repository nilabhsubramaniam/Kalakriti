import type { CraftGuide } from '@/lib/states/editorial';

/**
 * Which craft is the state's signature.
 *
 * The registry names the art form loosely against the craft list — "Madhubani"
 * against "Madhubani painting", "Kasavu" against "Kasavu sarees" — so an exact
 * comparison matched in only 5 of 36 states. Matching on the art form's first
 * word finds it in nearly all of them, and simply marks nothing when it
 * genuinely does not correspond.
 */
function signatureIndex(crafts: string[], art: string): number {
  const key = art.toLowerCase().replace(/[^a-z ]/g, ' ').trim().split(' ')[0];
  if (!key) return -1;
  return crafts.findIndex(c => c.toLowerCase().includes(key));
}

/** Regional craft introductions, kept independent of product listings. */
export default function CraftBrief({
  crafts,
  art,
  guides,
}: {
  crafts: string[];
  guides?: CraftGuide[];
  art: string;
}) {
  const signature = signatureIndex(crafts, art);

  return (
    <ul className={`kk-st-briefs${guides?.length ? ' kk-st-briefs--editorial' : ''}`} data-reveal>
      {crafts.map((name, i) => {
        const guide = guides?.find(entry => entry.name === name);
        return (
          <li key={name} className="kk-st-brief">
            {guide && <p className="kk-st-brief-material">{guide.material}</p>}
            <h3 className="kk-st-brief-name">{name}</h3>
            {guide && <p className="kk-st-brief-description">{guide.description}</p>}
            {i === signature && <span className="kk-st-brief-tag kk-label">Signature</span>}
          </li>
        );
      })}
    </ul>
  );
}
