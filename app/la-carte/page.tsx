import type { Metadata } from "next";
import CtaButton from "../components/cta-button";
import LaCarteHorizontal from "../components/la-carte-horizontal";
import SectionHeading from "../components/section-heading";

export const metadata: Metadata = {
  title: "La carte · Frietkot Bourg-Argental",
  description:
    "Découvrez la carte Frietkot : frites belges, plats du jour, salades, desserts et bières belges.",
};

export default function LaCartePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-20 pt-14 text-white md:px-10">
      <section className="mx-auto w-full max-w-7xl py-16">
        <SectionHeading
          eyebrow="NOTRE CARTE"
          title="Notre Carte"
          description="Découvrez notre sélection de spécialités belges, de menus gourmands et de boissons."
        />
      </section>

      <section className="mb-20 w-full overflow-x-clip" aria-label="Aperçu plats, défilement horizontal">
        <div className="pl-0">
          <LaCarteHorizontal />
        </div>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 md:grid-cols-2">
        <article className="premium-card rounded-3xl p-7">
          <h2 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
            Les frites
          </h2>
          <ul className="mt-5 space-y-3 text-[#f5efe3]">
            <li className="flex items-center justify-between border-b border-white/10 pb-2">
              <span>Cornet classique</span>
              <span className="text-[#D4A853]">4,50 €</span>
            </li>
            <li className="flex items-center justify-between border-b border-white/10 pb-2">
              <span>Grand cornet</span>
              <span className="text-[#D4A853]">6,00 €</span>
            </li>
            <li className="flex items-center justify-between pb-1">
              <span>Supplément sauce</span>
              <span className="text-[#D4A853]">0,80 €</span>
            </li>
          </ul>
        </article>

        <article className="premium-card rounded-3xl p-7">
          <h2 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
            Les sauces
          </h2>
          <p className="mt-5 text-[#c8c1b5]">
            Mayonnaise maison, andalouse, samouraï, ail, moutarde, ketchup,
            tartare.
          </p>
        </article>

        <article className="premium-card rounded-3xl p-7">
          <h2 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
            Les plats du jour
          </h2>
          <ul className="mt-5 space-y-3 text-[#f5efe3]">
            <li className="flex items-center justify-between border-b border-white/10 pb-2">
              <span>Carbonade flamande</span>
              <span className="text-[#D4A853]">[prix]</span>
            </li>
            <li className="flex items-center justify-between border-b border-white/10 pb-2">
              <span>Vol-au-vent maison</span>
              <span className="text-[#D4A853]">[prix]</span>
            </li>
            <li className="flex items-center justify-between pb-1">
              <span>Boulets sauce liégeoise</span>
              <span className="text-[#D4A853]">[prix]</span>
            </li>
          </ul>
        </article>

        <article className="premium-card rounded-3xl p-7">
          <h2 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
            Les salades
          </h2>
          <ul className="mt-5 space-y-3 text-[#f5efe3]">
            <li className="flex items-center justify-between border-b border-white/10 pb-2">
              <span>Salade au poulet</span>
              <span className="text-[#D4A853]">[prix]</span>
            </li>
            <li className="flex items-center justify-between border-b border-white/10 pb-2">
              <span>Salade au thon</span>
              <span className="text-[#D4A853]">[prix]</span>
            </li>
            <li className="flex items-center justify-between pb-1">
              <span>Salade au saumon</span>
              <span className="text-[#D4A853]">[prix]</span>
            </li>
          </ul>
        </article>

        <article className="premium-card rounded-3xl p-7">
          <h2 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
            Les desserts
          </h2>
          <ul className="mt-5 space-y-3 text-[#f5efe3]">
            <li className="border-b border-white/10 pb-2">Gaufre de Liège</li>
            <li className="border-b border-white/10 pb-2">Crème brûlée</li>
            <li>Glaces artisanales</li>
          </ul>
        </article>

        <article className="premium-card rounded-3xl p-7">
          <h2 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
            Les bières belges
          </h2>
          <ul className="mt-5 space-y-3 text-[#f5efe3]">
            <li className="border-b border-white/10 pb-2">Chimay Bleue · Chimay Rouge</li>
            <li className="border-b border-white/10 pb-2">Herberg Brune</li>
            <li className="border-b border-white/10 pb-2">Paljas Blonde</li>
            <li>Duvel (+ sélection saisonnière)</li>
          </ul>
        </article>
      </section>

      <section className="mx-auto mt-14 w-full max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-black/40 p-10 text-center shadow-[0_28px_75px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <p className="text-[#c8c1b5]">
          Une question sur un plat ? Appelez-nous directement.
        </p>
        <div className="mt-6">
          <CtaButton href="tel:+33784428106">Nous appeler</CtaButton>
        </div>
      </section>
    </main>
  );
}
