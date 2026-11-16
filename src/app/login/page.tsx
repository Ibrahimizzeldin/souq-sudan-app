
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function LoginPage() {
  const router = useRouter();
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [error, setError] = useState("");

  async function handleLogin(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setError("");

    try {
      const supabase = createClient();

      const { error } = await supabase.auth.signInWithPassword({
        email: email.trim(),
        password,
      });

      if (error) throw error;

      router.push("/");
      router.refresh();
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "تعذر تسجيل الدخول."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main
      dir="rtl"
      style={{
        minHeight: "100vh",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        padding: 20,
        background: "#f5f7fb",
      }}
    >
      <section
        style={{
          width: "100%",
          maxWidth: 420,
          padding: 28,
          background: "#fff",
          borderRadius: 18,
          boxShadow: "0 8px 30px #00000010",
        }}
      >
        <h1 style={{ fontSize: 26, fontWeight: 800 }}>
          تسجيل الدخول
        </h1>

        <p style={{ color: "#64748b", margin: "10px 0 25px" }}>
          مرحباً بك مجدداً في سوق السودان.
        </p>

        <form
          onSubmit={handleLogin}
          style={{ display: "grid", gap: 16 }}
        >
          <input
            required
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            style={inputStyle}
          />

          <input
            required
            type="password"
            placeholder="كلمة المرور"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            style={inputStyle}
          />

          {error && (
            <p style={{ color: "#dc2626", fontSize: 14 }}>
              {error}
            </p>
          )}

          <button
            disabled={loading}
            type="submit"
            style={{
              ...inputStyle,
              border: 0,
              background: "#155eef",
              color: "#fff",
              fontWeight: 700,
              cursor: "pointer",
              opacity: loading ? 0.6 : 1,
            }}
          >
            {loading ? "جارٍ تسجيل الدخول..." : "دخول"}
          </button>
        </form>

        <p style={{ marginTop: 22, textAlign: "center" }}>
          ليس لديك حساب؟{" "}
          <Link
            href="/register"
            style={{ color: "#155eef", fontWeight: 700 }}
          >
            إنشاء حساب
          </Link>
        </p>
      </section>
    </main>
  );
}

const inputStyle: React.CSSProperties = {
  width: "100%",
  boxSizing: "border-box",
  padding: 14,
  border: "1px solid #dbe2ea",
  borderRadius: 10,
  fontSize: 15,
  background: "#fff",
};
          
