import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import MembershipForm from "@/components/MembershipForm";
import { Check } from "lucide-react";

export const metadata: Metadata = {
  title: "Become a Member | LGBTQIA++ Kumintang Ilaya",
  description:
    "Join our community! Membership is open to all. Sign up today and be part of the movement.",
};

const benefits = [
  "Official LGBTQIA++ Ku-Ila member",
  "Listed on our Members page",
  "Access to community events and programs",
  "Legal assistance and advocacy support",
  "Health and wellness resources",
];

export default function BecomeMemberPage() {
  return (
    <main>
      <HeroSection
        title="Become a Member"
        subtitle="Home / Become a Member"
        backgroundImage="/images/stock/stock-01.jpg"
      />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid md:grid-cols-2 gap-16">
            {/* Form */}
            <div>
              <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4 font-medium">Join Us</p>
              <h2 className="section-heading text-3xl font-[var(--font-playfair)]">
                Membership Application
              </h2>
              <MembershipForm />
            </div>

            {/* Info Sidebar */}
            <div className="space-y-10">
              <div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-4 uppercase tracking-wider font-[var(--font-playfair)]">
                  Membership Fee
                </h3>
                <div className="bg-gradient-to-br from-[#FAF8F5] to-white border border-[#E5DDD3] p-8 text-center">
                  <p className="text-5xl font-bold text-[#D4AF37] mb-2 font-[var(--font-playfair)]">300 PHP</p>
                  <p className="text-sm text-[#6B7280]">One-time membership fee</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-4 uppercase tracking-wider font-[var(--font-playfair)]">
                  How to Pay
                </h3>
                <ol className="space-y-4 text-sm text-[#6B7280]">
                  <li className="flex gap-4">
                    <span className="font-bold text-[#D4AF37] text-lg leading-none">1</span>
                    Fill out the membership form
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-[#D4AF37] text-lg leading-none">2</span>
                    Send 300 PHP via GCash
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-[#D4AF37] text-lg leading-none">3</span>
                    Include your GCash reference number in the form
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-[#D4AF37] text-lg leading-none">4</span>
                    Wait for confirmation of your payment
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-[#D4AF37] text-lg leading-none">5</span>
                    You will be added to our Members page!
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-4 uppercase tracking-wider font-[var(--font-playfair)]">
                  GCash QR Code
                </h3>
                <div className="bg-[#FAF8F5] border border-[#E5DDD3] p-8 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 text-sm text-center border border-[#E5DDD3]">
                    GCash QR Code
                    <br />
                    Coming Soon
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#1A1A2E] mb-4 uppercase tracking-wider font-[var(--font-playfair)]">
                  Membership Benefits
                </h3>
                <ul className="space-y-3 text-sm text-[#6B7280]">
                  {benefits.map((benefit) => (
                    <li key={benefit} className="flex items-start gap-3">
                      <span className="w-5 h-5 rounded-full bg-gradient-to-br from-[#D4AF37] to-[#E8C84A] flex items-center justify-center mt-0.5 shrink-0">
                        <Check className="w-3 h-3 text-[#1A1A2E]" />
                      </span>
                      {benefit}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
