import type { Metadata } from "next";
import Image from "next/image";
import CtaButton from "../components/cta-button";
import SectionHeading from "../components/section-heading";

export const metadata: Metadata = {
  title: "L'auberge — Frietkot Bourg-Argental",
  description:
    "Nos chambres d'hôtes à Bourg-Argental : Chambre Delirium, Duvel et Queue de Charrue. Pour prolonger l'expérience Frietkot.",
  openGraph: {
    title: "L'auberge — Frietkot",
    description:
      "Trois chambres belges à deux pas de la friterie. Pour une escapade gourmande dans le Pilat.",
  },
};

const rooms = [
  {
    name: "Chambre Duvel",
    details: "double · 1 lit · [prix]/nuit",
    image: "/images/rooms/chambre-duvel-auberge-frietkot.webp",
    alt: "Chambre Duvel, décoration belge",
  },
  {
    name: "Chambre Paljas",
    details: "double · 1 lit · [prix]/nuit",
    image: "/images/rooms/chambre-delirium-auberge-frietkot.webp",
    alt: "Chambre Paljas, atmosphère conviviale",
  },
  {
    name: "Chambre Zeekant",
    details: "double · 1 lit · [prix]/nuit",
    image: "/images/rooms/chambre-queue-de-charrue-auberge.webp",
    alt: "Chambre Zeekant, chambre d'hôtes Frietkot",
  },
] as const;

export default function AubergePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-20 pt-14 text-white md:px-10">
      <section className="mx-auto w-full max-w-7xl py-16">
        <SectionHeading
          eyebrow="CHAMBRES D'HÔTES"
          title="Dormir chez Frietkot."
          description="Trois chambres, un même esprit : belge, simple, accueillant."
        />
        <p className="mt-6 max-w-4xl text-[#c8c1b5]">
          Situées à deux pas de la friterie, nos chambres d&apos;hôtes prolongent
          l&apos;expérience Frietkot. Décorées avec des clins d&apos;œil à la culture
          brassicole belge, chacune est pensée pour qu&apos;on y dorme bien, sans
          chichis.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="premium-card rounded-3xl p-8">
          <h2 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
            Pour qui ?
          </h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-[#c8c1b5]">
            <li>Les gourmands qui veulent prolonger le repas</li>
            <li>Les couples en week-end dans le Parc du Pilat</li>
            <li>
              Les voyageurs en route vers le sud qui cherchent une halte vraie
            </li>
          </ul>
        </article>

        <div className="premium-card relative min-h-[320px] overflow-hidden rounded-3xl">
          <Image
            src="/images/rooms/chambre-duvel-auberge-frietkot.webp"
            alt="Chambre d'hôtes Frietkot à Bourg-Argental — aperçu de l'auberge, esprit belge"
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </section>

      <section className="mx-auto mt-10 grid w-full max-w-7xl gap-6 md:grid-cols-3">
        {rooms.map((room) => (
          <article
            key={room.name}
            className="premium-card overflow-hidden rounded-3xl p-0"
            data-cursor-room
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={room.image}
                alt={room.alt}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
            <div className="p-7">
              <h3 className="font-[var(--font-fraunces)] text-2xl text-[#f5efe3]">
                {room.name}
              </h3>
              <p className="mt-3 text-[#c8c1b5]">{room.details}</p>
            </div>
          </article>
        ))}
      </section>

      <div className="mx-auto mt-12 w-full max-w-7xl">
        <CtaButton href="tel:+33784428106">
          Réserver par téléphone · 07 84 42 81 06
        </CtaButton>
      </div>
    </main>
  );
}
