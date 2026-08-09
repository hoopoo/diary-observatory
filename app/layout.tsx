import type { Metadata } from "next";
import { Instrument_Serif, Noto_Sans_JP, Noto_Serif_JP } from "next/font/google";
import { SiteFooter } from "@/components/SiteFooter";
import { SiteHeader } from "@/components/SiteHeader";
import {
  SITE_DESCRIPTION,
  SITE_DESCRIPTION_JA,
  SITE_NAME,
  SITE_SUBTITLE,
  SITE_URL,
} from "@/lib/site";
import "./globals.css";

const instrument = Instrument_Serif({
  variable: "--font-instrument",
  subsets: ["latin"],
  weight: "400",
  display: "swap",
});

const notoSans = Noto_Sans_JP({
  variable: "--font-noto-sans",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

const notoSerif = Noto_Serif_JP({
  variable: "--font-noto-serif",
  subsets: ["latin"],
  weight: ["400", "500"],
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(SITE_URL),
  title: {
    default: `${SITE_NAME} — ${SITE_SUBTITLE}`,
    template: `%s | ${SITE_NAME}`,
  },
  description: `${SITE_DESCRIPTION} ${SITE_DESCRIPTION_JA}`,
  openGraph: {
    title: `${SITE_NAME} — ${SITE_SUBTITLE}`,
    description: SITE_DESCRIPTION,
    locale: "ja_JP",
    type: "website",
    siteName: SITE_NAME,
    url: SITE_URL,
  },
  twitter: {
    card: "summary_large_image",
    title: `${SITE_NAME}`,
    description: SITE_DESCRIPTION,
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
    <html
      lang="ja"
      className={`${instrument.variable} ${notoSans.variable} ${notoSerif.variable} h-full antialiased`}
    >
      <body className="flex min-h-full flex-col font-sans text-text">
        <a
          href="#main-content"
          className="focus-ring sr-only focus:not-sr-only focus:absolute focus:left-4 focus:top-4 focus:z-50 focus:bg-bg-raised focus:px-3 focus:py-2 focus:text-sm focus:text-text"
        >
          Skip to content
        </a>
        <SiteHeader />
        <main id="main-content" className="flex-1" tabIndex={-1}>
          {children}
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
