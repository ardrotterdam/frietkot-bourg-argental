"use client";

import gsap from "gsap";
import SplitType from "split-type";
import { Link } from "@/i18n/navigation";
import { useTranslations } from "next-intl";
import { useEffect, useLayoutEffect, useRef, useSyncExternalStore } from "react";
import type { MouseEvent } from "react";

const prefersReducedMotion = () =>
  window.matchMedia("(prefers-reduced-motion: reduce)").matches;

function usePrefersReducedMotion() {
  return useSyncExternalStore(
    (onChange) => {
      const m = window.matchMedia("(prefers-reduced-motion: reduce)");
      m.addEventListener("change", onChange);
      return () => m.removeEventListener("change", onChange);
    },
    prefersReducedMotion,
    () => false,
  );
}

const POSTER = "/images/hero/hero-hands-poster.webp";

export default function HeroCraft() {
  const t = useTranslations("hero");
  const reduced = usePrefersReducedMotion();
  const sectionRef = useRef<HTMLElement | null>(null);
  const posterRef = useRef<HTMLDivElement | null>(null);
  const eyebrowRef = useRef<HTMLParagraphElement | null>(null);
  const h1Ref = useRef<HTMLHeadingElement | null>(null);
  const subtitleRef = useRef<HTMLParagraphElement | null>(null);
  const statRef = useRef<HTMLDivElement | null>(null);
  const cta1Ref = useRef<HTMLAnchorElement | null>(null);
  const cta2Ref = useRef<HTMLAnchorElement | null>(null);
  const scrollHintRef = useRef<HTMLDivElement | null>(null);
  const splitRef = useRef<SplitType | null>(null);

  const cta1MagMove = (e: MouseEvent<HTMLAnchorElement>) => {
    const el = cta1Ref.current;
    if (!el) return;
    if (reduced) return;
    const rect = el.getBoundingClientRect();
    const x = e.clientX - rect.left - rect.width / 2;
    const y = e.clientY - rect.top - rect.height / 2;
    el.style.transform = `translate(${x * 0.12}px, ${y * 0.12}px)`;
  };

  const cta1MagLeave = () => {
    const el = cta1Ref.current;
    if (el) el.style.transform = "";
  };

  useLayoutEffect(() => {
    if (reduced) return;
    const h1 = h1Ref.current;
    if (!h1) return;
    const split = new SplitType(h1, { types: "lines" });
    splitRef.current = split;
    const lines = split.lines;
    if (lines && lines.length > 0) {
      gsap.set(h1, { opacity: 1 });
      gsap.set(lines, { yPercent: 100, opacity: 0 });
    }
    return () => {
      split.revert();
      if (splitRef.current === split) {
        splitRef.current = null;
      }
    };
  }, [reduced]);

  useEffect(() => {
    if (reduced) {
      const poster = posterRef.current;
      if (poster) {
        poster.style.opacity = "0";
      }
      return;
    }

    const h1 = h1Ref.current;
    if (!h1) return;
    const lines = splitRef.current?.lines;

    const ctx = gsap.context(() => {
      const poster = posterRef.current;
      if (poster) {
        gsap.set(poster, { opacity: 1 });
        gsap.to(poster, {
          opacity: 0,
          duration: 0.3,
          ease: "power1.inOut",
        });
      }

      if (eyebrowRef.current) {
        gsap.set(eyebrowRef.current, { y: 16, opacity: 0 });
        gsap.to(eyebrowRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.7,
          ease: "expo.out",
          delay: 0.3,
        });
      }

      if (lines && lines.length > 0) {
        gsap.to(lines, {
          yPercent: 0,
          opacity: 1,
          duration: 0.9,
          stagger: 0.09,
          ease: "power3.out",
          delay: 0.7,
        });
      } else {
        gsap.set(h1, { opacity: 0 });
        gsap.to(h1, {
          opacity: 1,
          duration: 0.9,
          delay: 0.7,
          ease: "power3.out",
        });
      }

      if (subtitleRef.current) {
        gsap.set(subtitleRef.current, { y: 16, opacity: 0 });
        gsap.to(subtitleRef.current, {
          y: 0,
          opacity: 1,
          duration: 0.6,
          ease: "power2.out",
          delay: 1.7,
        });
      }

      if (statRef.current) {
        const segs = statRef.current.querySelectorAll<HTMLElement>(":scope > span");
        gsap.set(segs, { opacity: 0 });
        gsap.to(segs, {
          opacity: 1,
          duration: 0.5,
          stagger: 0.06,
          ease: "power2.out",
          delay: 2.2,
        });
      }

      if (cta1Ref.current) {
        gsap.set(cta1Ref.current, { y: 16, opacity: 0 });
        gsap.to(cta1Ref.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          delay: 2.6,
        });
      }
      if (cta2Ref.current) {
        gsap.set(cta2Ref.current, { y: 16, opacity: 0 });
        gsap.to(cta2Ref.current, {
          y: 0,
          opacity: 1,
          duration: 0.5,
          ease: "power2.out",
          delay: 2.68,
        });
      }

      if (scrollHintRef.current) {
        gsap.set(scrollHintRef.current, { opacity: 0 });
        gsap.to(scrollHintRef.current, {
          opacity: 0.75,
          duration: 0.5,
          ease: "power2.out",
          delay: 3.5,
        });
      }
    }, sectionRef);

    return () => {
      ctx.revert();
    };
  }, [reduced]);

  useEffect(() => {
    if (!reduced) return;
    const ctx = gsap.context(() => {
      const sel = [
        posterRef.current,
        eyebrowRef.current,
        h1Ref.current,
        subtitleRef.current,
        statRef.current,
        cta1Ref.current,
        cta2Ref.current,
        scrollHintRef.current,
      ].filter(Boolean) as gsap.DOMTarget[];

      gsap.set(sel, { opacity: 0 });
      gsap.to(sel, {
        opacity: 1,
        duration: 0.3,
        ease: "power1.out",
      });
    }, sectionRef);
    if (posterRef.current) {
      posterRef.current.style.opacity = "0";
    }
    return () => ctx.revert();
  }, [reduced]);

  return (
    <section
      ref={sectionRef}
      className="relative min-h-0 bg-[#0A0A0A] text-[#F5EFE3] lg:min-h-screen"
      aria-label={t("sectionAria")}
    >
      <div className="grid min-h-0 grid-cols-1 grid-rows-[auto_auto] gap-0 lg:min-h-screen lg:grid-cols-2 lg:grid-rows-1">
        <div className="order-2 flex min-h-0 flex-col justify-center px-[clamp(3rem,6vw,6rem)] py-10 max-lg:pb-12 lg:order-1 lg:min-h-screen lg:py-0">
          <p
            ref={eyebrowRef}
            className="font-[family-name:var(--font-inter)] text-[11px] font-medium uppercase leading-normal tracking-[0.18em] text-[#D4A853] opacity-0"
          >
            {t("eyebrow")}
          </p>
          <div className="mt-1 overflow-hidden">
            <h1
              ref={h1Ref}
              className="font-[var(--font-fraunces)] text-[length:clamp(3rem,6vw,5.5rem)] font-normal leading-[1] tracking-[-0.02em] text-[#F5EFE3] [font-style:italic] opacity-0"
              style={{ fontFeatureSettings: '"opsz" 72' }}
            >
              {t("title1")}
              <br />
              {t("title2")}
            </h1>
          </div>
          <p
            ref={subtitleRef}
            className="mt-6 max-w-[460px] text-[17px] font-normal leading-[1.7] text-[rgba(245,239,227,0.8)] opacity-0"
          >
            {t("subtitle")}
          </p>
          <div
            ref={statRef}
            className="mt-8 flex flex-wrap items-baseline gap-x-4 gap-y-2 text-[11px] font-medium uppercase tracking-[0.15em] text-[#D4A853] lg:gap-6"
            aria-label={t("statsAria")}
          >
            <span>{t("statYears")}</span>
            <span className="text-[#D4A853]/50" aria-hidden>
              ·
            </span>
            <span>{t("statReviews")}</span>
            <span className="text-[#D4A853]/50" aria-hidden>
              ·
            </span>
            <span>{t("statRating")}</span>
          </div>
          <div className="mt-10 flex flex-wrap items-center gap-4">
            <Link
              ref={cta1Ref}
              href="/la-carte"
              className="group/hero-primary inline-block border border-[#D4A853] px-7 py-[14px] text-sm font-medium text-[#D4A853] opacity-0 transition-[background-color,color,transform] duration-300 ease-out will-change-transform hover:bg-[#D4A853] hover:text-[#0A0A0A] focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A853]"
              onMouseMove={cta1MagMove}
              onMouseLeave={cta1MagLeave}
              data-cursor="cta"
            >
              {t("ctaPrimary")}
            </Link>
            <Link
              ref={cta2Ref}
              href="/auberge"
              className="hero-craft-cta-ghost text-[#F5EFE3] opacity-0 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-4 focus-visible:outline-[#D4A853]"
              data-cursor="cta"
            >
              {t("ctaSecondary")}
            </Link>
          </div>
          <div
            ref={scrollHintRef}
            className="mt-14 flex flex-col items-start gap-2 text-left text-[10px] uppercase tracking-[0.3em] text-[#D4A853]/80 max-lg:items-center max-lg:self-center opacity-0"
            aria-hidden
          >
            <span>{t("scroll")}</span>
            <span
              className={
                reduced
                  ? "text-base leading-none"
                  : "hero-craft-scroll-hint__arrow text-base leading-none"
              }
            >
              ↓
            </span>
          </div>
        </div>

        <div
          className="relative order-1 h-[70vh] min-h-0 overflow-hidden border-l-0 border-[rgba(212,168,83,0.15)] max-lg:max-h-[70vh] lg:order-2 lg:min-h-screen lg:border-l"
        >
          <div
            className="absolute inset-0 z-[1] pointer-events-none bg-[linear-gradient(to_top,rgba(10,10,10,0.98),rgba(10,10,10,0.3)_60%,transparent)] lg:opacity-0"
            aria-hidden
          />
          <div className="relative h-full w-full min-h-[70vh] lg:min-h-0">
            <video
              className="h-full w-full object-cover object-center"
              muted
              loop
              playsInline
              preload="metadata"
              poster={POSTER}
              autoPlay={!reduced}
              aria-label={t("videoAria")}
            >
              <source src="/videos/hero-hands.webm" type="video/webm" />
              <source src="/videos/hero-hands.mp4" type="video/mp4" />
            </video>
            <div
              ref={posterRef}
              className="pointer-events-none absolute inset-0 z-[1] bg-cover bg-center"
              style={{ backgroundImage: `url(${POSTER})` }}
              aria-hidden
            />
          </div>
        </div>
      </div>
    </section>
  );
}
