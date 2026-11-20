# Tech stack

> **3D map milestone — 2026-11-17:** Added only three ^0.187.0 and @types/three ^0.187.0. No React Three Fiber, Drei, GSAP, Blender runtime, decoder library or physics API was introduced. Runtime scene code is dynamically imported. Native DecompressionStream decodes the locally generated gzip mesh asset. The package map:build script prepares meshes before next build. Next remains 14.2.35 / React 18.

> **Implementation update — 2026-11-17:** Framework and dependency versions are unchanged. No packages, backend, 3D library, external asset origins, CSP or deployment configuration were introduced. Four WebP illustrations are served from public/images; homepage imagery uses next/image. The existing next/font families are retained.

The original baseline audit follows for historical context.

> Audit of commit `6473826`, 2026-11-17. Installed versions from `pnpm ls`.

## Runtime dependencies

| Package | Installed | Used by | Notes |
|---|---|---|---|
| `next` | 14.2.35 | Everything | Held at 14.2.x by policy. 26 advisories fixed only in 15.5.x+ (see [SECURITY_REVIEW](SECURITY_REVIEW.md)) |
| `react`, `react-dom` | 18.3.1 | Everything | Compatible with Next 14 |
| `d3` | 7.9.0 | `IndiaMap`, `DistrictMap` (dynamic import) | The whole library is imported; only geo, selection, zoom, transition and ease are used |
| `zustand` | 4.5.7 | `useRegionStore` | |
| `zod` | 3.25.76 | `lib/env.ts` only, which nothing imports | Effectively unused |
| `ky` | 1.14.3 | Nothing | Unused |
| `@types/d3` | 7.4.3 | Types | Belongs in `devDependencies` |

**3D-related dependencies:** none. No three, react-three-fiber, drei or GSAP.

## Development dependencies

| Package | Installed | Notes |
|---|---|---|
| `typescript` | 5.9.3 | `strict`, `noUnusedLocals`, `noUnusedParameters`, `noImplicitOverride` |
| `eslint` | 8.57.1 | End of life |
| `eslint-config-next` | 14.2.5 | Does not match `next` 14.2.35 |
| `@typescript-eslint/*` | 8.66.0 | |
| `tailwindcss` | 3.4.19 | Installed, no utility classes used; its reset still applies |
| `postcss`, `autoprefixer` | 8.5.25, 10.5.4 | |

## Fonts

Self-hosted through `next/font/google`: Cormorant Garamond, Rozha One, Marcellus, Yatra One, Tiro Devanagari Hindi, Inter.

## Package manager constraints

| Constraint | Why |
|---|---|
| pnpm 11 locally and in CI; pnpm 9 on Vercel (from `lockfileVersion: '9.0'`) | Both must install from the same lockfile |
| `pnpm-workspace.yaml` keeps `packages:` | pnpm 9 aborts without it |
| `overrides` declared in both `pnpm-workspace.yaml` and `package.json` `pnpm.overrides` | pnpm 9 reads one, pnpm 10+ the other. pnpm 11's warning about the `package.json` copy is expected |
| `allowBuilds: unrs-resolver` | pnpm 11 fails the install without it |
| `engines.node: ">=22"` | A range on purpose |

Current overrides: `postcss >=8.5.23`, `nanoid >=3.3.18`, `minimatch >=9.0.7`, `glob >=10.5.0`.

## Tooling and CI

- `pnpm validate` = `type-check && lint:strict && build`. It is the only gate; there is no test suite.
- ESLint: `next/core-web-vitals`, inline type imports enforced, `no-explicit-any` a warning globally and off only for `IndiaMap.tsx`.
- CI: `.github/workflows/ci.yml`, validate only, no secrets, `contents: read`.

## Outdated packages (2026-11-17)

Minor updates available: `d3` 7.9.2, `postcss` 8.5.33, `autoprefixer` 10.6.2, `@typescript-eslint/*` 8.72.2. Major versions available for `next` (16), `react` (19), `eslint` (10), `ky` (2) and the type packages. Majors need an explicit decision.

## Unused or misplaced

| Item | Recommendation |
|---|---|
| `ky` | Remove, or adopt deliberately when an API client is built |
| `zod` | Keep only if `lib/env.ts` is adopted; its advisory affects versions below 4.6.6 |
| `@types/d3` | Move to `devDependencies` |
| Tailwind toolchain | Decision: disable its reset, or remove Tailwind (see [TECHNICAL_DEBT E5](TECHNICAL_DEBT.md)) |

Any change here must keep both pnpm majors working and be followed by `pnpm audit` and `pnpm validate`.
