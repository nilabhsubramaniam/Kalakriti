# Navbar menu repair

Implemented locally on 23 November 2026. No branch, commit, push or deployment is included.

## Problems verified before the change

- The desktop directory used large grid rows, leaving empty space beneath shorter region groups and requiring scrolling to reach the last entries. Names were small and craft labels frequently truncated.
- On phones the expanded directory rendered all 36 links in a long sheet (2,242px of scroll content at 320/390px in the test viewport).
- The wrapper’s blur handler treated a null focus destination as leaving the menu; non-focusable interior areas and scrollbar interactions could dismiss the disclosure.
- At 641px the header search extended to approximately x=651px, even though document overflow measurements alone did not flag it.
- Fixed-position menu offsets were displaced from the header edge by its border/containing block.

## Implementation

`components/layout/TopNav.tsx` retains ordinary navigation links and the existing 36-region registry. Desktop uses a compact column directory; phones use seven expandable region groups with the current region’s group open by default. Hidden lists retain their links in the DOM but are removed from focus and accessibility navigation by `hidden`.

The disclosure now follows its trigger in keyboard order. Arrow Down opens it and focuses its first visible control; Escape closes it and returns focus. Pointer actions outside and focus moving to another control dismiss it, while clicking non-focusable content inside does not. Match-media and document listeners clean up on unmount. This remains a disclosure navigation, not an ARIA application menu or modal dialog.

A labelled CSS section in `app/globals.css` anchors the panel to the navbar, uses the registered theme tokens, increases name readability, hides redundant truncated craft subtitles, and provides 44px interactive targets. Compact search widths fix the 641–650px edge case; search input text is 16px. The main links, account/cart actions, regional themes and route behaviour are retained.

No dependency, backend, CSP, map, account form or catalogue change is introduced.

## Validation

- TypeScript and strict lint pass with zero warnings; isolated production build passes with 567 static outputs. No dependency or route count change.
- Actual headless Chrome checks pass on home, Bihar and login at 320, 390, 641, 650, 768, 1024 and 1440px: panel aligned to the header, no horizontal overflow, search inside the viewport, 16px search input, and 44px state-link targets.
- All 36 chapter links are reachable through the seven mobile groups. The current region’s group opens by default. Sikkim navigation and active-link marking pass.
- Clicking headings keeps the disclosure open. Arrow Down opens/focuses the menu; Tab enters the menu directly; Escape closes it and restores trigger focus. Moving focus outside, focusing search and clicking outside dismiss it.
- At 390 × 667, the panel scrolls within the viewport without scrolling the page behind it.
- Home/phone default menu scroll content drops from 2,242px to 834px; desktop content at 1440px drops from 1,056px to 744px. Mobile uses collapsed groups, so these are default-view comparisons rather than simultaneous visibility of all state links.
- Sampled state-name, label and heading text contrast against computed menu backgrounds has a minimum of 14.71:1 across the tested home, Bihar and login themes. Decorative motif colours are excluded; comprehensive accessibility certification is not claimed.
- Before/after captures at 320, 768 and 1440px were inspected. No runtime exceptions were reported. The normal development server remains available on port 3000.

## Navigation order — 28 November 2026

The desktop header now follows: primary page links → search → Explore India → States → cart → account. Regional chapter links retain their existing labels and destinations. DOM order matches the desktop visual and keyboard order.

On phones, the 124px header keeps the brand and menu/cart/account actions above search and Explore India. The profile action is now directly available below 768px as well. The compact brand leaves room for three 44px controls at 320px. From 641–767px the logo and search widths are reduced to accommodate the profile action. Primary page links remain available inside the menu whenever the full navigation row is hidden, including 901–1280px (previously the links disappeared in that range).

Validation: TypeScript and strict ESLint pass. Headless Chrome checks cover home, Explore, Bihar and Assam at 320, 390, 640, 641, 650, 768, 1024, 1280, 1281 and 1440px. Checks include bounds, 44px utility controls and compact-menu page-link visibility. Screenshots at 390 and 1440px were inspected. The isolated production build retains 567 static outputs.

## Expandable search — 28 November 2026

`components/layout/CraftSearch.tsx` now renders a 44px search trigger in the established navigation order. Clicking it opens a themed panel below the fixed header and focuses a 16px search input. The panel does not change header height or displace adjacent actions. It uses the existing craft/region registry search and links.

A Lucide X button, labelled “Clear search”, appears only when text is present. It clears the whole query, removes stale suggestions and returns focus to the input. The browser's duplicate native cancel icon is hidden. Escape closes the panel and restores trigger focus; outside pointer/focus and route changes also dismiss it. Closing and reopening preserves the query until it is cleared or a result is followed. The panel width is limited to the viewport and its contents scroll on short screens.

TypeScript and strict lint pass. Browser checks cover home, Explore and Bihar at 320, 390, 641, 768, 1024 and 1440px for panel bounds, input focus, filtering, conditional 44px clear controls, complete clearing and Escape focus restoration. The isolated production build remains static.
