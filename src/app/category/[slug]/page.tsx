
type CategoryPageProps = {
  params: Promise<{
    slug: string;
  }>;
};

const categoryDetails: Record<
  string,
  { icon: string; description: string }
> = {
  "سيارات ومركبات": {
    icon: "🚗",
    description: "سيارات ومركبات للبيع والشراء في السودان.",
  },
  "عقارات": {
    icon: "🏠",
    description: "منازل وشقق وأراضٍ للبيع والإيجار.",
  },
  "هواتف وإلكترونيات": {
    icon: "📱",
    description: "هواتف وأجهزة إلكترونية ومستلزماتها.",
  },
  "حيوانات وطيور": {
    icon: "🐔",
    description: "دواجن وطيور ومواشي ومستلزمات التربية.",
  },
  "أثاث ومنزل": {
    icon: "🪑",
    description: "أثاث وأجهزة ومستلزمات منزلية.",
  },
  "وظائف وخدمات": {
    icon: "💼",
    description: "وظائف وفرص عمل وخدمات متنوعة.",
  },
  "ملابس وأزياء": {
    icon: "👕",
    description: "ملابس وأزياء وإكسسوارات.",
  },
  "أخرى": {
    icon: "📦",
    description: "إعلانات ومنتجات متنوعة.",
  },
};

export default async function CategoryPage({
  params,
}: CategoryPageProps) {
  const { slug } = await params;
  const categoryName = decodeURIComponent(slug);

  const category = categoryDetails[categoryName] || {
    icon: "📦",
    description: "تصفح الإعلانات المنشورة في هذا القسم.",
  };

  return (
    <main className="category-page">
      <header className="category-header">
        <div className="category-header-content">
          <a href="/" className="category-logo">
            <span>س</span>
            سوق السودان
          </a>

          <a href="/" className="home-link">
            الرئيسية
          </a>
        </div>
      </header>

      <section className="category-container">
        <div className="breadcrumb">
          <a href="/">الرئيسية</a>
          <span>←</span>
          <span>{categoryName}</span>
        </div>

        <div className="category-intro">
          <div className="category-icon">
            {category.icon}
          </div>

          <div>
            <h1>{categoryName}</h1>
            <p>{category.description}</p>
          </div>
        </div>

        <div className="category-toolbar">
          <h2>الإعلانات في هذا القسم</h2>
          <span>أحدث الإعلانات ستظهر هنا</span>
        </div>

        <div className="empty-state">
          <div>📭</div>
          <h3>لا توجد إعلانات حالياً</h3>
          <p>
            لم تتم إضافة إعلانات لهذا القسم بعد.
            كن أول من ينشر إعلاناً هنا.
          </p>

          <a href="/post" className="publish-button">
            ＋ أضف إعلانك
          </a>
        </div>

        <a href="/" className="back-link">
          ← العودة إلى جميع الأقسام
        </a>
      </section>

      <style jsx>{`
        .category-page {
          min-height: 100vh;
          background: #f7f8fa;
          color: #172033;
        }

        .category-header {
          background: white;
          border-bottom: 1px solid #e5e9ef;
        }

        .category-header-content {
          width: min(1180px, 92%);
          min-height: 75px;
          margin: auto;
          display: flex;
          align-items: center;
          justify-content: space-between;
        }

        .category-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 21px;
          font-weight: 800;
        }

        .category-logo span {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          color: white;
          background: #087f5b;
          border-radius: 12px;
        }

        .home-link {
          color: #087f5b;
          font-size: 14px;
          font-weight: 700;
        }

        .category-container {
          width: min(1180px, 92%);
          margin: 35px auto 70px;
        }

        .breadcrumb {
          display: flex;
          gap: 12px;
          align-items: center;
          color: #778196;
          font-size: 13px;
          margin-bottom: 30px;
        }

        .breadcrumb a {
          color: #087f5b;
        }

        .category-intro {
          display: flex;
          align-items: center;
          gap: 20px;
          padding: 28px;
          background: white;
          border: 1px solid #e5e9ef;
          border-radius: 16px;
        }

        .category-icon {
          width: 75px;
          height: 75px;
          display: grid;
          place-items: center;
          flex-shrink: 0;
          background: #eaf7f1;
          border-radius: 17px;
          font-size: 38px;
        }

        h1 {
          margin: 0 0 7px;
          font-size: 25px;
        }

        .category-intro p {
          margin: 0;
          color: #778196;
          font-size: 14px;
        }

        .category-toolbar {
          display: flex;
          justify-content: space-between;
          align-items: center;
          gap: 15px;
          margin: 35px 0 20px;
        }

        .category-toolbar h2 {
          margin: 0;
          font-size: 20px;
        }

        .category-toolbar span {
          color: #778196;
          font-size: 12px;
        }

        .empty-state {
          padding: 55px 20px;
          background: white;
          border: 1px solid #e5e9ef;
          border-radius: 16px;
          text-align: center;
        }

        .empty-state > div {
          font-size: 45px;
        }

        .empty-state h3 {
          margin: 15px 0 8px;
          font-size: 19px;
        }

        .empty-state p {
          max-width: 430px;
          margin: 0 auto 22px;
          color: #778196;
          font-size: 13px;
          line-height: 2;
        }

        .publish-button {
          display: inline-block;
          padding: 11px 22px;
          color: white;
          background: #087f5b;
          border-radius: 10px;
          font-size: 13px;
          font-weight: 700;
        }

        .back-link {
          display: inline-block;
          margin-top: 25px;
          color: #087f5b;
          font-size: 13px;
          font-weight: 700;
        }

        @media (max-width: 600px) {
          .category-intro {
            padding: 20px;
            gap: 13px;
          }

          .category-icon {
            width: 58px;
            height: 58px;
            font-size: 29px;
          }

          h1 {
            font-size: 20px;
          }

          .category-toolbar {
            align-items: flex-start;
            flex-direction: column;
          }
        }
      `}</style>
    </main>
  );
            }
