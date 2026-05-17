export default function Home() {
  return (
    <main className="site-main">
      <section className="hero-section">
        <p className="eyebrow">Welcome to</p>

        <h1 className="hero-title">Moni Boutique Store</h1>

        <p className="hero-description">
          Handmade pieces, vintage finds, collectibles, jewelry, and small
          treasures — carefully selected and listed with care.
        </p>

        <div className="button-row">
          <a href="/shop" className="button button-primary">
            Shop Items
          </a>

          <a href="/about" className="button button-secondary">
            About Moni Boutique
          </a>
        </div>

        <section className="feature-card">
          <p className="eyebrow">Start here</p>

          <h2 className="feature-title">Explore the shop</h2>

          <p className="feature-text">
            Browse current and upcoming items from Moni Boutique, including
            handmade coasters, vintage finds, jewelry, collectibles, and home
            décor.
          </p>

          <a href="/shop" className="button button-primary feature-link">
            Go to Shop Page
          </a>
        </section>
      </section>
    </main>
  );
}