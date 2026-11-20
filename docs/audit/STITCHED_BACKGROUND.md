# Embroidered background for the textile atlas

The user's follow-up is implemented as a matching treatment for “Stitched, woven, remembered.” The background uses linen texture, embroidered floral borders and fine running stitches, rather than the painted motifs used by Roots.

`app/page.tsx` adds an aria-hidden, noninteractive decorative layer and a content wrapper. `app/globals.css` supplies the backdrop, near-opaque card surfaces and a separate named view timeline (`--kk-textile-view`). It reuses the restrained ±28px drift keyframes. Desktop motion runs only above 900px with hover capability, no reduced-motion preference and support for scroll timelines/animation ranges. Mobile, tablet, reduced-motion and unsupported browsers get a static backdrop. The painted Roots timeline remains independent.

New asset: `public/images/stitched-textile-background.webp`, 1717×916, 374,220 bytes. Created with the built-in image-generation tool and converted to WebP. The design is generic decorative embroidery, not evidence of a particular regional technique or product. No dependencies, routes, map geometry or deployment settings changed.

## Final generation prompt

Create a premium decorative textile background for an Indian heritage website section titled Stitched, woven, remembered. Wide landscape 1920x960. Warm ivory natural linen with subtle visible woven fibres. Delicate hand-embroidered floral vines and small paisley shapes ONLY at the far left and right edges in muted burgundy, terracotta, sage and antique gold thread. Fine running-stitch border lines and a few loose embroidery threads near corners, tactile raised thread detail, elegant restrained editorial craft styling. Keep central 70 percent almost empty pale ivory with very subtle linen texture for HTML text and cards. Soft natural daylight, no people, objects for sale, text, letters, logos, UI, painting brushes, vegetables or hard frame. This is a generic decorative embroidery study, not a specimen of a specific regional technique. Match a warm cream and maroon Indian craft website.

## Validation

TypeScript, strict lint, production build and git diff whitespace check passed. Chrome measured background translation changing from −28px to +9.85px at two scroll positions, within the intended range. The painted and embroidered sections use distinct timelines. Reduced motion removed the animation and reset translation to zero. Static decoration at 320, 390 and 768px, and desktop motion at 1024/1440px, passed without horizontal overflow or runtime exceptions. The decorative image loaded, is hidden from assistive technology and cannot capture pointer events. Existing stories remain visible without JavaScript.

Desktop and mobile screenshots visually inspected: `/tmp/kalakriti-stitched-background-desktop.png`, `/tmp/kalakriti-stitched-background-mobile.png`. Browser report: `/tmp/kalakriti-stitched-report.json`. Physical-device performance and unsupported-browser rendering remain unverified; CSS feature detection retains the static fallback.
