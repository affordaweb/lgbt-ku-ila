import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Shield, Users, Leaf } from "lucide-react";
import { members, galleryImages } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import MemberCard from "@/components/MemberCard";

export const metadata: Metadata = {
  title: "LGBTQIA++ Kumintang Ilaya | LGBTQIA Community Organization in Batangas",
  description:
    "Ang LGBTQIA++ Kumintang Ilaya (Ku-Ila) ay isang komunidad na nakatuon sa pagbibigay ng suporta, adbokasiya, at ligtas na espasyo para sa lahat ng LGBTQIA++ individuals sa Batangas City at sa buong Pilipinas. Sali na sa amin!",
  keywords: [
    "LGBTQIA++ Batangas",
    "LGBTQ community Batangas City",
    "Kumintang Ilaya",
    "Ku-Ila",
    "Pride Philippines",
    "LGBTQ organization Batangas",
    "equality Philippines",
    "LGBT support group",
    "community center Batangas",
  ],
};

const programs = [
  {
    icon: Heart,
    title: "Community Support",
    description:
      "Pagsasama-sama at pagtutulungan. May mga support groups at activities para sa lahat ng miyembro ng LGBTQIA++ komunidad.",
    color: "red" as const,
  },
  {
    icon: Shield,
    title: "Legal Assistance",
    description:
      "Tulong sa mga dokumento at pag-unawa sa inyong mga karapatan. Gabay para sa mga LGBTQIA++ na humaharap sa diskriminasyon.",
    color: "orange" as const,
  },
  {
    icon: Users,
    title: "Youth Empowerment",
    description:
      "Mga programa para sa kabataan — mentoring, workshops, at activities na nagpapalakas ng kumpiyansa at pagkakaisa.",
    color: "yellow" as const,
  },
  {
    icon: Leaf,
    title: "Health & Wellness",
    description:
      "Mental health support, wellness activities, at connections sa healthcare services para sa komunidad.",
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
            src="/images/events/734896841_1747334810026168_6985617327012982623_n.jpg"
            alt="LGBTQIA++ Kumintang Ilaya"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-[#3a3d44]/70" />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <p className="text-[#fcb315] uppercase tracking-widest mb-4 text-sm font-semibold">
            Welcome To LGBTQIA++ Silbi Kumintang Ilaya
          </p>
          <h1 className="text-4xl sm:text-5xl md:text-6xl font-bold text-white mb-6 leading-tight uppercase">
            LOVE Ka, Dahil Ikaw Ka!
          </h1>
          <p className="text-white/70 max-w-2xl mx-auto mb-4 leading-relaxed font-cursive text-2xl md:text-3xl">
            Your identity is your power. Stand tall, speak loud, and let the
            world know who you are. You are not alone — we are here, we are
            proud, and we stand with you. Together, we create a world where
            everyone is seen, heard, and celebrated.
          </p>
          <p className="text-[#fcb315] text-sm uppercase tracking-widest mb-10">
            Kumintang Ilaya
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/become-member" className="btn-theme btn-theme-primary inline-block">
              Become a Member
            </Link>
            <Link href="/about" className="btn-theme btn-theme-secondary inline-block">
              Learn More
            </Link>
          </div>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[480px]">
            <Image
              src="/images/stock/stock-02.jpg"
              alt="LGBTQIA++ Kumintang Ilaya Community - Batangas City"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <h2 className="section-heading text-2xl">
              Ano ang LGBTQIA++ Ku-Ila?
            </h2>
            <p className="text-[#787878] leading-relaxed mb-4">
              Ang LGBTQIA++ Kumintang Ilaya ay isang community-based organization
              na nagbibigay ng safe space para sa lahat ng LGBTQIA++ individuals
              sa Batangas City. Dito, everyone is welcome — walang judgment,
              walang discrimination. Lahat ay tanggap at may boses.
            </p>
            <p className="text-[#787878] leading-relaxed mb-4">
              Kasama sa aming mga programa ang support groups, legal assistance,
              health and wellness activities, at youth empowerment programs.
              Together, we work towards equality and acceptance para sa lahat
              ng miyembro ng komunidad.
            </p>
            <p className="text-[#787878] leading-relaxed mb-8">
              Sama-sama tayong magkaisa — walang agwat, walang hatulan.
              Join us and be part of the movement for a more inclusive Kumintang Ilaya.
            </p>
            <Link href="/about" className="btn-theme btn-theme-primary inline-block">
              Basahin Pa
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading text-2xl inline-block text-left">
              Leaders of Our Community
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {members.filter(m => m.role !== "Member").map((member) => (
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <h2 className="section-heading text-2xl inline-block text-left">
              Mga Kaganapan at Aktibidad
            </h2>
            <p className="text-[#787878] mt-4 max-w-2xl mx-auto">
              Sali sa aming mga events, pride marches, outreach programs, at iba pang
              activities na nagtataguyod ng pagkakaisa at pagmamahalan sa LGBTQIA++ komunidad ng Batangas.
            </p>
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between mb-12">
            <h2 className="section-heading text-2xl">
              Mga Balita at Updates
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
            alt="Contact LGBTQIA++ Kumintang Ilaya"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-[#3a3d44]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold text-white mb-6">
            May Tanong? Kailangan ng Tulong?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Kahit anong tanong mo, nandito kami para sayo. Mag-message lang sa amin
            at sasagutin namin kayo sa lalong madaling panahon.
          </p>
          <Link href="/contact" className="btn-theme btn-theme-primary inline-block">
            Mag-Message Ngayon
          </Link>
        </div>
      </section>
    </main>
  );
}
