import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, Shield, Users, Leaf, ArrowRight } from "lucide-react";
import { members, galleryImages } from "@/lib/data";
import ServiceCard from "@/components/ServiceCard";
import MemberCard from "@/components/MemberCard";
import HeroSlideshow from "@/components/HeroSlideshow";

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
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        <HeroSlideshow />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-6">
            Welcome To LGBTQIA++ Silbi Kumintang Ilaya
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight font-[var(--font-playfair)]">
            LOVE Ka,<br />
            <span className="text-gradient">Dahil Ikaw Ka!</span>
          </h1>
          <p className="text-white/60 max-w-2xl mx-auto mb-6 leading-relaxed text-lg font-[var(--font-cormorant)] italic">
            Your identity is your power. Stand tall, speak loud, and let the
            world know who you are. You are not alone — we are here, we are
            proud, and we stand with you.
          </p>
          <p className="text-[#D4AF37] text-xs uppercase tracking-[0.25em] mb-10">
            Kumintang Ilaya
          </p>
          <div className="flex flex-col sm:flex-row gap-5 justify-center">
            <Link href="/become-member" className="btn-luxury btn-luxury-primary inline-block">
              Become a Member
            </Link>
            <Link href="/about" className="btn-luxury btn-luxury-outline inline-flex items-center gap-2">
              Learn More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Service Cards */}
      <section className="relative -mt-20 z-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 shadow-2xl">
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
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-80 md:h-[520px] overflow-hidden">
            <div className="absolute inset-0 border border-[#D4AF37]/20 z-10 m-6" />
            <Image
              src="/images/stock/stock-02.jpg"
              alt="LGBTQIA++ Kumintang Ilaya Community - Batangas City"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4 font-medium">About Us</p>
            <h2 className="section-heading text-3xl font-[var(--font-playfair)]">
              Ano ang LGBTQIA++ Ku-Ila?
            </h2>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Ang LGBTQIA++ Kumintang Ilaya ay isang community-based organization
              na nagbibigay ng safe space para sa lahat ng LGBTQIA++ individuals
              sa Batangas City. Dito, everyone is welcome — walang judgment,
              walang discrimination. Lahat ay tanggap at may boses.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-4">
              Kasama sa aming mga programa ang support groups, legal assistance,
              health and wellness activities, at youth empowerment programs.
              Together, we work towards equality and acceptance para sa lahat
              ng miyembro ng komunidad.
            </p>
            <p className="text-[#6B7280] leading-relaxed mb-8">
              Sama-sama tayong magkaisa — walang agwat, walang hatulan.
              Join us and be part of the movement for a more inclusive Kumintang Ilaya.
            </p>
            <Link href="/about" className="btn-luxury btn-luxury-primary inline-flex items-center gap-2">
              Basahin Pa <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4 font-medium">Our Team</p>
            <h2 className="section-heading section-heading-center text-3xl inline-block font-[var(--font-playfair)]">
              Leaders of Our Community
            </h2>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-8">
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
            <Link href="/members" className="btn-luxury btn-luxury-primary inline-flex items-center gap-2">
              View All Members <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4 font-medium">Events</p>
            <h2 className="section-heading section-heading-center text-3xl inline-block font-[var(--font-playfair)]">
              Mga Kaganapan at Aktibidad
            </h2>
            <p className="text-[#6B7280] mt-4 max-w-2xl mx-auto">
              Sali sa aming mga events, pride marches, outreach programs, at iba pang
              activities na nagtataguyod ng pagkakaisa at pagmamahalan sa LGBTQIA++ komunidad ng Batangas.
            </p>
          </div>
          <div className="grid grid-cols-2 md:grid-cols-4 gap-3">
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
                    className="object-cover group-hover:scale-105 transition-transform duration-700"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="font-bold text-sm font-[var(--font-playfair)]">{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Blog Section */}
      <section className="section-padding bg-[#FAF8F5]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-end justify-between mb-12">
            <div>
              <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4 font-medium">Blog</p>
              <h2 className="section-heading text-3xl font-[var(--font-playfair)]">
                Mga Balita at Updates
              </h2>
            </div>
            <Link href="/blog" className="text-[#7B2D8E] hover:text-[#9B4DAC] text-sm font-semibold uppercase tracking-wider transition-colors hidden sm:inline-flex items-center gap-1">
              View More <ArrowRight className="w-3 h-3" />
            </Link>
          </div>
          <div className="grid md:grid-cols-2 gap-8">
            <div className="bg-white border border-[#E5DDD3] overflow-hidden card-luxury">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/images/stock/stock-03.jpg"
                  alt="Blog post"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <p className="text-xs text-[#D4AF37] uppercase tracking-wider mb-1">
                  <span className="font-semibold">Community</span> | January 17, 2018
                </p>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 font-[var(--font-playfair)]">
                  Creating Spaces for Queer Families
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Building inclusive environments where LGBTQIA++ families can thrive and
                  feel accepted in their communities.
                </p>
              </div>
            </div>
            <div className="bg-white border border-[#E5DDD3] overflow-hidden card-luxury">
              <div className="relative h-52 overflow-hidden">
                <Image
                  src="/images/stock/stock-04.jpg"
                  alt="Blog post"
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-8">
                <p className="text-xs text-[#D4AF37] uppercase tracking-wider mb-1">
                  <span className="font-semibold">Services</span> | January 17, 2018
                </p>
                <h3 className="text-xl font-bold text-[#1A1A2E] mb-3 font-[var(--font-playfair)]">
                  Holiday Resources for LGBT Families
                </h3>
                <p className="text-[#6B7280] text-sm leading-relaxed">
                  Essential resources and support for LGBTQIA++ families during
                  the holiday season and beyond.
                </p>
              </div>
            </div>
          </div>
          <div className="text-center mt-10 sm:hidden">
            <Link href="/blog" className="btn-luxury btn-luxury-primary inline-flex items-center gap-2 text-sm">
              View More <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Contact CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stock/stock-05.jpg"
            alt="Contact LGBTQIA++ Kumintang Ilaya"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/90 via-[#1A1A2E]/75 to-[#0F0F1A]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-6">
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6 font-[var(--font-playfair)]">
            May Tanong? Kailangan ng Tulong?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Kahit anong tanong mo, nandito kami para sayo. Mag-message lang sa amin
            at sasagutin namin kayo sa lalong madaling panahon.
          </p>
          <Link href="/contact" className="btn-luxury btn-luxury-secondary inline-flex items-center gap-2">
            Mag-Message Ngayon <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
