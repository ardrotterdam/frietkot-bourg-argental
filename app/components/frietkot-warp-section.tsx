"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import { useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

export default function FrietkotWarpSection() {
  const wrap = useRef<HTMLDivElement | null>(null);
  const textRef = useRef<HTMLHeadingElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const el = textRef.current;
    const root = wrap.current;
    if (!el || !root) {
      return;
    }
    const ch = el.querySelectorAll<HTMLElement>(".warp-char");
    if (ch.length === 0) {
      return;
    }

    const ctx = gsap.context(() => {
      gsap.to(ch, {
        scrollTrigger: {
          trigger: root,
          start: "top 75%",
          end: "bottom 30%",
          scrub: 0.5,
        },
        letterSpacing: "0.12em",
        fontWeight: 650,
        yPercent: 6,
        ease: "none",
        stagger: { each: 0.02 },
      });
    });
    return () => ctx.revert();
  }, []);

  return (
    <div ref={wrap} className="relative flex min-h-[50vh] items-center justify-center py-20">
      <h2
        ref={textRef}
        className="font-[var(--font-fraunces)] text-[clamp(7.5rem,20vw,15rem)] font-normal italic leading-none text-[#f5efe3]/[0.07] transition-none max-md:text-[clamp(3.5rem,14vw,8rem)]"
        style={{ fontFeatureSettings: '"opsz" 72' }}
        aria-label="Frietkot"
      >
        {"Frietkot".split("").map((c, i) => (
          <span key={`${c}-${i}`} className="warp-char inline-block">
            {c}
          </span>
        ))}
      </h2>
    </div>
  );
}
