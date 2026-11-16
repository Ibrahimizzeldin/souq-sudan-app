
type AdPageProps = {
  params: Promise<{
    id: string;
  }>;
};

export default async function AdPage({ params }: AdPageProps) {
  const { id } = await params;

  return (
    <main className="ad-page">
      <header className="ad-header">
        <a href="/" className="ad-logo">
          <span>س</span>
          سوق السودان
        </a>
        <a href="/" className="home-link">الرئيسية</a>
      </header>

      <section className="ad-container">
        <div className="breadcrumb">
          <a href="/">الرئيسية</a>
          <span>←</span>
          <span>تفاصيل الإعلان</span>
        </div>

        <div className="ad-layout">
          <div className="ad-main">
            <div className="ad-image">
              <span>📷</span>
              <p>صور المنتج ستظهر هنا</p>
            </div>

            <div className="ad-content">
              <span className="ad-status">إعلان رقم {id}</span>

              <h1>تفاصيل الإعلان</h1>

              <p className="ad-description">
                سيتم عرض عنوان الإعلان ووصف المنتج أو الخدمة
                هنا بعد ربط التطبيق بقاعدة البيانات.
              </p>

              <div className="ad-details">
                <div>
                  <span>القسم</span>
                  <strong>غير محدد</strong>
                </div>

                <div>
                  <span>الموقع</span>
                  <strong>غير محدد</strong>
                </div>

                <div>
                  <span>تاريخ النشر</span>
                  <strong>سيظهر لاحقاً</strong>
                </div>

                <div>
                  <span>رقم الإعلان</span>
                  <strong>{id}</strong>
                </div>
              </div>
            </div>
          </div>

          <aside className="seller-card">
            <span className="seller-label">السعر</span>
            <h2>سيظهر السعر هنا</h2>

            <div className="seller-divider" />

            <h3>معلومات البائع</h3>

            <div className="seller-avatar">👤</div>
            <strong>صاحب الإعلان</strong>
            <p>معلومات البائع ستظهر هنا.</p>

            <button type="button" className="contact-button" disabled>
              التواصل مع البائع
            </button>

            <p className="contact-note">
              سيتم تفعيل التواصل بعد اكتمال نظام الحسابات والإعلانات.
            </p>
          </aside>
        </div>

        <a href="/" className="back-link">
          ← العودة إلى السوق
        </a>
      </section>

      <style jsx>{`
        .ad-page {
          min-height: 100vh;
          background: #f7f8fa;
          color: #172033;
        }

        .ad-header {
          min-height: 75px;
          padding: 15px 4%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
          border-bottom: 1px solid #e5e9ef;
        }

        .ad-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 21px;
          font-weight: 800;
        }

        .ad-logo span {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          color: white;
          background: #087f5b;
          border-radius: 12px;
        }

        .home-link,
        .back-link {
          color: #087f5b;
          font-weight: 700;
          font-size: 13px;
        }

        .ad-container {
          width: min(1180px, 92%);
          margin: 35px auto 70px;
        }

        .breadcrumb {
          display: flex;
          gap: 12px;
          color: #778196;
          font-size: 13px;
          margin-bottom: 25px;
        }

        .breadcrumb a {
          color: #087f5b;
        }

        .ad-layout {
          display: grid;
          grid-template-columns: minmax(0, 1fr) 330px;
          gap: 22px;
          align-items: start;
        }

        .ad-main,
        .seller-card {
          background: white;
          border: 1px solid #e5e9ef;
          border-radius: 16px;
          overflow: hidden;
        }

        .ad-image {
          min-height: 340px;
          display: flex;
          flex-direction: column;
          align-items: center;
          justify-content: center;
          background: #edf3f0;
          color: #778196;
        }

        .ad-image span {
          font-size: 65px;
        }

        .ad-image p {
          font-size: 13px;
        }

        .ad-content {
          padding: 25px;
        }

        .ad-status {
          display: inline-block;
          padding: 5px 12px;
          border-radius: 20px;
          background: #eaf7f1;
          color: #087f5b;
          font-size: 11px;
          font-weight: 700;
        }

        .ad-content h1 {
          margin: 15px 0 10px;
          font-size: 25px;
        }

        .ad-description {
          color: #778196;
          font-size: 14px;
          line-height: 2;
        }

        .ad-details {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 15px;
          margin-top: 25px;
          padding-top: 20px;
          border-top: 1px solid #edf0f3;
        }

        .ad-details div {
          display: flex;
          flex-direction: column;
          gap: 6px;
        }

        .ad-details span,
        .seller-label {
          color: #778196;
          font-size: 12px;
        }

        .ad-details strong {
          font-size: 13px;
        }

        .seller-card {
          padding: 25px;
          text-align: center;
        }

        .seller-label {
          display: block;
          text-align: right;
        }

        .seller-card h2 {
          margin: 8px 0 20px;
          color: #087f5b;
          font-size: 21px;
        }

        .seller-divider {
          border-top: 1px solid #edf0f3;
          margin-bottom: 20px;
        }

        .seller-card h3 {
          font-size: 16px;
        }

        .seller-avatar {
          width: 65px;
          height: 65px;
          display: grid;
          place-items: center;
          margin: 15px auto 10px;
          border-radius: 50%;
          background: #eaf7f1;
          font-size: 30px;
        }

        .seller-card > strong {
          font-size: 14px;
        }

        .seller-card > p {
          color: #778196;
          font-size: 12px;
          line-height: 1.8;
        }

        .contact-button {
          width: 100%;
          padding: 13px;
          margin-top: 12px;
          border: 0;
          border-radius: 10px;
          background: #087f5b;
          color: white;
          font-weight: 700;
          cursor: not-allowed;
          opacity: .55;
        }

        .contact-note {
          margin-top: 12px;
        }

        .back-link {
          display: inline-block;
          margin-top: 25px;
        }

        @media (max-width: 800px) {
          .ad-layout {
            grid-template-columns: 1fr;
          }

          .ad-image {
            min-height: 260px;
          }
        }

        @media (max-width: 480px) {
          .ad-content {
            padding: 18px;
          }

          .ad-content h1 {
            font-size: 21px;
          }

          .seller-card {
            padding: 20px;
          }
        }
      `}</style>
    </main>
  );
}
