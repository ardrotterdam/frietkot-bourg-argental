type SectionHeadingProps = {
  eyebrow: string;
  title: string;
  description?: string;
};

export default function SectionHeading({
  eyebrow,
  title,
  description,
}: SectionHeadingProps) {
  return (
    <header>
      <p className="section-eyebrow">{eyebrow}</p>
      <h2 className="mt-3 font-[var(--font-fraunces)] text-4xl leading-tight text-[#f5efe3] md:text-5xl">
        {title}
      </h2>
      {description ? (
        <p className="mt-5 max-w-3xl text-base text-[#c8c1b5] md:text-lg">
          {description}
        </p>
      ) : null}
    </header>
  );
}
