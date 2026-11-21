# Bihar: Mithila journal redesign

Implemented 2026-11-20 following explicit approval to redesign the entire Bihar page around Mithila painting, remove its map and illustrate its cards. This supersedes the earlier incremental Bihar styling in STATE_CRAFT_CONTENT.md.

## Page and scope

`app/state/[slug]/page.tsx` renders the new server component `components/state/BiharJournal.tsx` only for Bihar. Other state routes continue through their existing template. Bihar's district map and map navigation link are absent; no district geometry request or D3 district-map chunk is needed by its page. The separate `/explore` atlas, map geometry, selection store and reusable DistrictMap components remain available and unchanged. The district data remains in `lib/states/bihar.ts` for provenance and joins, without being rendered as a map.

The new page progresses through:

- An editorial hero with the complete existing courtyard image, native Maithili line and links to the craft and culture sections.
- Four illustrated cultural chapters using native details disclosures, preserving the existing written stories.
- Nine image-led craft cards. Native exclusive details reveal the story, process, makers and existing product previews. All twelve product previews now have illustrative images and retain disabled purchase controls.
- Five illustrated experience concepts, clearly identified as unbookable concepts rather than confirmed workshops.
- A compact textual list of the ten existing places. No generated image is presented as a photograph or accurate reconstruction of a heritage site.
- A Mithila closing panel linking back to crafts and to the separate India atlas.

`app/globals.css` adds scoped `kk-bihar-journal` / `kk-bj-*` rules: one continuous full-page mural, maroon and ivory paper surfaces, readable 16px+ prose and 14px regular labels, native serif headings, complete images, responsive grids, and a sticky section navigation that clears the shared header. Text panels preserve legibility over the painted setting. New page content is not hidden behind scroll animation and requires no new client component. Library ChevronDown icons provide disclosure cues; no new handwritten icon is used.

## Asset generation and provenance

The built-in image_gen tool generated nine project-bound assets. Prompts are stored verbatim in [BIHAR_JOURNAL_IMAGE_PROMPTS.json](BIHAR_JOURNAL_IMAGE_PROMPTS.json). Source PNGs remain in the tool's original generated-images directory. Production files are compressed WebP copies in `public/images/`:

- `bihar-mithila-mural.webp` — 1536×1024 painted paper, fish, peacocks, lotus and geometric side borders with a quiet centre.
- `bihar-manjusha-study.webp` — 1024×1024 pink/yellow/green narrative panel.
- `bihar-tikuli-study.webp` — 1024×1024 lacquered round decorative panels.
- `bihar-lac-study.webp` — 1024×1024 red bangles.
- `bihar-stone-study.webp` — 1024×1024 black stone bowl and lamp.
- `bihar-makhana-study.webp` — 1024×1024 bowl of popped makhana.
- `bihar-kachni-study.webp` — 1024×1024 monochrome hatched painting.
- `bihar-sikki-dolls-study.webp` — 1024×1024 coiled-grass figurines.
- `bihar-painted-stole-study.webp` — 1024×1024 painted textile.

The nine assets were visually inspected; a review contact sheet is at `/tmp/kalakriti-bihar-art-review.png`. Existing painting, basket, Sujani, Tussar and courtyard illustrations are reused where relevant. Image metadata and credits in `lib/states/bihar.ts` identify these as illustrative studies. Product alt text explicitly distinguishes studies from photographs of the listed item. They do not authenticate materials, regional origin, makers or GI status of any actual product. Existing historical copy and preview data were preserved, not newly researched or independently authenticated in this visual redesign.

Images use next/image and native lazy loading where appropriate; the original hero remains the priority image. The continuous background is a compressed same-origin CSS image. There is no new dependency, external media host, CSP change, backend or deployment configuration.

## Validation

- `pnpm validate` passed strict TypeScript, strict lint and all 42 static build outputs. State route first-load JS remains 103 kB in the production build report.
- Chrome production checks passed at 320, 390, 768, 1024 and 1440px. Each width has one h1, nine illustrated crafts, twelve illustrated product previews, four cultural chapters and five illustrated experience concepts, with no document overflow before or after expanding stories.
- No Bihar district-map markup, map navigation target, district GeoJSON request or DistrictMap component-chunk request was found during the browser run.
- All journal images decoded successfully in desktop and phone captures. Full courtyard image proportions and contain-fit craft imagery are preserved.
- Native craft disclosure opening/closing, exclusive craft behavior, cultural chapter opening and disabled purchase controls passed. These stories also open with JavaScript disabled.
- The introduction clears the fixed header at all five widths; a visual overlap found in the first review was corrected before final verification. Card rows now stretch to align their reading actions.
- Gujarat's hero dimensions and card counts match the pre-change baseline at each tested width, with no Bihar journal markup or styling applied.
- No runtime exceptions were recorded. `git diff --check` passed for the changed tracked files.
- Evidence: `/tmp/kalakriti-bihar-journal-report.json`, `/tmp/kalakriti-bihar-journal-desktop.png`, `/tmp/kalakriti-bihar-journal-mobile.png`, `/tmp/kalakriti-bihar-journal-gallery.png`, `/tmp/kalakriti-bihar-journal-gallery-mobile.png`.
- Existing optional-sharp and pnpm configuration advisories remain. This is a local implementation; no dependencies were installed and no commit, push or deployment was performed.

