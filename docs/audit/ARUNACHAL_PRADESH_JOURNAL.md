# Arunachal Pradesh regional chapter

Implemented locally on 23 November 2026. No commit, branch, push or deployment is included.

## Regional experience

`/state/arunachal-pradesh` now introduces six collections: Monpa carpet weaving, Adi textiles, Mishmi textiles, bamboo/cane basketry, wood carving and Monpa handmade paper. The selected collections are not an exhaustive account of the state’s communities or traditions. Adi and Mishmi work are not collapsed into one generic “tribal weave”. Carpets, wooden objects and paper have separate material/process notes.

Woven terracotta and forest-green vertical borders surround quiet ivory reading surfaces. Existing palette slots, folk typography and sun ornament are retained. Ink-mixed terracotta is used for readable text, controls and footer. A single continuous veranda hero shows the material palette. Navigation, collection/process pages, readings and product pages share the regional theme. No embedded map, decorative slogan ribbon or custom icon system is added.

The former statewide “Donyi Polo” heading is replaced with neutral English material context; it should not represent every community’s religious identity. The registry uses the verified state-name meaning, “land of dawn-lit mountains”. The existing raw key `Arunanchal Pradesh` remains compatible with GeoJSON, store and theme lookup, while the visible spelling and `/state/arunachal-pradesh` URL remain correct. No boundary/schema migration is included.

Six concise collection cards lead to separate process pages. Three reading pages cover stripes and bands, basket structure and handmade-paper texture. Six visitor entries introduce Tawang, Ziro/Lower Subansiri, Pasighat/East Siang, Roing/Lower Dibang Valley, Namsai and the Jawaharlal Nehru Museum through official information. The app does not promise current opening hours, fees, permits, transport, events or workshop access.

Arunachal Pradesh is the 31st detailed discovery entry. Products, dimensions and INR/EUR/USD/GBP prices are fixtures for later API integration. No named artisan, seller relationship, GI-authorised stock, fibre purity, dye certification, timber species or archival-paper grade is invented. The existing local basket and optional close-up viewer are reused; no checkout, payment, booking or authentication backend is introduced. Existing account work and prior regional changes remain preserved.

## Implementation

- `lib/states/arunachalPradesh.ts`: typed content, six collections/items, three readings and six visitor entries.
- `components/state/ArunachalPradeshJournal.tsx`: server-rendered chapter and section navigation.
- `app/state/arunachal-pradesh/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/arunachal-pradesh/journal/[article]/page.tsx`: three reading routes.
- `app/state/arunachal-pradesh/products/[product]/page.tsx`: six shared item-detail routes.
- `lib/states/index.ts`, `app/state/[slug]/page.tsx`: registration and dispatch.
- `lib/states/journalTheme.ts`: route-facing navigation/footer metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: catalogue integration, explicit URLs and fixed market values.
- `lib/stateThemes.ts`: selected craft labels, material summary and neutral state-name context.
- `app/globals.css`: `.kk-ar-journal`/`.kk-footer-ar` join shared selectors; mural, typography and contrast rules stay regional.

All six items start in image mode, optionally opening the existing image-backed Three.js surface and four presets. These are not scans or volumetric models. Images and purchase controls remain usable without WebGL. Framework versions, dependencies, CSP, renderer lifecycle and atlas/D3 behavior are unchanged.

## Primary source review

Reviewed on 23 November 2026 for cultural context, not inventory provenance.

