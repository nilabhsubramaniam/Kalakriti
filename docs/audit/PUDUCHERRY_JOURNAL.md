# Puducherry regional chapter

Implemented locally on 22 November 2026. No commit, branch, push or deployment is included.

## Experience

`/state/puducherry` introduces a coastal craft chapter with fine ivory kolam-inspired linework on terracotta vertical borders, sea-teal accents and a quiet handmade-paper centre. The existing palette, temple typography, kolam motif and Tamil `கலைத் துறை` are retained, with an English gloss. The rectangular hero remains visible without an arch crop. Navigation, footer and detail-page surfaces follow the region’s theme.

Six collections introduce Villianur terracotta, papier-mâché, handmade paper, studio ceramics, korai grass weaving and hand embroidery. The selected catalogue focuses on documented Puducherry-region craft associations; it does not invent products for every enclave. District records use Puducherry while customer-facing collection labels avoid the repeated “Puducherry · Puducherry” wording.

Six collection/process pages, three separate reading pages and six item-detail pages keep the main cards concise. The embroidery sample is a cover, clearly labelled “Cover only”, although imagery displays it on a filled cushion. Clay and glazed ceramic have separate objects and surface treatments. Hero links lead to the crafts and collection. No embedded map or decorative slogan ribbon is added.

The visitor section covers Puducherry heritage streets, Murungapakkam craft village, Arikamedu, Karaikal, Mahé and Yanam. It represents all four parts of the union territory without implying they are geographically contiguous or claiming unverified craft origins there. Entries link to official information without access, price, opening-hour, workshop or booking promises. The craft-village link is an IGNCA location listing rather than a booking service.

The earlier Auroville-led registry description is replaced with a wider Puducherry craft introduction. Puducherry’s documented city-based paper-making tradition is distinguished from nearby Auroville, which official sources identify in Tamil Nadu; no Auroville workshop is assigned a Puducherry product origin. Nearby cross-boundary craft relationships are not claimed to be absent.

Puducherry is the twentieth sample catalogue region. Fixed INR/EUR/USD/GBP prices, dimensions and products remain fixtures for later API integration; the existing basket persists locally. No stock, payment, booking or seller backend is introduced. No named artisan, institutional partnership, GI-authorised inventory, fibre purity, food-safety or historical provenance is invented. Cluny and Sri Aurobindo Handmade Paper are contextual examples, not suppliers or endorsers of the sample products.

## Implementation

- `lib/states/puducherry.ts`: typed regional content, six collections/items, three articles and six visitor entries.
- `components/state/PuducherryJournal.tsx`: server-rendered chapter and section links.
- `app/state/puducherry/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/puducherry/journal/[article]/page.tsx`: three reading routes.
- `app/state/puducherry/products/[product]/page.tsx`: six shared item-detail routes.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: detailed chapter registration and selection.
- `lib/states/journalTheme.ts`: regional navigation/footer/cart metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: shared catalogue, explicit URLs and fixed market values.
- `lib/stateThemes.ts`: selected craft labels and corrected wider introduction; palette, script and motif retained.
- `app/globals.css`: shared selectors include `.kk-py-journal`/`.kk-footer-py`; background, hero and native/location-text treatments are scoped to Puducherry.
- `public/images/py-*.webp`: eight new local assets.

Framework versions, dependencies, CSP, atlas/D3 and viewer lifecycle are unchanged. Galleries start in image mode and optionally open the shared image-backed Three.js surface with four presets, rotation and zoom. These are not scans or volumetric models. Image viewing and purchase controls remain available without WebGL.

## Source review

Primary sources checked on 22 November 2026 support regional context rather than provenance or certification of sample products.

