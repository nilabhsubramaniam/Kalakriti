# West Bengal regional chapter

Implemented locally on 21 November 2026, following the Bihar and Jammu & Kashmir chapters. No deployment or new branch is part of this milestone.

## Experience

`/state/west-bengal` inherits the regional registry’s terracotta, indigo, brass and warm-ivory palette, classic typography, horse motif and Bengali native line. It has a full-page decorative surround from the outset: Alpana-inspired linework, Kantha-like stitch borders, birds, vines and Bankura horse forms. Local paper washes protect text, particularly across the full width on mobile. Cards remain tinted and the journal section allows the artwork to continue behind it.

The page introduces six traditions: Kantha embroidery, Baluchari silk, Bankura terracotta, Bengal Dokra, Bengal Patachitra and Jamdani weaving. Six collection/making pages and three separate reading pages keep the main page concise. Six item detail pages reuse the existing opt-in image-backed Three.js viewer, four view presets, zoom, keyboard controls, regional pricing and cart. These are not new volumetric product models.

Tourism entries cover Bishnupur, Santiniketan, Kolkata, Darjeeling, the Indian Sundarbans and Murshidabad. They link to government or UNESCO information without asserting current access, fees, schedules or bookings.

## Implementation

- `lib/states/westBengal.ts`: typed regional content, craft associations, articles, tourism sources and sample product data.
- `components/state/WestBengalJournal.tsx`: the regional server-rendered landing page.
- `app/state/west-bengal/crafts/[craft]/page.tsx`: six static collection pages.
- `app/state/west-bengal/journal/[article]/page.tsx`: three static articles.
- `app/state/west-bengal/products/[product]/page.tsx`: six static product pages.
- `lib/states/journalTheme.ts`: lightweight route/theme metadata used by the navbar, footer, cart and shared detail layout; it does not import catalogue content.
- `lib/commerce/regions.ts`: the three current sample catalogue regions used by the cart and detail lookup.
- `lib/commerce/productDetails.ts`: stable region-aware links; prior Bihar and Kashmir URLs are retained.
- `lib/commerce/catalog.ts`: fixed INR/EUR/USD/GBP fixtures and product origins. Prices, dimensions and catalogue names are local sample data awaiting authoritative API/product integration; no item receives an invented GI badge or maker profile.
- `app/globals.css`: previously verified regional surface and readability rules apply through `:is(.kk-jk-journal, .kk-wb-journal)`; West Bengal overrides its own mural and typography details. Kashmir keeps its original mural and blue palette. Bihar’s mural is untouched.

The shared viewer lifecycle, D3/Three.js atlas, dependencies, framework version, CSP and deployment configuration are unchanged. The production build has 98 static outputs, including 15 new child routes.

## Cultural source review

Sources checked on 21 November 2026. Copy is paraphrased; cultural introductions do not establish provenance or certification for individual sample items.

- [West Bengal government — arts and crafts](https://wb.gov.in/our-culture-arts-and-crafts.aspx): Kantha, narrative scroll painting, Dokra and terracotta traditions.
- [West Bengal MSME — handicrafts](https://msme.wb.gov.in/handicrafts): district associations across Birbhum, Bankura and Paschim Medinipur. The page does not imply that each tradition belongs exclusively to one district.
- [Bankura district — handicrafts](https://bankura.gov.in/handicrafts/): Bishnupur, Panchmura and terracotta craft.
- [Development Commissioner Handlooms — Sustainability in the Handloom Traditions of India](https://www.handlooms.gov.in/assets/img/EBOOK/Sustainability%20in%20the%20Handloom%20Traditions%20of%20India.pdf): Jamdani practice in West Bengal as well as Bangladesh.
- [NIFT — Jamdani practitioner background](https://nift.ac.in/chhaap2026/ShubhankarBiswas.html): Nadia’s weaving context. No individual artisan profile or identity is copied into the marketplace.
- [Bishnupur district visitor information](https://bankura.gov.in/tourist-place/bishnupur/).
- [UNESCO — Santiniketan](https://whc.unesco.org/en/list/1375/).
- [Incredible India — Kolkata](https://www.incredibleindia.gov.in/en/west-bengal/kolkata).
- [Darjeeling district — tourism](https://darjeeling.gov.in/tourism/).
- [UNESCO — Sundarbans National Park, India](https://whc.unesco.org/en/list/452/).
- [Murshidabad district — visitor information](https://murshidabad.gov.in/tourist-places/).

The earlier registry description implied a general UNESCO attribution for Jamdani under West Bengal. It is replaced by a regional craft summary; the new copy identifies the broader Bengal weaving context without transferring a heritage designation or certification onto this region’s sample products.

## Visual asset provenance

Seven illustrations were generated with the built-in image tool, inspected, resized/re-encoded to same-origin WebP delivery assets and stored under `public/images/wb-*.webp`. These are a hero, a decorative mural and five craft studies (Baluchari, terracotta, Dokra, Patachitra and Jamdani). The existing Kantha study is reused. No prior asset was overwritten, and no generated scene is presented as a named workshop or tourist-site photograph.

[Exact generation prompts and file metadata](WEST_BENGAL_IMAGE_PROMPTS.json) record each asset. No new image host, font origin, dependency or CSP exception was introduced.

## Verification

TypeScript, zero-warning lint and the 98-output static production build passed. Local Chrome/SwiftShader exercised the landing at 320, 390, 768, 1024, 1281 and 1440px; all six collection pages, six product viewers and three article routes on mobile; four viewing presets per product; section-anchor clearance; regional navbar/footer; six tourism entries; Patachitra search; and unknown-route 404s. A mixed West Bengal/Bihar cart produced the expected INR and EUR totals. Screenshots of the hero, cards and footer were visually reviewed. No runtime exceptions or horizontal overflow were observed.

The prior Jammu & Kashmir journey checks and Bihar’s 12-product regression checks also passed after the shared helper changes.

These checks are local browser checks, not physical-device performance, screen-reader certification or verification of sellable inventory.

**21 November 2026 — content refinement:** Removed the decorative slogan ribbon between the hero and craft collections at the user’s request. The sections now flow directly with compact spacing; no replacement slogan was added.
