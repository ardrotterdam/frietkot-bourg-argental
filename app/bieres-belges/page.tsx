import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "../components/section-heading";

export const metadata: Metadata = {
  title: "Bières belges · Frietkot Bourg-Argental",
  description:
    "Sélection de bières belges chez Frietkot : Chimay, Herberg, Paljas et Duvel.",
};

const beers = [
  {
    name: "Chimay Bleue",
    type: "Trappiste",
    abv: "9%",
    brewery: "Abbaye de Scourmont, Belgique",
    note: "Riche, profonde, notes de fruits noirs et caramel.",
    pairing: "Carbonade flamande",
  },
  {
    name: "Chimay Rouge",
    type: "Trappiste",
    abv: "7%",
    brewery: "Abbaye de Scourmont, Belgique",
    note: "Plus ronde, légèrement épicée, très équilibrée.",
    pairing: "Boulets sauce liégeoise",
  },
  {
    name: "Herberg Brune",
    type: "Brune d'abbaye",
    abv: "[à confirmer]",
    brewery: "Sélection maison",
    note: "Maltée, chaleureuse, finale légèrement torréfiée.",
    pairing: "Travers de porc",
  },
  {
    name: "Paljas Blonde",
    type: "Blonde belge",
    abv: "[à confirmer]",
    brewery: "Brasserie belge",
    note: "Florale, vive et désaltérante.",
    pairing: "Frites & sauces relevées",
  },
  {
    name: "Duvel",
    type: "Blonde forte",
    abv: "8.5%",
    brewery: "Duvel Moortgat",
    note: "Fine amertume, belle mousse, finale sèche.",
    pairing: "Vol-au-vent",
  },
];

export default function BieresBelgesPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-20 pt-14 text-white md:px-10">
      <div className="mx-auto w-full max-w-7xl">
        <div className="w-full">
          <Image
            src="/images/promotional/frietkot-bieres-belges-chimay-duvel-paljas-bourg-argental.webp"
            alt="Sélection de bières belges chez Frietkot à Bourg-Argental — Chimay Bleue, Chimay Rouge, Herberg Brune, Paljas Blonde, Duvel et sélection saisonnière"
            width={2000}
            height={1400}
            className="h-auto w-full object-contain"
            sizes="100vw"
            priority
          />
        </div>
      </div>

      <section className="mx-auto w-full max-w-7xl py-12 md:py-16">
        <SectionHeading
          eyebrow="BIÈRES BELGES"
          title="Une bière belge ne se choisit pas au hasard."
          description="Chez nous, la bière n'est pas un décor. C'est un plat à part entière."
        />
        <p className="mt-6 max-w-4xl text-[#c8c1b5]">
          Trappiste pour accompagner une carbonade, blonde légère pour la frite
          croustillante, brune d&apos;abbaye pour la fin de soirée — chaque bouteille
          a sa place sur la table.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 md:grid-cols-2">
        {beers.map((beer) => (
          <article key={beer.name} className="premium-card rounded-3xl p-7">
            <p className="section-eyebrow">{beer.type}</p>
            <h2 className="mt-2 font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              {beer.name}
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.14em] text-[#c8c1b5]">
              {beer.brewery} · {beer.abv}
            </p>
            <p className="mt-4 text-[#c8c1b5]">{beer.note}</p>
            <p className="mt-3 text-[#D4A853]">Accord conseillé : {beer.pairing}</p>
          </article>
        ))}
      </section>
    </main>
  );
}
