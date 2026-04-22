export default function Home() {
  return (
    <main className="min-h-screen bg-black text-white">

      {/* NAVBAR */}
      <nav className="fixed top-0 left-0 w-full flex justify-between items-center px-8 py-6 z-20 bg-black/50 backdrop-blur-md">
        
        <div className="flex items-center gap-3">
          <img
            src="https://i.imgur.com/2DhmtJ4.png"
            alt="Frietkot logo"
            className="w-10 h-10 object-contain"
          />
          <span className="font-bold text-lg">Frietkot</span>
        </div>

        <div className="flex gap-6 text-sm">
          <a href="#home" className="hover:text-yellow-400">Home</a>
          <a href="#menu" className="hover:text-yellow-400">Menu</a>
          <a href="#contact" className="hover:text-yellow-400">Contact</a>
        </div>
      </nav>

      {/* HERO */}
      <section
        id="home"
        className="flex flex-col items-center justify-center text-center min-h-screen px-4 bg-cover bg-center"
        style={{
          backgroundImage:
            "url('https://images.unsplash.com/photo-1550547660-d9450f859349')",
        }}
      >
        <div className="bg-black/60 p-8 rounded-xl max-w-3xl backdrop-blur-md animate-fade-in">

          <h1 className="text-5xl md:text-7xl font-extrabold mb-6 leading-tight">
            Authentic Belgian <span className="text-yellow-400">Fries</span> 🍟
          </h1>

          <p className="text-lg md:text-2xl text-gray-300 mb-8 max-w-2xl mx-auto">
            Frietkot Bourg-Argental – Real Belgian taste in France
          </p>

          <a
            href="#menu"
            className="inline-block bg-yellow-400 text-black px-10 py-4 rounded-full text-lg font-semibold hover:bg-yellow-300 transition transform hover:scale-105"
          >
            View Menu
          </a>

        </div>
      </section>

      {/* MENU */}
      <section id="menu" className="px-6 md:px-12 py-24 bg-neutral-950">
        <div className="max-w-6xl mx-auto">

          <h2 className="text-4xl md:text-5xl font-bold mb-12 text-center">
            Our Menu
          </h2>

          <div className="grid md:grid-cols-2 gap-12">

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-yellow-400">Plats</h3>

              <p className="flex justify-between"><span>Carbonade Flamande</span><span>15,90€</span></p>
              <p className="flex justify-between"><span>Travers de porc</span><span>14,50€</span></p>
              <p className="flex justify-between"><span>Boulettes maison</span><span>14,50€</span></p>

              <h3 className="text-2xl font-bold text-yellow-400 mt-6">Menus</h3>

              <p className="flex justify-between"><span>Menu Burger</span><span>13,90€</span></p>
              <p className="flex justify-between"><span>Menu Brochettes</span><span>15,90€</span></p>
              <p className="flex justify-between"><span>Menu Enfant</span><span>11,00€</span></p>
            </div>

            <div className="space-y-6">
              <h3 className="text-2xl font-bold text-yellow-400">Salades</h3>

              <p className="flex justify-between"><span>Salade Thon</span><span>13,90€</span></p>
              <p className="flex justify-between"><span>Salade Saumon</span><span>15,00€</span></p>
              <p className="flex justify-between"><span>Salade Poulet</span><span>13,90€</span></p>

              <h3 className="text-2xl font-bold text-yellow-400 mt-6">Boissons</h3>

              <p className="flex justify-between"><span>Bière bouteille</span><span>5,00€</span></p>
              <p className="flex justify-between"><span>Bière pression</span><span>3,00€</span></p>
              <p className="flex justify-between"><span>Café / Thé</span><span>3,00€</span></p>
            </div>

          </div>
        </div>
      </section>

      {/* CONTACT */}
      <section id="contact" className="px-6 md:px-12 py-24 bg-black text-center">
        <h2 className="text-4xl md:text-5xl font-bold mb-6">Contact</h2>

        <p className="text-xl mb-4">📞 07 84 42 81 06</p>
        <p className="text-gray-400">Bourg-Argental, France</p>
      </section>

    </main>
  );
}