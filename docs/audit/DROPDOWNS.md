# Dropdowns and their icons — 2026-11-23

> Applied on top of commit `978298b`; uncommitted when written.

## Inventory

| Dropdown | Where | Finding | Fix |
|---|---|---|---|
| State picker | `/explore` | Browser arrow 2–4px from the edge; unthemed; longest name cut at 320px | `SelectField`; drops under its label when the name would not fit |
| Shopping region | Chapters, product pages, cart | Same arrow; 14px text (iOS zooms on focus); text flush to the tinted box on product pages | `SelectField`, 16px; box padding from 381px |
| Country code | `/login`, `/signup` (Mobile) | Code cut to "+91 I…"; no focus ring | `SelectField`; stacked up to 380px, 176px column above |
| Search results | Header | Focus ring around part of the field; browser-blue clear icon; panel overlapped the header; 10px captions; "silk" answered "Bidriware"; Escape ignored from a result | One ring on the field; themed clear icon; panel hangs from the header edge; 12px captions; shows the craft that matched; Escape works throughout |
| States menu | Header | Layout sound. Motifs 15px at 75% and arrows at 65% opacity; double divider on phones; chevrons 4px off the arrows; accessible name lacked the visible "Menu" | 20px motifs, full-strength icons darkened within each region's pigment; divider, alignment and name fixed |
| Craft accordion | `components/state/CraftStory.tsx` | Old overview template; not reachable, every state now has a chapter | Left as it is |

`components/shared/SelectField.tsx` is a native `<select>` plus a lucide chevron that ignores the pointer. Use it for any new select. Styles are one appended section of `app/globals.css`. No dependency, CSP or route changed; the clear icon is a same-document `data:` mask, already allowed by `img-src`.

## Verification

- Type-check and strict lint pass. A production build in an isolated copy generates 567 pages, the same as before. `pnpm validate` was not run: `.next` and `.next-relief` may both be in use by running servers.
- 37 of 37 scripted Chrome checks: region and price change, choice persists to the cart, clicking the icon reaches the select, keyboard focus ring, search on four page types at 390/700/1024/1440px, Escape, ArrowDown, accessible names, alignment, longest option at 320px, no page errors.
- 12 pages at 320/390/768/1024/1440px before and after: 50 of 60 identical. Ten differ in page height only: 1px on six (cart, Kerala and Assam chapters) from 16px select text, 24px (57px at 1024px, where the select moves under its label) on the product page, 30px on `/explore` at 320px. No horizontal overflow; header height unchanged.
- Not checked: Safari and Firefox. The clear-icon rule is WebKit/Chromium only; Firefox shows none.
