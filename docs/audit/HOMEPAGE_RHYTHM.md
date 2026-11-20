# Homepage spacing, crop and motion refinement

> **Latest homepage — 2026-11-19:** The new reference-inspired heritage journal composition is implemented, with three regional stories, eight textile studies and a panoramic embroidery scene. Existing imagery, state routes and the separate atlas are preserved. See [implementation and image provenance](HERITAGE_JOURNAL.md).

Implemented locally on 2026-11-19 after approval of the spacing/motion proposal. No dependencies, map renderer, security headers or deployment changes.

## Design changes

- `app/page.tsx`: use intrinsic 1536×1024 hero-image dimensions instead of a fill image inside a fixed-height crop. Responsive source sizes reflect the desktop image column. Add the isolated homepage motion controller.
- `app/globals.css`: scope a closer 26–40px section rhythm to the editorial homepage; compact categories and decorative story areas; use horizontal story cards on phones; reduce repeated values/newsletter spacing. Desktop hero uses a 36/64 text/art grid and natural image height. Remove the state strip's negative overlap so it cannot cover the artwork. The soft blend stays at the image's empty edge; the hero does not pan or zoom.
- `components/landing/HomeMotion.tsx`: native IntersectionObserver plus Web Animations API for one-time, 12px/520ms entrance reveals. Content is visible in server markup and CSS. Unsupported APIs retain static content. Preference changes and unmount cancel owned animations and disconnect the observer. Reduced-motion users get no reveal animations.
- CSS hover enhancements are limited to devices with hover and no reduced-motion preference: a 3px card lift, 2.5% craft-image zoom, and a small directional arrow movement. The hero image remains stationary to avoid crop changes.

The map stays at `/explore`; Bihar keeps its courtyard image. Existing library interface icons, links and catalogue-preview disclosures remain intact. No scroll hijacking or persistent animation loop is introduced.

## Validation

- `KALAKRITI_BUILD_DIR=.next-relief pnpm validate`: TypeScript, strict lint and static production build passed; all 36 state pages retained. `git diff --check` passed.
- Chrome production preview at 320, 390, 768, 1024 and 1440px: no horizontal overflow. The hero image retains its approximately 3:2 aspect ratio and its rendered height matches its container at every width, so the container no longer crops the artwork.
- At 390px, total page height is 6076px versus 7095px in the prior captured design (1019px / 14% shorter). At 1440px, 2735px versus 2999px (264px / 9% shorter). These are comparisons with the earlier reference-refresh screenshots, using the same 900px browser height.
- Instrumented native animation calls verified initial and scroll-triggered reveals. The three community cards revealed on entry. Changing the OS preference to reduced motion stopped running animations; a fresh reduced-motion page started none.
- With JavaScript disabled, craft cards remained visible at opacity 1 and all ten featured state links remained present.
- The dedicated map still loaded WebGL; Bihar retained the original courtyard illustration. No runtime exceptions recorded.
- Desktop and mobile full-page screenshots visually inspected: `/tmp/kalakriti-rhythm-home-1440.png`, `/tmp/kalakriti-rhythm-home-390.png`. Detailed browser report: `/tmp/kalakriti-rhythm-report.json`.

Physical-device performance remains unverified. Browser checks use desktop Chrome with mobile emulation and software WebGL.
