# Tamil Nadu regional chapter

Implemented locally on 22 November 2026. No commit, branch, push or deployment is included.

## Experience

`/state/tamil-nadu` has an original kolam-inspired surround with looping linework on woven crimson borders. Gold and green accents retain the registered palette, while the centre and local reading surfaces stay quiet. Temple typography is retained with Tamil `கலைகளின் தாயகம்` and an English gloss. The full rectangular hero composition remains visible without an arch crop.

Six collections introduce Kanchipuram weaving, Thanjavur painting, Swamimalai casting, Toda embroidery, Pattamadai mat weaving and Chettinad Kottan. Selected district associations are Kancheepuram, Thanjavur, The Nilgiris, Tirunelveli and Sivaganga. Kolam contributes to the visual direction without becoming a fabricated retail category. The old registry’s “queen of silks” description is replaced with a broader material-craft introduction; palette and motif are unchanged.

Six collection/process pages, three reading pages and six item-detail pages keep the main cards concise. No slogan ribbon or embedded map is added. Galleries open in image mode and offer an opt-in image-backed Three.js surface, four presets, rotation and zoom. These are not scans or volumetric models.

Tamil Nadu is the seventeenth sample catalogue region. Fixed INR/EUR/USD/GBP prices and dimensions remain fixtures for later API integration; the basket persists locally. No checkout, payment, stock or booking backend is introduced. No named artisan, workshop provenance, GI-authorised inventory, silk/gold purity, alloy composition, institutional endorsement or community authenticity is invented. The peacock is a decorative cast-form concept rather than a claimed sacred icon. The Ganesha painting is an original devotional concept, not an attributed historical reproduction. The embroidery collection acknowledges Toda community knowledge; its sample stole does not reproduce an attributed ceremonial garment.

Six visitor entries link Kanchipuram, Thanjavur, Mamallapuram, Madurai, Chettinad and The Nilgiris to official district information without opening hours, fees, event dates, weather, access or booking promises. Mamallapuram uses its present Chengalpattu district association rather than older Kanchipuram references.

## Implementation

Inspected `CLAUDE.md`, the current Karnataka content/component and three route templates, regional registry, shared commerce records, theme metadata, fonts, CSS and the running app.

- `lib/states/tamilNadu.ts`: typed regional content, six collections/items, three articles and six visitor links.
- `components/state/TamilNaduJournal.tsx`: server-rendered landing and section links.
- `app/state/tamil-nadu/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/tamil-nadu/journal/[article]/page.tsx`: three reading routes.
- `app/state/tamil-nadu/products/[product]/page.tsx`: six shared item-detail routes.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: register and select the detailed chapter.
- `lib/states/journalTheme.ts`: regional navbar/footer/cart metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: seventeenth catalogue region, explicit URLs and fixed market values.
- `lib/stateThemes.ts`: expanded craft labels and broader introduction, with palette and motif retained.
- `app/globals.css`: shared selectors include `.kk-tn-journal`/`.kk-footer-tn`; background, hero and native/location-text treatments are Tamil Nadu scoped.
- `public/images/tn-*.webp`: eight new local assets.

README and architecture/asset notes record the milestone. Framework versions, dependencies, CSP, external asset origins, atlas/D3 and viewer lifecycle remain unchanged. No dependencies were added or removed.

## Source review

Primary sources checked on 22 November 2026 support cultural context rather than provenance or certification of sample products.

- [Kancheepuram district — weaving](https://kancheepuram.nic.in/about-district/gi-tag-product-kancheevaram-silks-and-sarees/): regional textile association; no individual-item purity or authorised-user badge is inferred.
- [National Museum — Thanjavur paintings](https://nationalmuseumindia.gov.in/en/thanjavur-paintings): composition, colour and gold foil over relief preparation. The concept artwork does not assert genuine gold content.
- [Chennai Government Museum — Tamil Nadu crafts](https://govtmuseumchennai.org/uploads/topics/16529639344810.pdf): Swamimalai casting and the lost-wax context. The decorative peacock does not imply ritual or workshop provenance.
- [Poompuhar — state handicraft map](https://tnhdc.poompuhar.com/welcome/handicraftmap): state craft landscape and regional centres; no official-stock relationship is implied.
- [Chennai Government Museum — Toda textiles](https://govtmuseumchennai.org/uploads/topics/16527875085346.pdf): Nilgiris community and embroidery context.
- [Development Commissioner Handicrafts — craft reference](https://www.handicrafts.nic.in/CmsUpload/12222017102212GI%20BOOK%20FINAL%202-5-17_resized.pdf): Toda counted-thread work, Pattamadai grass weaving and Chettinad Kottan context. Community generalisations and GI dates are not copied into sample product specifications.
- [IP India — Toda embroidery](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/135): regional naming/context; no authorised-user relationship is inferred.
- [IP India — Chettinad Kottan](https://search.ipindia.gov.in/GIRPublicSearch/Application/Details/200): Chettinad/Sivagangai association and registered craft name. The sample basket has no GI badge.
- Official visitor information: [Kanchipuram](https://kancheepuram.nic.in/tourism/), [Thanjavur](https://thanjavur.nic.in/tourism/), [Mamallapuram/Chengalpattu](https://chengalpattu.nic.in/tourism/), [Madurai](https://madurai.nic.in/tourism/), [Chettinad/Sivaganga](https://sivaganga.nic.in/tourism/) and [The Nilgiris](https://nilgiris.nic.in/tourism/).

## Assets and prompts

The built-in image tool generated hero, mural, kanchi, painting, bronze, toda, mat and kottan compositions. All eight were visually inspected and resized/re-encoded to `public/images/tn-*.webp`. They are conceptual artwork rather than documentary inventory photography; the veranda is not a named workshop. [Exact prompts, original PNG paths and final file metadata](TAMIL_NADU_IMAGE_PROMPTS.json) record generation. Source PNGs remain outside the repository and previous regional assets remain intact.

## Verification

Strict TypeScript, zero-warning lint and the production build passed. Browser findings are recorded below.

The production build contains 301 prerendered application routes (304 static outputs including framework outputs), with 15 new Tamil Nadu child routes.

Local headless Chrome with SwiftShader checked six widths from 320 to 1440px, all 15 detail routes on mobile, all four presets in each of six viewers, section anchors, regional navigation/footer, six visitor entries, Pattamadai search, unknown-route 404s and a mixed Tamil Nadu/Bihar basket with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed. Desktop hero/footer and mobile hero/craft screenshots were visually reviewed, including Tamil rendering.

Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage. Tamil uses the existing platform Indic fallback stack; no new font download was introduced.

Additional checks passed for all four market prices and image/purchase availability with WebGL disabled. Karnataka’s journey regression passed, including responsive layouts, six viewers, search and mixed-state basket totals. Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks also passed.

The port 3000 development server initially retained the old Tamil Nadu overview. It was restarted, and `/state/tamil-nadu` was confirmed to serve the new chapter, hero and regional footer. The development app remains running; the separate production preview and headless browser were stopped after verification.
