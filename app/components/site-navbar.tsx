"use client";

import Image from "next/image";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { useRef } from "react";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/la-carte", label: "La carte" },
  { href: "/auberge", label: "L'auberge" },
  { href: "/bieres-belges", label: "Bières belges" },
  { href: "/contact", label: "Contact" },
];

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
          aria-label="Frietkot, accueil (triple press pour un easter egg)"
        >
          <Image
            src="/images/hero/frietkot-logo-belgian-fries.webp"
            alt="Logo Frietkot Bourg-Argental"
            width={180}
            height={72}
            className="h-14 w-auto object-contain md:h-16"
            priority
          />
        </Link>

        <div className="flex max-w-[55%] flex-wrap items-center justify-end gap-x-4 gap-y-1 text-sm text-white md:max-w-none md:gap-8">
          {links.map((link) => {
            const isActive =
              pathname === link.href || (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 hover:text-[#FFD700] ${
                  isActive ? "text-[#FFD700]" : "text-[#f5efe3]"
                }`}
                data-cursor="menu"
              >
                {link.label}
              </Link>
            );
          })}
        </div>
      </div>
    </nav>
  );
}
