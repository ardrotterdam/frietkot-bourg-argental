import { routing } from "@/i18n/routing";
import { NextIntlClientProvider } from "next-intl";
import { getMessages, getTranslations, setRequestLocale } from "next-intl/server";
import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import { notFound } from "next/navigation";
import type { ReactNode } from "react";
import SiteFooter from "../components/site-footer";
import SiteNavbar from "../components/site-navbar";
import SiteProviders from "../components/site-providers";
import "../globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
});

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  style: ["normal", "italic"],
  display: "swap",
});

const BASE_URL = "https://frietkot-bourg-argental.vercel.app";

type Props = {
  children: ReactNode;
  params: Promise<{ locale: string }>;
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "layout" });

  return {
    metadataBase: new URL(BASE_URL),
    title: t("title"),
    description: t("description"),
    keywords: [
      t("keywords1"),
      t("keywords2"),
      t("keywords3"),
      t("keywords4"),
      t("keywords5"),
      t("keywords6"),
    ],
    openGraph: {
      title: t("ogTitle"),
      description: t("ogDescription"),
      url: BASE_URL,
      siteName: "Frietkot",
      images: [
        {
          url: "/frietkot-og-image.jpg",
          width: 1200,
          height: 630,
          alt: t("ogImageAlt"),
          type: "image/jpeg",
        },
      ],
      locale: locale === "fr" ? "fr_FR" : "en_US",
      type: "website",
    },
    twitter: {
      card: "summary_large_image",
      title: t("twitterTitle"),
      description: t("twitterDescription"),
      images: ["/frietkot-og-image.jpg"],
    },
    alternates: {
      canonical: `/${locale}`,
      languages: {
        fr: `${BASE_URL}/fr`,
        en: `${BASE_URL}/en`,
        "x-default": `${BASE_URL}/fr`,
      },
    },
  };
}

export default async function LocaleLayout({ children, params }: Props) {
  const { locale } = await params;

  if (!(routing.locales as readonly string[]).includes(locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();
  const t = await getTranslations({ locale, namespace: "layout" });

  return (
    <html
      lang={locale}
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white antialiased">
        <NextIntlClientProvider messages={messages}>
          <SiteProviders>
            <SiteNavbar />
            <div className="flex-1">{children}</div>
            <SiteFooter />
          </SiteProviders>
        </NextIntlClientProvider>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify([
              {
                "@context": "https://schema.org",
                "@type": "Restaurant",
                name: "Frietkot",
                image: [
                  "/images/promotional/frietkot-pascal-proprietaire-bourg-argental.webp",
                  "/images/promotional/frietkot-plats-du-jour-carbonade-vol-au-vent-boulets-bourg-argental.webp",
                  "/images/promotional/frietkot-carbonade-flamande-biere-brune-bourg-argental.webp",
                  "/images/promotional/frietkot-vol-au-vent-bourg-argental.webp",
                  "/images/promotional/frietkot-sauces-maison-bourg-argental.webp",
                  "/images/promotional/frietkot-gaufres-bruxelles-bourg-argental.webp",
                  "/images/promotional/frietkot-bieres-belges-chimay-duvel-paljas-bourg-argental.webp",
                ],
                servesCuisine: "Belgian",
                telephone: "+33784428106",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "7 place d'Armeville",
                  postalCode: "42220",
                  addressLocality: "Bourg-Argental",
                  addressCountry: "FR",
                },
                aggregateRating: {
                  "@type": "AggregateRating",
                  ratingValue: "4.5",
                  reviewCount: "308",
                },
              },
              {
                "@context": "https://schema.org",
                "@type": "Person",
                name: "Pascal",
                jobTitle: t("schemaProprietaire"),
                worksFor: {
                  "@type": "Restaurant",
                  name: "Frietkot",
                },
                image: "/images/promotional/frietkot-pascal-proprietaire-bourg-argental.webp",
              },
              {
                "@context": "https://schema.org",
                "@type": "LodgingBusiness",
                name: "Auberge Frietkot",
                telephone: "+33784428106",
                address: {
                  "@type": "PostalAddress",
                  streetAddress: "7 place d'Armeville",
                  postalCode: "42220",
                  addressLocality: "Bourg-Argental",
                  addressCountry: "FR",
                },
              },
            ]),
          }}
        />
      </body>
    </html>
  );
}
