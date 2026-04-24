"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useTranslations } from "next-intl";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type Stat = { key: string; end: number; label: string; format: "plain" | "plus" | "percent" };

function formatVal(v: number, f: Stat["format"]): string {
  if (f === "plus") {
    return `+${Math.round(v)}`;
  }
  if (f === "percent") {
    return `${Math.round(v)}%`;
  }
  return String(Math.round(v));
}

function StatItem({ s }: { s: Stat }) {
  const ref = useRef<HTMLLIElement | null>(null);
  const span = useRef<HTMLSpanElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      if (span.current) {
        span.current.textContent = formatVal(s.end, s.format);
      }
      return;
    }
    const o = { v: 0 };
    const ctx = gsap.context(() => {
      gsap.to(o, {
        v: s.end,
        duration: 1.15,
        ease: "power2.out",
        scrollTrigger: { trigger: ref.current, start: "top 88%", once: true },
        onUpdate: () => {
          if (span.current) {
            span.current.textContent = formatVal(o.v, s.format);
          }
        },
      });
    });
    return () => ctx.revert();
  }, [s.end, s.format]);

  return (
    <li ref={ref}>
      <p className="font-[var(--font-fraunces)] text-4xl text-[#D4A853]">
        <span ref={span} className="tabular-nums">
          {formatVal(0, s.format)}
        </span>
      </p>
      <p className="text-sm uppercase tracking-[0.16em] text-[#c8c1b5]">
        {s.label}
      </p>
    </li>
  );
}

export default function StatCounters() {
  const t = useTranslations("stats");
  const stats: Stat[] = [
    { key: "a", end: 308, label: t("google"), format: "plain" },
    { key: "b", end: 35, label: t("years"), format: "plus" },
    { key: "c", end: 100, label: t("homemade"), format: "percent" },
  ];
  return (
    <ul className="space-y-4 md:space-y-6">
      {stats.map((s) => (
        <StatItem key={s.key} s={s} />
      ))}
    </ul>
  );
}