- [Tawang district — culture and heritage](https://tawang.nic.in/tourism/culture-heritage/): Monpa weaving, carving and paper context. No named workshop or religious authority is inferred.
- [IGNCA — textiles of Arunachal Pradesh](https://ignca.gov.in/divisionss/janapada-sampada/northeastern-regional-centre/textiles-of-arunachal-pradesh/): community-specific weaving, stripes and bands. Dated demographic and exclusive gender-role claims are not repeated.
- [IGNCA — bamboo and cane](https://ignca.gov.in/divisionss/janapada-sampada/northeastern-regional-centre/introduction-bamboo-and-cane-culture-of-arunachal-pradesh/): basket forms and material processes. Wildlife ornaments and dated social generalisations are not transferred to products.
- [IGNCA — miscellaneous crafts](https://ignca.gov.in/divisionss/janapada-sampada/northeastern-regional-centre/miscellaneous-art-and-crafts-of-arunachal-pradesh/), [style and motifs](https://ignca.gov.in/the-style-and-motifs-in-the-art-of-arunanachal-pradesh/): carpets, woodwork and distinct community traditions. The sample box is a contemporary geometric form rather than an attributed ceremonial object.
- [Lower Dibang Valley — handicrafts](https://roing.nic.in/handicraft/), [Lower Subansiri — handicrafts](https://lowersubansiri.nic.in/handicraft-2/), [Changlang — textiles and handicrafts](https://changlang.nic.in/handicraft/), [Namsai — textile/handicraft](https://namsai.nic.in/textilehandicraft/): regional craft landscape. Historical scheme amounts, training availability and artisan counts are not copied as current promises.
- [PIB/KVIC — Monpa paper](https://www.pib.gov.in/PressReleasePage.aspx?PRID=1683797&lang=2&reg=48), [Arunachal Governor — paper makers](https://arunachalgovernor.gov.in/pr/2021/210213_Governor_felicitates_local_paper_makers.pdf): Tawang papermaking and process context. Age superlatives, workshop partnership and specific botanical composition are not claimed for inventory.
- [IP India — Monpa handmade paper](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/861): regional craft naming, not an authorised-stock badge.
- [Arunachal Tourism — state-name meaning](https://arunachaltourism.com/advanced-header/): dawn-lit mountain context, without its marketing superlatives.
- Visitor information: [Tawang](https://tawang.nic.in/tourist-places/), [Lower Subansiri](https://lowersubansiri.nic.in/tourist-places/), [East Siang](https://eastsiang.nic.in/tourist-places/), [Lower Dibang Valley](https://roing.nic.in/tourist-places/), [Namsai](https://namsai.nic.in/tourist-places/), [Cultural Affairs museums](https://research.arunachal.gov.in/?page_id=180). Some direct district fetches timed out during review; external availability can change.

## Assets

Eight local `ar-*.webp` assets comprise a hero, quiet-centred mural and six object compositions. Built-in generation, visual inspection and WebP conversion retain original PNGs and earlier assets. [Exact prompts, source paths and output metadata](ARUNACHAL_PRADESH_IMAGE_PROMPTS.json) record provenance. These are conceptual artworks, not documentary inventory photography. The unnamed veranda introduces materials; individual item images show separate compositions. No named maker, workshop, religious image or ceremonial pattern is reproduced.

## Verification

The map-preparation step, strict TypeScript, zero-warning lint and production build passed. Generated map assets are unchanged. The build has 493 prerendered application routes and 496 static outputs including framework outputs; the chapter adds 15 child routes. `git diff --check` passed.

Local headless Chrome on macOS with SwiftShader checked widths 320, 390, 768, 1024, 1281 and 1440px; all 15 mobile detail routes; four presets in each of six optional viewers; anchor clearance; regional navigation/footer; six visitor entries; Monpa search; unknown-route 404s; and a mixed Arunachal/Bihar cart with expected INR/EUR totals. All four market prices passed. With WebGL disabled, image and purchase controls remained usable. No application runtime exceptions or horizontal overflow were observed. Hero touch actions were at least 44px; this is not a comprehensive accessibility audit.

Before screenshots were captured at 320/1440px with reduced motion. Desktop hero/footer, mobile hero/craft and asset contact sheets were visually reviewed after implementation. Computed darker terracotta is `color(srgb 0.57451 0.294118 0.118627)`, measuring approximately 6.00:1 on registered paper and 5.37:1 on paper-deep. Text, prices, visitor icons and actions use this treatment.

Meghalaya, Assam and homepage heading/footer styles matched their pre-change browser baselines. Account source and staged changes remained intact. Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage.

Port 3000 initially retained the previous overview. The exact Next.js development process and its working directory were verified before restarting that repository’s app. Its final response includes the new Arunachal chapter, hero and regional footer. The development app remains running; the separate production QA preview and headless browser were stopped after verification. Changes remain uncommitted.
