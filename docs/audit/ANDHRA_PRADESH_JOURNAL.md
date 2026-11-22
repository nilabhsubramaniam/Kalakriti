# Andhra Pradesh regional chapter

Implemented locally on 22 November 2026. No commit, branch, push or deployment is included.

## Experience

`/state/andhra-pradesh` introduces six collections through a Kalamkari-inspired floral and peacock surround. Terracotta, green and ochre retain the registered regional palette; ivory reading surfaces keep text clear. The rectangular courtyard hero remains visible without an arch crop. Telugu `కళల భూమి` uses the existing Indic font stack with an English gloss.

The collections distinguish Srikalahasti pen-drawn Kalamkari (Tirupati) from Pedana/Machilipatnam block printing (Krishna). Kondapalli woodcraft (NTR), Etikoppaka lacquerware (Anakapalli), Mangalagiri weaving (Guntur) and Budithi metalwork (Srikakulam) complete the selection. Registry labels and the introductory description now reflect this broader craft landscape. Nirmal painting was removed from Andhra Pradesh’s registry entry because its geographical association is Telangana. The unsupported 3,000-year claim was also removed.

Six collection/process pages, three reading pages and six item-detail pages keep the main cards concise. Hero navigation leads to the craft and collection sections. There is no embedded map or decorative slogan ribbon. Six visitor entries link to official regional information around the craft centres without making access, opening-hour, workshop, event or booking promises.

Andhra Pradesh is the eighteenth sample catalogue region. Existing local basket persistence and fixed INR/EUR/USD/GBP market fixtures are reused. Prices, dimensions and products remain sample data for future API integration. No inventory, payment or booking backend is introduced. No named artisan, workshop provenance, GI-authorised stock, fibre purity, natural-dye certification, alloy composition or toy-safety claim is invented.

## Implementation

- `lib/states/andhraPradesh.ts`: typed regional content, six collections/items, three articles and six visitor entries.
- `components/state/AndhraPradeshJournal.tsx`: server-rendered chapter and section links.
- `app/state/andhra-pradesh/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/andhra-pradesh/journal/[article]/page.tsx`: three separate reading routes.
- `app/state/andhra-pradesh/products/[product]/page.tsx`: six shared product-detail routes.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: chapter registration and rendering.
- `lib/states/journalTheme.ts`: regional navigation/footer/cart metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: catalogue integration, explicit URLs and fixed market prices.
- `lib/stateThemes.ts`: corrected and expanded craft labels and description; palette and motif retained.
- `app/globals.css`: `.kk-ap-journal`/`.kk-footer-ap` share established regional rules; background, hero and native/location-text adjustments are scoped to Andhra Pradesh.
- `public/images/ap-*.webp`: eight local assets.

Framework versions, dependencies, CSP, external asset origins, map geometry and D3/Three.js lifecycle are unchanged. Product galleries start in image mode and optionally open the shared image-backed Three.js surface with four presets, rotation and zoom. They are not scans or volumetric models. Image viewing and cart controls remain available without WebGL.

## Source review

Primary sources checked on 22 November 2026 support regional context rather than the provenance of sample products.

- [Vice President of India — Kalamkari](https://vicepresidentofindia.nic.in/kalamkari-2/): distinguishes Srikalahasti hand painting from Machilipatnam block printing.
- [Tirupati district — handlooms and textiles](https://tirupati.ap.gov.in/handlooms-and-textiles/): current Srikalahasti regional context.
- [Krishna district — history](https://krishna.ap.gov.in/about_district/history/): Pedana’s block-printed cotton textile association. Older references to Kondapalli under Krishna are superseded here by current NTR district information.
- [NTR district — cultural tourism](https://ntr.ap.gov.in/cultural-tourism/): Kondapalli wooden craft association.
- [Lepakshi Handicrafts — cluster map](https://lepakshihandicrafts.gov.in/cluster-map): state craft landscape, Anakapalli lacquerware and Srikakulam metalwork. Regional labels are cross-checked rather than assuming every listed craft originated exclusively in that district.
- [Development Commissioner Handicrafts — district craft programme list](https://handicrafts.gov.in/CmsUpload/02432026104315New_Annexure-1%28ITDP%29.pdf): Tirupati Kalamkari and Anakapalli wood-turning/lacquer context.
- [Guntur district — Mangalagiri ODOP](https://guntur.ap.gov.in/odop2023/): weaving and current Guntur association.
- [National Portal of India — Budithi metal craft](https://www.india.gov.in/explore-india/odop/details/budithi-bell-brass-metal-craft): Srikakulam association.
- [IP India — Budithi registration](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/89): regional name and location; no sample-item certification inferred.
- [IP India — Nirmal paintings](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/106): Telangana geographical association, despite a historical applicant address naming Andhra Pradesh.
- Official visitor-information destinations: [Tirupati](https://tirupati.ap.gov.in/tourism/), [Krishna](https://krishna.ap.gov.in/tourism/), [NTR](https://ntr.ap.gov.in/cultural-tourism/), [Guntur](https://guntur.ap.gov.in/tourism/), [Anakapalli](https://anakapalli.ap.gov.in/tourism/) and [Srikakulam](https://srikakulam.ap.gov.in/tourism/). The Tirupati tourism endpoint timed out during one source fetch; its district handloom and religious-tourism sources were available. External information can change.

## Assets

Eight original compositions were generated using the built-in image tool, visually inspected and resized/re-encoded as WebP: hero, mural, pen, block, wood, lacquer, weave and metal. [Exact prompts, original PNG paths and output metadata](ANDHRA_PRADESH_IMAGE_PROMPTS.json) record generation. Original PNGs remain intact outside the repository; earlier regional assets are preserved.

Images are concepts rather than documentary inventory photographs. The courtyard is not a named workshop. The hero is a broad material-craft arrangement; the dedicated product images show the individual sample objects. The pen-drawn peacock composition and repeated printed stole deliberately use different visual structures. The mural confines decoration to vertical edges without horizontal frames, leaving a quiet centre.

## Verification

Strict TypeScript, zero-warning lint and the production build passed. There are 316 prerendered application routes (319 static outputs including framework outputs), including 15 new Andhra Pradesh child routes.

Local headless Chrome with SwiftShader checked widths 320, 390, 768, 1024, 1281 and 1440px; all 15 detail routes on mobile; all four presets in each of six optional viewers; section-anchor clearance; regional navigation/footer; six visitor entries; Budithi search; unknown-route 404s; and a mixed Andhra Pradesh/Bihar basket with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed. Separate checks passed for all four market prices and image/purchase availability with WebGL disabled. Desktop hero/footer and mobile hero/craft screenshots were visually reviewed, including Telugu rendering.

The normal port 3000 development app initially retained the old overview. After restarting that repository’s development server, the new chapter, hero and regional footer were confirmed in its response. Local software-rendering checks do not establish physical-device performance or comprehensive screen-reader coverage.

Tamil Nadu’s full journey regression also passed, including responsive layouts, six viewers, search and mixed-state basket totals. Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks passed. The development app remains running; the separate production preview and headless browser were stopped after verification.
