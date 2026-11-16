
import Link from "next/link";
import { createClient } from "@/lib/supabase/server";

const icons: Record<string, string> = {
  vehicles: "🚗",
  "real-estate": "🏠",
  electronics: "📱",
  home: "🪑",
  animals: "🐓",
  "jobs-services": "💼",
  fashion: "👕",
  other: "📦",
};

export default async function HomePage() {
  let categories: any[] = [];
  let ads: any[] = [];

  try {
    const supabase = await createClient();

    const [categoryResult, adResult] = await Promise.all([
      supabase
        .from("categories")
        .select("id,name_ar,slug")
        .eq("is_active", true)
        .order("sort_order"),

      supabase
        .from("ads")
        .select(`
          id,title,price,currency,city,created_at,
          categories(name_ar,slug),
          ad_images(image_url,sort_order)
        `)
        .eq("status", "active")
        .order("created_at", { ascending: false })
        .limit(12),
    ]);

    categories = categoryResult.data ?? [];
    ads = adResult.data ?? [];
  } catch {
    categories = [];
    ads = [];
  }

  return (
    <main dir="rtl">
      <header className="topbar">
        <div className="container nav">
          <Link href="/" className="logo">
            سوق <b>السودان</b>
          </Link>

          <nav className="nav-links">
            <Link href="/">الرئيسية</Link>
            <a href="#categories">الأقسام</a>
            <a href="#ads">الإعلانات</a>
          </nav>

          <div className="nav-actions">
            <Link href="/login">دخول</Link>
            <Link href="/post" className="post-button">
              + أضف إعلانك
            </Link>
          </div>
        </div>
      </header>

      <section className="hero">
        <div className="container hero-content">
          <span className="hero-tag">السوق السوداني في مكان واحد</span>

          <h1>
            بيع واشتري بكل سهولة
            <br />
            <span>في سوق السودان</span>
          </h1>

          <p>
            اكتشف المنتجات والعقارات والسيارات والخدمات
            المعروضة للبيع في جميع أنحاء السودان.
          </p>

          <form action="/search" className="search-box">
            <input
              type="search"
              name="q"
              placeholder="ماذا تبحث عنه؟"
            />
            <button type="submit">ابحث الآن</button>
          </form>
        </div>
      </section>

      <section className="section container" id="categories">
        <div className="section-heading">
          <div>
            <span className="eyebrow">تصفح السوق</span>
            <h2>الأقسام الرئيسية</h2>
          </div>
        </div>

        <div className="category-grid">
          {categories.map((category) => (
            <Link
              href={`/category/${category.slug}`}
              className="category-card"
              key={category.id}
            >
              <span className="category-icon">
                {icons[category.slug] ?? "📦"}
              </span>
              <strong>{category.name_ar}</strong>
              <small>تصفح الإعلانات</small>
            </Link>
          ))}
        </div>
      </section>

      <section className="featured-section" id="ads">
        <div className="container">
          <div className="section-heading">
            <div>
              <span className="eyebrow">أحدث المعروض</span>
              <h2>أحدث الإعلانات</h2>
            </div>
            <Link href="/search">عرض الكل ←</Link>
          </div>

          {ads.length > 0 ? (
            <div className="ads-grid">
              {ads.map((ad) => {
                const image = [...(ad.ad_images ?? [])]
                  .sort(
                    (a: any, b: any) =>
                      a.sort_order - b.sort_order
                  )[0]?.image_url;

                return (
                  <Link
                    href={`/ad/${ad.id}`}
                    className="ad-card"
                    key={ad.id}
                  >
                    {image ? (
                      <img
                        src={image}
                        alt={ad.title}
                        className="ad-photo"
                      />
                    ) : (
                      <div className="ad-image">🛍️</div>
                    )}

                    <div className="ad-info">
                      <span className="ad-category">
                        {ad.categories?.name_ar ?? "إعلان"}
                      </span>

                      <h3>{ad.title}</h3>
                      <p>{ad.city ?? "السودان"}</p>

                      <strong>
                        {ad.price == null
                          ? "السعر عند التواصل"
                          : `${new Intl.NumberFormat("ar-SD").format(ad.price)} ${ad.currency === "SDG" ? "ج.س" : ad.currency}`}
                      </strong>
                    </div>
                  </Link>
                );
              })}
            </div>
          ) : (
            <div className="empty-state">
              <div>🛍️</div>
              <h3>لا توجد إعلانات منشورة حالياً</h3>
              <p>كن أول من يعرض منتجه في سوق السودان.</p>
              <Link href="/post" className="post-button">
                أضف أول إعلان
              </Link>
            </div>
          )}
        </div>
      </section>

      <section className="publish-banner container">
        <div>
          <h2>لديك شيء تريد بيعه؟</h2>
          <p>انشر إعلانك وابدأ الوصول إلى المشترين.</p>
        </div>
        <Link href="/post">أضف إعلاناً الآن ←</Link>
      </section>

      <footer className="footer">
        <div className="container footer-content">
          <strong>سوق السودان</strong>
          <span>منصة سودانية للبيع والشراء.</span>
          <small>© {new Date().getFullYear()} سوق السودان</small>
        </div>
      </footer>
    </main>
  );
                    }
