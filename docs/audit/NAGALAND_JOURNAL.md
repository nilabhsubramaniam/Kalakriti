# Nagaland regional chapter

Implemented locally on 23 November 2026. No branch, commit, push or deployment is included.

## Experience and implementation

`/state/nagaland` now introduces textile weaving, bamboo/cane basketry, wood carving, beadwork, pottery and nettle-fibre weaving. These six selected collections are not an exhaustive account of the state’s communities. The cloth, carved box and necklace use contemporary arrangements rather than claiming the identity of a named ceremonial garment or community-specific design.

Deep-red and charcoal vertical woven borders surround quiet ivory reading areas. The existing palette, folk typography and triangle ornament are retained. Slightly ink-mixed red keeps text/actions and the matching footer readable. A single continuous hill-veranda hero introduces the materials, with separate product compositions for closer inspection. Collection/process pages, reading pages and item details inherit the theme. There is no embedded map, new icon library or slogan ribbon.

The previous `Tsüngkotepsü` heading named a particular shawl and should not represent every product or community in Nagaland. The registry and chapter now use neutral state/material context instead of inventing a statewide translation. Community-specific textile meaning is discussed in the collection and reading copy without assigning that identity to a sample product.

Six visitor entries introduce Kohima, Kisama, Mokokchung, Diezephe/Chümoukedima, Noklak and Nagaland State Museum. Diezephe uses its current Chümoukedima district association. Official links do not promise current festival dates, permits, transport, fees, opening hours, bookings or demonstrations.

- `lib/states/nagaland.ts`: typed chapter data, six collections/items, three readings and six visitor entries.
- `components/state/NagalandJournal.tsx`: server-rendered chapter and section navigation.
- `app/state/nagaland/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/nagaland/journal/[article]/page.tsx`: three reading routes.
- `app/state/nagaland/products/[product]/page.tsx`: six shared item-detail routes.
- `lib/states/index.ts`, `app/state/[slug]/page.tsx`: registration and dispatch.
- `lib/states/journalTheme.ts`: navigation/footer metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: catalogue integration, explicit URLs and fixed market prices.
- `lib/stateThemes.ts`: selected craft labels, material summary and neutral state identity.
- `app/globals.css`: shared regional selectors plus scoped `.kk-nl-journal`/`.kk-footer-nl` mural, typography and contrast treatments.

Nagaland is the 32nd detailed discovery entry. Products, dimensions and INR/EUR/USD/GBP values remain fixtures for later API integration. No named artisan, seller relationship, GI-authorised stock, fibre/dye purity, antique-bead provenance, timber species or food-contact claim is invented. The necklace uses a contemporary glass-like bead composition; the vase is decorative. Nettle context does not certify the sample stole’s fibre content. Prior regional work and concurrent staged account/navigation changes remain intact.

All six items start in image mode and optionally open the existing image-backed Three.js close-up surface with four presets. These are not scans or volumetric models. Images and purchase controls remain usable without WebGL. No framework, dependency, CSP, backend, checkout, authentication, renderer lifecycle or atlas/D3 change is introduced.

## Primary sources

Reviewed on 23 November 2026 for cultural context, not sample inventory provenance.

- [Nagaland Industries — textile](https://industry.nagaland.gov.in/focus-areas/textile/), [DIPR — craft pavilion](https://ipr.nagaland.gov.in/HANDLOOM-AND-CRAFT-PAVILION-OFFERS-VARIED-CHOICES-FOR-THE-VISITORS-AT-KISAMA): textile and material categories. Historical stall counts, programme benefits and dates are not presented as current availability.
- [Mokokchung — handicrafts](https://mokokchung.nic.in/handicraft-2/): weaving, basketry, carving, pottery and ornaments. Animal-part materials and exclusive gender-role generalisations are not transferred to the collection.
- [IGNCA — bamboo and cane](https://ignca.gov.in/divisionss/janapada-sampada/northeastern-regional-centre/bamboo-and-cane-culture-of-nagaland/): interlaced household forms and material context.
- [Nagaland rural livelihoods — local products](https://nsrlm.nagaland.gov.in/go-local-support-local/): textiles, baskets, beads, pottery and contemporary household forms.
- [DIPR — Naga CraftScape](https://ipr.nagaland.gov.in/node/18993): distinct community craft practices, including Khiamniungan nettle weaving. A historical demonstration is not a promise of a current visitor experience.
- [NSRLM product documentation](https://www.nsrlm.nagaland.gov.in/wp-content/uploads/2022/08/NSRLM-SHG-Products-CTB_compressed.pdf), [Noklak council context](https://ipr.nagaland.gov.in/noklak-district-handloom-and-handicraft-council-office-inaugurated): nettle and other material work around Noklak. No named group partnership or actual inventory is inferred.
- [Chümoukedima village registry](https://chumoukedima.nic.in/village-panchayats/): Diezephe’s current district association; household counts are not used.
- Visitor information: [Kohima](https://kohima.nic.in/tourist-places/), [Kisama](https://kohima.nic.in/tourist-place/kisama-heritage-village/), [Mokokchung](https://mokokchung.nic.in/handicraft-2/), [Chümoukedima](https://chumoukedima.nic.in/tourist-places/), [Noklak crafts](https://www.india.gov.in/explore-india/odop/details/handicraft), [State Museum](https://www.incredibleindia.gov.in/en/nagaland/kohima/nagaland-state-museum). External information and availability can change.

## Assets

Eight new local `nl-*.webp` assets comprise a hero, quiet-centred mural and six item compositions. Built-in generation, visual inspection and WebP conversion retain the original PNGs and previous regional assets. [Exact prompts, source paths and output metadata](NAGALAND_IMAGE_PROMPTS.json) record provenance. These are conceptual artworks rather than documentary inventory photographs. The veranda is unnamed; no named ceremonial shawl, sacred emblem, named maker or workshop is reproduced. The hero introduces materials while product images are separate object compositions.

## Verification

The map-preparation step, strict TypeScript, zero-warning lint and production build passed. Generated map assets are unchanged. The build has 508 prerendered application routes and 511 static outputs including framework outputs; Nagaland adds 15 child routes. `git diff --check` passed.

Local headless Chrome on macOS with SwiftShader checked widths 320, 390, 768, 1024, 1281 and 1440px; all 15 mobile detail routes; four presets in each of six optional close-up viewers; anchor clearance; regional navigation/footer; six visitor entries; Nettle search; unknown-route 404s; and a mixed Nagaland/Bihar basket with expected INR/EUR totals. All four market prices passed. With WebGL disabled, images and purchase controls remained usable. No application runtime exceptions or horizontal overflow were observed. Hero touch actions were at least 44px; this is not a comprehensive accessibility audit.

Before screenshots were captured at 320/1440px with reduced motion. Desktop hero/footer, mobile hero/craft and asset contact sheets were visually reviewed. Computed darker red is `color(srgb 0.536667 0.131569 0.143137)`, measuring approximately 8.40:1 on registered paper and 7.33:1 on paper-deep. Text, prices, visitor icons and actions use this treatment.

Arunachal, Meghalaya, Assam and homepage heading/footer styles matched their pre-change browser baselines. Account source and staged changes remained intact. Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage.

Port 3000 initially retained the previous overview. Restarting the existing repository development app resolved this; its response includes the Nagaland chapter, hero and regional footer. The development app remains running. The separate production QA preview and headless browser were stopped after verification. Changes remain uncommitted.
