"use client";

import dynamic from "next/dynamic";

const Map = dynamic(
  () => import("./contact-map-client"),
  {
    ssr: false,
    loading: () => (
      <div className="h-72 w-full rounded-2xl border border-white/10 bg-white/5 md:h-96" />
    ),
  },
);

export default function ContactMapWrapper() {
  return <Map />;
}
