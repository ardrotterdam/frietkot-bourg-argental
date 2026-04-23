"use client";

import { usePathname } from "next/navigation";
import { useEffect, useState } from "react";

const ease = "cubic-bezier(0.25, 0.1, 0.25, 1)";

export default function RouteSweepOverlay() {
  const pathname = usePathname();
  const [sweep, setSweep] = useState(false);
  const [key, setKey] = useState(0);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    setSweep(true);
    setKey((k) => k + 1);
    const t = requestAnimationFrame(() => {
      const end = setTimeout(() => {
        setSweep(false);
      }, 620);
      return () => clearTimeout(end);
    });
    return () => {
      cancelAnimationFrame(t);
    };
  }, [pathname]);

  if (window !== undefined && window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
    return null;
  }

  if (!sweep) {
    return null;
  }

  return (
    <div
      key={key}
      className="pointer-events-none fixed inset-0 z-[150] flex items-stretch [animation:route-sweep_0.6s_ease_in-out_forwards]"
      style={{ animationTimingFunction: ease } as React.CSSProperties}
      aria-hidden
    >
      <div className="h-full w-0 max-w-full origin-left scale-x-0 border-r border-[#D4A853]/80 bg-gradient-to-r from-[#0a0a0a] via-[#111] to-[#0a0a0a] [animation:route-sweep-wipe_0.55s_cubic-bezier(0.4,0,0.2,1)_forwards] shadow-[0_0_40px_rgba(212,168,83,0.25)]" />
    </div>
  );
}
