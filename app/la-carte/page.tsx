import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import CtaButton from "../components/cta-button";

export const metadata: Metadata = {
  title: "La carte · Frietkot Bourg-Argental",
  description:
    "Découvrez la carte Frietkot : frites belges, plats du jour, salades, desserts et bières belges.",
};

function EditorialText({
  eyebrow,
  title,
  children,
  price,
}: {
  eyebrow: string;
  title: string;
  children: ReactNode;
  price: string;
}) {
  return (
    <div className="flex max-w-lg flex-col justify-center px-6 py-12 md:px-12 lg:px-20">
      <p className="section-eyebrow">{eyebrow}</p>
      <h2
        className="mt-3 font-[var(--font-fraunces)] text-3xl leading-tight text-[#f5efe3] [font-style:italic] md:text-4xl"
        style={{ fontFeatureSettings: '"opsz" 72' }}
      >
        {title}
      </h2>
      <div className="mt-5 text-base leading-[1.75] text-[#c8c1b5]">{children}</div>
      <p className="mt-6 text-lg text-[#D4A853]">{price}</p>
    </div>
  );
}

export default function LaCartePage() {
  return (
    <main className="min-h-screen bg-[#050505] pb-20 pt-0 text-white">
      <section
        className="relative h-[60vh] min-h-[22rem] w-full md:h-[75vh] md:min-h-0"
        aria-label="Plats du jour"
      >
        <div className="relative h-full w-full">
          <Image
            src="/images/promotional/frietkot-plats-du-jour-carbonade-vol-au-vent-boulets-bourg-argental.webp"
            alt="Plats du jour chez Frietkot à Bourg-Argental — carbonade flamande à la bière brune, vol-au-vent maison aux champignons, et boulets sauce liégeoise, tous faits maison chaque jour"
            fill
            className="object-cover object-center"
            sizes="100vw"
            priority
          />
          <div
            className="pointer-events-none absolute inset-0 bg-[linear-gradient(to_top,rgba(10,10,10,0.85),rgba(10,10,10,0.3)_50%,transparent)]"
            aria-hidden
          />
          <div className="absolute inset-x-0 bottom-0 z-[1] flex flex-col items-center justify-end px-6 pb-10 pt-20 md:pb-14">
            <div className="w-full max-w-[600px] text-center">
              <p className="section-eyebrow !text-[#D4A853]">LA CARTE</p>
              <h1
                className="mt-3 font-[var(--font-fraunces)] text-4xl font-normal leading-tight text-white [font-style:italic] md:text-5xl"
                style={{ fontFeatureSettings: '"opsz" 72' }}
              >
                Les plats du jour.
              </h1>
              <p className="mt-4 text-base leading-[1.7] text-[#F5EFE3]/90 md:text-lg">
                Trois classiques belges, préparés chaque matin selon ce que le marché
                propose.
              </p>
            </div>
          </div>
        </div>
      </section>

      <div className="px-0">
        <section
          className="border-t border-[#D4A853]/10 py-24 md:py-32"
          aria-label="Carbonade flamande"
        >
          <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
            <div className="relative min-h-[280px] w-full aspect-[4/3] max-lg:max-h-[70vh] lg:min-h-[360px]">
              <Image
                src="/images/promotional/frietkot-carbonade-flamande-biere-brune-bourg-argental.webp"
                alt="Carbonade flamande à la bière brune, mijotée lentement, servie chez Frietkot à Bourg-Argental avec frites belges croustillantes"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </div>
            <EditorialText
              eyebrow="PLAT DU JOUR · SPÉCIALITÉ BELGE"
              title="Carbonade flamande."
              price="[prix]"
            >
              Bœuf mijoté à la bière brune belge avec oignons confits, pain
              d&apos;épices et touche de moutarde. Recette traditionnelle, cuisson
              lente de quatre heures, servie avec des frites maison.
            </EditorialText>
          </div>
        </section>

        <section
          className="border-t border-[#D4A853]/10 py-24 md:py-32"
          aria-label="Vol-au-vent"
        >
          <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <EditorialText
                eyebrow="PLAT DU JOUR · FAIT MAISON"
                title="Vol-au-vent maison."
                price="[prix]"
              >
                Pâte feuilletée dorée, sauce crémeuse aux champignons frais et poulet
                fermier tendre. Un classique belge préparé avec patience, servi
                chaud avec des frites belges.
              </EditorialText>
            </div>
            <div className="relative order-1 min-h-[280px] w-full aspect-[4/3] max-lg:max-h-[70vh] lg:order-2 lg:min-h-[360px]">
              <Image
                src="/images/promotional/frietkot-vol-au-vent-bourg-argental.webp"
                alt="Vol-au-vent maison servi chez Frietkot à Bourg-Argental — pâte feuilletée, sauce crème et champignons, présentation généreuse"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section
          className="border-t border-[#D4A853]/10 py-24 md:py-32"
          aria-label="Boulets sauce liégeoise"
        >
          {/*
            TODO: visuel dédié boulets en attente — pour l’instant réemploi de la vue
            plats du jour (boulets visibles en bas à droite sur le visuel de marque).
          */}
          <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
            <div className="relative min-h-[280px] w-full aspect-[4/3] max-lg:max-h-[70vh] lg:min-h-[360px]">
              <Image
                src="/images/promotional/frietkot-plats-du-jour-carbonade-vol-au-vent-boulets-bourg-argental.webp"
                alt="Assiette de boulets sauce liégeoise parmi les plats du jour chez Frietkot à Bourg-Argental — accompagnement de frites belges"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </div>
            <EditorialText
              eyebrow="PLAT DU JOUR · RECETTE LIÉGEOISE"
              title="Boulets sauce liégeoise."
              price="[prix]"
            >
              Boulettes de bœuf maison dans une sauce liégeoise traditionnelle aux
              oignons et sirop de Liège. Un plat généreux, parfait avec un cornet
              de frites et une bière trappiste.
            </EditorialText>
          </div>
        </section>

        <section
          className="border-t border-[#D4A853]/10 py-24 md:py-32"
          aria-label="Sauces"
        >
          <div className="grid grid-cols-1 items-center gap-0 lg:grid-cols-[1.1fr_0.9fr]">
            <div className="relative min-h-[300px] w-full aspect-[4/3] sm:min-h-[380px]">
              <Image
                src="/images/promotional/frietkot-sauces-maison-bourg-argental.webp"
                alt="Bar à sauces maison chez Frietkot à Bourg-Argental — bols colorés, textures crémeuses, présentation soignée sur le comptoir"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 60vw"
              />
            </div>
            <div className="flex max-w-lg flex-col justify-center px-6 py-10 md:px-12 lg:px-20">
              <p className="section-eyebrow">LES SAUCES</p>
              <h2
                className="mt-3 font-[var(--font-fraunces)] text-3xl leading-tight text-[#f5efe3] [font-style:italic] md:text-4xl"
                style={{ fontFeatureSettings: '"opsz" 72' }}
              >
                Toutes faites maison.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-[1.75] text-[#c8c1b5]">
                Andalouse, samouraï, tartare, mayonnaise maison, moutarde, ail —
                préparées chaque matin avec des ingrédients de qualité. Le choix
                est vaste, la base est une : la vraie.
              </p>
            </div>
          </div>
        </section>

        <section
          className="border-t border-[#D4A853]/10 py-24 md:py-32"
          aria-label="Desserts"
        >
          <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
            <div className="relative min-h-[280px] w-full aspect-[4/3] max-lg:max-h-[70vh] lg:min-h-[360px]">
              <Image
                src="/images/promotional/frietkot-gaufres-bruxelles-bourg-argental.webp"
                alt="Gaufres de Bruxelles caramélisées et douceurs belges proposées chez Frietkot à Bourg-Argental — sucre perlé, texture gourmande"
                fill
                className="object-cover"
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </div>
            <div className="flex max-w-lg flex-col justify-center px-6 py-12 md:px-12 lg:px-20">
              <p className="section-eyebrow">LES DESSERTS</p>
              <h2
                className="mt-3 font-[var(--font-fraunces)] text-3xl leading-tight text-[#f5efe3] [font-style:italic] md:text-4xl"
                style={{ fontFeatureSettings: '"opsz" 72' }}
              >
                Gaufres, glaces et douceurs.
              </h2>
              <p className="mt-5 text-base leading-[1.75] text-[#c8c1b5]">
                Gaufres de Bruxelles caramélisées au sucre perlé, glaces
                artisanales, crèmes brûlées. La touche sucrée belge pour terminer.
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="px-6 md:px-10">
        <div className="mx-auto w-full max-w-7xl py-20 md:py-24">
          <h2 className="text-center font-[var(--font-fraunces)] text-2xl text-[#f5efe3] [font-style:italic]">
            Carte & tarifs
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#c8c1b5]">
            Aperçu des prix — les plats du jour et suggestions sont affichés
            chaque matin au comptoir.
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-6 md:grid-cols-2">
          <article className="premium-card rounded-3xl p-7">
            <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              Les frites
            </h3>
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
            <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              Les sauces
            </h3>
            <p className="mt-5 text-[#c8c1b5]">
              Mayonnaise maison, andalouse, samouraï, ail, moutarde, ketchup,
              tartare.
            </p>
          </article>

          <article className="premium-card rounded-3xl p-7">
            <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              Les plats du jour
            </h3>
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
            <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              Les salades
            </h3>
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
            <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              Les desserts
            </h3>
            <ul className="mt-5 space-y-3 text-[#f5efe3]">
              <li className="border-b border-white/10 pb-2">Gaufre de Liège</li>
              <li className="border-b border-white/10 pb-2">Crème brûlée</li>
              <li>Glaces artisanales</li>
            </ul>
          </article>

          <article className="premium-card rounded-3xl p-7">
            <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              Les bières belges
            </h3>
            <ul className="mt-5 space-y-3 text-[#f5efe3]">
              <li className="border-b border-white/10 pb-2">
                Chimay Bleue · Chimay Rouge
              </li>
              <li className="border-b border-white/10 pb-2">Herberg Brune</li>
              <li className="border-b border-white/10 pb-2">Paljas Blonde</li>
              <li>Duvel (+ sélection saisonnière)</li>
            </ul>
          </article>
        </div>

        <section className="mx-auto mt-14 w-full max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-black/40 p-10 text-center shadow-[0_28px_75px_rgba(0,0,0,0.5)] backdrop-blur-xl">
          <p className="text-[#c8c1b5]">
            Une question sur un plat ? Appelez-nous directement.
          </p>
          <div className="mt-6">
            <CtaButton href="tel:+33784428106">Nous appeler</CtaButton>
          </div>
        </section>
      </div>
    </main>
  );
}
