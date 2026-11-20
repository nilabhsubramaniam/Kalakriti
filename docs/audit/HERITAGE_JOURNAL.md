# Heritage journal homepage

> **Approved brand integration:** The craft logo is now used in the header/footer, with compact mobile branding and refined navigation/search/state-directory behavior. [Implementation and validation](LOGO_NAVIGATION_IMPLEMENTATION.md).

> **Complete decorative treatment:** Process and closing sections now have matching backgrounds and independent desktop parallax. The shared footer has a static Mithila-inspired maroon/gold mural and Maithili farewell. [Implementation, generated assets and verification](MITHILA_FOOTER_AND_SECTIONS.md).

> **Textile background refinement:** “Stitched, woven, remembered” now has an embroidered linen background and its own restrained desktop scroll timeline, paired with static mobile/reduced-motion views. [Implementation and prompt](STITCHED_BACKGROUND.md).

> **Painted Roots refinement:** The regional story section now has a generated painted-paper background with native desktop parallax and static mobile/reduced-motion fallbacks. [Implementation, asset prompt and validation](PAINTED_ROOTS.md).

Implemented locally on 2026-11-19 following the user's new illustrated embroidery reference. The supplied image is treated as visual direction, not as factual source material or instructions. Kalakriti remains the product name. No commit, push or deployment.

## Design and content

The homepage now progresses through a centered introductory heading, a complete panoramic craft illustration, three regional stories, an eight-card embroidery/textile grid, three place/process/material stories and a closing brand panel. The warm ivory, restrained maroon and fine gold frames follow the reference's editorial composition. The reading width is capped at 1120px while the panoramic opening spans the screen. Existing native entrance/hover motion remains optional and respects reduced motion.

The reference's named maker profiles, quotations, Sanskrit claims and implied certifications are not reproduced. The practice section links to existing craft stories and plainly states that consented individual profiles will follow. Tamil Nadu silk and Kerala Kasavu are labeled weaving, not embroidery. Generated imagery is described as illustration and craft studies; it does not assert authentic products, verified artisan identities or documentary locations.

## Source changes

- `app/page.tsx`: new server-rendered editorial composition, meaningful section headings, native-script labels, existing destination links and disclosures. Anchors `collections`, `categories`, `community` and `about` remain available to the shared header/footer.
- `lib/landing/editorial.ts`: homepage editorial selections and copy. The existing state registry continues to supply the application's state identities, palettes and routes. No new state routes or catalogue data.
- `components/landing/HomeMotion.tsx`: observe the journal's intro and marked reveal targets. Content remains visible before JavaScript.
- `app/globals.css`: responsive journal styles scoped to `.kk-home-journal`, finer frames, two/four-column textile grid and compact practice cards.
- `public/images/*.webp`: nine locally generated editorial images, listed below. Existing image assets and components are retained. The former embroidered-marketplace hero is reused in the closing panel; Bihar keeps its courtyard illustration. The D3/Three.js map stays on `/explore`.

No dependencies, fonts, CSP, map geometry or deployment configuration changed. The static homepage first-load JavaScript estimate is 103 kB, compared with 117 kB before this composition; this is a build estimate, not a measured performance score.

## Image provenance

Built-in image-generation tool used. Final prompts and original source paths are stored in [JOURNAL_IMAGE_PROMPTS.json](JOURNAL_IMAGE_PROMPTS.json). WebP assets are in `public/images/`:

| Asset | Dimensions | Approximate source-file size |
| --- | --- | --- |
| stitching-courtyard.webp | 1920×819 | 355 KiB |
| tamil-silk-workshop.webp | 1536×1024 | 325 KiB |
| kerala-weaving-study.webp | 1536×1024 | 242 KiB |
| sujani-stitch-study.webp | 1536×1024 | 336 KiB |
| phulkari-stitch-study.webp | 1536×1024 | 476 KiB |
| chikankari-stitch-study.webp | 1536×1024 | 295 KiB |
| kutch-stitch-study.webp | 1536×1024 | 542 KiB |
| kantha-stitch-study.webp | 1536×1024 | 534 KiB |
| kashida-stitch-study.webp | 1536×1024 | 396 KiB |

