"use client";

import { usePathname, useRouter } from "@/i18n/navigation";
import { useLocale, useTranslations } from "next-intl";
import { useTransition } from "react";

const locales = [
  { code: "fr", label: "FR" },
  { code: "en", label: "EN" },
] as const;

export function LanguageSwitcher() {
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();
  const t = useTranslations("languageSwitcher");
  const [isPending, startTransition] = useTransition();

  function switchLocale(nextLocale: string) {
    startTransition(() => {
      router.replace(pathname, { locale: nextLocale });
    });
  }

  return (
    <div
      className="flex items-center gap-2 text-[11px] uppercase tracking-[0.18em]"
      role="group"
      aria-label={t("ariaLabel")}
    >
      {locales.map((loc, i) => (
        <div key={loc.code} className="flex items-center gap-2">
          <button
            type="button"
            onClick={() => switchLocale(loc.code)}
            disabled={isPending || locale === loc.code}
            className={`transition-colors duration-200 ${
              locale === loc.code
                ? "text-[#D4A853]"
                : "text-[#F5EFE3]/60 hover:text-[#F5EFE3]"
            }`}
            aria-current={locale === loc.code ? "true" : "false"}
            aria-label={loc.code === "fr" ? t("fr") : t("en")}
          >
            {loc.label}
          </button>
          {i < locales.length - 1 && (
            <span className="text-[#F5EFE3]/30" aria-hidden="true">
              /
            </span>
          )}
        </div>
      ))}
    </div>
  );
}
