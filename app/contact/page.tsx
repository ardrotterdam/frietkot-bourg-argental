import type { Metadata } from "next";
import CtaButton from "../components/cta-button";
import ContactMapWrapper from "../components/contact-map-wrapper";
import SectionHeading from "../components/section-heading";

const GMAPS = `https://www.google.com/maps/search/?api=1&query=${encodeURIComponent("7 place d'Armeville, 42220 Bourg-Argental, France")}`;
const APPLE = `https://maps.apple.com/?q=${encodeURIComponent("7 place d'Armeville, Bourg-Argental")}`;
const WAZE = `https://waze.com/ul?q=${encodeURIComponent("7 place d'Armeville, Bourg-Argental")}`;

export const metadata: Metadata = {
  title: "Contact · Frietkot Bourg-Argental",
  description:
    "Contactez Frietkot à Bourg-Argental : téléphone, adresse, formulaire de contact et accès.",
};

export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-20 pt-14 text-white md:px-10">
      <section className="mx-auto w-full max-w-6xl py-16">
        <SectionHeading eyebrow="NOUS TROUVER" title="Passez nous voir." />
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
        <article className="premium-card rounded-3xl p-8 md:p-12">
          <h2 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
            Frietkot Bourg-Argental
          </h2>
          <p className="mt-6 text-[#c8c1b5] md:text-lg">
            Contactez-nous pour réserver, commander ou préparer votre visite.
          </p>

          <div className="mt-8 space-y-4 text-[#f5efe3]">
            <p>
              <span className="font-semibold text-[#D4A853]">Adresse :</span> 7
              place d&apos;Armeville, 42220 Bourg-Argental
            </p>
            <p>
              <span className="font-semibold text-[#D4A853]">Téléphone :</span> 07
              84 42 81 06
            </p>
            <p>
              <span className="font-semibold text-[#D4A853]">Email :</span>{" "}
              bonjour@frietkot.fr
            </p>
            <p>
              <span className="font-semibold text-[#D4A853]">Horaires :</span>{" "}
              à confirmer avec le propriétaire
            </p>
          </div>

          <div className="mt-8">
            <CtaButton href="tel:+33784428106">Nous appeler</CtaButton>
          </div>
        </article>

        <aside className="space-y-8">
          <form
            action="https://formsubmit.co/bonjour@frietkot.fr"
            method="POST"
            className="premium-card rounded-3xl p-8"
          >
            <h3 className="font-[var(--font-fraunces)] text-2xl text-[#f5efe3]">
              Écrivez-nous
            </h3>
            <div className="mt-5 space-y-4">
              <input
                required
                name="Nom"
                placeholder="Nom"
                className="w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-[#f5efe3] placeholder:text-[#c8c1b5]"
              />
              <input
                required
                type="email"
                name="Email"
                placeholder="Email"
                className="w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-[#f5efe3] placeholder:text-[#c8c1b5]"
              />
              <input
                name="Téléphone"
                placeholder="Téléphone (optionnel)"
                className="w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-[#f5efe3] placeholder:text-[#c8c1b5]"
              />
              <textarea
                required
                name="Message"
                placeholder="Message"
                rows={5}
                className="w-full rounded-xl border border-white/15 bg-black/50 px-4 py-3 text-[#f5efe3] placeholder:text-[#c8c1b5]"
              />
            </div>
            <button
              type="submit"
              className="mt-5 inline-flex rounded-full border border-[#D4A853]/85 bg-[#D4A853] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all hover:-translate-y-0.5 hover:bg-[#F4B942]"
            >
              Envoyer →
            </button>
          </form>

          <div className="premium-card rounded-3xl p-8">
            <h3 className="font-[var(--font-fraunces)] text-2xl text-[#f5efe3]">
              Plan d&apos;accès
            </h3>
            <div className="mt-4">
              <ContactMapWrapper />
            </div>
            <div className="mt-4 flex flex-wrap gap-3 text-sm">
              <a
                className="text-[#D4A853] transition-colors hover:text-[#FFD700] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A853]"
                href={GMAPS}
                rel="noreferrer"
                target="_blank"
                data-cursor-cta
              >
                Google Maps
              </a>
              <a
                className="text-[#D4A853] transition-colors hover:text-[#FFD700] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A853]"
                href={APPLE}
                rel="noreferrer"
                target="_blank"
                data-cursor-cta
              >
                Apple Maps
              </a>
              <a
                className="text-[#D4A853] transition-colors hover:text-[#FFD700] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A853]"
                href={WAZE}
                rel="noreferrer"
                target="_blank"
                data-cursor-cta
              >
                Waze
              </a>
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
