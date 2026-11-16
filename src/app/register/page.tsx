
"use client";

import { useState } from "react";

export default function RegisterPage() {
  const [name, setName] = useState("");
  const [phone, setPhone] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  function handleSubmit(event: React.FormEvent<HTMLFormElement>) {
    event.preventDefault();

    if (password !== confirmPassword) {
      alert("كلمتا المرور غير متطابقتين.");
      return;
    }

    if (password.length < 6) {
      alert("يجب أن تتكون كلمة المرور من 6 أحرف على الأقل.");
      return;
    }

    alert("سيتم تفعيل إنشاء الحساب بعد ربط نظام الحسابات.");
  }

  return (
    <main className="register-page">
      <header className="register-header">
        <a href="/" className="register-logo">
          <span>س</span>
          سوق السودان
        </a>
      </header>

      <section className="register-container">
        <div className="register-card">
          <div className="register-icon">🛍️</div>

          <h1>أنشئ حسابك</h1>
          <p className="register-description">
            انضم إلى سوق السودان وابدأ البيع والشراء بسهولة.
          </p>

          <form onSubmit={handleSubmit}>
            <label htmlFor="name">الاسم الكامل</label>
            <input
              id="name"
              type="text"
              placeholder="أدخل اسمك"
              value={name}
              onChange={(event) => setName(event.target.value)}
              required
            />

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
              placeholder="6 أحرف على الأقل"
              value={password}
              onChange={(event) => setPassword(event.target.value)}
              minLength={6}
              required
            />

            <label htmlFor="confirmPassword">تأكيد كلمة المرور</label>
            <input
              id="confirmPassword"
              type="password"
              placeholder="أعد كتابة كلمة المرور"
              value={confirmPassword}
              onChange={(event) =>
                setConfirmPassword(event.target.value)
              }
              minLength={6}
              required
            />

            <button type="submit" className="register-submit">
              إنشاء الحساب
            </button>
          </form>

          <p className="login-text">
            لديك حساب بالفعل؟
            <a href="/login"> سجل دخولك</a>
          </p>

          <a href="/" className="back-home">
            العودة إلى الرئيسية
          </a>
        </div>
      </section>

      <style jsx>{`
        .register-page {
          min-height: 100vh;
          background: #f7f8fa;
        }

        .register-header {
          background: white;
          padding: 18px 5%;
          border-bottom: 1px solid #e5e9ef;
        }

        .register-logo {
          display: flex;
          align-items: center;
          gap: 10px;
          color: #172033;
          font-size: 21px;
          font-weight: 800;
        }

        .register-logo span {
          display: grid;
          place-items: center;
          width: 40px;
          height: 40px;
          border-radius: 12px;
          color: white;
          background: #087f5b;
        }

        .register-container {
          min-height: calc(100vh - 78px);
          display: grid;
          place-items: center;
          padding: 35px 16px;
        }

        .register-card {
          width: 100%;
          max-width: 460px;
          padding: 35px;
          background: white;
          border: 1px solid #e5e9ef;
          border-radius: 18px;
          box-shadow: 0 12px 35px rgba(0,0,0,.04);
          text-align: center;
        }

        .register-icon {
          font-size: 42px;
          margin-bottom: 10px;
        }

        h1 {
          margin: 0 0 8px;
          font-size: 25px;
          color: #172033;
        }

        .register-description {
          margin: 0 0 25px;
          color: #778196;
          font-size: 13px;
          line-height: 1.9;
        }

        form {
          text-align: right;
        }

        label {
          display: block;
          margin: 15px 0 7px;
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

        .register-submit {
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

        .register-submit:hover {
          background: #066548;
        }

        .login-text {
          margin-top: 25px;
          color: #596477;
          font-size: 13px;
        }

        .login-text a,
        .back-home {
          color: #087f5b;
          font-weight: 800;
        }

        .back-home {
          display: inline-block;
          margin-top: 15px;
          font-size: 13px;
        }

        @media (max-width: 480px) {
          .register-card {
            padding: 25px 20px;
          }
        }
      `}</style>
    </main>
  );
}
