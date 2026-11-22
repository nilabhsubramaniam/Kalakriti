# Lakshadweep regional chapter

Implemented locally on 22 November 2026. No commit, branch, push or deployment is included.

## Experience

`/state/lakshadweep` has lagoon-teal wave linework and coir-braid borders around a pale reading centre. The existing temple typography, palette, wave motif and Malayalam `ദ്വീപ് കല` are retained with an English gloss. This line does not claim a single language or culture for all islands. Minicoy’s distinct cultural setting is acknowledged in the visitor entry. The full rectangular hero remains visible.

Three focused material/process collections introduce coir weaving, cordage/braiding and coconut-shell work. They hold six sample products: a mat, coaster set, craft cord, decorative braided piece, keepsake box and pendant. Two collections examine different stages of the same coir industry rather than pretending to be separate community traditions. Each collection page shows its two linked products. The original registry’s unsupported drawing-free Odam-building claim is removed; boats are not turned into fabricated retail inventory.

Three reading pages examine husk-to-surface work, twisted strands and two scales of coconut-shell work. Three collection routes and six product routes keep the landing concise. The cord is for decorative craft projects, with no load rating or marine claim; the braided piece has no heat-resistance claim. Items retain broad Lakshadweep associations rather than invented island/maker origins.

Six visitor entries link Kavaratti, Agatti, Kadmat, Kalpeni, Minicoy and Bangaram to official island information. The section includes an official entry-permit information link. It does not promise that every listed island is available to every visitor or give changing permit procedures, booking availability or transport schedules. The administration’s permit page is used instead of hardcoding a transaction portal that recently changed.

Lakshadweep is the twenty-second sample catalogue region. Its three research-backed collections are deliberately narrower than the six-collection Andaman chapter.

## Regional files

- `lib/states/lakshadweep.ts`: typed collections, six sample items, three articles and six visitor entries.
- `components/state/LakshadweepJournal.tsx`: chapter layout and section links.
- `app/state/lakshadweep/crafts/[craft]/page.tsx`: three two-product collection routes.
- `app/state/lakshadweep/journal/[article]/page.tsx`: three reading routes.
- `app/state/lakshadweep/products/[product]/page.tsx`: six shared item-detail routes.
- `public/images/ld-*.webp`: hero, mural, mat, coaster, cord, braid, box and pendant.
- `.kk-ld-journal` / `.kk-footer-ld`: regional CSS scopes.

## Source review

Primary sources checked on 22 November 2026 support regional context, not certification or provenance of sample products.

