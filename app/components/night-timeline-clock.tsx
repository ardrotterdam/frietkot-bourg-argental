"use client";

import { useEffect, useState } from "react";

const SLOTS = [
  { time: "19:00", label: "L'arrivée" },
  { time: "19:30", label: "La friture" },
  { time: "20:30", label: "La bière" },
  { time: "22:00", label: "La chambre" },
  { time: "22:00", label: "L'auberge" },
  { time: "09:00", label: "Le lendemain" },
] as const;

export default function NightTimelineClock() {
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
      setI(Math.min(SLOTS.length - 1, best));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  const slot = SLOTS[i] ?? SLOTS[0];

  return (
    <div
      className="pointer-events-none fixed right-4 top-24 z-40 text-right text-[#D4A853] max-md:hidden"
      aria-live="polite"
    >
      <p className="font-mono text-lg tabular-nums tracking-tight sm:text-xl">{slot.time}</p>
      <p className="mt-0.5 max-w-[10rem] text-[10px] font-medium uppercase leading-tight tracking-[0.18em] text-[#f5efe3]">
        {slot.label}
      </p>
    </div>
  );
}
