"use client";

import { usePathname } from "next/navigation";
import { useEffect, useRef, useState } from "react";

export default function RouteSweepOverlay() {
  const pathname = usePathname();
  const prev = useRef<string | null>(null);
  const [sweep, setSweep] = useState(false);
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
    if (prev.current === null) {
      prev.current = pathname;
      return;
    }
    if (prev.current === pathname) {
      return;
    }
    prev.current = pathname;
    setSweep(true);
    const id = window.setTimeout(() => {
      setSweep(false);
    }, 600);
    return () => window.clearTimeout(id);
  }, [pathname, ok]);

  if (!ok || !sweep) {
    return null;
  }

  return (
    <div
      className="pointer-events-none fixed inset-0 z-[150] [animation:route-sweep-fade_0.6s_cubic-bezier(0.4,0,0.2,1)_forwards] mix-blend-normal"
      aria-hidden
    >
      <div className="absolute left-0 top-1/2 h-[2px] w-full -translate-y-1/2 [animation:route-sweep-line_0.55s_cubic-bezier(0.4,0,0.2,1)_forwards]">
        <div className="h-full w-full origin-left scale-x-0 bg-gradient-to-r from-transparent via-[#D4A853] to-transparent shadow-[0_0_32px_rgba(212,168,83,0.4)]" />
      </div>
    </div>
  );
}
