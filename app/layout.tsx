import type { Metadata } from "next";
import { Playfair_Display, Inter, Cormorant_Garamond } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import "./globals.css";

const playfair = Playfair_Display({
  variable: "--font-playfair",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700", "800", "900"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

const cormorant = Cormorant_Garamond({
  variable: "--font-cormorant",
  subsets: ["latin"],
  weight: ["300", "400", "500", "600", "700"],
});

export const metadata: Metadata = {
  title: {
    default: "LGBTQIA++ Kumintang Ilaya | Empowering the Community",
    template: "%s | LGBTQIA++ Ku-Ila",
  },
  description:
    "LGBTQIA++ Kumintang Ilaya (Ku-Ila) — Empowering the LGBTQIA++ community through love, solidarity, advocacy, and human rights. Join us in building a more inclusive world.",
  keywords: [
    "LGBTQIA",
    "LGBTQIA++",
    "Kumintang Ilaya",
    "Ku-Ila",
    "pride",
    "equality",
    "community",
    "Batangas",
    "Philippines",
    "advocacy",
    "human rights",
    "inclusion",
  ],
  authors: [{ name: "LGBTQIA++ Kumintang Ilaya" }],
  creator: "LGBTQIA++ Kumintang Ilaya",
  openGraph: {
    type: "website",
    locale: "en_US",
    url: "https://lgbt-ku-ila.vercel.app",
    siteName: "LGBTQIA++ Kumintang Ilaya",
    title: "LGBTQIA++ Kumintang Ilaya | Empowering the Community",
    description:
      "Empowering the LGBTQIA++ community through love, solidarity, advocacy, and human rights.",
    images: [
      {
        url: "/images/stock/stock-01.jpg",
        width: 1200,
        height: 630,
        alt: "LGBTQIA++ Kumintang Ilaya",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LGBTQIA++ Kumintang Ilaya",
    description:
      "Empowering the LGBTQIA++ community through love, solidarity, advocacy, and human rights.",
    images: ["/images/stock/stock-01.jpg"],
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
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  const jsonLd = {
    "@context": "https://schema.org",
    "@type": "Organization",
    name: "LGBTQIA++ Kumintang Ilaya",
    alternateName: "Ku-Ila",
    url: "https://lgbt-ku-ila.vercel.app",
    logo: "https://lgbt-ku-ila.vercel.app/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg",
    description:
      "Empowering the LGBTQIA++ community through love, solidarity, advocacy, and human rights.",
    sameAs: ["https://www.facebook.com/profile.php?id=61591420257367"],
    address: {
      "@type": "PostalAddress",
      addressLocality: "Batangas City",
      addressRegion: "Batangas",
      addressCountry: "PH",
    },
  };

  return (
    <html
      lang="en"
      className={`${playfair.variable} ${inter.variable} ${cormorant.variable} h-full antialiased`}
    >
      <head>
        <link rel="canonical" href="https://lgbt-ku-ila.vercel.app" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
      </body>
    </html>
  );
}
