import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Target, Eye, Equal, Heart, Users, ArrowRight } from "lucide-react";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Tungkol sa Amin | LGBTQIA++ Kumintang Ilaya",
  description:
    "Alamin ang tungkol sa LGBTQIA++ Kumintang Ilaya — ang aming misyon, bisyon, kasaysayan, at mga pagpapahalaga na nagtutulak sa amin na magbigay ng ligtas na espasyo para sa LGBTQIA++ komunidad sa Batangas.",
};

const values = [
  {
    icon: Equal,
    title: "Equality",
    description:
      "We believe in a world where every person is treated with equal dignity and respect, regardless of their sexual orientation or gender identity.",
  },
  {
    icon: Heart,
    title: "Love",
    description:
      "Love is at the heart of everything we do. We celebrate all forms of love and foster a culture of compassion and acceptance.",
  },
  {
    icon: Users,
    title: "Community",
    description:
      "We are stronger together. We build meaningful connections and create safe spaces where everyone belongs.",
  },
];

export default function AboutPage() {
  return (
    <main>
      <HeroSection
        title="About Us"
        subtitle="Home / About Us"
        backgroundImage="/images/stock/stock-03.jpg"
      />

      {/* Mission & Vision */}
      <section className="section-padding bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-8">
          <div className="bg-white p-10 border border-[#e4e4e4] text-center card-hover">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e85242]/10 to-[#e85242]/10 flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-[#e85242]" />
            </div>
            <h3 className="text-2xl font-bold text-[#3a3d44] mb-4">
              Aming Misyon
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#e85242] to-transparent mx-auto mb-4" />
            <p className="text-[#787878] leading-relaxed">
              Palakasin at pangalagaan ang kalusugan at kagalingan ng LGBTQIA++
              komunidad sa pamamagitan ng komprehensibong suporta, adbokasiya
              para sa equal rights, at pagbuo ng kultura ng pagtanggap at
              kapangyarihan. Layunin naming bigyan ng boses ang bawat miyembro
              ng komunidad sa Kumintang Ilaya.
            </p>
          </div>
          <div className="bg-white p-10 border border-[#e4e4e4] text-center card-hover">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e85242]/10 to-[#e85242]/10 flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-[#e85242]" />
            </div>
            <h3 className="text-2xl font-bold text-[#3a3d44] mb-4">
              Aming Bisyon
            </h3>
            <div className="w-12 h-0.5 bg-gradient-to-r from-[#e85242] to-transparent mx-auto mb-4" />
            <p className="text-[#787878] leading-relaxed">
              Isang lipunan kung saan bawat LGBTQIA++ indibidwal ay nabubuhay
              nang malaya at totoo, ganap na tinatanggap ng kanilang mga komunidad,
              na may pantay na access sa mga oportunidad, resources, at dignidad
              na karapat-dapat sa kanila.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid md:grid-cols-2 gap-16 items-center">
          <div className="relative h-80 md:h-[440px] overflow-hidden">
            <div className="absolute inset-0 border border-[#e85242]/20 z-10 m-5" />
            <Image
              src="/images/stock/stock-02.jpg"
              alt="LGBTQIA++ Kumintang Ilaya Community Center sa Batangas City"
              fill
              className="object-cover"
            />
          </div>
          <div>
            <p className="text-[#e85242] text-xs uppercase tracking-[0.2em] mb-4 font-medium">About</p>
            <h2 className="section-heading text-3xl">
              Ano ang LGBTQIA++ SILBI Kumintang Ilaya?
            </h2>
            <p className="text-[#787878] leading-relaxed mb-4">
              Ang LGBTQIA++ Kumintang Ilaya ay isang community-based organization
              na nakatuon sa pagbibigay ng comprehensive support services para sa
              lesbian, gay, bisexual, transgender, queer, intersex, asexual, at
              iba pang mga kasarian sa Batangas City.
            </p>
            <p className="text-[#787878] leading-relaxed mb-4">
              Kami ay nag-aalok ng mga programa at serbisyo na lumilikha ng
              komunidad, nagpapalakas sa mga miyembro, nagbibigay ng mahahalagang
              resources, nagtataguyod ng civil at human rights, at niyayakap ang
              cultural diversity ng aming mga kasamahan.
            </p>
            <p className="text-[#787878] leading-relaxed mb-8">
              Walang diskriminasyon sa aming organisasyon — pareho sa employment
              at sa pagbibigay ng lahat ng serbisyo. Lahat ay welcome, lahat ay
              tanggap, at lahat ay may karapatang mabuhay nang may dignidad.
            </p>
            <Link href="/contact" className="btn-theme btn-theme-primary inline-flex items-center gap-2">
              Makipag-ugnayan sa Amin <ArrowRight className="w-4 h-4" />
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <p className="text-[#e85242] text-xs uppercase tracking-[0.2em] mb-4 font-medium">Our Values</p>
            <h2 className="section-heading section-heading-center text-3xl inline-block">
              Aming mga Pagpapahalaga
            </h2>
            <p className="text-[#787878] mt-4 max-w-2xl mx-auto">
              Ito ang mga prinsipyo na gabay sa aming lahat ng gawain at programa
              para sa komunidad.
            </p>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-10 border border-[#e4e4e4] text-center card-hover"
              >
                <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#e85242]/10 to-[#e85242]/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#e85242]" />
                </div>
                <h3 className="text-xl font-bold text-[#3a3d44] mb-3">
                  {value.title}
                </h3>
                <div className="w-10 h-0.5 bg-gradient-to-r from-[#e85242] to-transparent mx-auto mb-4" />
                <p className="text-[#787878] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="relative py-24">
        <div className="absolute inset-0 z-0">
          <Image
            src="/images/stock/stock-05.jpg"
            alt="Contact us"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#3a3d44]/90 via-[#3a3d44]/75 to-[#1f222b]/85" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e85242]/30 text-[#e85242] text-xs uppercase tracking-[0.2em] mb-6">
            Get Involved
          </div>
          <h2 className="text-4xl font-bold text-white mb-6">
            Ready to Make a Difference?
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10">
            Whether you want to volunteer, seek support, or simply learn more,
            we would love to hear from you.
          </p>
          <Link href="/contact" className="btn-theme btn-theme-secondary inline-flex items-center gap-2">
            Get in Touch <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
