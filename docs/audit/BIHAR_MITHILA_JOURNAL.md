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
