import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import Image from "next/image";
import CtaButton from "../../components/cta-button";
import SectionHeading from "../../components/section-heading";

const BASE_URL = "https://frietkot-bourg-argental.vercel.app";

type Props = { params: Promise<{ locale: string }> };

const ROOMS: {
  image: string;
  nameKey: "room1Name" | "room2Name" | "room3Name";
  detailsKey: "room1Details" | "room2Details" | "room3Details";
  altKey: "room1Alt" | "room2Alt" | "room3Alt";
}[] = [
  {
    image: "/images/rooms/chambre-duvel-auberge-frietkot.webp",
    nameKey: "room1Name",
    detailsKey: "room1Details",
    altKey: "room1Alt",
  },
  {
    image: "/images/rooms/chambre-delirium-auberge-frietkot.webp",
    nameKey: "room2Name",
    detailsKey: "room2Details",
    altKey: "room2Alt",
  },
  {
    image: "/images/rooms/chambre-queue-de-charrue-auberge.webp",
    nameKey: "room3Name",
    detailsKey: "room3Details",
    altKey: "room3Alt",
  },
];

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "auberge" });
  return {
    title: t("pageTitle"),
    description: t("pageDescription"),
    alternates: {
      canonical: `/${locale}/auberge`,
      languages: {
        fr: `${BASE_URL}/fr/auberge`,
        en: `${BASE_URL}/en/auberge`,
        "x-default": `${BASE_URL}/fr/auberge`,
      },
    },
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
    },
  };
}

export default async function AubergePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("auberge");

  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-20 pt-14 text-white md:px-10">
      <section className="mx-auto w-full max-w-7xl py-16">
        <SectionHeading
          eyebrow={t("eyebrow")}
          title={t("title")}
          description={t("description")}
        />
        <p className="mt-6 max-w-4xl text-[#c8c1b5]">{t("intro")}</p>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.1fr_0.9fr]">
        <article className="premium-card rounded-3xl p-8">
          <h2 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">
            {t("pourQui")}
          </h2>
          <ul className="mt-5 list-disc space-y-3 pl-5 text-[#c8c1b5]">
            <li>{t("for1")}</li>
            <li>{t("for2")}</li>
            <li>{t("for3")}</li>
          </ul>
        </article>

        <div className="premium-card relative min-h-[320px] overflow-hidden rounded-3xl">
          <Image
            src="/images/rooms/chambre-duvel-auberge-frietkot.webp"
            alt={t("mapImgAlt")}
            fill
            className="object-cover"
            sizes="(min-width: 1024px) 40vw, 100vw"
          />
        </div>
      </section>

      <section className="mx-auto mt-10 grid w-full max-w-7xl gap-6 md:grid-cols-3">
        {ROOMS.map((room) => (
          <article
            key={room.nameKey}
            className="premium-card overflow-hidden rounded-3xl p-0"
            data-cursor-room
          >
            <div className="relative aspect-[4/3] w-full">
              <Image
                src={room.image}
                alt={t(room.altKey)}
                fill
                className="object-cover"
                sizes="(min-width: 1024px) 30vw, 100vw"
              />
            </div>
            <div className="p-7">
              <h3 className="font-[var(--font-fraunces)] text-2xl text-[#f5efe3]">
                {t(room.nameKey)}
              </h3>
              <p className="mt-3 text-[#c8c1b5]">
                {t(room.detailsKey)}
              </p>
            </div>
          </article>
        ))}
      </section>

      <div className="mx-auto mt-12 w-full max-w-7xl">
        <CtaButton href="tel:+33784428106">{t("reserveCta")}</CtaButton>
      </div>
    </main>
  );
}
