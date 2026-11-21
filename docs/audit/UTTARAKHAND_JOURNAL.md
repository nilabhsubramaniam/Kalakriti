# Uttarakhand regional chapter

Implemented locally on 21 November 2026, following Uttar Pradesh. No commit, branch, push or deployment is included.

## Experience

`/state/uttarakhand` uses original Aipan-inspired red-and-white borders around a warm paper ground. The registered red/brown/green palette and royal typography are retained. Quiet reading surfaces, dark body text and red native text keep the content clear over the full-page artwork. The hero keeps the whole image composition, with no arched crop.

Six selected collections cover Aipan, Ringal basketry, Tamta copperware, Thulma woollens, Likhai carving and Bichhu Buti textiles. District associations introduce Almora, Pithoragarh and Chamoli; they do not claim that a tradition belongs exclusively to one place. The previous Kinnauri-shawl label was removed from the Uttarakhand registry entry in favour of researched regional collections.

Concise cards link to separate collection/process pages, and three journal entries open dedicated reading routes. No decorative slogan ribbon or district map was added to the regional landing. Six item pages reuse the image-first gallery and opt-in image-backed Three.js presentation with four existing view presets, rotation and zoom. These are not scanned volumetric models.

The regional currency selector and cart support INR, EUR, USD and GBP. Prices, dimensions and item records remain local fixtures for later API integration. There is no checkout, payment or inventory backend. No named makers, workshop provenance, GI-authorised inventory, fibre-purity certificates or health claims are invented. The copper vase is a decorative object.

Six visitor entries link Almora, Munsyari, Nainital, Rishikesh, Kausani and Chamoli to official information without opening-time, booking, weather or access guarantees.

## Implementation

- `lib/states/uttarakhand.ts`: typed regional content, district associations, products, articles and visitor links.
- `components/state/UttarakhandJournal.tsx`: regional landing and section navigation.
- `app/state/uttarakhand/crafts/[craft]/page.tsx`: six static collection/making pages.
- `app/state/uttarakhand/journal/[article]/page.tsx`: three static reading pages.
- `app/state/uttarakhand/products/[product]/page.tsx`: six static routes using the shared product layout.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: detailed regional landing selection.
- `lib/states/journalTheme.ts`: regional navbar/footer/cart theme and native-script metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: seventh sample catalogue region, explicit item URLs and fixed market prices.
- `lib/stateThemes.ts`: selected craft labels corrected and expanded; palette and typography retained.
- `app/globals.css`: shared regional selectors include `.kk-uk-journal`/`.kk-footer-uk`; background, hero edges and readability adjustments are scoped to Uttarakhand.

The production build generates 158 static outputs, including 15 new child routes. Dependencies, Next.js/React versions, CSP and asset origins are unchanged. The India atlas, D3, selection store and viewer rendering lifecycle are unchanged.

## Source review

Primary sources checked on 21 November 2026 support regional introductions, not the provenance or certification of sample inventory.

- [Almora district — handicrafts](https://almora.nic.in/handicrafts/): copperware, Ringal places and woollen centres including Munsyari. Its historical price table was not used for current catalogue values.
- [Sangeet Natak Akademi — Aipan inventory report](https://indiaich-sna.in/sites/default/files/2023-11/report_26.pdf): Kumaon setting, white rice-paste/red-ground practice and cultural contexts.
- [MoSPI — Uttarakhand handicrafts](https://mospi.gov.in/sites/default/files/economic-census/sixth_economic_census/handicraft/Uttarkhand.pdf): Aipan, Ringal, Likhai and nettle-fibre craft overview.
- [Invest India — Almora handicraft action report](https://static.investindia.gov.in/s3fs-public/2022-01/20200125_ActionReports_Website2.pdf): Almora associations for Aipan, copperware, Likhai, natural fibres and woollens.
- [Invest Uttarakhand — sector resource profile](https://investuttarakhand.uk.gov.in/themes/backend/uploads/IP_UK_Sericulture%20Sector%20Profile-2019-05-21.pdf): nettle-fibre activity, including Chamoli. Historical capacity estimates and sustainability assertions were not carried into item claims.
- [IP India — state-wise GI register](https://ipindia.gov.in/frontend/pdf/gi/registered/State_wise_Registered_GI_of_India.pdf): names of Uttarakhand Aipan, Ringal Craft, Tamta Product, Thulma, Bichhu Buti Fabrics and Likhai. Registration of a tradition does not establish authorised status for sample items; no item badge is applied.
- Official visitor information: [Almora](https://almora.nic.in/tourism/), [Pithoragarh excursions including Munsyari](https://pithoragarh.nic.in/excursion/), [Nainital](https://uttarakhandtourism.gov.in/destination/nainital/), [Rishikesh](https://uttarakhandtourism.gov.in/destination/rishikesh/), [Kausani](https://bageshwar.nic.in/tourist-place/kausani/) and [Chamoli](https://chamoli.gov.in/tourism/).

## Assets

Eight conceptual compositions were generated using the built-in image tool, inspected and resized/re-encoded into `public/images/uk-*.webp`: hero, mural, aipan, ringal, copper, thulma, likhai and nettle. The Aipan-inspired imagery is original decorative work, not an attributed ceremonial design. The veranda is atmospheric artwork rather than a named workshop or monument.

[Exact prompts, source paths and file metadata](UTTARAKHAND_IMAGE_PROMPTS.json) record provenance. Original PNGs remain outside the repository. Earlier region assets are intact and no external asset host was added.

## Verification

Strict TypeScript, zero-warning lint and the 158-output production build passed. Local Chrome with SwiftShader checked widths 320, 390, 768, 1024, 1281 and 1440px; all 15 child routes on mobile; all four presets on six item viewers; section anchors; regional navbar/footer; six tourism entries; Thulma search; unknown-route 404s; and a mixed Uttarakhand/Bihar cart with expected INR and EUR totals. No runtime exceptions or horizontal overflow were observed.

Additional checks confirmed all four currency values on the Aipan item, red native text with a 14px English gloss, and product-image/purchase availability with WebGL disabled. Desktop/mobile hero, mobile craft cards and desktop footer screenshots were visually reviewed. These checks do not establish physical-device performance or comprehensive screen-reader coverage.

The existing Uttar Pradesh journey regression also passed after the shared theme/catalogue expansion, including all six viewers, responsive layouts, search, navigation/footer and mixed-region cart totals. Existing Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks passed.
