export default function Home() {
  return (
    <>
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
              Friterie belge premium
            </p>
            <h1 className="text-5xl font-semibold leading-tight md:text-7xl">
              Authentiques frites belges
            </h1>
            <p className="mx-auto mt-6 max-w-2xl text-base text-neutral-200 md:text-xl">
              Frietkot Bourg-Argental - Le vrai gout belge en France
            </p>

            <div className="mt-10 flex flex-wrap items-center justify-center gap-4">
              <a
                href="/menu"
                className="rounded-full border border-yellow-300/80 bg-yellow-300 px-8 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-200"
              >
                Voir le menu
              </a>
              <a
                href="tel:+33784428106"
                className="rounded-full border border-white/50 bg-transparent px-8 py-3 text-sm font-semibold uppercase tracking-wider text-white transition-all duration-300 hover:-translate-y-0.5 hover:border-yellow-300 hover:text-yellow-200"
              >
                Nous appeler
              </a>
            </div>
          </div>
        </section>
      </main>

      <div className="relative z-10 bg-[#050505]">
        <section className="px-6 py-24 md:px-10">
          <div className="mx-auto grid w-full max-w-7xl gap-8 lg:grid-cols-[1.15fr_0.85fr]">
            <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent p-8 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-12">
              <p className="mb-4 text-xs uppercase tracking-[0.3em] text-yellow-300/80">
                Signature
              </p>
              <h2 className="text-3xl font-semibold leading-tight md:text-5xl">
                Preparees a la belge
              </h2>
              <p className="mt-6 max-w-2xl text-neutral-300 md:text-lg">
                Nos pommes de terre sont decoupees chaque jour, cuites en deux
                bains selon la tradition belge, puis servies avec passion dans une
                ambiance chaleureuse et elegante.
              </p>
            </article>
            <aside className="rounded-3xl border border-yellow-300/30 bg-[linear-gradient(160deg,rgba(250,204,21,0.22),rgba(20,20,20,0.82))] p-8 shadow-[0_24px_80px_rgba(250,204,21,0.14)] md:p-10">
              <p className="text-2xl font-medium leading-snug text-yellow-50 md:text-3xl">
                La Belgique dans votre assiette, au coeur de Bourg-Argental.
              </p>
            </aside>
          </div>
        </section>

        <section className="px-6 py-24 md:px-10">
          <div className="mx-auto w-full max-w-7xl">
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-yellow-300/80">
              Selection maison
            </p>
            <h2 className="text-3xl font-semibold md:text-5xl">Apercu du menu</h2>
            <div className="mt-12 grid gap-6 md:grid-cols-3">
              <article className="rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.12),rgba(16,16,16,0.75)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/45 hover:shadow-[0_24px_60px_rgba(250,204,21,0.15)]">
                <h3 className="text-2xl font-semibold text-yellow-100">
                  Frites belges
                </h3>
                <p className="mt-4 text-neutral-300">
                  Croquantes a l&apos;exterieur, fondantes a l&apos;interieur, avec
                  des sauces gourmandes.
                </p>
              </article>
              <article className="rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.12),rgba(16,16,16,0.75)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/45 hover:shadow-[0_24px_60px_rgba(250,204,21,0.15)]">
                <h3 className="text-2xl font-semibold text-yellow-100">Snacks</h3>
                <p className="mt-4 text-neutral-300">
                  Les incontournables de la street food belge, prepares minute.
                </p>
              </article>
              <article className="rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.12),rgba(16,16,16,0.75)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.45)] transition-all duration-300 hover:-translate-y-1 hover:border-yellow-300/45 hover:shadow-[0_24px_60px_rgba(250,204,21,0.15)]">
                <h3 className="text-2xl font-semibold text-yellow-100">Boissons</h3>
                <p className="mt-4 text-neutral-300">
                  Une selection rafraichissante pour accompagner chaque repas.
                </p>
              </article>
            </div>

            <a
              href="/menu"
              className="mt-10 inline-block rounded-full border border-yellow-300/85 bg-yellow-300 px-10 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-200"
            >
              Voir la carte complete
            </a>
          </div>
        </section>

        <section className="px-6 pb-24 pt-8 md:px-10">
          <div className="mx-auto w-full max-w-4xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-black/40 p-10 text-center shadow-[0_28px_75px_rgba(0,0,0,0.5)] backdrop-blur-xl md:p-14">
            <p className="mb-3 text-xs uppercase tracking-[0.32em] text-yellow-300/80">
              Contact rapide
            </p>
            <h2 className="text-3xl font-semibold md:text-5xl">07 84 42 81 06</h2>
            <a
              href="/contact"
              className="mt-8 inline-block rounded-full border border-yellow-300/85 bg-yellow-300 px-10 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-200"
            >
              Aller a la page contact
            </a>
          </div>
        </section>
      </div>
    </>
  );
}