- [Puducherry industrial policy — craft inventory](https://industry.py.gov.in/sites/default/files/industrial-policy-2016.pdf): terracotta, papier-mâché, korai design mats and ceramic art wares. Historical policy measures are not presented as current benefits.
- [District Industries Centre — papier-mâché](https://dic.py.gov.in/paper-machie): modelled paper-compound objects and painted finishes. Historical listed prices, recipes and supplier details are not used as product specifications.
- [IP India — regional papier-mâché](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/202): registered craft context. Romanised place-name variants occur in sources; no certification is assigned to the sample bird.
- [Development Commissioner Handicrafts — approved craft categories](https://www.handicrafts.nic.in/CmsUpload/06522024115205Approved%20Handicrafts%20Craft%20category.pdf): Villianur terracotta association.
- [Sri Aurobindo Handmade Paper — factory account](https://sriaurobindopaper.com/our-factory): city-based paper making, fibre preparation, sheet forming and finishing. No product, date, environmental certification or supplier identity is transferred to the sample notebook.
- [Incredible India — Puducherry arts and culture](https://www.incredibleindia.gov.in/en/puducherry/puducherry/embrace-the-cultural-kaleidoscope-of-puducherry): kolam, korai mats, handmade paper and modelled craft context.
- [Incredible India — markets and embroidery](https://www.incredibleindia.gov.in/en/puducherry/puducherry/exploring-puducherrys-vibrant-markets-and-boutiques): hand-embroidered household textiles and Cluny context. The cushion has an original design with no Cluny attribution.
- [Akashvani — Murungapakkam craft village](https://newsonair.gov.in/bulletins-detail/parikrama-58/): craft-village materials and regional setting; no current stall, maker availability or event claim is inferred.
- [Viluppuram district — Auroville](https://viluppuram.nic.in/tourist-place/auroville/), [Auroville — distinction from the Ashram](https://www.auroville.org/page/first-steps-into-auroville): nearby Tamil Nadu location and institutional distinction.
- Official visitor information: [Puducherry](https://www.incredibleindia.gov.in/en/puducherry/puducherry), [Murungapakkam/IGNCA](https://ignca.gov.in/hi/locations/art-and-craft-village-campus/), [Arikamedu](https://www.incredibleindia.gov.in/en/puducherry/puducherry/arikamedu), [Karaikal](https://karaikal.gov.in/karaikal-companian/), [Mahé](https://mahe.gov.in/tourist-places/) and [Yanam](https://yanam.gov.in/tourism/). Karaikal’s generic tourism path was inaccessible during source review, so its available official visitor guide is used. IGNCA’s listing was indexed but one direct fetch returned a cache miss. External information can change.

## Assets

The built-in image tool generated hero, mural, clay, mache, paper, ceramic, mat and stitch compositions. All eight were visually inspected and resized/re-encoded to local WebP files. [Exact prompts, source PNG paths and output metadata](PUDUCHERRY_IMAGE_PROMPTS.json) record provenance. Source PNGs and earlier regional assets remain intact.

These are conceptual artworks rather than documentary inventory photographs. The courtyard is not a named workshop or a specific heritage building. The hero introduces a regional material palette; separate product images show the individual sample objects. The mural confines decorative linework to vertical edges, without horizontal frames, leaving the centre quiet for reading.

## Verification

Strict TypeScript, zero-warning lint and the production build passed. The build contains 346 prerendered application routes (349 static outputs including framework outputs), including 15 new Puducherry child routes.

Local headless Chrome with SwiftShader checked widths 320, 390, 768, 1024, 1281 and 1440px; all 15 detail routes on mobile; all four presets in each of six viewers; section-anchor clearance; regional navigation/footer; six visitor entries; Villianur search; unknown-route 404s; and a mixed Puducherry/Bihar basket with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed. Desktop hero/footer and mobile hero/craft screenshots were visually reviewed, including Tamil rendering.

Separate checks passed for all four market prices and image/purchase availability with WebGL disabled. Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks passed. Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage.

The port 3000 development app initially retained the old overview. After restarting that repository’s development server, its response was confirmed to include the new chapter, hero and regional footer. The development app remains running.

Telangana’s full journey regression also passed, including responsive layouts, six viewers, search and mixed-state basket totals. A final targeted check confirmed the corrected regional location label. The separate production preview and headless browser were stopped after verification.
