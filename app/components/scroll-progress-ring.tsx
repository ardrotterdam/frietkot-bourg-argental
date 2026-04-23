"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const R = 10;
const C = 2 * Math.PI * R;

export default function ScrollProgressRing() {
  const pathname = usePathname();
  const [p, setP] = useState(0);
  const [ok, setOk] = useState(false);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setOk(true);
  }, []);

  useEffect(() => {
    if (!ok) {
      return;
    }
    if (pathname === "/la-carte") {
      return;
    }
    const onScroll = () => {
      const el = document.documentElement;
      const h = el.scrollHeight - el.clientHeight;
      const t = h > 0 ? el.scrollTop / h : 0;
      setP(Math.min(1, Math.max(0, t)));
    };
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, [ok, pathname]);

  const dash = C * (1 - p);

  if (!ok || pathname === "/la-carte") {
    return null;
  }

  return (
    <button
      type="button"
      onClick={() => {
        window.scrollTo({ top: 0, behavior: "smooth" });
      }}
      className="group fixed right-4 top-44 z-40 max-lg:top-32"
      aria-label="Retour en haut de la page"
    >
      <svg
        viewBox="0 0 28 28"
        width="28"
        height="28"
        className="text-[#D4A853]/30 transition-colors group-hover:text-[#D4A853] group-focus-visible:text-[#D4A853]"
      >
        <title>Progrès de lecture</title>
        <circle
          cx="14"
          cy="14"
          r={R}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
        />
        <circle
          cx="14"
          cy="14"
          r={R}
          fill="none"
          stroke="currentColor"
          strokeWidth="1.2"
          strokeLinecap="round"
          transform="rotate(-90 14 14)"
          strokeDasharray={C}
          strokeDashoffset={dash}
          className="text-[#D4A853]"
        />
      </svg>
    </button>
  );
}
