# Telangana regional chapter

Implemented locally on 22 November 2026. No commit, branch, push or deployment is included.

## Experience

`/state/telangana` has a woven ikat-inspired surround with plum and teal diamonds and muted gold details. The centre and local reading surfaces remain quiet ivory. The existing regional palette, temple typography, diamond motif and Telugu `కళల నేల` are retained, with an English gloss. The rectangular hero remains visible without an arch crop.

Six collections introduce Pochampally ikat (Yadadri Bhuvanagiri), Nirmal painting (Nirmal), Cheriyal painting (Siddipet), Gadwal weaving (Jogulamba Gadwal), Narayanpet weaving (Narayanpet) and Pembarthi metalwork (Jangaon). Current district labels avoid the old Adilabad, Warangal and Mahabubnagar administrative references found in some historical craft records. The regional registry now foregrounds these six selected collections; this selection does not claim that other crafts are absent from Telangana.

The three textile images distinguish large softly edged ikat diamonds, a contrasting broad sari border and a smaller checked weave. Dark-ground Nirmal-inspired decorative painting and red-ground Cheriyal-inspired narrative cloth have separate compositions. The metal plate introduces raised sheet-metal decoration rather than a cast figure.

Six collection/process pages, three separate reading pages and six item-detail pages keep the main cards concise. Hero links lead to crafts and the collection. Six visitor entries link the craft centres to official district/state information. No embedded map, slogan ribbon, external image loader or custom icon system is introduced.

Telangana is the nineteenth sample catalogue region. Existing local basket persistence and fixed INR/EUR/USD/GBP market prices are reused. Products, dimensions and prices remain fixtures for later API integration. No payment, stock, booking or seller backend is introduced. No named artisan, GI-authorised inventory, workshop provenance, silk/gold purity, dye certification or alloy composition is invented. The paintings are original concepts, not attributed historical or ceremonial reproductions.

## Implementation

- `lib/states/telangana.ts`: typed regional content, six collections/items, three articles and six visitor entries.
- `components/state/TelanganaJournal.tsx`: server-rendered chapter and section links.
- `app/state/telangana/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/telangana/journal/[article]/page.tsx`: three reading routes.
- `app/state/telangana/products/[product]/page.tsx`: six shared product-detail routes.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: chapter registration and selection.
- `lib/states/journalTheme.ts`: regional navigation/footer/cart metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: catalogue integration, explicit URLs and fixed market values.
- `lib/stateThemes.ts`: selected craft labels and expanded material-craft introduction; palette, script and motif retained.
- `app/globals.css`: shared selectors include `.kk-tg-journal`/`.kk-footer-tg`; background, hero and native/location-text treatments are Telangana scoped.
- `public/images/tg-*.webp`: eight new local assets.

Framework versions, dependencies, CSP, map geometry and renderer lifecycle are unchanged. Product galleries start in image mode and optionally open the shared image-backed Three.js surface with four presets, rotation and zoom. These surfaces are not scans or volumetric models. Image viewing and purchase controls remain available without WebGL.

## Source review

Primary sources checked on 22 November 2026 support regional context rather than provenance or certification of the sample products.

- [Telangana Tourism — arts and crafts](https://tourism.telangana.gov.in/page/arts-crafts): Pochampally, Gadwal, Nirmal, Cheriyal and Pembarthi context. Its older district wording is cross-checked against current district sources. A later direct fetch timed out after search content had been retrieved.
- [Telangana Tourism — regional booklet](https://tourism.telangana.gov.in/assets/img/pdf/Booklet%20for%20FlipBookLow.pdf): Pochampally’s tied/dyed yarn process; no current tour, fee or workshop promise is copied into the app.
- [Telangana investment department — handloom tradition](https://invest.telangana.gov.in/wp-content/uploads/2020/06/Know-More-Telangana-Textiles.pdf): regional textile varieties and weaving landscape.
- [Jogulamba Gadwal — handlooms and textiles](https://gadwal.telangana.gov.in/handlooms-and-textiles-department/): current district/weaving association; historic scheme figures are not presented as current statistics.
- [Narayanpet — handlooms and textiles](https://narayanpet.telangana.gov.in/rural-water-supply/): the official page’s URL differs from its department title; it links Narayanpet sari information.
- [IP India — Narayanpet saris](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/214): Telangana geographical association; no sample-item certification inferred.
- [IP India — Nirmal paintings](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/106): regional naming and Telangana association.
- [IP India — Cheriyal paintings](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/190): registered craft name and Telangana context; historical applicant addresses are not used as present district boundaries.
- [Siddipet — administrative tehsils](https://siddipet.telangana.gov.in/tehsil/): Cheriyal’s present Siddipet association. The content describes the tradition’s association rather than claiming all makers work only there.
- [Jangaon — handicraft](https://jangaon.telangana.gov.in/en-handicraft/): Pembarthi metalwork/brasswork association.
- [Development Commissioner Handicrafts — craft compendium](https://www.handicrafts.nic.in/CmsUpload/12222017102212GI%20BOOK%20FINAL%202-5-17_resized.pdf): craft processes and material context; historical district addresses and certification are not transferred to sample products.
- Official visitor information: [Yadadri Bhuvanagiri](https://yadadri.telangana.gov.in/tourism/), [Nirmal](https://tourism.telangana.gov.in/destinations/nirmal), [Siddipet](https://siddipet.telangana.gov.in/tourism/), [Jogulamba Gadwal](https://gadwal.telangana.gov.in/tourism/), [Narayanpet](https://narayanpet.telangana.gov.in/tourism/) and [Jangaon](https://jangaon.telangana.gov.in/tourism/). External information can change.

## Assets

The built-in image tool generated eight original compositions: hero, mural, ikat, nirmal, cheriyal, gadwal, narayanpet and metal. All were visually inspected and resized/re-encoded as local WebP files. [Exact prompts, original PNG paths and output metadata](TELANGANA_IMAGE_PROMPTS.json) record generation. Source PNGs and earlier regional assets remain intact.

These are conceptual artworks rather than documentary inventory photographs. The veranda is not a named workshop. The hero introduces a regional material palette; individual product images depict the separate sample objects. The mural confines pattern to vertical borders without horizontal frames, leaving a quiet centre.

## Verification

Strict TypeScript, zero-warning lint and the production build passed. The build contains 331 prerendered application routes (334 static outputs including framework outputs), including 15 new Telangana child routes.

Local headless Chrome with SwiftShader checked widths 320, 390, 768, 1024, 1281 and 1440px; all 15 detail routes on mobile; all four presets in each of six optional viewers; section anchors; regional navigation/footer; six visitor entries; Pembarthi search; unknown-route 404s; and mixed Telangana/Bihar basket totals in INR/EUR. No runtime exceptions or horizontal overflow were observed. Desktop hero/footer and mobile hero/craft screenshots were visually reviewed, including Telugu rendering.

Separate checks passed for all four market prices and image/purchase availability with WebGL disabled. Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks passed. Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage.

The normal port 3000 app initially retained the old overview. After restarting that repository’s development server, its response was confirmed to include the new chapter, hero and regional footer. The development app remains running.

Andhra Pradesh’s full journey regression passed, including responsive layouts, six viewers, search and mixed-state basket totals. The separate production preview and headless browser were stopped after verification.
