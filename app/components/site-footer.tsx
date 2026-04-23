import Link from "next/link";

export default function SiteFooter() {
  return (
    <footer className="border-t border-white/10 bg-[#090909] px-6 py-12 md:px-8">
      <div className="mx-auto grid w-full max-w-7xl gap-8 md:grid-cols-2">
        <div>
          <p className="section-eyebrow">Frietkot</p>
          <p className="mt-3 max-w-md text-sm text-[#c8c1b5]">
            Friterie Belge · Authentic Belgian Taste. Depuis 1990 à
            Bourg-Argental.
          </p>
        </div>

        <div className="flex flex-wrap items-center gap-5 text-sm text-[#f5efe3] md:justify-end">
          <Link className="transition-colors hover:text-[#FFD700]" href="/notre-histoire">
            Notre histoire
          </Link>
          <Link className="transition-colors hover:text-[#FFD700]" href="/mentions-legales">
            Mentions légales
          </Link>
        </div>
      </div>
    </footer>
  );
}
