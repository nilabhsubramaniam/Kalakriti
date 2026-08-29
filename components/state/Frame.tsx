import { Motif } from '@/components/ornament/Motifs';
import type { MotifKey } from '@/lib/stateThemes';
import type { ImageAsset } from '@/lib/states/types';

/**
 * Picture where one exists, motif where one does not.
 *
 * This is the whole hybrid rule in one place. Both branches produce the same
 * box at the same ratio with the same reveal, so a slot can gain a photograph
 * later without moving a pixel of layout.
 *
 * A plain <img> rather than next/image: every asset here is local and
 * hand-sized, so the optimiser would earn nothing, and the site keeps its
 * fully-static posture with no image runtime. `width`/`height` plus the
 * container's aspect-ratio reserve the box, so there is no layout shift.
 * Switching to next/image later is a change to this file alone.
 */
export default function Frame({
  image,
  motif,
  ratio = '4 / 3',
  className = '',
  eager = false,
  children,
}: {
  image?: ImageAsset;
  motif: MotifKey;
  /** Any CSS aspect-ratio value. */
  ratio?: string;
  className?: string;
  /** Set on the hero only — everything else stays lazy. */
  eager?: boolean;
  /** Badges and overlays, positioned against the frame. */
  children?: React.ReactNode;
}) {
  return (
    <div
      className={`kk-frame ${image ? 'kk-frame--photo' : 'kk-frame--motif'} ${className}`}
      style={{ aspectRatio: ratio }}
    >
      {image ? (
        /* next/image is declined on purpose here — see the note above. The
           exemption is this element only, not the rule for the codebase. */
        // eslint-disable-next-line @next/next/no-img-element
        <img
          className="kk-frame-img"
          src={image.src}
          alt={image.alt}
          width={image.width}
          height={image.height}
          loading={eager ? 'eager' : 'lazy'}
          decoding="async"
          style={image.focal ? { objectPosition: image.focal } : undefined}
        />
      ) : (
        <span className="kk-frame-motif" aria-hidden="true">
          <Motif name={motif} size="100%" strokeWidth={1.2} />
        </span>
      )}
      {children}
      {image?.credit && <span className="kk-frame-credit">{image.credit}</span>}
    </div>
  );
}
