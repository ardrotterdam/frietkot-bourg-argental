import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import SectionHeading from "../../components/section-heading";

const BASE_URL = "https://frietkot-bourg-argental.vercel.app";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "mentions" });
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
    alternates: {
      canonical: `/${locale}/mentions-legales`,
      languages: {
        fr: `${BASE_URL}/fr/mentions-legales`,
        en: `${BASE_URL}/en/mentions-legales`,
        "x-default": `${BASE_URL}/fr/mentions-legales`,
      },
    },
    openGraph: {
      title: t("pageTitle"),
      description: t("pageDescription"),
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
    },
  };
}

export default async function MentionsLegalesPage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("mentions");

  return (
    <main className="bg-[#050505] px-6 pb-12 text-white md:px-10 md:pb-20">
      <section className="mx-auto w-full max-w-5xl pt-20 pb-8 md:pt-28 md:pb-16">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
      </section>

      <section className="mx-auto w-full max-w-5xl space-y-4 text-[#c8c1b5]">
        <p>{t("l1")}</p>
        <p>{t("l2")}</p>
        <p>{t("l3")}</p>
        <p>{t("l4")}</p>
        <p>{t("l5")}</p>
      </section>
    </main>
  );
}
