import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Heart, ArrowRight } from "lucide-react";
import FacebookIcon from "./FacebookIcon";

export default function Footer() {
  return (
    <footer className="bg-[#1F2937] text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg"
                alt="LGBTQIA++ SILBI Kumintang Ilaya Logo"
                width={44}
                height={44}
                className="rounded-full object-cover ring-2 ring-[#F15A4A]/30"
              />
              <div>
                <h3 className="text-base font-semibold leading-tight">LGBTQIA++ SILBI</h3>
                <p className="text-[10px] font-medium text-[#F15A4A] tracking-wider uppercase">Kumintang Ilaya</p>
              </div>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering the LGBTQIA++ community through love, solidarity, advocacy, and human rights. Together, we build a more inclusive Kumintang Ilaya.
            </p>
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61591420257367"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#F15A4A] hover:text-[#F15A4A] transition-all hover:bg-[#F15A4A]/10"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">Quick Links</h4>
            <ul className="space-y-3">
              {[
                { href: "/", label: "Home" },
                { href: "/about", label: "About Us" },
                { href: "/members", label: "Members" },
                { href: "/events", label: "Events" },
                { href: "/gallery", label: "Gallery" },
              ].map((link) => (
                <li key={link.href}>
                  <Link
                    href={link.href}
                    className="text-gray-400 text-sm hover:text-[#F15A4A] transition-colors inline-flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">Programs</h4>
            <ul className="space-y-3 text-gray-400 text-sm">
              {["Community Support", "Mental Health", "Legal Assistance", "Youth Leadership", "Advocacy"].map((program) => (
                <li key={program}>{program}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-gray-300">Get in Touch</h4>
            <ul className="space-y-4 text-gray-400 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F15A4A] mt-0.5 shrink-0" />
                <span>Kumintang Ilaya, Batangas City, Philippines</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#F15A4A] mt-0.5 shrink-0" />
                <span>lgbtkuila@outlook.com</span>
              </li>
            </ul>
            <div className="mt-6">
              <h5 className="text-xs font-semibold uppercase tracking-wider text-gray-300 mb-3">Newsletter</h5>
              <div className="flex">
                <input
                  type="email"
                  placeholder="Your email"
                  className="bg-gray-700/50 border border-gray-600 text-sm px-4 py-2.5 rounded-l-full outline-none focus:border-[#F15A4A] transition-colors w-full text-white placeholder-gray-500"
                />
                <button className="bg-[#F15A4A] px-4 rounded-r-full hover:bg-[#d94a3a] transition-colors shrink-0">
                  <ArrowRight className="w-4 h-4" />
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <div className="border-t border-gray-700/50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} LGBTQIA++ Kumintang Ilaya. All rights reserved.
          </p>
          <p className="text-gray-500 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-[#F15A4A]" /> for the{" "}
            <a
              href="https://www.affordawebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F15A4A] transition-colors underline"
            >
              Community
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
