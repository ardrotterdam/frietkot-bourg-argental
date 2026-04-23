export default function Home() {
  return (
    <main
      className="relative min-h-screen overflow-hidden text-white"
      style={{
        backgroundImage:
          "url('/belgian-fries-hero-frietkot-bourg-argental.webp')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="absolute inset-0 bg-black/60" />
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top,rgba(250,204,21,0.2),transparent_45%)]" />

      <section className="relative z-10 flex min-h-screen items-center justify-center px-6 text-center">
        <div className="animate-fade-in max-w-4xl">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.35em] text-yellow-300 md:text-sm">
            PREMIUM BELGIAN FRIES
          </p>
          <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
            Authentic Belgian Fries
          </h1>
          <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-200 md:text-xl">
            Frietkot Bourg-Argental - Real Belgian taste in France
          </p>

          <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
            <a
              href="#menu"
              className="rounded-full border border-yellow-300/80 bg-yellow-300 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-200"
            >
              View Menu
            </a>
            <a
              href="tel:+33784428106"
              className="rounded-full border border-white/50 bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-300 hover:text-yellow-200"
            >
              Call Now
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
