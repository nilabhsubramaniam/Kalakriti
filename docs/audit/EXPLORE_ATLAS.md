# Dedicated cultural atlas

Implemented locally on 2026-11-19 at the user's request to remove the map section from the homepage and provide a complete, artistic map on its own page.

## Scope

- `app/page.tsx`: remove the `RegionalDiscovery` mount; the illustrated opening and collection/community sections remain. The region CTA links to `/explore`.
- `app/explore/page.tsx`: a static route with dedicated metadata, using the existing client map facade.
- `components/landing/RegionalDiscovery.tsx`: page-level h1 and home return link; remove the decorative container border. Selection, hashes, hover, showcase and fallback remain on the existing store and renderers.
- `components/layout/TopNav.tsx`: direct Explore India link plus the separate States disclosure. State shortcuts still open their state pages; All of India opens the atlas.
- `components/layout/SiteFooter.tsx`, `components/state/StateHero.tsx`, `components/state/ClosingCTA.tsx`: point map exploration to `/explore`, with state hashes where appropriate.
- `app/globals.css`: full-width parchment wash, borderless map/preview composition, editorial heading, regional motif detail, responsive controls and mobile navigation. The shared footer is omitted visually on this dedicated atlas to keep focus on discovery; it remains on other routes.

No new dependencies, renderer changes, geometry changes, security-header changes or deployment changes. The existing D3 view and automatic fallback are retained. `/explore#Kerala` is the new form of a state map deep link.

## Validation

- TypeScript, strict lint and production build passed. `/explore` is statically prerendered; all 36 state routes remain generated.
- Chrome production preview with software WebGL2: no map on homepage; three direct `/explore` entry links; computed workspace/preview borders both `0px`.
- 320, 390, 768, 1024 and 1440px viewport checks: no horizontal overflow. Desktop and mobile screenshots visually inspected at `/tmp/kalakriti-explore-desktop.png` and `/tmp/kalakriti-explore-mobile.png`.
- Actual raycast hover/click, emulated touch selection, D3 keyboard selection, cultural showcase advance/pause/previous/next and D3 train passed.
- `/explore#Kerala`, reduced motion, WebGL context loss, unavailable WebGL, failed mesh request and no-JavaScript markup checked. The server-rendered selector contains all 36 regions and a real state-page link.
- Idle rendering stayed stopped; changing to D3 released the WebGL context and tracked buffers/programs. No runtime exceptions or third-party requests recorded. Browser report: `/tmp/kalakriti-explore-report.json`.

Physical mobile-device GPU performance remains unverified; the mobile interaction check used emulation.


## Library icon refinement — 2026-11-19

At the user's request, interface icons now use named `lucide-react` imports rather than handwritten SVG or Unicode symbols. This covers arrows on homepage/cards/state pages, search and navigation disclosure, map zoom/reset and showcase playback. The homepage values strip uses MapPin, Users, HandHeart and Sprout. Cultural motifs, the logo ornament and actual geographic SVG paths remain editorial artwork/data, not substitute interface icons.

`package.json` and `pnpm-lock.yaml` add lucide-react 1.75.0. No other dependency was deliberately changed. Icons retain currentColor, accessible button labels, existing handlers and fixed dimensions. No CDN, CSP or route changes. Official reference: https://lucide.dev/guide/react/.

`pnpm validate` passed. Production first-load estimates changed from 101 to 103 kB for the homepage and 120 to 123 kB for `/explore`. The fresh audit remains at the prior 34 advisories, with none for Lucide.

Browser checks passed for the homepage, atlas and Rajasthan page at 320, 390 and 1440px: library SVGs rendered, no horizontal overflow, no unnamed buttons and no runtime exceptions. Play/pause swaps to the matching library icon. Mobile screenshot: `/tmp/kalakriti-library-icons-mobile.png`.
