"use client";

import { LanguageSwitcher } from "@/components/language-switcher";
import { Link, usePathname } from "@/i18n/navigation";
import Image from "next/image";
import { useTranslations } from "next-intl";
import { useRef } from "react";

const HREFS = ["/", "/la-carte", "/auberge", "/bieres-belges", "/contact"] as const;
const NAV_KEY = [
  "accueil",
  "laCarte",
  "auberge",
  "bieresBelges",
  "contact",
] as const;

function playMiseEnBouteille() {
  const Ctx = window.AudioContext || (window as unknown as { webkitAudioContext: typeof AudioContext }).webkitAudioContext;
  if (!Ctx) {
    return;
  }
  const ctx = new Ctx();
  if (ctx.state === "suspended") {
    void ctx.resume();
  }
  const o = ctx.createOscillator();
  const g = ctx.createGain();
  o.type = "triangle";
  o.frequency.setValueAtTime(360, ctx.currentTime);
  o.frequency.exponentialRampToValueAtTime(110, ctx.currentTime + 0.38);
  g.gain.setValueAtTime(0.1, ctx.currentTime);
  g.gain.exponentialRampToValueAtTime(0.0001, ctx.currentTime + 0.45);
  o.connect(g);
  g.connect(ctx.destination);
  o.start();
  o.stop(ctx.currentTime + 0.48);
  setTimeout(() => {
    void ctx.close();
  }, 500);
}

export default function SiteNavbar() {
  const pathname = usePathname();
  const tNav = useTranslations("nav");
  const tBrand = useTranslations("branding");
  const taps = useRef(0);
  const reset = useRef<ReturnType<typeof setTimeout> | null>(null);

  const onLogo = () => {
    if (taps.current === 0) {
      reset.current = setTimeout(() => {
        taps.current = 0;
      }, 900);
    }
    taps.current += 1;
    if (taps.current >= 3) {
      taps.current = 0;
      if (reset.current) {
        clearTimeout(reset.current);
      }
      if (!window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
        playMiseEnBouteille();
      }
    }
  };

  return (
    <nav className="sticky top-0 z-50 w-full border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-8">
        <Link
          href="/"
          className="flex items-center"
          onClick={onLogo}
          aria-label={tBrand("logoAria")}
        >
          <Image
            src="/images/hero/frietkot-logo-belgian-fries.webp"
            alt={tBrand("logoAlt")}
            width={180}
            height={72}
            className="h-14 w-auto object-contain md:h-16"
            priority
          />
        </Link>

        <div className="flex max-w-[60%] flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-white md:max-w-none md:gap-6">
          {HREFS.map((href, i) => {
            const isActive =
              pathname === href ||
              (href === "/" && (pathname === "" || pathname === "/")) ||
              (href !== "/" && pathname.startsWith(href));

            return (
              <Link
                key={href}
                href={href}
                className={`transition-colors duration-300 hover:text-[#FFD700] ${
                  isActive ? "text-[#FFD700]" : "text-[#f5efe3]"
                }`}
                data-cursor="menu"
              >
                {tNav(NAV_KEY[i])}
              </Link>
            );
          })}
          <LanguageSwitcher />
        </div>
      </div>
    </nav>
  );
}
