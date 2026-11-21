# Delhi regional chapter

Implemented locally on 21 November 2026. No commit, branch, push or deployment is included.

## Experience

`/state/delhi` has an original floral-threadwork and carved-screen surround. Old-gold, plum and muted blue details frame warm ivory reading areas. The registered royal typography is retained with native text `दिल्ली की कारीगरी` and an English gloss. The hero image keeps its complete rectangular composition without an arch crop.

Six collections introduce zardozi, wood carving, terracotta, papier-mâché, naqqashi metal engraving and chik blind-making. Old Delhi and Uttam Nagar provide selected local connections; other collections use the broader label “City workshops” rather than inventing a district of origin. These labels are discovery contexts, not administrative district identifiers. No district map consumes them. The formal `NCT of Delhi` key remains intact for theme and store lookups; the route and title use Delhi.

The old registry’s broad list of marble inlay, Phulkari and meenakari is replaced with the six documented craft categories selected for this chapter. Its unsupported historical assertion is replaced with a broader workshop introduction. The old-gold accent deepens from `#9C7A1E` to `#7A5B18` for small-text/button contrast against the registered paper; plum and blue supporting tokens remain.

Six collection/process pages, three reading pages and six item pages keep the main cards concise. No decorative slogan ribbon or embedded map is added. The shared image-first gallery offers an opt-in image-backed Three.js surface, four presets, rotation and zoom. No scans or volumetric models were added.

Delhi is the thirteenth sample catalogue region. INR/EUR/USD/GBP prices and dimensions remain fixtures for later API integration; cart persistence is local. No checkout, payment, stock, booking or account backend is introduced. No named maker, workshop provenance, GI authorisation, precious-metal thread content, alloy purity, wood species or food-contact suitability is asserted for sample inventory. Pottery and metal objects are specified as decorative. Papier-mâché imagery is an original floral concept rather than an exclusive regional style claim.

Visitor entries link the Red Fort, Qutb complex, Humayun’s Tomb, National Crafts Museum, Dilli Haat and Sunder Nursery to official/operator information without opening hours, fees, access or booking promises. Dilli Haat is described as a meeting place for crafts from across India, not evidence that everything sold there originates in Delhi.

## Implementation

Inspected `CLAUDE.md`, state slugs/types, Haryana content/component and three route templates, shared theme metadata, catalogue, product details, fonts, CSS and the running app.

- `lib/states/delhi.ts`: typed regional content, six collections/items, three articles and six visitor links.
- `components/state/DelhiJournal.tsx`: server-rendered landing and section links.
- `app/state/delhi/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/delhi/journal/[article]/page.tsx`: three reading routes.
- `app/state/delhi/products/[product]/page.tsx`: six shared item-detail routes.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: register and select the detailed landing.
- `lib/states/journalTheme.ts`: navbar/footer/cart metadata using the formal theme key.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: thirteenth catalogue region, ASCII URLs, fixed market values and presets.
- `lib/stateThemes.ts`: researched collection labels, broader introduction, native text and deepened accent.
- `app/globals.css`: shared selectors include `.kk-dl-journal`/`.kk-footer-dl`; surround, hero and native/location-text treatment is Delhi scoped.
- `public/images/dl-*.webp`: eight local assets.

README and architecture/asset notes record the milestone. Framework versions, dependencies, CSP, external asset origins, atlas/D3 and viewer lifecycle remain unchanged. No dependencies were added or removed.

## Source review

Primary sources checked on 21 November 2026 support regional context rather than provenance or certification of sample products.

- [MoSPI — Delhi craft overview](https://mospi.gov.in/sites/default/files/economic-census/sixth_economic_census/handicraft/Delhi.pdf): embroidery, terracotta, paper craft, engraving, woodwork and chik-making categories. Older administrative labels are not treated as current districts.
- [Delhi Directorate of Economics and Statistics — handicrafts chapter](https://des.delhi.gov.in/sites/default/files/DES/generic_multiple_files/final_book12.pdf): documented craft categories. Historical counts are not presented as current.
- [Delhi Tourism — Old Delhi shopping](https://delhitourism.gov.in/shopping/chandni_chowk.html): Kinari Bazaar’s zari/zardozi trimming connection; this market context does not certify item production there.
- [Delhi Department of Industries — projects and schemes](https://industries.delhi.gov.in/industries/projects-and-schemes): hand embroidery, metal engraving and terracotta context; no award or producer relationship is implied.
- [SRCC — project artisan documentation](https://www.srcc.edu/sites/default/files/naac/cyl2/ctr1/1.3/1.3.3/1.3.3_4.pdf): pottery activity at Kumhar Gali, Uttam Nagar. No named artisan identity or endorsement is transferred to sample products.
- [Development Commissioner Handicrafts — craft categories](https://handicrafts.nic.in/CmsUpload/20260324174142Infra%20Advt%202026-27.PDF): Delhi chik-making context. The collection is about reed blinds, not chikan embroidery.
- Visitor information: [Red Fort — Ministry of Culture](https://culture.gov.in/red-fort-complex), [Qutb complex — Delhi Tourism](https://delhitourism.gov.in/tourist_place/qutab_minar.html), [Humayun’s Tomb — Delhi Tourism](https://delhitourism.gov.in/tourist_place/humayun_tomb.html), [National Crafts Museum](https://www.nationalcraftsmuseum.nic.in/tours), [Dilli Haat](https://www.delhitourism.gov.in/shopping/dilli_haat.html) and [Sunder Nursery](https://www.sundernursery.org/). Some operator pages timed out or provided limited extractable text; exact hours, fees and access details are not copied.

## Assets and prompts

The built-in image tool generated hero, mural, zardozi, wood, pottery, paper, engraving and chik compositions. All eight were visually inspected and resized/re-encoded to `public/images/dl-*.webp`. They are conceptual artwork rather than documentary inventory photographs; the alcove is not a named workshop or monument. [Exact prompts, original PNG paths and final file metadata](DELHI_IMAGE_PROMPTS.json) record generation. Original PNGs remain outside the repository; previous regional assets are intact.

## Verification

Strict TypeScript and zero-warning lint passed. Browser and final production-build results are recorded below.

The final production build passed with 245 prerendered application routes (248 static outputs including framework outputs), including 15 new child routes.

Local headless Chrome with SwiftShader checked six widths from 320 to 1440px, all 15 detail routes on mobile, all four presets in each of six product viewers, section anchors, regional navigation/footer, six visitor entries, Chik search, unknown-route 404s and a mixed Delhi/Bihar basket with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed. Desktop hero/footer and mobile hero/craft screenshots were visually reviewed.

The running development server was refreshed, and `/state/delhi` on port 3000 was verified to serve the new chapter, hero asset and regional footer. The development app remains running. Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage.

Additional checks passed for all four market prices and image/purchase availability with WebGL disabled. Haryana’s journey regression passed, including responsive layouts, six viewers, search and mixed-state basket totals. Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks also passed. The separate production preview and headless browser were stopped after verification.
