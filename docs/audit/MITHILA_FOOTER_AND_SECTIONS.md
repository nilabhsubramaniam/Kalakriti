# Remaining homepage backgrounds and Mithila footer

Implemented locally following the user's request to extend the decorative treatment to the remaining sections and make the footer resemble Mithila painting.

## Changes

- `app/page.tsx`: the place/process/material section now has a full-width workshop background with its existing content kept within the reading width. The closing brand story and values strip share a softer embroidered background; the existing complete illustration is preserved.
- `app/globals.css`: independent native CSS view timelines for the process and closing sections, reusing the restrained ±28px decorative drift. Static mobile/tablet, reduced-motion and unsupported-browser fallbacks remain. Near-opaque card surfaces protect text. No JavaScript scroll listener or continuous animation loop is added.
- `components/layout/SiteFooter.tsx`: shared decorative mural layer, Maithili soil-of-Mithila line and farewell with English gloss. All existing navigation destinations remain. The mural is aria-hidden and cannot intercept pointer events. The footer does not animate; keyboard focus uses a clear gold outline. The existing atlas-specific footer hiding remains.
- Footer styling uses deep maroon, antique gold, paired fish, lotus, birds and painted border details. The centre is quiet behind links; mobile preserves visible side artwork with a stronger contrast wash.

## Generated artwork

Built-in image-generation tool used. Exact prompts and original output paths are in [REMAINING_BACKGROUND_PROMPTS.json](REMAINING_BACKGROUND_PROMPTS.json).

| Saved asset | Dimensions | Size |
| --- | --- | --- |
| `public/images/craft-workshop-background.webp` | 1774×887 | 184,370 bytes |
| `public/images/mithila-footer-mural.webp` | 1942×809 | 130,058 bytes |

Both are decorative craft-inspired illustrations, not documented traditional artifacts or verified products. The closing section reuses `public/images/stitched-textile-background.webp`. No new dependency, external origin, geographic data, backend or deployment change.

## Validation

- TypeScript, strict lint, static production build and `git diff --check`: passed; homepage and atlas remain static with 36 generated state routes.
- Chrome measured independent process and closing timeline translations changing with scroll. Reduced motion removed both animations and reset translation to zero. Mobile/tablet backgrounds were static at 320, 390 and 768px; desktop motion was present at 1024/1440px.
- No horizontal overflow at those five widths and no runtime exceptions.
- Footer mural loaded, is hidden from assistive technology, does not capture pointer events and has no animation. Both Maithili lines were present. Keyboard focus had a visible outline.
- All nine unique footer destinations returned HTTP 200. The shared mural is present on Bihar's state page; the footer remains hidden on the dedicated atlas.
- Desktop process/closing section and desktop/mobile footer screenshots visually inspected: `/tmp/kalakriti-remaining-sections-desktop.png`, `/tmp/kalakriti-mithila-footer-desktop.png`, `/tmp/kalakriti-mithila-footer-mobile.png`.
- Detailed browser report: `/tmp/kalakriti-footer-report.json`.

Physical-device performance and unsupported-browser presentation remain unverified; feature detection retains the static fallback.
