import type { Metadata } from "next";

export const siteUrl = "https://lgbt-ku-ila.vercel.app";

type PageSeo = {
  title: string;
  description: string;
  path: string;
  image?: string;
};

/** Shared, self-referencing metadata for indexable pages. */
export function pageSeo({ title, description, path, image = "/images/stock/stock-01.jpg" }: PageSeo): Metadata {
  const url = new URL(path, siteUrl).toString();
  return {
    title,
    description,
    alternates: { canonical: path },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "LGBTQIA++ SILBI Kumintang Ilaya",
      images: [{ url: image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image],
    },
  };
}
