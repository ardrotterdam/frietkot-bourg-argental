export default function ContactPage() {
  return (
    <main className="min-h-screen bg-[#050505] px-6 pb-20 pt-14 text-white md:px-10">
      <section className="mx-auto w-full max-w-6xl py-16">
        <p className="mb-3 text-xs uppercase tracking-[0.32em] text-yellow-300/80">
          Contact
        </p>
        <h1 className="text-4xl font-semibold md:text-6xl">Contact</h1>
      </section>

      <section className="mx-auto grid w-full max-w-6xl gap-8 lg:grid-cols-2">
        <article className="rounded-3xl border border-white/10 bg-gradient-to-br from-white/10 via-white/[0.03] to-transparent p-8 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-md md:p-12">
          <h2 className="text-2xl font-semibold text-yellow-100 md:text-3xl">
            Frietkot Bourg-Argental
          </h2>
          <p className="mt-6 text-neutral-300 md:text-lg">
            Contactez-nous pour vos commandes, vos questions ou pour venir
            deguster nos specialites belges.
          </p>

          <div className="mt-8 space-y-4 text-neutral-200">
            <p>
              <span className="font-semibold text-yellow-200">Telephone :</span>{" "}
              07 84 42 81 06
            </p>
            <p>
              <span className="font-semibold text-yellow-200">Adresse :</span>{" "}
              Bourg-Argental, France
            </p>
          </div>

          <a
            href="tel:+33784428106"
            className="mt-8 inline-block rounded-full border border-yellow-300/85 bg-yellow-300 px-10 py-3 text-sm font-semibold uppercase tracking-wider text-black transition-all duration-300 hover:-translate-y-0.5 hover:bg-yellow-200"
          >
            Nous appeler
          </a>
        </article>

        <aside className="space-y-8">
          <div className="rounded-3xl border border-white/10 bg-[linear-gradient(160deg,rgba(250,204,21,0.2),rgba(20,20,20,0.82))] p-8 shadow-[0_24px_80px_rgba(250,204,21,0.14)]">
            <h3 className="text-xl font-semibold text-yellow-100">
              Horaires d&apos;ouverture
            </h3>
            <p className="mt-4 text-neutral-200">
              Lun - Ven : 11h30 - 14h30 / 18h00 - 22h00
            </p>
            <p className="mt-2 text-neutral-200">Sam - Dim : 18h00 - 23h00</p>
          </div>

          <div className="rounded-3xl border border-white/10 bg-black/40 p-8 shadow-[0_24px_70px_rgba(0,0,0,0.45)] backdrop-blur-md">
            <h3 className="text-xl font-semibold text-yellow-100">Plan d&apos;acces</h3>
            <div className="mt-4 grid h-48 place-items-center rounded-2xl border border-dashed border-white/20 bg-white/5 text-sm text-neutral-400">
              Emplacement de la carte (a integrer)
            </div>
          </div>
        </aside>
      </section>
    </main>
  );
}
