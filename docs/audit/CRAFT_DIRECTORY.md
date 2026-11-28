# All-crafts directory and product discovery

Implemented 28 November 2026. `/crafts` brings the existing **200 craft entries from 36 regional chapters** together in a themed, filterable product-card layout.

## Structure and content

- `app/crafts/page.tsx` reads the existing `stateSlugs()` / `statePage()` registry. Each craft is joined to one of its existing products, preferring a product with an image. Directory props contain only names, identity, images and destinations, not full craft stories. Existing price/cart controls resolve product IDs through the commerce catalogue.
- `components/crafts/CraftDirectory.tsx` shows a Madhubani-art introduction and regional cards: state link, sample product name/image, craft collection link, preview price, add-to-cart button, image zoom and product-details link. All 200 entries currently have product prices and images. Search and state selection filter the existing entries; counts, clearing, reset and an empty state remain available.
- `components/crafts/CraftImagePreview.tsx` is a native modal dialog for inspecting the current product artwork. Zoom runs from 100–300% in 50% steps, with reset, enlarged-image scrolling/panning, keyboard +/- and Escape, focus containment/restoration, and a link to the existing detail/3D page. It enlarges existing raster artwork; it does not invent or generate additional product detail.
- Existing `MarketSelector` / `ProductPurchase` components retain market-specific sample prices, the 20-item limit, localStorage basket and add feedback. Pricing is shown for the named sample item, rather than assigning a price to a tradition. Ordering remains a preview.
- `app/globals.css` has labelled directory/shop sections. State cards use regional paper/ink/accent slots; the introduction uses existing Madhubani artwork and brand colours. Lazy-loaded card images reserve aspect ratio; the hero image is prioritised. Reduced-motion preferences disable hover image transitions.

The directory intentionally uses `StatePage.crafts`, including regional produce already classified there. Regional associations are retained instead of merging traditions across states. No new cultural, artisan or origin claims are added.

## Entry points and rendering

“Crafts” is now a dedicated navbar action visible on every route and at phone widths. Global “Traditions” returns to the homepage traditions section; existing regional chapter links remain unchanged. The homepage and footer also link to `/crafts`.

The page is static and all entries render in its initial HTML. Craft/product links remain usable without JavaScript; filtering, zoom and the local basket enhance that rendering. Numerous detail links disable prefetch. No dependencies, external origins, API routes, backend or map changes are introduced.

## Validation

- TypeScript, strict ESLint and isolated production build pass; 568 static outputs remain.
- Initial directory implementation verified all 200 craft collection destinations against generated static HTML. The shop presentation retains those collection links and adds existing product destinations.
- Actual Chrome checks at 320, 390, 641, 650, 768, 1024, 1281 and 1440px verify viewport bounds, the directly visible Crafts action, all 200 image/price cards and modal sizing.
- Zoom and scrollable enlargement, Escape/focus restoration, direct cart-count updates, search and Euro preview prices pass. Desktop and phone captures were inspected.

No commit, push or deployment is part of this change.

## Compact header and on-demand filters

The large introduction is replaced with a compact “Crafts of India” masthead, short theme line and 64–80px artwork thumbnail. The first product row begins at approximately 367–422px from the viewport top across the five checked widths, instead of following a large hero and permanently expanded filters.

A 44px Lucide filter icon opens a native `<details>` disclosure containing search, the state selector and shopping-region controls. It is closed by default, works without JavaScript for disclosure, shows an active search/state count, and supports Escape/focus restoration and outside-pointer dismissal. Portalled select options are excluded from outside dismissal. Phones use a viewport-bounded panel below the navbar. Preview-price wording remains visible in the result toolbar when the panel is closed. Search/state values remain applied when collapsed; Reset returns to the full list.

Chrome checks at 320, 390, 768, 1024 and 1440px verify the compact layout, hidden-by-default filters, search, badge, reset and Escape behaviour. The 390×667 check verifies filter-panel bounds and state selection through the portalled dropdown. No horizontal overflow was observed. TypeScript, strict lint and isolated static production build pass.

## Banner removal

The introductory craft-directory banner, artwork thumbnail and map link have been removed at the user’s request. The page now begins directly with the result count, filter icon and product grid. A screen-reader-only H1 preserves the page heading without adding visual space. Existing filters, cart actions and zoom are unchanged.

## Shared heritage theme

The page surround now reuses `/images/painted-roots-background.webp` from the homepage: Madhubani-inspired birds, fish and lotus borders on painted paper. A paper-colour wash softens it, with opaque toolbar/card surfaces protecting readability. Double-line regional borders, restrained shadows, tinted card interiors and the registered regional display fonts bring the cards into the existing journal design. The filter panel carries a softer version of the same artwork. No introductory banner, additional section or animation is added; card, cart and zoom behaviour is preserved. The existing same-origin asset adds no new origin or dependency.

Theme validation: TypeScript, strict lint and isolated production build pass. Chrome checks at 320, 390, 768, 1024 and 1440px confirm the painted background, all 200 cards, filter availability, no reintroduced banner and no horizontal overflow. First card positions remain 212px on tablet/desktop and 236px on phones. Phone and desktop screenshots were inspected; toolbar text sits on opaque paper and product text retains regional ink colours.
