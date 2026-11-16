
"use client";

import { useState, type FormEvent } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { createClient } from "@/lib/supabase/client";

export default function RegisterPage() {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);
  const [message, setMessage] = useState("");
  const [error, setError] = useState("");

  async function handleRegister(event: FormEvent<HTMLFormElement>) {
    event.preventDefault();
    setLoading(true);
    setMessage("");
    setError("");

    try {
      const supabase = createClient();

      const { data, error } = await supabase.auth.signUp({
        email: email.trim(),
        password,
        options: {
          data: { full_name: name.trim() },
        },
      });

      if (error) throw error;

      if (data.session) {
        router.push("/");
        router.refresh();
      } else {
        setMessage(
          "تم إنشاء حسابك. افحص بريدك الإلكتروني واضغط رابط التأكيد لإكمال التسجيل."
        );
      }
    } catch (err) {
      setError(
        err instanceof Error ? err.message : "تعذر إنشاء الحساب."
      );
    } finally {
      setLoading(false);
    }
  }

  return (
    <main className="min-h-screen flex items-center justify-center p-5" dir="rtl">
      <section className="w-full max-w-md rounded-2xl bg-white p-7 shadow-lg">
        <h1 className="text-2xl font-bold mb-2">إنشاء حساب جديد</h1>
        <p className="text-gray-500 mb-6">
          انضم إلى سوق السودان وابدأ البيع والشراء.
        </p>

        <form onSubmit={handleRegister} className="space-y-4">
          <input
            required
            type="text"
            placeholder="الاسم الكامل"
            value={name}
            onChange={(e) => setName(e.target.value)}
            className="w-full rounded-lg border p-3"
          />

          <input
            required
            type="email"
            placeholder="البريد الإلكتروني"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            className="w-full rounded-lg border p-3"
          />

          <input
            required
            minLength={6}
            type="password"
            placeholder="كلمة المرور (6 أحرف على الأقل)"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            className="w-full rounded-lg border p-3"
          />

          {error && <p className="text-red-600 text-sm">{error}</p>}
          {message && <p className="text-green-700 text-sm">{message}</p>}

          <button
            disabled={loading}
            type="submit"
            className="w-full rounded-lg bg-blue-700 p-3 font-bold text-white disabled:opacity-50"
          >
            {loading ? "جارٍ إنشاء الحساب..." : "إنشاء الحساب"}
          </button>
        </form>

        <p className="mt-5 text-center text-sm text-gray-600">
          لديك حساب بالفعل؟{" "}
          <Link href="/login" className="font-bold text-blue-700">
            تسجيل الدخول
          </Link>
        </p>
      </section>
    </main>
  );
}
