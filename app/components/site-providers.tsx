"use client";

import type { ReactNode } from "react";
import CustomCursor from "./custom-cursor";
import GrainOverlay from "./grain-overlay";
import IntroLoader from "./intro-loader";
import LenisProvider from "./lenis-provider";
import RouteSweepOverlay from "./route-sweep-overlay";
import ScrollProgressRing from "./scroll-progress-ring";

export default function SiteProviders({ children }: { children: ReactNode }) {
  return (
    <LenisProvider>
      <GrainOverlay />
      <IntroLoader />
      <RouteSweepOverlay />
      <CustomCursor />
      <ScrollProgressRing />
      {children}
    </LenisProvider>
  );
}