## Top navigation and pigment-paper refinement — 2026-11-20

At the user's request, `BiharJournal.tsx` now renders its section navigation before the hero. The page reserves the shared header's 124px phone / 94px wider height, so the regional menu begins directly beneath it and remains sticky. Hero top spacing is reduced accordingly; section anchors retain clearance for both navigation bars. The four destinations and native horizontal scrolling remain available without JavaScript.

Bihar-scoped CSS replaces the pale flat panels with turmeric-tinted paper and a subtle maroon paper shade, derived entirely from existing theme variables. Hero copy and section headings use translucent pigment-paper washes with a red painted edge. Craft, chapter, experience and preview cards, the places panel, the closing panel, illustration credits and image gutters use the coordinated warmer surfaces. The regional menu uses dark ink with ivory lettering and turmeric rules. No new assets, packages, route or map changes were needed.

Validation: `pnpm validate` passed TypeScript, strict lint and the static production build. Production browser checks passed at 320, 390, 768, 1024 and 1440px: the menu precedes the hero, its top edge aligns directly with the shared header, sticky positioning is applied, and craft cards use the tinted gradient. All illustrated content, native disclosures, no-JavaScript behavior and map removal checks still pass; Gujarat matches the existing baseline. No runtime errors or page overflow were found. Updated desktop/mobile and gallery screenshots retain the evidence paths above.

## Clarified background scope — 2026-11-20

The user clarified that the full-page Mithila mural must remain. The preceding quiet-paper experiment was reverted: `bihar-mithila-mural.webp` is restored as the repeating page background, with the prior warm card palette and hero panel. Only the separate backgrounds behind the regional section menu and section headings are removed. The menu remains at the top and uses a transparent, blurred surface with dark text for legibility. Card imagery, stories, map removal and other state pages are preserved.

Validation of the clarified scope: `pnpm validate` and `git diff --check` passed. Production checks at 320, 390, 768, 1024 and 1440px confirm the original repeating mural is restored, both regional-menu and section-heading background colours are transparent, top-menu placement is preserved, and cards keep their warm surfaces. All prior illustrated-content, disclosure, no-JavaScript, no-map and unchanged-Gujarat checks pass with no runtime exceptions or document overflow. Evidence paths above are updated for this version.

## Bihar legibility and search polish — 2026-11-21

At the user's request, the heading treatment now softens the mural locally behind the text using a blurred parchment fade, without replacing the full-page painting or adding a hard panel outline. Display headings use a stronger 600 weight and more comfortable line height; regular eyebrow text uses a darker pigment blend. This covers the culture, craft and making introductions, including “The home was the first canvas” and “Many crafts. One living landscape.”

Repeated visible illustration captions are removed from the Bihar hero, craft-card images and product previews. The original asset metadata and alt text remain intact; one concise disclosure identifies craft imagery as illustrative and shopping/prices as previews. The generated studies have not become authenticated product photographs, and these styling changes do not implement checkout or bookings. Other state templates and shared product metadata are unchanged; Bihar's preview rendering omits repeated credit overlays without mutating the stored images.

The navbar search styling is scoped through `body:has(.kk-bihar-journal)`. It replaces the overlapping input/form focus halos with one muted, inset keyboard-visible outline. The field clips its internal content while the sibling results dropdown remains visible. Input text is 14px with a shorter Bihar placeholder. Results open below the navbar and remain constrained to the viewport. Other regions retain their current search styling and text.

Verification uses the existing local dependencies directly: `tsc --noEmit`, `next lint --max-warnings 0`, `node scripts/build-india-map.mjs`, and `KALAKRITI_BUILD_DIR=.next-relief next build`. The `pnpm validate` wrapper attempted an automatic dependency preflight with the installed pnpm 11.8 and failed to fetch metadata in the restricted environment; no dependency or package-manager configuration change was made to work around it. The direct validation commands passed, including all 42 static outputs.

Production Chrome checks at 320, 390, 641, 768, 1024 and 1440px cover heading fades/weight, retained full-page mural, removed caption overlays, contained search controls, a single visible form focus indicator, search results below the navbar and within the viewport, Escape dismissal, native craft expansion and disabled purchase previews. A Gujarat check confirms its existing 11px search styling remains unchanged. Evidence: `/tmp/kalakriti-bihar-legibility-report.json`, `/tmp/kalakriti-bihar-readable-1440.png`, `/tmp/kalakriti-bihar-readable-390.png`, `/tmp/kalakriti-bihar-search-1440.png`, `/tmp/kalakriti-bihar-search-390.png`.

## Collection-first discovery and separate reading — 2026-11-21

The user clarified that Bihar should help visitors choose a craft rather than unfold all content in place. `BiharJournal.tsx` now puts the craft section immediately after the hero. The hero's “Explore the crafts” remains a real anchor to that section. Nine concise image-led collection links show craft names and districts; they do not expand and do not say “Explore the story.” The gallery no longer carries product cards, prices or availability/illustration notices.

