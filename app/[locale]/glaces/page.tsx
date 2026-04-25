import { IceCreamScoop } from "@/app/components/ice-cream-scoop";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import {
  categoryOrder,
  iceCreamFlavors,
  type IceCreamCategory,
  type IceCreamFlavor,
} from "./ice-cream-data";

const BASE_URL = "https://frietkot-bourg-argental.vercel.app";

type Props = { params: Promise<{ locale: string }> };
type GlacesTranslate = (key: string) => string;

const categoryLabelKeys: Record<IceCreamCategory, string> = {
  classique: "categories.classique",
  signature: "categories.signature",
  gourmand: "categories.gourmand",
  sorbet: "categories.sorbet",
};

const categoryContextKeys: Record<IceCreamCategory, string> = {
  classique: "categoryContexts.classique",
  signature: "categoryContexts.signature",
  gourmand: "categoryContexts.gourmand",
  sorbet: "categoryContexts.sorbet",
};

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "glaces" });

  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
    alternates: {
      canonical: `/${locale}/glaces`,
      languages: {
        fr: `${BASE_URL}/fr/glaces`,
        en: `${BASE_URL}/en/glaces`,
        "x-default": `${BASE_URL}/fr/glaces`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/frietkot-og-image.jpg"],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
    },
  };
}

function FlavorCard({
  flavor,
  number,
  t,
}: {
  flavor: IceCreamFlavor;
  number: string;
  t: GlacesTranslate;
}) {
  return (
    <article className="group relative flex aspect-[4/3] max-h-[280px] min-h-[210px] flex-col justify-between overflow-hidden rounded-3xl border border-[#D4A853]/15 bg-gradient-to-br from-white/[0.07] to-black/30 p-5 shadow-[0_24px_70px_rgba(0,0,0,0.35)] transition-colors duration-500 hover:border-[#D4A853]/35 md:min-h-[250px] md:p-7">
      <div
        className="pointer-events-none absolute inset-0 opacity-[0.1] transition-opacity duration-500 group-hover:opacity-[0.18]"
        style={{
          background: `radial-gradient(circle at 20% 10%, ${flavor.color} 0%, transparent 46%)`,
        }}
        aria-hidden
      />
      <div className="relative flex items-start justify-between gap-4">
        <span className="font-[var(--font-fraunces)] text-5xl italic leading-none text-[#F5EFE3]/15 md:text-6xl">
          {number}
        </span>
        <IceCreamScoop
          color={flavor.color}
          size={68}
          className="transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
        />
      </div>
      <div className="relative">
        <p className="mb-2 text-[10px] uppercase tracking-[0.18em] text-[#D4A853]/80">
          {t(categoryLabelKeys[flavor.category])}
        </p>
        <h3 className="font-[var(--font-fraunces)] text-3xl italic leading-none text-[#F5EFE3] md:text-4xl">
          {t(flavor.nameKey)}
        </h3>
        <p className="mt-4 text-sm leading-[1.65] text-[#F5EFE3]/70">
          {t(flavor.descriptionKey)}
        </p>
      </div>
    </article>
  );
}

