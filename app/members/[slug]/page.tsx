import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft } from "lucide-react";
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-16 lg:grid-cols-2">
            {/* Photo */}
            <div className="relative aspect-square lg:aspect-[4/5] overflow-hidden">
              <div className="absolute inset-0 border border-[#D4AF37]/20 z-10 m-5" />
              <Image
                src={member.image}
                alt={member.name}
                fill
                className="object-cover"
              />
            </div>

            {/* Details */}
            <div className="flex flex-col justify-center">
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4">
                Member Profile
              </div>
              <h1 className="text-4xl font-bold text-[#1A1A2E] mb-2 font-[var(--font-playfair)]">
                {member.name}
              </h1>
              <p className="text-[#D4AF37] font-semibold text-lg mb-8 uppercase tracking-wider">
                {member.role}
              </p>

              {member.facebookUrl && (
                <a
                  href={member.facebookUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-2 btn-luxury btn-luxury-primary text-sm mb-8 w-fit"
                >
                  <FacebookIcon className="h-4 w-4" />
                  Facebook Profile
                </a>
              )}

              <div className="border-t border-[#E5DDD3] pt-8">
                <h2 className="section-heading text-2xl font-[var(--font-playfair)]">
                  Programs &amp; Services
                </h2>
                <p className="text-[#6B7280] leading-relaxed mb-6">
                  As a valued member of the LGBTQIA++ Kumintang Ilaya community,
                  {member.name} actively participates in and supports our core
                  programs designed to uplift and empower LGBTQIA++ individuals.
                </p>
                <ul className="space-y-3 text-[#6B7280]">
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#7B2D8E] rounded-full shrink-0"></span>
                    Community Support &amp; Safe Spaces
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#D4AF37] rounded-full shrink-0"></span>
                    Legal Assistance &amp; Advocacy
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-[#9B4DAC] rounded-full shrink-0"></span>
                    Youth Empowerment Programs
                  </li>
                  <li className="flex items-center gap-3">
                    <span className="w-2 h-2 bg-gradient-to-r from-[#7B2D8E] to-[#D4AF37] rounded-full shrink-0"></span>
                    Health &amp; Wellness Initiatives
                  </li>
                </ul>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/members" className="btn-luxury btn-luxury-outline inline-flex items-center gap-2" style={{ color: '#1A1A2E', borderColor: '#E5DDD3' }}>
              <ArrowLeft className="w-4 h-4" />
              Back to Members
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
