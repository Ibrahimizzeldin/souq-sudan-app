
const categories = [
  { icon: "🚗", name: "سيارات ومركبات", count: "بيع وشراء السيارات" },
  { icon: "🏠", name: "عقارات", count: "منازل وأراضٍ وشقق" },
  { icon: "📱", name: "هواتف وإلكترونيات", count: "أجهزة ومستلزمات" },
  { icon: "🐔", name: "حيوانات وطيور", count: "دواجن ومواشي وطيور" },
  { icon: "🪑", name: "أثاث ومنزل", count: "أثاث وأجهزة منزلية" },
  { icon: "💼", name: "وظائف وخدمات", count: "فرص عمل وخدمات" },
  { icon: "👕", name: "ملابس وأزياء", count: "ملابس وإكسسوارات" },
  { icon: "📦", name: "أخرى", count: "إعلانات متنوعة" },
];

const ads = [
  {
    icon: "🚙",
    title: "سيارات للبيع في السودان",
    description: "تصفح أحدث عروض السيارات",
    price: "تصفح الإعلانات",
    category: "سيارات",
  },
  {
    icon: "🏡",
    title: "عقارات للبيع والإيجار",
    description: "بيوت وشقق وأراضٍ",
    price: "تصفح الإعلانات",
    category: "عقارات",
  },
  {
    icon: "🐓",
    title: "دواجن وطيور",
    description: "دجاج وطيور ومستلزمات تربية",
    price: "تصفح الإعلانات",
    category: "حيوانات",
  },
];

export default function HomePage() {
  return (
    <main>
      <header className="topbar">
        <div className="container nav">
          <a className="logo" href="/">
            <span className="logo-icon">س</span>
            <span>سوق <b>السودان</b></span>
          </a>

          <nav className="nav-links">
            <a href="/">الرئيسية</a>
            <a href="#categories">الأقسام</a>
            <a href="#ads">الإعلانات</a>
          </nav>

          <div className="nav-actions">
            <a className="login-link" href="/login">دخول</a>
            <a className="post-button" href="/post">＋ أضف إعلانك</a>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <span className="hero-tag">السوق السوداني في مكان واحد</span>
          <h1>بيع واشتري بكل سهولة<br />
            <span>في سوق السودان</span>
          </h1>
          <p>
            اكتشف آلاف المنتجات والعروض، أو انشر إعلانك
            للوصول إلى المشترين في جميع أنحاء السودان.
          </p>

          <form className="search-box" action="/search">
            <input
              type="search"
              name="q"
              placeholder="ماذا تبحث عنه؟ سيارة، منزل، هاتف..."
            />
            <button type="submit">ابحث الآن</button>
          </form>

          <div className="hero-note">
            <span>✓</span> منصة إعلانات مبوبة للسوق السوداني
          </div>
        </div>
      </section>

      <section className="section container" id="categories">
        <div className="section-heading">
          <div>
            <span className="eyebrow">تصفح السوق</span>
            <h2>الأقسام الرئيسية</h2>
          </div>
          <span className="muted">اختر القسم المناسب لك</span>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <a
              className="category-card"
              href={`/category/${encodeURIComponent(category.name)}`}
              key={category.name}
            >
              <span className="category-icon">{category.icon}</span>
              <strong>{category.name}</strong>
              <small>{category.count}</small>
            </a>
          ))}
        </div>
      </section>

      <section className="featured-section" id="ads">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">اكتشف المزيد</span>
              <h2>إعلانات السوق</h2>
            </div>
            <span className="muted">نماذج للأقسام المتاحة</span>
          </div>

          <div className="ads-grid">
            {ads.map((ad) => (
              <article className="ad-card" key={ad.title}>
                <div className="ad-image">{ad.icon}</div>
                <div className="ad-info">
                  <span className="ad-category">{ad.category}</span>
                  <h3>{ad.title}</h3>
                  <p>{ad.description}</p>
                  <strong>{ad.price}</strong>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="publish-banner container">
        <div>
          <h2>لديك شيء تريد بيعه؟</h2>
          <p>انشر إعلانك وابدأ الوصول إلى المشترين.</p>
        </div>
        <a href="/post">أضف إعلاناً الآن ←</a>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <strong>سوق السودان</strong>
          <span>منصة سودانية للبيع والشراء والإعلانات المبوبة.</span>
          <small>© {new Date().getFullYear()} سوق السودان</small>
        </div>
      </footer>
    </main>
  );
          }
