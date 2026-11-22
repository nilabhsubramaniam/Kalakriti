# Rajasthan regional chapter

Implemented locally on 22 November 2026. No commit, branch, push or deployment is included.

## Experience

`/state/rajasthan` now has a detailed chapter with blue-pottery-inspired floral vines at the vertical edges, restrained red/ochre accents and a quiet warm-ivory centre. The registered blue, red and ochre tokens, royal typography, kalash ornament and Hindi editorial heading `रंगों की धरती` are retained. The full rectangular courtyard hero remains visible without an arch crop. Regional navigation, footer, collection, reading and product surfaces follow the same theme.

Six collections introduce Jaipur blue pottery, Sanganeri hand-block printing, Bagru hand-block printing, Bandhani tie-dye, Kota Doria weaving and Bundi miniature painting. Jaipur, Jodhpur, Kota and Bundi provide regional place associations. Bandhani is described as a tradition shared across several centres and beyond Rajasthan rather than exclusive to Jodhpur. Kaithoon is identified in the Kota weaving context. These selected collections are not an exhaustive survey; Thewa and other Rajasthan crafts are not claimed to be absent.

Fine floral printing on a light Sanganeri ground is distinguished from the indigo-ground Bagru sample. Resist work is described as part of Bagru’s wider printing landscape rather than a universal process for every Bagru textile. Bandhani’s tied points and Kota Doria’s fine square-check structure have separate imagery. The painting is an original garden-and-lotus composition rather than an attributed historical reproduction.

Six collection/process pages, three separate reading pages and six product-detail pages keep landing cards concise. Hero links lead to the crafts and collection. The chapter adds no embedded map, decorative slogan ribbon or custom icon system. Six visitor entries link Jaipur, Jodhpur, Kota/Kaithoon, Bundi, Udaipur and Jaisalmer to official information, without current fees, opening hours, transport, event or workshop-booking promises.

Rajasthan is the twenty-third sample catalogue region. Fixed INR/EUR/USD/GBP prices, dimensions and products remain fixtures for later API integration; the existing basket persists locally. No stock, payment, seller or booking backend is introduced. No named artisan, workshop relationship, GI-authorised inventory, dye certification, silk/gold purity, food-safety or antique provenance is invented. The blue-pottery sample is decorative, with no food-contact or glaze-safety assertion.

## Implementation

- `lib/states/rajasthan.ts`: typed regional content, six collections/items, three articles and six visitor entries.
- `components/state/RajasthanJournal.tsx`: server-rendered chapter and section navigation.
- `app/state/rajasthan/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/rajasthan/journal/[article]/page.tsx`: three reading routes.
- `app/state/rajasthan/products/[product]/page.tsx`: six shared product-detail routes.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: chapter registration and selection.
- `lib/states/journalTheme.ts`: regional navigation/footer/cart metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: catalogue integration, explicit URLs and fixed market values.
- `lib/stateThemes.ts`: selected craft labels and broader material-craft introduction; palette, script and motif retained.
- `app/globals.css`: `.kk-raj-journal`/`.kk-footer-raj` join existing regional selectors; background, hero and native/location-text treatments are Rajasthan scoped.
- `public/images/raj-*.webp`: eight new local assets.

Framework versions, dependencies, CSP, external asset origins, atlas/D3 and viewer lifecycle are unchanged. Galleries start in image mode and optionally open the existing image-backed Three.js surface with four presets, rotation and zoom. These are not scans or volumetric models. Image viewing and purchase controls remain available without WebGL.

## Source review

Primary sources checked on 22 November 2026 support cultural context rather than the provenance or certification of sample products.

