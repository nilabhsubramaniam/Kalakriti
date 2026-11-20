# Kalakriti product-led logo concept

The user approved using this concept. It is now integrated in the header and footer; see [logo and navigation implementation](LOGO_NAVIGATION_IMPLEMENTATION.md). The original concept record follows. No deployment was made.

## Design intent

- Embroidery hoop, needle and looping thread make hand embroidery and textile work recognizable.
- Paired fish and a lotus connect the emblem to the Mithila-inspired visual language already used throughout the product.
- Maroon and antique gold connect it to the existing site palette; the serif wordmark preserves the editorial character.
- The tagline remains Craft · Culture · Community. Symbol meanings here are design choices, not claims of traditional certification or historical provenance.

## Deliverables

All generated artwork was created with the built-in image-generation tool. Exact prompts and source output paths are in [LOGO_CONCEPT_PROMPTS.json](LOGO_CONCEPT_PROMPTS.json).

| File | Use | Dimensions |
| --- | --- | --- |
| `public/brand/kalakriti-logo-concept.png` | Primary transparent horizontal logo | 2149×732 |
| `public/brand/kalakriti-logo-reverse-concept.png` | Ivory/gold version for dark maroon backgrounds | 2148×732 |
| `public/brand/kalakriti-logo-emblem-concept.png` | Standalone transparent emblem | 1254×1254 |
| `public/brand/kalakriti-logo-review.png` | Browser-rendered review sheet on cream and maroon | 1100×850 |

## Review and limits

The three artwork files have RGBA transparency with alpha ranging from 0 to 255. Spelling, major shapes and colors were visually inspected. A browser review sheet checked cream/maroon presentation, a 100px emblem and a 240px lockup. The wordmark remains recognizable; the tagline becomes too small at narrow sizes and should be omitted or rendered separately in a future compact implementation. The detailed emblem is not claimed to be ready for a 16px favicon.

These are raster logo concepts, not final vector masters or trademark clearance. The initial concept-only step required no application build. The approved integration has separate production-build and browser checks, recorded in the implementation report.
