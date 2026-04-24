"use client";

import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";

export default function SiteFooter() {
  const t = useTranslations("footer");
  return (
    <footer className="border-t border-white/10 bg-[#090909] px-6 py-12 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2">
        <div>
          <p className="section-eyebrow">{t("eyebrow")}</p>
          <p className="mt-3 max-w-md text-sm text-[#c8c1b5]">
            {t("tagline")}
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-[#f5efe3] md:justify-end">
          <Link
            className="transition-colors hover:text-[#FFD700]"
            href="/notre-histoire"
          >
            {t("notreHistoire")}
          </Link>
          <Link
            className="transition-colors hover:text-[#FFD700]"
            href="/mentions-legales"
          >
            {t("mentionsLegales")}
          </Link>
        </div>
      </div>
    </footer>
  );
}
