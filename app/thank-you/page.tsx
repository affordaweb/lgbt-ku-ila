import type { Metadata } from "next";
import Link from "next/link";
import { CheckCircle, ArrowLeft, Home } from "lucide-react";

export const metadata: Metadata = {
  title: "Thank You | LGBTQIA++ Kumintang Ilaya",
  description: "Thank you for reaching out to LGBTQIA++ Kumintang Ilaya. We appreciate your message and will get back to you soon.",
};

export default function ThankYouPage() {
  return (
    <main>
      <section className="min-h-[70vh] flex items-center justify-center bg-white">
        <div className="max-w-lg mx-auto px-4 text-center">
          <div className="w-24 h-24 rounded-full bg-gradient-to-br from-[#f3702b]/10 to-[#e85242]/10 flex items-center justify-center mx-auto mb-8">
            <CheckCircle className="w-12 h-12 text-[#f3702b]" />
          </div>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#f3702b]/30 text-[#f3702b] text-xs uppercase tracking-[0.2em] mb-6">
            Success
          </div>
          <h1 className="text-4xl md:text-5xl font-bold text-[#3a3d44] mb-4">
            Thank You!
          </h1>
          <p className="text-[#787878] text-lg mb-2">
            Your submission has been received.
          </p>
          <p className="text-[#787878] mb-10">
            We appreciate you reaching out to LGBTQIA++ Kumintang Ilaya. Our team will review your message and get back to you as soon as possible.
          </p>
          <div className="w-20 h-0.5 bg-gradient-to-r from-[#f3702b] to-transparent mx-auto mb-10" />
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link href="/" className="btn-theme btn-theme-primary inline-flex items-center gap-2">
              <Home className="w-4 h-4" />
              Back to Home
            </Link>
            <Link href="/contact" className="btn-theme btn-theme-outline inline-flex items-center gap-2" style={{ color: '#787878', borderColor: '#e4e4e4' }}>
              <ArrowLeft className="w-4 h-4" />
              Send Another Message
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
