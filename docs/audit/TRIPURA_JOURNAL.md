# Tripura regional chapter

Implemented locally on 23 November 2026. No branch, commit, push or deployment is included.

## Experience and implementation

`/state/tripura` introduces five selected collections: Risa weaving, Rignai weaving, Bamboo basketry, Bamboo mat weaving, Cane work. These are selected material traditions, not an exhaustive account of the state’s communities. Quiet reading surfaces sit within region-specific material borders. The same identity continues through collection, journal and product pages, navigation and footer. No embedded state map is added.

- `lib/states/tripura.ts`: five collections, six conceptual items, three reading entries and six visitor-information entries.
- `components/state/TripuraJournal.tsx`: regional chapter.
- `app/state/tripura/crafts/[craft]/page.tsx`: five collection routes, related items and process notes.
- `app/state/tripura/journal/[article]/page.tsx`: three separate reading routes.
- `app/state/tripura/products/[product]/page.tsx`: six image-first item routes using the shared close-up viewer.
- Shared registration: `lib/states/index.ts`, `lib/states/journalTheme.ts`, `app/state/[slug]/page.tsx` and `lib/stateThemes.ts`.
- Shared catalogue, explicit four-market fixture quotes and product links: `lib/commerce/{regions,catalog,productDetails}.ts`.
- Labelled regional rules in `app/globals.css` extend shared layout rules without changing earlier region palettes.

Tripura's six items are contemporary studies, not documentary stock or certified reproductions. Named traditions have their own contexts; no artisan identity, community-specific motif, producer partnership, verified origin, GI entitlement, exact fibre recipe or antique claim is invented. INR/EUR/USD/GBP prices remain explicit fixtures, not live conversion or actual offers. Shared cart, search and market selection are reused.

All six close-ups remain opt-in image-backed Three.js surfaces with four presets, not volumetric scans. Image mode and purchase controls remain available without WebGL. No dependency, framework, CSP, backend, checkout, authentication, map renderer or shared viewer-lifecycle change is introduced. Existing staged account/navigation work and earlier state changes are preserved.

## Sources and cultural limits

Reviewed on 23 November 2026 for cultural context, not inventory verification.

- [GI Registry — Tripura Risa Textile](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/893): naming and regional association only. The registered tradition does not certify the conceptual sample or establish a supplier relationship.
- [Tripura Tribal Research and Cultural Institute — textile documentation](https://trci.tripura.gov.in/sites/default/files/2025-02/document%20%2848%29_merged.pdf): Risa and Rignai naming/community context. Historical procurement quantities are not current stock or prices.
- [Incredible India — Agartala arts and crafts](https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/agartala/arts-and-crafts.html): cloth and household craft context.
- [IGNCA — bamboo and cane culture of Tripura](https://ignca.gov.in/divisionss/janapada-sampada/northeastern-regional-centre/bamboo-and-cane-culture-of-tripura/): baskets, mats, furniture and material preparation. Gender-exclusive and historical-production generalisations are not repeated.
- Visitor context: [Ujjayanta Palace](https://westtripura.nic.in/tourist-place/ujayanta-palace/), [Neermahal](https://sepahijala.nic.in/tourist-place/neermahal/), [Unakoti district](https://unakoti.nic.in/tourist-places/), [TRCI](https://trci.tripura.gov.in/) and [state tourism](https://tripuratourism.gov.in/). No current access, hours, booking, permit or travel-safety advice is asserted.

## Assets

Eight new local `tp-*.webp` concepts comprise a continuous unnamed hero scene, quiet-centred background and six individual item compositions. Previous regional assets and original generated PNGs remain intact. [Prompts and output metadata](TRIPURA_IMAGE_PROMPTS.json) record provenance. No named workshop or maker attribution is fabricated.

Green text and controls are darkened with a scoped theme-token mix for readability on the deeper paper surface. Red woven borders and natural bamboo texture distinguish the chapter.

## Validation

- TypeScript, strict lint (zero warnings), offline mesh preparation and the isolated `.next-relief` production build pass. The combined build prerenders 564 application routes / 567 static outputs; the active development output directory is preserved.
- All 15 Tripura routes return HTTP 200; missing craft, product and journal paths return 404. Every local image reference exists and all eight new assets return valid image responses.
- Actual macOS headless Chrome checks at 320, 390, 768, 1024 and 1440 CSS pixels pass: no horizontal overflow, clear logo/action boundaries, correct regional mural/footer, six visitor entries, no embedded map canvas and a hero action at least 44 × 44 pixels. Screenshots and the asset contact sheet were visually inspected.
- Measured eyebrow text contrast is 5.67:1 on paper and 5.06:1 on deeper paper. These measurements do not claim comprehensive accessibility certification.
- All 14 child routes retain their regional theme and avoid overflow on a 390px viewport. All six item close-ups and four presets pass; item pages start in image mode.
- INR/EUR/USD/GBP fixture prices, the craft anchor, 36-region menu, Escape and Rignai search pass. A clean combined Tripura/Sikkim basket totals ₹6,400 / €96 in the respective markets.
- With WebGL disabled, the item image and purchase controls remain usable. No runtime exceptions were reported during the completed checks. Software WebGL is a functional test, not a hardware frame-rate benchmark or evidence of a scanned object.
- Mizoram, Manipur, Nagaland, Bihar and home preserve captured headings, footer classes and footer backgrounds. These focused comparisons do not claim pixel-identical full-page regression coverage.
- No branch, commit, push or deployment was performed. Existing staged account/navigation changes and earlier regional work remain intact.
- The normal development server on port 3000 serves the new chapter with its regional background and footer.
