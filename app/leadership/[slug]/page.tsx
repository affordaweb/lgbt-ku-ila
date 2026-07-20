import { notFound, redirect } from "next/navigation";

const memberProfileSlugs: Record<string, string> = {
  "rey-anne-buenviaje": "reyann-buenviaje",
  "edmund-andal": "edmund-andal",
  "ariana-gamboa": "ariane-gamboa",
  "ricson-cultura": "ricson-cultura",
  "donn-ramos": "donn-ramos",
  "bela-culla": "bela-culla",
  // Keep the original misspelled link working for anyone who already has it.
  "bela-cula": "bela-culla",
};

export function generateStaticParams() {
  return Object.keys(memberProfileSlugs).map((slug) => ({ slug }));
}

export default async function LeadershipProfilePage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const memberSlug = memberProfileSlugs[slug];

  if (!memberSlug) {
    notFound();
  }

  redirect(`/members/${memberSlug}`);
}
