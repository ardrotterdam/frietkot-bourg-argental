import { getTranslations, setRequestLocale } from "next-intl/server";
import { Link } from "@/i18n/navigation";
import type { Metadata } from "next";
import type { ReactNode } from "react";
import Image from "next/image";
import CtaButton from "../../components/cta-button";

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

        <section className="mx-auto w-full max-w-7xl py-12 md:py-16">
          <div className="rounded-3xl border border-[#D4A853]/20 bg-[#0A0A0A]/70 p-7 text-center shadow-[0_24px_70px_rgba(0,0,0,0.35)] md:p-9">
            <h2 className="font-[var(--font-fraunces)] text-3xl italic leading-tight text-[#f5efe3] md:text-4xl">
              {t("glacesCta.title")}
            </h2>
            <p className="mx-auto mt-3 max-w-xl text-sm leading-[1.7] text-[#c8c1b5] md:text-base">
              {t("glacesCta.text")}
            </p>
            <Link
              href="/glaces"
              className="mt-6 inline-flex items-center justify-center rounded-full border border-[#D4A853]/80 bg-[#D4A853] px-7 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-colors hover:border-[#F4B942] hover:bg-[#F4B942]"
              data-cursor="cta"
            >
              {t("glacesCta.button")}
            </Link>
          </div>
        </section>
      </div>
    </main>
  );
}
