import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Hithaus Banya",
  description: "Карточки бань с полной информацией и SEO-оптимизацией",
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="ru">
      <body className={`antialiased bg-gray-50 text-gray-900`}>{children}</body>
    </html>
  );
}
