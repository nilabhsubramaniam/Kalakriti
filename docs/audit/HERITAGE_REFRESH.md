# Reference-inspired heritage homepage

> **Latest homepage — 2026-11-19:** The new reference-inspired heritage journal composition is implemented, with three regional stories, eight textile studies and a panoramic embroidery scene. Existing imagery, state routes and the separate atlas are preserved. See [implementation and image provenance](HERITAGE_JOURNAL.md).

> **Latest layout refinement:** Homepage spacing is tighter, the hero preserves the complete illustration, and native one-time entrance/hover motion respects reduced-motion preferences. See [spacing and motion verification](HOMEPAGE_RHYTHM.md).

> **Embroidery edit:** The active homepage artwork is now `public/images/india-heritage-embroidery.webp`. Produce has been replaced with embroidered cloth, hoops and thread. See [editing prompt and provenance](../audit/EMBROIDERY_HERO.md).

Implemented locally on 2026-11-19 following the user-supplied marketplace reference. The reference is a visual guide; its BharatHaath name, product prices, ratings, authenticity claims and nonfunctional commerce controls are not adopted.

## Changes

- `app/page.tsx`: panoramic hero, clearer description of crafts/produce discovery and a primary Explore India link. No embedded interactive map. Existing community, categories and brand content remain.
- `components/landing/StateDiscoveryStrip.tsx`: horizontal state links using the existing regional registry, with library chevrons, keyboard-scrollable track, reduced-motion support and a full-atlas link.
- `components/landing/FeaturedProductsRow.tsx`: image-led Mithila feature beside three labeled craft studies, linked to existing Bihar craft sections.
- `lib/states/bihar.ts`, `components/state/StateHero.tsx`: preserve the original courtyard illustration on Bihar's hero, with meaningful alt text and a visible illustration caption. Other state heroes retain their motifs.
- `app/globals.css`: scoped panoramic composition, warm cream/maroon palette, rounded state/feature cards and responsive Bihar image layout. Lucide remains the interface icon library.

The interactive 3D/D3 atlas and cultural showcase remain at `/explore`. No dependencies, map geometry, CSP or deployment changes.

## Asset provenance

New generated editorial artwork: `public/images/india-heritage-panorama.webp`, 1536×1024, approximately 432 KiB. Created with the built-in image-generation tool and compressed to WebP. The figures and scene are illustrative, not verified seller portraits or a documentary location. The source PNG remains in the tool's generated-images directory. The original `public/images/mithila-courtyard.webp` is unchanged and now used by Bihar's page.

### Final generation prompt

Create a premium panoramic editorial illustration asset for Kalakriti, an Indian craft and regional produce discovery homepage. Wide landscape 3:2 or wider composition. Warm cream parchment at far left fading naturally into a luminous pastoral Indian landscape on right. Keep the LEFT 38 percent mostly empty soft ivory/peach sky and ground, low detail, for a separate HTML headline. Main scene in RIGHT 62 percent: a woman in an elegant red and cream sari seated painting a richly detailed Madhubani inspired fish and lotus artwork, a farmer holding fresh leafy harvest beside woven baskets, handpainted terracotta vessels, woven textiles, distant trees and a subtle varied Indian architectural skyline in atmospheric distance. Natural proportions, realistic illustrative craftsmanship, cinematic golden morning light, gentle blue sky on upper right, warm terracotta and maroon details, tactile natural materials, harmonious editorial composition. Rich and elegant, like a high quality illustrated Indian heritage magazine cover, not cartoonish, no miniature toy effect. No map outline, no UI, no cards, NO TEXT, NO LETTERING, NO LOGO, no flags, no badges. Bottom transitions into light warm cream ground. The figures are fictional editorial representations, not portraits of real sellers.

## Validation

TypeScript, strict lint and production build passed. The homepage and atlas remain static, with all 36 state routes retained. Browser checks at 320, 390, 768, 1024 and 1440px covered the homepage, atlas, Bihar and Rajasthan: no horizontal overflow, unnamed buttons or runtime exceptions. State-strip next control scrolled successfully; map playback still changed the play/pause icon. The new homepage image and the original image on Bihar were verified in the DOM. Desktop homepage screenshot visually inspected; mobile images were also captured for review. Full-page Bihar screenshots include unrevealed below-fold sections; they do not prove those sections have been scrolled through.

Screenshots: `/tmp/kalakriti-editorial-home-1440.png`, `/tmp/kalakriti-editorial-home-390.png`. Physical-device performance remains unverified.