The images were visually inspected and converted to WebP. Next Image provides responsive optimized variants; only the opening panorama has priority loading. These are illustrative interpretations requiring specialist review before any use as educational reference or catalogue product evidence.

## Validation

- `KALAKRITI_BUILD_DIR=.next-relief pnpm validate`: TypeScript, strict lint and production build passed. Static homepage and atlas plus all 36 generated state pages retained.
- `git diff --check`: passed.
- Chrome production preview at 320, 390, 768, 1024 and 1440px: no horizontal overflow, one h1, three regional stories, eight tradition cards. The panoramic hero retains its source aspect ratio without a fixed-height crop.
- All 13 unique homepage destinations returned HTTP 200; referenced section anchors were present in returned HTML.
- Scroll reveals triggered; reduced-motion mode started none. Without JavaScript, cards remained visible and all eight tradition links remained in markup.
- The separate atlas still loaded WebGL and Bihar still displayed the original courtyard illustration. No runtime exceptions recorded.
- Desktop/mobile screenshots visually inspected: `/tmp/kalakriti-journal-1440.png` and `/tmp/kalakriti-journal-390.png`. Browser report: `/tmp/kalakriti-journal-report.json`.

Physical mobile devices and field performance remain unverified. The homepage is currently an editorial discovery experience; purchasing and verified artisan profiles remain future work.


## Complete-image hero overlay

At the user's request, the existing courtyard image now forms the entire desktop hero, with the heading, Maithili line, description and links over its lower-left area. `app/page.tsx` adds the heading line break and simplifies the illustration caption; scoped rules in `app/globals.css` layer ivory/gold text over a maroon gradient. The source image retains its complete native aspect ratio. No new artwork or dependency is introduced.

At widths up to 900px, the same hero places the complete image above its text to retain readable type and avoid covering or cropping the people. This is an intentional responsive composition, rather than forcing all the desktop copy over a shallow mobile panorama. Existing motion and later sections remain intact.

TypeScript, strict lint and static production build passed. Browser checks cover 320, 390, 768, 1024 and 1440px, including actual text/image overlap above 900px and a separate text row below that width, intact image aspect ratio, no horizontal overflow, working destinations/anchors, reduced motion and no-JavaScript content. Detailed results and screenshots: `/tmp/kalakriti-overlay-report.json`, `/tmp/kalakriti-overlay-1440.png`, `/tmp/kalakriti-overlay-390.png`.


## Contemporary interaction polish

The user's requested button glow is implemented in `app/globals.css`: a restrained warm-gold halo, maroon shadow and 2px hover lift for enabled calls to action and controls in the homepage, navigation, atlas and state pages. Matching keyboard focus halos retain a visible outline. Disabled controls are excluded. Hover lift is limited to hover-capable devices without a reduced-motion preference; reduced-motion users retain an immediate glow without animated transitions. Coarse pointers get press feedback.

Additional bounded refinements: softly translucent header with progressive backdrop blur, layered card shadows and illuminated borders, rounded gradient primary CTA, improved search focus, and 12px regional story copy. Existing hero image, section structure, regional themes and library icons remain intact. No dependency, route or deployment changes.

`pnpm validate` passed TypeScript, strict lint and static production build. Chrome checks verified actual hover shadow changes, a 2px lift, keyboard outline/halo, zero-duration reduced-motion transitions with no lift, disabled controls without glow, and no horizontal overflow at 320, 390, 768, 1024 and 1440px. Map controls and state CTAs were also exercised. Screenshot: `/tmp/kalakriti-button-glow.png`; mobile layout: `/tmp/kalakriti-polish-mobile.png`; computed interaction results: `/tmp/kalakriti-glow-report.json`.

## Consistent parchment cards across all homepage sections

At the user's request, the Roots card treatment now extends to all 14 homepage cards: three regional stories, eight textile traditions and three place/process/material stories. `app/page.tsx` uses state-registry pigment values for the textile cards and explicit visual action rows, while retaining each whole-card link and its original destination. The existing imagery and editorial descriptions are preserved.

