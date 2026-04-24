import type { Metadata } from "next";
import Image from "next/image";

export const metadata: Metadata = {
  title: "Notre histoire · Frietkot Bourg-Argental",
  description:
    "Depuis 1990, Frietkot transmet la tradition de la vraie frite belge à Bourg-Argental.",
};

export default function NotreHistoirePage() {
  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section
        className="relative min-h-0 border-b border-[#D4A853]/10 bg-[#0A0A0A] text-[#F5EFE3]"
        aria-label="Notre histoire"
      >
        <div className="grid min-h-0 grid-cols-1 lg:min-h-screen lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-6 py-12 [padding-left:clamp(1.5rem,5vw,6rem)] [padding-right:clamp(1.5rem,5vw,6rem)] md:px-10 lg:order-1 lg:min-h-0 lg:py-0">
            <p className="section-eyebrow">NOTRE HISTOIRE</p>
            <h1
              className="mt-3 max-w-xl font-[var(--font-fraunces)] text-[length:clamp(3rem,7vw,4.5rem)] font-normal leading-[1.05] text-[#F5EFE3] [font-style:italic]"
              style={{ fontFeatureSettings: '"opsz" 72' }}
            >
              1990.
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-[1.7] text-[#c8c1b5]">
              Une friterie ouverte à Bruxelles. Trente-cinq ans plus tard, la même
              recette, à Bourg-Argental.
            </p>
          </div>
          <div className="order-1 flex min-h-[min(50vh,520px)] items-center justify-center border-[#D4A853]/10 bg-[#0A0A0A] p-6 lg:order-2 lg:min-h-screen lg:border-l lg:p-10">
            <Image
              src="/images/promotional/frietkot-pascal-proprietaire-bourg-argental.webp"
              alt="Pascal, propriétaire de Frietkot à Bourg-Argental, vous accueille dans sa friterie belge avec le sourire"
              width={1200}
              height={1500}
              className="h-auto w-full max-w-xl object-contain lg:max-w-2xl"
              sizes="(max-width: 1023px) 100vw, 50vw"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto w-full max-w-5xl space-y-6 px-6 py-20 text-lg text-[#c8c1b5] md:px-10 md:py-24">
        <p>
          Frietkot, c&apos;est d&apos;abord une histoire de patience. Celle qu&apos;il
          faut pour éplucher les pommes de terre à la main chaque matin. Celle qu&apos;il
          faut pour respecter la double cuisson. Celle qu&apos;il faut pour que chaque
          cornet parte du comptoir à la bonne température, le sel juste dosé, la
          sauce choisie avec soin.
        </p>
        <p>
          Installés depuis plus de trente ans, nous servons des frites belges
          authentiques dans la Loire. Pas une reproduction, pas une adaptation —
          la vraie chose. Avec les bières qui vont avec, les plats du jour comme
          on les fait là-bas, et une hospitalité qui ressemble à celle qu&apos;on
          reçoit dans les friteries de village en Belgique.
        </p>
        <p>
          Aujourd&apos;hui, nous agrandissons l&apos;expérience avec une auberge. Parce
          qu&apos;un bon repas, c&apos;est parfois le début d&apos;une soirée qu&apos;on a envie de
          prolonger.
        </p>
      </section>
    </main>
  );
}
