# Meghalaya regional chapter

Implemented locally on 23 November 2026. Changes remain uncommitted; no branch, push or deployment is included.

## Experience

`/state/meghalaya` continues the Northeast rollout with five collections: Ryndia silk, Khneng embroidery, Garo Dakmanda weaving, bamboo/cane basketry and Larnai black pottery. Six items include two forms in the same Ryndia collection. The selected collections are not an exhaustive account of Meghalaya’s communities or material traditions.

Mist-green paper surfaces and fine woven vertical borders frame the page. Bamboo leaves and restrained ochre details support the registered green/brown/teal palette, folk typography and bamboo ornament. Ink-mixed green improves small-text and button contrast while keeping palette slots unchanged. The full rectangular hero shows a single veranda scene. Navigation, footer, process, reading and item pages inherit the regional theme.

The previous registry line `Ka Ri Bhoi` was incorrectly glossed as the whole state’s land. It is replaced by the verified state name and “abode of clouds” meaning. The chapter uses an English contextual line naming Khasi, Jaintia and Garo craft traditions rather than inventing a Khasi translation. This is a cultural introduction, not a claim that no other communities live or make work in the state.

Ryndia is identified as Eri silk, with Ri Bhoi/Umden–Diwon context. Khneng is associated with Shella and Mustoh in East Khasi Hills. Garo textile context is preserved rather than presented as generic statewide pattern work. Larnai pottery is associated with West Jaintia Hills and hand shaping. The decorative vase makes no food-contact, medicinal, heat-resistance or specific recipe assertion. Sample imagery and specifications do not establish fibre purity, dye origin, GI-authorised stock, ethical silk certification or maker provenance.

Concise cards lead to separate collection/process pages. Three reading pages cover spun-yarn texture, stitched edges and hand-shaped clay. Six visitor entries introduce Umden–Diwon, Larnai, Shillong, Tura/Garo Hills, Nartiang and Sohra through official sources. No current hours, fees, transport, booking access, guided experience or event availability is promised. There is no embedded map or slogan ribbon.

## Implementation

- `lib/states/meghalaya.ts`: typed chapter content, five collections, six products, three readings and six visitor entries.
- `components/state/MeghalayaJournal.tsx`: server-rendered chapter and section navigation.
- `app/state/meghalaya/crafts/[craft]/page.tsx`: five collection/process routes.
- `app/state/meghalaya/journal/[article]/page.tsx`: three reading routes.
- `app/state/meghalaya/products/[product]/page.tsx`: six shared item-detail routes.
- `lib/states/index.ts`, `app/state/[slug]/page.tsx`: registration and dispatch.
- `lib/states/journalTheme.ts`: route-facing navigation/footer metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: catalogue integration, explicit URLs and fixed market values.
- `lib/stateThemes.ts`: selected craft labels, material introduction and corrected state-name gloss.
- `app/globals.css`: `.kk-ml-journal`/`.kk-footer-ml` join existing selectors, with scoped mural, context-line typography and readable-green treatments.

Meghalaya is the 30th detailed discovery entry. Products, dimensions and INR/EUR/USD/GBP values remain fixtures for later API integration; the existing local basket is reused. No backend, seller, inventory, payment, booking or authentication integration is added. Concurrent account/navigation work and the uncommitted Assam chapter are preserved.

Six products start in image mode and optionally open the existing image-backed Three.js surface and four presets. These are not scans or volumetric models. Image mode and purchase controls remain usable without WebGL. Framework versions, dependencies, CSP, renderer lifecycle and atlas/D3 behavior are unchanged.

## Primary sources

Reviewed on 22–23 November 2026 for cultural context, not inventory provenance.

