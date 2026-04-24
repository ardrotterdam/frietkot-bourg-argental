import Image from "next/image";

type Palette = {
  primary: string;
  secondary: string;
  accent: string;
};

type Props = {
  src: string;
  alt: string;
  palette: Palette;
  reverse?: boolean;
  paletteLabel: string;
  swatchPrimary: string;
  swatchSecondary: string;
  swatchAccent: string;
};

export function RoomImageFrame({
  src,
  alt,
  palette,
  reverse = false,
  paletteLabel,
  swatchPrimary,
  swatchSecondary,
  swatchAccent,
}: Props) {
  return (
    <div
      className={`relative w-full ${
        reverse ? "md:pr-8 lg:pr-12" : "md:pl-8 lg:pl-12"
      }`}
    >
      <div
        className="absolute inset-0 rounded-sm border"
        style={{
          borderColor: palette.primary,
          transform: reverse
            ? "translate(16px, 16px)"
            : "translate(-16px, 16px)",
          opacity: 0.4,
        }}
        aria-hidden
      />
      <div
        className="absolute inset-0 rounded-sm border"
        style={{
          borderColor: palette.accent,
          transform: reverse
            ? "translate(32px, 32px)"
            : "translate(-32px, 32px)",
          opacity: 0.15,
        }}
        aria-hidden
      />
      <div className="relative z-0 overflow-hidden rounded-sm">
        <div
          className="pointer-events-none absolute inset-0 z-10"
          style={{
            background: `linear-gradient(135deg, transparent 60%, ${palette.secondary}99 100%)`,
          }}
          aria-hidden
        />
        <div
          className="pointer-events-none absolute inset-0 z-10 mix-blend-color"
          style={{
            background: palette.primary,
            opacity: 0.08,
          }}
          aria-hidden
        />
        <Image
          src={src}
          alt={alt}
          width={800}
          height={1000}
          className="h-auto w-full object-contain"
          sizes="(max-width: 768px) 100vw, 50vw"
        />
        <div
          className={`absolute top-0 z-20 h-24 w-1 ${
            reverse ? "right-0" : "left-0"
          }`}
          style={{ background: palette.primary }}
          aria-hidden
        />
      </div>
      <div className="mt-3 flex items-center gap-3 md:mt-6">
        <span className="text-[10px] uppercase tracking-[0.15em] text-[#F5EFE3]/40">
          {paletteLabel}
        </span>
        <div className="flex gap-1.5">
          <div
            className="h-5 w-5 rounded-full border border-white/10"
            style={{ background: palette.primary }}
            title={swatchPrimary}
            aria-label={swatchPrimary}
          />
          <div
            className="h-5 w-5 rounded-full border border-white/10"
            style={{ background: palette.secondary }}
            title={swatchSecondary}
            aria-label={swatchSecondary}
          />
          <div
            className="h-5 w-5 rounded-full border border-white/10"
            style={{ background: palette.accent }}
            title={swatchAccent}
            aria-label={swatchAccent}
          />
        </div>
      </div>
    </div>
  );
}
