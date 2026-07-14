import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "@/components/FacebookIcon";
import HeroSection from "@/components/HeroSection";
import { members } from "@/lib/data";

export function generateStaticParams() {
  return members.map((member) => ({
    slug: member.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const member = members.find((m) => m.slug === slug);

  if (!member) {
    return { title: "Member Not Found" };
  }

  return {
    title: member.name,
    description: `Learn more about ${member.name}, ${member.role} at LGBT Ku-Ila.`,
  };
}

export default async function MemberPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const member = members.find((m) => m.slug === slug);

  if (!member) {
    notFound();
  }

  return (
    <main>
      <HeroSection
        title={member.name}
        subtitle={`Home / Members / ${member.name}`}
        backgroundImage="/images/stock/stock-04.jpg"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-12 lg:grid-cols-2">
            {/* Photo */}
            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden">
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div>
              <h1 className="text-3xl font-bold text-[#3a3d44] mb-2 uppercase">
                {member.name}
              </h1>
              <p className="text-[#e85242] font-semibold text-lg mb-6">
                {member.role}
              </p>

              {member.facebookUrl && (
                <a
                  href={member.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-theme btn-theme-primary text-sm mb-8"
                >
                  <FacebookIcon className="h-4 w-4" />
                  Facebook Profile
                </a>
              )}

              <div className="border-t border-[#e4e4e4] pt-8 mt-8">
                <h2 className="section-heading text-xl">
                  Programs &amp; Services
                </h2>
                <p className="text-[#787878] leading-relaxed mb-6">
                  As a valued member of the LGBTQIA++ Kumintang Ilaya community,
                  {member.name} actively participates in and supports our core
                  programs designed to uplift and empower LGBTQIA++ individuals.
                </p>
                <ul className="space-y-3 text-[#787878]">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#e85242] rounded-full shrink-0"></span>
                    Community Support &amp; Safe Spaces
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#f3702b] rounded-full shrink-0"></span>
                    Legal Assistance &amp; Advocacy
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#fcb315] rounded-full shrink-0"></span>
                    Youth Empowerment Programs
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#03a8cb] rounded-full shrink-0"></span>
                    Health &amp; Wellness Initiatives
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-12 text-center">
            <Link href="/members" className="btn-theme btn-theme-primary inline-block">
              Back to Members
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
