# Sikkim regional chapter

Implemented locally on 23 November 2026. No branch, commit, push or deployment is included.

## Experience and implementation

`/state/sikkim` introduces five selected collections: Lepcha weaving, Carpet weaving, Wood carving, Handmade paper, Bamboo & cane work. These are selected material traditions, not an exhaustive account of the state’s communities. Quiet reading surfaces sit within region-specific material borders. The same identity continues through collection, journal and product pages, navigation and footer. No embedded state map is added.

- `lib/states/sikkim.ts`: five collections, six conceptual items, three reading entries and six visitor-information entries.
- `components/state/SikkimJournal.tsx`: regional chapter.
- `app/state/sikkim/crafts/[craft]/page.tsx`: five collection routes, related items and process notes.
- `app/state/sikkim/journal/[article]/page.tsx`: three separate reading routes.
- `app/state/sikkim/products/[product]/page.tsx`: six image-first item routes using the shared close-up viewer.
- Shared registration: `lib/states/index.ts`, `lib/states/journalTheme.ts`, `app/state/[slug]/page.tsx` and `lib/stateThemes.ts`.
- Shared catalogue, explicit four-market fixture quotes and product links: `lib/commerce/{regions,catalog,productDetails}.ts`.
- Labelled regional rules in `app/globals.css` extend shared layout rules without changing earlier region palettes.

Sikkim's six items are contemporary studies, not documentary stock or certified reproductions. Named traditions have their own contexts; no artisan identity, community-specific motif, producer partnership, verified origin, GI entitlement, exact fibre recipe or antique claim is invented. INR/EUR/USD/GBP prices remain explicit fixtures, not live conversion or actual offers. Shared cart, search and market selection are reused.

All six close-ups remain opt-in image-backed Three.js surfaces with four presets, not volumetric scans. Image mode and purchase controls remain available without WebGL. No dependency, framework, CSP, backend, checkout, authentication, map renderer or shared viewer-lifecycle change is introduced. Existing staged account/navigation work and earlier state changes are preserved.

## Sources and cultural limits

Reviewed on 23 November 2026 for cultural context, not inventory verification.

- [Sikkim Commerce & Industries — handicrafts/handlooms](https://industries.sikkim.gov.in/visitors/psusdetails/7): carpet, bamboo/cane, handmade paper and Thangka context. Search-indexed content was available; direct retrieval returned an intermittent 502 during review.
- [Sikkim IPR — art and culture](https://ipr.sikkim.gov.in/Home/ArtCulture): textile, carpet, wood and bamboo traditions. Thangka is acknowledged through cultural information rather than generating a named sacred image for sale.
- [UNESCO — Lepcha weaving documentation](https://www.unesco.org/sites/default/files/medias/fichiers/2022/11/382921eng.pdf): named weaving context; no UNESCO certification is claimed for the sample textiles.
- [D’source — handloom in Sikkim](https://www.dsource.in/sites/default/files/resource/handloom-sikkim/downloads/file/handloom-sikkim.pdf): loom practice and material context. Historic nettle-fibre use is not transferred to the sample items.
- [Sikkim government — handmade paper context](https://www.sikkim.gov.in/media/press-release/press-info?id=165434&name=Press+Release+From+The+Office+Of+Additional+Political+Secretary+to+Hon%27ble+Chief+Minister%2C+Namchi+District): plant-fibre paper-making context, not a supplier relationship or a certified recipe for the sample sheets.
- Visitor context: [Gangtok primary attractions](https://gangtokdistrict.nic.in/primary-attractions/), [Rabdentse](https://gyalshing.nic.in/tourist-place/rabdentse/), and [state tourism](https://sikkimtourism.gov.in/). No current access, opening hours, booking, permit or travel-safety claims are made.

## Assets

Eight new local `sk-*.webp` concepts comprise a continuous unnamed hero scene, quiet-centred background and six individual item compositions. Previous regional assets and original generated PNGs remain intact. [Prompts and output metadata](SIKKIM_IMAGE_PROMPTS.json) record provenance. No named workshop or maker attribution is fabricated.

Blue, rust-red and ivory geometric borders distinguish the chapter. Sacred imagery is not transferred to generic products; the box is not described as a Choktse and the sample tray is not a named traditional hat or carrying form.

## Validation

- TypeScript, strict lint (zero warnings), offline mesh preparation and the isolated `.next-relief` production build pass. The combined build prerenders 564 application routes / 567 static outputs; the active development output directory is preserved.
- All 15 Sikkim routes return HTTP 200; missing craft, product and journal paths return 404. Every local image reference exists and all eight new assets return valid image responses.
- Actual macOS headless Chrome checks at 320, 390, 768, 1024 and 1440 CSS pixels pass: no horizontal overflow, clear logo/action boundaries, correct regional mural/footer, six visitor entries, no embedded map canvas and a hero action at least 44 × 44 pixels. Screenshots and the asset contact sheet were visually inspected.
- Measured eyebrow text contrast is 6.58:1 on paper and 5.86:1 on deeper paper. These measurements do not claim comprehensive accessibility certification.
- All 14 child routes retain their regional theme and avoid overflow on a 390px viewport. All six item close-ups and four presets pass; item pages start in image mode.
- INR/EUR/USD/GBP fixture prices, the craft anchor, 36-region menu, Escape and Lepcha search pass. A clean combined Tripura/Sikkim basket totals ₹6,400 / €96 in the respective markets.
- With WebGL disabled, the item image and purchase controls remain usable. No runtime exceptions were reported during the completed checks. Software WebGL is a functional test, not a hardware frame-rate benchmark or evidence of a scanned object.
- Mizoram, Manipur, Nagaland, Bihar and home preserve captured headings, footer classes and footer backgrounds. These focused comparisons do not claim pixel-identical full-page regression coverage.
- No branch, commit, push or deployment was performed. Existing staged account/navigation changes and earlier regional work remain intact.
- The normal development server on port 3000 serves the new chapter with its regional background and footer.
