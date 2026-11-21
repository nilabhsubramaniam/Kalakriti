# Himachal Pradesh regional chapter

Implemented locally on 21 November 2026, following Uttarakhand. No commit, branch, push or deployment is included.

## Experience

`/state/himachal-pradesh` uses an original embroidered floral surround inspired by Chamba needlework. Cool ivory, red, blue and green follow the registered palette, with existing royal typography and Devanagari native text. Quiet reading surfaces keep the background from competing with the content. The hero retains the full image composition and the longer state heading wraps naturally.

Six selected collections introduce Chamba Rumal, Kullu shawls, Kinnauri shawls, Kangra painting, Chamba chappal and Himachali wood carving. Kullu and Kinnauri weaving have distinct imagery and introductions. District associations are entry points rather than claims of exclusive origin.

The hero leads directly into collections without a decorative slogan ribbon. Concise cards open separate collection/process pages, while three journal entries open dedicated reading pages. Six item details reuse the image-first gallery, opt-in image-backed Three.js presentation, four view presets, rotation and zoom. No scanned or volumetric models were added.

Country selection and the cart use existing INR/EUR/USD/GBP pathways with fixed local sample prices. Product records and dimensions remain fixtures for later API integration. There is no new checkout, payment, inventory or booking service. No named makers, workshops, GI-authorised inventory, fibre-purity or wood-species certifications are invented. The footwear has one explicitly stated sample size, rather than an unimplemented variant selector.

Six tourism entries link Kullu, Chamba, Kangra, Shimla, Kinnaur and Spiti to official visitor information. No opening-time, access, weather, booking or fee promises are included.

## Files and boundaries

- `lib/states/himachalPradesh.ts`: typed regional content, district associations, sample items, three articles and six visitor entries.
- `components/state/HimachalPradeshJournal.tsx`: server-rendered regional landing and section navigation.
- `app/state/himachal-pradesh/crafts/[craft]/page.tsx`: six static collection/making pages.
- `app/state/himachal-pradesh/journal/[article]/page.tsx`: three static reading routes.
- `app/state/himachal-pradesh/products/[product]/page.tsx`: six static item routes using the shared layout.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: select the detailed landing.
- `lib/states/journalTheme.ts`: native text and regional navbar/footer/cart theme metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: eighth sample catalogue region, fixed market values and explicit item URLs.
- `lib/stateThemes.ts`: selected craft labels expanded; palette, typography and other regional settings retained.
- `app/globals.css`: shared selectors include `.kk-hp-journal`/`.kk-footer-hp`; mural, hero edges and readability adjustments are scoped to Himachal Pradesh.

The production build produces 173 static outputs, including 15 additional child routes. Framework versions, dependencies, CSP, asset origins, the India atlas/D3 implementation, selection store and viewer rendering lifecycle are unchanged.

## Source review

Primary sources checked on 21 November 2026 support regional context, not provenance or certification of individual sample items.

- [Himachal Tourism — ethnic crafts](https://himachaltourism.gov.in/destination/ethnic/): Chamba Rumal, Kullu/Kinnauri textiles and regional wood-carving settings.
- [Chamba district — One District One Product](https://hpchamba.nic.in/one-district-one-product/): Rumal embroidery and gift-giving context.
- [National Portal — Chamba Rumal](https://www.india.gov.in/explore-india/odop/details/chamba-rumal): regional introduction.
- [Development Commissioner Handicrafts — GI compendium](https://handicrafts.nic.in/CmsUpload/12222017102212GI%20BOOK%20FINAL%202-5-17_resized.pdf): embroidered composition and the double-sided stitch tradition. Source terminology varies between double satin and double darning; no claim is made that the generated concept demonstrates a verified reverse face.
- [NIESBUD — Kullu handloom diagnostic report](https://niesbud.nic.in/docs/2024-25/Reports/Comprehensive-Diagnostic-Reports-of-Kullu-Handloom-Cluster.pdf): textile products and regional centres. Historical statistics were not used as current product data.
- [Himachal State Council — GI overview](https://himcoste.hp.gov.in/Patent%20Information%20Centre/Pdf/GIs%20of%20H.P.pdf): regional textile names and Kinnauri geometric design context. Registration of a tradition does not establish certification of sample inventory; no GI item badges are applied.
- [Kangra district — paintings](https://hpkangra.nic.in/gallery/kangra-paintings/) and [Himachal Tourism — Kangra](https://himachaltourism.gov.in/destination/kangra/): regional painting context.
- [MSME — Himachal Pradesh strategic investment plan](https://ramp.msme.gov.in/ramp/pdf-documents/sip-states/Himachal_Pradesh.pdf): Chamba leather-footwear and embroidery cluster.
- [Development Commissioner Handicrafts — northern craft clusters](https://handicrafts.nic.in/pdf/Northern_REgion.pdf): Kullu woodcraft and Chamba leather/embroidery associations.
- Official visitor information: [Kullu](https://himachaltourism.gov.in/destination/kullu-2/), [Chamba](https://himachaltourism.gov.in/destination/chamba/), [Kangra](https://hpkangra.nic.in/tourism/), [Shimla](https://hpshimla.nic.in/tourism/), [Kinnaur](https://himachaltourism.gov.in/destination/kinnaur/) and [Spiti](https://himachaltourism.gov.in/destination/spiti-valley/).

## Assets

Eight conceptual compositions were generated using the built-in image tool, visually inspected and resized/re-encoded into `public/images/hp-*.webp`: hero, mural, rumal, kullu, kinnauri, kangra, chappal and wood. The floral needlework and landscape are original concepts, not reproductions attributed to a historical maker or ceremonial setting. The veranda does not depict a named workshop or monument.

[Exact prompts, source paths and file metadata](HIMACHAL_PRADESH_IMAGE_PROMPTS.json) record provenance. Original PNGs remain outside the repository; earlier regional images are intact. No external asset host was added.

## Verification

Strict TypeScript, zero-warning lint and the 173-output production build passed. Local Chrome with SwiftShader checked widths 320, 390, 768, 1024, 1281 and 1440px; all 15 child routes on mobile; all four presets on each of six viewers; section anchors; regional navbar/footer; six visitor entries; Kinnauri search; unknown-route 404s; and a mixed Himachal/Bihar cart with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed.

Desktop/mobile hero, mobile craft cards and desktop footer screenshots were visually reviewed. Additional checks confirmed red native text with a 14px English gloss, expected sample prices in all four currencies, and product-image/purchase availability when WebGL is disabled. These local software-rendered checks do not establish physical-device performance or comprehensive screen-reader coverage.

The existing Uttarakhand journey regression also passed after the shared theme/catalogue expansion, including its six viewers, responsive layouts, search, regional navigation/footer and mixed-region cart totals. Existing Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks passed.
