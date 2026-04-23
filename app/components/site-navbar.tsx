"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";

const links = [
  { href: "/", label: "Accueil" },
  { href: "/menu", label: "Menu" },
  { href: "/contact", label: "Contact" },
];

export default function SiteNavbar() {
  const pathname = usePathname();

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-white/10 bg-black/55 backdrop-blur-xl">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-6 md:px-8">
        <Link href="/" className="flex items-center">
          <img
            src="/frietkot-bourg-argental-belgische-friet-logo.webp"
            alt="Logo Frietkot Bourg-Argental"
            className="h-14 w-auto object-contain md:h-16"
          />
        </Link>

        <div className="flex items-center gap-7 text-sm text-white md:gap-10">
          {links.map((link) => {
            const isActive =
              pathname === link.href ||
              (link.href !== "/" && pathname.startsWith(link.href));

            return (
              <Link
                key={link.href}
                href={link.href}
                className={`transition-colors duration-300 hover:text-[#FFD700] ${
                  isActive ? "text-[#FFD700]" : ""
                }`}
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
