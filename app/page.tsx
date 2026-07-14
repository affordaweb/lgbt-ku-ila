import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Shield, Users, Leaf } from "lucide-react";
import { members, galleryImages } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import MemberCard from "@/components/MemberCard";

export const metadata: Metadata = {
  title: "LGBTQIA++ Kumintang Ilaya",
  description:
    "Empowering the LGBTQIA++ community. Building an inclusive world where everyone is celebrated for who they are.",
};

const programs = [
  {
    icon: Heart,
    title: "Community Support",
    description:
      "Creating safe spaces and fostering a supportive network where every individual feels valued and accepted.",
    color: "red" as const,
  },
  {
    icon: Shield,
    title: "Legal Assistance",
    description:
      "Providing legal guidance and advocacy to protect the rights and dignity of LGBTQIA++ individuals.",
    color: "orange" as const,
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    description:
      "Equipping young LGBTQIA++ individuals with the resources, mentorship, and confidence to thrive.",
    color: "yellow" as const,
  },
  {
    icon: Leaf,
    title: "Health & Wellness",
    description:
      "Promoting holistic well-being through access to healthcare, mental health support, and wellness programs.",
    color: "teal" as const,
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[600px] flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stock/stock-01.jpg"
            alt="LGBTQIA++ Kumintang Ilaya"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#3a3d44]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-[#fcb315] uppercase tracking-widest mb-4 text-sm font-semibold">
            Welcome To LGBTQIA++ Kumintang Ilaya
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight uppercase">
            Become The Change
            <br />
            You Want To See
          </h1>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Empowering the community through love, solidarity, advocacy, and human rights.
          </p>
          <Link href="/contact" className="btn-theme btn-theme-primary inline-block">
            Be Proud!
          </Link>
        </div>
      </section>

      {/* Service Cards - overlapping hero bottom */}
      <section className="relative -mt-16 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {programs.map((program) => (
              <ServiceCard
                key={program.title}
                icon={program.icon}
                title={program.title}
                description={program.description}
                color={program.color}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[480px]">
            <Image
              src="/images/stock/stock-02.jpg"
              alt="About Kumintang Ilaya"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="section-heading text-2xl">
              What is LGBTQIA++ Ku-Ila
            </h2>
            <p className="text-[#787878] leading-relaxed mb-4">
              The Center is committed to a policy of non-discrimination in
              employment and in the provision of all services.
            </p>
            <p className="text-[#787878] leading-relaxed mb-8">
              The mission of LGBTQIA++ Kumintang Ilaya is to enhance and sustain
              the health and well-being of the lesbian, gay, bisexual,
              transgender and HIV communities by providing activities, programs
              and services that create community. Empower community members;
              provide essential resources; advocate for civil and human rights;
              and embrace, promote and support our cultural diversity.
            </p>
            <Link href="/about" className="btn-theme btn-theme-primary inline-block">
              Read More
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading text-2xl inline-block text-left">
              Leaders of Our Community
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.slice(0, 8).map((member) => (
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
          <div className="text-center mt-12">
            <Link href="/members" className="btn-theme btn-theme-primary inline-block">
              View All Members
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading text-2xl inline-block text-left">
              Our Events
            </h2>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2">
            {galleryImages.slice(0, 8).map((image, index) => (
              <div
                key={image.src}
                className={`relative overflow-hidden group ${
                  index === 2 ? "col-span-2 row-span-2" : ""
                }`}
              >
                <div className="relative aspect-square">
                  <Image
                    src={image.src}
                    alt={image.alt}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3a3d44]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-4 text-white">
                    <h3 className="font-bold text-sm">{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <div className="flex items-center justify-between mb-12">
            <h2 className="section-heading text-2xl">
              Our Fresh Blog Posts
            </h2>
            <Link href="/blog" className="text-[#e85242] hover:underline text-sm font-semibold uppercase">
              View More
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#e4e4e4] overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/stock/stock-03.jpg"
                  alt="Blog post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#3a3d44] mb-2">
                  Creating Spaces for Queer Families
                </h3>
                <p className="text-[#787878] text-xs mb-3">
                  <span className="text-[#e85242]">Community</span> | January 17, 2018
                </p>
                <p className="text-[#787878] text-sm">
                  Building inclusive environments where LGBTQIA++ families can thrive and
                  feel accepted in their communities.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#e4e4e4] overflow-hidden">
              <div className="relative h-48">
                <Image
                  src="/images/stock/stock-04.jpg"
                  alt="Blog post"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="p-6">
                <h3 className="font-bold text-[#3a3d44] mb-2">
                  Holiday Resources for LGBT Families
                </h3>
                <p className="text-[#787878] text-xs mb-3">
                  <span className="text-[#e85242]">Services</span> | January 17, 2018
                </p>
                <p className="text-[#787878] text-sm">
                  Essential resources and support for LGBTQIA++ families during
                  the holiday season and beyond.
                </p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-20">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stock/stock-05.jpg"
            alt="Contact us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#3a3d44]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            Do You Need Help?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Contact us and we will help you to solve any of your problems.
          </p>
          <Link href="/contact" className="btn-theme btn-theme-primary inline-block">
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
