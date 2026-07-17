import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Pencil } from "lucide-react";
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
    description: `Learn more about ${member.name}, ${member.role} at LGBTQIA++ SILBI Kumintang Ilaya.`,
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Photo */}
            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 border border-[#f3702b]/20 z-10 m-5" />
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#f3702b]/30 text-[#f3702b] text-xs uppercase tracking-[0.2em] mb-4">
                Member Profile
              </div>
              <h1 className="text-4xl font-bold text-[#3a3d44] mb-2">
                {member.name}
              </h1>
              <p className="text-[#f3702b] font-semibold text-lg mb-8 uppercase tracking-wider">
                {member.role}
              </p>

              <div className="flex flex-wrap gap-3 mb-8">
                {member.facebookUrl && (
                  <a
                    href={member.facebookUrl}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-2 btn-theme btn-theme-primary text-sm"
                  >
                    <FacebookIcon className="h-4 w-4" />
                    Facebook Profile
                  </a>
                )}
                <Link
                  href={`/contact?subject=Profile%20Update%20Request%20-%20${encodeURIComponent(member.name)}`}
                  className="inline-flex items-center gap-2 btn-theme btn-theme-outline text-sm"
                  style={{ color: '#787878', borderColor: '#e4e4e4' }}
                >
                  <Pencil className="w-4 h-4" />
                  Edit Profile
                </Link>
              </div>

              <div className="border-t border-[#e4e4e4] pt-8">
                <h2 className="section-heading text-2xl">
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
                    <span className="w-2 h-2 bg-[#f3702b] rounded-full shrink-0"></span>
                    Youth Empowerment Programs
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-[#e85242] to-[#f3702b] rounded-full shrink-0"></span>
                    Health &amp; Wellness Initiatives
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/members" className="btn-theme btn-theme-outline inline-flex items-center gap-2" style={{ color: '#3a3d44', borderColor: '#e4e4e4' }}>
              <ArrowLeft className="w-4 h-4" />
              Back to Members
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
