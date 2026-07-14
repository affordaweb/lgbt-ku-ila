import type { Metadata } from "next";
import { Heart, QrCode, Shield, Gift } from "lucide-react";
import HeroSection from "@/components/HeroSection";

export const metadata: Metadata = {
  title: "Support Us | LGBTQIA++ Kumintang Ilaya",
  description:
    "Support LGBTQIA++ Kumintang Ilaya through GCash donations. Every contribution helps us sustain our programs and services for the community.",
};

export default function SupportPage() {
  return (
    <main>
      <HeroSection
        title="Support Us"
        subtitle="Home / Support Us"
        backgroundImage="/images/stock/stock-05.jpg"
      />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-14">
            <div className="w-16 h-16 rounded-full bg-gradient-to-br from-[#D4AF37]/10 to-[#7B2D8E]/10 flex items-center justify-center mx-auto mb-6">
              <Heart className="w-8 h-8 text-[#D4AF37]" />
            </div>
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4">
              Make a Difference
            </div>
            <h1 className="text-4xl md:text-5xl font-bold text-[#1A1A2E] mb-4">
              Support Our Community
            </h1>
            <p className="text-[#6B7280] text-lg max-w-2xl mx-auto leading-relaxed">
              Your donation helps us sustain programs and services that empower the LGBTQIA++ community in Kumintang Ilaya. Bawat piso mo, pag-asa at lakas ang naibibigay sa komunidad.
            </p>
          </div>

          <div className="grid md:grid-cols-2 gap-12 items-start">
            {/* QR Code */}
            <div className="text-center">
              <div className="bg-[#FAF8F5] border border-[#E5DDD3] p-10 mb-6">
                <div className="w-56 h-56 mx-auto bg-gradient-to-br from-gray-100 to-gray-200 flex items-center justify-center text-gray-400 text-sm border border-[#E5DDD3]">
                  <div className="text-center">
                    <QrCode className="w-12 h-12 mx-auto mb-2" />
                    <p>GCash QR Code</p>
                    <p className="text-xs">Coming Soon</p>
                  </div>
                </div>
              </div>
              <p className="text-sm text-[#6B7280]">
                Scan the QR code using the GCash app to donate
              </p>
            </div>

            {/* Instructions */}
            <div className="space-y-8">
              <div>
                <h2 className="text-xl font-bold text-[#1A1A2E] mb-4 flex items-center gap-3">
                  <span className="w-8 h-8 rounded-full bg-[#D4AF37]/10 flex items-center justify-center">
                    <Gift className="w-4 h-4 text-[#D4AF37]" />
                  </span>
                  How to Donate via GCash
                </h2>
                <ol className="space-y-4 text-sm text-[#6B7280]">
                  <li className="flex gap-4">
                    <span className="font-bold text-[#D4AF37] text-lg leading-none shrink-0">1</span>
                    Open the GCash app on your phone
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-[#D4AF37] text-lg leading-none shrink-0">2</span>
                    Tap &quot;Scan QR&quot; and scan the QR code above
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-[#D4AF37] text-lg leading-none shrink-0">3</span>
                    Enter the amount you wish to donate
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-[#D4AF37] text-lg leading-none shrink-0">4</span>
                    Tap &quot;Send&quot; to complete your donation
                  </li>
                  <li className="flex gap-4">
                    <span className="font-bold text-[#D4AF37] text-lg leading-none shrink-0">5</span>
                    Save the reference number as proof of donation
                  </li>
                </ol>
              </div>

              <div className="bg-[#FAF8F5] border border-[#E5DDD3] p-6">
                <div className="flex items-start gap-3">
                  <Shield className="w-5 h-5 text-[#D4AF37] mt-0.5 shrink-0" />
                  <div>
                    <h3 className="text-sm font-bold text-[#1A1A2E] mb-1">Secure Donation</h3>
                    <p className="text-xs text-[#6B7280] leading-relaxed">
                      All donations are processed through GCash, a secure mobile payment platform. We are committed to transparency in how your donations are used to support our programs and services.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className="mt-16 text-center border-t border-[#E5DDD3] pt-12">
            <h2 className="text-2xl font-bold text-[#1A1A2E] mb-4">
              Want to Become a Member?
            </h2>
            <p className="text-[#6B7280] mb-6">
              Join our community and be part of the movement. Membership is open to all LGBTQIA++ individuals and allies.
            </p>
            <a href="/become-member" className="btn-luxury btn-luxury-primary inline-flex items-center gap-2">
              Become a Member
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
