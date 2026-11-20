# Painted background and scroll depth

Implemented locally at the user's request for a painting-related background and parallax in “The roots of a living craft”.

## Implementation

- `app/page.tsx`: the Roots section becomes full width, with its existing content inside the same 1120px reading width. An aria-hidden, noninteractive decorative image sits behind the content.
- `app/globals.css`: warm paper, Madhubani-inspired painted edges and a quiet centre. The cards retain near-opaque backgrounds for readability. A named CSS view timeline moves only the decorative layer from −28px to +28px as the section scrolls through the viewport. No JavaScript scroll listener or animation loop was added.
- The effect runs only above 900px on hover-capable devices without reduced motion, and only when the browser supports both scroll timelines and animation ranges. Other browsers and profiles retain a static background. Mobile/tablet displays the decoration at the section's top instead of enlarging and cropping it across a tall card stack.
- `public/images/painted-roots-background.webp`: new generated editorial background, 1774×887, 224,186 bytes. Built-in image-generation tool used; no new dependency or external origin. No geography, routing, state data or deployment change.

## Final generation prompt

Use case: illustration-story. Asset type: decorative background for Kalakriti website section about roots of Indian craft. Create a very wide landscape 1920x960 hand-painted parchment background, soft warm ivory handmade paper with subtle fibrous texture. Madhubani-inspired hand-drawn lotus flowers, curling vines, fish and small birds appear ONLY along the far LEFT and far RIGHT edges, like an unfinished artisan's painted border, in restrained muted maroon, terracotta, mustard gold, sage and dark brown fine ink. A few soft translucent natural pigment brush washes and extremely subtle scattered pigment marks near edges. Keep the central 65 percent mostly empty, pale ivory, quiet and low detail so real HTML cards and text can sit on top. Bottom left can have two small traditional paintbrushes and tiny bowls of natural pigment; keep them small and editorial, no people. Delicate and sophisticated, authentic hand-painted texture rather than digital clip art, cream and maroon Indian heritage visual direction. No text, logos, UI, frame around whole image, vegetables, religious symbols, dense pattern in center or hard seams.

## Validation

TypeScript, strict lint, production build and git diff whitespace check passed. Chrome verified native view-timeline support and measured background translation changing from −18.20px to +12.30px at two scroll positions, within the intended ±28px range. Reduced motion removed the animation and reset translation to zero. Static backgrounds were verified at 320, 390 and 768px; desktop motion at 1024 and 1440px. No horizontal overflow at these five widths and no runtime exceptions. The decorative image loaded, is hidden from assistive technology and does not capture pointer events. All three story cards remained visible with JavaScript disabled.

Desktop and mobile screenshots visually inspected: `/tmp/kalakriti-painted-roots-desktop.png` and `/tmp/kalakriti-painted-roots-mobile.png`. Detailed report: `/tmp/kalakriti-roots-report.json`. Physical-device performance and unsupported-browser rendering remain unverified; CSS feature detection provides the static fallback.

## Themed story cards

Following the user's feedback about the white card interiors, `app/page.tsx` now supplies a subtle pigment value from the existing state registry and decorative chapter numbers. Scoped rules in `app/globals.css` replace the white frame/panel with warm parchment gradients, fine gold borders, flush 3:2 imagery, clearer text hierarchy and maroon story-link treatments. The linked card uses a flexible column layout so the calls to action align across the desktop row. Region text, languages and destinations are unchanged. No new artwork, dependency or global card restyling.

TypeScript, strict lint, production build and whitespace checks passed. Chrome checks at 320, 390, 641, 768, 1024 and 1440px verified no horizontal overflow, three pigment-tinted cards, contained text/link areas, aligned desktop calls to action and complete 3:2 image proportions. All three destinations returned HTTP 200. Actual keyboard modality produced a visible focus outline; reduced-motion disabled the decorative parallax, and all three stories stayed visible without JavaScript. No runtime exceptions recorded. Desktop/mobile screenshots were visually inspected: `/tmp/kalakriti-roots-folios-1440.png`, `/tmp/kalakriti-roots-folios-390.png`. Detailed report: `/tmp/kalakriti-folios-report.json`.
