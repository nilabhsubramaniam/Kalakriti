# Goa, Dadra & Nagar Haveli and Daman & Diu

Implemented locally on 22 November 2026. No branch, commit, push or deployment is included.

## Regional experience

Three existing discovery routes now have detailed chapters:

| Chapter | Route | Collections | Items | Reading pages | Visitor entries |
| --- | --- | ---: | ---: | ---: | ---: |
| Goa | `/state/goa` | 6 | 6 | 3 | 6 |
| Dadra & Nagar Haveli | `/state/dadra-and-nagar-haveli` | 2 | 3 | 3 | 3 |
| Daman & Diu | `/state/daman-and-diu` | 1 | 3 | 2 | 4 |

Dadra and Nagar Haveli and Daman and Diu is one current union territory. Its two existing cultural-discovery URLs remain separate, with accurate introductory context and direct companion links. The old GeoJSON/registry keys remain compatible; they are not presented as new administrative entities. The 28 detailed catalogue entries are discovery regions, not a state/UT count. Atlas/D3 geometry and selection behavior are unchanged.

Goa introduces Kunbi weaving, terracotta, Azulejo tile painting, coconut-shell work, bamboo basketry and crochet. Its ivory, terracotta and teal theme uses fine tile and textile-inspired vertical borders. Dadra & Nagar Haveli focuses on Warli painting and bamboo work, with olive bamboo leaves and earthen geometry. Daman & Diu centres on documented mat weaving, with teal wave and woven-strip borders. Existing palettes, display registers, script lines and ornaments are preserved.

The small inland and coastal selections deliberately avoid padding the catalogue with unsupported traditions. Bamboo baskets and trays share a collection; floor mats, runners and placemats are contemporary objects within one weaving collection rather than three supposedly distinct heritage traditions. The Daman mat association is not claimed to identify a specific Diu workshop. Warli is identified with its communities and wider regional context; no named artist or ceremonial composition is reproduced.

Each chapter has themed navigation/footer, complete rectangular hero, concise collection cards, separate process and reading pages, item viewers, fixed INR/EUR/USD/GBP prices and the existing local cart. Hero actions scroll to the collection or craft section. Smaller craft grids use deliberate one/two-column treatments to avoid empty desktop columns. Existing Lucide icons and ornaments are reused. There are no maps or slogan ribbons inside these chapters.

Tourism links use official sources and do not promise current hours, fees, booking availability, transport or events. Companion links use same-tab Next navigation; external visitor links announce a new tab. No new dependency, CSP origin, backend, inventory, seller relationship, checkout, payment or booking system is introduced. Product prices, dimensions and market quotes are fixtures for later API integration. No certification, authorised GI inventory, fibre/dye purity, food-contact or antique provenance claim is invented.

## Implementation

- `lib/states/goa.ts`, `dadraNagarHaveli.ts`, `damanDiu.ts`: typed content and route-linked data.
- `components/state/GoaJournal.tsx`, `DadraNagarHaveliJournal.tsx`, `DamanDiuJournal.tsx`: regional server-rendered chapters.
- `app/state/{goa,dadra-and-nagar-haveli,daman-and-diu}/crafts/[craft]/page.tsx`: nine collection/process routes.
- Corresponding `journal/[article]/page.tsx`: eight reading routes.
- Corresponding `products/[product]/page.tsx`: 12 shared item-detail routes.
- `lib/states/index.ts`, `app/state/[slug]/page.tsx`: registration and dispatch.
- `lib/states/journalTheme.ts`: route-facing navigation/footer metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: catalogue integration, explicit URLs and fixed market values.
- `lib/stateThemes.ts`: researched selected craft labels and material summaries replace unsupported/overbroad claims.
- `app/globals.css`: scoped `.kk-ga-journal`, `.kk-dn-journal`, `.kk-dd-journal` backgrounds and matching footer/shared selectors.

All 12 optional viewers reuse the existing image-backed Three.js surface and four presets. They are not scans or volumetric models. Image mode and purchase controls remain available without WebGL; viewer lifecycle and loading policy are unchanged.

## Primary sources

Reviewed on 22 November 2026 for cultural context, not sample inventory provenance.

