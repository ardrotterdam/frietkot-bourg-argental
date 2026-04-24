"use client";

import { useTranslations } from "next-intl";
import { useEffect, useState } from "react";

const SLOT_TIMES = ["19:00", "19:30", "20:30", "22:00", "22:00", "09:00"] as const;
const SLOT_KEYS = [
  "slot0",
  "slot1",
  "slot2",
  "slot3",
  "slot4",
  "slot5",
] as const;

export default function NightTimelineClock() {
  const t = useTranslations("timeline");
  const [i, setI] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const sections = document.querySelectorAll<HTMLElement>("[data-night-section]");
    if (sections.length === 0) {
      return;
    }
    const onScroll = () => {
      const mid = window.innerHeight * 0.22;
      let best = 0;
      let bestDist = Infinity;
      sections.forEach((el, index) => {
        const r = el.getBoundingClientRect();
        const d = Math.abs(r.top - mid);
        if (r.top < window.innerHeight * 0.85 && r.bottom > 0 && d < bestDist) {
          bestDist = d;
          best = index;
        }
      });
      setI(Math.min(SLOT_TIMES.length - 1, best));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const idx = Math.min(i, SLOT_TIMES.length - 1);
  const time = SLOT_TIMES[idx];
  const label = t(SLOT_KEYS[idx]);

  return (
    <div
      className="pointer-events-none fixed right-4 top-24 z-40 text-right text-[#D4A853] max-md:hidden"
      aria-live="polite"
    >
      <p className="font-mono text-lg tabular-nums tracking-tight sm:text-xl">{time}</p>
      <p className="mt-0.5 max-w-[10rem] text-[10px] font-medium uppercase leading-tight tracking-[0.18em] text-[#f5efe3]">
        {label}
      </p>
    </div>
  );
}
