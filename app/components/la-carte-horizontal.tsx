"use client";

import Image from "next/image";
import Lenis from "lenis";
import { useEffect, useRef } from "react";
import gsap from "gsap";

const DISHES = [
  { title: "Les frites", sub: "Double cuisson, coupées le matin", src: "/belgian-fries-hero-frietkot-bourg-argental.webp" },
  { title: "Carbonade flamande", sub: "Mijotée · plat du jour", src: "/belgian-fries-hero-frietkot-bourg-argental.webp" },
  { title: "Vol-au-vent", sub: "Sauce, champignons, poulet", src: "/frietkot-bourg-argental-logo.webp" },
  { title: "Sauces maison", sub: "Andalouse, samouraï, tartare", src: "/logo.png" },
  { title: "Bières", sub: "Chimay, Paljas, Herberg, Duvel", src: "/frietkot-bourg-argental-logo.webp" },
] as const;

export default function LaCarteHorizontal() {
  const track = useRef<HTMLDivElement | null>(null);
  const scroller = useRef<HTMLDivElement | null>(null);
  const progress = useRef<HTMLDivElement | null>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);
  const reduced = typeof window !== "undefined" && window.matchMedia("(prefers-reduced-motion: reduce)").matches;
  const mobile = typeof window !== "undefined" && window.innerWidth < 1024;

  useEffect(() => {
    if (reduced || mobile || !track.current || !scroller.current) {
      return;
    }

    const el = scroller.current;
    const parent = track.current;
    const lenis = new Lenis({
      wrapper: parent,
      content: el,
      orientation: "horizontal",
      gestureOrientation: "horizontal",
      smoothWheel: true,
      autoRaf: true,
    });

    const onScroll = (e: { scroll: number; limit: number } | (typeof lenis)) => {
      const inst = e as { scroll: number; limit: number; animatedScroll?: number; limit: number };
      const l = (lenis as unknown as { limit: number; animatedScroll: number }).limit || 1;
      const s = (lenis as unknown as { animatedScroll: number }).animatedScroll;
      if (progress.current) {
        progress.current.style.transform = `scaleX(${l ? s / l : 0})`;
      }
    };
    lenis.on("scroll", onScroll);

    const setTilt = (card: HTMLDivElement, ex: number, ey: number) => {
      const b = card.getBoundingClientRect();
      const x = (ex - b.left) / b.width - 0.5;
      const y = (ey - b.top) / b.height - 0.5;
      card.style.setProperty("--tiltX", String(-y * 9));
      card.style.setProperty("--tiltY", String(x * 12));
    };

    const onMove = (e: PointerEvent) => {
      for (const c of cards.current) {
        if (!c) {
          continue;
        }
        const r = c.getBoundingClientRect();
        if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) {
          setTilt(c, e.clientX, e.clientY);
        } else {
          c.style.setProperty("--tiltX", "0");
          c.style.setProperty("--tiltY", "0");
        }
      }
    };
    parent.addEventListener("pointermove", onMove, { passive: true });

    return () => {
      lenis.destroy();
      parent.removeEventListener("pointermove", onMove);
    };
  }, [reduced, mobile]);

  if (reduced || mobile) {
    return (
      <div className="grid gap-6 md:grid-cols-2">
        {DISHES.map((d) => (
          <article key={d.title} className="premium-card overflow-hidden rounded-3xl p-0">
            <div className="relative aspect-[4/5] w-full">
              <Image src={d.src} alt="" fill className="object-cover" sizes="(min-width: 1024px) 40vw, 90vw" />
            </div>
            <div className="p-6">
              <h2 className="font-[var(--font-fraunces)] text-2xl text-[#f5efe3]">{d.title}</h2>
              <p className="mt-2 text-sm text-[#c8c1b5]">{d.sub}</p>
            </div>
          </article>
        ))}
      </div>
    );
  }

  return (
    <div ref={track} className="relative h-[min(100vh,860px)] w-full overflow-x-hidden">
      <div
        ref={progress}
        className="absolute left-0 right-0 top-0 z-20 h-px origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#D4A853] to-transparent"
      />
      <div
        ref={scroller}
        className="flex h-full w-max cursor-grab items-stretch gap-8 pl-4 pr-24 pt-4 active:cursor-grabbing md:pl-8"
        data-lenis-prevent
      >
        {DISHES.map((d, i) => (
          <div
            key={d.title}
            ref={(el) => {
              cards.current[i] = el;
            }}
            className="group relative w-[min(100vw,420px)] shrink-0 perspective-[1200px]"
            data-cursor="menu"
            style={
              {
                transform: "rotateX(calc(var(--tiltX, 0) * 1deg)) rotateY(calc(var(--tiltY, 0) * 1deg)) scale(1.01)",
                transition: "transform 0.2s ease-out",
              } as React.CSSProperties
            }
          >
            <div className="premium-card h-full overflow-hidden rounded-3xl p-0">
              <div className="relative aspect-[4/5] w-full">
                <Image src={d.src} alt={d.title} fill className="object-cover" sizes="420px" />
              </div>
              <div className="p-6">
                <h2 className="font-[var(--font-fraunces)] text-3xl text-[#f5efe3]">{d.title}</h2>
                <p className="mt-2 text-[#c8c1b5]">{d.sub}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
