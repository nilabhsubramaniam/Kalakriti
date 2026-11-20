# Security review

> **Commit review — 2026-11-20:** A fresh `pnpm audit --prod --json` reports **28 production advisories: 3 critical, 11 high, 12 moderate and 2 low**. Affected packages are `next`, `source-map-js` and `zod`; these versions also exist in the pre-change lockfile. No advisory is reported for the added Three.js or Lucide packages. Counts below from full dependency audits are historical and include a different scope. This review does **not** claim a clean security audit. Major framework/schema upgrades were not part of the approved visual work. The reported image-optimizer/RSC risks need feature-specific triage before release; static generation alone is not proof of non-exposure. Local commits do not deploy the application.

> **Interface icon update — 2026-11-19:** Added `lucide-react` 1.75.0 for locally bundled, named icon imports. No external font/script CDN or CSP change. Fresh `pnpm audit` reports the same 34 advisories (3 critical, 14 high, 15 moderate, 2 low); none is reported for lucide-react. Existing remediation remains outstanding.

> **3D map milestone — 2026-11-17:** Three.js is a new lazy runtime dependency. No external origin, worker, WASM decoder, authentication, upload or backend is introduced; CSP is unchanged. Hash-named same-origin mesh buffers have one-year immutable cache headers; their manifest retains revalidation. KALAKRITI_BUILD_DIR supports isolated local QA without affecting the default production output. Fresh pnpm audit reports 34 advisories (3 critical, 14 high, 15 moderate, 2 low), matching the previous baseline counts. Affected packages: next, zod, glob, minimatch, brace-expansion, js-yaml, postcss-selector-parser and source-map-js. No advisory is reported for three. Remediation is not claimed.

> **Implementation update — 2026-11-17:** No changes to CSP, security headers, external origins, dependencies, environment handling, deployment or authentication. New imagery is same-origin. Craft search uses React text output and existing state routes. No email collection, payment, booking or cart backend was added; coming-soon controls do not submit data. Advisory counts below are historical and were not refreshed for this change.

The original baseline audit follows for historical context.

> Audit of commit `6473826`, 2026-11-17. Headers verified against a local production build (`next start`). Advisory counts from `pnpm audit` on that date.

## What is in place (verified)

| Control | Value |
|---|---|
| Content-Security-Policy | `default-src 'self'`; `script-src 'self' 'unsafe-inline'`; `style-src 'self' 'unsafe-inline'`; `img-src 'self' data: blob: https://nilabhsubramaniam.atlassian.net`; `font-src 'self' data:`; `connect-src 'self'`; `object-src 'none'`; `base-uri 'self'`; `form-action 'self'`; `frame-ancestors 'self'`; `upgrade-insecure-requests` |
| Strict-Transport-Security | `max-age=63072000; includeSubDomains` (no `preload`, deliberately) |
| Other headers | `X-Frame-Options: SAMEORIGIN`, `X-Content-Type-Options: nosniff`, `Referrer-Policy: strict-origin-when-cross-origin`, `Permissions-Policy: camera=(), microphone=(), geolocation=()`; `poweredByHeader: false` |
| Dangerous APIs | No `dangerouslySetInnerHTML`, `eval` or `new Function` in `app/`, `components/` or `lib/` |
| Secrets | None in the repository. `.env.example` holds placeholders. `.env*`, keys, certificates and `.vercel` are ignored |
| CI | `permissions: contents: read`, no secrets, no deployment job |
| Attack surface | No API routes, Server Actions or middleware; every page is built ahead of time |

`'unsafe-inline'` for scripts and styles is a deliberate trade-off for static rendering (CLAUDE.md §8). Changing it means per-request rendering with nonces, which needs discussion.

## Findings

### H1 · Next.js 14 advisories — High (upgrade is a decision)

