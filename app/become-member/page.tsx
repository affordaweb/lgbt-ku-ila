import type { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import MembershipForm from "@/components/MembershipForm";

export const metadata: Metadata = {
  title: "Become a Member | LGBTQIA++ Kumintang Ilaya",
  description:
    "Join our community! Membership is open to all. Sign up today and be part of the movement.",
};

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
          <div className="grid md:grid-cols-2 gap-12">
            {/* Form */}
            <div>
              <h2 className="section-heading text-2xl mb-6">
                Membership Application
              </h2>
              <MembershipForm />
            </div>

            {/* Info Sidebar */}
            <div className="space-y-8">
              <div>
                <h3 className="text-lg font-bold text-[#3a3d44] mb-4 uppercase">
                  Membership Fee
                </h3>
                <div className="bg-[#f7f7f7] border border-[#e4e4e4] p-6 text-center">
                  <p className="text-4xl font-bold text-[#e85242] mb-2">300 PHP</p>
                  <p className="text-sm text-[#787878]">One-time membership fee</p>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#3a3d44] mb-4 uppercase">
                  How to Pay
                </h3>
                <ol className="space-y-3 text-sm text-[#787878]">
                  <li className="flex gap-3">
                    <span className="font-bold text-[#e85242]">1.</span>
                    Fill out the membership form
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#e85242]">2.</span>
                    Send 300 PHP via GCash
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#e85242]">3.</span>
                    Include your GCash reference number in the form
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#e85242]">4.</span>
                    Wait for confirmation of your payment
                  </li>
                  <li className="flex gap-3">
                    <span className="font-bold text-[#e85242]">5.</span>
                    You will be added to our Members page!
                  </li>
                </ol>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#3a3d44] mb-4 uppercase">
                  GCash QR Code
                </h3>
                <div className="bg-[#f7f7f7] border border-[#e4e4e4] p-6 flex items-center justify-center">
                  <div className="w-48 h-48 bg-gray-200 flex items-center justify-center text-gray-400 text-sm text-center">
                    GCash QR Code
                    <br />
                    Coming Soon
                  </div>
                </div>
              </div>

              <div>
                <h3 className="text-lg font-bold text-[#3a3d44] mb-4 uppercase">
                  Membership Benefits
                </h3>
                <ul className="space-y-2 text-sm text-[#787878]">
                  <li className="flex items-start gap-2">
                    <span className="text-[#03a8cb] mt-1">&#10003;</span>
                    Official LGBTQIA++ Ku-Ila member
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#03a8cb] mt-1">&#10003;</span>
                    Listed on our Members page
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#03a8cb] mt-1">&#10003;</span>
                    Access to community events and programs
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#03a8cb] mt-1">&#10003;</span>
                    Legal assistance and advocacy support
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-[#03a8cb] mt-1">&#10003;</span>
                    Health and wellness resources
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
