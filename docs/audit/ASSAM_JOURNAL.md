# Assam regional chapter

Implemented locally on 22 November 2026 as the first Northeast chapter. Changes remain uncommitted; no branch, push or deployment is included.

## Experience and implementation

`/state/assam` now introduces Muga silk weaving, Eri silk weaving, Gamosa, bamboo/cane work, Sarthebari metalwork and Sitalpati mats. These are selected material traditions, not an exhaustive account of Assam’s communities or crafts. Muga’s naturally golden fibre and Eri’s spun-yarn texture are distinguished without exclusive-origin, purity, ethical-production or certification claims for the sample inventory. Sarthebari’s bowl is decorative, without a food-contact or alloy-composition claim. Sitalpati is placed in the wider Assam landscape, including Goalpara; no unsupported botanical identification is added.

Woven red vertical bands, fine golden lines and green bamboo leaves frame quiet ivory reading surfaces. The registered gold/green/earth palette, folk display font, existing ornament and Assamese `শিল্পৰ দেশ` heading are retained. Text, buttons and footer use an ink-mixed gold for readability without changing registered inline palette values. The full rectangular hero avoids an arch crop. Section links scroll to crafts, readings, items and visitor information. There is no embedded map, new icon library or slogan ribbon.

- `lib/states/assam.ts`: typed regional content, six collections/items, three readings and six visitor entries.
- `components/state/AssamJournal.tsx`: server-rendered chapter and section navigation.
- `app/state/assam/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/assam/journal/[article]/page.tsx`: three reading routes.
- `app/state/assam/products/[product]/page.tsx`: six shared item-detail routes.
- `lib/states/index.ts`, `app/state/[slug]/page.tsx`: registration and dispatch.
- `lib/states/journalTheme.ts`: route-facing navigation/footer metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: catalogue integration, explicit URLs and fixed market values.
- `lib/stateThemes.ts`: selected craft labels and material introduction replace an unsupported exclusivity superlative.
- `app/globals.css`: Assam joins shared journal/footer selectors with scoped border, native text and contrast rules.

Assam is the 29th detailed discovery entry. Fixed products, dimensions and INR/EUR/USD/GBP values remain fixtures for later API integration. The existing local basket is reused. No backend, inventory, seller, payment, booking or authentication integration is added. Concurrent account/navigation work is preserved. No named maker, workshop relationship, GI-authorised stock, fibre purity or natural-dye guarantee is invented.

Six visitor entries introduce Sualkuchi, Sarthebari/Barpeta, Majuli, Sivasagar, Kaziranga and Assam State Museum using official information. The app does not promise current hours, fees, transport, safaris, events or workshop access. Some district URLs were unavailable during review; Majuli and Sivasagar use the verified state tourism circuit page instead.

All six products start in image mode, optionally opening the existing image-backed Three.js surface and four presets. These are not scans or volumetric models. Image and purchase controls remain usable without WebGL. Dependencies, framework, CSP, renderer lifecycle and atlas/D3 behavior are unchanged.

## Primary sources

Reviewed on 22 November 2026 for cultural context, not inventory provenance.

- [Directorate of Sericulture — silk production](https://sericulture.assam.gov.in/how-to/know-about-silk-and-its-production-in-assam), [reeling and spinning](https://sericulture.assam.gov.in/portlets/silk-reeling-and-spinning): Muga, Eri, reeled and spun yarn context. No current production totals or ethical certification is inferred.
- [ARTFED products](https://artfed.assam.gov.in/portlets/products), [AGMC handloom and handicrafts](https://agmcltd.assam.gov.in/portlets/handloom-handicraft-products): regional textile, Gamosa, bamboo/cane and metal categories. No retail partnership or maker relationship is implied.
- [Barpeta district — traditional crafts](https://barpeta.assam.gov.in/about-us-level-two/traditional-crafts/culture): Sarthebari metal and bamboo/cane context.
- [Commissionerate of Industries — handicrafts](https://industriescom.assam.gov.in/portlet-innerpage/present-handicrafts-industries-in-assam): metalwork, basketry and Sitalpati. Historical capacity, caste generalisations and botanical naming are not copied.
- [MSME — approved clusters](https://dashboard.msme.gov.in/approved_sfurti_cluster.aspx): Goalpara Sitalpati association, not current artisan counts or inventory certification.
- [Assam rural livelihoods — bamboo/cane](https://asrlms.assam.gov.in/frontimpotentdata/asomi-product-cane-bamboo-products): material and household-use context.
- Visitor information: [Sualkuchi](https://assamtourism.gov.in/Sualkuchi.php), [Barpeta](https://barpeta.assam.gov.in/about-us-level-two/traditional-crafts/culture), [Majuli/Sivasagar circuit](https://tourism.assam.gov.in/portlet-sub-innerpage/circuit3), [Kaziranga](https://kaziranga.assam.gov.in/), [museums](https://museums.assam.gov.in/). External availability and information can change; no current booking promises are copied.

## Assets

Eight local `as-*.webp` concepts comprise a hero, quiet-centred mural and six item images. Built-in generation, visual inspection and WebP conversion retain source PNGs and earlier assets. The initial hero unexpectedly formed a contact sheet and was replaced with one continuous photograph. [Exact prompts, both hero attempts and output metadata](ASSAM_IMAGE_PROMPTS.json) record provenance. These are conceptual artworks rather than documentary inventory photographs. The courtyard is unnamed; the hero introduces a material palette while item images show separate compositions.

## Verification

The map-preparation step, strict TypeScript, zero-warning lint and production build passed. Generated map assets are unchanged. With the concurrent account pages present, there are 464 prerendered application routes and 467 static outputs including framework outputs. Assam adds 15 child routes. `git diff --check` passed.

Local headless Chrome on macOS with SwiftShader checked 320, 390, 768, 1024, 1281 and 1440px; all 15 mobile detail routes; all four presets in six optional viewers; anchor clearance; regional navigation/footer; six visitor entries; Sitalpati search; unknown-route 404s; and a mixed Assam/Bihar cart with expected INR/EUR totals. Separate checks passed all four market prices and image/purchase availability with WebGL disabled. No application runtime exceptions or horizontal overflow were observed. Desktop hero/footer and mobile hero/craft screenshots were visually reviewed, including Assamese rendering.

Computed ink-mixed gold is `color(srgb 0.464627 0.346039 0.0533333)`. Against registered paper and paper-deep it measures approximately 6.21:1 and 5.54:1 respectively. Text, buttons, price and native heading use that colour; visitor icons receive the same treatment. This is a measured token comparison, not a comprehensive accessibility certification.

Goa’s complete journey regression passed, including shared cart and navigation with the concurrent account link. Bihar, Jammu & Kashmir and homepage theme checks passed. Account component source and staged changes were preserved. Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage.

Port 3000 initially retained the previous overview. Restarting the existing repository development server resolved it; its response includes the Assam chapter, hero and footer. The development app remains running. The separate QA preview and headless browser were stopped after verification. Changes remain uncommitted.
