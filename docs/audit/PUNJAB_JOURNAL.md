# Punjab regional chapter

Implemented locally on 21 November 2026. No commit, branch, push or deployment is included.

## Experience

`/state/punjab` uses an original Phulkari-inspired stitched surround, with madder, mustard and pink geometric flowers at the edges and a quiet ivory cloth centre. Local reading surfaces keep text clear. The registered royal display typography is retained, with Gurmukhi native text `ਕਲਾ ਦੀ ਧਰਤੀ` and an English gloss. The complete hero image is shown without an arch crop.

The accent changes from orange `#D4441F` to madder `#9B2C3B`, retaining the mustard and deep-green supporting tokens. This supports the embroidery direction and improves small-text/button contrast. Hoshiarpur wood inlay replaces the incorrect generic wire-inlay label in the regional registry; an overgeneralised claim about every stitch narrating a woman’s life is replaced by a broader craft introduction.

Six selected collections introduce Phulkari, Punjabi jutti, Hoshiarpur wood inlay, Jandiala Guru metalwork, durrie weaving and paranda work. Patiala, Hoshiarpur, Amritsar and Barnala are entry points, not claims of exclusive origin. Phulkari is described in its wider regional context, and Bagh as a denser embroidery treatment rather than an unrelated tradition.

Six collection/process routes, three separate reading pages and six product-detail routes keep the main cards concise. No decorative slogan ribbon or embedded map is added. The shared gallery opens in image mode and offers an opt-in image-backed Three.js presentation with four view presets, rotation and zoom. These are not scans or volumetric models.

The eleventh regional catalogue uses fixed local INR/EUR/USD/GBP fixtures and the existing locally persisted basket. Product dimensions, the footwear size and prices are sample data for later API integration. No checkout, payment, inventory, booking or account backend is added. No named makers, workshop provenance, GI-authorised inventory, metal purity, food-contact suitability, fibre purity, precious-metal thread or ivory content is asserted for sample products. The inlay concept explicitly uses a non-ivory material; inventory composition requires future verification.

Six visitor entries link Amritsar, Patiala, Anandpur Sahib, Kapurthala, Bathinda and Hoshiarpur to official information without hours, fees, access or booking promises.

## Implementation

Files inspected include `CLAUDE.md`, the Chhattisgarh content/component and three route templates, shared theme metadata, catalogue, product-detail mapping, regional registry, global CSS, layout fonts and existing browser harnesses.

- `lib/states/punjab.ts`: typed regional content, six collections/items, three articles and six visitor entries.
- `components/state/PunjabJournal.tsx`: server-rendered landing and section navigation.
- `app/state/punjab/crafts/[craft]/page.tsx`: six collection/process pages.
- `app/state/punjab/journal/[article]/page.tsx`: three reading pages.
- `app/state/punjab/products/[product]/page.tsx`: six shared detail pages.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: register and select the detailed landing.
- `lib/states/journalTheme.ts`: regional navbar/footer/cart metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: eleventh catalogue region, explicit URLs, market prices and detail presets.
- `lib/stateThemes.ts`: researched craft labels, broader introduction and madder accent.
- `app/globals.css`: shared selectors include `.kk-pb-journal`/`.kk-footer-pb`; embroidered background, hero, Gurmukhi and location-text treatment are region scoped.
- `public/images/pb-*.webp`: eight new local assets; previous regional files are intact.

Framework versions, dependencies, CSP, external asset origins, atlas/D3 and viewer rendering lifecycle remain unchanged. README and architecture/asset notes record this frontend milestone. No dependencies were added or removed.

## Source review

Primary sources checked on 21 November 2026 support regional context, not provenance or certification of sample inventory.

- [National Portal of India — Phulkari ODOP](https://www.india.gov.in/explore-india/odop/details/phulkari): Patiala association.
- [Development Commissioner Handicrafts — Phulkari reference](https://handicrafts.nic.in/CmsUpload/12222017102212GI%20BOOK%20FINAL%202-5-17_resized.pdf): counted embroidery, regional context and Phulkari/Bagh distinction. No GI badge is attached to sample products.
- [PIB — Punjab craft overview](https://www.pib.gov.in/FactsheetDetails.aspx?Id=150343&lang=2&reg=48): jutti centres including Patiala, Amritsar and Fazilka. Economic statistics and certification claims are not copied into the page.
- [Hoshiarpur district — handicrafts](https://hoshiarpur.nic.in/handicraft/): wood-inlay context. The page’s conflicting historical chronology is not repeated; historical ivory use is not treated as a material recommendation.
- [UNESCO — Thathera craft description](https://ich.unesco.org/en/decisions/6.COM/13.21): heating, hammering, joining and finishing context. This is a 2011 nomination decision, not evidence of inscription at that date; no UNESCO product badge is used. The later representative-list page was inaccessible to automated reading.
- [Development Commissioner Handicrafts — Northern Region plan](https://handicrafts.nic.in/pdf/Northern_REgion.pdf): Barnala/Panja dari association in indexed official source text; full retrieval timed out. No historical artisan counts are presented as current.
- [Development Commissioner Handlooms — Panja durries](https://handlooms.nic.in/assets/img/EBOOK/Sustainability%20in%20the%20Handloom%20Traditions%20of%20India.pdf): Punjab and flatwoven rug context; sample fibre composition is not inferred.
- [Incredible India — Patiala](https://www.incredibleindia.gov.in/en/punjab/patiala): paranda and local cultural context.
- Official visitor information: [Amritsar](https://amritsar.nic.in/places-of-interest/), [Patiala](https://patiala.nic.in/architecture/), [Anandpur Sahib/Rupnagar](https://rupnagar.nic.in/tourism/tourist-places/), [Kapurthala](https://kapurthala.gov.in/tourism/), [Bathinda](https://bathinda.nic.in/tourism/) and [Hoshiarpur](https://hoshiarpur.nic.in/tourism/).

## Assets and prompts

The built-in image tool generated eight original concepts: hero, mural, phulkari, jutti, inlay, metal, durrie and paranda. Each was visually inspected, resized/re-encoded to WebP and saved in `public/images/pb-*.webp`. The veranda does not depict a named workshop. Imagery is conceptual artwork rather than documentary stock photography. [Exact prompts, original PNG paths and final file metadata](PUNJAB_IMAGE_PROMPTS.json) record generation. Source PNGs remain outside the repository.

## Verification

Strict TypeScript, zero-warning lint and the production build passed. There are 215 prerendered application routes (218 static outputs including framework outputs), with 15 new child routes.

Local headless Chrome with SwiftShader checked six widths from 320 to 1440px, all 15 detail routes on mobile, all four presets in each of six viewers, section anchors, six visitor entries, regional navigation/footer, Paranda search, unknown-route 404s and a mixed Punjab/Bihar cart with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed. Desktop hero/footer and mobile hero/craft screenshots were visually reviewed.

Local software-rendered checks do not establish physical-device performance or comprehensive screen-reader coverage. Gurmukhi uses the existing platform Indic fallback stack; no new font download was introduced.

Additional checks passed for expected prices in all four currencies and image/purchase availability with WebGL disabled. The existing Chhattisgarh journey regression passed after the shared catalogue expansion, including responsive layouts, six viewers, search and mixed-region basket totals. Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks also passed.
