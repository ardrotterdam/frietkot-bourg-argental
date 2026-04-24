import { IceCreamScoop } from "@/app/components/ice-cream-scoop";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import CtaButton from "../../components/cta-button";
import {
  categoryOrder,
  iceCreamFlavors,
} from "./ice-cream-data";
import type { IceCreamCategory } from "./ice-cream-data";

const BASE_URL = "https://frietkot-bourg-argental.vercel.app";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "laCarte" });
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
    alternates: {
      canonical: `/${locale}/la-carte`,
      languages: {
        fr: `${BASE_URL}/fr/la-carte`,
        en: `${BASE_URL}/en/la-carte`,
        "x-default": `${BASE_URL}/fr/la-carte`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        "/images/promotional/frietkot-plats-du-jour-carbonade-vol-au-vent-boulets-bourg-argental.webp",
      ],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
    },
  };
}

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
    <div className="flex max-w-lg flex-col justify-center px-6 py-0 md:px-12 md:py-12 lg:px-20">
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
    <div className="flex aspect-[4/3] max-h-[280px] items-center justify-center overflow-hidden bg-[#0A0A0A] md:aspect-auto md:max-h-none md:min-h-[260px] md:px-6 md:py-8 lg:min-h-[400px] lg:py-10">
      <Image
        src={src}
        alt={alt}
        width={2000}
        height={1500}
        className="h-full w-full object-contain"
        sizes={sizes}
      />
    </div>
  );
}

