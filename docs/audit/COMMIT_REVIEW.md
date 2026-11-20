# Heritage experience commit review

Reviewed 2026-11-20 for the user-requested commit. Work is on `feat/kalakriti-heritage-experience`; no push or deployment is requested.

## Reviewed scope

- Illustrated homepage and regional carousel, shared logo/navigation/search/footer, regional content and Bihar's dedicated Mithila journal.
- Separate `/explore` atlas, D3 preservation, lazy Three.js renderer, shared selection and opt-in cultural showcase.
- Offline geometry builder and generated manifest/poster, same-origin images, compressed artwork and image-generation provenance.
- Framework/configuration and lockfile changes, documentation and the replacement README.

The accumulated implementation adds `three`, `@types/three` and `lucide-react`. This commit review adds no dependency and performs no upgrade. Existing map geometry and data keys are preserved. Bihar's map removal and the transparent backgrounds behind its section menu/headings follow the latest user clarification; its full-page painted backdrop remains intact.

The README now uses the approved logo and craft illustrations and accurately documents the implementation, local setup, current routes, visual system, source structure, asset provenance and outstanding security status. Unimplemented authentication, checkout, APIs, admin and mobile examples were removed from the README and remain future proposals in the relevant architecture documents.

## Verification performed

| Check | Result |
| --- | --- |
| `pnpm validate` with isolated `.next-relief` output | Passed TypeScript, strict lint and production build; 42 static outputs |
| All 36 regional HTTP routes | HTTP 200; Bihar journal without a map, other 35 pages with three craft descriptions |
| Shared navigation | Passed nine widths from 320 through 1440px, menu/search bounds, state links, keyboard Escape and mobile touch targets |
| Homepage carousel | Passed autoplay, pause, removed Previous/Next controls and reduced-motion behavior |
| Bihar journal | Passed five widths, illustrated content, native disclosures, no-JavaScript operation, top menu, transparent menu/heading backgrounds and original mural |
| Other state layout | Gujarat matches the recorded hero/card baseline at five widths |
| Atlas | Passed selection, hover preview, showcase controls, five responsive widths, touch, deep links, context-loss fallback, WebGL-disabled fallback and failed-manifest fallback |
| 3D lifecycle | No idle/offscreen draw loop in the atlas check; switching to D3 releases the canvas |
| Browser errors and origins | No uncaught exceptions or unexpected external requests in the atlas check |
| Production headers | CSP present, `object-src 'none'`, no `X-Powered-By`; generated mesh has immutable cache policy |
| README references | All local links/images resolve; embedded HTML tags are balanced |
| Secret-pattern review | No private-key, GitHub-token, AWS-access-key or OpenAI-key patterns found in candidate text files; this is a bounded scan, not a guarantee |
| `git diff --cached --check` | Passed |

Browser environment: headless Chrome on macOS; the atlas used SwiftShader software WebGL2. These checks are functional/layout evidence, not real-device performance measurements or a WCAG certification. Local scripts and evidence are retained in `/tmp/kalakriti-commit-*.log`, `/tmp/kalakriti-navigation-report.json`, `/tmp/kalakriti-explore-report.json` and `/tmp/kalakriti-bihar-journal-report.json` for this session.

## Outstanding findings

The fresh **production** dependency audit exits nonzero: **28 advisories — 3 critical, 11 high, 12 moderate, 2 low**. They affect pre-existing versions of Next.js, source-map-js and Zod. See [the updated security review](SECURITY_REVIEW.md) for scope and advisory references. No clean-security claim or framework upgrade is included in this commit.

Cultural copy and generated illustrations remain editorial introductions and previews. The legacy geographic dataset, maker-reviewed attribution, authentic product photographs and actual commerce workflows remain follow-up work. Existing pnpm configuration and optional-sharp advisories are recorded; they did not fail validation.
