import type { Metadata } from "next";
import SectionHeading from "../components/section-heading";

export const metadata: Metadata = {
  title: "Notre histoire · Frietkot Bourg-Argental",
  description:
    "Depuis 1990, Frietkot transmet la tradition de la vraie frite belge à Bourg-Argental.",
};

export default function NotreHistoirePage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-20 pt-14 text-white md:px-10">
      <section className="mx-auto w-full max-w-5xl py-16">
        <SectionHeading
          eyebrow="NOTRE HISTOIRE"
          title="1990."
          description="Une friterie ouverte à Bruxelles. Trente-cinq ans plus tard, la même recette, à Bourg-Argental."
        />
      </section>

      <section className="mx-auto w-full max-w-5xl space-y-6 text-lg text-[#c8c1b5]">
        <p>
          Frietkot, c&apos;est d&apos;abord une histoire de patience. Celle qu&apos;il faut
          pour éplucher les pommes de terre à la main chaque matin. Celle qu&apos;il
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
