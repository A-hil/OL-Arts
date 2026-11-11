import type { Metadata } from "next";
import { Geist, Geist_Mono } from "next/font/google";
import { Providers } from "../components/Providers";
import "./globals.css";

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
    default: "OL-art | Творческая мануфактура, авторская одежда и предметы искусства",
    template: "%s | OL-art — Арт-ателье и блог",
  },
  description:
    "Творческая мастерская OL-art: производство лимитированной дизайнерской одежды с ручной росписью, авторские предметы интерьера, живопись и образовательный блог об искусстве.",
  keywords: [
    "OL-art",
    "творческая мануфактура",
    "авторская одежда",
    "ручная роспись по ткани",
    "предметы искусства",
    "дизайнерский декор",
    "арт-блог",
    "мастер-классы по живописи",
  ],
  authors: [{ name: "Команда OL-art" }],
  creator: "OL-art Studio",
  openGraph: {
    type: "website",
    locale: "ru_RU",
    siteName: "OL-art",
    title: "OL-art — Искусство, которое можно носить и впустить в свой дом",
    description:
      "Капсульные коллекции одежды, уникальная керамика, живопись и статьи о современном ремесле от творческой мануфактуры OL-art.",
    images: [
    {
      url: "https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQjmuKHZGERsdX4SX3GlFj66OA8bImWlydX6AMVSz4q7w&s=10",
      width: 1200,
      height: 630,
      alt: "Творческая мануфактура OL-art",
    },
    ],
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
      lang="ru"
      className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
    >
      <body className="min-h-full flex flex-col">
        <Providers>{children}</Providers>
      </body>
    </html>
  );
}
