
"use client";

import { useState } from "react";

export default function PostPage() {
  const [title, setTitle] = useState("");
  const [category, setCategory] = useState("");
  const [price, setPrice] = useState("");
  const [city, setCity] = useState("");
  const [phone, setPhone] = useState("");
  const [description, setDescription] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    alert("واجهة نشر الإعلان جاهزة. سيتم تفعيل النشر بعد ربط قاعدة البيانات.");
  }

  return (
    <main className="post-page">
      <header className="post-header">
        <a href="/" className="post-logo">
          <span>س</span>
          سوق السودان
        </a>
        <a href="/" className="home-link">الرئيسية</a>
      </header>

      <section className="post-container">
        <div className="post-heading">
          <span className="post-heading-icon">📢</span>
          <h1>أضف إعلانك</h1>
          <p>اعرض منتجك أو خدمتك أمام المشترين في جميع أنحاء السودان.</p>
        </div>

        <form className="post-form" onSubmit={handleSubmit}>
          <div className="form-section">
            <h2>معلومات الإعلان</h2>

            <label htmlFor="title">عنوان الإعلان *</label>
            <input
              id="title"
              value={title}
              onChange={(e) => setTitle(e.target.value)}
              placeholder="مثال: سيارة تويوتا للبيع"
              required
              maxLength={100}
            />

            <label htmlFor="category">القسم *</label>
            <select
              id="category"
              value={category}
              onChange={(e) => setCategory(e.target.value)}
              required
            >
              <option value="">اختر القسم</option>
              <option>سيارات ومركبات</option>
              <option>عقارات</option>
              <option>هواتف وإلكترونيات</option>
              <option>حيوانات وطيور</option>
              <option>أثاث ومنزل</option>
              <option>وظائف وخدمات</option>
              <option>ملابس وأزياء</option>
              <option>أخرى</option>
            </select>

            <label htmlFor="price">السعر بالجنيه السوداني *</label>
            <input
              id="price"
              type="number"
              min="0"
              value={price}
              onChange={(e) => setPrice(e.target.value)}
              placeholder="مثال: 250000"
              required
            />

            <label htmlFor="city">المدينة أو الولاية *</label>
            <input
              id="city"
              value={city}
              onChange={(e) => setCity(e.target.value)}
              placeholder="مثال: الخرطوم"
              required
            />

            <label htmlFor="description">وصف الإعلان *</label>
            <textarea
              id="description"
              value={description}
              onChange={(e) => setDescription(e.target.value)}
              placeholder="اكتب تفاصيل المنتج أو الخدمة وحالتها..."
              rows={6}
              maxLength={2000}
              required
            />
            <small className="field-hint">
              اكتب وصفاً واضحاً يساعد المشتري على معرفة التفاصيل.
            </small>
          </div>

          <div className="form-section">
            <h2>معلومات التواصل</h2>

            <label htmlFor="phone">رقم الهاتف *</label>
            <input
              id="phone"
              type="tel"
              value={phone}
              onChange={(e) => setPhone(e.target.value)}
              placeholder="مثال: 0912345678"
              required
            />
          </div>

          <div className="post-notice">
            <span>ℹ️</span>
            <p>
              يمكنك إضافة صور للإعلان في المرحلة التالية.
              لن يتم نشر الإعلان فعلياً حتى نكمل ربط قاعدة البيانات.
            </p>
          </div>

          <button type="submit" className="publish-submit">
            نشر الإعلان
          </button>

          <a href="/" className="cancel-link">إلغاء والعودة للرئيسية</a>
        </form>
      </section>

      <style jsx>{`
        .post-page {
          min-height: 100vh;
          background: #f7f8fa;
          color: #172033;
        }

        .post-header {
          min-height: 75px;
          padding: 15px 4%;
          display: flex;
          align-items: center;
          justify-content: space-between;
          background: white;
          border-bottom: 1px solid #e5e9ef;
        }

        .post-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          font-size: 21px;
          font-weight: 800;
        }

        .post-logo span {
          width: 40px;
          height: 40px;
          display: grid;
          place-items: center;
          border-radius: 12px;
          color: white;
          background: #087f5b;
        }

        .home-link {
          color: #087f5b;
          font-size: 14px;
          font-weight: 700;
        }

        .post-container {
          width: min(720px, 92%);
          margin: 40px auto 70px;
        }

        .post-heading {
          text-align: center;
          margin-bottom: 30px;
        }

        .post-heading-icon {
          font-size: 42px;
        }

        .post-heading h1 {
          margin: 10px 0 5px;
          font-size: 27px;
        }

        .post-heading p {
          margin: 0;
          color: #778196;
          font-size: 13px;
          line-height: 1.9;
        }

        .post-form {
          padding: 30px;
          background: white;
          border: 1px solid #e5e9ef;
          border-radius: 17px;
          box-shadow: 0 10px 30px rgba(0,0,0,.03);
        }

        .form-section h2 {
          margin: 0 0 22px;
          padding-bottom: 13px;
          border-bottom: 1px solid #edf0f3;
          font-size: 18px;
        }

        label {
          display: block;
          margin: 18px 0 8px;
          color: #344054;
          font-size: 13px;
          font-weight: 700;
        }

        input,
        select,
        textarea {
          width: 100%;
          padding: 13px;
          border: 1px solid #dfe5eb;
          border-radius: 10px;
          outline: none;
          background: white;
          color: #172033;
          font-size: 14px;
        }

        input:focus,
        select:focus,
        textarea:focus {
          border-color: #087f5b;
          box-shadow: 0 0 0 3px rgba(8,127,91,.08);
        }

        textarea {
          resize: vertical;
          line-height: 1.9;
        }

        .field-hint {
          display: block;
          margin-top: 7px;
          color: #8993a4;
          font-size: 11px;
        }

        .form-section + .form-section {
          margin-top: 32px;
        }

        .post-notice {
          display: flex;
          gap: 12px;
          align-items: flex-start;
          margin-top: 28px;
          padding: 15px;
          border-radius: 10px;
          background: #eff7f3;
          color: #356b55;
        }

        .post-notice p {
          margin: 0;
          font-size: 12px;
          line-height: 1.9;
        }

        .publish-submit {
          width: 100%;
          margin-top: 22px;
          padding: 14px;
          border: 0;
          border-radius: 10px;
          color: white;
          background: #087f5b;
          font-size: 15px;
          font-weight: 800;
          cursor: pointer;
        }

        .publish-submit:hover {
          background: #066548;
        }

        .cancel-link {
          display: block;
          margin-top: 18px;
          text-align: center;
          color: #778196;
          font-size: 13px;
        }

        @media (max-width: 550px) {
          .post-container {
            margin-top: 25px;
          }

          .post-form {
            padding: 20px 16px;
          }

          .post-heading h1 {
            font-size: 23px;
          }
        }
      `}</style>
    </main>
  );
              }
