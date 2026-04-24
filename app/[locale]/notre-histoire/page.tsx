import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";

const BASE_URL = "https://frietkot-bourg-argental.vercel.app";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "notreHistoire" });
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
    alternates: {
      canonical: `/${locale}/notre-histoire`,
      languages: {
        fr: `${BASE_URL}/fr/notre-histoire`,
        en: `${BASE_URL}/en/notre-histoire`,
        "x-default": `${BASE_URL}/fr/notre-histoire`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      images: ["/images/promotional/frietkot-pascal-proprietaire-bourg-argental.webp"],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
    },
  };
}

export default async function NotreHistoirePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("notreHistoire");

  return (
    <main className="min-h-screen bg-[#050505] text-white">
      <section
        className="relative min-h-0 border-b border-[#D4A853]/10 bg-[#0A0A0A] text-[#F5EFE3]"
        aria-label={t("sectionAria")}
      >
        <div className="grid min-h-0 grid-cols-1 lg:min-h-screen lg:grid-cols-2">
          <div className="order-2 flex flex-col justify-center px-6 py-12 [padding-left:clamp(1.5rem,5vw,6rem)] [padding-right:clamp(1.5rem,5vw,6rem)] md:px-10 lg:order-1 lg:min-h-0 lg:py-0">
            <p className="section-eyebrow">{t("eyebrow")}</p>
            <h1
              className="mt-3 max-w-xl font-[var(--font-fraunces)] text-[length:clamp(3rem,7vw,4.5rem)] font-normal leading-[1.05] text-[#F5EFE3] [font-style:italic]"
              style={{ fontFeatureSettings: '"opsz" 72' }}
            >
              {t("title")}
            </h1>
            <p className="mt-6 max-w-lg text-lg leading-[1.7] text-[#c8c1b5]">
              {t("lead")}
            </p>
          </div>
          <div className="order-1 flex min-h-[min(50vh,520px)] items-center justify-center border-[#D4A853]/10 bg-[#0A0A0A] p-6 lg:order-2 lg:min-h-screen lg:border-l lg:p-10">
            <Image
              src="/images/promotional/frietkot-pascal-proprietaire-bourg-argental.webp"
              alt={t("imgAlt")}
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
        <p>{t("p1")}</p>
        <p>{t("p2")}</p>
        <p>{t("p3")}</p>
      </section>
    </main>
  );
}
