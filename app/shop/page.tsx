export default function ShopPage() {
  return (
    <main className="site-main">
      <section className="page-section">
        <a href="/" className="back-link">
          ← Back home
        </a>

        <div className="page-header">
          <p className="eyebrow">Moni Boutique</p>

          <h1 className="page-title">Shop Items</h1>

          <p className="page-description">
            This is where handmade pieces, vintage finds, collectibles, jewelry,
            and small treasures will be listed soon.
          </p>
        </div>

        <div className="info-card">
          <h2 className="info-card-title">Coming soon</h2>

          <p className="info-card-text">
            Products will be added here with photos, prices, descriptions, and
            item details.
          </p>
        </div>
      </section>
    </main>
  );
}