export default async function GlacesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = (await getTranslations("glaces")) as unknown as GlacesTranslate;

  return (
    <main className="bg-[#0A0A0A] text-[#F5EFE3]">
      <section className="relative overflow-hidden px-6 pt-20 pb-10 text-center md:px-8 md:pt-28 md:pb-20">
        <div
          className="pointer-events-none absolute inset-0 opacity-[0.05]"
          style={{
            background:
              "radial-gradient(circle at 50% 20%, #D4A853 0%, transparent 58%)",
          }}
          aria-hidden
        />
        <div className="relative mx-auto max-w-4xl">
          <p className="mb-5 text-[11px] uppercase tracking-[0.22em] text-[#D4A853]">
            {t("heroEyebrow")}
          </p>
          <h1 className="font-[var(--font-fraunces)] text-6xl italic leading-[0.9] text-[#F5EFE3] md:text-8xl lg:text-9xl">
            {t("heroTitle")}
          </h1>
          <div className="my-6 flex items-center justify-center gap-4 md:my-10">
            <div className="h-px w-16 bg-[#D4A853]/40" />
            <span className="text-xs uppercase tracking-[0.2em] text-[#D4A853]/70">
              12
            </span>
            <div className="h-px w-16 bg-[#D4A853]/40" />
          </div>
          <p className="mx-auto max-w-2xl text-[17px] leading-[1.8] text-[#F5EFE3]/85 md:text-lg">
            {t("heroTagline")}
          </p>
          <p className="mx-auto mt-5 max-w-2xl font-[var(--font-fraunces)] text-[18px] italic leading-[1.7] text-[#D4A853]/90 md:text-xl">
            {t("intro")}
          </p>
        </div>
      </section>

      <section className="border-y border-[#D4A853]/15 bg-[#08080A]">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 px-6 py-8 text-center md:py-16">
          <div>
            <p className="font-[var(--font-fraunces)] text-3xl italic text-[#D4A853] md:text-4xl">
              12
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#F5EFE3]/60">
              {t("statFlavors")}
            </p>
          </div>
          <div className="border-x border-[#D4A853]/10">
            <p className="font-[var(--font-fraunces)] text-3xl italic text-[#D4A853] md:text-4xl">
              100%
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#F5EFE3]/60">
              {t("statMaison")}
            </p>
          </div>
          <div>
            <p className="font-[var(--font-fraunces)] text-3xl italic text-[#D4A853] md:text-4xl">
              0
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#F5EFE3]/60">
              {t("statArtificial")}
            </p>
          </div>
        </div>
      </section>

      {categoryOrder.map((category, categoryIndex) => {
        const flavorsInCategory = iceCreamFlavors.filter(
          (flavor) => flavor.category === category,
        );

        return (
          <section
            key={category}
            className="relative overflow-hidden border-b border-[#D4A853]/10 px-6 py-10 md:px-8 md:py-20"
            style={{
              backgroundColor: categoryIndex % 2 === 0 ? "#0A0A0A" : "#08080A",
            }}
          >
            <div className="mx-auto max-w-7xl">
              <div className="mb-8 grid gap-5 md:mb-12 lg:grid-cols-[0.72fr_1fr] lg:items-end">
                <div>
                  <p className="mb-3 font-[var(--font-fraunces)] text-5xl italic leading-none text-[#D4A853]/55 md:text-7xl">
                    {String(categoryIndex + 1).padStart(2, "0")}
                  </p>
                  <h2 className="text-[11px] uppercase tracking-[0.22em] text-[#D4A853]">
                    {t(categoryLabelKeys[category])}
                  </h2>
                </div>
                <p className="max-w-2xl text-[15px] leading-[1.75] text-[#F5EFE3]/70 md:text-[17px]">
                  {t(categoryContextKeys[category])}
                </p>
              </div>

              <div
                className={`grid gap-5 md:gap-6 ${
                  categoryIndex % 2 === 0
                    ? "md:grid-cols-[1.1fr_0.9fr_1fr]"
                    : "md:grid-cols-[0.9fr_1.1fr_1fr]"
                }`}
              >
                {flavorsInCategory.map((flavor, index) => (
                  <FlavorCard
                    key={flavor.id}
                    flavor={flavor}
                    number={`${categoryIndex + 1}.${index + 1}`}
                    t={t}
                  />
                ))}
              </div>
            </div>
          </section>
        );
      })}

      <section className="px-6 py-8 text-center md:py-16">
        <div className="mx-auto max-w-2xl border-t border-[#D4A853]/15 pt-8 md:pt-12">
          <p className="font-[var(--font-fraunces)] text-[17px] italic leading-[1.8] text-[#F5EFE3]/75">
            {t("closingNote")}
          </p>
          <p className="mt-4 text-[11px] uppercase tracking-[0.18em] text-[#D4A853]/80">
            {t("closingCta")}
          </p>
        </div>
      </section>
    </main>
  );
}
