"use client";

import Image from "next/image";
import { useEffect, useState } from "react";

const STORAGE_KEY = "frietkot-intro-seen";

export default function IntroLoader() {
  const [play, setPlay] = useState(false);
  const [hidden, setHidden] = useState(true);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    try {
      if (sessionStorage.getItem(STORAGE_KEY)) {
        return;
      }
    } catch {
      return;
    }
    setPlay(true);
    setHidden(false);
    const t = window.setTimeout(() => {
      setHidden(true);
      try {
        sessionStorage.setItem(STORAGE_KEY, "1");
      } catch {
        // ignore
      }
    }, 1500);
    return () => window.clearTimeout(t);
  }, []);

  if (!play || hidden) {
    return null;
  }

  return (
    <div
      className="fixed inset-0 z-[300] flex items-center justify-center bg-[#0a0a0a] animate-fade-in"
      aria-hidden
    >
      <div className="absolute inset-x-0 top-1/2 h-px w-0 origin-left bg-gradient-to-r from-transparent via-[#D4A853] to-transparent [animation:loader-line_1.2s_cubic-bezier(0.7,0,0.3,1)_forwards]" />
      <div className="relative z-10 scale-100 opacity-0 [animation:loader-logo_0.5s_ease_0.35s_forwards]">
        <Image
          src="/frietkot-bourg-argental-belgische-friet-logo.webp"
          alt=""
          width={200}
          height={120}
          className="h-24 w-auto object-contain"
          priority
        />
      </div>
    </div>
  );
}
