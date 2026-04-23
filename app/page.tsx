import type { Metadata } from "next";
import Image from "next/image";
import CtaButton from "./components/cta-button";
import SectionHeading from "./components/section-heading";

export const metadata: Metadata = {
  title: "Accueil · Frietkot Bourg-Argental",
  description:
    "Friterie belge premium à Bourg-Argental : frites maison, bières belges et chambres d'hôtes.",
};

export default function HomePage() {
  return (
    <>
      <main
        className="relative min-h-screen overflow-hidden text-white"
        style={{
          backgroundImage:
            "url('/belgian-fries-hero-frietkot-bourg-argental.webp')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/65" />
        <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(212,168,83,0.22),transparent_48%)]" />

        <section className="relative z-10 mx-auto flex min-h-screen w-full max-w-7xl items-center px-6 pt-12 md:px-10">
          <div className="animate-fade-in max-w-4xl">
            <p className="section-eyebrow">
              FRITERIE BELGE · DEPUIS 1990 · BOURG-ARGENTAL
            </p>
            <h1 className="mt-6 font-[var(--font-fraunces)] text-5xl leading-[1.04] text-[#f5efe3] md:text-7xl">
              Le vrai goût de la Belgique,
              <span className="block text-[#D4A853]">au cœur de la Loire.</span>
            </h1>
            <p className="mt-7 max-w-2xl text-lg text-[#f5efe3]/90 md:text-xl">
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
      </main>

      <div className="bg-[#050505]">
        <section className="px-6 py-24 md:px-10">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
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
              <ul className="space-y-6">
                <li>
                  <p className="font-[var(--font-fraunces)] text-4xl text-[#D4A853]">
                    308
                  </p>
                  <p className="text-sm uppercase tracking-[0.16em] text-[#c8c1b5]">
                    avis Google · 4,5★
                  </p>
                </li>
                <li>
                  <p className="font-[var(--font-fraunces)] text-4xl text-[#D4A853]">
                    +35 ans
                  </p>
                  <p className="text-sm uppercase tracking-[0.16em] text-[#c8c1b5]">
                    de métier
                  </p>
                </li>
                <li>
                  <p className="font-[var(--font-fraunces)] text-4xl text-[#D4A853]">
                    100%
                  </p>
                  <p className="text-sm uppercase tracking-[0.16em] text-[#c8c1b5]">
                    fait maison
                  </p>
                </li>
              </ul>
            </aside>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <SectionHeading
              eyebrow="NOTRE CARTE"
              title="Simple, généreux, belge."
              description="Un aperçu de nos incontournables, dans un esprit friterie authentique."
            />

            <div className="mt-12 grid gap-6 lg:grid-cols-3">
              <article className="premium-card rounded-3xl p-7">
                <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
                  Les frites & leurs sauces
                </h3>
                <p className="mt-4 text-[#c8c1b5]">
                  Cornet classique, grand cornet, supplément. Mayonnaise maison,
                  andalouse, samouraï, ail, moutarde. Le choix est large, la base
                  est une.
                </p>
              </article>
              <article className="premium-card rounded-3xl p-7">
                <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
                  Les plats du jour
                </h3>
                <p className="mt-4 text-[#c8c1b5]">
                  Carbonade flamande mijotée, vol-au-vent, boulets sauce liégeoise.
                  Des classiques belges, préparés chaque matin selon ce que le
                  marché propose.
                </p>
              </article>
              <article className="premium-card rounded-3xl p-7">
                <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
                  Salades, gaufres & glaces
                </h3>
                <p className="mt-4 text-[#c8c1b5]">
                  Des salades fraîches pour les repas plus légers. Et pour finir —
                  gaufres de Liège, crèmes brûlées, glaces artisanales.
                </p>
              </article>
            </div>

            <div className="mt-10">
              <CtaButton href="/la-carte">Voir toute la carte →</CtaButton>
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10">
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
              <p className="mt-4 text-[#c8c1b5]">
                Demandez au comptoir : on vous orientera.
              </p>
              <div className="mt-8">
                <CtaButton href="/bieres-belges" variant="ghost">
                  Voir la sélection →
                </CtaButton>
              </div>
            </article>
            <div className="premium-card relative min-h-[360px] overflow-hidden rounded-3xl">
              {/* TODO: Ajouter photo hi-res propriétaire (Paljas / frigo bières) */}
              <Image
                src="/logo.png"
                alt="Repère visuel Frietkot"
                fill
                className="object-cover opacity-75"
              />
            </div>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
            <article className="premium-card rounded-3xl p-8 md:p-12">
              <SectionHeading
                eyebrow="CHAMBRES D'HÔTES · NOUVEAU"
                title="Prolonger la soirée."
              />
              <p className="mt-6 text-[#c8c1b5]">
                À deux pas de la friterie, nous ouvrons nos chambres. Trois espaces
                confortables, simples et décorés dans l&apos;esprit belge que vous
                connaissez.
              </p>
              <p className="mt-4 text-[#c8c1b5]">
                Pour une escapade gourmande, un week-end dans le Pilat, ou une
                halte sur la route vers le sud.
              </p>
              <div className="mt-8">
                <CtaButton href="/auberge">Découvrir les chambres →</CtaButton>
              </div>
            </article>
            <div className="premium-card relative min-h-[360px] overflow-hidden rounded-3xl">
              {/* TODO: Ajouter photo chambre propriétaire */}
              <Image
                src="/frietkot-bourg-argental-logo.webp"
                alt="Ambiance auberge"
                fill
                className="object-cover opacity-70"
              />
            </div>
          </div>
        </section>

        <section className="px-6 pb-24 pt-6 md:px-10">
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
              Widget Google Reviews · 4.5★ / 308 avis (à intégrer)
            </div>
          </div>
        </section>
      </div>
    </>
  );
}
