# Kerala regional chapter

Implemented locally on 22 November 2026. No commit, branch, push or deployment is included.

## Experience

`/state/kerala` uses original Kasavu-inspired woven borders, muted leaf shadows and natural-fibre detail around an ivory centre. Reading surfaces remain quiet. Deep green and terracotta supporting tokens are retained; the gold accent deepens from `#B8912E` to `#80651E` for small-text/button contrast. The registered temple display face is retained, with Malayalam `കലയുടെ നാട്` and an English gloss. The hero keeps its rectangular composition without an arch crop.

Six collections introduce Kasavu weaving, Aranmula metal mirrors, coir, screw-pine weaving, Kunhimangalam metalwork and coconut-shell craft. Balaramapuram/Thiruvananthapuram, Aranmula/Pathanamthitta, Alappuzha, Thazhava/Kollam and Kunhimangalam/Kannur provide documented entry points. Shell work uses the broader Kerala workshops label rather than inventing a district of origin. These are discovery contexts, not proof of individual inventory provenance.

The unsupported “only metal mirror in the world” registry claim is replaced with a broader regional introduction. The mirror collection explains its polished-metal reflecting surface without a GI badge, maker endorsement or alloy formula claim. The textile specification does not assert pure gold or fibre purity.

Six collection/process pages, three separate reading pages and six item-detail pages keep the main cards concise. No slogan ribbon or embedded map is added. Shared item galleries open in image mode and offer opt-in image-backed Three.js presentation with four presets, rotation and zoom. No scanned or volumetric models are introduced.

Kerala is the fifteenth catalogue region, including the already present Chandigarh chapter. Fixed INR/EUR/USD/GBP prices and dimensions remain fixtures for later API integration. Cart persistence is local; no checkout, payment, inventory or booking backend is introduced. No named artisan, workshop, GI-authorised inventory, precious-metal content, fibre purity, food-contact suitability or independently verified sustainability claim is invented. The lamp is specified as decorative.

Visitor entries link Aranmula, Balaramapuram, Fort Kochi, Kumarakom, Munnar and Kunhimangalam to official information without opening hours, fees, event dates, weather, access or booking promises.

## Implementation

Inspected `CLAUDE.md`, the current state registry and slug architecture, Delhi/Chandigarh content and components, shared item routes, regional themes, commerce records, fonts, CSS and the running local app.

- `lib/states/kerala.ts`: typed content, six collections/items, three articles and six visitor links.
- `components/state/KeralaJournal.tsx`: server-rendered landing and section navigation.
- `app/state/kerala/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/kerala/journal/[article]/page.tsx`: three reading routes.
- `app/state/kerala/products/[product]/page.tsx`: six shared item-detail routes.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: register and select the detailed landing.
- `lib/states/journalTheme.ts`: navbar/footer/cart metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: fifteenth catalogue region, explicit URLs and fixed market prices.
- `lib/stateThemes.ts`: expanded craft labels, broader introduction and deepened gold accent.
- `app/globals.css`: shared selectors include `.kk-kl-journal`/`.kk-footer-kl`; background, hero and native/location-text treatments are Kerala scoped.
- `public/images/kl-*.webp`: eight new local assets.

README and architecture/asset notes record the milestone and current route count, including previously present Chandigarh routes. Framework versions, dependencies, CSP, external asset origins, atlas/D3 and viewer lifecycle remain unchanged. No dependencies were added or removed.

## Source review

Primary sources checked on 22 November 2026 support regional context rather than provenance or certification of sample products.

- [Kerala Handloom Directorate — Balaramapuram](https://handloom.kerala.gov.in/2024/03/13/balaramapuram-sarees-and-fine-cotton-fabrics/): weaving centre and district association.
- [Kerala Tourism — Balaramapuram textiles](https://www.keralatourism.org/kerala-article/2024/balaramapuram-tradition-of-handloom-sarees-and-cotton-fabrics/1456): regional textile context; item purity and historical origin are not inferred.
- [Kerala Tourism — Aranmula mirror](https://www.keralatourism.org/faq/where-can-i-buy-keralas-aranmula-kannadi): polished front-surface metal mirror context; no certificate or authorised-seller status is inferred for sample inventory.
- [Kerala Tourism — coir products](https://www.keralatourism.org/shopping-options/shop-coir-products-kerala/24/): coconut-husk fibre and Alappuzha/Kollam association. A separate FAQ incorrectly locates Chendamangalam relative to Alappuzha; that detail is not used.
- [Kerala State Planning Board — rural art hubs](https://spb.kerala.gov.in/sites/default/files/2022-03/ECNO_%20ENG_21_%20Vol_2.pdf): Thazhava/Kollam screw-pine work and Cherthala/Alappuzha coir association.
- [Kerala Tourism — screw-pine craft](https://www.keralatourism.org/campaigns/kerala365/screw-pine-handicrafts-kerala): leaf-weaving material context.
- [Kerala Tourism — Kunhimangalam](https://www.keralatourism.org/destination/kunhimangalam-village-payyanur/532/): bronze/bell-metal village context. Alloy, religious authenticity and precise item origin are not inferred.
- [Kerala Tourism — souvenirs](https://www.keralatourism.org/souvenirs): coconut-shell and wider regional craft context; husk/coir and hard shell remain separate material collections.
- Official visitor information: [Aranmula](https://www.keralatourism.org/destination/aranmula-heritage-village/48/), [Balaramapuram](https://www.keralatourism.org/responsible-tourism/life-experience-trails-keralam/trails/balaramapuram), [Fort Kochi](https://www.keralatourism.org/destination/fort-kochi/422/), [Kumarakom](https://www.keralatourism.org/kumarakom/), [Munnar](https://www.keralatourism.org/destination/munnar/202/) and [Kunhimangalam](https://www.keralatourism.org/destination/kunhimangalam-village-payyanur/532/).

## Assets and prompts

The built-in image tool generated hero, mural, kasavu, mirror, coir, screwpine, metal and shell compositions. All eight were visually inspected and resized/re-encoded to `public/images/kl-*.webp`. They are conceptual artwork rather than documentary inventory photographs; the veranda does not depict a named workshop. [Exact prompts, original PNG paths and final file metadata](KERALA_IMAGE_PROMPTS.json) record generation. Source PNGs remain outside the repository and earlier regional assets are intact.

## Verification

Strict TypeScript, zero-warning lint and the production build passed. Browser findings are recorded below.

The production build contains 271 prerendered application routes (274 static outputs including framework outputs), with 15 new Kerala child routes and the existing Chandigarh routes.

Local headless Chrome with SwiftShader checked six widths from 320 to 1440px, all 15 detail routes on mobile, all four presets in each of six viewers, section anchors, regional navigation/footer, six visitor entries, Screw-pine search, unknown-route 404s and a mixed Kerala/Bihar basket with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed. Desktop hero/footer and mobile hero/craft screenshots were visually reviewed, including Malayalam rendering.

The running development app on port 3000 was verified to serve the new chapter, hero asset and regional footer without needing a restart. Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage. Malayalam uses the existing platform Indic fallback stack; no new font download was introduced.

Additional checks passed for all four market prices and image/purchase availability with WebGL disabled. Delhi’s journey regression passed, including responsive layouts, six viewers, search and mixed-state basket totals. Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks also passed. The separate production preview and headless browser were stopped after verification.
