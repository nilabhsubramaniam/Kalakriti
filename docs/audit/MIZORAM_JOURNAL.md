# Mizoram regional chapter

Implemented locally on 23 November 2026. No branch, commit, push or deployment is included.

## Experience and implementation

`/state/mizoram` introduces five selected collections: Puanchei, Pawndum, Ngotekherh and Hmaram weaving, plus bamboo/cane work. They introduce selected material traditions rather than representing every community in the state. Red, black and ivory woven borders frame quiet reading surfaces; green details use the registered secondary palette. The same identity continues through collection, journal and product pages, with regional navigation and a textile footer. No embedded state map is added.

- `lib/states/mizoram.ts`: five collections, six sample items, three articles and six visitor entries.
- `components/state/MizoramJournal.tsx`: regional overview.
- `app/state/mizoram/crafts/[craft]/page.tsx`: five collection routes, related products and process notes.
- `app/state/mizoram/journal/[article]/page.tsx`: three separate reading routes.
- `app/state/mizoram/products/[product]/page.tsx`: six image-first item routes using the shared close-up viewer.
- `lib/states/index.ts`, `lib/states/journalTheme.ts`, `app/state/[slug]/page.tsx` and `lib/stateThemes.ts`: region registration, discovery labels and theme identity.
- `lib/commerce/{regions,catalog,productDetails}.ts`: search/catalogue integration, explicit four-market fixture quotes and detail links.
- Labelled Mizoram rules in `app/globals.css` extend the shared journal styling; previous palettes are preserved.

Four contemporary textile studies, an upright bamboo basket and a shallow tray form the sample collection. Named traditions are explained separately from the conceptual items. These artworks do not establish a product’s certified motif, GI entitlement, producer, origin, fibre content or actual inventory. The registry’s earlier generalisation that every pattern encodes social standing is replaced with a more specific material overview. No artisan identities are invented.

INR/EUR/USD/GBP prices remain preview fixtures rather than live conversion. The shared cart, search and market selection are reused. Product close-ups remain opt-in image-backed Three.js surfaces with four presets, not volumetric scans. Image mode and normal purchase controls remain available without WebGL.

## Sources and cultural limits

Reviewed on 23 November 2026 for cultural context, not inventory verification.

- [MISTIC — five traditional Mizo puans](https://mistic.mizoram.gov.in/handover-programme-of-gi-documents-of-five-traditional-mizo-puan/): named textile traditions. GI history is contextual, not a badge for the sample collection.
- [Art & Culture — Mizo Puanchei](https://mizoculture.mizoram.gov.in/page/mizo-puanchei-gi-583): patterned woven bands, construction and ceremonial context. Historical or gender-exclusive social prescriptions are not adopted as shopping guidance.
- [MISTIC — Pawndum](https://mistic.mizoram.gov.in/gi-no-586-pawndum/): coloured stripe and dark-ground relationships. Specific ceremonial associations are acknowledged without transferring funeral or marriage meaning to a generic contemporary item.
- [MISTIC — Ngotekherh](https://mistic.mizoram.gov.in/gi-no-587-ngotekherh/): contrasting bands and named textile context.
- [Art & Culture — Hmaram](https://mizoculture.mizoram.gov.in/page/hmaram-gi-588) and [government benchmarks](https://mizoramassembly.in/storage/gazettes/February2021/Qx1NhjeMCTLGg7F7dS2L.pdf): named motifs and black/white pattern vocabulary. The concept is not presented as an exact specification-compliant reproduction.
- [IGNCA — textiles](https://ignca.gov.in/divisionss/janapada-sampada/northeastern-regional-centre/textiles-of-mizoram/): loom and weaving context. Gender-role generalisations are not repeated.
- [Aizawl district — handicraft](https://aizawl.nic.in/handicraft-2/) and [IGNCA — bamboo/cane culture](https://ignca.gov.in/divisionss/janapada-sampada/northeastern-regional-centre/bamboo-and-cane-culture-of-mizoram/): household material knowledge. The sample basket is not assigned the name of a documented carrying form.
- Visitor information: [Mizoram Tourism places](https://tourism.mizoram.gov.in/page/places-of-interest), [government places of interest](https://protocol.mizoram.gov.in/page/places-of-interest), Aizawl and MISTIC links above. Entries introduce the State Museum, Thenzawl, Reiek, Falkawn and the broader craft landscape. No current access, opening hours, permits, travel-safety or booking claims are made.

## Assets and architecture

Eight new local `mz-*.webp` conceptual assets cover one continuous hero scene, a quiet-centred woven mural and six item studies. Original generated PNGs and prior regional assets remain intact. [Exact prompts and output metadata](MIZORAM_IMAGE_PROMPTS.json) record provenance. The veranda is unnamed, with no fabricated maker or workshop attribution.

No dependency, framework, backend, checkout, authentication, CSP, map renderer or shared viewer-lifecycle change is introduced. Existing staged account/navigation work and earlier regional changes are preserved.

## Validation

- TypeScript and strict lint pass with zero warnings; `git diff --check` passes.
- Offline mesh preparation and isolated `.next-relief` production build pass: 536 prerendered application routes / 539 static outputs. The running development output directory is preserved.
- Every referenced Mizoram image exists locally and all eight assets return valid HTTP image responses. The bamboo collection hero was verified after correcting its filename reference.
- All 15 Mizoram routes return HTTP 200; unknown craft, product and journal routes return 404.
- Actual headless Chrome measurements and captures at 320, 390, 768, 1024 and 1440 CSS pixels show no horizontal overflow, clear logo/action boundaries, a hero action at least 44 × 44 pixels, five collections, six items, three stories, six visitor entries and the correct mural/footer. Hero screenshots, a phone collection capture, desktop footer and the eight-asset contact sheet were visually inspected.
- Collection, item and journal detail layouts retain the regional theme on a 390px viewport. All six item close-ups and their four presets pass. The last item was verified in a separate tab after a Chrome navigation timeout.
- INR/EUR/USD/GBP fixture prices pass. A clean mixed Mizoram/Bihar basket totals ₹9,000 and €128 in its respective markets.
- The craft anchor clears the fixed header; the 36-region menu, Escape handling and Ngotekherh search result pass.
- With WebGL disabled, the item image and purchase controls remain usable.
- Manipur, Nagaland, Arunachal Pradesh, Meghalaya, Assam and home retain their captured heading, footer class and footer background baselines. These comparisons do not claim pixel-identical screenshots or a comprehensive regression audit.
- No runtime exceptions were reported in completed checks. Chrome capture tests were separated from offscreen-image decode waits; there is no claim of hardware GPU performance benchmarking, real scanned models or complete accessibility certification.
- Port 3000 serves the new Mizoram chapter. Existing account/navigation changes and earlier regional work remain uncommitted and intact.
