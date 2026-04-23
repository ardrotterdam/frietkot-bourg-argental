import RevealText from "./reveal-text";

type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
  /** When true, title uses line-by-line reveal (no reduced motion). */
  reveal?: boolean;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
  reveal = true,
}: SectionHeadingProps) {
  return (
    <header className="relative">
      <p className="section-eyebrow">{eyebrow}</p>
      <div className="relative mt-4 inline-block max-w-full">
        <span
          className="pointer-events-none absolute -left-3 -top-1 h-2 w-2 border-l border-t border-[#D4A853]/80"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute -right-3 -top-1 h-2 w-2 border-r border-t border-[#D4A853]/80"
          aria-hidden
        />
        {reveal ? (
          <RevealText
            as="h2"
            className="font-[var(--font-fraunces)] text-[length:var(--font-h2)] font-normal italic leading-[1.05] text-[#f5efe3]"
          >
            {title}
          </RevealText>
        ) : (
          <h2 className="font-[var(--font-fraunces)] text-[length:var(--font-h2)] font-normal italic leading-[1.05] text-[#f5efe3]">
            {title}
          </h2>
        )}
        <span
          className="pointer-events-none absolute -bottom-1 -left-3 h-2 w-2 border-b border-l border-[#D4A853]/80"
          aria-hidden
        />
        <span
          className="pointer-events-none absolute -bottom-1 -right-3 h-2 w-2 border-b border-r border-[#D4A853]/80"
          aria-hidden
        />
      </div>
      {description ? (
        <p className="mt-5 max-w-3xl text-base text-[#c8c1b5] md:text-lg">{description}</p>
      ) : null}
    </header>
  );
}