- [Rajasthan handicraft policy — craft landscape](https://istart.rajasthan.gov.in/public/Policies/rajasthan-handicraft-policy-2022.pdf): wider state craft categories. Historical policy measures are not presented as current entitlements.
- [Handmade in Rajasthan — blue pottery](https://handmadeinrajasthan.rajasthan.gov.in/content/industries/handmadeinrajasthandepartment/artandcraft/bluepottery/bluepottery.html): Jaipur’s quartz-based ware context. No recipe, workshop identity or safety assertion is transferred to the sample vase.
- [CBSE — blue-pottery materials](https://cbseacademic.nic.in/web_material/Curriculum23/publication/BLUE_POTTERY7.pdf): body preparation and material/process context. Sample specifications do not claim an independently verified composition.
- [Incredible India — Sanganeri printing](https://www.incredibleindia.gov.in/en/rajasthan/sanganeri-hand-block-printing): fine printing on white/off-white grounds.
- [CBSE — block printing](https://cbseacademic.nic.in/web_material/Curriculum24/publication/BlockPrinting8.pdf): Sanganer/Bagru ground and process comparison; variations are retained rather than reduced to one universal recipe.
- [IP India — Bagru hand-block print](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/183): regional craft naming and Jaipur association. No authorised-user relationship is inferred.
- [Rajasthan textile sector](https://rising.rajasthan.gov.in/textiles): Bandhani and Kota Doria within the wider state textile landscape.
- [Tourism Ministry — Jodhpur destination master plan](https://sd2.tourism.gov.in/DocumentRepoFiles/MasterPlan/MP0179479d-0345-4094-917d-3da717a3ca36.pdf): regional Bandhani/shopping context, not a specific maker or inventory claim.
- [Rajasthan Tourism — Kota and Kaithoon](https://www.tourism.rajasthan.gov.in/kota.html): Kota Doria and Kaithoon association; no current workshop, date, purity or access promise is copied.
- [Rajasthan Tourism — Bundi](https://www.tourism.rajasthan.gov.in/bundi.html), [Incredible India — Bundi](https://www.incredibleindia.gov.in/en/rajasthan/bundi): painting landscape and regional setting. The sample image is not a reproduction of a monument’s painting.
- Official visitor information: [Jaipur](https://www.tourism.rajasthan.gov.in/jaipur.html), [Jodhpur](https://www.tourism.rajasthan.gov.in/jodhpur.html), [Kota/Kaithoon](https://www.tourism.rajasthan.gov.in/kota.html), [Bundi](https://www.tourism.rajasthan.gov.in/bundi.html), [Udaipur](https://www.tourism.rajasthan.gov.in/udaipur.html) and [Jaisalmer](https://www.tourism.rajasthan.gov.in/jaisalmer.html). Several direct fetches timed out, while their official indexed content was available. External availability and information can change.

## Assets

The built-in image tool generated hero, mural, pottery, sanganer, bagru, bandhani, kota and miniature compositions. All eight were visually inspected and resized/re-encoded to local WebP files. [Exact prompts, original PNG paths and output metadata](RAJASTHAN_IMAGE_PROMPTS.json) record generation. Original PNGs and earlier regional assets remain intact.

These are conceptual artworks rather than documentary inventory photographs. The courtyard is not a named workshop or palace. The hero introduces the material palette, while individual product images show the separate sample objects. The mural confines ornament to vertical borders without horizontal frames, keeping the centre quiet for reading.

## Verification

Strict TypeScript, zero-warning lint and the production build passed. There are 388 prerendered application routes (391 static outputs including framework outputs), including 15 new Rajasthan child routes.

Local headless Chrome with SwiftShader checked widths 320, 390, 768, 1024, 1281 and 1440px; all 15 detail routes on mobile; all four presets in each of six optional product viewers; anchor clearance; regional navigation/footer including the rendered footer colour; six visitor entries; Sanganer search; unknown-route 404s; and a mixed Rajasthan/Bihar basket with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed. Desktop hero/footer and mobile hero/craft screenshots were visually reviewed, including Hindi rendering.

The previous regression harness expected Rajasthan’s old generic overview; that expectation was updated because Rajasthan is now intentionally themed. Bihar, Jammu & Kashmir and homepage theme checks remain in place. Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage.

The normal port 3000 app initially retained the old overview. After restarting that repository’s development server, its response was confirmed to include the new chapter, hero and regional footer. The development app remains running.

Separate checks passed for all four market prices and image/purchase availability with WebGL disabled. Puducherry’s full journey regression also passed, including responsive layouts, six viewers, search and mixed-state basket totals. The separate production preview and headless browser were stopped after verification. Changes remain uncommitted.
