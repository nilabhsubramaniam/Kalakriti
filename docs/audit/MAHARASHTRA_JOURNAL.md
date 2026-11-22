# Maharashtra regional chapter

Implemented locally on 22 November 2026. No commit, branch, push or deployment is included.

## Experience and implementation

`/state/maharashtra` introduces six collections: Warli painting, Paithani, Himroo, Kolhapuri leather footwear, Sawantwadi wooden craft and Solapur chaddar weaving. Earthen geometric vertical borders surround a quiet ivory reading area; the registered brown, ochre, folk typography, triangle ornament and Marathi `कलेची भूमी` heading are preserved. The complete courtyard hero has no arch crop. Regional navigation/footer, collection pages, reading pages and product pages share the theme.

The selected traditions are not an exhaustive account of the state. Warli is identified with its communities and northern Sahyadri context, not reduced to an anonymous decorative style. The original landscape avoids ceremonial compositions and named-artist imitation. Paithan and Yeola are both identified in Paithani context. Himroo uses the current Chhatrapati Sambhajinagar place name with historical Aurangabad context. Kolhapuri footwear is described as a shared tradition across Maharashtra and Karnataka, not exclusive to Kolhapur. Sawantwadi wooden work is distinguished from its separate painted-card tradition. Solapur household weaving has a distinct composition and process note.

- `lib/states/maharashtra.ts`: typed content, six collections/items, three articles and six visitor entries.
- `components/state/MaharashtraJournal.tsx`: server-rendered chapter and section navigation.
- `app/state/maharashtra/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/maharashtra/journal/[article]/page.tsx`: three separate reading routes.
- `app/state/maharashtra/products/[product]/page.tsx`: six shared item-detail routes.
- `lib/states/index.ts`, `app/state/[slug]/page.tsx`: registration and chapter routing.
- `lib/states/journalTheme.ts`: navigation/footer/cart metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: shared catalogue, explicit URLs and fixed market prices.
- `lib/stateThemes.ts`: selected craft labels and broad material introduction replace an unsupported age superlative; palette, script and motif retained.
- `app/globals.css`: Maharashtra joins existing regional selectors with scoped mural, hero and readable native/location text.

Six visitor entries cover Palghar/Jawhar, Paithan, Ellora, Kolhapur, Sawantwadi/Sindhudurg and Solapur. They link official information without opening-hour, fee, event or workshop-booking promises. There is no embedded map, slogan ribbon or new icon library.

Maharashtra is the twenty-fifth sample catalogue region. Product dimensions, prices and footwear size are fixtures for later API integration. INR/EUR/USD/GBP values and the locally persisted basket reuse existing functionality. No inventory, seller, checkout, payment or booking backend is added. No named artisan, GI-authorised stock, silk/metal purity, natural-dye, safety or antique provenance claim is invented.

All six items start in image mode and optionally use the existing image-backed Three.js surface with four presets. These are not scans or volumetric product models. Image viewing and purchase controls remain usable without WebGL. Framework versions, dependencies, CSP, renderer lifecycle and atlas/D3 are unchanged.

## Primary source review

Checked on 22 November 2026 for cultural context rather than product provenance.

- [Palghar district history](https://palghar.gov.in/en/history/), [official Warli context](https://dnh.gov.in/handicraft-2/), [Ministry of Tribal Affairs artist portal](https://adikalakar.tribal.gov.in/ViewDashDetails.aspx?id=MTc0): living Warli tradition and northern Sahyadri place associations. No named artist relationship or ritual composition is copied.
- [Maharashtra Tourism — Paithan](https://maharashtratourism.gov.in/heritage/paithan/), [state industry ODOP booklet](https://industry.maharashtra.gov.in/sites/default/files/2025-09/odop-coffee-table-booklet.pdf): Paithan and Yeola weaving context. Purity and price superlatives are not transferred to sample stock.
- [Chhatrapati Sambhajinagar district — handicraft](https://chhatrapatisambhajinagar.maharashtra.gov.in/en/handicraft/): Himroo and Paithani regional context. Historical origin stories are not repeated as settled facts.
- [Kolhapur district — Kolhapuri chappal](https://kolhapur.gov.in/en/kolhapuri-chappal/): local footwear association and material craft context.
- [State information department — Maharashtra Ahead](https://dgipr.maharashtra.gov.in/sites/default/files/2020-08/MAhead-AUG%202015.pdf), [Government technical school — Sawantwadi](https://mumbai.dvet.gov.in/mr/sindhudurg-institiutes/tmt-sawantwadi/), [IP India — wooden craft](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/806): woodwork/lacquer context and regional naming, not an authorised-user badge for sample inventory.
- [Development Commissioner for Handlooms — sustainability in handloom traditions](https://www.handlooms.gov.in/assets/img/EBOOK/Sustainability%20in%20the%20Handloom%20Traditions%20of%20India.pdf), [IP India — Solapur Chaddar](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/08): woven household textile association. No current mill or maker relationship is inferred.
- Official visitor information: [Palghar](https://palghar.gov.in/tourist-places/), [Paithan](https://maharashtratourism.gov.in/heritage/paithan/), [Ellora](https://maharashtratourism.gov.in/cave/ellora/), [Kolhapur](https://kolhapur.gov.in/tourist-places/), [Sindhudurg](https://sindhudurg.nic.in/tourist-places/), [Solapur](https://maharashtratourism.gov.in/districts/solapur/). Availability and information can change.

## Assets

Eight new local WebP images cover the hero, mural and six collection objects. Built-in generation, visual inspection and WebP conversion retain the original PNGs and earlier regional assets. [Exact prompts and metadata](MAHARASHTRA_IMAGE_PROMPTS.json) record provenance. These are conceptual artworks rather than documentary inventory photography; the courtyard is unnamed. The hero introduces the material palette, while individual product images are the separate item compositions. No vegetables, logos, certification badges or named-workshop scenes are included.

## Verification

Strict TypeScript, zero-warning lint and the production build passed: 418 prerendered application routes and 421 static outputs including framework outputs. The chapter adds 15 child routes. `git diff --check` passed.

Local headless Chrome on macOS with SwiftShader checked 320, 390, 768, 1024, 1281 and 1440px widths; all 15 mobile detail routes; all four presets in six opt-in product viewers; anchor clearance; regional navigation and footer colour; six visitor entries; Solapur search; unknown-route 404s; and a mixed Maharashtra/Bihar cart with expected INR/EUR totals. No horizontal overflow or application runtime exceptions were observed in the completed run. One initial headless connection interruption required rerunning the journey; the rerun completed successfully without source changes.

All four market prices passed separate checks, as did image and purchase availability with WebGL disabled. Gujarat’s full journey regression passed. Bihar, Jammu & Kashmir and homepage theme checks also passed. Desktop hero/footer and mobile hero/craft screenshots were visually reviewed, including Marathi rendering. Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage.

Port 3000 initially retained the previous generic overview. Restarting the existing repository development server resolved it; its response now includes the Maharashtra chapter, hero and regional footer. The development app remains running. The separate production QA server and headless browser were stopped after checks. Changes remain uncommitted.
