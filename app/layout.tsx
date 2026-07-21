import type { Metadata } from "next";
import { GoogleAnalytics } from "@next/third-parties/google";
import { Fraunces, Inter, Pacifico } from "next/font/google";
import Navbar from "@/components/Navbar";
import Footer from "@/components/Footer";
import PwaServiceWorker from "@/components/PwaServiceWorker";
import "./globals.css";

const fraunces = Fraunces({
  variable: "--font-fraunces",
  subsets: ["latin"],
  weight: ["400", "500", "600"],
});

const inter = Inter({
  variable: "--font-inter",
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const pacifico = Pacifico({
  variable: "--font-pacifico",
  subsets: ["latin"],
  weight: "400",
});

export const metadata: Metadata = {
  metadataBase: new URL("https://lgbt-ku-ila.vercel.app"),
  applicationName: "LGBTQIA++ SILBI Kumintang Ilaya",
  manifest: "/manifest.webmanifest",
  title: {
    default: "LGBTQIA++ Kumintang Ilaya | Empowering the Community",
    template: "%s | LGBTQIA++ SILBI Kumintang Ilaya",
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
  icons: {
    icon: [{ url: "/icon", sizes: "512x512", type: "image/png" }],
    apple: [{ url: "/apple-icon", sizes: "180x180", type: "image/png" }],
  },
  appleWebApp: {
    capable: true,
    statusBarStyle: "default",
    title: "Ku-Ila",
  },
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
        url: "/opengraph-image",
        width: 1200,
        height: 630,
        alt: "LGBTQIA++ SILBI Kumintang Ilaya — Kahit ano ka, Love ka!",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "LGBTQIA++ Kumintang Ilaya",
    description:
      "Empowering the LGBTQIA++ community through love, solidarity, advocacy, and human rights.",
    images: ["/opengraph-image"],
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
  verification: {
    google: "DHVWg2qB_HJB42W8Py5aAzS7gI2qg0JhuserZygEMCs",
  },
};

export const viewport = {
  width: "device-width",
  initialScale: 1,
  viewportFit: "cover",
  themeColor: "#0a1d4a",
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
      className={`${fraunces.variable} ${inter.variable} ${pacifico.variable} antialiased`}
    >
      <head>
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
      </head>
      <body className="min-h-full flex flex-col">
        <Navbar />
        <main className="flex-1">{children}</main>
        <Footer />
        <PwaServiceWorker />
        {process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID ? <GoogleAnalytics gaId={process.env.NEXT_PUBLIC_GA_MEASUREMENT_ID} /> : null}
      </body>
    </html>
  );
}
