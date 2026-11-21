# Odisha regional chapter

Implemented locally on 21 November 2026, after Bihar, Jammu & Kashmir and West Bengal. No commit, new branch, push or deployment is included in this milestone.

## Experience

`/state/odisha` inherits the registered warm-ivory, burnt-red, forest-green and gold palette, temple typography, chakra motif and Odia native line. A full-page Pattachitra-inspired decorative ground uses painted floral borders, lotus, conch and wheel forms with a quiet centre. The local readability washes and mobile text treatment follow the preceding regional chapters.

The hero flows directly into six collections, without the slogan ribbon removed at the user’s request. The collections cover Odisha Pattachitra, Sambalpuri weaving, Pipili appliqué, Dhokra metalwork, Cuttack Tarakasi and Kotpad handloom. Six collection/making routes and three separate journal routes keep detailed reading off the main cards. The closing area uses a direct navigation heading rather than another craft slogan.

Six item detail routes reuse the image-first gallery, opt-in image-backed Three.js presentation, four view presets, rotation/zoom, regional price selector and cart. There are no new scans or volumetric models. Tourism entries link Raghurajpur, Pipili, Konark, Puri, Bhubaneswar and Chilika to official information.

## Implementation boundaries

- `lib/states/odisha.ts`: typed content, source-associated places, sample products, three articles and six tourism links.
- `components/state/OdishaJournal.tsx`: server-rendered regional landing.
- `app/state/odisha/crafts/[craft]/page.tsx`: six static collection/making routes.
- `app/state/odisha/journal/[article]/page.tsx`: three static reading routes.
- `app/state/odisha/products/[product]/page.tsx`: six static item routes using the shared product layout.
- `lib/states/journalTheme.ts`: the regional navbar/footer/cart theme entry and Odia script metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: a fourth region, stable item URLs and fixed INR/EUR/USD/GBP sample values. These remain local fixtures rather than exchange-rate quotes or live stock.
- `app/globals.css`: existing regional surface/readability rules now include `.kk-od-journal`; the Odisha mural and native font fallbacks are scoped to that class. No other region’s background file is replaced.

The build generates 113 static outputs, including 15 additional child routes. The framework, dependencies, CSP, image hosts, shared viewer lifecycle and India atlas/D3 code are unchanged. No backend, booking, payment or order service was introduced.

## Source review

The following sources were checked on 21 November 2026. They support regional introductions, not the provenance or certification of individual sample items.

- [Odisha Tourism — arts, crafts and handloom](https://odishatourism.gov.in/en/arts-crafts-handloom): Pattachitra, Tarakasi, Pipili and western Odisha handloom associations.
- [Odisha Tourism — arts and crafts](https://apps.odishatourism.gov.in/arts-crafts): craft/material context including Dhokra.
- [Cuttack district — handicraft](https://cuttack.odisha.gov.in/en/tourism/handicraft): Tarakasi fine-wire work.
- [IP India — Sadeibareni Dhokra application record](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/1322): Dhenkanal association. No registration/authorised-user badge is applied to the sample item.
- [Government of India — GI craft brochure](https://static.pib.gov.in/WriteReadData/specificdocs/documents/2021/nov/doc2021112441.pdf): Sambalpuri yarn-dyeing and Kotpad weaving context.
- [Kotpad municipality — history](https://sujogportal.odisha.gov.in/kotpad/city/history/): Kotpad, Koraput and Mirgan weaving context.
- [Puri district — Raghurajpur](https://puri.odisha.gov.in/en/tourism/tourist-places/raghurajpur).
- [Odisha Tourism — Pipili](https://odishatourism.gov.in/en/places/pipili).
- [UNESCO — Sun Temple, Konark](https://whc.unesco.org/en/list/246/).
- [Odisha Tourism — Puri](https://odishatourism.gov.in/en/destinations/puri).
- [Odisha Tourism — Bhubaneswar](https://odishatourism.gov.in/en/destinations/bhubaneswar).
- [Chilika Development Authority](https://www.chilika.com/).

There are no invented makers, named workshops, GI-certified item claims, silver-purity claims, fibre/dye certificates or tourist opening/fee guarantees. Product names, dimensions and prices are sample catalogue data for the current frontend and require authoritative product/API integration later. Odisha Pattachitra is described separately from Bengal Patachitra rather than treated as interchangeable.

## Asset provenance

Seven new conceptual illustrations were generated with the built-in image tool, inspected and resized/re-encoded to same-origin WebP files: `od-hero`, `od-mural`, `od-pattachitra`, `od-sambalpuri`, `od-pipili`, `od-filigree` and `od-kotpad`. The generic `wb-dokra.webp` concept study is reused for the metalwork illustration; it is not a photograph proving that an item originated in a particular district. The hero is regional atmosphere, not a named workshop or tourist monument.

[Exact prompts and file metadata](ODISHA_IMAGE_PROMPTS.json) record generation and reuse. Source PNGs remain outside the repository, previous assets are intact, and no external asset origin or image dependency was added.

## Verification

Strict TypeScript, zero-warning lint and a 113-output production build passed. Local Chrome/SwiftShader checked the main page at 320, 390, 768, 1024, 1281 and 1440px, all 15 child routes on mobile, all four presets on each of the six item viewers, anchors, theme/background inheritance, regional navbar/footer, six tourism entries, Tarakasi search and unknown-route 404s. The absence of the removed ribbon was checked. A mixed Odisha/Bihar cart produced the expected INR and EUR subtotals. Hero, craft and footer screenshots were visually reviewed, including the Odia script. No runtime exceptions or horizontal overflow were observed.

These local checks do not establish physical-device performance, comprehensive screen-reader coverage or authenticity of sellable inventory.

The existing West Bengal journey regression also passed after the shared styling/catalogue expansion, including its six viewers, mixed-region prices, navigation/footer and the earlier regional-page theme checks.
