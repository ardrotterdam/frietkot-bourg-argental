"use client";

import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";
import SplitType from "split-type";
import { createElement, useEffect, useRef } from "react";

gsap.registerPlugin(ScrollTrigger);

type RevealTextProps = {
  children: string;
  className?: string;
  id?: string;
  as?: "h1" | "h2" | "p" | "div";
};

export default function RevealText({
  children,
  className = "",
  id,
  as = "h2",
}: RevealTextProps) {
  const ref = useRef<HTMLElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const el = ref.current;
    if (!el) {
      return;
    }
    const split = new SplitType(el, { types: "lines" });
    const lines = split.lines;
    if (!lines || lines.length === 0) {
      return;
    }

    gsap.set(lines, { yPercent: 100, opacity: 0 });
    const anim = gsap.to(lines, {
      yPercent: 0,
      opacity: 1,
      duration: 0.75,
      ease: "power3.out",
      stagger: 0.08,
      scrollTrigger: {
        trigger: el,
        start: "top 88%",
        once: true,
      },
    });

    return () => {
      anim.kill();
      split.revert();
    };
  }, [children]);

  return createElement(as, { id, ref, className }, children);
}