Longer reading has its own destination. Four cultural chapters appear as a compact editorial reading list with excerpts linking to static `/state/bihar/journal/[article]` pages. The original chapter text remains available on those pages. The making section links directly to the relevant collection's process section; unbookable experience cards and availability labels are no longer part of Bihar's discovery flow. Places remain a concise district/name list.

Nine static collection routes under `/state/bihar/crafts/[craft]` render the corresponding craft's forms, primary district, story, associated districts and making information. Madhubani's collection includes the existing three form studies and connects to Manjusha in Bhagalpur and Tikuli in Patna. Form cards show names, district context, descriptions and imagery; they do not display unverified prices, GI badges, stock claims, purchase controls or production-readiness notices. Existing product/asset provenance data is preserved in the registry for future catalogue work; it is not rewritten as live inventory.

`lib/states/biharNavigation.ts` supplies stable article slugs/images and craft destinations. The two new route templates use `generateStaticParams` with `dynamicParams = false`; unknown craft/article slugs return 404. The original 36 regional routes remain intact. All navigation and reading works through native links without requiring JavaScript. The shared search recognises nested Bihar paths, and the existing footer availability paragraph is hidden only for Bihar layouts.

The full-page painting, top section menu and legibility/search refinements are preserved. No dependencies, map geometry, backend, payments, external services or deployment changes are added. No commit is requested for this follow-up.

Collection-first validation: direct TypeScript, strict lint and production build passed, with **55 static outputs** (the previous 42 plus nine collections and four articles). All thirteen child URLs returned 200; unknown craft and article slugs returned 404. Production Chrome checks passed at 320, 390, 768, 1024 and 1440px: nine linked district-labelled collections, four article rows, no details expanders, no visible preview/availability/illustration notices, no overflow, correct hero anchor clearance, real collection/article navigation and a Madhubani gallery with three forms plus Patna/Bhagalpur painting links. Navigation into a collection also worked with JavaScript disabled. Gujarat's original overview and footer behavior remain unchanged. No runtime exceptions were recorded. Active homepage Sujani and Tussar links now lead to the corresponding collection/process routes.

Evidence: `/tmp/kalakriti-bihar-discovery-report.json`, `/tmp/kalakriti-bihar-collections-1440.png`, `/tmp/kalakriti-bihar-collections-390.png`, `/tmp/kalakriti-madhubani-collection.png`, `/tmp/kalakriti-bihar-reading-page.png`. `git diff --check` passed. No commit, push or deployment was performed.

### 21 November 2026 — basket, market pricing and tourism

- Shared navigation now exposes `/cart` with an item count. Bihar collection items display market prices and add-to-cart controls.
- `lib/commerce/catalog.ts` owns fixed INR/EUR/USD/GBP fixtures and integer minor-unit formatting. The market is a shopper choice, not inferred geolocation; “Euro area” avoids implying every European country uses EUR. Replace the lookup with authoritative API quotes later, including server-side checkout repricing.
- `lib/store/useShopStore.ts` retains market and product IDs/quantities locally. Stored input is validated, deduplicated and capped at 20 per item; prices are never trusted from storage. Storage failure leaves an in-memory basket. This is not a stock check, order or payment integration.
- Tourism cards feature Rajgir, Bodh Gaya and Nalanda with district, highlights and official visitor-information links. Remaining destinations are retained below. Facts/links checked against Bihar Tourism and BSTDC on 21 November 2026; no invented landmark photographs or booking offers were added.
- Validation: TypeScript, strict lint and production build passed (56 static outputs). Chrome exercised INR→EUR switching, add twice, live count/subtotal, reload persistence, decrement/remove, corrupt storage, tourism cards and navigation widths 320–1440px. No runtime exceptions or horizontal overflow found; cart and tourism screenshots visually reviewed.

### 21 November 2026 — Kohbar painting details

The Kohbar collection image/title/detail action now opens `/state/bihar/paintings/kohbar-wedding-panel`. The static page presents the existing artwork, origin/specification, shared market selector and cart controls alongside an opt-in Three.js gallery. Full/left/right/detail presets, drag, zoom and keyboard controls inspect the existing front image. This is an image-backed surface, not an accurate scan or fabricated rear/depth model. The original image remains available without JavaScript or WebGL. Other products retain their existing collection destinations until appropriate media is configured. See the updated Three.js architecture for ownership and validation details.

**21 November 2026 — all Bihar collections:** The product detail/gallery pattern now applies to all 12 catalogue items across nine craft sections. A shared server detail layout and opt-in image-backed 3D viewer provide per-item content, original aspect ratio, close-up labels, market prices, cart and related-product links. Eleven new static `/state/bihar/products/[product]` routes join the preserved Kohbar URL. See `lib/commerce/productDetails.ts`, `components/product/ProductDetail.tsx`, `components/product/ProductGallery.tsx` and `lib/three/createProductScene.ts`. Existing image assets are retained; these are presentation surfaces, not newly authored 3D models.
