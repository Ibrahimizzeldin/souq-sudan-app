import Link from "next/link";
import styles from "./ad.module.css";

type AdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdPage({ params }: AdPageProps) {
  const { id } = await params;

  return (
    <main className={styles.page} dir="rtl">
      <header className={styles.header}>
        <Link href="/" className={styles.logo}>
          <span className={styles.logoMark}>س</span>
          سوق السودان
        </Link>

        <Link href="/" className={styles.link}>
          الرئيسية
        </Link>
      </header>

      <section className={styles.container}>
        <div className={styles.breadcrumb}>
          <Link href="/">الرئيسية</Link>
          <span>←</span>
          <span>تفاصيل الإعلان</span>
        </div>

        <div className={styles.layout}>
          <div className={styles.main}>
            <div className={styles.image}>
              <span>📷</span>
              <p>صور المنتج ستظهر هنا</p>
            </div>

            <div className={styles.content}>
              <span className={styles.status}>إعلان رقم {id}</span>
              <h1>تفاصيل الإعلان</h1>

              <p className={styles.description}>
                سيتم عرض عنوان الإعلان ووصف المنتج أو الخدمة هنا بعد ربط التطبيق بقاعدة البيانات.
              </p>

              <div className={styles.details}>
                <div className={styles.detail}>
                  <span>القسم</span>
                  <strong>غير محدد</strong>
                </div>
                <div className={styles.detail}>
                  <span>الموقع</span>
                  <strong>غير محدد</strong>
                </div>
                <div className={styles.detail}>
                  <span>تاريخ النشر</span>
                  <strong>سيظهر لاحقاً</strong>
                </div>
                <div className={styles.detail}>
                  <span>رقم الإعلان</span>
                  <strong>{id}</strong>
                </div>
              </div>
            </div>
          </div>

          <aside className={styles.seller}>
            <span className={styles.sellerLabel}>السعر</span>
            <h2>سيظهر السعر هنا</h2>
            <div className={styles.divider} />
            <h3>معلومات البائع</h3>
            <div className={styles.avatar}>👤</div>
            <strong className={styles.sellerName}>صاحب الإعلان</strong>
            <p className={styles.sellerText}>معلومات البائع ستظهر هنا.</p>

            <button type="button" className={styles.contact} disabled>
              التواصل مع البائع
            </button>

            <p className={styles.sellerText}>
              سيتم تفعيل التواصل بعد اكتمال نظام الحسابات والإعلانات.
            </p>
          </aside>
        </div>

        <Link href="/" className={styles.back}>
          ← العودة إلى السوق
        </Link>
      </section>
    </main>
  );
            }
