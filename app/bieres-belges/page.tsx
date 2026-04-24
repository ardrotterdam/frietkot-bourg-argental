import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "../components/section-heading";

export const metadata: Metadata = {
  title: "Bières belges — Frietkot Bourg-Argental",
  description:
    "Chimay Bleue, Chimay Rouge, Herberg Brune, Paljas Blonde, Duvel. Notre sélection de bières belges, pour accompagner frites et plats du jour.",
  openGraph: {
    title: "Bières belges — Frietkot",
    description:
      "Sélection de bières trappistes et d'abbaye belges à Bourg-Argental.",
    images: [
      "/images/promotional/frietkot-bieres-belges-chimay-duvel-paljas-bourg-argental.webp",
    ],
  },
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
    <main className="min-h-screen bg-[#050505] pb-20 pt-8 text-white md:pt-10">
      <section className="bg-[#0A0A0A] px-6 pb-12 pt-4 md:px-8 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-center text-[11px] uppercase tracking-[0.18em] text-[#D4A853]">
            À la cave · Frietkot Bourg-Argental
          </p>
          <div className="overflow-hidden rounded-sm shadow-2xl">
            <Image
              src="/images/promotional/frietkot-bieres-belges-chimay-duvel-paljas-bourg-argental.webp"
              alt="Sélection de bières belges chez Frietkot à Bourg-Argental — Chimay Bleue, Chimay Rouge, Herberg Brune, Paljas Blonde, Duvel et sélection saisonnière"
              width={2000}
              height={1400}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1152px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10 md:py-12">
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

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 md:grid-cols-2 md:px-10">
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
