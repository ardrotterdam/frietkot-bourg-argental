import Link from "next/link";
import type { ReactNode } from "react";

type CtaButtonProps = {
  href: string;
  children: ReactNode;
  variant?: "primary" | "ghost";
};

export default function CtaButton({
  href,
  children,
  variant = "primary",
}: CtaButtonProps) {
  const base =
    "inline-flex items-center justify-center rounded-full px-7 py-3 text-sm font-semibold uppercase tracking-wider transition-all duration-300 hover:-translate-y-0.5";
  const styles =
    variant === "primary"
      ? "border border-[#D4A853]/80 bg-[#D4A853] text-black hover:bg-[#F4B942]"
      : "border border-white/45 bg-transparent text-[#f5efe3] hover:border-[#FFD700] hover:text-[#FFD700]";

  const isPhone = href.startsWith("tel:");
  if (isPhone) {
    return (
      <a href={href} className={`${base} ${styles}`}>
        {children}
      </a>
    );
  }

  return (
    <Link href={href} className={`${base} ${styles}`}>
      {children}
    </Link>
  );
}
