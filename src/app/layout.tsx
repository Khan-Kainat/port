import type { Metadata } from "next";
import "./globals.css";

export const metadata: Metadata = {
  title: "Khan Kainat — AI & Data Science Student Portfolio",
  description: "Khan Kainat is a first-year AI & Data Science student at Nexcore Institute of Technology in Mumbai, exploring programming, UI/UX design, and creative technology.",
  authors: [{ name: "Khan Kainat" }],
  icons: { icon: "/favicon.svg" },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return <html lang="en"><head>
    <link rel="preconnect" href="https://fonts.googleapis.com" />
    <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
    {/* eslint-disable-next-line @next/next/no-page-custom-font -- Loaded once in the shared App Router layout. */}
    <link href="https://fonts.googleapis.com/css2?family=Inter:wght@300;400;500;600;700;800&display=swap" rel="stylesheet" />
  </head><body><div className="paper-grain" aria-hidden="true" />{children}</body></html>;
}
