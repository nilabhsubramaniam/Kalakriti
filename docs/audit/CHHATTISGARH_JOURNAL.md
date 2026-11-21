# Chhattisgarh regional chapter

Implemented locally on 21 November 2026. No commit, branch, push or deployment is included.

## Experience and implementation

`/state/chhattisgarh` has an original Dhokra-inspired surround with bronze coiled lines, birds and forest-green foliage at the edges. Warm paper and quiet reading surfaces retain legibility. The complete craft still life remains visible. Regional navbar, footer, cart and native text follow the registered palette and folk typography.

Six collections cover Dhokra casting, worked iron, Kosa weaving, bamboo, terracotta and wood carving. Kondagaon, Bastar and Raigarh provide selected regional associations, not claims of exclusive origin. Cast metal and forged iron have separate introductions. The Hindi label is corrected to `बस्तर की कला`; an unsupported oldest/4,000-year description was replaced with a broader craft introduction.

The hero leads directly to concise collection cards without a slogan ribbon. Six collection pages, three reading pages and six product pages reuse the established architecture. Product detail offers image mode and an opt-in image-backed Three.js presentation with four presets, rotation and zoom. These are not scanned or volumetric objects.

Implementation paths:

- `lib/states/chhattisgarh.ts`: typed content, collections, sample items, articles and six visitor entries.
- `components/state/ChhattisgarhJournal.tsx`: regional landing and section links.
- `app/state/chhattisgarh/crafts/[craft]/page.tsx`: six static collection/process routes.
- `app/state/chhattisgarh/journal/[article]/page.tsx`: three reading routes.
- `app/state/chhattisgarh/products/[product]/page.tsx`: six shared item-detail routes.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: regional registration and landing selection.
- `lib/states/journalTheme.ts`: navbar/footer/cart metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: tenth catalogue region, explicit item URLs and fixed market prices.
- `lib/stateThemes.ts`: craft labels, broader regional description and corrected Hindi grammar.
- `app/globals.css`: shared selectors include `.kk-cg-journal`/`.kk-footer-cg`; background, hero and native text treatments are region scoped.

Catalogue records, dimensions and INR/EUR/USD/GBP prices are local fixtures for future API integration. Cart persistence is local. No checkout, payment, inventory or booking backend is introduced. No named maker, workshop provenance, GI authorisation, alloy composition, wood species or fibre purity is asserted for sample inventory.

Visitor entries link Chitrakote, Tirathgarh, Sirpur, Bhoramdeo, Mainpat and Raipur to official information without opening-time, fee, weather or access promises. Framework versions, dependencies, CSP, atlas/D3 and viewer rendering lifecycle remain unchanged.

## Sources

Primary sources checked on 21 November 2026 support regional context rather than provenance of individual sample products.

- [Kondagaon district — ODOP](https://kondagaon.gov.in/en/one-district-one-product/): metal, iron, clay, bamboo, wood and weaving context. Kondagaon is treated as its present district, within the broader Bastar region.
- [Bastar district — handicraft](https://bastar.gov.in/en/departments/handicraft/): natural materials, metalwork and wax-line surface details.
- [Raigarh district — handicraft](https://raigarh.gov.in/en/tourism/handicraft/): Kosa and the local textile industry.
- [TRIFED — Dhokra](https://trifed.tribal.gov.in/en/node/576): lost-wax casting context.
- [Development Commissioner Handicrafts — craft reference](https://handicrafts.nic.in/CmsUpload/12222017102212GI%20BOOK%20FINAL%202-5-17_resized.pdf): Bastar woodwork context; no individual-item GI badge is inferred.
- [Development Commissioner Handicrafts — bamboo survey](https://handicrafts.nic.in/CmsUpload/15052022030557BambooSurvey.pdf): regional bamboo craft context.
- Official visitor information: [Chitrakote](https://tourism.cgstate.gov.in/destinations/Bastar/Chitrakote), [Bastar/Tirathgarh](https://bastar.gov.in/en/tourism/), [Sirpur](https://mahasamund.gov.in/en/tourist-place/sirpur/), [Kabirdham/Bhoramdeo](https://kawardha.gov.in/en/tourism/), [Mainpat](https://tourism.cgstate.gov.in/destinations/Sarguja/Mainpath) and [Raipur](https://raipur.gov.in/en/tourism/).

## Assets

Eight original concepts were generated with the built-in image tool and resized/re-encoded to `public/images/cg-*.webp`: hero, mural, dhokra, iron, kosa, bamboo, terracotta and wood. The veranda does not depict a named workshop. Images are conceptual artwork rather than documentary inventory photographs. Earlier regional assets remain intact. [Exact prompts, source paths and file metadata](CHHATTISGARH_IMAGE_PROMPTS.json) record provenance. Original PNGs remain outside the repository.

## Verification

Strict TypeScript, zero-warning lint and the production build passed. The build contains 200 prerendered application routes (203 static outputs including framework outputs), with 15 new child routes.

Local headless Chrome with SwiftShader checked six widths from 320 to 1440px, all 15 child routes on mobile, all four presets on each of six viewers, section anchors, regional navigation/footer, six visitor entries, Kosa search, unknown-route 404s and a mixed Chhattisgarh/Bihar cart with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed. Desktop hero/footer and mobile craft-card screenshots were visually reviewed.

Software-rendered local checks do not establish physical-device performance or comprehensive screen-reader coverage.

Additional checks passed for all four market prices and image/purchase availability with WebGL disabled. The existing Madhya Pradesh journey regression also passed after the shared catalogue expansion, including its six viewers and mixed-region basket. Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks passed.
