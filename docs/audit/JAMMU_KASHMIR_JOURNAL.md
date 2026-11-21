# Jammu & Kashmir regional chapter

Implemented locally on 21 November 2026. This is the first regional expansion after Bihar; no other state page has been redesigned in this milestone.

## Experience and visual identity

`/state/jammu-and-kashmir` now uses the existing regional registry’s lake-blue, rose and sage colours, royal font register, paisley motif and Urdu handwork line. The page contains a complete craft-table hero, six craft introductions, three concise reading links, six catalogue items and six visitor-information entries. The regional navbar and footer follow the same theme and point into this chapter. A blue textile pattern replaces the Mithila footer mural only on these regional routes.

The crafts are Pashmina weaving, Kani shawls, Kashmiri embroidery, papier-mâché, walnut carving and Basohli painting. Basohli is identified with Kathua and the Jammu region rather than folded into a generic Kashmir description. Embroidery explains that Sozni and Aari are distinct; the existing Kashida image is a general embroidered-textile study, not proof of a particular technique or fibre.

The main page keeps introductions concise. Full craft information and making live on six collection pages; three articles have their own reading pages. All six product detail pages reuse the shared image-first gallery, optional image-backed Three.js views, market selector and cart. The source imagery is not a scan or authored volumetric model.

## Files and routes

- `lib/states/jammuKashmir.ts`: typed regional content, illustrative assets, catalogue fixtures, articles and official tourism links.
- `components/state/JammuKashmirJournal.tsx`: server-rendered regional landing page.
- `app/state/jammu-and-kashmir/crafts/[craft]/page.tsx`: six static collection/making pages.
- `app/state/jammu-and-kashmir/journal/[article]/page.tsx`: three static reading pages.
- `app/state/jammu-and-kashmir/products/[product]/page.tsx`: six static item detail pages.
- `components/product/ProductDetail.tsx`: now resolves product, craft and theme from either Bihar or Jammu & Kashmir.
- `lib/commerce/productDetails.ts`: stable region-aware URLs; the original Kohbar URL stays intact. Bihar’s static product parameter list remains scoped to Bihar.
- `lib/commerce/catalog.ts`: product origins and fixed INR/EUR/USD/GBP sample prices for both regions. A mixed-region basket uses the same price functions and retains region labels.
- `components/layout/TopNav.tsx` and `SiteFooter.tsx`: regional navigation/links/theme; other routes retain the previous branding. Footer is now a client boundary so it can follow client-side route changes.
- `app/globals.css`: styles scoped to `.kk-jk-journal`, `.kk-rj-*` and `.kk-footer-jk`; no Bihar mural replacement.

The build now generates 83 static outputs, including 15 new child pages. No package, framework, CSP, external-media origin, backend, payment or deployment change was introduced. D3 and the separate India atlas remain untouched.

## Content and source boundaries

Cultural descriptions are paraphrased introductions. There are no invented artisan identities, workshop appointments, travel bookings, stock claims or item-level GI certificates. Product names, dimensions and prices are local sample catalogue data; they need authoritative product media/specifications and server-side price/inventory checks before commerce integration.

Sources checked on 21 November 2026:

- [Indian Institute of Carpet Technology — regional craft specifications](https://iictsrinagarcarpet-gi.org/gi-crafts): Kani bobbins/talim, Pashmina, Sozni, painted forms and wood carving. Registration of a tradition is not applied as certification to these sample items.
- [CBSE textile design curriculum](https://www.cbseacademic.nic.in/web_material/Curriculum21/publication/srsec/Textile_Design_XII.pdf): embroidery vocabulary and Aari/chain stitch.
- [Kathua district — Basohli painting](https://kathua.nic.in/basholi-paintings/), [Kathua ODOP](https://kathua.nic.in/odopbasohli-paintings-pashmina/): Jammu location and painting characteristics.
- [Srinagar district — Dal Lake](https://srinagar.nic.in/tourist-place/dal-lake/).
- [Jammu district — Bahu Fort](https://jammu.nic.in/tourist-place/bahu-fort-jammu/).
- [Baramulla district — Gulmarg](https://baramulla.nic.in/tourist-place/gulmarg/).
- [Anantnag district — Pahalgam](https://anantnag.nic.in/tourist-place/pahalgam/).
- [Ramban district — Patnitop](https://ramban.gov.in/tourist-place/patnitop/).

Visitor links lead to maintained official information; no current opening, access, road, fee or availability claim is made. No actual tourist-site photograph was invented or downloaded.

## Asset provenance

Six new regional illustrations were generated with the built-in image tool and saved as same-origin WebP files. The original generated PNGs remain outside the repository; delivery copies were only resized/re-encoded with Pillow. No existing image was overwritten. See [generation manifest](JAMMU_KASHMIR_IMAGE_PROMPTS.json) for prompts, dimensions, byte sizes and usage. Existing `kashida-stitch-study.webp` is reused for the embroidery section. The hero depicts regional atmosphere, not a named workshop or verified lakefront location.

## Verification

TypeScript, zero-warning lint and an 83-output production build passed. Local Chrome/SwiftShader checks exercised the regional landing at 320, 390, 768, 1024, 1281 and 1440px; six collections, six product viewers and three reading routes; all four view presets; all six tourism entries; section-anchor clearance; regional footer/nav; Basohli search; and unknown-route 404s. No runtime exceptions or horizontal overflow were observed. A mixed Bihar/Jammu & Kashmir basket produced the expected INR and EUR subtotal. All 15 child routes were also exercised at 390px. Screenshots of the hero, craft cards and footer were visually inspected. The existing Bihar regression checks passed for all 12 products across nine collections, including viewing presets, pricing, cart links and WebGL fallback.

These checks do not establish physical-device frame rates, screen-reader coverage, textile authenticity, item provenance or production inventory availability.

## Full-page textile background — 21 November 2026

Following the Bihar page-surround pattern, every `.kk-jk-journal` now uses `jk-paisley-mural.webp` as a full-width repeating vertical ground. This applies to the landing, craft collections, articles, product detail pages and a Jammu & Kashmir-only basket. Paisley, floral stitchwork and chinar leaves keep the artwork regional; Bihar’s Mithila mural is unchanged. The journal band is transparent so it does not interrupt the artwork. Soft local paper washes protect headings, the hero copy and reading links, while cards retain tinted surfaces. The page background is decorative CSS, with no new script, animation or interaction dependency. The generation prompt and dimensions are recorded in the existing manifest.

The mural refinement passed the existing regional journey checks and a focused 20-layout check covering landing, collection, article and product pages at 320/390/768/1024/1440px. Mobile text washes were strengthened after visual review of the floral border. The Bihar mural URL remains unchanged. Strict lint and the 83-output production build passed; no runtime exceptions or horizontal overflow were observed.

**21 November 2026 — content refinement:** Removed the decorative slogan ribbon between the hero and craft collections at the user’s request. The sections now flow directly with compact spacing; no replacement slogan was added.