- [Goa Tourism Development Corporation — handicrafts](https://goa-tourism.com/culture/handicrafts-of-goa-2/): pottery, textiles, fibre work and crochet/lace context.
- [Government of Goa — traditional skills](https://www.goa.gov.in/wp-content/uploads/2023/07/GOVERNOR-ANNOUNCES-SCHEMES-TO-SUPPORT.pdf): Kunbi, pottery, coir, mat and bamboo/cane traditions. Historical programme terms are not presented as current benefits.
- [Goa official gazette](https://goaprintingpress.gov.in/downloads/2021/2021-16-SI-OG-0.pdf): household craft and Kunbi weaving landscape. Health assertions about cooking vessels are not transferred to decorative pottery.
- [Incredible India — Goa arts](https://www.incredibleindia.gov.in/en/goa/goa/discover-goas-vibrant-arts-scene): coconut-shell and blue-and-white tile context. The tile composition is original, not an attributed historical design.
- [Development Commissioner for Handlooms — handloom traditions](https://www.handlooms.gov.in/assets/img/EBOOK/Sustainability%20in%20the%20Handloom%20Traditions%20of%20India.pdf): checked Kunbi weave and community context. No live registration status is asserted.
- [MoSPI — Dadra & Nagar Haveli handicrafts](https://mospi.gov.in/sites/default/files/economic-census/sixth_economic_census/handicraft/Dadra%20%26%20Nagar%20Haveli.pdf): Silvassa bamboo-basket association; historical census data is not used as a current artisan count.
- [Government of Goa — export strategy](https://ditc.goa.gov.in/sites/default/files/Export-Strategy-of-Goa-Notification2021-35-SI-OG-0.pdf): coconut, bamboo/cane and other material crafts. Historical policy descriptions do not certify inventory.
- [Dadra & Nagar Haveli district — handicrafts](https://dnh.gov.in/handicraft-2/), [Incredible India — Silvassa](https://www.incredibleindia.gov.in/en/trips/trip-listing/explore-silvassa-for-a-dip-in-a-cultural-oasis): Warli and bamboo craft in the Silvassa region.
- [Ministry of Tribal Affairs — bamboo winnowing basket](https://repository.tribal.gov.in/repository/details/MjM%3D): material/process context, not a maker attribution for the sample basket.
- [Incredible India — Daman arts](https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/daman/art-and-craft.html), [NCERT — cultural unity](https://www.ncert.nic.in/pdf/publication/otherpublications/Unity_cultural.pdf): mat-weaving context. These older pages also contain unsuitable wildlife-product promotion; that material is not copied or used as inventory inspiration. No ivory, tortoiseshell, coral or marine-shell products are added.
- [Current UT administration](https://ddd.gov.in/introduction/): combined union-territory context. No map/schema migration is part of this chapter work.
- Goa visitor information: [Fontainhas](https://goa-tourism.com/popular-destination/experience-fontainhas/), [Old Goa](https://goa-tourism.com/guide/old-goa-heritage/), [State Museum](https://museum.goa.gov.in/), [Archaeological Museum](https://goa-tourism.com/museum/archaeological-museum-of-goa/), [Goa destination](https://www.incredibleindia.gov.in/en/goa/goa).
- UT visitor information: [Tribal Museum, Silvassa](https://dnh.gov.in/tourist-place/tribal-museum-silvassa/), [district places](https://dnh.gov.in/tourist-places/), [Diu](https://diu.gov.in/tourist-places/), [Daman](https://www.incredibleindia.gov.in/en/dadra-and-nagar-haveli-and-daman-and-diu/daman), [Daman attractions](https://www.incredibleindia.gov.in/en/dadra-and-nagar-haveli-and-daman-and-diu/daman/a-guide-to-daman-s-must-visit-attractions). External content and availability can change.

## Assets

Eighteen new local WebP assets comprise three heroes, three murals and 12 item images. [Exact prompts, original PNG paths and output metadata](WEST_COAST_IMAGE_PROMPTS.json) record built-in generation. These are conceptual artworks, not documentary inventory photographs. Courtyards are unnamed, original Warli-inspired daily-life imagery avoids sacred/ceremonial compositions, and the tile uses an original floral design. Individual product images are separate object compositions; the hero introduces a material palette. Previous assets and generated source PNGs remain intact.

## Verification

Strict TypeScript, zero-warning lint and the production build passed: 447 prerendered application routes and 450 static outputs including framework outputs. The chapters add 29 child routes. `git diff --check` passed.

Local headless Chrome on macOS with SwiftShader checked six widths (320, 390, 768, 1024, 1281 and 1440px) per chapter, all 29 mobile detail routes, four presets in all 12 optional product viewers, section-anchor clearance, regional navigation/footer including rendered footer colour, visitor-entry counts, search, unknown-route 404s and mixed-region Bihar carts with expected INR/EUR totals. All four market prices and image/purchase availability with WebGL disabled passed separate checks for each chapter. Maharashtra’s complete journey regression passed; Bihar, Jammu & Kashmir and homepage theme checks remained intact.

The first Daman search assertion expected “Daman” to be the first result, but that substring also matches “Andaman”. The harness uses “Daman & Diu” to verify the intended destination; no application search behavior was changed. The completed runs had no application runtime exceptions or horizontal overflow. Desktop hero/footer, mobile hero/craft and image contact sheets were visually reviewed, including script rendering. Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage.

Port 3000 initially retained the previous overview. After restarting the existing repository development server, all three responses were confirmed to contain their new chapter, hero and regional footer. The development app remains running. The separate production QA preview and headless browser were stopped after verification. Changes remain uncommitted.
