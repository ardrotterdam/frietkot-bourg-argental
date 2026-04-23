"use client";

import gsap from "gsap";
import { useEffect, useLayoutEffect, useRef, useState } from "react";

const CORNET_SVG = (
  <svg width="28" height="28" viewBox="0 0 28 28" fill="none" aria-hidden>
    <path
      d="M8 3h12l2 4-6 18H12L6 7l2-4z"
      stroke="currentColor"
      strokeWidth="1.4"
    />
  </svg>
);

const FORK_SVG = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M5 2v5a4 4 0 0 0 2 3.5V20h2v-9.5A4 4 0 0 0 11 7V2H9v5a2 2 0 0 1-1 1.7V2H6v5a2 2 0 0 1-1-1.7V2H5zM16 2v6h-1.5A2.5 2.5 0 0 0 12 10.5V20h2v-4h1v4h2v-9.5A2.5 2.5 0 0 0 15.5 8H14V2h2z" />
  </svg>
);

const GLASS_SVG = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M4 2l2 20h12L20 2H4zm2.2 2h11.6l-.3 2H6.5l-.3-2zM7 7h10l-1 13H8L7 7z" />
  </svg>
);

const KEY_SVG = (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="currentColor" aria-hidden>
    <path d="M7 14a5 5 0 1 1 4.2 4.9L19 20v-2h-2v-2h-2v-2h-2l-1.8-1.1A4.9 4.9 0 0 1 7 14zm5-1a1 1 0 1 0 0-2 1 1 0 0 0 0 2z" />
  </svg>
);

const DOT_SVG = (
  <svg width="16" height="16" viewBox="0 0 16 16" aria-hidden>
    <circle cx="8" cy="8" r="5" fill="currentColor" />
  </svg>
);

type CursorMode = "default" | "menu" | "beer" | "room" | "cta";

function getMode(target: EventTarget | null): CursorMode {
  let el: Element | null = (target as Element | null)?.nodeType === Node.ELEMENT_NODE
    ? (target as Element)
    : (target as Node | null)?.parentElement ?? null;
  for (let i = 0; i < 10 && el; i++) {
    if (el instanceof HTMLElement) {
      if (el.dataset.cursor === "cta" || el.hasAttribute("data-cursor-cta")) {
        return "cta";
      }
      if (el.dataset.cursor === "beer" || el.hasAttribute("data-cursor-beer")) {
        return "beer";
      }
      if (el.dataset.cursor === "room" || el.hasAttribute("data-cursor-room")) {
        return "room";
      }
      if (el.tagName === "A" && el.closest("nav")) {
        return "menu";
      }
    }
    el = el.parentElement;
  }
  return "default";
}

function pickIcon(m: CursorMode) {
  switch (m) {
    case "menu":
      return FORK_SVG;
    case "beer":
      return GLASS_SVG;
    case "room":
      return KEY_SVG;
    case "cta":
      return DOT_SVG;
    default:
      return CORNET_SVG;
  }
}

export default function CustomCursor() {
  const [show, setShow] = useState(false);
  const root = useRef<HTMLDivElement | null>(null);
  const [mode, setMode] = useState<CursorMode>("default");
  const xTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);
  const yTo = useRef<ReturnType<typeof gsap.quickTo> | null>(null);

  useEffect(() => {
    if (window.matchMedia("(max-width: 1023px)").matches) {
      return;
    }
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setShow(true);
  }, []);

  useLayoutEffect(() => {
    if (!show || !root.current) {
      return;
    }

    const el = root.current;
    document.documentElement.classList.add("friet-custom-cursor");

    xTo.current = gsap.quickTo(el, "x", { duration: 0.3, ease: "power3.out" });
    yTo.current = gsap.quickTo(el, "y", { duration: 0.3, ease: "power3.out" });
    el.style.opacity = "0";

    const onMove = (e: PointerEvent) => {
      if (!xTo.current || !yTo.current) {
        return;
      }
      const m = getMode(e.target);
      setMode(m);
      el.style.opacity = "1";
      let tx = e.clientX;
      let ty = e.clientY;
      if (m === "cta") {
        const link = (e.target as Element).closest("a, button, [data-cursor-cta]") as HTMLElement | null;
        if (link) {
          const r = link.getBoundingClientRect();
          const cx = r.left + r.width / 2;
          const cy = r.top + r.height / 2;
          tx = e.clientX + (cx - e.clientX) * 0.4;
          ty = e.clientY + (cy - e.clientY) * 0.4;
        }
      }
      xTo.current(tx);
      yTo.current(ty);
    };

    const onLeave = () => {
      el.style.opacity = "0";
    };

    window.addEventListener("pointermove", onMove, { passive: true });
    document.addEventListener("mouseleave", onLeave);
    return () => {
      document.documentElement.classList.remove("friet-custom-cursor");
      window.removeEventListener("pointermove", onMove);
      document.removeEventListener("mouseleave", onLeave);
    };
  }, [show]);

  if (!show) {
    return null;
  }

  return (
    <div
      ref={root}
      className="pointer-events-none fixed left-0 top-0 z-[200] -translate-x-1/2 -translate-y-1/2 text-[#D4A853] will-change-transform max-lg:hidden"
      aria-hidden
    >
      <div className="drop-shadow-md">{pickIcon(mode)}</div>
    </div>
  );
}
