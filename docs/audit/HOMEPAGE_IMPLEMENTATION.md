# Heritage discovery homepage — 2026-11-17

> **Homepage composition refinement — 2026-11-17:** The user clarified that the illustrated craft-and-culture homepage was preferred. That server-rendered image-led hero is restored. The existing 3D/D3 map and cultural showcase now form a compact regional-discovery section immediately below it, with a single shared frame, a top control bar and a smaller regional preview. No dependencies, scene/geometry logic, configuration or routes changed. Current visual/regression evidence: [HOMEPAGE_BALANCE](HOMEPAGE_BALANCE.md).

> **Superseded hero — 2026-11-17:** The user subsequently approved a state-first 3D relief map and cultural showcase. The large illustrated hero described here has been replaced in the page composition; its asset is retained. Current implementation and validation: [THREE_MAP_IMPLEMENTATION](THREE_MAP_IMPLEMENTATION.md). The lower collection/community sections remain.

Status: implemented locally following the user’s implementation approval and visual reference. No commit, push or deployment.

## Scope

- Server-rendered homepage: editorial hero, regional discovery, illustrated Mithila collection previews, six craft categories, process/community stories, values and an updates teaser.
- Shared branded navigation with registry search, standard disclosure navigation and Escape focus return; mobile search remains available. Shared footer and skip link.
- Existing D3 retained and loaded only on request or recognized region hash. State selection still uses useRegionStore. Embedded themes stay local. Keyboard state paths, accessible region select, load failure/retry, request cancellation and transition cleanup added. Embedded background canvas and autoplay are disabled; the showcase remains opt-in.
- Existing state routes preserved. Navbar region derives from the state pathname. Prices are explicitly previews and all 17 shopping/booking controls are disabled with coming-soon labels. Affected CTAs no longer promise working commerce or named household attribution.
- Homepage title/description reflect discovery rather than unverified sourcing claims.
- Existing framework, dependencies, CSP, geometry, environment and deployment settings unchanged.

## Source map

| Responsibility | Files |
| --- | --- |
| Homepage / shared shell | app/page.tsx, app/layout.tsx, app/globals.css |
| Homepage sections | components/landing/RegionalDiscovery.tsx, FeaturedProductsRow.tsx, CategoryTileGrid.tsx, TrustSignalsBar.tsx, NewsletterStrip.tsx |
| Existing map enhancement | components/landing/IndiaMap.tsx |
| Shared navigation, search, footer | components/layout/TopNav.tsx, CraftSearch.tsx, SiteFooter.tsx |
| Honest preview flows | app/state/[slug]/page.tsx, components/state/ProductRail.tsx, StateAside.tsx, StateHero.tsx, ClosingCTA.tsx |

## Assets

Generated with the built-in imagegen tool; inspected and converted to WebP with Pillow. These are illustrative studies, not documentary photos, verified product imagery or representations of named sellers. The original generated PNGs remain outside the repository. Project-consumed assets are all under public/images.

| File | Role | Size |
| --- | --- | --- |
| mithila-courtyard.webp | Hero editorial illustration, 1536 × 1024 | 645,760 bytes |
| painting-study.webp | Madhubani-inspired craft study, 800 × 800 | 201,400 bytes |
| basket-study.webp | Sikki-inspired craft study, 800 × 800 | 187,938 bytes |
| textile-study.webp | Tussar-inspired craft study, 800 × 800 | 160,908 bytes |

### Generation prompts

Hero: “Use case: illustration-story. Asset type: premium Indian heritage marketplace homepage hero editorial illustration, wide landscape 3:2. Create a refined, richly detailed hand-painted gouache and watercolor editorial scene inspired by Mithila in Bihar: an adult Indian woman in a deep madder red and ivory sari working on a colorful Madhubani-inspired fish and lotus painting in her sunlit open courtyard. A woven basket, clay vessels, natural materials, and an understated limewashed village house behind her, flowering tree and distant green fields. Elegant authentic craft atmosphere, warm late afternoon light, handmade paper texture, realistic human proportions, sophisticated muted cream, maroon, ochre, and leaf green, beautiful fine brushwork. Main artisan and craftwork in right two thirds, background softly detailed on left. No text, no letters, no logos, no watermarks, no UI, no named real person. This is an explicitly illustrative brand artwork, not a documentary photograph. Save the generated output as a local image artifact.”

Craft studies share this prompt, with the subject inserted below: “Use case: illustration-story. Asset type: square editorial craft study illustration for a premium Indian heritage marketplace. [Subject] Refined realistic gouache and watercolor, beautiful tactile material detail and paper grain, restrained warm afternoon light, clean cream background, centered single subject, maroon and ochre heritage palette, matching an elegant illustrated Mithila courtyard. No people, text, lettering, logos, watermark, UI, rating or certification. This is an illustrative craft study, not a photograph or an exact item for sale. Save output as local artifact.”

- Painting subject: “A framed Madhubani-inspired painting of paired fish, lotus flowers, fine black double outlines and madder red, ochre and green pigments on handmade cream paper, standing on a pale limewashed ledge.”
- Basket subject: “An elegant golden Sikki-inspired coiled grass basket with lid, fine woven spiral details, a loose grass strand and a tiny sprig beside it, on a warm cream plaster ledge.”
- Textile subject: “A folded natural golden beige tussar silk stole with a deep madder red border, subtle fine weave and loose tassels draped beautifully across a warm cream plaster ledge.”

## Validation

- `pnpm validate`: passed type checking, strict lint (zero warnings), and production build. 41 pages generated; homepage remains static and all 36 state paths remain generated. Build reports homepage first-load JS of 117 kB; this is build output, not a measured network or Core Web Vitals result.
- Headless Chrome 156 on macOS using the local production server: 320, 390, 768, 1024 and 1440px widths all had document scrollWidth equal to viewport width. All four illustrations loaded successfully at every width. D3 map was absent until requested.
- Verified registry search (Madhubani → Bihar), menu Escape/focus return, 36 keyboard-focusable map states, Enter selection and pressed state, hash synchronization, resize, direct Kerala deep link, malformed hash tolerance, reduced-motion mode, simulated GeoJSON HTTP 503 and successful retry, and state-page navbar identity.
- All 17 Bihar commerce controls are disabled, with all 17 prices visibly marked preview values.
- With JavaScript disabled: homepage heading, five regional links and six category links remain in the rendered document.
- No uncaught browser exceptions recorded. Full-page desktop/mobile screenshots inspected, along with the Bihar mobile page after its entrance animation settled.
- `git diff --check`: passed.
- Screenshots: `/tmp/kalakriti-home-1440.png`, `/tmp/kalakriti-home-390.png`, `/tmp/kalakriti-bihar-390.png`. Detailed report: `/tmp/kalakriti-browser-report.json`. The temporary browser harness is outside the repository.
- Existing pnpm compatibility warning remains; workspace overrides are unchanged. Next.js recommends the optional `sharp` package for production image optimization; its existing fallback rendered every image successfully. No dependency was installed.

Historical audit timings are not measurements of this homepage. Browser tests used desktop Chrome viewport/mobile emulation, not physical devices, throttled hardware or a screen reader.

## Remaining boundaries

Real photography, consented individual maker records, verified inventory, commerce, email subscriptions, authoritative geographic review and 3D are future milestones. The reference’s fictional names, ratings, sales claims and guarantees were not imported. Fonts remain the existing self-hosted next/font families. No current vulnerability audit, real-device accessibility audit or throttled Core Web Vitals measurement is claimed.
