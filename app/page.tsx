export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">
      <section
        id="home"
        className="flex min-h-screen flex-col items-center justify-center px-6 text-center"
      >
        <h1 className="mb-4 text-4xl font-bold md:text-5xl">
          Frietkot Bourg-Argental
        </h1>
        <p className="mb-8 max-w-md text-neutral-400">
          Authentic Belgian fries in France.
        </p>
        <a
          href="tel:+33784428106"
          className="inline-block rounded-full bg-yellow-400 px-8 py-3 text-base font-semibold text-black transition-colors hover:bg-yellow-300"
        >
          Call to order
        </a>
      </section>
    </main>
  );
}
