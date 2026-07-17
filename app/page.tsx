import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { Heart, UserPlus, Phone, HeartHandshake, ArrowRight } from "lucide-react";
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
    bg: "bg-[#e85242]",
  },
  {
    icon: UserPlus,
    title: "Become a Member",
    description:
      "Sumali sa aming komunidad at maging bahagi ng adbokasiya para sa pagkakapantay-pantay at pagtanggap.",
    bg: "bg-[#fcb315]",
  },
  {
    icon: Phone,
    title: "Contact Us",
    description:
      "Makipag-ugnayan sa amin para sa mga katanungan, suhestiyon, o anumang tulong na kailangan mo.",
    bg: "bg-[#03a8cb]",
  },
  {
    icon: HeartHandshake,
    title: "Support Us",
    description:
      "Tulungan kaming patuloy na magbigay ng serbisyo at suporta sa LGBTQIA++ komunidad.",
    bg: "bg-[#22c55e]",
  },
];

export default function HomePage() {
  return (
    <main>
      {/* Hero Section */}
      <section className="relative min-h-[700px] flex items-center overflow-hidden">
        <HeroSlideshow />
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center">
          <div className="inline-flex items-center gap-2 px-5 py-2 bg-[#e85242]/15 border border-[#e85242]/40 text-white text-sm uppercase tracking-[0.2em] mb-6 backdrop-blur-sm">
            Welcome To LGBTQIA++ Silbi Kumintang Ilaya
          </div>
          <h1 className="text-5xl sm:text-6xl md:text-7xl lg:text-8xl font-bold text-white mb-8 leading-tight">
            LOVE Ka,<br />
            <span className="text-gradient">Dahil Ikaw Ka!</span>
          </h1>
          <p className="text-white/70 max-w-3xl mx-auto mb-6 leading-relaxed text-2xl font-[var(--font-caveat)]">
            Your identity is your power. Stand tall, speak loud, and let the world know who you are. You are not alone — we are here, we are proud, and we stand with you. Every color of your truth matters, every story deserves to be heard. In Kumintang Ilaya, you are seen, you are loved — exactly as you are.
          </p>

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
                bg={program.bg}
              />
            ))}
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-80 md:h-[520px] overflow-hidden">
            <div className="absolute inset-0 border border-[#e85242]/20 z-10 m-6" />
            <Image
              src="/images/stock/stock-02.jpg"
              alt="LGBTQIA++ Kumintang Ilaya Community - Batangas City"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[#e85242] text-xs uppercase tracking-[0.2em] mb-4 font-medium">About Us</p>
            <h2 className="section-heading text-3xl">
              Ano ang LGBTQIA++ SILBI Kumintang Ilaya?
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
            <Link href="/about" className="btn-theme btn-theme-primary inline-flex items-center gap-2">
              Basahin Pa <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Team Section */}
      <section className="section-padding bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e85242] text-xs uppercase tracking-[0.2em] mb-4 font-medium">Our Team</p>
            <h2 className="section-heading section-heading-center text-3xl inline-block">
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
            <Link href="/members" className="btn-theme btn-theme-primary inline-flex items-center gap-2">
              View All Members <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Events Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e85242] text-xs uppercase tracking-[0.2em] mb-4 font-medium">Events</p>
            <h2 className="section-heading section-heading-center text-3xl inline-block">
              Mga Kaganapan at Aktibidad
            </h2>
            <p className="text-[#787878] mt-4 max-w-2xl mx-auto">
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
                  <div className="absolute inset-0 bg-gradient-to-t from-[#3a3d44]/80 via-transparent to-transparent" />
                  <div className="absolute bottom-0 left-0 right-0 p-5 text-white">
                    <h3 className="font-bold text-sm">{image.alt}</h3>
                  </div>
                </div>
              </div>
            ))}
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
          <div className="absolute inset-0 bg-gradient-to-r from-[#3a3d44]/90 via-[#3a3d44]/75 to-[#1f222b]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e85242]/30 text-[#e85242] text-xs uppercase tracking-[0.2em] mb-6">
            Contact Us
          </div>
          <h2 className="text-4xl md:text-5xl font-bold text-white mb-6">
            May Tanong? Kailangan ng Tulong?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Kahit anong tanong mo, nandito kami para sayo. Mag-message lang sa amin
            at sasagutin namin kayo sa lalong madaling panahon.
          </p>
          <Link href="/contact" className="btn-theme btn-theme-secondary inline-flex items-center gap-2">
            Mag-Message Ngayon <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
