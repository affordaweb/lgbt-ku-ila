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
    alternates: { canonical: url },
    openGraph: {
      type: "website",
      url,
      title,
      description,
      siteName: "LGBTQIA++ SILBI Kumintang Ilaya",
      images: [{ url: image.startsWith("http") ? image : siteUrl + image, alt: title }],
    },
    twitter: {
      card: "summary_large_image",
      title,
      description,
      images: [image.startsWith("http") ? image : siteUrl + image],
    },
  };
}

type BreadcrumbItem = { name: string; path: string };

export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, i) => ({
      "@type": "ListItem",
      position: i + 1,
      name: item.name,
      item: new URL(item.path, siteUrl).toString(),
    })),
  };
}

export function eventJsonLd(event: {
  title: string;
  description: string;
  date: string;
  location: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Event",
    name: event.title,
    description: event.description,
    startDate: event.date,
    location: { "@type": "Place", name: event.location },
    image: event.image.startsWith("http") ? event.image : siteUrl + event.image,
    url: event.url,
    organizer: {
      "@type": "Organization",
      name: "LGBTQIA++ SILBI Kumintang Ilaya",
      url: siteUrl,
    },
  };
}

export function personJsonLd(person: {
  name: string;
  description: string;
  image: string;
  url: string;
}) {
  return {
    "@context": "https://schema.org",
    "@type": "Person",
    name: person.name,
    description: person.description,
    image: person.image.startsWith("http") ? person.image : siteUrl + person.image,
    url: person.url,
    affiliation: {
      "@type": "Organization",
      name: "LGBTQIA++ SILBI Kumintang Ilaya",
      url: siteUrl,
    },
  };
}
