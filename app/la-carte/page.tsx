import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import CtaButton from "../components/cta-button";

export const metadata: Metadata = {
  title: "La carte · Frietkot Bourg-Argental",
  description:
    "Découvrez la carte Frietkot : frites belges, plats du jour, salades, desserts et bières belges.",
};

function EditorialBlock({
  eyebrow,
  headline,
  children,
  price,
}: {
  eyebrow: string;
  headline: string;
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
        {headline}
      </h2>
      <div className="mt-5 text-base leading-[1.75] text-[#c8c1b5]">{children}</div>
      <p className="mt-6 text-lg text-[#D4A853]">{price}</p>
    </div>
  );
}

/** Promotional assets are full posters: always show full frame, no crop. */
function SplitPosterImage({
  src,
  alt,
  sizes,
}: {
  src: string;
  alt: string;
  sizes: string;
}) {
  return (
    <div className="flex min-h-[min(50vh,480px)] items-center justify-center bg-[#0A0A0A] px-4 py-8 md:px-6 lg:min-h-[420px] lg:py-10">
      <Image
        src={src}
        alt={alt}
        width={2000}
        height={1500}
        className="h-auto w-full object-contain"
        sizes={sizes}
      />
    </div>
  );
}

export default function LaCartePage() {
  return (
    <main className="min-h-screen bg-[#050505] pb-20 text-white">
      {/* Hero — Plats du jour poster */}
      <section className="bg-[#0A0A0A] pt-24 pb-16 md:pt-32 md:pb-24">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 text-center md:mb-12">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#D4A853]">
              La carte · Frietkot Bourg-Argental
            </p>
          </div>

          <div className="relative mx-auto w-full overflow-hidden rounded-sm shadow-2xl">
            <Image
              src="/images/promotional/frietkot-plats-du-jour-carbonade-vol-au-vent-boulets-bourg-argental.webp"
              alt="Plats du jour chez Frietkot à Bourg-Argental — carbonade flamande à la bière brune, vol-au-vent maison aux champignons, et boulets sauce liégeoise, tous faits maison chaque jour"
              width={2000}
              height={1500}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1152px"
              priority
            />
          </div>

          <div className="mx-auto mt-10 max-w-xl text-center md:mt-14">
            <p className="text-base leading-relaxed text-[#F5EFE3]/70 md:text-lg">
              Trois classiques belges, préparés chaque matin selon ce que le marché
              propose. Toujours accompagnés de frites fraîches, coupées sur place.
            </p>
          </div>
        </div>
      </section>

      <div className="px-0">
        <section
          className="border-t border-[#D4A853]/10 py-24 md:py-32"
          aria-label="Carbonade"
        >
          <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
            <SplitPosterImage
              src="/images/promotional/frietkot-carbonade-flamande-biere-brune-bourg-argental.webp"
              alt="Carbonade flamande à la bière brune, mijotée lentement, servie chez Frietkot à Bourg-Argental avec frites belges croustillantes"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <EditorialBlock
              eyebrow="PLAT DU JOUR · SPÉCIALITÉ BELGE"
              headline="Un bœuf mijoté quatre heures."
              price="[prix]"
            >
              Mijotage à la bière brune belge, oignons confits, pain d&apos;épices,
              moutarde en filigrane. Cuisson lente, assiette généreuse, frites
              maison en accompagnement.
            </EditorialBlock>
          </div>
        </section>

        <section
          className="border-t border-[#D4A853]/10 py-24 md:py-32"
          aria-label="Vol-au-vent"
        >
          <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <EditorialBlock
                eyebrow="PLAT DU JOUR · FAIT MAISON"
                headline="Sauce crème, champignons, volaille tendre."
                price="[prix]"
              >
                Pâte feuilletée dorée, crème serrée, champignons de saison et poulet
                fermier. Un classique servi chaud — les frites belges complètent
                l&apos;assiette.
              </EditorialBlock>
            </div>
            <div className="order-1 lg:order-2">
              <SplitPosterImage
                src="/images/promotional/frietkot-vol-au-vent-bourg-argental.webp"
                alt="Vol-au-vent maison servi chez Frietkot à Bourg-Argental — pâte feuilletée, sauce crème et champignons, présentation généreuse"
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
            TODO: visuel dédié boulets — pour l’instant réemploi du poster plats du jour
            (même règle : poster entier, pas de rognage).
          */}
          <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
            <SplitPosterImage
              src="/images/promotional/frietkot-plats-du-jour-carbonade-vol-au-vent-boulets-bourg-argental.webp"
              alt="Assiette de boulets sauce liégeoise parmi les plats du jour chez Frietkot à Bourg-Argental — accompagnement de frites belges"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <EditorialBlock
              eyebrow="PLAT DU JOUR · RECETTE LIÉGEOISE"
              headline="Généreux, sucré-salé, du nord au cornet."
              price="[prix]"
            >
              Boulettes de bœuf façonnées sur place, sauce aux oignons longuement
              fondue, rappel de sirop de Liège. Un plat de brasserie à partager
              avec frites trappiste à portée.
            </EditorialBlock>
          </div>
        </section>

        <section
          className="border-t border-[#D4A853]/10 py-24 md:py-32"
          aria-label="Sauces"
        >
          <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
            <SplitPosterImage
              src="/images/promotional/frietkot-sauces-maison-bourg-argental.webp"
              alt="Bar à sauces maison chez Frietkot à Bourg-Argental — bols colorés, textures crémeuses, présentation soignée sur le comptoir"
              sizes="(max-width: 1023px) 100vw, 55vw"
            />
            <div className="flex max-w-lg flex-col justify-center px-6 py-10 md:px-12 lg:px-20">
              <p className="section-eyebrow">LES SAUCES</p>
              <h2
                className="mt-3 font-[var(--font-fraunces)] text-3xl leading-tight text-[#f5efe3] [font-style:italic] md:text-4xl"
                style={{ fontFeatureSettings: '"opsz" 72' }}
              >
                Préparées le matin, servies à l&apos;instant.
              </h2>
              <p className="mt-5 max-w-lg text-base leading-[1.75] text-[#c8c1b5]">
                Textures, équilibre, petites chaleurs — le détail compte quand on
                trempe. Pas de raccourci : tout est prêt pour accompagner le cornet
                du jour.
              </p>
            </div>
          </div>
        </section>

        <section
          className="border-t border-[#D4A853]/10 py-24 md:py-32"
          aria-label="Desserts"
        >
          <div className="grid grid-cols-1 items-stretch gap-0 lg:grid-cols-2">
            <SplitPosterImage
              src="/images/promotional/frietkot-gaufres-bruxelles-bourg-argental.webp"
              alt="Gaufres de Bruxelles caramélisées et douceurs belges proposées chez Frietkot à Bourg-Argental — sucre perlé, texture gourmande"
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <div className="flex max-w-lg flex-col justify-center px-6 py-12 md:px-12 lg:px-20">
              <p className="section-eyebrow">LES DESSERTS</p>
              <h2
                className="mt-3 font-[var(--font-fraunces)] text-3xl leading-tight text-[#f5efe3] [font-style:italic] md:text-4xl"
                style={{ fontFeatureSettings: '"opsz" 72' }}
              >
                Après l&apos;assiette salée, le geste sucré.
              </h2>
              <p className="mt-5 text-base leading-[1.75] text-[#c8c1b5]">
                Caramel, froid artisanal, crèmes caramélisées — on termine le repas
                comme on l&apos;a commencé : simplement, sans chichis.
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
