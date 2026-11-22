# Gujarat regional chapter

Implemented locally on 22 November 2026. Changes remain uncommitted; no branch, push or deployment is included.

## Experience

`/state/gujarat` now has a detailed chapter with indigo-and-maroon geometric borders, restrained ochre stitch and mirror details, and a quiet ivory centre. The registered maroon, indigo and ochre theme, royal typography, diamond ornament and Gujarati heading `કલાની ભૂમિ` are retained. The full rectangular courtyard hero avoids an arch crop. Navigation, footer, collection, reading and product surfaces share the regional theme.

Six collections cover Ajrakh block printing, Kutch embroidery, Rogan textile painting, Patan Patola, Tangaliya weaving and Lippan clay-and-mirror work. Kachchh, Patan and Surendranagar provide place associations. These selected collections are not an exhaustive account of Gujarat’s crafts. Kutch embroidery is described as several distinct community traditions, not a uniform stitch style. The contemporary cushion design does not claim a community attribution. Patan Patola is described as double ikat, with both warp and weft prepared before weaving; this is not conflated with single-ikat traditions. Tangaliya’s raised yarn dots are distinguished from embroidered mirrors. Rogan’s prepared paste and metal-tool work are introduced without an exclusive-maker claim or a universal process recipe.

Six collection/process pages, three separate reading pages and six product pages keep landing cards concise. Hero links lead directly to crafts and collection. There is no embedded map, decorative slogan ribbon or new icon system. Six visitor entries link Bhuj/Kachchh, Patan, Ahmedabad, Modhera, Dholavira and Surendranagar to official information. Modhera is associated with Mehsana, without a claim of inscribed World Heritage status. No current hours, fees, transport, events or workshop-booking availability are promised.

Gujarat is the twenty-fourth sample catalogue region. Products, prices and dimensions are fixtures for later API integration. Fixed INR/EUR/USD/GBP values and the existing locally persisted cart are reused. No seller, stock, checkout, payment or booking backend is introduced. No named artisan, workshop relationship, GI-authorised inventory, fibre purity, natural-dye certification or antique provenance is invented. The cushion item is explicitly a cover only.

## Implementation

- `lib/states/gujarat.ts`: typed regional content, six collections/items, three articles and six visitor entries.
- `components/state/GujaratJournal.tsx`: server-rendered chapter and section navigation.
- `app/state/gujarat/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/gujarat/journal/[article]/page.tsx`: three reading routes.
- `app/state/gujarat/products/[product]/page.tsx`: six shared product-detail routes.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: chapter registration and selection.
- `lib/states/journalTheme.ts`: regional navigation/footer/cart metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: catalogue integration, explicit URLs and fixed market values.
- `lib/stateThemes.ts`: selected craft labels and broader material introduction; palette, script and motif retained.
- `app/globals.css`: Gujarat joins existing regional selectors; mural, hero and native/location-text rules are scoped to Gujarat.
- `public/images/gj-*.webp`: eight local assets.

Framework versions, dependencies, CSP, external asset origins, atlas/D3 and viewer lifecycle are unchanged. Products start in image mode, with an optional image-backed Three.js surface and four existing presets. These are not scans or volumetric models. Image viewing and purchase controls remain available without WebGL.

## Source review

Primary sources checked on 22 November 2026 support cultural context, not provenance or certification of the sample products.

- [Gujarat Tourism — Ajrakh](https://gujarattourism.com/handicrafts/ajrakh.html): Kachchh/Ajrakhpur, block work and successive preparation/colour stages. No family counts or fixed production durations are copied.
- [Kachchh district — handicrafts](https://kachchh.nic.in/handicraft/): distinct embroidery traditions, Rogan and mud-and-mirror work.
- [Gujarat Tourism — Rogan painting](https://gujarattourism.com/handicrafts/rogan-painting.html): prepared paste, metal-tool lines and folded transfer in some compositions. No exclusive-family claim is repeated.
- [Gujarat Tourism — mud work](https://gujarattourism.com/handicrafts/mud-work.html): raised surface and mirror context; no sample recipe is asserted.
- [Gujarat Tourism — Patan](https://gujarattourism.com/north-zone/patan.html), [Patola heritage museum](https://gujarattourism.com/north-zone/patan/patan-patola-heritage-museum.html): double-ikat context, not an invented maker partnership.
- [Gujarat Tourism — Tangaliya](https://gujarattourism.com/saurashtra/surendranagar/tangaliya.html): Dangashiya/Dangasia weaving community and raised-dot geometric cloth.
- [IP India — Tangaliya Shawl](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/127): regional naming and Surendranagar association, not a certification badge for inventory.
- [Development Commissioner for Handlooms — sustainability in handloom traditions](https://www.handlooms.gov.in/assets/img/EBOOK/Sustainability%20in%20the%20Handloom%20Traditions%20of%20India.pdf): Tangaliya/Daana weaving context.
- Official visitor information: [Kachchh](https://kachchh.nic.in/tourist-places/), [Patan](https://gujarattourism.com/north-zone/patan.html), [Ahmedabad](https://gujarattourism.com/central-zone/ahmedabad.html), [Modhera](https://mahesana.nic.in/tourist-place/sun-temple-modhera/), [Dholavira](https://gujarattourism.com/kutch-zone/kutch/dholavira.html) and [Surendranagar](https://gujarattourism.com/saurashtra/surendranagar.html). External availability and information can change.

## Assets

The built-in image tool generated hero, mural, ajrakh, embroidery, rogan, patola, tangaliya and lippan compositions. All eight were visually inspected and resized/re-encoded to local WebP files. [Exact prompts, original PNG paths and output metadata](GUJARAT_IMAGE_PROMPTS.json) record generation. Original PNGs and earlier regional assets remain intact.

These are conceptual artworks, not documentary inventory photographs. The unnamed courtyard introduces the palette and six craft surfaces. Individual images show the separate sample objects. The filled cushion presentation accompanies a cover-only item. The mural confines ornament to vertical borders without horizontal frames, preserving reading space.

## Verification

Strict TypeScript, zero-warning lint and the production build passed. The build has 403 prerendered application routes and 406 static outputs including framework outputs, adding 15 Gujarat child routes. An initial standalone TypeScript check overlapped build-generated type cleanup; rerunning after the build passed without source changes.

Local headless Chrome on macOS with SwiftShader checked widths 320, 390, 768, 1024, 1281 and 1440px; all 15 mobile detail routes; four presets in each of six optional product viewers; anchor clearance; navigation/footer including rendered footer colour; six visitor entries; Tangaliya search; unknown-route 404s; and a mixed Gujarat/Bihar cart with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed. Desktop hero/footer and mobile hero/craft screenshots were visually reviewed, including Gujarati rendering.

Separate checks passed all four market prices and image/purchase availability with WebGL disabled. Rajasthan’s full journey regression passed; Bihar, Jammu & Kashmir and homepage theme checks also passed. Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage.

The port 3000 development server initially retained the previous overview. After restarting that repository’s server, its response was confirmed to contain the new Gujarat chapter, hero and footer. The development app remains running. The separate QA production preview and headless browser were stopped after verification.
