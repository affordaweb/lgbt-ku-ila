import type { Metadata } from "next";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Transparency",
  description:
    "Transparency page of LGBTQIA++ Kumintang Ilaya — our commitment to accountability and openness in managing funds and resources.",
};

export default function TransparencyPage() {
  return (
    <main>
      <HeroSection
        title="Transparency"
        subtitle="Home / About / Transparency"
        backgroundImage="/images/stock/stock-03.jpg"
      />

      <section className="section-padding bg-white">
        <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="section-heading text-2xl mb-6">
            Transparency Report
          </h2>
          <div className="bg-[#f7f7f7] border border-[#e4e4e4] p-8 mb-8">
            <p className="text-[#787878] leading-relaxed text-lg mb-4">
              We value transparency and accountability in everything we do.
            </p>
            <p className="text-[#787878] leading-relaxed mb-6">
              As of now, LGBTQIA++ Kumintang Ilaya has not yet undergone a formal
              audit. We are committed to providing accurate and honest reporting
              of our funds and resources as our organization continues to grow.
            </p>
            <div className="border-t border-[#e4e4e4] pt-6">
              <p className="text-[#787878] leading-relaxed mb-2">
                For any inquiries about our funds, donations, or financial
                matters, please fill out the contact form and we will get back
                to you as soon as possible.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="btn-theme btn-theme-primary inline-block"
          >
            Contact Us
          </Link>
        </div>
      </section>
    </main>
  );
}
