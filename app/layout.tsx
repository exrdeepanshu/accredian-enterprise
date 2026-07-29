import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Accredian Enterprise | Next-Gen Workforce Learning Platform",
  description:
    "Transform your workforce with Accredian's enterprise-grade learning platform. Precision upskilling in AI, Data Science, Product Management & Leadership for global organizations.",
  keywords: [
    "enterprise learning",
    "corporate training",
    "workforce upskilling",
    "AI training",
    "data science courses",
    "leadership development",
  ],
  openGraph: {
    title: "Accredian Enterprise | Next-Gen Workforce Learning Platform",
    description:
      "Empower your teams with cutting-edge skills. Accredian delivers precision learning for enterprise transformation.",
    type: "website",
    url: "https://enterprise.accredian.com",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en">
      <body className="antialiased">{children}</body>
    </html>
  );
}
