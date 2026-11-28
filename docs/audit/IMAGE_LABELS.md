# Visible image-label removal — 28 November 2026

At the user’s explicit request, illustration labels and credit captions are removed from rendered images throughout the application. This supersedes earlier design notes requiring visible illustration badges; it does not change the nature or provenance of the assets.

Updated renderers:

- Homepage hero: removes the “Editorial illustration” caption.
- `RegionPreview`: removes the Explore image badge.
- `AccountBackdrop`: removes the carousel illustration-credit line on login/signup.
- `Frame` and `StateHero`: stop displaying asset-credit overlays/captions.
- `ProductGallery`: removes the image-credit paragraph; `ProductDetail` no longer passes that presentation-only prop.

Image assets, descriptive alt text, source credit metadata and generation records are preserved. Account/submission and shopping/price preview notices are unchanged. No backend, dependency, theme, map geometry, route or image file is changed.

Validation: TypeScript and strict lint pass, the isolated production build generates 567 static outputs, and `git diff --check` is clean. Headless Chrome checks pass on seven representative pages (home, Explore, login, signup, Bihar and two product details) at 320, 390, 768, 1024 and 1440px: 35 checks with no visible image-credit labels, missing alt attributes, horizontal overflow or runtime exceptions. A homepage capture was inspected. Existing image files and preview notices are unchanged. No commit or push is included.
