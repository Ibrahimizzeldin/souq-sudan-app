
import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "سوق السودان | السوق الإلكتروني",
  description:
    "منصة سودانية للبيع والشراء والإعلانات المبوبة.",
  applicationName: "Souq Sudan",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ar" dir="rtl">
      <body>{children}</body>
    </html>
  );
}
