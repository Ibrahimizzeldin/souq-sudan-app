type SearchPageProps = {
  searchParams: Promise<{
    q?: string;
  }>;
};

export default async function SearchPage({
  searchParams,
}: SearchPageProps) {
  const params = await searchParams;
  const query = params.q?.trim() || "";

  return (
    <main
      style={{
        minHeight: "100vh",
        background: "#f7f8fa",
      }}
    >
      <header
        style={{
          background: "#fff",
          borderBottom: "1px solid #e5e9ef",
          padding: "18px 4%",
        }}
      >
        <a
          href="/"
          style={{
            fontSize: 22,
            fontWeight: 800,
            color: "#087f5b",
          }}
        >
          سوق السودان
        </a>
      </header>

      <section
        style={{
          width: "min(850px, 92%)",
          margin: "50px auto",
        }}
      >
        <h1 style={{ fontSize: 28, marginBottom: 10 }}>
          البحث في سوق السودان
        </h1>

        <p style={{ color: "#778196", marginBottom: 25 }}>
          ابحث عن المنتجات والخدمات والإعلانات المتاحة.
        </p>

        <form
          action="/search"
          style={{
            display: "flex",
            gap: 10,
            background: "#fff",
            padding: 8,
            border: "1px solid #e5e9ef",
            borderRadius: 12,
          }}
        >
          <input
            type="search"
            name="q"
            defaultValue={query}
            placeholder="ماذا تبحث عنه؟"
            style={{
              flex: 1,
              minWidth: 0,
              border: 0,
              outline: 0,
              padding: 12,
              background: "transparent",
            }}
          />

          <button
            type="submit"
            style={{
              border: 0,
              borderRadius: 9,
              padding: "10px 25px",
              color: "#fff",
              background: "#087f5b",
              fontWeight: 700,
            }}
          >
            بحث
          </button>
        </form>

        <div
          style={{
            marginTop: 35,
            padding: 30,
            background: "#fff",
            border: "1px solid #e5e9ef",
            borderRadius: 14,
            textAlign: "center",
          }}
        >
          {query ? (
            <>
              <div style={{ fontSize: 35 }}>🔎</div>
              <h2 style={{ fontSize: 19 }}>
                نتائج البحث عن: {query}
              </h2>
              <p style={{ color: "#778196", fontSize: 14 }}>
                نظام الإعلانات قيد التجهيز. ستظهر هنا الإعلانات
                المطابقة عند اكتمال ربط قاعدة البيانات.
              </p>
            </>
          ) : (
            <>
              <div style={{ fontSize: 35 }}>🛍️</div>
              <h2 style={{ fontSize: 19 }}>
                ماذا تريد أن تجد؟
              </h2>
              <p style={{ color: "#778196", fontSize: 14 }}>
                اكتب اسم المنتج أو الخدمة في مربع البحث أعلاه.
              </p>
            </>
          )}
        </div>

        <a
          href="/"
          style={{
            display: "inline-block",
            marginTop: 25,
            color: "#087f5b",
            fontWeight: 700,
          }}
        >
          ← العودة إلى الرئيسية
        </a>
      </section>
    </main>
  );
            }
