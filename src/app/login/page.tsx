
"use client";

import { useState } from "react";

export default function LoginPage() {
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();
    alert("سيتم تفعيل تسجيل الدخول بعد ربط نظام الحسابات.");
  }

  return (
    <main className="login-page">
      <header className="login-header">
        <a href="/" className="login-logo">
          <span>س</span>
          سوق السودان
        </a>
      </header>

      <section className="login-container">
        <div className="login-card">
          <div className="login-icon">👋</div>

          <h1>مرحباً بعودتك</h1>
          <p className="login-description">
            سجل دخولك لمتابعة إعلاناتك والتواصل مع البائعين.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="phone">رقم الهاتف</label>
            <input
              id="phone"
              type="tel"
              placeholder="مثال: 0912345678"
              value={phone}
              onChange={(event) => setPhone(event.target.value)}
              required
            />

            <label htmlFor="password">كلمة المرور</label>
            <input
              id="password"
              type="password"
              placeholder="أدخل كلمة المرور"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              required
            />

            <button type="submit" className="login-submit">
              تسجيل الدخول
            </button>
          </form>

          <div className="login-divider">
            <span>أو</span>
          </div>

          <p className="signup-text">
            ليس لديك حساب؟
            <a href="/register"> أنشئ حساباً جديداً</a>
          </p>

          <a href="/" className="back-home">
            العودة إلى الصفحة الرئيسية
          </a>
        </div>
      </section>

      <style jsx>{`
        .login-page {
          min-height: 100vh;
          background: #f7f8fa;
        }

        .login-header {
          background: white;
          padding: 18px 5%;
          border-bottom: 1px solid #e5e9ef;
        }

        .login-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #172033;
          font-size: 21px;
          font-weight: 800;
        }

        .login-logo span {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          color: white;
          background: #087f5b;
        }

        .login-container {
          min-height: calc(100vh - 78px);
          display: grid;
          place-items: center;
          padding: 35px 16px;
        }

        .login-card {
          width: 100%;
          max-width: 440px;
          padding: 35px;
          background: white;
          border: 1px solid #e5e9ef;
          border-radius: 18px;
          box-shadow: 0 12px 35px rgba(0,0,0,.04);
          text-align: center;
        }

        .login-icon {
          font-size: 42px;
          margin-bottom: 10px;
        }

        h1 {
          margin: 0 0 8px;
          font-size: 25px;
          color: #172033;
        }

        .login-description {
          margin: 0 0 28px;
          color: #778196;
          font-size: 13px;
          line-height: 1.9;
        }

        form {
          text-align: right;
        }

        label {
          display: block;
          margin: 17px 0 7px;
          color: #344054;
          font-size: 13px;
          font-weight: 700;
        }

        input {
          width: 100%;
          padding: 13px;
          border: 1px solid #e0e5eb;
          border-radius: 10px;
          outline: none;
          background: #fff;
          color: #172033;
        }

        input:focus {
          border-color: #087f5b;
          box-shadow: 0 0 0 3px rgba(8,127,91,.08);
        }

        .login-submit {
          width: 100%;
          margin-top: 25px;
          padding: 13px;
          border: 0;
          border-radius: 10px;
          color: white;
          background: #087f5b;
          font-weight: 800;
          cursor: pointer;
        }

        .login-submit:hover {
          background: #066548;
        }

        .login-divider {
          margin: 25px 0;
          border-bottom: 1px solid #e5e9ef;
          position: relative;
        }

        .login-divider span {
          position: relative;
          top: 10px;
          padding: 0 12px;
          background: white;
          color: #778196;
          font-size: 12px;
        }

        .signup-text {
          margin-top: 25px;
          font-size: 13px;
          color: #596477;
        }

        .signup-text a,
        .back-home {
          color: #087f5b;
          font-weight: 800;
        }

        .back-home {
          display: inline-block;
          margin-top: 22px;
          font-size: 13px;
        }

        @media (max-width: 480px) {
          .login-card {
            padding: 25px 20px;
          }
        }
      `}</style>
    </main>
  );
}
