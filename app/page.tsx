export default function Home() {
  return (
    <main className="min-h-screen overflow-x-clip bg-[#050505] text-white">
      <div className="pointer-events-none absolute inset-0 -z-10 bg-[radial-gradient(circle_at_top,_rgba(234,179,8,0.16),_transparent_40%),radial-gradient(circle_at_20%_80%,_rgba(120,53,15,0.18),_transparent_45%),linear-gradient(to_bottom,_#0a0a0a,_#020202)]" />

      <nav className="fixed top-0 z-50 w-full border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#home" className="group flex items-center gap-3">
            <div
              aria-hidden="true"
              className="grid h-11 w-11 place-items-center rounded-full border border-yellow-400/50 bg-gradient-to-b from-amber-200/20 via-amber-500/20 to-amber-900/30 text-2xl shadow-[0_0_30px_rgba(250,204,21,0.22)] transition-transform duration-300 group-hover:scale-105"
            >
              🍟
            </div>
            <div className="leading-tight">
              <p className="text-[0.68rem] uppercase tracking-[0.26em] text-yellow-300/80">
                Bourg-Argental
              </p>
              <p className="text-lg font-semibold tracking-wide">Frietkot</p>
            </div>
          </a>

          <div className="hidden items-center gap-8 text-sm tracking-wide text-neutral-200 md:flex">
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
        className="relative isolate flex min-h-screen items-center px-6 pb-16 pt-32 md:px-10"
      >
        <div
          className="absolute inset-0 -z-20 bg-cover bg-center"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1585238342024-78d387f4a707?auto=format&fit=crop&w=1600&q=80')",
          }}
        />
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-black/40 via-black/70 to-[#050505]" />

        <div className="mx-auto flex w-full max-w-7xl flex-col gap-10">
          <div className="max-w-4xl rounded-3xl border border-white/15 bg-black/45 p-8 shadow-[0_30px_80px_rgba(0,0,0,0.65)] backdrop-blur-md md:p-12">
            <p className="mb-5 text-xs uppercase tracking-[0.34em] text-yellow-300/80">
              Premium Belgian Fry Atelier
            </p>
            <h1 className="text-5xl font-semibold leading-[1.03] md:text-7xl md:leading-[1.02]">
              Authentic Belgian Fries
              <span className="block bg-gradient-to-r from-yellow-200 via-yellow-400 to-amber-600 bg-clip-text text-transparent">
                Crafted Like Cinema
              </span>
            </h1>
            <p className="mt-6 max-w-2xl text-base text-neutral-200/90 md:text-xl">
              Frietkot Bourg-Argental - Real Belgian taste in France, served with
              bold flavor, rich atmosphere, and contemporary elegance.
            </p>

            <div className="mt-9 flex flex-wrap gap-4">
              <a
                href="#menu"
                className="rounded-full border border-yellow-300/80 bg-yellow-300 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition duration-300 hover:-translate-y-0.5 hover:bg-yellow-200"
              >
                View Menu
              </a>
              <a
                href="tel:+33784428106"
                className="rounded-full border border-white/40 bg-white/5 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white backdrop-blur transition duration-300 hover:-translate-y-0.5 hover:border-yellow-300/70 hover:text-yellow-200"
              >
                Call Now
              </a>
            </div>
          </div>
        </div>
      </section>

      <section className="px-6 py-24 md:px-10">
        <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.2fr_1fr]">
          <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/8 to-transparent p-8 shadow-[0_24px_60px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-12">
            <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-300/80">
              Signature
            </p>
            <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
              Authentic Belgian tradition, elevated with French finesse.
            </h2>
            <p className="mt-6 max-w-2xl text-neutral-300 md:text-lg">
              Our fries are cut daily, double-cooked in true Belgian style, and
              finished to a golden crisp. Every plate is designed to feel warm,
              indulgent, and memorable from first bite to last.
            </p>
          </article>

          <aside className="flex items-end rounded-3xl border border-yellow-300/25 bg-[linear-gradient(165deg,rgba(250,204,21,0.2),rgba(20,20,20,0.72))] p-8 shadow-[0_20px_80px_rgba(250,204,21,0.18)] md:p-10">
            <p className="text-2xl font-medium leading-snug text-yellow-50 md:text-3xl">
              &quot;Belgian soul food in a dark luxury setting.&quot;
            </p>
          </aside>
        </div>
      </section>

      <section id="menu" className="px-6 py-24 md:px-10">
        <div className="mx-auto w-full max-w-7xl">
          <div className="mb-12 flex items-end justify-between gap-6">
            <div>
              <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-300/80">
                Curated Selection
              </p>
              <h2 className="text-3xl font-semibold md:text-5xl">Menu Preview</h2>
            </div>
          </div>

          <div className="grid gap-6 md:grid-cols-3">
            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(0,0,0,0.35))] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/40 hover:shadow-[0_18px_44px_rgba(250,204,21,0.12)]">
              <div className="mb-6 h-1.5 w-16 rounded-full bg-yellow-300/80 transition-all duration-300 group-hover:w-24" />
              <h3 className="text-2xl font-semibold text-yellow-100">Belgian Fries</h3>
              <p className="mt-4 text-neutral-300">
                House-cut potatoes, double-fried for a crisp shell and fluffy core.
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(0,0,0,0.35))] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/40 hover:shadow-[0_18px_44px_rgba(250,204,21,0.12)]">
              <div className="mb-6 h-1.5 w-16 rounded-full bg-yellow-300/80 transition-all duration-300 group-hover:w-24" />
              <h3 className="text-2xl font-semibold text-yellow-100">Snacks</h3>
              <p className="mt-4 text-neutral-300">
                Belgian street favorites and savory signatures made for sharing.
              </p>
            </article>

            <article className="group relative overflow-hidden rounded-3xl border border-white/10 bg-[linear-gradient(180deg,rgba(255,255,255,0.1),rgba(0,0,0,0.35))] p-7 transition duration-300 hover:-translate-y-1 hover:border-yellow-300/40 hover:shadow-[0_18px_44px_rgba(250,204,21,0.12)]">
              <div className="mb-6 h-1.5 w-16 rounded-full bg-yellow-300/80 transition-all duration-300 group-hover:w-24" />
              <h3 className="text-2xl font-semibold text-yellow-100">Drinks</h3>
              <p className="mt-4 text-neutral-300">
                A balanced list of soft drinks, beers, and warm café classics.
              </p>
            </article>
          </div>
        </div>
      </section>

      <section id="contact" className="px-6 py-24 md:px-10">
        <div className="mx-auto w-full max-w-7xl rounded-3xl border border-white/10 bg-white/5 p-8 shadow-[0_24px_60px_rgba(0,0,0,0.35)] backdrop-blur md:p-12">
          <p className="mb-3 text-xs uppercase tracking-[0.3em] text-yellow-300/80">
            Visit Us
          </p>
          <h2 className="text-3xl font-semibold md:text-5xl">Bourg-Argental, France</h2>
          <p className="mt-3 text-neutral-300">Call us for takeout and reservations.</p>
          <div className="mt-8 flex flex-wrap items-center gap-4">
            <a
              href="tel:+33784428106"
              className="rounded-full bg-yellow-300 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-black transition duration-300 hover:bg-yellow-200"
            >
              07 84 42 81 06
            </a>
            <a
              href="#home"
              className="rounded-full border border-white/30 px-7 py-3 text-sm font-semibold uppercase tracking-wider text-white transition duration-300 hover:border-yellow-300/70 hover:text-yellow-200"
            >
              Back to top
            </a>
          </div>
        </div>
      </section>

      <footer className="border-t border-white/10 px-6 py-8 md:px-10">
        <div className="mx-auto flex w-full max-w-7xl flex-col items-start justify-between gap-2 text-sm text-neutral-400 md:flex-row md:items-center">
          <p>Frietkot Bourg-Argental</p>
          <p>Premium Belgian fries experience in France.</p>
        </div>
      </footer>
    </main>
  );
}
