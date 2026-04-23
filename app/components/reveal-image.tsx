"use client";

import Image, { type StaticImageData } from "next/image";
import { useEffect, useRef } from "react";

type RevealImageProps = {
  src: string | StaticImageData;
  alt: string;
  className?: string;
  imageClassName?: string;
  sizes?: string;
  fill?: boolean;
  width?: number;
  height?: number;
};

export default function RevealImage({
  src,
  alt,
  className = "",
  imageClassName = "",
  sizes = "(min-width: 1024px) 40vw, 100vw",
  fill = false,
  width,
  height,
}: RevealImageProps) {
  const ref = useRef<HTMLDivElement | null>(null);

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) {
      return;
    }
    const el = ref.current;
    if (!el) {
      return;
    }
    const io = new IntersectionObserver(
      ([e]) => {
        if (e.isIntersecting) {
          el.style.clipPath = "inset(0% 0% 0% 0%)";
          el.style.transform = "scale(1)";
          io.disconnect();
        }
      },
      { threshold: 0.1 },
    );
    el.style.clipPath = "inset(100% 0% 0% 0%)";
    el.style.transform = "scale(1.04)";
    el.style.transition =
      "clip-path 0.7s cubic-bezier(0.7, 0, 0.3, 1), transform 0.7s cubic-bezier(0.7, 0, 0.3, 1)";
    io.observe(el);
    return () => io.disconnect();
  }, [src]);

  return (
    <div ref={ref} className={`relative overflow-hidden ${className}`}>
      {fill ? (
        <Image
          src={src}
          alt={alt}
          fill
          sizes={sizes}
          className={imageClassName}
        />
      ) : width && height ? (
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          className={imageClassName}
        />
      ) : null}
    </div>
  );
}
