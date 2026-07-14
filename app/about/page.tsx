import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { Target, Eye, Equal, Heart, Users } from "lucide-react";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "About Us",
  description:
    "Learn about LGBTQIA++ Kumintang Ilaya — our mission, vision, history, and the values that drive us to build a more inclusive world.",
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
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-8">
          <div className="bg-white p-8 border border-[#e4e4e4] text-center">
            <div className="w-16 h-16 rounded-full bg-[#e85242]/10 flex items-center justify-center mx-auto mb-6">
              <Target className="w-8 h-8 text-[#e85242]" />
            </div>
            <h3 className="text-2xl font-bold text-[#3a3d44] mb-4 uppercase">
              Our Mission
            </h3>
            <p className="text-[#787878] leading-relaxed">
              To enhance and sustain the health and well-being of the LGBTQIA++
              community by providing comprehensive support services, advocating
              for equal rights, and fostering a culture of acceptance and
              empowerment.
            </p>
          </div>
          <div className="bg-white p-8 border border-[#e4e4e4] text-center">
            <div className="w-16 h-16 rounded-full bg-[#03a8cb]/10 flex items-center justify-center mx-auto mb-6">
              <Eye className="w-8 h-8 text-[#03a8cb]" />
            </div>
            <h3 className="text-2xl font-bold text-[#3a3d44] mb-4 uppercase">
              Our Vision
            </h3>
            <p className="text-[#787878] leading-relaxed">
              A society where every LGBTQIA++ individual lives freely and
              authentically, fully embraced by their communities, with equitable
              access to opportunities, resources, and the dignity they deserve.
            </p>
          </div>
        </div>
      </section>

      {/* About Section */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">
          <div className="relative h-80 md:h-[400px]">
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
            <Link href="/contact" className="btn-theme btn-theme-primary inline-block">
              Contact Us
            </Link>
          </div>
        </div>
      </section>

      {/* Values */}
      <section className="section-padding bg-[#f7f7f7]">
        <div className="max-w-7xl mx-auto">
          <div className="text-center mb-12">
            <h2 className="section-heading text-2xl inline-block text-left">
              Our Values
            </h2>
          </div>
          <div className="grid sm:grid-cols-3 gap-8">
            {values.map((value) => (
              <div
                key={value.title}
                className="bg-white p-8 border border-[#e4e4e4] text-center"
              >
                <div className="w-16 h-16 rounded-full bg-[#fcb315]/10 flex items-center justify-center mx-auto mb-6">
                  <value.icon className="w-8 h-8 text-[#fcb315]" />
                </div>
                <h3 className="text-xl font-bold text-[#3a3d44] mb-3 uppercase">
                  {value.title}
                </h3>
                <p className="text-[#787878] leading-relaxed">
                  {value.description}
                </p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
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
            Ready to Make a Difference?
          </h2>
          <p className="text-white/70 text-lg max-w-2xl mx-auto mb-10">
            Whether you want to volunteer, seek support, or simply learn more,
            we would love to hear from you.
          </p>
          <Link href="/contact" className="btn-theme btn-theme-primary inline-block">
            Get in Touch
          </Link>
        </div>
      </section>
    </main>
  );
}
