import type { Metadata } from 'next';
import { notFound } from 'next/navigation';

import ChhattisgarhJournal from '@/components/state/ChhattisgarhJournal';
import PunjabJournal from '@/components/state/PunjabJournal';
import HaryanaJournal from '@/components/state/HaryanaJournal';
import DelhiJournal from '@/components/state/DelhiJournal';
import ChandigarhJournal from '@/components/state/ChandigarhJournal';
import KeralaJournal from '@/components/state/KeralaJournal';
import KarnatakaJournal from '@/components/state/KarnatakaJournal';
import TamilNaduJournal from '@/components/state/TamilNaduJournal';
import AndhraPradeshJournal from '@/components/state/AndhraPradeshJournal';
import TelanganaJournal from '@/components/state/TelanganaJournal';
import PuducherryJournal from '@/components/state/PuducherryJournal';
import LakshadweepJournal from '@/components/state/LakshadweepJournal';
import AndamanNicobarJournal from '@/components/state/AndamanNicobarJournal';
import MadhyaPradeshJournal from '@/components/state/MadhyaPradeshJournal';
import HimachalPradeshJournal from '@/components/state/HimachalPradeshJournal';
import UttarakhandJournal from '@/components/state/UttarakhandJournal';
import UttarPradeshJournal from '@/components/state/UttarPradeshJournal';
import JharkhandJournal from '@/components/state/JharkhandJournal';
import OdishaJournal from '@/components/state/OdishaJournal';
import WestBengalJournal from '@/components/state/WestBengalJournal';
import JammuKashmirJournal from '@/components/state/JammuKashmirJournal';
import BiharJournal from '@/components/state/BiharJournal';
import SectionHead from '@/components/state/SectionHead';
import StateHero from '@/components/state/StateHero';
import StateNav, { type NavLink } from '@/components/state/StateNav';
import HighlightStrip from '@/components/state/HighlightStrip';
import CultureStrip from '@/components/state/CultureStrip';
import CraftStory from '@/components/state/CraftStory';
import CraftBrief from '@/components/state/CraftBrief';
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
  const theme = themeFor(page.state);
  const crafts = (page.crafts?.map(c => c.name) ?? page.craftNames ?? []).slice(0, 4).join(', ');
  return {
    title: `${page.title} — ${theme.art} | Kalakriti`,
    description: crafts
      ? `${page.intro} Explore ${crafts}.`
      : page.intro,
  };
}

