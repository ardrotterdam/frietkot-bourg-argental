import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import SectionHeading from "../../components/section-heading";

const BASE_URL = "https://frietkot-bourg-argental.vercel.app";

type Props = { params: Promise<{ locale: string }> };

const BEER_KEYS = [
  "chimayBleue",
  "chimayRouge",
  "herberg",
  "paljas",
  "duvel",
] as const;

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

export default async function BieresBelgesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("bieres");
  const tItem = await getTranslations("bieresItems");

  return (
    <main className="min-h-screen bg-[#050505] pb-20 pt-8 text-white md:pt-10">
      <section className="bg-[#0A0A0A] px-6 pb-12 pt-4 md:px-8 md:pb-16">
        <div className="mx-auto max-w-6xl">
          <p className="mb-6 text-center text-[11px] uppercase tracking-[0.18em] text-[#D4A853]">
            {t("eyebrow")}
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

      <section className="mx-auto w-full max-w-7xl px-6 py-10 md:px-10 md:py-12">
        <SectionHeading
          eyebrow={t("sectionEyebrow")}
          title={t("sectionTitle")}
          description={t("sectionDesc")}
        />
        <p className="mt-6 max-w-4xl text-[#c8c1b5]">{t("intro")}</p>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 px-6 md:grid-cols-2 md:px-10">
        {BEER_KEYS.map((id) => (
          <article key={id} className="premium-card rounded-3xl p-7">
            <p className="section-eyebrow">
              {tItem(`${id}.type` as "chimayBleue.type")}
            </p>
            <h2 className="mt-2 font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
              {tItem(`${id}.name` as "chimayBleue.name")}
            </h2>
            <p className="mt-4 text-sm uppercase tracking-[0.14em] text-[#c8c1b5]">
              {tItem(`${id}.brewery` as "chimayBleue.brewery")} ·{" "}
              {tItem(`${id}.abv` as "chimayBleue.abv")}
            </p>
            <p className="mt-4 text-[#c8c1b5]">
              {tItem(`${id}.note` as "chimayBleue.note")}
            </p>
            <p className="mt-3 text-[#D4A853]">
              {t("pairing", {
                dish: tItem(`${id}.pairing` as "chimayBleue.pairing"),
              })}
            </p>
          </article>
        ))}
      </section>
    </main>
  );
}
