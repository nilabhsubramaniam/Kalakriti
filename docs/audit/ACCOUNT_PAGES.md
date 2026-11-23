# Account pages — sign in and sign up (design and form only)

> Branch `feat/login-signup`, 2026-11-22. **No backend:** the forms validate and complete in the browser, then say plainly that nothing was sent or stored.

## Routes

| Route | Rendering | Content |
|---|---|---|
| `/login` | Static (`○`), `noindex` | Sign in with email + password, an emailed one-time link, or a mobile number (SMS code) |
| `/signup` | Static (`○`), `noindex` | First name and last name, then email + password, email link, or mobile number |

Both pages use the Mithila palette (`stateThemeVars('Bihar')`) and a switch between the two routes.

## Files

| File | Role |
|---|---|
| `lib/account/validation.ts` | Field rules, shared and React-free so a server can reuse them |
| `lib/account/client.ts` | `submitAccountRequest()` — the **only** place to connect an API. Returns `{ status: 'preview' }` today and makes no request |
| `components/account/AccountForm.tsx` | Client form: method switch, validation, error summary, result state |
| `components/account/AccountShell.tsx` | Server-rendered account shell, Mithila form panel, heading and route switch |
| `components/account/AccountBackdrop.tsx` | Client-only slideshow controls and five regional background scenes |
| `app/login/page.tsx`, `app/signup/page.tsx` | Routes and metadata |
| `components/layout/TopNav.tsx` | Account icon beside the cart from 768px; "Sign in" in the menu up to 900px |
| `app/globals.css` | One appended section, "Account pages" |

## Behaviour

- **Methods:** "Password", "Email link" or "Mobile" (a one-time SMS code). The mobile method needs no email; sign-up by mobile asks for names and number only. "Forgot your password?" switches sign-in to the email-link method. Switching method drops errors for fields that are no longer shown.
- **Mobile number:** a country-code select (+91 India by default, then +1, +44, +971, +65, +61, +49, +33; the code leads each label so it survives truncation) and the number. Pasted forms such as "+91 98765-43210" or "098765 43210" are normalised. India requires 10 digits starting 6–9; other codes 6+ digits within the E.164 15-digit limit. `e164()` in `validation.ts` produces the format an SMS provider expects.
- **Names:** letters from any script, combining marks, spaces, apostrophes, full stops and hyphens; 50 characters max. Tested with "Sītā", "O'Neil-Kumari" and "अनु".
- **Email:** a loose format check; the address is only proven by the email that will be sent to it.
- **Password (sign-up):** at least 8 characters with a letter and a number, 128 max. Sign-in only checks it is present.
- **Validation timing:** on submit, then on blur and while typing for fields already judged.
- **Errors:** a summary that takes focus and links to each field, plus an inline message with `aria-invalid` and `aria-describedby`.
- **Result:** the heading takes focus. The password is cleared from memory. "Back to the form" resets everything.
- **Autocomplete:** `given-name`, `family-name`, `email`, `current-password` / `new-password`, `tel-country-code` / `tel-national` (`type="tel"`), so browsers and password managers fill them.

## Connecting a backend later

Replace the body of `submitAccountRequest` with a same-origin request (the CSP allows only `connect-src 'self'`), map responses onto `AccountResult`, and remove the preview copy in `AccountForm.tsx` (the result text and the `kk-auth-preview` note). Validation should also run on the server using `lib/account/validation.ts`. The mobile method additionally needs an SMS provider, a code-entry step, rate limiting and abuse protection; none exist yet. Real sign-in will need per-request rendering for session handling, which is a change to the site's static posture (CLAUDE.md §13) and to the security review.

## Verification

