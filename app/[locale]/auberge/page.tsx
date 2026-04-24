import { RoomImageFrame } from "@/app/components/room-image-frame";
import { RoomIcon } from "@/app/components/room-icon";
import { getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { rooms, type RoomI18nKey } from "./rooms-data";

const BASE_URL = "https://frietkot-bourg-argental.vercel.app";

type Props = { params: Promise<{ locale: string }> };

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "auberge" });
  return {
    title: t("metaTitleThemed"),
    description: t("metaDescriptionThemed"),
    alternates: {
      canonical: `/${locale}/auberge`,
      languages: {
        fr: `${BASE_URL}/fr/auberge`,
        en: `${BASE_URL}/en/auberge`,
        "x-default": `${BASE_URL}/fr/auberge`,
      },
    },
    openGraph: {
      title: t("metaTitleThemed"),
      description: t("metaDescriptionThemed"),
      locale: locale === "fr" ? "fr_FR" : "en_US",
      alternateLocale: locale === "fr" ? "en_US" : "fr_FR",
    },
  };
}

type RoomCopy = (key: string) => string;

function roomText(t: RoomCopy, key: RoomI18nKey, field: string) {
  return t(`${key}.${field}`);
}

export default async function AubergePage({ params }: Props) {
  const { locale } = await params;
  setRequestLocale(locale);
  const t = await getTranslations("auberge");
  const tr = t as unknown as RoomCopy;

  return (
    <main className="bg-[#0A0A0A] text-[#F5EFE3]">
      <section className="mx-auto max-w-4xl px-6 pt-20 pb-8 text-center md:pt-28 md:pb-16">
        <p className="mb-4 text-[11px] uppercase tracking-[0.22em] text-[#D4A853] md:mb-8">
          {t("heroEyebrow")}
        </p>
        <h1
          className="mb-6 font-[var(--font-fraunces)] text-5xl italic leading-[0.95] md:mb-10 md:text-7xl lg:text-8xl"
        >
          {t("heroTitle1")}
          <br />
          <span className="text-[#D4A853]">{t("heroTitle2")}</span>
        </h1>

        <div className="mb-6 flex items-center justify-center gap-4 md:mb-10">
          <div className="h-px w-16 bg-[#D4A853]/40" />
          <span className="text-sm text-[#D4A853]/60">✦</span>
          <div className="h-px w-16 bg-[#D4A853]/40" />
        </div>

        <p className="mx-auto mb-4 max-w-2xl text-[17px] leading-[1.8] text-[#F5EFE3]/85">
          {t("heroSubtitle")}
        </p>
        <p className="mx-auto max-w-2xl text-[17px] leading-[1.8] text-[#F5EFE3]/75 italic">
          {t("heroConcept")}
        </p>
      </section>

      <section className="border-y border-[#D4A853]/20 bg-[#08080A]">
        <div className="mx-auto grid max-w-5xl grid-cols-3 gap-4 px-6 pt-4 pb-8 text-center md:py-16">
          <div>
            <p className="font-[var(--font-fraunces)] text-3xl italic text-[#D4A853] md:text-4xl">
              3
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#F5EFE3]/60">
              {t("statRooms")}
            </p>
          </div>
          <div className="border-x border-[#D4A853]/10">
            <p className="font-[var(--font-fraunces)] text-3xl italic text-[#D4A853] md:text-4xl">
              100%
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#F5EFE3]/60">
              {t("statBelgian")}
            </p>
          </div>
          <div>
            <p className="font-[var(--font-fraunces)] text-3xl italic text-[#D4A853] md:text-4xl">
              {t("statDistanceValue")}
            </p>
            <p className="mt-2 text-[10px] uppercase tracking-[0.18em] text-[#F5EFE3]/60">
              {t("statDistance")}
            </p>
          </div>
        </div>
      </section>

      {rooms.map((room, index) => {
        const reverse = index % 2 === 1;
        const roomNumber = String(index + 1).padStart(2, "0");
        const k = room.i18nKey;

        return (
          <section
            key={room.id}
            className="relative overflow-hidden"
            style={{
              backgroundColor: index === 1 ? "#08080A" : "#0A0A0A",
            }}
          >
            <div
              className="pointer-events-none absolute inset-0 opacity-[0.04]"
              style={{
                background: `radial-gradient(circle at ${reverse ? "80%" : "20%"} 50%, ${room.palette.primary} 0%, transparent 60%)`,
              }}
              aria-hidden
            />
            <div className="relative mx-auto max-w-7xl px-6 py-6 md:py-20">
              <div
                className={`grid items-center gap-6 md:gap-12 ${
                  reverse
                    ? "lg:grid-cols-[1fr_1.1fr]"
                    : "lg:grid-cols-[1.1fr_1fr]"
                }`}
              >
                <div className={reverse ? "lg:order-2" : ""}>
                  <RoomImageFrame
                    src={room.image}
                    alt={roomText(tr, k, "imageAlt")}
                    palette={room.palette}
                    reverse={reverse}
                    paletteLabel={t("paletteLabel")}
                    swatchPrimary={t("swatchPrimary")}
                    swatchSecondary={t("swatchSecondary")}
                    swatchAccent={t("swatchAccent")}
                  />
                </div>

                <div className={reverse ? "lg:order-1" : ""}>
                  <div className="mb-6 flex items-center gap-6 md:mb-8">
                    <span
                      className="font-[var(--font-fraunces)] text-6xl italic leading-none md:text-7xl"
                      style={{ color: room.palette.primary, opacity: 0.6 }}
                    >
                      {roomNumber}
                    </span>
                    <div className="min-w-0 flex-1">
                      <div
                        className="mb-2 h-px w-full"
                        style={{ background: `${room.palette.primary}40` }}
                      />
                      <RoomIcon
                        type={room.icon}
                        color={room.palette.primary}
                        className="h-10 w-10"
                      />
                    </div>
                  </div>

                  <p
                    className="mb-3 text-[10px] uppercase tracking-[0.22em]"
                    style={{ color: room.palette.primary }}
                  >
                    {t("roomLabel")} · {room.id.toUpperCase().replace(/-/g, " ")}
                  </p>

                  <h2 className="mb-3 font-[var(--font-fraunces)] text-4xl italic leading-[1.05] md:text-5xl lg:text-6xl">
                    {roomText(tr, k, "name")}
                  </h2>

                  <p
                    className="mb-6 font-[var(--font-fraunces)] text-xl italic md:mb-8"
                    style={{ color: room.palette.primary }}
                  >
                    {roomText(tr, k, "tagline")}
                  </p>

                  <div className="mb-6 md:mb-8">
                    <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[#F5EFE3]/50">
                      {t("beerStoryLabel")}
                    </p>
                    <p className="text-[16px] leading-[1.75] text-[#F5EFE3]/85">
                      {roomText(tr, k, "beerStory")}
                    </p>
                  </div>

                  <div className="mb-6 md:mb-8">
                    <p className="mb-3 text-[10px] uppercase tracking-[0.18em] text-[#F5EFE3]/50">
                      {t("roomStoryLabel")}
                    </p>
                    <p className="text-[16px] leading-[1.75] text-[#F5EFE3]/85">
                      {roomText(tr, k, "roomStory")}
                    </p>
                  </div>

                  <blockquote
                    className="mb-6 border-l-2 py-2 pl-6 text-[15px] italic leading-[1.7] md:mb-8"
                    style={{
                      borderColor: room.palette.primary,
                      color: "rgba(245, 239, 227, 0.75)",
                    }}
                  >
                    {roomText(tr, k, "atmosphere")}
                  </blockquote>

                  <div className="flex flex-wrap gap-6 text-[11px] uppercase tracking-[0.18em] text-[#F5EFE3]/60">
                    <span>
                      {room.capacity} {t("persons")}
                    </span>
                    <span aria-hidden>·</span>
                    <span>
                      {t(
                        `bed.${room.bed}` as
                          | "bed.double"
                          | "bed.twin"
                      )}
                    </span>
                    <span aria-hidden>·</span>
                    <span>{t("privateBathroom")}</span>
                  </div>
                </div>
              </div>
            </div>
          </section>
        );
      })}

      <section className="bg-gradient-to-b from-[#0A0A0A] to-[#08080A] py-12 md:py-24">
        <div className="mx-auto max-w-3xl px-6 text-center">
          <p className="mb-6 text-[11px] uppercase tracking-[0.22em] text-[#D4A853]">
            {t("ctaEyebrow")}
          </p>
          <h2 className="mb-8 font-[var(--font-fraunces)] text-4xl italic leading-[1.05] md:text-5xl lg:text-6xl">
            {t("ctaTitle")}
          </h2>
          <p className="mx-auto mb-10 max-w-xl text-[17px] leading-[1.8] text-[#F5EFE3]/80">
            {t("ctaBody")}
          </p>

          <div className="flex flex-col items-center justify-center gap-4 sm:flex-row">
            <a
              href="tel:+33784428106"
              className="inline-flex items-center gap-3 border border-[#D4A853] px-8 py-4 text-[13px] uppercase tracking-[0.18em] text-[#D4A853] transition-colors duration-300 hover:bg-[#D4A853] hover:text-[#0A0A0A]"
            >
              <svg
                className="h-4 w-4"
                fill="none"
                stroke="currentColor"
                strokeWidth="1.5"
                viewBox="0 0 24 24"
                aria-hidden
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  d="M2.25 6.75c0 8.284 6.716 15 15 15h2.25a2.25 2.25 0 002.25-2.25v-1.372c0-.516-.351-.966-.852-1.091l-4.423-1.106c-.44-.11-.902.055-1.173.417l-.97 1.293c-.282.376-.769.542-1.21.38a12.035 12.035 0 01-7.143-7.143c-.162-.441.004-.928.38-1.21l1.293-.97c.363-.271.527-.734.417-1.173L6.963 3.102a1.125 1.125 0 00-1.091-.852H4.5A2.25 2.25 0 002.25 4.5v2.25z"
                />
              </svg>
              07 84 42 81 06
            </a>
            <a
              href="mailto:frietkotpilat@gmail.com"
              className="inline-flex items-center gap-3 border-b border-transparent px-8 py-4 text-[13px] uppercase tracking-[0.18em] text-[#F5EFE3]/80 transition-colors duration-300 hover:border-[#F5EFE3]/60"
            >
              {t("ctaEmail")}
            </a>
          </div>

          <p className="mt-10 text-[12px] italic text-[#F5EFE3]/40">
            {t("ctaNote")}
          </p>
        </div>
      </section>
    </main>
  );
}
