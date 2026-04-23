export default function Home() {
  return (
    <main className="relative min-h-screen overflow-x-clip bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 -z-30 bg-[radial-gradient(circle_at_15%_20%,rgba(245,158,11,0.18),transparent_32%),radial-gradient(circle_at_85%_15%,rgba(234,179,8,0.14),transparent_30%),radial-gradient(circle_at_50%_100%,rgba(180,83,9,0.22),transparent_45%),linear-gradient(180deg,#0a0a0a_0%,#040404_55%,#050505_100%)]" />
      <div className="pointer-events-none absolute inset-0 -z-20 bg-[radial-gradient(circle_at_center,transparent_40%,rgba(0,0,0,0.65)_100%)]" />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/25 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="group flex items-center gap-3">
            <img
              src="/frietkot-bourg-argental-logo.webp"
              alt="Frietkot Bourg-Argental logo"
              className="h-10 w-10 rounded-full border border-yellow-300/40 object-cover shadow-[0_0_30px_rgba(250,204,21,0.22)] transition-transform duration-300 group-hover:scale-105"
            />
            <div className="leading-tight">
              <p className="text-[0.66rem] uppercase tracking-[0.3em] text-yellow-300/75">
                Bourg-Argental
              </p>
              <p className="text-lg font-semibold tracking-wide">Frietkot</p>
            </div>
          </a>

          <div className="flex items-center gap-6 text-sm tracking-wide text-neutral-200 md:gap-8">
            <a href="#home" className="transition-colors duration-300 hover:text-yellow-300">
              Home
            </a>
            <a href="#menu" className="transition-colors duration-300 hover:text-yellow-300">
              Menu
            </a>
            <a
              href="#contact"
              className="transition-colors duration-300 hover:text-yellow-300"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="relative mx-auto grid min-h-screen w-full max-w-7xl gap-12 px-6 pb-20 pt-32 md:px-10 lg:grid-cols-[1.06fr_0.94fr] lg:items-center"
      >
        <div className="animate-fade-in">
          <p className="mb-5 text-xs uppercase tracking-[0.34em] text-yellow-300/80">
            Premium Belgian Fries
          </p>
          <h1 className="max-w-2xl text-5xl font-semibold leading-[1.02] md:text-7xl">
            Authentic Belgian Fries
          </h1>
          <p className="mt-7 max-w-2xl text-base text-neutral-300 md:text-xl">
            Frietkot Bourg-Argental - Real Belgian taste in France
          </p>

          <div className="mt-10 flex flex-wrap gap-4">
            <a
              href="#menu"
              className="rounded-full border border-yellow-300/80 bg-yellow-300 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-200"
            >
              View Menu
            </a>
            <a
              href="tel:+33784428106"
              className="rounded-full border border-white/35 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-300/70 hover:text-yellow-200"
            >
              Call Now
            </a>
          </div>
        </div>

        <div className="relative flex justify-center lg:justify-end">
          <div className="absolute -inset-6 -z-10 rounded-[2.5rem] bg-[radial-gradient(circle,rgba(250,204,21,0.35),rgba(0,0,0,0)_65%)] blur-2xl" />
          <div className="relative w-full max-w-md rounded-[2.2rem] border border-white/15 bg-gradient-to-b from-white/10 to-black/35 p-4 shadow-[0_34px_100px_rgba(0,0,0,0.65)] backdrop-blur-xl">
            <img
              src="/frietkot-bourg-argental-logo.webp"
              alt="Frietkot Bourg-Argental premium logo artwork"
              className="w-full rounded-[1.8rem] border border-yellow-200/15 object-cover shadow-[0_20px_70px_rgba(250,204,21,0.18)] transition-transform duration-500 hover:scale-[1.02]"
            />
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.12fr_0.88fr]">
          <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent p-8 shadow-[0_24px_70px_rgba(0,0,0,0.42)] backdrop-blur-md md:p-12">
            <p className="mb-4 text-xs uppercase tracking-[0.32em] text-yellow-300/80">
              Signature
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              Crafted the Belgian Way
            </h2>
            <p className="mt-6 max-w-2xl text-neutral-300 md:text-lg">
              Every fry is cut fresh, cooked with precision, and finished to a
              golden crunch. We blend Belgian tradition with modern presentation
              for an elevated dining ritual in Bourg-Argental.
            </p>
          </article>

          <aside className="group relative overflow-hidden rounded-3xl border border-yellow-300/30 bg-[linear-gradient(150deg,rgba(250,204,21,0.2),rgba(22,22,22,0.85))] p-8 shadow-[0_24px_85px_rgba(250,204,21,0.18)] md:p-10">
            <div className="absolute -right-8 -top-8 h-40 w-40 rounded-full bg-yellow-300/20 blur-2xl transition duration-500 group-hover:scale-110" />
            <img
              src="/frietkot-bourg-argental-logo.webp"
              alt="Frietkot highlight logo"
              className="relative z-10 mb-6 h-20 w-20 rounded-full border border-yellow-100/30 object-cover shadow-[0_0_35px_rgba(250,204,21,0.35)]"
            />
            <p className="relative z-10 text-2xl font-medium leading-snug text-yellow-50 md:text-3xl">
              A cinematic taste of Belgium in the heart of France.
            </p>
          </aside>
        </div>
      </section>

      <section id="menu" className="px-6 py-24 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-yellow-300/80">
            Curated Selection
          </p>
          <h2 className="mb-12 text-3xl font-semibold md:text-5xl">Menu Preview</h2>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="group rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.14),rgba(18,18,18,0.72)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.42)] transition-all duration-300 hover:-translate-y-1.5 hover:border-yellow-300/45 hover:shadow-[0_24px_60px_rgba(250,204,21,0.14)]">
              <div className="mb-5 h-1.5 w-16 rounded-full bg-yellow-300/80 transition-all duration-300 group-hover:w-24" />
              <h3 className="text-2xl font-semibold text-yellow-100">Fries</h3>
              <p className="mt-4 text-neutral-300">
                Double-cooked Belgian fries with a crisp shell and airy center.
              </p>
            </article>

            <article className="group rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.14),rgba(18,18,18,0.72)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.42)] transition-all duration-300 hover:-translate-y-1.5 hover:border-yellow-300/45 hover:shadow-[0_24px_60px_rgba(250,204,21,0.14)]">
              <div className="mb-5 h-1.5 w-16 rounded-full bg-yellow-300/80 transition-all duration-300 group-hover:w-24" />
              <h3 className="text-2xl font-semibold text-yellow-100">Snacks</h3>
              <p className="mt-4 text-neutral-300">
                Belgian street-food classics and chef-selected savory bites.
              </p>
            </article>

            <article className="group rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.14),rgba(18,18,18,0.72)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.42)] transition-all duration-300 hover:-translate-y-1.5 hover:border-yellow-300/45 hover:shadow-[0_24px_60px_rgba(250,204,21,0.14)]">
              <div className="mb-5 h-1.5 w-16 rounded-full bg-yellow-300/80 transition-all duration-300 group-hover:w-24" />
              <h3 className="text-2xl font-semibold text-yellow-100">Drinks</h3>
              <p className="mt-4 text-neutral-300">
                Signature refreshments and warm beverages to complete your menu.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 md:px-10">
        <div className="mx-auto w-full max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-black/40 p-10 text-center shadow-[0_28px_75px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-14">
          <p className="mb-3 text-xs uppercase tracking-[0.32em] text-yellow-300/80">
            Contact
          </p>
          <h2 className="text-3xl font-semibold md:text-5xl">07 84 42 81 06</h2>
          <p className="mt-3 text-neutral-300">Bourg-Argental, France</p>
          <a
            href="tel:+33784428106"
            className="mt-8 inline-block rounded-full border border-yellow-300/85 bg-yellow-300 px-10 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-200"
          >
            Call Now
          </a>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-2 text-sm text-neutral-400 md:flex-row md:items-center">
          <p>Frietkot Bourg-Argental</p>
          <p>Authentic Belgian fries, refined for a modern taste.</p>
        </div>
      </footer>
    </main>
  );
}
