# Karnataka regional chapter

Implemented locally on 22 November 2026. No commit, branch, push or deployment is included.

## Experience

`/state/karnataka` has an original Bidri-inspired surround with pale floral inlay patterns on narrow deep-teal edges. The centre stays quiet behind local reading surfaces. The registered plum, teal and aged-gold palette remains unchanged. Temple typography and Kannada `ಕಲೆಗಳ ನಾಡು` carry the regional identity, with an English gloss. The complete rectangular hero image remains visible without an arch crop.

Six collections introduce Bidriware, Channapatna lacquerware, Mysuru silk weaving, Ilkal weaving, Kasuti and Sandur Lambani embroidery. Local associations are Bidar, Bengaluru South, Mysuru, Bagalkote, Dharwad and Ballari. Channapatna uses the current Bengaluru South name rather than older Ramanagara references. Kasuti counted stitchwork and Lambani patchwork/embellishment have separate explanations and images. The latter uses an original contemporary pouch design, not an attributed community garment.

Six collection/process routes, three reading pages and six item-detail routes keep the main cards concise. No slogan ribbon or embedded map is added. Shared galleries open in image mode with opt-in image-backed Three.js presentation, four presets, rotation and zoom. These are not scans or volumetric models.

Karnataka is the sixteenth sample catalogue region. Dimensions and fixed INR/EUR/USD/GBP prices remain fixtures for future API integration; cart persistence is local. No checkout, payment, stock or booking backend is introduced. No named artisan, workshop, GI-authorised inventory, KSIC branding, silk/gold/silver purity, wood species, dye composition, child-safety certification or environmental certification is invented. The turned birds are decorative objects. No sandalwood item or species claim is introduced.

The regional registry’s narrow Channapatna description is broadened to the six selected craft traditions. GI date and material claims are not applied to sample inventory. Visitor links cover Mysuru, Hampi, Bidar, Channapatna, Badami and Belur, without opening times, fees, access, weather or booking promises.

## Implementation

Inspected `CLAUDE.md`, the current Kerala chapter/component and three route templates, regional registry, commerce records, theme metadata, layout fonts, CSS and the running local app.

- `lib/states/karnataka.ts`: typed regional content, district associations, six collections/items, three articles and six visitor links.
- `components/state/KarnatakaJournal.tsx`: server-rendered landing and section links.
- `app/state/karnataka/crafts/[craft]/page.tsx`: six collection/process routes.
- `app/state/karnataka/journal/[article]/page.tsx`: three reading routes.
- `app/state/karnataka/products/[product]/page.tsx`: six shared item-detail routes.
- `app/state/[slug]/page.tsx`, `lib/states/index.ts`: register and select the detailed chapter.
- `lib/states/journalTheme.ts`: regional navbar/footer/cart metadata.
- `lib/commerce/regions.ts`, `catalog.ts`, `productDetails.ts`: sixteenth catalogue region, explicit URLs and market values.
- `lib/stateThemes.ts`: expanded craft labels and broader introduction; palette and motif remain intact.
- `app/globals.css`: shared selectors include `.kk-ka-journal`/`.kk-footer-ka`; surround, hero and native/location-text treatment is Karnataka scoped.
- `public/images/ka-*.webp`: eight new local assets.

README and architecture/asset notes record the milestone. Framework versions, dependencies, CSP, external asset origins, atlas/D3 and viewer lifecycle remain unchanged. No dependencies were added or removed.

## Source review

Primary sources checked on 22 November 2026 support cultural context, not provenance or certification of individual sample products.

