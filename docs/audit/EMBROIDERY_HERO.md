# Embroidery hero adjustment

At the user's request, the homepage illustration replaces the vegetables and fruit with embroidered textiles, fabric-filled baskets, embroidery hoops and thread. The rest of the scene and homepage layout remain intact. The new hero is saved at `public/images/india-heritage-embroidery.webp` (1536×1024); the previous panorama remains available as an unused asset. A separate filename prevents a previously optimized image cache from obscuring the update; the image alt text is updated in `app/page.tsx`. Bihar's courtyard artwork is unchanged.

Tool: built-in image generation, editing the existing hero illustration. This is fictional editorial artwork, not a photograph of a verified maker.

## Final editing prompt

undefined

Validation: edited artwork visually inspected; vegetables and fruit are replaced by textiles, embroidery hoops and thread. Output remains 1536×1024 and is 415,238 bytes as WebP. Homepage source and alt text reference the new asset. TypeScript, strict lint, production build and `git diff --check` passed. No layout, dependency or deployment changes.
