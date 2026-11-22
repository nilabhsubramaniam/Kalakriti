# Design review — 2026-11-22

> Review of commit `7de968d` and the fixes applied on top of it (uncommitted at the time of writing). Measured on a production build served locally, in headless Chrome as a touch phone (390px) and a desktop (1440px), with overflow checks at 320, 768 and 1024px. The full measurement method is in the "Verification" section.

## Status

| # | Finding | Priority | Status |
|---|---|---|---|
| 1 | Product pages looked shoppable while the site says shopping is not live | High | **Fixed** — "Preview prices. Online ordering opens soon." under every shopping-region selector (collections, product pages, cart) |
| 2 | "View in 3D" tilts a flat image, not a 3D model | High | **Fixed** — renamed "Close-up view" in the viewer, its status messages and controls label; card links read "View details" (54 files) |
| 3 | Illustration labels were 7–8px | High | **Partly fixed** — home hero and `/explore` labels now 11px; product pages now state "Kalakriti regional craft illustration. Not a photograph of the actual piece." Replacing photoreal generated people with real or non-photoreal imagery needs new assets |
| 4 | The eight north-eastern states use the older template | High | **Partly fixed** — contrast failures on those pages 17 → 0 and labels 9.6px → 12px. Moving them to the chapter layout needs written content and imagery |
| 5 | Footer links ran together on touch screens | High | **Fixed** — a coarse-pointer rule made the links `inline-flex`; they now stack. The "missing phone logo" and the desktop run-on in the first review were screenshot artefacts, not real defects |
| 6 | Map has no Ladakh; Dadra & Nagar Haveli and Daman & Diu shown separately | High | **Open** — needs a decision on the authoritative boundary source |
| 7 | Header links change between regional chapters and other pages | Medium | **Not changed** — this is the documented per-region navigation; changing it is a product decision |
| 8 | Header plus section bar use ~21% of a phone screen | Medium | **Open** — header redesign is a design decision |
| 9 | Text at 7–11px | Medium | **Partly fixed** — smallest outliers raised (illustration labels, `/explore` back link and preview eyebrow, phone hero kicker 8 → 10px, north-eastern labels). The home page's 9–12px labels are a deliberate style; a type-scale pass needs approval |
| 10 | Low-contrast text | Medium | **Fixed for measurable text** — failures 48 → 8 across the 20 page checks; the remaining 8 are text over the home hero image, which the automated check cannot score (it does not see the gradient behind the text) |
| 11 | Tap targets under 44px | Medium | **Partly fixed** — 71 → 47. Fixed: footer links, `/explore` back link, overview "All of India", product breadcrumbs. Remaining: header logo (38px tall) and search button (38px wide), inline product-name links |
| 12 | `/explore` map below the fold on phones | Medium | **Open** — layout redesign |
| 13 | Very long chapter pages on phones | Medium | **Open** — content decision |
| 14 | Heavy decorative backgrounds | Medium | **Open** — art-direction decision |
| 15 | No consistent type scale | Medium | **Open** — see 9 |
| 16 | 28 copied chapter components, ~90 copied route files, one 4,000-line stylesheet | Medium | **Open** — refactor milestone; should precede item 4's full fix |
| 17 | Unstyled default 404 page | Low | **Fixed** — `app/not-found.tsx`, branded, inside the site header and footer |
| 18 | "Pause carousel" prominence; stray bullet | Low | **Open** |
| 19 | Console warnings | Low | **Partly fixed** — Three.js shadow warning removed (`PCFShadowMap`, which three.js was already substituting). The unused-preload warning on product and article pages remains |
| 20 | `/explore` heading skipped from h1 to h3 | Low | **Fixed** — region name is now h2 at the same rendered size (43.2px at 1440px) |

## Files changed

- `app/globals.css` — one appended section, "Design review fixes (2026-11-22)". No existing rule was edited except three selectors renamed from `.kk-region-identity h3` to `h2`.
- `app/not-found.tsx` — new.
- `components/commerce/ShopControls.tsx` — pricing note.
- `components/product/ProductGallery.tsx`, `components/product/ProductDetail.tsx` — wording, illustration credit.
- `components/landing/RegionPreview.tsx` — heading level.
- `lib/three/createIndiaScene.ts` — shadow-map constant.
- 27 `components/state/*Journal.tsx`, 27 `app/state/*/crafts/[craft]/page.tsx`, and `app/state/bihar/crafts/[craft]/page.tsx` — link text only.

## Verification

- `pnpm type-check` and `pnpm lint:strict` pass. `next build` into the isolated `.next-relief` output generates the same 450 pages as before. `pnpm validate` itself was not run, because it builds into `.next`, which a running dev server was using.
- Before/after probe on ten page types (home, `/explore`, Bihar, Kerala, Assam, a craft page, a product page, an article, cart, 404):
  - Unchanged at 320, 768 and 1024px on all pages: horizontal overflow (none).
  - Unchanged everywhere: broken images (none), missing alt text (none), header height, running animations under reduced motion (none).
  - Page height grew by at most 0.2 screens (the pricing note and illustration credit).
  - Contrast failures 48 → 8; small tap targets 71 → 47; Three.js console warning removed.
- Changed screens were inspected visually: phone and desktop footer, product page (both widths), Kerala collection, Assam overview, 404 (both widths), `/explore`.
- Note for future checks: Chrome reports `color-mix()` results as `color(srgb …)`; a contrast script must parse that format or it silently skips those elements.
