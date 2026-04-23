export default function MenuPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-20 pt-14 text-white md:px-10">
      <section className="mx-auto w-full max-w-7xl py-16">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-yellow-300/80">
          Carte
        </p>
        <h1 className="text-4xl font-semibold md:text-6xl">Notre Carte</h1>
        <p className="mt-5 max-w-3xl text-neutral-300 md:text-lg">
          Decouvrez notre selection de specialites belges, de menus gourmands et
          de boissons.
        </p>
      </section>

      <section className="mx-auto grid w-full max-w-7xl gap-6 md:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.12),rgba(16,16,16,0.75)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.45)]">
          <h2 className="mb-5 text-2xl font-semibold text-yellow-100">Plats</h2>
          <ul className="space-y-3 text-neutral-200">
            <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
              <span>Carbonade flamande</span>
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

        <article className="rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.12),rgba(16,16,16,0.75)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.45)]">
          <h2 className="mb-5 text-2xl font-semibold text-yellow-100">Salades</h2>
          <ul className="space-y-3 text-neutral-200">
            <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
              <span>Salade au thon</span>
              <span className="font-medium text-yellow-200">13,90 €</span>
            </li>
            <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
              <span>Salade au saumon</span>
              <span className="font-medium text-yellow-200">15,00 €</span>
            </li>
            <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
              <span>Salade vegetarienne</span>
              <span className="font-medium text-yellow-200">13,90 €</span>
            </li>
            <li className="flex items-center justify-between gap-4 pb-1">
              <span>Salade au poulet</span>
              <span className="font-medium text-yellow-200">13,90 €</span>
            </li>
          </ul>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.12),rgba(16,16,16,0.75)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.45)]">
          <h2 className="mb-5 text-2xl font-semibold text-yellow-100">Menus</h2>
          <ul className="space-y-3 text-neutral-200">
            <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
              <span>Menu burger</span>
              <span className="font-medium text-yellow-200">13,90 €</span>
            </li>
            <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
              <span>Menu brochettes</span>
              <span className="font-medium text-yellow-200">15,90 €</span>
            </li>
            <li className="flex items-center justify-between gap-4 pb-1">
              <span>Menu enfant</span>
              <span className="font-medium text-yellow-200">11,00 €</span>
            </li>
          </ul>
        </article>

        <article className="rounded-3xl border border-white/10 bg-[linear-gradient(170deg,rgba(255,255,255,0.12),rgba(16,16,16,0.75)_55%,rgba(0,0,0,0.95))] p-7 shadow-[0_18px_48px_rgba(0,0,0,0.45)]">
          <h2 className="mb-5 text-2xl font-semibold text-yellow-100">Boissons</h2>
          <ul className="space-y-3 text-neutral-200">
            <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
              <span>Biere bouteille</span>
              <span className="font-medium text-yellow-200">5,00 €</span>
            </li>
            <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
              <span>Biere pression</span>
              <span className="font-medium text-yellow-200">3,00 €</span>
            </li>
            <li className="flex items-center justify-between gap-4 border-b border-white/10 pb-2">
              <span>Cafe</span>
              <span className="font-medium text-yellow-200">3,00 €</span>
            </li>
            <li className="flex items-center justify-between gap-4 pb-1">
              <span>The</span>
              <span className="font-medium text-yellow-200">3,00 €</span>
            </li>
          </ul>
        </article>
      </section>

      <div className="mx-auto mt-14 w-full max-w-7xl rounded-3xl border border-white/10 bg-gradient-to-b from-white/10 to-black/40 p-10 text-center shadow-[0_28px_75px_rgba(0,0,0,0.5)] backdrop-blur-xl">
        <p className="text-neutral-300">
          Une question sur nos plats ou vos commandes ?
        </p>
        <a
          href="tel:+33784428106"
          className="mt-6 inline-block rounded-full border border-yellow-300/85 bg-yellow-300 px-10 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-200"
        >
          Nous appeler
        </a>
      </div>
    </main>
  );
}
