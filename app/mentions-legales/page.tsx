import type { Metadata } from "next";
import SectionHeading from "../components/section-heading";

export const metadata: Metadata = {
  title: "Mentions légales · Frietkot Bourg-Argental",
  description: "Informations légales du site Frietkot Bourg-Argental.",
};

export default function MentionsLegalesPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-20 pt-14 text-white md:px-10">
      <section className="mx-auto w-full max-w-5xl py-16">
        <SectionHeading
          eyebrow="INFORMATIONS"
          title="Mentions légales"
          description="Page légale provisoire en attente de validation propriétaire."
        />
      </section>

      <section className="mx-auto w-full max-w-5xl space-y-4 text-[#c8c1b5]">
        <p>Nom de l'établissement : Frietkot</p>
        <p>Adresse : 7 place d'Armeville, 42220 Bourg-Argental</p>
        <p>Téléphone : 07 84 42 81 06</p>
        <p>Email : bonjour@frietkot.fr</p>
        <p>
          Hébergement : Vercel. Contenu éditorial et visuels : Frietkot
          Bourg-Argental.
        </p>
      </section>
    </main>
  );
}
