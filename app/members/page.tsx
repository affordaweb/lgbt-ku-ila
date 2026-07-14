import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import MemberCard from "@/components/MemberCard";
import { members } from "@/lib/data";

export const metadata: Metadata = {
  title: "Our Members",
  description:
    "Meet the dedicated and passionate members of the LGBT Ku-Ila team.",
};

export default function MembersPage() {
  return (
    <main>
      <HeroSection
        title="Our Members"
        subtitle="Home / Members"
        backgroundImage="/images/stock/stock-04.jpg"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="section-heading text-2xl">
              Leaders of Our Community
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-6">
            {members.map((member) => (
              <MemberCard
                key={member.slug}
                name={member.name}
                image={member.image}
                role={member.role}
                facebookUrl={member.facebookUrl}
                slug={member.slug}
              />
            ))}
          </div>
        </div>
      </section>
    </main>
  );
}
