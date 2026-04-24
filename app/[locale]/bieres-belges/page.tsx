import { BeerGlass } from "@/app/components/beer-glass";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import { beers, type Beer, type BeerMessageKey } from "./beers-data";

const BASE_URL = "https://frietkot-bourg-argental.vercel.app";

type Props = { params: Promise<{ locale: string }> };

type BieresTranslate = (key: BieresKey) => string;

type BieresKey =
  | "pageTitle"
  | "pageDescription"
  | "ogTitle"
  | "ogDescription"
  | "heroEyebrow"
  | "heroImgAlt"
  | "eyebrow"
  | "introTitle"
  | "introBody"
  | "categoryTrappiste"
  | "categoryBlondeForte"
  | "categoryAbbaye"
  | "categorySpecial"
  | "pairingLabel"
  | "note"
  | `${BeerMessageKey}.tagline`
  | `${BeerMessageKey}.description`
  | `${BeerMessageKey}.pairing`;

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "bieres" });
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
    alternates: {
      canonical: `/${locale}/bieres-belges`,
      languages: {
        fr: `${BASE_URL}/fr/bieres-belges`,
        en: `${BASE_URL}/en/bieres-belges`,
        "x-default": `${BASE_URL}/fr/bieres-belges`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: [
        "/images/promotional/frietkot-bieres-belges-chimay-duvel-paljas-bourg-argental.webp",
      ],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
    },
  };
}

function BeerSection({
  list,
  title,
  t,
}: {
  list: Beer[];
  title: string;
  t: BieresTranslate;
}) {
  return (
    <section className="mx-auto max-w-6xl px-6 py-8 md:py-16">
      <h3 className="mb-6 text-center text-[11px] uppercase tracking-[0.18em] text-[#D4A853] md:mb-10">
        {title}
      </h3>
      <div className="grid gap-8 md:grid-cols-2 lg:gap-16">
        {list.map((beer) => {
          const prefix = beer.msg;
          return (
            <article
              key={beer.id}
              className="group flex items-start gap-5 md:gap-6"
            >
              <div className="flex w-20 flex-shrink-0 flex-col items-center gap-2 md:w-24">
                <div
                  className="h-1 w-20 rounded-full max-md:w-16"
                  style={{ backgroundColor: beer.hexColor, opacity: 0.9 }}
                />
                <div className="w-full max-w-[5.5rem] transition-transform duration-500 group-hover:scale-105">
                  <BeerGlass
                    idPrefix={beer.id}
                    type={beer.glassType}
                    color={beer.hexColor}
                    className="h-auto w-full"
                  />
                </div>
              </div>
              <div className="min-w-0 flex-1">
                <div className="mb-2 flex flex-wrap items-baseline justify-between gap-3">
                  <h4 className="font-[var(--font-fraunces)] text-2xl italic text-[#F5EFE3] md:text-3xl">
                    {beer.name}
                  </h4>
                  <span className="whitespace-nowrap text-[11px] uppercase tracking-[0.15em] text-[#D4A853]">
                    {beer.abv}% ABV
                  </span>
                </div>
                <p className="mb-3 text-[11px] uppercase tracking-[0.15em] text-[#F5EFE3]/50">
                  {beer.brewery} · {beer.region}
                </p>
                <p className="mb-3 font-[var(--font-fraunces)] text-[15px] italic text-[#D4A853]/90">
                  {t(`${prefix}.tagline`)}
                </p>
                <p className="mb-4 text-[15px] leading-[1.7] text-[#F5EFE3]/75">
                  {t(`${prefix}.description`)}
                </p>
                <p className="border-l border-[#D4A853]/30 pl-3 text-[13px] italic text-[#F5EFE3]/50">
                  {t("pairingLabel")}: {t(`${prefix}.pairing`)}
                </p>
              </div>
            </article>
          );
        })}
      </div>
    </section>
  );
}

export default async function BieresBelgesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = (await getTranslations("bieres")) as unknown as BieresTranslate;

  const trappistes = beers.filter((b) => b.category === "trappiste");
  const blondeForte = beers.filter((b) => b.category === "blonde-forte");
  const abbaye = beers.filter((b) => b.category === "abbaye");
  const special = beers.filter((b) => b.category === "special");

  return (
    <main className="bg-[#050505] pb-12 text-[#F5EFE3] md:pb-20">
      <section className="bg-[#0A0A0A] px-6 pt-20 pb-8 md:px-8 md:pt-28 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-center text-[11px] uppercase tracking-[0.18em] text-[#D4A853]">
            {t("heroEyebrow")}
          </p>
          <div className="overflow-hidden rounded-sm shadow-2xl">
            <Image
              src="/images/promotional/frietkot-bieres-belges-chimay-duvel-paljas-bourg-argental.webp"
              alt={t("heroImgAlt")}
              width={2000}
              height={1400}
              className="h-auto w-full object-contain"
              sizes="(max-width: 768px) 100vw, (max-width: 1024px) 90vw, 1152px"
              priority
            />
          </div>
        </div>
      </section>

      <section className="mx-auto max-w-3xl px-6 py-10 text-center md:py-20">
        <p className="mb-6 text-[11px] uppercase tracking-[0.18em] text-[#D4A853]">
          {t("eyebrow")}
        </p>
        <h2
          className="mb-8 font-[var(--font-fraunces)] text-4xl italic leading-[1.05] md:text-5xl lg:text-6xl"
        >
          {t("introTitle")}
        </h2>
        <p className="mx-auto max-w-xl text-[17px] leading-[1.7] text-[#F5EFE3]/80">
          {t("introBody")}
        </p>
      </section>

      <BeerSection
        list={trappistes}
        title={t("categoryTrappiste")}
        t={t}
      />
      <BeerSection
        list={blondeForte}
        title={t("categoryBlondeForte")}
        t={t}
      />
      <BeerSection
        list={abbaye}
        title={t("categoryAbbaye")}
        t={t}
      />
      <BeerSection
        list={special}
        title={t("categorySpecial")}
        t={t}
      />

      <section className="mx-auto max-w-2xl px-6 py-8 text-center md:py-16">
        <p className="text-sm italic text-[#F5EFE3]/60">{t("note")}</p>
      </section>
    </main>
  );
}