export default function StatePageRoute({ params }: { params: { slug: string } }) {
  const page = statePage(params.slug);
  if (!page) notFound();
  if (page.slug === 'andaman-and-nicobar') return <AndamanNicobarJournal />;
  if (page.slug === 'lakshadweep') return <LakshadweepJournal />;
  if (page.slug === 'puducherry') return <PuducherryJournal />;
  if (page.slug === 'telangana') return <TelanganaJournal />;
  if (page.slug === 'andhra-pradesh') return <AndhraPradeshJournal />;
  if (page.slug === 'tamil-nadu') return <TamilNaduJournal />;
  if (page.slug === 'karnataka') return <KarnatakaJournal />;
  if (page.slug === 'kerala') return <KeralaJournal />;
  if (page.slug === 'chandigarh') return <ChandigarhJournal />;
  if (page.slug === 'delhi') return <DelhiJournal />;
  if (page.slug === 'haryana') return <HaryanaJournal />;
  if (page.slug === 'punjab') return <PunjabJournal />;
  if (page.slug === 'chhattisgarh') return <ChhattisgarhJournal />;
  if (page.slug === 'madhya-pradesh') return <MadhyaPradeshJournal />;
  if (page.slug === 'himachal-pradesh') return <HimachalPradeshJournal />;
  if (page.slug === 'uttarakhand') return <UttarakhandJournal />;
  if (page.slug === 'uttar-pradesh') return <UttarPradeshJournal />;
  if (page.slug === 'jharkhand') return <JharkhandJournal />;
  if (page.slug === 'odisha') return <OdishaJournal />;
  if (page.slug === 'west-bengal') return <WestBengalJournal />;
  if (page.slug === 'jammu-and-kashmir') return <JammuKashmirJournal />;
  if (page.slug === 'bihar') return <BiharJournal page={page} />;

  const theme = themeFor(page.state);
  const districtName = (id: string) =>
    page.districts?.find(d => d.id === id)?.name ?? id;
  const productsOf = (craftId: string) =>
    page.products?.filter(p => p.craft === craftId) ?? [];

  /* Which sections this state actually has. The nav is built from the same
     flags, so it can never advertise a section that did not render. */
  const hasMap = Boolean(page.geojson && page.districtProperty && page.districts?.length);
  const hasChapters = Boolean(page.chapters?.length);
  const hasCrafts = Boolean(page.crafts?.length);
  const hasBriefs = !hasCrafts && Boolean(page.craftNames?.length);
  const hasExperiences = Boolean(page.experiences?.length);
  const hasDestinations = Boolean(page.destinations?.length);

  const links: NavLink[] = [
    hasMap && { href: '#map', label: 'The map' },
    hasChapters && { href: '#culture', label: 'Culture' },
    (hasCrafts || hasBriefs) && {
      href: '#crafts',
      label: hasCrafts ? 'Crafts & shop' : 'Crafts',
    },
    hasExperiences && { href: '#experiences', label: 'Experiences' },
    hasDestinations && { href: '#visit', label: 'Visit' },
  ].filter(Boolean) as NavLink[];

  return (
    <article className="kk-st" data-state={page.slug} style={stateThemeVars(page.state)}>
      <RevealRoot />
      {/* Reveals start hidden and are switched on by the observer. With JS
          off that never happens, so the page must un-hide itself. */}
      <noscript>
        <style>{'[data-reveal] > * { opacity: 1 !important; transform: none !important; }'}</style>
      </noscript>

      <StateHero page={page} />
      <HighlightStrip page={page} art={theme.art} />
      <StateNav links={links} />

      {/* ── The map ───────────────────────────────────────────────────── */}
      {hasMap && (
        <section className="kk-st-section" id="map">
          <SectionHead
            label="The ground"
            title="Where the work is made"
            motif={theme.motif}
            lede="Craft here is local to the point of being village-specific. Select a district to fly to it."
          />
          <DistrictMapPanel
            geojson={page.geojson!}
            districtProperty={page.districtProperty!}
            districts={page.districts!}
          />
        </section>
      )}

      {/* ── Culture ───────────────────────────────────────────────────── */}
      {hasChapters && (
        <section className="kk-st-section kk-st-section--wash" id="culture">
          <SectionHead label="The story" title={page.tagline} motif="kalash" />
          <CultureStrip chapters={page.chapters!} />
        </section>
      )}

      {/* ── Crafts, with the shop folded in where there is one ─────────── */}
      {(hasCrafts || hasBriefs) && (
        <section className="kk-st-section" id="crafts">
          <SectionHead
            label={hasCrafts ? 'Art, craft & shop' : 'Art & craft'}
            title="The living traditions"
            motif="peacock"
            lede={hasCrafts
              ? `${page.craftIntro ?? 'Explore the stories, materials and processes behind each tradition.'} Products and prices are a catalogue preview; online shopping is coming soon.`
              : 'A closer look at selected regional traditions: the materials, the patterns and the details worth noticing. These are craft introductions; product listings will follow.'}
          />
          {hasCrafts ? (
            <div className="kk-st-crafts" data-reveal>
              {page.crafts!.map((craft, i) => (
                <CraftStory
                  key={craft.id}
                  craft={craft}
                  products={productsOf(craft.id)}
                  districtName={districtName(craft.district)}
                  open={i === 0}
                />
              ))}
            </div>
          ) : (
            <CraftBrief crafts={page.craftNames!} art={theme.art} guides={page.craftGuides} />
          )}
        </section>
      )}

      {/* ── Experiences ───────────────────────────────────────────────── */}
      {hasExperiences && (
        <section className="kk-st-section kk-st-section--wash" id="experiences">
          <SectionHead
            label="Experiences"
            title="Sit down with the makers"
            motif="lotus"
            lede="A preview of regional experiences. Bookings are not yet available; details and prices will be confirmed before launch."
          />
          <ExperienceList experiences={page.experiences!} />
        </section>
      )}

      {/* ── Tourism ───────────────────────────────────────────────────── */}
      {hasDestinations && (
        <section className="kk-st-section kk-st-section--quiet" id="visit">
          <SectionHead
            label="While you are here"
            title="Worth the detour"
            motif="stupa"
            lede="The craft is the reason to come. These are the reasons to stay a few days longer."
          />
          <TourismStrip destinations={page.destinations!} />
        </section>
      )}

      <ClosingCTA
        state={page.title}
        motif={theme.motif}
        shloka={theme.shloka.native}
        detailed={hasCrafts}
      />
    </article>
  );
}