- Type-check and strict lint pass. The build generates 452 pages (the previous 450 plus `/login` and `/signup`, both static).
- A scripted browser test passes 38 of 38 checks. It covers empty and invalid submits, error summary focus, live re-validation, show/hide password, valid sign-up with non-Latin names, all three methods, the forgot-password switch, reset, route switch state and autocomplete attributes. Mobile checks include Indian number rules, a country-code change re-judging the number, pasted "+91" and trunk "0" numbers, and errors clearing when the method changes. It also confirms that submitting makes no request (only a normal Next.js link prefetch was seen).
- The regression probe compared all 10 existing page types at 320, 390, 768, 1024 and 1440px against the previous build. Nothing changed.
- The new pages have no contrast failures, no heading skips and no horizontal overflow at 390 or 1440px.
- Header measured at 320–1440px. The account icon appears from 768px because it does not fit at narrower widths.
- **Pre-existing, not introduced here:** between 641 and ~650px, the header search box extends 10px past the viewport edge.

## Full-page carousel redesign — 23 November 2026

The login/signup design now uses a viewport-filling, fixed background slideshow shared through `components/account/AccountBackdrop.tsx`. Existing illustrations from the stitching courtyard, Mithila, Tripura, Sikkim and Mizoram provide five scenes. No new image, dependency, external origin or backend is introduced.

`AccountShell.tsx` keeps a server-rendered ivory form panel in Mithila’s theme. Desktop pairs it with a large craft introduction; phones use a compact scene caption and controls above the form. An account-specific footer replaces the large marketplace footer only on `/login` and `/signup`; `SiteFooter.tsx` otherwise keeps its existing behaviour. Account-only CSS is appended under “Immersive account pages”. Forms scroll normally; the backdrop fills the viewport throughout, without an inner scrolling panel or layout-moving carousel.

- Eight-second automatic progression and a restrained crossfade; no constant pan or zoom.
- First scene gets image priority; the next scene preloads at low priority. Further images mount one scene ahead, with manual selection waiting until the target image is ready.
- Pause/play and five labelled scene selectors; selecting a scene pauses autoplay. Hover/focus on controls pauses automatic movement. Explicit play resumes it. Hidden tabs stop progressing.
- Reduced-motion preferences disable autoplay and fades, with manual scene selection available. Listeners and intervals are cleaned up on unmount.
- Scene text is not an automatic live announcement. Images are decorative; a visible illustration credit retains provenance.
- Inputs, method switching, preview copy, validation, show/hide password, focus handling and the no-request submission seam remain unchanged in `AccountForm.tsx` and `lib/account/`.
- Both routes remain static and `noindex`. No authentication, email delivery, SMS, checkout or account persistence is implied.

This revision does not create a branch, commit, push or deployment; earlier staged account work and all regional chapters remain intact.

### Redesign validation

- TypeScript and strict lint pass with zero warnings; production build retains 567 static outputs. Both account routes remain static and `noindex`.
- Actual headless Chrome checks and captures pass at 320, 390, 768, 1024 and 1440 CSS pixels on both routes: no horizontal overflow, viewport-filling background, clear navigation boundaries, inputs at least 16px, a submit target at least 44px and 44px scene selectors under a coarse pointer. Long forms use normal document scrolling.
- Password, email-link and mobile flows pass on login and signup, including error-summary/result focus, show/hide password, reset, forgot-password switching and non-Latin names. No non-GET submission request occurs. `AccountForm.tsx` and `lib/account/` are unchanged.
- Real eight-second progression, pause, play, ready-only manual changes and live reduced-motion changes pass. Form input, height and document position remain stable across scene changes. Only two scene images mount initially. No runtime exceptions were reported.
- Client navigation to signup clears the prior form. The home, Bihar, Tripura, Sikkim and cart retain their captured headings, marketplace footer classes and navbar backgrounds; full pixel-identical regression coverage is not claimed.
- No authentication service, deployment, dependency, CSP, map or regional-page behaviour is added or changed. These functional checks are not hardware performance benchmarks or comprehensive accessibility certification.

- Final phone captures confirm the form H1 is the first heading; the large background slogan is decorative paragraph text. Text colours sampled against rendered form-panel pixels have a minimum measured contrast of 7.48:1 in those captures. This is a form-text sample, not a certification of all photographic scene backgrounds.
- Both redesigned pages are available on the normal development server at port 3000.
