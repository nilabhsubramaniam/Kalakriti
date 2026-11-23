# Manipur regional chapter

Implemented locally on 23 November 2026. No branch, commit, push or deployment is included.

## Experience and implementation

`/state/manipur` introduces five selected collections: Longpi pottery, Moirang Phee weaving, Wangkhei Phee weaving, Kauna reed work and bamboo/cane basketry. These are selected material traditions, not an exhaustive account of Manipur’s communities. Quiet ivory surfaces sit within red woven borders, with charcoal accents and natural reed textures. The same background, navigation and footer identity follow collection, journal and product routes. No state map is embedded.

- `lib/states/manipur.ts`: five collections, six sample items, three articles and six visitor entries.
- `components/state/ManipurJournal.tsx`: regional landing chapter.
- `app/state/manipur/crafts/[craft]/page.tsx`: five collection pages with process notes and related items.
- `app/state/manipur/journal/[article]/page.tsx`: three separate reading pages.
- `app/state/manipur/products/[product]/page.tsx`: six product detail routes using the existing image-backed close-up viewer.
- `lib/states/index.ts`, `lib/states/journalTheme.ts`, `app/state/[slug]/page.tsx`, `lib/stateThemes.ts`: registration, metadata and regional identity.
- `lib/commerce/{regions,catalog,productDetails}.ts`: catalogue discovery, explicit fixture prices and product links.
- Labelled Manipur rules in `app/globals.css` extend the shared regional system without changing earlier state palettes.

Six items cover a decorative vase, two textiles, a reed mat, a reed tote and a bamboo basket. Four market prices (INR/EUR/USD/GBP) are explicit fixtures, not live conversion or actual offers. Shared cart persistence, search, market selection and image-first viewing remain intact. Close-ups use four presets on an image-backed Three.js surface, not volumetric scans. No food-contact certification, GI entitlement, verified producer, fibre certification or actual inventory is asserted.

Manipur’s incorrect Bengali native phrase in the identity registry is replaced with the neutral name “Manipur”; no unverified Meiteilon translation is introduced. Context labels use English with the correct language attribute.

## Primary sources

Reviewed on 23 November 2026 for cultural context, not sample-product provenance.

- [Manipur Tourism — handicrafts](https://manipurtourism.gov.in/handicraft/) and [handloom](https://manipurtourism.gov.in/handloom/): material traditions and textile context.
- [Ukhrul district — handloom and handicraft](https://ukhrul.nic.in/handloom-handicraft/): Nungbi/Longpi pottery and the Tangkhul association in Ukhrul.
- [Incredible India — Imphal arts and crafts](https://www.prod.incredibleindia.gov.in/content/incredible-india-v2/en/destinations/imphal/arts-and-crafts.html): hand-shaped pottery context. Health and exclusivity claims are not repeated.
- [GI registry — Wangkhei Phee](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/372) and [Moirang Pheejin](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/373): naming and border context only. No claim that sample products hold GI status; legal status is not inferred from historical dates.
- [MSME — Manipur cluster records](https://sfurti.msme.gov.in/Map/StatewiseDSR_MapDetails.aspx?state_id=14) and [MoSPI — historical handicraft census](https://www.mospi.gov.in/sites/default/files/economic-census/sixth_economic_census/handicraft/Manipur.pdf): Kauna reed-work context, not present-day supplier verification.
- Visitor links: [official Manipur portal](https://exploremanipur.mn.gov.in/), [Kangla Archaeological Museum](https://www.incredibleindia.gov.in/en/manipur/imphal/kangla-archaeological-museum), [Bishnupur, Manipur](https://bishnupur.nic.in/tourist-places/) and [Loktak landscape information](https://manipurtourism.gov.in/nature-and-wildlife/). Entries provide cultural context, not current access, permits, safety advice, opening hours or booking availability.

## Assets and limits

Eight local `mn-*.webp` assets cover a continuous hero scene, quiet-centred mural and six object compositions. They are conceptual illustrations, not documentary inventory photographs. The veranda is unnamed and no maker identity is fabricated. Original generated PNGs and existing regional assets remain intact. [Prompts, source paths and output metadata](MANIPUR_IMAGE_PROMPTS.json) record provenance.

No dependencies, backend, checkout, authentication, CSP, map renderer or shared Three.js lifecycle changes are introduced. Existing staged account/navigation changes and previous state work remain intact.

## Validation

- TypeScript passes and strict ESLint reports zero warnings.
- Offline mesh preparation and isolated `.next-relief` production build pass: 522 prerendered application routes / 525 static outputs. The existing development output directory was not overwritten.
- HTTP checks pass for the Manipur overview and all 14 child routes. Unknown craft, product and journal paths return 404.
- Actual headless Chrome layout measurements pass at 320, 390, 768, 1024, 1281 and 1440 CSS pixels: no horizontal overflow, clear logo/action boundaries, correct regional palette/mural/footer, six visitor entries, no embedded canvas and a hero action at least 44 × 44 pixels. Hero captures at 320 and 1440 were visually inspected, together with an eight-asset contact sheet.
- The local development server was restarted and `/state/manipur` returns the new chapter with the Manipur footer on port 3000.
- Browser limitation: Chrome repeatedly stalled on navigation after responsive captures/emulation. The complete detail-page, viewer-preset, currency/cart, search and cross-region browser regression suite did not complete; these interactions are not claimed as verified in this change. No application exception was reported during the completed layout measurements. There is no claim of performance benchmarking or comprehensive accessibility certification.
