export default function Home() {
  return (
    <main className="min-h-screen bg-stone-50 text-stone-900">
      <section className="mx-auto flex min-h-screen max-w-5xl flex-col items-center justify-center px-6 text-center">
        <p className="mb-4 text-sm uppercase tracking-[0.3em] text-stone-500">
          Welcome to
        </p>

        <h1 className="text-5xl font-semibold tracking-tight sm:text-7xl">
          Moni Boutique Store
        </h1>

        <p className="mt-6 max-w-2xl text-lg leading-8 text-stone-600">
          Handmade pieces, vintage finds, collectibles, jewelry, and small
          treasures — carefully selected and listed with care.
        </p>

        <div className="mt-10 flex flex-col gap-4 sm:flex-row">
          <a
            href="/shop"
            className="rounded-full bg-stone-900 px-8 py-3 text-sm font-semibold text-white hover:bg-stone-700"
          >
            Shop Items
          </a>

          <a
            href="/about"
            className="rounded-full border border-stone-300 px-8 py-3 text-sm font-semibold text-stone-800 hover:bg-white"
          >
            About Moni Boutique
          </a>
        </div>
      </section>
    </main>
  );
}