// ============================================================
// layout.tsx — Root layout with SEO metadata and Google Analytics
// ============================================================
// This is the Next.js App Router root layout. It wraps every page
// with global fonts, metadata, analytics, and the sidebar.
// ============================================================

import type { Metadata } from "next";
import "./globals.css";
import { seoMeta } from "@/data/content";

// ─── SEO Metadata ─────────────────────────────────────────────
// All meta values come from content.ts — update there to change SEO globally.
export const metadata: Metadata = {
  title: seoMeta.title,
  description: seoMeta.description,
  authors: [{ name: "Kavinkumar R" }],
  robots: "index, follow",
  openGraph: {
    type: "website",
    url: seoMeta.url,
    title: seoMeta.title,
    description: seoMeta.description,
    images: [{ url: seoMeta.image }],
  },
  twitter: {
    card: "summary_large_image",
    title: seoMeta.title,
    description: seoMeta.description,
    images: [seoMeta.image],
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        {/* ── Favicon ── */}
        <link rel="apple-touch-icon" sizes="180x180" href="/img/favicon/apple-touch-icon.png" />
        <link rel="icon" type="image/png" sizes="32x32" href="/img/favicon/favicon-32x32.png" />
        <link rel="icon" type="image/png" sizes="16x16" href="/img/favicon/favicon-16x16.png" />
        <link rel="manifest" href="/img/favicon/site.webmanifest" />

        {/* ── Google Analytics ── */}
        {/* Replace the GA ID in content.ts to update across the entire app */}
        <script async src={`https://www.googletagmanager.com/gtag/js?id=${seoMeta.googleAnalyticsId}`} />
        <script
          dangerouslySetInnerHTML={{
            __html: `
              window.dataLayer = window.dataLayer || [];
              function gtag(){dataLayer.push(arguments);}
              gtag('js', new Date());
              gtag('config', '${seoMeta.googleAnalyticsId}');
            `,
          }}
        />
      </head>
      <body>{children}</body>
    </html>
  );
}
