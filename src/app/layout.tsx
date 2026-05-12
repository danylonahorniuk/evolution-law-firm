import type { Metadata } from "next";
import { Inter, Playfair_Display } from "next/font/google";
import "./globals.css";

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin", "cyrillic"],
});

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin", "cyrillic"],
});

export const metadata: Metadata = {
  title: "Meridian Law",
  description:
    "Юридична фірма Meridian Law — досвідчені адвокати у сферах корпоративного права, судових спорів та податкового консультування.",
  icons: {
    icon: "/logo-meridian.webp",
    apple: "/logo-meridian.webp",
  },
  openGraph: {
    title: "Meridian Law",
    description: "Ваш захист — наша місія. Стратегічний підхід, чіткі результати.",
    siteName: "Meridian Law",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "https://meridian-law-firm.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "Meridian Law",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Meridian Law",
    description: "Ваш захист — наша місія. Стратегічний підхід, чіткі результати.",
  },
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="uk" className={`${inter.variable} ${playfair.variable}`}>
      <body className="min-h-screen flex flex-col">{children}</body>
    </html>
  );
}
