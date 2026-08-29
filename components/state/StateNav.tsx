/**
 * Sticky section nav.
 *
 * A five-screen page still benefits from telling you what is on it. Plain
 * anchors and `position: sticky` — no scroll-spy, no client JS, no listener
 * running on every frame of every scroll.
 *
 * It sticks below the site bar; the offset is shared with `scroll-margin-top`
 * on the sections so an anchor jump does not land under either bar.
 */
const LINKS = [
  { href: '#map', label: 'The map' },
  { href: '#culture', label: 'Culture' },
  { href: '#crafts', label: 'Crafts & shop' },
  { href: '#experiences', label: 'Experiences' },
  { href: '#visit', label: 'Visit' },
];

export default function StateNav() {
  return (
    <nav className="kk-st-nav" aria-label="Sections">
      <ul className="kk-st-nav-list">
        {LINKS.map(l => (
          <li key={l.href}>
            <a className="kk-st-nav-link kk-label" href={l.href}>
              {l.label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}
