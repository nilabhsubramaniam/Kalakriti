# Haryana regional chapter

Implemented locally on 21 November 2026. No commit, branch, push or deployment is included.

## Experience

`/state/haryana` uses an original surround inspired by durrie geometry and reed bindings. Terracotta, crimson, muted indigo and straw-gold ornaments sit at the edges around a quiet ivory centre. Local reading surfaces protect text from the artwork. The complete hero still life is visible without an arch crop; typography retains the registered royal display face, with Devanagari native text `हरियाणा की कारीगरी` and an English gloss.

Six collections introduce Panipat durries, Jhajjar pottery, Farrukhnagar sarkanda mudhas, Sonipat peedhas, Rewari brasswork and Ambala embroidery. Farrukhnagar is recorded under the present Gurugram district. The reed mudha and framed wooden peedha have distinct images and explanations. Regional associations provide entry points rather than claims of exclusive origin.

The registry’s Phulkari-only description is broadened to the state’s varied material crafts. Phulkari remains acknowledged in the embroidery collection’s wider context. The accent deepens from `#D2691E` to `#9C4D1D` for better small-text/button contrast against the registered paper, retaining crimson and gold supporting tokens.

The main page leads directly to concise collection cards. Six collection/process pages, three reading pages and six item pages use the established architecture. No slogan ribbon or embedded map is added. Image mode opens first; the optional Three.js presentation is an image-backed surface with four presets, rotation and zoom, not a scan or volumetric object.

The twelfth sample catalogue region uses fixed INR/EUR/USD/GBP prices and the locally persisted basket. Dimensions and prices are fixtures for later API integration. No checkout, payment, inventory or booking backend is introduced. No named artisan, workshop provenance, GI authorisation, material purity, furniture load rating, food-contact suitability or health/cooling claim is asserted for sample products. Clay and metal pieces are specified as decorative.

Six visitor entries link Kurukshetra, Panipat, Surajkund, Pinjore, Rewari and Hisar to official information without event dates, opening hours, access, fee or booking promises.

## Implementation

Inspected `CLAUDE.md`, current Punjab content/component and route templates, state types, regional theme metadata, catalogue/pricing, product-detail mapping, layout fonts, global CSS and the running app.

- `lib/states/haryana.ts`: typed content, district associations, six collections/items, three articles and six visitor links.
- `components/state/HaryanaJournal.tsx`: server-rendered landing and section navigation.
- `app/state/haryana/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/haryana/journal/[article]/page.tsx`: three reading routes.
- `app/state/haryana/products/[product]/page.tsx`: six shared detail routes.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: register and select the new detailed chapter.
- `lib/states/journalTheme.ts`: navbar/footer/cart metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: twelfth catalogue region, explicit URLs and market prices.
- `lib/stateThemes.ts`: broader regional labels, native text and deepened terracotta accent.
- `app/globals.css`: shared selectors include `.kk-hr-journal`/`.kk-footer-hr`; surround, hero and native/location-text treatments are scoped to Haryana.
- `public/images/hr-*.webp`: eight new local assets.

README and architecture/asset notes record this frontend milestone. Framework versions, dependencies, CSP, external asset origins, atlas/D3 and viewer lifecycle remain unchanged. No dependencies were added or removed.

## Source review

Primary sources checked on 21 November 2026 support regional context, not provenance or certification of sample inventory.

- [Haryana Tourism — craft overview and cluster table](https://haryanatourism.gov.in/about-us/): Panipat durries, Farrukhnagar mudhas, Sonipat peedhas, Rewari brasswork and Ambala embroidery associations. Historical administrative labels are not blindly copied. The source’s sweeping social generalisations and water-health claims are not repeated.
- [MoSPI — Haryana craft overview](https://mospi.gov.in/sites/default/files/economic-census/sixth_economic_census/handicraft/Haryana.pdf): reed work, pottery, brassware and regional embroidery context. Historical counts are not presented as current.
- [Jhajjar gazetteer — industries](https://cdnbbsr.s3waas.gov.in/s3d79c6256b9bdac53a55801a066b70da3/uploads/2021/06/2021060472.pdf): historical pottery and surahi forms. Old material recipes, exhibition superlatives and cooling assertions are not copied into product specifications.
- [Panipat district](https://panipat.gov.in/): weaving-city context.
- [Development Commissioner Handicrafts — district craft list](https://handicrafts.nic.in/cmsUpload/20260102104219New_Annexure-1%28ITDP%29.pdf): contextual district craft activity; no individual producer relationship or programme membership is implied.
- Official visitor information: [Brahma Sarovar/Kurukshetra](https://haryanatourism.gov.in/places_of_interest/brahma-sarovar/), [Panipat](https://panipat.gov.in/tourism/), [Surajkund](https://haryanatourism.gov.in/places_of_interest/surajkund-2/), [Pinjore gardens](https://panchkula.nic.in/tourist-place/yadavindra_garden_pinjore/), [Rewari loco shed](https://www.haryana.gov.in/places-centres/loco-shedrewari/) and [Hisar](https://hisar.gov.in/tourist-places-2/).

## Assets and prompts

The built-in image tool generated eight original concepts: hero, mural, durrie, pottery, mudha, peedha, brass and embroidery. All were visually inspected and resized/re-encoded to `public/images/hr-*.webp`. The veranda is an original atmospheric composition, not a named workshop. [Exact prompts, original PNG paths and final file metadata](HARYANA_IMAGE_PROMPTS.json) record generation. Source PNGs remain outside the repository and earlier regional assets remain intact.

## Verification

Strict TypeScript, zero-warning lint and the production build passed. The build generates 230 prerendered application routes (233 static outputs including framework outputs), adding 15 child routes.

Local headless Chrome with SwiftShader checked six widths from 320 to 1440px, all 15 child routes on mobile, all four presets in each of six viewers, section anchors, regional navigation/footer, six visitor entries, Mudha search, unknown-route 404s and a mixed Haryana/Bihar cart with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed. Desktop hero/footer and mobile hero/craft screenshots were visually reviewed.

All four market prices and image/purchase availability with WebGL disabled were checked. The existing Punjab journey regression passed after the shared catalogue expansion. Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks passed. Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage.

The running development server on port 3000 initially retained the older state registry. It was restarted, and `/state/haryana` was then verified to serve the new chapter, hero asset and regional footer. The user’s development app remains running; the separate production QA server and headless browser are stopped after verification.
