import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import "./globals.css";

import ClientLayout from "./ClientLayout";
import { Analytics } from "@vercel/analytics/next";

const fallbackStorage = {
  getItem: () => null,
  setItem: () => undefined,
  removeItem: () => undefined,
  clear: () => undefined,
};

if (typeof globalThis !== "undefined") {
  const storage = (globalThis as { localStorage?: unknown }).localStorage as
    | { getItem?: unknown }
    | undefined;
  if (storage && typeof storage.getItem !== "function") {
    (globalThis as { localStorage?: unknown }).localStorage = fallbackStorage;
  }
}

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata: Metadata = {
  title: {
    default: "Ritik Jaiswal - Frontend Engineer",
    template: "%s | Ritik Jaiswal",
  },
  description:
    "Frontend Engineer specializing in UI/UX and DeFi. Building beautiful and functional user experiences with Next.js, React, and TypeScript.",
  metadataBase: new URL("https://ritikj22.me"),
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://ritikj22.me",
    title: "Ritik Jaiswal - Frontend Engineer",
    description:
      "Frontend Engineer specializing in UI/UX and DeFi. Building beautiful and functional user experiences.",
    siteName: "Ritik Jaiswal",
  },
  twitter: {
    card: "summary_large_image",
    title: "Ritik Jaiswal - Frontend Engineer",
    description:
      "Frontend Engineer specializing in UI/UX and DeFi.",
  },
  robots: {
    index: true,
    follow: true,
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} font-sans antialiased`}
      >
        <ClientLayout>{children}</ClientLayout>
        <Analytics />
      </body>
    </html>
  );
}
