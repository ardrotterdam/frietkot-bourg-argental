"use client";

import Link from "next/link";
import type { MouseEvent, ReactNode } from "react";
import { useRef } from "react";

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
  const ref = useRef<HTMLAnchorElement | null>(null);
  const base =
    "group/cta inline-flex items-center justify-center rounded-full border px-7 py-3 text-sm font-semibold uppercase tracking-wider transition-transform duration-300 will-change-transform hover:scale-[1.03] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A853]";
  const styles =
    variant === "primary"
      ? "border-[#D4A853]/80 bg-[#D4A853] text-black hover:border-[#F4B942] hover:bg-[#F4B942]"
      : "border border-white/45 bg-transparent text-[#f5efe3] hover:border-[#FFD700] hover:text-[#FFD700]";

  const onMouseMove = (event: MouseEvent<HTMLAnchorElement>) => {
    const el = ref.current;
    if (!el) return;
    const rect = el.getBoundingClientRect();
    const x = event.clientX - rect.left - rect.width / 2;
    const y = event.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.08}px, ${y * 0.08}px) scale(1.03)`;
  };

  const onLeave = () => {
    const el = ref.current;
    if (!el) return;
    el.style.transform = "";
  };

  const isPhone = href.startsWith("tel:");
  if (isPhone) {
    return (
      <a
        ref={ref}
        href={href}
        className={`${base} ${styles} [&>span]:inline-block [&>span]:transition-transform [&>span]:duration-200 group-hover/cta:[&>span]:translate-x-0.5`}
        onMouseMove={onMouseMove}
        onMouseLeave={onLeave}
        data-cursor="cta"
      >
        <span>{children}</span>
      </a>
    );
  }

  return (
    <Link
      ref={ref}
      href={href}
      className={`${base} ${styles} [&>span]:inline-block [&>span]:transition-transform [&>span]:duration-200 group-hover/cta:[&>span]:translate-x-0.5`}
      onMouseMove={onMouseMove}
      onMouseLeave={onLeave}
      data-cursor="cta"
    >
      <span>{children}</span>
    </Link>
  );
}