- [Lakshadweep — Department of Industries](https://lakshadweep.gov.in/departments-new/department-of-industries/): coir, coconut-based industries and craft-development context.
- [Parliament — regional industrial units](https://sansad.in/getFile/loksabhaquestions/annex/187/AU5263_zYGLfj.pdf?source=pqals): coir production and training landscape. Unit counts and locations are not transferred to product origin or current stock claims.
- [ICAR-CPCRI — coconut farming and coir](https://cpcri.gov.in/filemgr/webfs/publication/Coconut_farming_in_Lakshadweep.pdf): fibre, yarn, curled fibre and mat production context; historical figures are not presented as current statistics.
- [Lakshadweep — coir tender archive](https://lakshadweep.gov.in/notice/tender-for-coir-products/): yarn and rope product context, not current purchasing availability.
- [Development Commissioner Handicrafts — district craft programme](https://handicrafts.gov.in/CmsUpload/02432026104315New_Annexure-1%28ITDP%29.pdf): Lakshadweep coir and coconut-shell craft context.
- [Lakshadweep — art and culture](https://lakshadweep.gov.in/department-of-art-and-culture/): wider material-culture and museum context without inventing a heritage boat replica.
- Official island pages: [Kavaratti](https://lakshadweep.gov.in/islands/kavaratti/), [Agatti](https://lakshadweep.gov.in/islands/agatti/), [Kadmat](https://lakshadweep.gov.in/islands/kadmat/), [Kalpeni](https://lakshadweep.gov.in/islands/kalpeni/), [Minicoy](https://lakshadweep.gov.in/islands/minicoy/) and [Bangaram](https://lakshadweep.gov.in/islands/bangaram/). Older page statistics and schedule details are not repeated.
- [Official places of interest](https://lakshadweep.gov.in/tourism/places-of-interest/) and [entry-permit information](https://lakshadweep.gov.in/tourism/entry-permit/): official access-information pathway; no universal-access promise or application advice is embedded.

[Exact asset prompts and file metadata](LAKSHADWEEP_IMAGE_PROMPTS.json).

## Shared implementation

Both chapters reuse static server-rendered collection and reading routes, the existing market selector, persistent local basket and shared product-detail gallery. Galleries open in image mode; optional Three.js viewing provides four presets, rotation and zoom on an image-backed surface. These are not scans or volumetric models. Image viewing and purchase controls remain available without WebGL.

Prices, dimensions and products remain sample fixtures for later API integration, including fixed INR/EUR/USD/GBP values rather than live exchange rates. No stock, payment, seller or booking backend is introduced. No named maker, workshop, community authorship, GI-authorised stock, certification, timber species or material-sourcing guarantee is invented. Products do not claim food-safety, heat resistance or marine/load-bearing suitability. Materials are coconut shell rather than marine shell; no coral or turtle-shell inventory is added.

Framework versions, dependencies, CSP, external asset origins, D3/atlas geometry and renderer lifecycle are unchanged. The geometry registry’s legacy Andaman key is retained. The footer now uses the existing `displayName` helper for customer-facing region names, so the legacy singular Andaman key is not displayed there.

Shared integration files: `lib/states/index.ts`, `app/state/[slug]/page.tsx`, `lib/states/journalTheme.ts`, `lib/commerce/regions.ts`, `lib/commerce/catalog.ts`, `lib/commerce/productDetails.ts`, `lib/stateThemes.ts`, `app/globals.css` and `components/layout/SiteFooter.tsx`.

## Assets

Eight original compositions per chapter were generated with the built-in image tool, visually inspected and resized/re-encoded as local WebP files. Exact prompts, original PNG paths and output metadata are linked below. Source PNGs and earlier regional assets remain intact. These are conceptual artworks rather than documentary inventory photographs. Verandas are not named workshops or identifiable island locations. The borders leave quiet reading centres without horizontal frames. No attributed community patterns or ceremonial reproductions are invented.

## Validation scope

Strict TypeScript, zero-warning lint and the production build passed. The combined build contains 373 prerendered application routes (376 static outputs including framework outputs): 15 new Andaman & Nicobar child routes and 12 new Lakshadweep child routes.

Browser checks use local headless Chrome and SwiftShader software WebGL. They cover widths 320, 390, 768, 1024, 1281 and 1440px, mobile detail-route layouts, all four presets in six product viewers per chapter, anchor clearance, regional navigation/footer, visitor entries, search, unknown-route 404s and mixed-state basket totals. Physical-device performance and comprehensive screen-reader coverage are not established by this profile.

Visual review caught a missing Lakshadweep registration in the shared CSS selectors, which left its footer image incorrectly positioned and its navigation/footer in the base colours. The selectors were corrected and browser verification strengthened to assert the rendered footer background colour, in addition to the regional class and variables. This was fixed before final verification.

Final browser verification passed with no runtime exceptions or horizontal overflow. All 27 new child routes loaded on mobile; all four presets worked in all twelve optional product viewers. Both chapters passed four-market price checks and image/purchase fallback checks with WebGL disabled. Desktop hero/footer and mobile hero/craft screenshots were reviewed after the Lakshadweep style correction.

The normal port 3000 development app initially served stale overviews. Its repository-owned development server was restarted; both new chapters, correctly coloured/contained footers and contained hero images were then confirmed in the live app. A combined Andaman/Lakshadweep basket produced the expected INR/EUR/USD/GBP totals without runtime exceptions. Puducherry’s full journey regression and Bihar/Jammu & Kashmir/Rajasthan/homepage theme checks passed.

The development app remains running. The separate production preview and headless browser were stopped after verification. All changes remain uncommitted.
