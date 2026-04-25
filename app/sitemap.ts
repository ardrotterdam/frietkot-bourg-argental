import { routing } from "@/i18n/routing";
import type { MetadataRoute } from "next";

const BASE_URL = "https://frietkot-bourg-argental.vercel.app";
const PAGES = [
  "",
  "/la-carte",
  "/auberge",
  "/bieres-belges",
  "/glaces",
  "/contact",
  "/notre-histoire",
  "/mentions-legales",
];

export default function sitemap(): MetadataRoute.Sitemap {
  return PAGES.flatMap((path) =>
    routing.locales.map((locale) => ({
      url: `${BASE_URL}/${locale}${path}`,
      lastModified: new Date(),
      alternates: {
        languages: Object.fromEntries(
          routing.locales.map((l) => [l, `${BASE_URL}/${l}${path}`] as [string, string])
        ) as { fr: string; en: string },
      },
    }))
  );
}
