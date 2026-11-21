# Jharkhand regional chapter

Implemented locally on 21 November 2026. No commit, branch, push or deployment is included.

## Experience and implementation

`/state/jharkhand` uses the registered earth palette, folk typography and a full-page Sohrai-inspired painted surround. The hero leads directly into the collections without a decorative slogan ribbon. Local reading surfaces keep text legible over the mural. Navigation, footer, collection pages, articles and item details inherit the regional theme.

- `lib/states/jharkhand.ts`: six crafts, six sample products, three articles and six tourism entries.
- `components/state/JharkhandJournal.tsx`: server-rendered regional landing.
- `app/state/jharkhand/crafts/[craft]/page.tsx`: Sohrai, Khovar, Paitkar, Dhokra, bamboo and tasar collections.
- `app/state/jharkhand/journal/[article]/page.tsx`: separate reading about Sohrai/Khovar, Paitkar and basket structure.
- `app/state/jharkhand/products/[product]/page.tsx`: six item routes reusing the image-first gallery and opt-in image-backed Three.js viewer.
- `lib/states/journalTheme.ts`, `lib/commerce/regions.ts`, `catalog.ts` and `productDetails.ts`: regional navigation/footer, fixed INR/EUR/USD/GBP sample prices, stable URLs and cart integration.
- `app/globals.css`: shared regional rules include `.kk-jh-journal`, with a scoped mural and native-script treatment.

The viewer offers four presets, rotation and zoom of an image-backed plane; these are not scanned volumetric objects. Prices and dimensions are local catalogue fixtures, not live API inventory or exchange rates. No payment, booking or order backend was added. The build produces 128 static outputs, including 15 new child routes. Dependencies, CSP and the India atlas/D3 functionality are unchanged.

## Source review

Primary sources checked on 21 November 2026 support regional context, not provenance or certification of individual sample items.

- [Jharkhand Tourism — art and culture](https://tourism.jharkhand.gov.in/artandculture/20): regional craft overview.
- [Tribal Welfare Research Institute — tribal and folk paintings](https://www.trijharkhand.in/en/tribal-and-folk-paintings-of-india-old): Hazaribagh Sohrai and Khovar, their different harvest/marriage contexts, and Paitkar storytelling associated with Amadubi in East Singhbhum.
- [Jharcraft — handicrafts](https://www.jharcraft.in/handicrafts/): metalwork and bamboo context. The Jamshedpur association does not imply Dhokra belongs exclusively to one district.
- [Jharcraft — handloom](https://www.jharcraft.in/handloom/) and [sericulture](https://www.jharcraft.in/sericulture/): textile context.
- [Central Silk Board — Saraikela](https://silks.csb.gov.in/saraikela/): district sericulture association.
- [MoSPI — Jharkhand handicrafts](https://mospi.gov.in/sites/default/files/economic-census/sixth_economic_census/handicraft/Jharkhand.pdf): regional craft associations, including Ranchi bamboo.
- Official visitor information: [Hazaribagh](https://hazaribag.nic.in/tourist-places/), [Ranchi](https://ranchi.nic.in/tourism/), [Ranchi tourist places](https://ranchi.nic.in/tourist-places/), [Latehar tourism](https://latehar.nic.in/tourism/), [Latehar places of interest](https://latehar.nic.in/places-of-interest/) and [Deoghar](https://deoghar.nic.in/tourist-places/).

The page links Hazaribagh, Ranchi, Dassam Falls, Netarhat, Betla and Deoghar to official information. It does not promise opening hours, fees, wildlife sightings or bookings. No named makers, workshop provenance, GI status or organic/fibre certifications are invented. Generated artwork is conceptual and does not claim ceremonial authenticity.

## Assets

Eight generated conceptual illustrations were inspected and resized/re-encoded into same-origin WebP files: `jh-hero`, `jh-mural`, `jh-sohrai`, `jh-khovar`, `jh-paitkar`, `jh-dhokra`, `jh-bamboo` and `jh-tasar`. Source PNGs remain outside the repository; previous regional images are intact. [Exact prompts and file metadata](JHARKHAND_IMAGE_PROMPTS.json) record provenance.

## Verification

Strict TypeScript, zero-warning lint and the 128-output production build passed. Local Chrome with SwiftShader checked widths 320, 390, 768, 1024, 1281 and 1440px; all 15 child routes on mobile; all four presets on each of six viewers; section anchors; six tourism links; regional navigation/footer; Khovar search; unknown-route 404s; and a mixed Jharkhand/Bihar cart with expected INR and EUR totals. No runtime exceptions or horizontal overflow were observed. Desktop hero/footer and mobile collection screenshots were visually reviewed.

The existing Odisha journey regression also passed, including its six viewers and mixed-region cart. Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks passed. These checks do not establish physical-device performance or comprehensive screen-reader coverage.
