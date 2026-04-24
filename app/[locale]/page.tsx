import { Link } from "@/i18n/navigation";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import CtaButton from "../components/cta-button";
import FrietkotWarpSection from "../components/frietkot-warp-section";
import HeroCraft from "../components/hero-craft";
import NightTimelineClock from "../components/night-timeline-clock";
import RevealImage from "../components/reveal-image";
import SectionHeading from "../components/section-heading";
import StatCounters from "../components/stat-counters";

const BASE_URL = "https://frietkot-bourg-argental.vercel.app";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "home" });
  return {
    title: t("metaTitle"),
    description: t("metaDescription"),
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: `${BASE_URL}/fr`,
        en: `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/fr`,
      },
    },
    openGraph: {
      title: t("metaTitle"),
      description: t("metaDescription"),
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
    },
  };
}

export default async function HomePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("home");

  return (
    <>
      <NightTimelineClock />
      <main className="text-white">
        <HeroCraft key={locale} />

        <section
          className="bg-[#0A0A0A] text-[#F5EFE3]"
          aria-label={t("pascalSectionAria")}
        >
          <div className="grid min-h-0 grid-cols-1 items-stretch lg:min-h-[min(100vh,900px)] lg:grid-cols-2">
            <div className="flex min-h-[min(50vh,520px)] items-center justify-center p-6 md:p-10 lg:min-h-0">
              <Image
                src="/images/promotional/frietkot-pascal-proprietaire-bourg-argental.webp"
                alt={t("pascalImgAlt")}
                width={1200}
                height={1500}
                className="h-auto w-full max-w-xl object-contain"
                sizes="(max-width: 1023px) 100vw, 50vw"
                priority={false}
              />
            </div>
            <div className="flex flex-col justify-center px-6 py-12 md:px-12 lg:px-20">
              <p className="section-eyebrow">{t("pascalEyebrow")}</p>
              <h2
                className="mt-4 max-w-lg font-[var(--font-fraunces)] text-[length:clamp(2rem,4vw,3.25rem)] font-normal leading-[1.1] text-[#D4A853] [font-style:italic]"
                style={{ fontFeatureSettings: '"opsz" 72' }}
              >
                {t("pascalTitle")}
              </h2>
              <p className="mt-6 max-w-[460px] text-[17px] leading-[1.7] text-[#F5EFE3]">
                {t("pascalBody")}
              </p>
              <Link
                href="/notre-histoire"
                className="mt-8 inline-flex w-max border-b border-[#D4A853]/50 pb-0.5 text-sm font-medium text-[#D4A853] transition-colors hover:border-[#D4A853] hover:text-[#E8C775]"
                data-cursor="cta"
              >
                {t("pascalCta")}
              </Link>
            </div>
          </div>
        </section>

        <div className="bg-[#050505]">
          <section
            data-night-section
            className="relative border-t border-[#D4A853]/15 px-6 py-20 md:px-10"
          >
            <div className="mx-auto w-full max-w-7xl">
              <p className="section-eyebrow">{t("belgiumEyebrow")}</p>
              <h1
                className="mt-6 max-w-4xl font-[var(--font-fraunces)] text-[length:var(--font-h1)] font-normal leading-[1.05] text-[#f5efe3] [font-style:italic]"
                style={{ fontFeatureSettings: '"opsz" 72' }}
              >
                <span className="block">{t("belgiumTitle1")}</span>
                <span className="mt-1 block text-[#D4A853] not-italic">
                  {t("belgiumTitle2")}
                </span>
              </h1>
              <p className="mt-8 max-w-2xl text-lg text-[#f5efe3]/90 md:text-xl">
                {t("belgiumBody")}
              </p>
              <div className="mt-10 flex flex-wrap items-center gap-4">
                <CtaButton href="/la-carte">{t("belgiumCtaPrimary")}</CtaButton>
                <CtaButton href="/auberge" variant="ghost">
                  {t("belgiumCtaSecondary")}
                </CtaButton>
              </div>
            </div>
          </section>

          <FrietkotWarpSection />

          <section data-night-section className="px-6 py-20 md:px-10">
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
              <article className="premium-card rounded-3xl p-8 md:p-12">
                <SectionHeading
                  eyebrow={t("metierEyebrow")}
                  title={t("metierTitle")}
                />
                <p className="mt-6 max-w-3xl text-[#c8c1b5] md:text-lg">
                  {t("metierP1")}
                </p>
                <p className="mt-5 max-w-3xl text-[#c8c1b5] md:text-lg">
                  {t("metierP2")}
                </p>
              </article>
              <aside className="premium-card rounded-3xl p-8">
                <StatCounters key={locale} />
              </aside>
            </div>
            <div className="mx-auto mt-8 grid w-full max-w-7xl gap-6 md:grid-cols-2">
              <div className="relative min-h-[320px]">
                <RevealImage
                  src="/images/promotional/frietkot-sauces-maison-bourg-argental.webp"
                  alt={t("saucesImgAlt")}
                  className="relative min-h-[320px] w-full overflow-hidden rounded-3xl bg-[#0A0A0A]"
                  imageClassName="object-contain object-center"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
            </div>
          </section>

          <section data-night-section className="px-6 py-20 md:px-10">
            <div className="mx-auto w-full max-w-7xl">
              <SectionHeading
                eyebrow={t("carrouselEyebrow")}
                title={t("carrouselTitle")}
                description={t("carrouselDesc")}
              />
              <div className="mt-12 grid gap-6 lg:grid-cols-3">
                {[
                  { t: t("car1Title"), d: t("car1Body") },
                  { t: t("car2Title"), d: t("car2Body") },
                  { t: t("car3Title"), d: t("car3Body") },
                ].map((c) => (
                  <article
                    key={c.t}
                    className="premium-card overflow-x-auto rounded-3xl p-7 [scrollbar-width:thin] md:overflow-x-visible"
                    data-cursor="menu"
                  >
                    <h3 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3] [font-style:italic]">
                      {c.t}
                    </h3>
                    <p className="mt-4 min-w-[200px] text-[#c8c1b5]">{c.d}</p>
                  </article>
                ))}
              </div>
              <div className="mt-10">
                <CtaButton href="/la-carte">{t("carteCta")}</CtaButton>
              </div>
            </div>
          </section>

          <section data-night-section className="px-6 py-20 md:px-10">
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1fr_1.1fr]">
              <article className="premium-card rounded-3xl p-8 md:p-12">
                <SectionHeading
                  eyebrow={t("biereEyebrow")}
                  title={t("biereTitle")}
                  description={t("biereDesc")}
                />
                <p className="mt-6 text-[#c8c1b5]">{t("biereP1")}</p>
                <p className="mt-4 text-[#c8c1b5]">{t("biereP2")}</p>
                <div className="mt-8">
                  <CtaButton href="/bieres-belges" variant="ghost">
                    {t("biereCta")}
                  </CtaButton>
                </div>
              </article>
              <div className="relative min-h-[360px]">
                <div data-cursor-beer>
                  <RevealImage
                    src="/images/promotional/frietkot-bieres-belges-chimay-duvel-paljas-bourg-argental.webp"
                    alt={t("biereImgAlt")}
                    className="h-full min-h-[360px] w-full"
                    imageClassName="object-contain object-center bg-[#0A0A0A]"
                    fill
                    sizes="(min-width: 1024px) 50vw, 100vw"
                  />
                </div>
              </div>
            </div>
          </section>

          <section
            data-night-section
            className="px-6 py-20 md:px-10"
            data-cursor-room
          >
            <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.05fr_0.95fr]">
              <article className="premium-card rounded-3xl p-8 md:p-12">
                <SectionHeading
                  eyebrow={t("innEyebrow")}
                  title={t("innTitle")}
                />
                <p className="mt-6 text-[#c8c1b5]">{t("innP1")}</p>
                <p className="mt-4 text-[#c8c1b5]">{t("innP2")}</p>
                <div className="mt-8">
                  <CtaButton href="/auberge">{t("innCta")}</CtaButton>
                </div>
              </article>
              <div className="relative min-h-[360px]" data-cursor-room>
                <RevealImage
                  src="/images/rooms/chambre-duvel-auberge-frietkot.webp"
                  alt={t("innImgAlt")}
                  className="h-full min-h-[360px] w-full"
                  imageClassName="object-cover"
                  fill
                  sizes="(min-width: 1024px) 45vw, 100vw"
                />
              </div>
            </div>
          </section>

          <section
            data-night-section
            className="px-6 pb-24 pt-6 md:px-10"
          >
            <div className="mx-auto w-full max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-black/40 p-10 shadow-[0_28px_75px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-14">
              <SectionHeading
                eyebrow={t("findEyebrow")}
                title={t("findTitle")}
              />
              <div className="mt-8 grid gap-6 text-[#f5efe3] md:grid-cols-3">
                <p>
                  <span className="block text-sm uppercase tracking-[0.16em] text-[#D4A853]">
                    {t("labelAddress")}
                  </span>
                  {t("addressLine")}
                </p>
                <p>
                  <span className="block text-sm uppercase tracking-[0.16em] text-[#D4A853]">
                    {t("labelPhone")}
                  </span>
                  {t("phoneLine")}
                </p>
                <p>
                  <span className="block text-sm uppercase tracking-[0.16em] text-[#D4A853]">
                    {t("labelHours")}
                  </span>
                  {t("hoursLine")}
                </p>
              </div>
              <div className="mt-8 rounded-2xl border border-dashed border-white/20 bg-black/40 p-6 text-sm text-[#c8c1b5]">
                {t("reviewsWidget")}
              </div>
            </div>
          </section>
        </div>
      </main>
    </>
  );
}
