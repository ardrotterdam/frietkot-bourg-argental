"use client";

import Image from "next/image";
import Lenis from "lenis";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const DISHES = [
  { title: "Les frites", sub: "Double cuisson, coupées le matin", src: "/belgian-fries-hero-frietkot-bourg-argental.webp" },
  { title: "Carbonade flamande", sub: "Mijotée · plat du jour", src: "/belgian-fries-hero-frietkot-bourg-argental.webp" },
  { title: "Vol-au-vent", sub: "Sauce, champignons, poulet", src: "/frietkot-bourg-argental-logo.webp" },
  { title: "Sauces maison", sub: "Andalouse, samouraï, tartare", src: "/logo.png" },
  { title: "Bières", sub: "Chimay, Paljas, Herberg, Duvel", src: "/frietkot-bourg-argental-logo.webp" },
] as const;

function CardGrid() {
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

function Horizontal() {
  const track = useRef<HTMLDivElement | null>(null);
  const scroller = useRef<HTMLDivElement | null>(null);
  const progress = useRef<HTMLDivElement | null>(null);
  const cards = useRef<(HTMLDivElement | null)[]>([]);

  useEffect(() => {
    const parent = track.current;
    const el = scroller.current;
    if (!parent || !el) {
      return;
    }

    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }

    const lenis = new Lenis({
      wrapper: parent,
      content: el,
      orientation: "horizontal",
      gestureOrientation: "both",
      smoothWheel: true,
      autoRaf: true,
    });

    const onScroll = (e: Lenis) => {
      if (!progress.current) {
        return;
      }
      const t = e.limit > 0 ? e.animatedScroll / e.limit : 0;
      progress.current.style.transform = `scaleX(${Math.min(1, Math.max(0, t))})`;
    };
    lenis.on("scroll", onScroll);

    const onMove = (e: PointerEvent) => {
      for (let i = 0; i < cards.current.length; i++) {
        const c = cards.current[i];
        if (!c) {
          continue;
        }
        const r = c.getBoundingClientRect();
        if (e.clientX >= r.left && e.clientX <= r.right && e.clientY >= r.top && e.clientY <= r.bottom) {
          const x = (e.clientX - r.left) / r.width - 0.5;
          const y = (e.clientY - r.top) / r.height - 0.5;
          c.style.setProperty("--tiltX", String(-y * 10));
          c.style.setProperty("--tiltY", String(x * 12));
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
  }, []);

  return (
    <div className="relative w-full">
      <div
        ref={progress}
        className="mb-2 h-px w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#D4A853] to-[#C9A24D] shadow-[0_0_8px_rgba(212,168,83,0.5)]"
      />
      <div
        ref={track}
        className="h-[min(100vh,880px)] w-full overflow-x-hidden overflow-y-hidden [touch-action:pan-y]"
      >
        <div
          ref={scroller}
          className="flex h-full w-max items-stretch gap-8 py-2 pl-3 pr-20 md:pl-6 md:pr-28"
        >
          {DISHES.map((d, i) => (
            <div
              key={d.title}
              ref={(n) => {
                cards.current[i] = n;
              }}
              className="w-[min(90vw,400px)] shrink-0 [perspective:1200px]"
              data-cursor="menu"
              style={
                {
                  transform:
                    "rotateX(calc(var(--tiltX, 0) * 1deg)) rotateY(calc(var(--tiltY, 0) * 1deg))",
                  transition: "transform 0.15s ease-out",
                } as React.CSSProperties
              }
            >
              <div className="premium-card h-full overflow-hidden rounded-3xl p-0">
                <div className="relative aspect-[4/5] w-full">
                  <Image src={d.src} alt={d.title} fill className="object-cover" sizes="400px" />
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
    </div>
  );
}

export default function LaCarteHorizontal() {
  const [grid, setGrid] = useState(true);

  useLayoutEffect(() => {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      setGrid(true);
    } else if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      setGrid(true);
    } else {
      setGrid(false);
    }
  }, []);

  if (grid) {
    return <CardGrid />;
  }
  return <Horizontal />;
}
