# Madhya Pradesh regional chapter

Implemented locally on 21 November 2026, following Himachal Pradesh. No commit, branch, push or deployment is included.

## Experience

`/state/madhya-pradesh` uses an original Gond-inspired painted surround with trees, birds and fine repeated marks at the edges. Warm paper, teal and ochre retain the registered regional identity and folk typography. The terracotta accent was deepened from `#C9541F` to `#A8431B`: its contrast against the solid paper token increases from 4.12:1 to 5.64:1. This is a token comparison, not a claim of comprehensive accessibility compliance.

The initial background had horizontal frames that repeated across the page. A second version removes those frames and keeps the centre quiet for content. Local reading surfaces keep the artwork from competing with text. The complete hero image remains visible, and its longer heading wraps naturally.

Six selected collections cover Gond painting, Bagh prints, Chanderi weaving, Maheshwari weaving, bell-metal work and Ujjain batik. They connect to Dindori, Dhar, Ashoknagar, Khargone, Tikamgarh and Ujjain respectively. These are researched entry points rather than claims of exclusive origin. Chanderi/Maheshwari and block-printing/batik have separate introductions and imagery.

The hero leads directly into concise collection cards without a decorative slogan ribbon. Six collection/process routes and three separate reading routes keep longer content off the main cards. Six item pages reuse the image-first gallery, opt-in image-backed Three.js presentation, four view presets, rotation and zoom. No scans or volumetric models were added.

The shared regional selector and cart support INR/EUR/USD/GBP using fixed local sample prices. Catalogue records, dimensions and market values remain fixtures for later API integration. There is no checkout, payment, booking or inventory backend. No named makers, workshop provenance, GI-authorised inventory, fibre/dye purity, precious-metal content or alloy certification is invented.

Six visitor entries link Chanderi, Maheshwar, Bhopal, Khajuraho, Sanchi and Mandu to official information without opening-time, weather, access, fee or booking promises.

## Implementation

- `lib/states/madhyaPradesh.ts`: typed regional content, district associations, sample products, three articles and six visitor entries.
- `components/state/MadhyaPradeshJournal.tsx`: server-rendered landing and section navigation.
- `app/state/madhya-pradesh/crafts/[craft]/page.tsx`: six static collection/making pages.
- `app/state/madhya-pradesh/journal/[article]/page.tsx`: three static reading routes.
- `app/state/madhya-pradesh/products/[product]/page.tsx`: six shared item-detail routes.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: select the detailed landing.
- `lib/states/journalTheme.ts`: native text and regional navbar/footer/cart theme metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: ninth sample catalogue region, explicit URLs and fixed market values.
- `lib/stateThemes.ts`: expanded craft labels, a broader introduction and the contrast-adjusted terracotta accent; other regional settings remain intact.
- `app/globals.css`: shared selectors include `.kk-mp-journal`/`.kk-footer-mp`; mural, hero edges, native text and purchase-status readability are scoped to Madhya Pradesh.

The production build generates 188 static outputs, including 15 new child routes. Framework versions, dependencies, CSP, asset origins, India atlas/D3, selection store and viewer rendering lifecycle are unchanged.

## Source review

Primary sources checked on 21 November 2026 support regional context, not provenance or certification of sample inventory.

- [Madhya Pradesh Tourism — art and handicrafts](https://www.mptourism.com/timeless-art-and-handicrafts-of-madhya-pradesh.html): regional overview of textiles, printing, painting and metalwork.
- [Dindori district — culture and heritage](https://dindori.nic.in/en/culture-heritage/): Patangarh and contemporary painting context.
- [Dhar district — Bagh Print ODOP](https://dhar.nic.in/en/odop/): Bagh’s district association. Registration or programme inclusion is not used as an individual item badge.
- [Madhya Pradesh Tourism — Chanderi textiles](https://www.mptourism.com/the-secret-of-chanderi-saris-and-its-destinations.html): light cloth and decorative motifs.
- [Madhya Pradesh Tourism — Maheshwar and Maheshwari saris](https://www.mptourism.com/maheshwar-tourist-places-and-maheshwari-saris.html): weaving centre and textile context.
- [Indore division — Maheshwar in Khargone](https://indoredivisionmp.nic.in/en/tourist-place/khargone-district-maheshwar/): district association.
- [IP India — bell-metal ware of Datia and Tikamgarh](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/102): regional craft name; no authorised-user or alloy claim is applied to the sample bird.
- [MP Trade Portal — Ujjain](https://mptradeportal.org/ujjain): Bhairavgarh/Ujjain batik and wax-resist process.
- [IP India — Ujjain Batik Print](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/700): regional naming. GI dates and badges are not attached to sample products.
- [MoSPI — Madhya Pradesh craft overview](https://www.mospi.gov.in/sites/default/files/economic-census/sixth_economic_census/handicraft/Madhya%20Pradesh.pdf): regional craft landscape.
- Official visitor information: [Chanderi](https://www.mptourism.com/destination-chanderi.php), [Maheshwar](https://www.mptourism.com/destination-maheshwar.php), [Bhopal](https://www.mptourism.com/destination-bhopal.php), [Khajuraho](https://www.mptourism.com/destination-khajuraho.php), [Sanchi](https://www.mptourism.com/destination-sanchi.php) and [Mandu](https://www.mptourism.com/destination-mandu.php).

## Assets

Eight original concepts were generated using the built-in image tool, inspected and resized/re-encoded into `public/images/mp-*.webp`: hero, mural, gond, bagh, chanderi, maheshwari, metal and batik. A subsequent built-in edit produced `mp-mural-v2.webp`, removing the horizontal background frame; this is the active background. The earlier mural remains intact for traceability.

The paintings are original nature compositions, not reproductions attributed to a particular Gond painter or ceremonial setting. The courtyard does not depict a named workshop or monument. [Exact prompts, source paths and file metadata](MADHYA_PRADESH_IMAGE_PROMPTS.json) record generation and the refinement. Original PNGs remain outside the repository, previous regional assets are intact and no external asset host was added.

## Verification

Strict TypeScript, zero-warning lint and the 188-output production build passed. Local Chrome with SwiftShader checked widths 320, 390, 768, 1024, 1281 and 1440px; all 15 child routes on mobile; all four presets on each of six viewers; section anchors; regional navbar/footer; six visitor entries; Chanderi search; unknown-route 404s; and a mixed Madhya Pradesh/Bihar cart with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed.

Additional checks confirmed the native text treatment, expected sample prices in all four currencies, and image/purchase availability when WebGL is disabled. Hero, craft-card and footer screenshots were visually reviewed; the horizontal background repeat found during that review prompted the v2 refinement. Local software-rendered checks do not establish physical-device performance or comprehensive screen-reader coverage.

After the background refinement, the final production build and targeted layout/currency/WebGL-fallback checks passed again. Updated mobile hero, desktop crafts and footer screenshots were visually reviewed with the v2 background.

The existing Himachal Pradesh journey regression also passed after the shared theme/catalogue expansion, including six viewers, responsive layouts, search, regional navigation/footer and mixed-region cart totals. Existing Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks passed.