Scoped rules in `app/globals.css` unify warm parchment gradients, gold frames, rounded edges, maroon action rows, hover/focus treatment and contained text spacing. Textile images keep their complete 3:2 frame. The closing panel keeps its contrasting maroon field with a parchment CTA, and the values strip uses matching small parchment panels. The decorative textile background scales to the taller desktop section so its embroidered side motifs remain visible; product/story image proportions are not stretched. No new artwork, dependencies, routes or map changes.

Validation: TypeScript, strict lint, static production build and whitespace checks passed. Chrome checked 320, 390, 641, 768, 1024 and 1440px: all 14 cards have themed gradients, no horizontal overflow, contained action rows and aligned actions within each grid row. Keyboard focus is visible, all 13 unique homepage destinations returned HTTP 200, reduced motion disables the decorative background movement, and all cards remain visible without JavaScript. A final desktop check after the decorative-border adjustment also passed.

Screenshots visually inspected: `/tmp/kalakriti-all-folios-textiles-1440.png`, `/tmp/kalakriti-all-folios-textiles-390.png`, `/tmp/kalakriti-all-folios-stories-1440.png`. Reports: `/tmp/kalakriti-all-folios-report.json` and `/tmp/kalakriti-all-folios-final-desktop.json`. Full homepage review capture: `/tmp/kalakriti-consistent-homepage.png`. No deployment.


## Regional story expansion — 2026-11-20

The Roots section now contains six regional stories: Bihar, Tamil Nadu, Kerala, Punjab, Gujarat and West Bengal. This supersedes the earlier three-card inventory above; the homepage now has 17 editorial cards overall. Existing approved illustrations are reused, including the original Bihar courtyard.

Each Roots card now includes a signature craft and two related specialities drawn from `lib/stateThemes.ts`. `lib/landing/editorial.ts` holds the editorial descriptions, images, language tags, destinations and signature indices. These are illustrative discovery stories, not verified seller or product listings; broader craft attribution still needs editorial review before commercial publication.

`components/landing/RegionalStoryRail.tsx` adds native horizontal browsing, Previous/Next controls, end-state disabling and reduced-motion-aware scrolling. All card content is still rendered on the server through `app/page.tsx`; without JavaScript, native scrolling and links remain available. The rail shows three cards on desktop, two on tablets and one with a neighbouring preview on phones. `app/globals.css` retains the parchment frames and painted background, increases Roots body text to 16px and labels to 14px, and fits the decorative background to the taller content. No dependencies, routes, CSP, deployment settings or map selection behavior changed.

Validation: `pnpm validate` passed TypeScript, strict lint and production build (42 static pages). Production Chrome checks passed at 320, 390, 641, 768, 1024 and 1440px: six cards, twelve nonempty speciality fields, no document overflow, functional Next control and disabled controls at the boundaries. All six destination URLs returned HTTP 200. Reduced-motion browsing and server-rendered content without JavaScript passed, with no runtime exceptions. Browser evidence: `/tmp/kalakriti-regional-report.json`, `/tmp/kalakriti-regional-desktop.png`, `/tmp/kalakriti-regional-mobile.png`. Existing pnpm configuration and optional sharp advisories remain; no package changes were made.


### Automatic regional carousel refinement — 2026-11-20

Per the user's follow-up, `components/landing/RegionalStoryRail.tsx` replaces Previous/Next navigation with automatic advancement every six seconds, returning to the beginning after the last visible group. A Pause/Resume control lets visitors stop the movement. Autoplay also pauses on hover, keyboard focus, hidden browser tabs, and when the rail is outside the viewport. Pointer, wheel and keyboard interaction defer advancement for eight seconds. Reduced-motion preferences disable autoplay, including live preference changes. Native swipe, scrolling, focusable links and server-rendered content remain available. Timers, observers and event listeners are cleaned up on unmount. No CSS, dependency or route changes were needed.

Validation: `pnpm validate` passed TypeScript, strict lint and the 42-page static production build. Browser checks cover automatic advancement, removal of Previous/Next buttons, explicit pause and reduced-motion behavior.
