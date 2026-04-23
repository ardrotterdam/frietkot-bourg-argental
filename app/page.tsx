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

      <nav className="fixed top-0 z-30 w-full border-b border-white/10 bg-black/35 backdrop-blur-xl">
        <div className="mx-auto flex w-full max-w-7xl items-center justify-between px-6 py-4 md:px-10">
          <a href="#" className="flex items-center gap-3">
            <img
              src="/logo.png"
              alt="Frietkot logo"
              className="h-10 w-10 rounded-full border border-yellow-300/40 object-cover"
            />
            <span className="text-lg font-semibold tracking-wide">Frietkot</span>
          </a>
          <div className="flex items-center gap-6 text-sm text-neutral-200 md:gap-8">
            <a className="transition-colors hover:text-yellow-300" href="#">
              Home
            </a>
            <a className="transition-colors hover:text-yellow-300" href="#menu">
              Menu
            </a>
            <a className="transition-colors hover:text-yellow-300" href="#contact">
              Contact
            </a>
          </div>
        </div>
      </nav>

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

      <div className="relative z-10 bg-[#050505]">
        <section className="px-6 py-24 md:px-10">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent p-8 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-12">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-300/80">
                Signature
              </p>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                Crafted the Belgian Way
              </h2>
              <p className="mt-6 max-w-2xl text-neutral-300 md:text-lg">
                Our fries are cut fresh, double-cooked with precision, and served
                with rich sauces in a warm, cinematic atmosphere. Belgian
                authenticity meets contemporary elegance in Bourg-Argental.
              </p>
            </article>
            <aside className="rounded-3xl border border-yellow-300/30 bg-[linear-gradient(160deg,rgba(250,204,21,0.22),rgba(20,20,20,0.82))] p-8 shadow-[0_24px_80px_rgba(250,204,21,0.14)] md:p-10">
              <p className="text-2xl font-medium leading-snug text-yellow-50 md:text-3xl">
                A refined Belgian fry experience, crafted for memorable nights.
              </p>
            </aside>
          </div>
        </section>

        <section id="menu" className="px-6 py-24 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-yellow-300/80">
              Menu Selection
            </p>
            <h2 className="text-3xl font-semibold md:text-5xl">Our Menu</h2>
            <p className="mt-4 max-w-2xl text-neutral-300 md:text-lg">
              Authentic Belgian comfort food, prepared with care and served in a
              refined, warm atmosphere.
            </p>

            <div className="mt-12 grid gap-6 md:grid-cols-2">
              <article className="rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.12),rgba(16,16,16,0.75)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/45 hover:shadow-[0_24px_60px_rgba(250,204,21,0.15)]">
                <h3 className="mb-5 text-2xl font-semibold text-yellow-100">Plats</h3>
                <ul className="space-y-3 text-neutral-200">
                  <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                    <span>Carbonade Flamande</span>
                    <span className="font-medium text-yellow-200">15,90 €</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                    <span>Travers de porc</span>
                    <span className="font-medium text-yellow-200">14,50 €</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 pb-1">
                    <span>Boulettes maison</span>
                    <span className="font-medium text-yellow-200">14,50 €</span>
                  </li>
                </ul>
              </article>

              <article className="rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.12),rgba(16,16,16,0.75)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/45 hover:shadow-[0_24px_60px_rgba(250,204,21,0.15)]">
                <h3 className="mb-5 text-2xl font-semibold text-yellow-100">
                  Salades
                </h3>
                <ul className="space-y-3 text-neutral-200">
                  <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                    <span>Salade Thon</span>
                    <span className="font-medium text-yellow-200">13,90 €</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                    <span>Salade Saumon</span>
                    <span className="font-medium text-yellow-200">15,00 €</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                    <span>Salade Végétarien</span>
                    <span className="font-medium text-yellow-200">13,90 €</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 pb-1">
                    <span>Salade Poulet</span>
                    <span className="font-medium text-yellow-200">13,90 €</span>
                  </li>
                </ul>
              </article>

              <article className="rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.12),rgba(16,16,16,0.75)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/45 hover:shadow-[0_24px_60px_rgba(250,204,21,0.15)]">
                <h3 className="mb-5 text-2xl font-semibold text-yellow-100">Menus</h3>
                <ul className="space-y-3 text-neutral-200">
                  <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                    <span>Menu Burger</span>
                    <span className="font-medium text-yellow-200">13,90 €</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                    <span>Menu Brochettes</span>
                    <span className="font-medium text-yellow-200">15,90 €</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 pb-1">
                    <span>Menu Enfant</span>
                    <span className="font-medium text-yellow-200">11,00 €</span>
                  </li>
                </ul>
              </article>

              <article className="rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.12),rgba(16,16,16,0.75)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/45 hover:shadow-[0_24px_60px_rgba(250,204,21,0.15)]">
                <h3 className="mb-5 text-2xl font-semibold text-yellow-100">
                  Boissons
                </h3>
                <ul className="space-y-3 text-neutral-200">
                  <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                    <span>Bière Bouteille</span>
                    <span className="font-medium text-yellow-200">5,00 €</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                    <span>Bière Pression</span>
                    <span className="font-medium text-yellow-200">3,00 €</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
                    <span>Café</span>
                    <span className="font-medium text-yellow-200">3,00 €</span>
                  </li>
                  <li className="flex items-center justify-between gap-4 pb-1">
                    <span>Thé</span>
                    <span className="font-medium text-yellow-200">3,00 €</span>
                  </li>
                </ul>
              </article>
            </div>
          </div>
        </section>

        <section id="contact" className="px-6 pb-24 pt-8 md:px-10">
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
      </div>
    </main>
  );
}
