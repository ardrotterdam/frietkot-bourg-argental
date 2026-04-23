"use client";

import Lenis from "lenis";
import { usePathname } from "next/navigation";
import { type ReactNode, useEffect } from "react";
import gsap from "gsap";
import ScrollTrigger from "gsap/ScrollTrigger";

gsap.registerPlugin(ScrollTrigger);

type LenisProviderProps = { children: ReactNode };

export default function LenisProvider({ children }: LenisProviderProps) {
  const pathname = usePathname();

  useEffect(() => {
    if (pathname === "/la-carte") {
      return;
    }

    const lenis = new Lenis({
      autoRaf: true,
      duration: 1.1,
      smoothWheel: true,
    });

    const onScroll = () => {
      ScrollTrigger.update();
    };
    lenis.on("scroll", onScroll);
    requestAnimationFrame(() => {
      ScrollTrigger.refresh();
    });

    return () => {
      lenis.off("scroll", onScroll);
      lenis.destroy();
      requestAnimationFrame(() => {
        ScrollTrigger.refresh();
      });
    };
  }, [pathname]);

  return <>{children}</>;
}
