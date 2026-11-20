# Approved logo integration and navigation refinement

Implemented locally following the user's approval to use the logo and improve the navbar. No commit, push or deployment.

## Changes

- `components/layout/TopNav.tsx`: approved full logo on tablet/desktop; standalone emblem plus live text on phones so the small tagline is not squeezed into an unreadable raster. Primary links are Home, Traditions, Craft stories and Our idea. Explore India is a distinct action leading to the existing atlas.
- The state directory retains all 36 state/UT links and regional motifs. Mobile/tablet Menu also exposes the primary page links, which were previously hidden at those widths. Escape closes and restores trigger focus; outside click, focus leaving the navigation group, search focus and route changes dismiss it. State links identify the current state page. Homepage link clicks and hash changes update the active anchor styling.
- `components/layout/SiteFooter.tsx`: the approved ivory/gold logo replaces the former generic lotus/text lockup on the existing maroon mural.
- `app/globals.css`: clearer active pills, compact search, bounded search results and region panel, consistent rounded controls, nine-width responsive layout and 44px coarse-pointer controls. Existing header heights remain 94px and 124px to preserve page offsets. The logo/menu/search fit without overlaps or horizontal overflow.
- `public/brand/kalakriti-logo.webp`, `kalakriti-logo-reverse.webp`, `kalakriti-emblem.webp`: lossless WebP derivatives of the approved transparent PNG concepts. Original downloads are preserved. Next Image serves responsive optimized versions; the primary header lockup has priority loading.

The assets remain raster artwork; no vector master is claimed. The detailed emblem has not replaced the existing 16px favicon. Lucide continues to supply interface icons. No dependency, CSP, font, map geometry, backend, route or deployment configuration changes.

## Validation

- `KALAKRITI_BUILD_DIR=.next-relief pnpm validate`: TypeScript, strict lint and production build passed. Homepage/atlas remain static and all 36 generated state routes remain available.
- `git diff --check`: passed.
- Chrome production preview at 320, 390, 641, 768, 900, 901, 1024, 1200 and 1440px: no horizontal overflow, logo fit inside the header, no overlap with the menu trigger, logo images loaded. The settled state panel stayed inside the viewport with all 36 links. Mobile/tablet primary navigation was present below 901px.
- Search for Bihar produced real state links and its popup remained within the viewport at every tested width. Escape closed search and the navigation panel; navigation Escape restored trigger focus.
- Active Traditions anchor, outside-click dismissal, actual state-link navigation to Bihar, current-state marking and footer logo loading passed.
- Coarse-pointer emulation verified 44px Menu, Explore India and search-button targets. No runtime exceptions recorded.
- Desktop homepage, desktop state directory, mobile menu and footer logo screenshots visually inspected. Artifacts: `/tmp/kalakriti-navigation-home-1440.png`, `/tmp/kalakriti-navigation-home-390.png`, `/tmp/kalakriti-navigation-menu-1440.png`, `/tmp/kalakriti-navigation-menu-390.png`, `/tmp/kalakriti-approved-footer-logo.png`.
- Detailed browser report: `/tmp/kalakriti-navigation-report.json`.

Physical-device performance remains unverified. Compact logo uses the same approved emblem with a native serif wordmark; full lockups retain their generated typography and tagline.
