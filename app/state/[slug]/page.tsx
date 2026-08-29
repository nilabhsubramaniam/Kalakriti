import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import SectionHead from '@/components/state/SectionHead';
import StateHero from '@/components/state/StateHero';
import StateNav from '@/components/state/StateNav';
import HighlightStrip from '@/components/state/HighlightStrip';
import CultureStrip from '@/components/state/CultureStrip';
import CraftStory from '@/components/state/CraftStory';
import DistrictMapPanel from '@/components/state/DistrictMapPanel';
import ClosingCTA from '@/components/state/ClosingCTA';
import RevealRoot from '@/components/state/RevealRoot';
import { ExperienceList, TourismStrip } from '@/components/state/StateAside';

import { statePage, stateSlugs } from '@/lib/states';
import { stateThemeVars } from '@/lib/states/theme';
import { themeFor } from '@/lib/stateThemes';

/* Every state page is prerendered at build time — no request-time work, and
   the route stays static like the rest of the site. */
export function generateStaticParams() {
  return stateSlugs().map(slug => ({ slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const page = statePage(params.slug);
  if (!page) return {};
  const craftNames = page.crafts.slice(0, 4).map(c => c.name).join(', ');
  return {
    title: `${page.title} — ${themeFor(page.state).art} | Kalakriti`,
    description: `${page.tagline}. ${craftNames} and more, sourced from the districts that make them.`,
  };
}

export default function StatePageRoute({ params }: { params: { slug: string } }) {
  const page = statePage(params.slug);
  if (!page) notFound();

  const theme = themeFor(page.state);
  const districtName = (id: string) =>
    page.districts.find(d => d.id === id)?.name ?? id;
  const productsOf = (craftId: string) =>
    page.products.filter(p => p.craft === craftId);

  return (
    <article className="kk-st" style={stateThemeVars(page.state)}>
      <RevealRoot />
      {/* Reveals start hidden and are switched on by the observer. With JS
          off that never happens, so the page must un-hide itself. */}
      <noscript>
        <style>{'[data-reveal] > * { opacity: 1 !important; transform: none !important; }'}</style>
      </noscript>

      <StateHero page={page} />
      <HighlightStrip page={page} />
      <StateNav />

      {/* ── The map ───────────────────────────────────────────────────── */}
      <section className="kk-st-section" id="map">
        <SectionHead
          label="The ground"
          title="Where the work is made"
          motif={theme.motif}
          lede="Craft here is local to the point of being village-specific. Select a district to fly to it."
        />
        <DistrictMapPanel
          geojson={page.geojson}
          districtProperty={page.districtProperty}
          districts={page.districts}
        />
      </section>

      {/* ── Culture ───────────────────────────────────────────────────── */}
      <section className="kk-st-section kk-st-section--wash" id="culture">
        <SectionHead label="The story" title={page.tagline} motif="kalash" />
        <CultureStrip chapters={page.chapters} />
      </section>

      {/* ── Crafts and shop, merged ───────────────────────────────────── */}
      <section className="kk-st-section" id="crafts">
        <SectionHead
          label="Art, craft & shop"
          title="The living traditions"
          motif="peacock"
          lede="Each is still practised commercially by households in the district named — not revived for a museum. Open one to read it and to buy from it."
        />
        <div className="kk-st-crafts" data-reveal>
          {page.crafts.map((craft, i) => (
            <CraftStory
              key={craft.id}
              craft={craft}
              products={productsOf(craft.id)}
              districtName={districtName(craft.district)}
              open={i === 0}
            />
          ))}
        </div>
      </section>

      {/* ── Experiences ───────────────────────────────────────────────── */}
      <section className="kk-st-section kk-st-section--wash" id="experiences">
        <SectionHead
          label="Experiences"
          title="Sit down with the makers"
          motif="lotus"
          lede="Booked directly with the households and collectives that run them."
        />
        <ExperienceList experiences={page.experiences} />
      </section>

      {/* ── Tourism ───────────────────────────────────────────────────── */}
      <section className="kk-st-section kk-st-section--quiet" id="visit">
        <SectionHead
          label="While you are here"
          title="Worth the detour"
          motif="stupa"
          lede="The craft is the reason to come. These are the reasons to stay a few days longer."
        />
        <TourismStrip destinations={page.destinations} />
      </section>

      <ClosingCTA state={page.title} motif={theme.motif} shloka={theme.shloka.native} />
    </article>
  );
}
