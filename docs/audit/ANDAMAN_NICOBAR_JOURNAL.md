# Andaman & Nicobar regional chapter

Implemented locally on 22 November 2026. No commit, branch, push or deployment is included.

## Experience

`/state/andaman-and-nicobar` has a sea-teal and amber woven-bamboo surround with fine green leaf details. Cool quiet reading surfaces preserve contrast. The existing folk typography, shell ornament and Hindi editorial heading `सागर शिल्प` are retained with an English gloss; the heading is not presented as an Indigenous-language label. The full rectangular hero remains visible.

Six material-led collections introduce coconut-shell craft, decorative woodwork, cane basketry, bamboo weaving, coir work and embroidery. The two interlaced-material collections compare fine cane with broader flat bamboo strips; these are material/process groupings rather than six asserted separate community traditions. Products use broad island-region associations, not unverified specific-island or community origins. No district geometry is added. The cushion-cover sample is labelled cover only despite its filled presentation image.

Three reading pages consider shell curvature, weaving and wood grain. Six collection/process routes and six product routes keep the landing cards concise. The sample catalogue does not claim to represent every community or Nicobari tradition; existing editorial context about Nicobari mats is not turned into fabricated attributed inventory. The registered padauk-specific claim is replaced with a broader woodcraft introduction because the sample bird’s timber species is not established. Marine-shell inventory is not part of this collection.

Visitor entries cover Sri Vijaya Puram, Swaraj Dweep, Shaheed Dweep, Chidiya Tapu, Rangat and Diglipur. Current place names are used. Official tourism and district information is linked without suggesting access to protected communities, restricted islands, current transport schedules, fees or bookings. A separate official travel-care link supports checking current island-access information.

Andaman & Nicobar is the twenty-first sample catalogue region. Its data key remains `Andaman & Nicobar Island` to preserve existing geography/theme joins; the public route and chapter title use the established display name.

## Regional files

- `lib/states/andamanNicobar.ts`: typed collections, six sample items, three articles and six visitor entries.
- `components/state/AndamanNicobarJournal.tsx`: chapter layout and section links.
- `app/state/andaman-and-nicobar/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/andaman-and-nicobar/journal/[article]/page.tsx`: three reading routes.
- `app/state/andaman-and-nicobar/products/[product]/page.tsx`: six shared item-detail routes.
- `public/images/an-*.webp`: hero, mural, coconut, wood, cane, bamboo, coir and stitch.
- `.kk-an-journal` / `.kk-footer-an`: regional CSS scopes.

## Source review

Primary sources checked on 22 November 2026 support regional context, not provenance of sample products.

