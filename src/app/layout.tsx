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
  title: "ELF — Evolution Law Firm",
  description:
    "Юридична фірма Evolution Law Firm — досвідчені адвокати у сферах корпоративного права, судових спорів та податкового консультування.",
  icons: {
    icon: "/logo-circle.webp",
    apple: "/logo-circle.webp",
  },
  openGraph: {
    title: "ELF — Evolution Law Firm",
    description: "Реалізуй своє право впевнено. Стратегічний підхід, чіткі результати.",
    siteName: "Evolution Law Firm",
    locale: "uk_UA",
    type: "website",
    images: [
      {
        url: "https://evolution-law-firm-eight.vercel.app/og-image.png",
        width: 1200,
        height: 630,
        alt: "ELF — Evolution Law Firm",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "ELF — Evolution Law Firm",
    description: "Реалізуй своє право впевнено. Стратегічний підхід, чіткі результати.",
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