export default async function LaCartePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("laCarte");
  const g = await getTranslations("glaces");
  const p = t("prixPlaceholder");

  return (
    <main className="bg-[#050505] pb-12 text-white md:pb-20">
      <section className="bg-[#0A0A0A] pt-20 pb-8 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-6xl px-6">
          <div className="mb-8 text-center md:mb-12">
            <p className="text-[11px] uppercase tracking-[0.18em] text-[#D4A853]">
              {t("eyebrow")}
            </p>
          </div>

          <div className="relative mx-auto aspect-[4/3] max-h-[280px] w-full overflow-hidden rounded-sm shadow-2xl md:aspect-auto md:max-h-none">
            <Image
              src="/images/promotional/frietkot-plats-du-jour-carbonade-vol-au-vent-boulets-bourg-argental.webp"
              alt={t("heroImgAlt")}
              width={2000}
              height={1500}
              className="h-full w-full object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1152px"
              priority
            />
          </div>

          <div className="mx-auto mt-6 max-w-xl text-center md:mt-14">
            <p className="text-base leading-relaxed text-[#F5EFE3]/70 md:text-lg">
              {t("intro")}
            </p>
          </div>
        </div>
      </section>

      <div className="px-0">
        <section
          className="border-t border-[#D4A853]/10 pt-4 pb-6 md:py-20"
          aria-label="Carbonade"
        >
          <div className="grid grid-cols-1 items-stretch gap-6 md:gap-12 lg:grid-cols-2">
            <SplitPosterImage
              src="/images/promotional/frietkot-carbonade-flamande-biere-brune-bourg-argental.webp"
              alt={t("carbonadeImgAlt")}
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <EditorialBlock
              eyebrow={t("carbonadeEyebrow")}
              headline={t("carbonadeHeadline")}
              price={p}
            >
              {t("carbonadeBody")}
            </EditorialBlock>
          </div>
        </section>

        <section
          className="border-t border-[#D4A853]/10 py-6 md:py-20"
          aria-label="Vol-au-vent"
        >
          <div className="grid grid-cols-1 items-stretch gap-6 md:gap-12 lg:grid-cols-2">
            <div className="order-2 lg:order-1">
              <EditorialBlock
                eyebrow={t("volEyebrow")}
                headline={t("volHeadline")}
                price={p}
              >
                {t("volBody")}
              </EditorialBlock>
            </div>
            <div className="order-1 lg:order-2">
              <SplitPosterImage
                src="/images/promotional/frietkot-vol-au-vent-bourg-argental.webp"
                alt={t("volImgAlt")}
                sizes="(max-width: 1023px) 100vw, 50vw"
              />
            </div>
          </div>
        </section>

        <section
          className="border-t border-[#D4A853]/10 py-6 md:py-20"
          aria-label="Boulets"
        >
          <div className="grid grid-cols-1 items-stretch gap-6 md:gap-12 lg:grid-cols-2">
            <SplitPosterImage
              src="/images/promotional/frietkot-plats-du-jour-carbonade-vol-au-vent-boulets-bourg-argental.webp"
              alt={t("bouletsImgAlt")}
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <EditorialBlock
              eyebrow={t("bouletsEyebrow")}
              headline={t("bouletsHeadline")}
              price={p}
            >
              {t("bouletsBody")}
            </EditorialBlock>
          </div>
        </section>

        <section
          className="border-t border-[#D4A853]/10 py-6 md:py-20"
          aria-label="Sauces"
        >
          <div className="grid grid-cols-1 items-stretch gap-6 md:gap-12 lg:grid-cols-2">
            <SplitPosterImage
              src="/images/promotional/frietkot-sauces-maison-bourg-argental.webp"
              alt={t("saucesImgAlt")}
              sizes="(max-width: 1023px) 100vw, 55vw"
            />
            <div className="flex max-w-lg flex-col justify-center px-6 py-0 md:px-12 md:py-12 lg:px-20">
              <p className="section-eyebrow">{t("saucesEyebrow")}</p>
              <h2
                className="mt-3 font-[var(--font-fraunces)] text-3xl leading-tight text-[#f5efe3] [font-style:italic] md:text-4xl"
                style={{ fontFeatureSettings: '"opsz" 72' }}
              >
                {t("saucesTitle")}
              </h2>
              <p className="mt-5 max-w-lg text-base leading-[1.75] text-[#c8c1b5]">
                {t("saucesBody")}
              </p>
            </div>
          </div>
        </section>

        <section
          className="border-t border-[#D4A853]/10 py-6 md:py-20"
          aria-label="Desserts"
        >
          <div className="grid grid-cols-1 items-stretch gap-6 md:gap-12 lg:grid-cols-2">
            <SplitPosterImage
              src="/images/promotional/frietkot-gaufres-bruxelles-bourg-argental.webp"
              alt={t("dessertsImgAlt")}
              sizes="(max-width: 1023px) 100vw, 50vw"
            />
            <div className="flex max-w-lg flex-col justify-center px-6 py-0 md:px-12 md:py-12 lg:px-20">
              <p className="section-eyebrow">{t("dessertsEyebrow")}</p>
              <h2
                className="mt-3 font-[var(--font-fraunces)] text-3xl leading-tight text-[#f5efe3] [font-style:italic] md:text-4xl"
                style={{ fontFeatureSettings: '"opsz" 72' }}
              >
                {t("dessertsTitle")}
              </h2>
              <p className="mt-5 text-base leading-[1.75] text-[#c8c1b5]">
                {t("dessertsBody")}
              </p>
            </div>
          </div>
        </section>

        <section
          id="glaces"
          className="relative scroll-mt-24 overflow-hidden bg-[#0A0A0A] py-6 md:py-20"
        >
          <div
            className="pointer-events-none absolute inset-0 opacity-[0.04]"
            style={{
              background:
                "radial-gradient(ellipse at 70% 30%, #D4A853 0%, transparent 50%)",
            }}
            aria-hidden
          />
          <div className="relative mx-auto max-w-6xl px-6">
            <div className="mb-8 max-w-3xl md:mb-16">
              <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-[#D4A853]">
                {g("sectionEyebrow")}
              </p>
              <h2
                className="mb-8 font-[var(--font-fraunces)] text-4xl italic leading-[1.05] text-[#F5EFE3] md:text-5xl lg:text-6xl"
                style={{ fontFeatureSettings: '"opsz" 72' }}
              >
                {g("sectionTitle")}
              </h2>
              <div className="mb-8 flex items-center gap-4">
                <div className="h-px w-20 bg-[#D4A853]/40" />
                <span className="text-sm text-[#D4A853]/60">✦</span>
              </div>
              <p className="mb-4 text-[17px] leading-[1.8] text-[#F5EFE3]/85">
                {g("sectionBody1")}
              </p>
              <p className="text-[16px] leading-[1.8] text-[#F5EFE3]/70 italic">
                {g("sectionBody2")}
              </p>
            </div>
            <div className="mb-8 border-y border-[#D4A853]/15 py-6 md:mb-20 md:py-8">
              <div className="grid grid-cols-3 gap-4 text-center">
                <div>
                  <p className="font-[var(--font-fraunces)] text-3xl italic text-[#D4A853] md:text-4xl">
                    12+
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#F5EFE3]/60">
                    {g("statFlavors")}
                  </p>
                </div>
                <div className="border-x border-[#D4A853]/10">
                  <p className="font-[var(--font-fraunces)] text-3xl italic text-[#D4A853] md:text-4xl">
                    100%
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#F5EFE3]/60">
                    {g("statMaison")}
                  </p>
                </div>
                <div>
                  <p className="font-[var(--font-fraunces)] text-3xl italic text-[#D4A853] md:text-4xl">
                    0
                  </p>
                  <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#F5EFE3]/60">
                    {g("statArtificial")}
                  </p>
                </div>
              </div>
            </div>
            {categoryOrder.map((category: IceCreamCategory) => {
              const flavorsInCategory = iceCreamFlavors.filter(
                (f) => f.category === category,
              );
              return (
                <div key={category} className="mb-8 md:mb-16">
                  <div className="mb-6 flex items-baseline gap-4 md:mb-10">
                    <h3 className="text-[11px] uppercase tracking-[0.22em] text-[#D4A853]">
                      {g(
                        {
                          classique: "categories.classique",
                          signature: "categories.signature",
                          gourmand: "categories.gourmand",
                          sorbet: "categories.sorbet",
                        }[category],
                      )}
                    </h3>
                    <div className="h-px flex-1 bg-[#D4A853]/15" />
                    <span className="text-[11px] uppercase tracking-[0.15em] text-[#F5EFE3]/40">
                      {flavorsInCategory.length}
                    </span>
                  </div>
                  <div className="grid grid-cols-2 gap-6 sm:grid-cols-3 md:grid-cols-3 md:gap-12">
                    {flavorsInCategory.map((flavor) => (
                      <div
                        key={flavor.id}
                        className="group flex flex-col items-center gap-4 rounded-sm p-4 transition-all duration-500 hover:bg-[#141414]"
                      >
                        <IceCreamScoop
                          color={flavor.color}
                          size={80}
                          className="transition-transform duration-500 group-hover:scale-110 group-hover:-rotate-3"
                        />
                        <span
                          className="text-center font-[var(--font-fraunces)] text-xl italic text-[#F5EFE3] md:text-2xl"
                          style={{ fontFeatureSettings: '"opsz" 72' }}
                        >
                          {(g as (k: string) => string)(flavor.nameKey)}
                        </span>
                      </div>
                    ))}
                  </div>
                </div>
              );
            })}
            <div className="mx-auto mt-8 max-w-2xl border-t border-[#D4A853]/15 pt-8 text-center md:mt-12 md:pt-12">
              <p
                className="mb-3 font-[var(--font-fraunces)] text-[17px] italic leading-[1.8] text-[#F5EFE3]/75"
                style={{ fontFeatureSettings: '"opsz" 72' }}
              >
                {g("closingNote")}
              </p>
              <p className="text-[11px] uppercase tracking-[0.18em] text-[#D4A853]/80">
                {g("closingCta")}
              </p>
            </div>
          </div>
        </section>
      </div>

      <div className="px-6 md:px-10">
        <div className="mx-auto w-full max-w-7xl py-6 md:py-20">
          <h2 className="text-center font-[var(--font-fraunces)] text-2xl text-[#f5efe3] [font-style:italic]">
            {t("pricingTitle")}
          </h2>
          <p className="mx-auto mt-3 max-w-2xl text-center text-sm text-[#c8c1b5]">
            {t("pricingSubtitle")}
          </p>
        </div>

        <div className="mx-auto grid w-full max-w-7xl gap-6 md:grid-cols-2">
          <article className="premium-card rounded-3xl p-7">
            <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              {t("fritesTitle")}
            </h3>
            <ul className="mt-5 space-y-3 text-[#f5efe3]">
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>{t("cornet")}</span>
                <span className="text-[#D4A853]">
                  4,50 {t("euro")}
                </span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>{t("grandCornet")}</span>
                <span className="text-[#D4A853]">
                  6,00 {t("euro")}
                </span>
              </li>
              <li className="flex items-center justify-between pb-1">
                <span>{t("suppSauce")}</span>
                <span className="text-[#D4A853]">
                  0,80 {t("euro")}
                </span>
              </li>
            </ul>
          </article>

          <article className="premium-card rounded-3xl p-7">
            <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              {t("saucesListTitle")}
            </h3>
            <p className="mt-5 text-[#c8c1b5]">{t("saucesListBody")}</p>
          </article>

          <article className="premium-card rounded-3xl p-7">
            <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              {t("platsTitle")}
            </h3>
            <ul className="mt-5 space-y-3 text-[#f5efe3]">
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>{t("labelCarbonade")}</span>
                <span className="text-[#D4A853]">{p}</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>{t("labelVol")}</span>
                <span className="text-[#D4A853]">{p}</span>
              </li>
              <li className="flex items-center justify-between pb-1">
                <span>{t("labelBoulets")}</span>
                <span className="text-[#D4A853]">{p}</span>
              </li>
            </ul>
          </article>

          <article className="premium-card rounded-3xl p-7">
            <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              {t("saladesTitle")}
            </h3>
            <ul className="mt-5 space-y-3 text-[#f5efe3]">
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>{t("labelSalPoulet")}</span>
                <span className="text-[#D4A853]">{p}</span>
              </li>
              <li className="flex items-center justify-between border-b border-white/10 pb-2">
                <span>{t("labelSalThon")}</span>
                <span className="text-[#D4A853]">{p}</span>
              </li>
              <li className="flex items-center justify-between pb-1">
                <span>{t("labelSalSaumon")}</span>
                <span className="text-[#D4A853]">{p}</span>
              </li>
            </ul>
          </article>

          <article className="premium-card rounded-3xl p-7">
            <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              {t("dessertsListTitle")}
            </h3>
            <ul className="mt-5 space-y-3 text-[#f5efe3]">
              <li className="border-b border-white/10 pb-2">
                {t("dessertGaufre")}
              </li>
              <li className="border-b border-white/10 pb-2">
                {t("dessertCreme")}
              </li>
              <li>{t("dessertGlace")}</li>
            </ul>
          </article>

          <article className="premium-card rounded-3xl p-7">
            <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              {t("biereListTitle")}
            </h3>
            <ul className="mt-5 space-y-3 text-[#f5efe3]">
              <li className="border-b border-white/10 pb-2">
                {t("labelChimay")}
              </li>
              <li className="border-b border-white/10 pb-2">
                {t("labelHerberg")}
              </li>
              <li className="border-b border-white/10 pb-2">
                {t("labelPaljas")}
              </li>
              <li>{t("biereSaison")}</li>
            </ul>
          </article>
        </div>

        <section className="mx-auto mt-8 w-full max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-black/40 p-8 text-center shadow-[0_28px_75px_rgba(0,0,0,0.5)] backdrop-blur-xl md:mt-14 md:p-10">
          <p className="text-[#c8c1b5]">{t("callout")}</p>
          <div className="mt-6">
            <CtaButton href="tel:+33784428106">{t("callCta")}</CtaButton>
          </div>
        </section>
      </div>
    </main>
  );
}