- [Andaman Directorate of Industries — Sagarika](https://industries.andamannicobar.gov.in/sagarika.php): wood, cane/bamboo and coconut-shell craft categories. Its marketing list includes mainland units, so listing alone does not establish an individual object’s island origin or supplier partnership.
- [Development Commissioner Handicrafts — regional craft programmes](https://handicrafts.gov.in/cmsUpload/20260128131442Proposal%20invite%20advertisement%20PC%202026-27%20final%20%28for%20uploading%29.pdf): cane/bamboo, embroidery, coconut shell, coir and woodcarving context.
- [Andaman administration — craft promotion](https://dt.andamannicobar.gov.in/DetailNews.aspx?newsid=vZclkSAPr6pe7z+rFRWM2ydbW+2+HmnJExPeYmHjtsc%3D): material craft landscape and current capital/island names, not present stock or event availability.
- [Official Andaman tourism](https://tourism.andamannicobar.gov.in/), [South Andaman visitor places](https://southandaman.nic.in/tourist-places/), [Chidiya Tapu](https://southandaman.nic.in/tourist-place/chidiyatappu/), [North & Middle Andaman tourism](https://northmiddle.andaman.nic.in/tourism/) and [Incredible India — island overview](https://www.incredibleindia.gov.in/en/andaman-and-nicobar-islands): visitor-place context. Some tourism links use changing encoded parameters, so stable official landing/district pages are preferred.
- [Official travel care](https://tourism.andamannicobar.gov.in/travel-care.php): current information pathway; no legal or transport detail is copied into product copy.

[Exact asset prompts and file metadata](ANDAMAN_NICOBAR_IMAGE_PROMPTS.json).

## Shared implementation

Both chapters reuse static server-rendered collection and reading routes, the existing market selector, persistent local basket and shared product-detail gallery. Galleries open in image mode; optional Three.js viewing provides four presets, rotation and zoom on an image-backed surface. These are not scans or volumetric models. Image viewing and purchase controls remain available without WebGL.

Prices, dimensions and products remain sample fixtures for later API integration, including fixed INR/EUR/USD/GBP values rather than live exchange rates. No stock, payment, seller or booking backend is introduced. No named maker, workshop, community authorship, GI-authorised stock, certification, timber species or material-sourcing guarantee is invented. Products do not claim food-safety, heat resistance or marine/load-bearing suitability. Materials are coconut shell rather than marine shell; no coral or turtle-shell inventory is added.

Framework versions, dependencies, CSP, external asset origins, D3/atlas geometry and renderer lifecycle are unchanged. The geometry registry’s legacy Andaman key is retained. The footer now uses the existing `displayName` helper for customer-facing region names, so the legacy singular Andaman key is not displayed there.

Shared integration files: `lib/states/index.ts`, `app/state/[slug]/page.tsx`, `lib/states/journalTheme.ts`, `lib/commerce/regions.ts`, `lib/commerce/catalog.ts`, `lib/commerce/productDetails.ts`, `lib/stateThemes.ts`, `app/globals.css` and `components/layout/SiteFooter.tsx`.

## Assets

Eight original compositions per chapter were generated with the built-in image tool, visually inspected and resized/re-encoded as local WebP files. Exact prompts, original PNG paths and output metadata are linked below. Source PNGs and earlier regional assets remain intact. These are conceptual artworks rather than documentary inventory photographs. Verandas are not named workshops or identifiable island locations. The borders leave quiet reading centres without horizontal frames. No attributed community patterns or ceremonial reproductions are invented.

## Validation scope

Strict TypeScript, zero-warning lint and the production build passed. The combined build contains 373 prerendered application routes (376 static outputs including framework outputs): 15 new Andaman & Nicobar child routes and 12 new Lakshadweep child routes.

Browser checks use local headless Chrome and SwiftShader software WebGL. They cover widths 320, 390, 768, 1024, 1281 and 1440px, mobile detail-route layouts, all four presets in six product viewers per chapter, anchor clearance, regional navigation/footer, visitor entries, search, unknown-route 404s and mixed-state basket totals. Physical-device performance and comprehensive screen-reader coverage are not established by this profile.

Visual review caught a missing Lakshadweep registration in the shared CSS selectors, which left its footer image incorrectly positioned and its navigation/footer in the base colours. The selectors were corrected and browser verification strengthened to assert the rendered footer background colour, in addition to the regional class and variables. This was fixed before final verification.

Final browser verification passed with no runtime exceptions or horizontal overflow. All 27 new child routes loaded on mobile; all four presets worked in all twelve optional product viewers. Both chapters passed four-market price checks and image/purchase fallback checks with WebGL disabled. Desktop hero/footer and mobile hero/craft screenshots were reviewed after the Lakshadweep style correction.

The normal port 3000 development app initially served stale overviews. Its repository-owned development server was restarted; both new chapters, correctly coloured/contained footers and contained hero images were then confirmed in the live app. A combined Andaman/Lakshadweep basket produced the expected INR/EUR/USD/GBP totals without runtime exceptions. Puducherry’s full journey regression and Bihar/Jammu & Kashmir/Rajasthan/homepage theme checks passed.

The development app remains running. The separate production preview and headless browser were stopped after verification. All changes remain uncommitted.
