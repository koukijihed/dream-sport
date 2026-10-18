import type { Metadata } from "next";
import { Inter, Cairo, Noto_Sans_Arabic } from "next/font/google";
import "./globals.css";
import { Toaster } from "react-hot-toast";

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

const cairo = Cairo({
  subsets: ["arabic"],
  variable: "--font-cairo",
  display: "swap",
});

const notoSansArabic = Noto_Sans_Arabic({
  subsets: ["arabic"],
  variable: "--font-noto-arabic",
  display: "swap",
});

export const metadata: Metadata = {
  title: "Dream Sport Manouba | Salle de sport à Manouba Tunis",
  description:
    "Dream Sport Manouba, salle de sport à Manouba Tunis. Fitness, musculation, boxe, taekwondo, karaté, coaching et activités sportives.",
  keywords:
    "salle de sport, Manouba, Tunis, fitness, musculation, boxe, taekwondo, karaté, kickboxing, coaching, sport",
  authors: [{ name: "Dream Sport Manouba" }],
  creator: "Dream Sport Manouba",
  publisher: "Dream Sport Manouba",
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  metadataBase: new URL("http://localhost:3000"),
  openGraph: {
    type: "website",
    locale: "fr_TN",
    alternateLocale: "ar_TN",
    url: "https://dreamsport.tn",
    siteName: "Dream Sport Manouba",
    title: "Dream Sport Manouba | Salle de sport à Manouba Tunis",
    description:
      "Dream Sport Manouba, salle de sport à Manouba Tunis. Fitness, musculation, boxe, taekwondo, karaté, coaching et activités sportives.",
    images: [
      {
        url: "/images/og-image.jpg",
        width: 1200,
        height: 630,
        alt: "Dream Sport Manouba",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Dream Sport Manouba | Salle de sport à Manouba Tunis",
    description:
      "Dream Sport Manouba, salle de sport à Manouba Tunis. Fitness, musculation, boxe, taekwondo, karaté, coaching et activités sportives.",
    images: ["/images/og-image.jpg"],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  icons: {
    icon: "/favicon.ico",
    shortcut: "/favicon-16x16.png",
    apple: "/apple-touch-icon.png",
  },
  manifest: "/site.webmanifest",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html suppressHydrationWarning>
      <body
        className={`${inter.variable} ${cairo.variable} ${notoSansArabic.variable} font-sans antialiased`}
      >
        {children}
        <Toaster position="top-right" />
      </body>
    </html>
  );
}