- **Current:** `pnpm audit` reports 34 advisories (3 critical, 14 high, 15 moderate, 2 low). 26 are in `next`, and every one is fixed only in 15.5.x or later.
- **Exposure:** most require features this app does not use: Server Actions, middleware, rewrites, Pages Router i18n, or Windows hosting. The relevant ones today concern the image optimizer (H2) and React Server Component handling.
- **Risk grows** as soon as dynamic routes, route handlers or middleware are added (planned for checkout and accounts).
- **Recommendation:** decide on Next 15 / React 19 before any dynamic or authenticated feature ships. Until then, reduce surface (H2).

### H2 · Image optimizer enabled for no reason — High, low effort

- **File:** `next.config.mjs`
- **Current:** `images.remotePatterns` allows `nilabhsubramaniam.atlassian.net`, and the CSP `img-src` allows the same host. No rendered page uses `next/image`; only the unused `ProductCard` does.
- **Problem:** two critical advisories are in the Image Optimization API, and the configuration keeps it reachable. On Vercel, `/_next/image` is served by Vercel's own optimizer, so how much of this applies in production is *unverified*.
- **Recommendation:** remove the `images` block and the Atlassian host from `img-src`. The CSP then becomes genuinely same-origin for images.

### H3 · Transitive advisories — Medium

- js-yaml, brace-expansion, source-map-js, postcss-selector-parser, glob, minimatch — build and lint tooling, not shipped to the browser.
- zod (`<4.6.6`, memory exhaustion) — only `lib/env.ts` uses zod, and nothing imports that file.
- **Recommendation:** extend `overrides` in both locations, or drop the unused package; verify frozen installs under pnpm 9 and 11; re-run `pnpm audit`.

### H4 · Unused dependencies — Low

`ky` is never imported and `zod` is effectively unused. Unused packages still carry advisories and supply-chain risk. `@types/d3` sits in `dependencies`.

### H5 · Content integrity — High (trust and consumer protection)

Placeholder prices and inert buy buttons are presented as live; some provenance and GI claims are unverified. See [TECHNICAL_DEBT E3](TECHNICAL_DEBT.md). This is a trust and potential legal exposure rather than a code vulnerability, and it applies as soon as the site is public.

## Requirements for future work

These follow from CLAUDE.md §8 and the proposed architecture:

- Any new origin (CDN, object storage, payment provider, API) needs a CSP change, a cache policy and a failure fallback, approved first.
- 3D model decoding (Meshopt, KTX2) needs `'wasm-unsafe-eval'` in `script-src` and `worker-src 'self' blob:`. This is a CSP loosening and needs approval.
- Authorisation must be enforced in the backend. Guards in Next layouts or middleware are for user experience only.
- Uploaded images and GLB files are untrusted: validate type, size and content, and strip EXIF location data.
- If `lib/env.ts` is imported, `NEXT_PUBLIC_SITE_URL` must be set in Vercel or the build fails.


## Production advisory inventory at commit review — 2026-11-20

The package-manager audit exits nonzero for the findings above. The machine-readable report is retained at `/tmp/kalakriti-commit-audit.json` for this local session. This inventory records scanner output; it is not proof that every advisory is exploitable in this application.

| Package | Critical | High | Moderate | Low |
| --- | --- | --- | --- | --- |
| `next` | 3 | 9 | 12 | 2 |
| `source-map-js` | 0 | 1 | 0 | 0 |
| `zod` | 0 | 1 | 0 | 0 |

Examples requiring follow-up include [Next.js SVG image optimization](https://github.com/advisories/GHSA-2464-fhr4-w9xw), [source-map-js indexed source-map offsets](https://github.com/advisories/GHSA-68fv-2mgg-jv7q) and [oversized constrained Zod collections](https://github.com/advisories/GHSA-mrhx-c7xc-m3w5). The repository retains Next.js 14.2.35 and Zod 3.25.76 under the existing constraints. An approved remediation milestone should verify actual feature exposure, choose compatible patched versions, and repeat production/header, fallback and route checks. Do not treat the successful build or browser smoke checks as security remediation.
