import type { Metadata } from "next";
import { Fraunces, Inter } from "next/font/google";
import SiteFooter from "./components/site-footer";
import SiteNavbar from "./components/site-navbar";
import SiteProviders from "./components/site-providers";
import "./globals.css";

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

export const metadata: Metadata = {
  metadataBase: new URL("https://frietkot-bourg-argental.vercel.app"),
  title: "Frietkot · Friterie Belge à Bourg-Argental · Depuis 1990",
  description:
    "Frites belges authentiques, bières trappistes et plats du jour faits maison à Bourg-Argental, Loire. Auberge sur place.",
  keywords: [
    "friterie belge loire",
    "frites belges bourg-argental",
    "restaurant belge bourg-argental",
    "chambres d'hôtes bourg-argental",
    "bière trappiste loire",
    "manger belge saint-étienne",
  ],
  openGraph: {
    title: "Frietkot — Friterie Belge à Bourg-Argental",
    description:
      "Frites belges authentiques, plats du jour faits maison, bières trappistes et auberge. Depuis 1990, au cœur de la Loire.",
    url: "https://frietkot-bourg-argental.vercel.app",
    siteName: "Frietkot",
    images: [
      {
        url: "/frietkot-og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Frietkot — Friterie Belge à Bourg-Argental, Loire. Frites fraîches et faites maison depuis 1990.",
        type: "image/jpeg",
      },
    ],
    locale: "fr_FR",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Frietkot — Friterie Belge à Bourg-Argental",
    description:
      "Frites belges authentiques, plats du jour faits maison, bières trappistes et auberge. Depuis 1990, au cœur de la Loire.",
    images: ["/frietkot-og-image.jpg"],
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html
      lang="fr"
      className={`${inter.variable} ${fraunces.variable} h-full antialiased`}
    >
      <body className="min-h-screen flex flex-col bg-black text-white antialiased">
        <SiteProviders>
          <SiteNavbar />
          <div className="flex-1">{children}</div>
          <SiteFooter />
        </SiteProviders>
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
                jobTitle: "Propriétaire",
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