- [Meghalaya Tourism — local crafts](https://www.meghalayatourism.in/experiences/culture-%26-lifestyle/local-life-%26-leisure/local-crafts/), [handcrafted textiles](https://www.meghalayatourism.in/experiences/culture-%26-lifestyle/handcrafted-textiles/): Eri, community-specific textiles and craft landscape. General sustainability/ethical claims are not transferred to sample stock.
- [Textiles Department — Ryndia](https://ryndia.in/), [about Ryndia](https://ryndia.in/about-us/): Ri Bhoi and Umden–Diwon context. No named weaver partnership is inferred.
- [IGNCA — textiles of Meghalaya](https://ignca.gov.in/divisionss/janapada-sampada/northeastern-regional-centre/textiles-of-meghalaya/): Garo Dakmanda and wider weaving/cane/bamboo context. Dated household statistics and claims of exclusive gender roles are not repeated.
- [NESFAS — Khneng technique](https://nesfas.in/field/traditional-embroidery-technique-meghalaya-khneng/), [Mei-Ramew weaving and embroidery](https://nesfas.in/eri-weaving/): primary field context for Mustoh and needlework. Old exclusivity claims are not repeated.
- [Khneng craft initiative](https://khneng.tcpc.in/about-khneng/): Shella/Mustoh and stitched-border context. The sample is a contemporary border composition, not an attributed ceremonial textile.
- [IP India — Khneng application](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/1606): craft naming; no registered-stock badge or live application-status claim appears in the app.
- [Meghalayan Age/MBDA atelier brief](https://mbda.gov.in/sites/default/files/eoi-ateliers-meghalay-03.11.2020.pdf): Ryndia, basketry, Garo weaving and hand-shaped pottery context; historical proposals do not imply current facilities or bookings.
- [Meghalaya Tourism — Larnai pottery](https://www.meghalayatourism.in/experiences/adventure-%26-outdoor/living-root-bridges/larnai-black-pottery/): place and hand-shaping context. Recipe, duration, transport and cooking/safety claims are not copied to the sample vase.
- [Meghalaya House — state name](https://meghalayahousedelhi.nic.in/meghalaya.html): “abode of clouds” meaning.
- Visitor information: [Umden–Diwon](https://ryndia.in/experience-umden-a-cultural-tour-of-age-old-weaving-traditions/), [Larnai](https://www.meghalayatourism.in/experiences/adventure-%26-outdoor/living-root-bridges/larnai-black-pottery/), [East Khasi Hills](https://eastkhasihills.gov.in/tourist-places/), [West Garo Hills](https://westgarohills.gov.in/tourist-places/), [West Jaintia Hills](https://westjaintiahills.gov.in/tourist-places/). External information and availability can change.

## Assets

Eight local `ml-*.webp` assets comprise a hero, quiet-centred mural and six object compositions. Built-in generation, visual inspection and WebP conversion retain source PNGs and earlier regional assets. [Exact prompts, source paths and output metadata](MEGHALAYA_IMAGE_PROMPTS.json) record provenance. These are conceptual artworks rather than documentary inventory photographs. The veranda is unnamed; no named artist, workshop or ceremonial composition is reproduced. The hero introduces the material palette, while item images are separate compositions.

## Verification

The map-preparation step, strict TypeScript, zero-warning lint and production build passed. Generated map assets are unchanged. The build has 478 prerendered application routes and 481 static outputs including framework outputs. Meghalaya adds 14 child routes. `git diff --check` passed.

Local headless Chrome on macOS with SwiftShader checked widths 320, 390, 768, 1024, 1281 and 1440px; all 14 mobile detail routes; four presets in six optional viewers; section-anchor clearance; regional navigation/footer; six visitor entries; Khneng search; unknown-route 404s; and a mixed Meghalaya/Bihar cart with expected INR/EUR totals. All four market prices and image/purchase availability with WebGL disabled passed separate checks. No application runtime exceptions or horizontal overflow were observed. Desktop hero/footer, mobile hero/craft and asset contact sheets were visually reviewed. Before screenshots of the previous overview were captured at 320/1440px; its initial reveal animation makes those early frames unsuitable for a pixel-level layout comparison.

Computed darker green is `color(srgb 0.206667 0.386667 0.225882)`, measuring approximately 6.64:1 on registered paper and 5.95:1 on paper-deep. Native/context text, links, prices, visitor icons and actions use this colour. This token comparison is not a comprehensive accessibility certification.

Assam’s complete journey regression passed, including shared cart, currency and current account navigation. Bihar, Jammu & Kashmir and homepage theme checks also passed. Concurrent staged account source and previous regional work remain preserved. Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage.

Port 3000 initially retained the previous overview. After restarting the existing repository development server, its response was confirmed to contain Meghalaya’s chapter, hero and footer. The development app remains running. The separate production QA preview and headless browser were stopped after verification. Changes remain uncommitted.
