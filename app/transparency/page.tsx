import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Shield } from "lucide-react";
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
          <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#f3702b]/10 to-[#e85242]/10 flex items-center justify-center mx-auto mb-6">
            <Shield className="w-8 h-8 text-[#f3702b]" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#f3702b]/30 text-[#f3702b] text-xs uppercase tracking-[0.2em] mb-6">
            Accountability
          </div>
          <h2 className="section-heading section-heading-center text-3xl inline-block mb-8">
            Transparency Report
          </h2>
          <div className="bg-[#f7f7f7] border border-[#e4e4e4] p-10 mb-10 text-left">
            <p className="text-[#787878] leading-relaxed text-lg mb-6 italic">
              We value transparency and accountability in everything we do.
            </p>
            <p className="text-[#787878] leading-relaxed mb-6">
              As of now, LGBTQIA++ Kumintang Ilaya has not yet undergone a formal
              audit. We are committed to providing accurate and honest reporting
              of our funds and resources as our organization continues to grow.
            </p>
            <div className="border-t border-[#e4e4e4] pt-6">
              <p className="text-[#787878] leading-relaxed">
                For any inquiries about our funds, donations, or financial
                matters, please fill out the contact form and we will get back
                to you as soon as possible.
              </p>
            </div>
          </div>
          <Link
            href="/contact"
            className="btn-theme btn-theme-primary inline-flex items-center gap-2"
          >
            Contact Us <ArrowRight className="w-4 h-4" />
          </Link>
        </div>
      </section>
    </main>
  );
}