- [Ministry of Tourism — Bidriware](https://www.incredibleindia.gov.in/en/karnataka/bidriware): dark metal and pale inlay context. Conflicting historical/GI-date assertions are not repeated.
- [Karnataka Tourism — Bidar](https://old.karnatakatourism.org/tour-item/bidar/): regional craft and visitor context.
- [Karnataka Tourism — Channapatna](https://karnatakatourism.org/en/experiences/channapatna-toys/): turning and lacquerware context. Generic toy-safety, natural-dye and environmental claims are not transferred to sample products.
- [Bengaluru South district — taluk administration](https://bengalurusouth.nic.in/en/divisions/tahsildar/): current Channapatna district association.
- [Karnataka State Council for Science and Technology — Bengaluru South report](https://www.kscst.org.in/nrdms_files/dnrdms_files/NRDMS_Annual_Report_2025_26/29_NRDMS_Bengaluru_South_Annual_Report_2025-2026.pdf): district/taluk naming cross-check.
- [KSIC — silk manufacturing history](https://www.ksicsilk.com/Home/About): Mysore Silk context; no official-stock or producer relationship is inferred.
- [Mysuru district — specialities](https://mysore.nic.in/en/mysuru-specialities/): regional textile context.
- [Bagalkote district — handloom](https://bagalkot.nic.in/en/handloom/): Ilkal weaving association.
- [Development Commissioner Handicrafts — district craft list](https://handicrafts.gov.in/CmsUpload/02432026104315New_Annexure-1%28ITDP%29.pdf): Dharwad/Kasuti and Bidar/Bidriware associations.
- [Ministry of Tourism — Kasuti](https://www.incredibleindia.gov.in/en/karnataka/kasuti-embroidery): counted needlework context; origin legends are not repeated.
- [Sandur Kushala Kala Kendra — Lambani embroidery](https://sandurkendra.org/pages/geographical-indication): patchwork, stitching and embellishment context. Community authenticity is not asserted for sample inventory.
- [NABARD Ballari 2026–27 plan](https://www.nabard.org/auth/writereaddata/tender/pub_0601260524452019.pdf): current Sandur/Ballari association; no artisan counts or export claims are used in the page.
- Official visitor information: [Mysuru Palace](https://mysore.nic.in/en/tourist-place/mysuru-palace/), [Hampi/Vijayanagara](https://vijayanagara.nic.in/en/tourism/), [Bidar](https://old.karnatakatourism.org/tour-item/bidar/), [Channapatna](https://karnatakatourism.org/en/experiences/channapatna-toys/), [Badami caves](https://bagalkot.nic.in/en/tourist-place/badami-caves/) and [Belur/Hassan](https://hassan.nic.in/en/tourist-places/).

## Assets and prompts

The built-in image tool generated hero, mural, bidri, lacquer, silk, ilkal, kasuti and lambani compositions. All eight were visually inspected and resized/re-encoded to `public/images/ka-*.webp`. They are conceptual artwork rather than documentary inventory photographs; the courtyard is not a named workshop. [Exact prompts, original PNG paths and final file metadata](KARNATAKA_IMAGE_PROMPTS.json) record generation. Source PNGs remain outside the repository and previous regional assets remain intact.

## Verification

Strict TypeScript, zero-warning lint and the production build passed. Browser findings are recorded below.

The production build contains 286 prerendered application routes (289 static outputs including framework outputs), with 15 new Karnataka child routes.

Local headless Chrome with SwiftShader checked six widths from 320 to 1440px, all 15 detail routes on mobile, all four presets in each of six viewers, section anchors, regional navigation/footer, six visitor entries, Kasuti search, unknown-route 404s and a mixed Karnataka/Bihar basket with expected INR/EUR totals. No runtime exceptions or horizontal overflow were observed. Desktop hero/footer and mobile hero/craft screenshots were visually reviewed, including Kannada rendering.

Local software rendering does not establish physical-device performance or comprehensive screen-reader coverage. Kannada uses the existing platform Indic fallback stack, with no new font download.

Additional checks passed for all four market prices and image/purchase availability with WebGL disabled. Kerala’s journey regression passed, including responsive layouts, six viewers, search and mixed-state basket totals. Bihar, Jammu & Kashmir, Rajasthan and homepage theme checks also passed.

The port 3000 development server initially retained the old Karnataka overview. Its project path and development command were verified, then it was restarted. `/state/karnataka` was confirmed to serve the new chapter, hero and footer. The development app remains running; the separate production preview and headless browser were stopped after verification.
