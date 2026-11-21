# Uttar Pradesh regional chapter

Implemented locally on 21 November 2026, following Jharkhand. No commit, branch, push or deployment is included.

## Experience

`/state/uttar-pradesh` uses an embroidered ivory ground inspired by Chikankari, framed with burgundy/gold woven borders and restrained indigo details. The registered royal typography and regional palette remain in use. Readability surfaces sit over the full-page background, with burgundy native text and dark supporting text. The hero retains its full image composition rather than using an arched crop.

Six collections connect Lucknow Chikankari, Varanasi Banarasi weaving, Moradabad brassware, Khurja pottery in Bulandshahr, Bhadohi carpets and Gorakhpur terracotta to their places. The general “Blue pottery” label in the cultural registry was replaced by the specific Khurja collection. These are selected entry points, not a claim to catalogue every Uttar Pradesh tradition.

The hero leads directly into collections without the removed slogan ribbon. Concise collection cards link to separate collection/process pages; three journal links open dedicated reading pages. Six item details reuse the image-first gallery, optional image-backed Three.js presentation, four view presets, rotation/zoom, regional currency selector and cart. These presentations are not volumetric scans.

Visitor entries link Lucknow, Varanasi, Sarnath, Agra, Ayodhya and Jhansi to official information. There are no booking, entry-fee or opening-time promises.

## Files and boundaries

- `lib/states/uttarPradesh.ts`: typed regional content, district associations, sample products, articles and tourism links.
- `components/state/UttarPradeshJournal.tsx`: server-rendered landing and section navigation.
- `app/state/uttar-pradesh/crafts/[craft]/page.tsx`: six static collection/making pages.
- `app/state/uttar-pradesh/journal/[article]/page.tsx`: three static reading pages.
- `app/state/uttar-pradesh/products/[product]/page.tsx`: six shared item-detail pages.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: select the detailed regional landing.
- `lib/states/journalTheme.ts`: native text, navbar/footer and cart theme metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: sixth catalogue region, stable URLs and fixed INR/EUR/USD/GBP sample prices.
- `lib/stateThemes.ts`: updated selected craft labels; palette, typography and other regional theme settings are retained.
- `app/globals.css`: regional selectors include `.kk-up-journal`/`.kk-footer-up`; mural, complete hero edges and readability adjustments are scoped to Uttar Pradesh.

Prices, dimensions and catalogue records remain local fixtures for later API integration. No named maker, workshop provenance, GI-authorised item, silk purity, precious-metal content, food-contact safety or inventory claim is invented. The ceramic bowl is presented as decorative. The generated images do not establish how a sellable item was made.

The production build produces 143 static outputs, including 15 additional child routes. Dependencies, Next.js/React versions, CSP, external image origins and the India atlas/D3 functionality are unchanged. There is no new backend, payment or booking service.

## Source review

Primary sources checked on 21 November 2026 support introductory regional context, not provenance or certification of individual sample products.

- [Government of Uttar Pradesh — ODOP district products](https://odopup.in/en/districts): district associations for the six selected collections.
- [National Crafts Museum — Chikankari](https://nationalcraftsmuseum.nic.in/artifacts-detail/36005) and [Incredible India — Lucknow art and craft](https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/lucknow/art-and-craft.html): Lucknow association, floral designs and stitch variation.
- [Varanasi district — Banaras brocades and sarees](https://varanasi.nic.in/district-produce/banarasi-saree/) and [Incredible India — brocades](https://www.incredibleindia.gov.in/en/uttar-pradesh/banaras-brocades-and-sarees): woven motifs and borders.
- [Incredible India — Moradabad metal craft](https://www.incredibleindia.gov.in/en/uttar-pradesh/moradabad-metal-craft): regional brassware, casting, engraving and surface decoration.
- [Incredible India — Khurja pottery](https://www.incredibleindia.gov.in/en/uttar-pradesh/khurja-pottery) and [Bulandshahr district — Khurja](https://bulandshahar.nic.in/tourist-place/khurja-pottery-industry/): ceramic production and painted/glazed surfaces. No health or cooking-benefit claims were carried into the page.
- [Varanasi district — handmade carpet of Bhadohi](https://varanasi.nic.in/district-produce/hand-made-carpet-of-bhadohi/) and [National Portal — Bhadohi carpets](https://www.india.gov.in/explore-india/odop/details/handmade-carpet-of-bhadohi): regional carpet context.
- [Incredible India — Gorakhpur terracotta](https://www.incredibleindia.gov.in/en/uttar-pradesh/gorakhpur-terracotta): fired-clay animal forms and local craft communities.
- Official visitor information: [Lucknow](https://lucknow.nic.in/tourist-places/), [Varanasi tourism](https://varanasi.nic.in/tourism/), [Varanasi tourist places](https://varanasi.nic.in/tourist-places/), [Agra](https://agra.nic.in/tourist-places/), [Ayodhya](https://ayodhya.nic.in/tourism-ebook/) and [Jhansi](https://jhansi.nic.in/tourism/).

## Assets

Eight new conceptual compositions were generated with the built-in image tool, inspected and resized/re-encoded into `public/images/up-*.webp`: hero, mural, chikankari, banarasi, brass, khurja, carpet and terracotta. The background is original decorative artwork, not a reproduction attributed to a particular maker. The courtyard is atmospheric rather than a named monument or workshop.

[Exact prompts, source paths and file metadata](UTTAR_PRADESH_IMAGE_PROMPTS.json) record provenance. Original PNGs remain outside the repository and earlier region assets are intact.

## Verification

Strict TypeScript, zero-warning lint and the 143-output production build passed. Local Chrome with SwiftShader checked 320, 390, 768, 1024, 1281 and 1440px layouts; all 15 child routes on mobile; all four presets on each of six item viewers; section anchors; regional navbar/footer; six tourism entries; Khurja search; unknown-route 404s; and a mixed Uttar Pradesh/Bihar cart with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed. Hero, mobile craft cards and desktop footer screenshots were visually inspected. The review identified pale native text, which was changed to burgundy before the final build.

The existing Jharkhand journey passed after the shared-selector/catalogue expansion, including six viewers, search and mixed-region cart totals. Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks also passed. Local software-rendered checks do not establish physical-device performance or comprehensive screen-reader coverage.

Final checks after the readability adjustment confirmed the native line is burgundy with a 14px gloss, layouts remain within the viewport, all four currency selections display the expected sample price, and disabling WebGL leaves the product image and purchase controls available. Final mobile hero and fallback screenshots were visually reviewed.
