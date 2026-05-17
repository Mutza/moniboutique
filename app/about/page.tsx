export default function AboutPage() {
  return (
    <main className="site-main">
      <section className="page-section">
        <a href="/" className="back-link">
          ← Back home
        </a>

        <div className="page-header">
          <p className="eyebrow">About</p>

          <h1 className="page-title">Moni Boutique</h1>

          <p className="page-description">
            Moni Boutique is a small personal shop for handmade pieces, vintage
            finds, collectibles, jewelry, home décor, and small treasures.
          </p>
        </div>

        <div className="info-card">
          <h2 className="info-card-title">Carefully selected items</h2>

          <p className="info-card-text">
            Each item is listed with care, including details about condition,
            measurements, photos, and anything important for the buyer to know.
          </p>
        </div>
      </section>
    </main>
  );
}