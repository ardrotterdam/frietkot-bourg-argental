export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <nav className="sticky top-0 z-20 border-b border-white/10 bg-black/80 backdrop-blur">
        <div className="mx-auto flex w-full max-w-6xl items-center justify-between px-6 py-4">
          <a href="#home" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Frietkot logo"
              className="h-10 w-10 rounded-full object-cover"
            />
            <span className="text-lg font-semibold tracking-wide">Frietkot</span>
          </a>
          <div className="flex items-center gap-6 text-sm text-neutral-300">
            <a href="#home" className="transition-colors hover:text-yellow-400">
              Home
            </a>
            <a href="#menu" className="transition-colors hover:text-yellow-400">
              Menu
            </a>
            <a
              href="#contact"
              className="transition-colors hover:text-yellow-400"
            >
              Contact
            </a>
          </div>
        </div>
      </nav>

      <section
        id="home"
        className="mx-auto flex min-h-[70vh] w-full max-w-6xl flex-col items-center justify-center px-6 py-20 text-center"
      >
        <h1 className="mb-6 text-5xl font-extrabold leading-tight md:text-7xl">
          Authentic Belgian Fries
        </h1>
        <p className="mb-10 max-w-2xl text-lg text-neutral-300 md:text-2xl">
          Frietkot Bourg-Argental - Real Belgian taste in France
        </p>
        <a
          href="#menu"
          className="rounded-full bg-yellow-400 px-10 py-4 text-base font-semibold text-black transition-all hover:bg-yellow-300 hover:scale-105"
        >
          View Menu
        </a>
      </section>

      <section id="menu" className="mx-auto w-full max-w-6xl px-6 py-20">
        <h2 className="mb-10 text-center text-3xl font-bold md:text-4xl">
          Menu Preview
        </h2>
        <div className="grid gap-6 md:grid-cols-3">
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-xl font-semibold text-yellow-400">
              Belgian Fries
            </h3>
            <p className="text-neutral-300">
              Golden, crispy fries served with classic Belgian sauces.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-xl font-semibold text-yellow-400">Snacks</h3>
            <p className="text-neutral-300">
              Tasty bites including frikandel, nuggets, and house specials.
            </p>
          </article>
          <article className="rounded-2xl border border-white/10 bg-white/5 p-6">
            <h3 className="mb-3 text-xl font-semibold text-yellow-400">Drinks</h3>
            <p className="text-neutral-300">
              Refreshing soft drinks, beers, and warm beverages.
            </p>
          </article>
        </div>
      </section>

      <section id="contact" className="border-t border-white/10 px-6 py-16 text-center">
        <h2 className="mb-5 text-3xl font-bold md:text-4xl">Contact</h2>
        <p className="mb-2 text-lg">07 84 42 81 06</p>
        <p className="text-neutral-400">Bourg-Argental, France</p>
      </section>
    </main>
  );
}
