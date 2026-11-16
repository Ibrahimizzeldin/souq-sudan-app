
import Link from "next/link";
import styles from "./category.module.css";

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
    <main className={styles.page} dir="rtl">
      <header className={styles.header}>
        <div className={styles.headerContent}>
          <Link href="/" className={styles.logo}>
            <span className={styles.logoMark}>س</span>
            سوق السودان
          </Link>

          <Link href="/" className={styles.homeLink}>
            الرئيسية
          </Link>
        </div>
      </header>

      <section className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/">الرئيسية</Link>
          <span>←</span>
          <span>{categoryName}</span>
        </div>

        <div className={styles.intro}>
          <div className={styles.categoryIcon}>
            {category.icon}
          </div>

          <div>
            <h1>{categoryName}</h1>
            <p>{category.description}</p>
          </div>
        </div>

        <div className={styles.toolbar}>
          <h2>الإعلانات في هذا القسم</h2>
          <span>أحدث الإعلانات ستظهر هنا</span>
        </div>

        <div className={styles.emptyState}>
          <div className={styles.emptyIcon}>📭</div>
          <h3>لا توجد إعلانات حالياً</h3>
          <p>
            لم تتم إضافة إعلانات لهذا القسم بعد.
            كن أول من ينشر إعلاناً هنا.
          </p>

          <Link href="/post" className={styles.publishButton}>
            ＋ أضف إعلانك
          </Link>
        </div>

        <Link href="/" className={styles.backLink}>
          ← العودة إلى جميع الأقسام
        </Link>
      </section>
    </main>
  );
}
