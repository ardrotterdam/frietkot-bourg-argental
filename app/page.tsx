import type { Metadata } from "next";
import CtaButton from "./components/cta-button";
import FrietkotWarpSection from "./components/frietkot-warp-section";
import HeroCraft from "./components/hero-craft";
import NightTimelineClock from "./components/night-timeline-clock";
import RevealImage from "./components/reveal-image";
import SectionHeading from "./components/section-heading";
import StatCounters from "./components/stat-counters";

export const metadata: Metadata = {
  title: "Accueil · Frietkot Bourg-Argental",
  description:
    "Friterie belge premium à Bourg-Argental : frites maison, bières belges et chambres d'hôtes.",
};

export default function HomePage() {
  return (
    <>
      <NightTimelineClock />
      <main className="text-white">
        <HeroCraft />

        <div className="bg-[#050505]">
          <section
            data-night-section
            className="relative border-t border-[#D4A853]/15 px-6 py-20 md:px-10"
          >
            <div className="mx-auto w-full max-w-7xl">
              <p className="section-eyebrow">
                FRITERIE BELGE · DEPUIS 1990 · BOURG-ARGENTAL
              </p>
              <h1
                className="mt-6 max-w-4xl font-[var(--font-fraunces)] text-[length:var(--font-h1)] font-normal leading-[1.05] text-[#f5efe3] [font-style:italic]"
                style={{ fontFeatureSettings: '"opsz" 72' }}
              >
                <span className="block">Le vrai goût de la Belgique,</span>
                <span className="mt-1 block text-[#D4A853] not-italic">au cœur de la Loire.</span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-[#f5efe3]/90 md:text-xl">
                Des frites coupées et cuites sur place. Des bières trappistes
                sélectionnées avec soin. Une auberge pour prolonger la soirée. Chez
                nous, on ne triche pas — on régale.
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <CtaButton href="/la-carte">Découvrir la carte →</CtaButton>
                <CtaButton href="/auberge" variant="ghost">
                  Réserver une chambre
                </CtaButton>
              </div>
            </div>
          </section>

          <FrietkotWarpSection />

          <section
            data-night-section
            className="px-6 py-20 md:px-10"
          >
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="premium-card rounded-3xl p-8 md:p-12">
                <SectionHeading
                  eyebrow="LE MÉTIER"
                  title="L'art de la frite, fait maison."
                />
                <p className="mt-6 max-w-3xl text-[#c8c1b5] md:text-lg">
                  Chaque matin, les pommes de terre sont épluchées, coupées, et
                  plongées dans nos bains deux fois — comme il se doit. Une première
                  cuisson douce, un repos, puis la friture finale. C&apos;est cette
                  double cuisson, et rien d&apos;autre, qui donne aux frites belges
                  leur cœur fondant et leur croûte qui craque.
                </p>
                <p className="mt-5 max-w-3xl text-[#c8c1b5] md:text-lg">
                  Pas de surgelé. Pas de raccourci. Juste la méthode, apprise à
                  Bruxelles, transmise depuis 1990.
                </p>
              </article>
              <aside className="premium-card rounded-3xl p-8">
                <StatCounters />
              </aside>
            </div>
            <div className="mx-auto mt-8 grid w-full max-w-7xl gap-6 md:grid-cols-2">
              <div className="relative min-h-[320px]">
                <RevealImage
                  src="/images/restaurant/frietkot-friteuse-professionnelle.webp"
                  alt="Friture — frites belges"
                  className="relative min-h-[320px] w-full overflow-hidden rounded-3xl"
                  imageClassName="object-cover"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                {/* TODO: remplacer par photo friture propriétaire (haute résolution) */}
              </div>
            </div>
          </section>

          <section data-night-section className="px-6 py-20 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <SectionHeading
                eyebrow="NOTRE CARTE"
                title="Simple, généreux, belge."
                description="Un aperçu de nos incontournables, dans un esprit friterie authentique."
              />
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {[
                  {
                    t: "Les frites & leurs sauces",
                    d: "Cornet classique, grand cornet, supplément. Mayonnaise maison, andalouse, samouraï, ail, moutarde. Le choix est large, la base est une.",
                  },
                  {
                    t: "Les plats du jour",
                    d: "Carbonade flamande mijotée, vol-au-vent, boulets sauce liégeoise. Des classiques belges, préparés chaque matin selon ce que le marché propose.",
                  },
                  {
                    t: "Salades, gaufres & glaces",
                    d: "Des salades fraîches (poulet, thon, saumon) pour les repas plus légers. Et pour finir — gaufres de Liège, crèmes brûlées, glaces artisanales.",
                  },
                ].map((c) => (
                  <article
                    key={c.t}
                    className="premium-card overflow-x-auto rounded-3xl p-7 [scrollbar-width:thin] md:overflow-x-visible"
                    data-cursor="menu"
                  >
                    <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3] [font-style:italic]">
                      {c.t}
                    </h3>
                    <p className="mt-4 min-w-[200px] text-[#c8c1b5]">{c.d}</p>
                  </article>
                ))}
              </div>
              <div className="mt-10">
                <CtaButton href="/la-carte">Voir toute la carte →</CtaButton>
              </div>
            </div>
          </section>

          <section
            data-night-section
            className="px-6 py-20 md:px-10"
          >
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_1.1fr]">
              <article className="premium-card rounded-3xl p-8 md:p-12">
                <SectionHeading
                  eyebrow="BIÈRES BELGES"
                  title="Chimay, Herberg, Paljas, Duvel."
                  description="Une friterie belge sans bière belge, c'est une histoire à moitié racontée."
                />
                <p className="mt-6 text-[#c8c1b5]">
                  Nous avons composé une sélection courte mais juste — trappistes,
                  blondes fortes, brunes d&apos;abbaye. Chacune choisie pour
                  accompagner un plat, une saison, un moment.
                </p>
                <p className="mt-4 text-[#c8c1b5]">Demandez au comptoir : on vous orientera.</p>
                <div className="mt-8">
                  <CtaButton href="/bieres-belges" variant="ghost">
                    Voir la sélection →
                  </CtaButton>
                </div>
              </article>
              <div className="relative min-h-[360px]">
                <div data-cursor-beer>
                <RevealImage
                  src="/images/beer/frietkot-selection-bieres-belges.webp"
                  alt="Sélection de bières belges"
                  className="h-full min-h-[360px] w-full"
                  imageClassName="object-cover"
                  fill
                  sizes="(min-width: 1024px) 50vw, 100vw"
                />
                </div>
                {/* TODO: remplacer par photo frigo / Paljas haute résolution */}
              </div>
            </div>
          </section>

          <section data-night-section className="px-6 py-20 md:px-10" data-cursor-room>
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="premium-card rounded-3xl p-8 md:p-12">
                <SectionHeading
                  eyebrow="CHAMBRES D'HÔTES · NOUVEAU"
                  title="Prolonger la soirée."
                />
                <p className="mt-6 text-[#c8c1b5]">
                  À deux pas de la friterie, nous ouvrons nos chambres. Trois espaces
                  confortables, simples et décorés dans l&apos;esprit belge — un clin
                  d&apos;œil à Duvel, à Paljas, à la convivialité du nord.
                </p>
                <p className="mt-4 text-[#c8c1b5]">
                  Pour une escapade gourmande, un week-end dans le Pilat, ou une
                  halte sur la route vers le sud.
                </p>
                <div className="mt-8">
                  <CtaButton href="/auberge">Découvrir les chambres →</CtaButton>
                </div>
              </article>
              <div className="relative min-h-[360px]" data-cursor-room>
                <RevealImage
                  src="/images/rooms/chambre-duvel-auberge-frietkot.webp"
                  alt="Chambre d'hôtes Frietkot"
                  className="h-full min-h-[360px] w-full"
                  imageClassName="object-cover"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
                {/* TODO: photo chambre propriétaire */}
              </div>
            </div>
          </section>

          <section
            data-night-section
            className="px-6 pb-24 pt-6 md:px-10"
          >
            <div className="mx-auto w-full max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-black/40 p-10 shadow-[0_28px_75px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-14">
              <SectionHeading
                eyebrow="NOUS TROUVER"
                title="7 place d'Armeville, Bourg-Argental."
              />
              <div className="mt-8 grid gap-6 text-[#f5efe3] md:grid-cols-3">
                <p>
                  <span className="block text-sm uppercase tracking-[0.16em] text-[#D4A853]">
                    Adresse
                  </span>
                  7 place d&apos;Armeville, 42220 Bourg-Argental
                </p>
                <p>
                  <span className="block text-sm uppercase tracking-[0.16em] text-[#D4A853]">
                    Téléphone
                  </span>
                  07 84 42 81 06
                </p>
                <p>
                  <span className="block text-sm uppercase tracking-[0.16em] text-[#D4A853]">
                    Horaires
                  </span>
                  À confirmer avec le propriétaire
                </p>
              </div>
              <div className="mt-8 rounded-2xl border border-dashed border-white/20 bg-black/40 p-6 text-sm text-[#c8c1b5]">
                Widget Google Reviews · 4,5 ★ / 308 avis (intégration à brancher)
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
