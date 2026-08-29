import type { StatePage } from '@/lib/states/types';

/**
 * Four numbers, immediately under the hero.
 *
 * The old page made you scroll ten screens to learn how much was here. This
 * says it in one line: the scale of the catalogue, and how much of it is
 * GI-registered — the fact that separates this from a souvenir shop.
 *
 * Counts are derived, never written down, so they cannot drift from the data.
 */
export default function HighlightStrip({ page }: { page: StatePage }) {
  const gi = page.crafts.filter(c => c.gi).length;

  const stats: Array<{ n: number; label: string }> = [
    { n: page.crafts.length, label: 'living crafts' },
    { n: gi, label: 'GI registered' },
    { n: page.districts.length, label: 'districts' },
    { n: page.experiences.length, label: 'experiences' },
  ];

  return (
    <div className="kk-st-stats" data-reveal>
      {stats.map(s => (
        <div key={s.label} className="kk-st-stat">
          <span className="kk-st-stat-n">{s.n}</span>
          <span className="kk-st-stat-label kk-label">{s.label}</span>
        </div>
      ))}
    </div>
  );
}
