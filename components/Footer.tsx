import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Heart, ArrowRight } from "lucide-react";
import FacebookIcon from "./FacebookIcon";
import { pridePartners } from "@/lib/data";

const partnerGroups = [
  { label: "Major Partners", partners: pridePartners.filter(partner => partner.isPublished && partner.partnerLevel === "major-partner") },
  { label: "Community Partners", partners: pridePartners.filter(partner => partner.isPublished && partner.partnerLevel === "community-partner") },
  { label: "Pride March Contributors", partners: pridePartners.filter(partner => partner.isPublished && partner.partnerLevel === "event-contributor") },
];

export default function Footer() {
  return (
    <footer className="bg-[#0A1D4A] text-white">
      <div className="max-w-[1300px] mx-auto px-6 lg:px-10 py-16 lg:py-20">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-5 gap-12 lg:gap-16">
          <div className="lg:col-span-1">
            <Link href="/" className="flex items-center gap-3 mb-5">
              <Image
                src="/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg"
                alt="LGBTQIA++ SILBI Kumintang Ilaya Logo"
                width={44}
                height={44}
                className="rounded-full object-cover ring-2 ring-[#F15A24]/40"
              />
              <div>
                <h3 className="text-base font-semibold leading-tight">LGBTQIA++ SILBI</h3>
                <p className="text-[10px] font-medium text-[#F15A24] tracking-wider uppercase">Kumintang Ilaya</p>
              </div>
            </Link>
            <p className="text-white/60 text-sm leading-relaxed mb-6 max-w-xs">
              Empowering the LGBTQIA++ community through love, solidarity, advocacy, and human rights. Together, we build a more inclusive Kumintang Ilaya.
            </p>
            <div className="flex gap-3 flex-wrap">
              <a
                href="https://www.facebook.com/profile.php?id=61591420257367"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#F15A24] hover:text-[#F15A24] transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
              </a>
              <a
                href="https://www.instagram.com/lgbtkuila"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#F15A24] hover:text-[#F15A24] transition-all"
                aria-label="Instagram"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16a4 4 0 110-8 4 4 0 010 8zm6.406-11.845a1.44 1.44 0 100 2.881 1.44 1.44 0 000-2.881z"/></svg>
              </a>
              <a
                href="https://www.tiktok.com/@lgbtkuila"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#F15A24] hover:text-[#F15A24] transition-all"
                aria-label="TikTok"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M12.525.02c1.31-.02 2.61-.01 3.91-.02.08 1.53.63 3.09 1.75 4.17 1.12 1.11 2.7 1.62 4.24 1.79v4.03c-1.44-.05-2.89-.35-4.2-.97-.57-.26-1.1-.59-1.62-.93-.01 2.92.01 5.84-.02 8.75-.08 1.4-.54 2.79-1.35 3.94-1.31 1.92-3.58 3.17-5.91 3.21-1.43.08-2.86-.31-4.08-1.03-2.02-1.19-3.44-3.37-3.65-5.71-.02-.5-.03-1-.01-1.49.18-1.9 1.12-3.72 2.58-4.96 1.66-1.44 3.98-2.13 6.15-1.72.02 1.48-.04 2.96-.04 4.44-.99-.32-2.15-.23-3.02.37-.63.41-1.11 1.04-1.36 1.75-.21.51-.15 1.07-.14 1.61.24 1.64 1.82 3.02 3.5 2.87 1.12-.01 2.19-.66 2.77-1.61.19-.33.4-.67.41-1.06.1-1.79.06-3.57.07-5.36.01-4.03-.01-8.05.02-12.07z"/></svg>
              </a>
              <a
                href="https://www.youtube.com/@lgbtkuila"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#F15A24] hover:text-[#F15A24] transition-all"
                aria-label="YouTube"
              >
                <svg className="w-4 h-4" viewBox="0 0 24 24" fill="currentColor" xmlns="http://www.w3.org/2000/svg"><path d="M23.498 6.186a3.016 3.016 0 00-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 00.502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 002.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 002.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z"/></svg>
              </a>
            </div>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/80">Programs</h4>
            <ul className="space-y-3 text-white/60 text-sm">
              {["Community Support", "Mental Health", "Legal Assistance", "Youth Leadership", "Advocacy"].map((program) => (
                <li key={program}>{program}</li>
              ))}
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/80">Get in Touch</h4>
            <ul className="space-y-4 text-white/60 text-sm">
              <li className="flex items-start gap-3">
                <MapPin className="w-4 h-4 text-[#F15A24] mt-0.5 shrink-0" />
                <span>Kumintang Ilaya, Batangas City, Philippines</span>
              </li>
              <li className="flex items-start gap-3">
                <Mail className="w-4 h-4 text-[#F15A24] mt-0.5 shrink-0" />
                <span>lgbtkuila@outlook.com</span>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/80">Quick Links</h4>
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
                    className="text-white/60 text-sm hover:text-[#F15A24] transition-colors inline-flex items-center gap-2"
                  >
                    <ArrowRight className="w-3 h-3" />
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          <div className="lg:justify-self-end">
            <h4 className="text-sm font-semibold uppercase tracking-wider mb-6 text-white/80">Share this website</h4>
            <a href="/" className="inline-flex items-center gap-3 rounded-2xl border border-white/15 bg-white/5 p-3 text-left transition hover:border-[#F15A24]/70 hover:bg-white/10" aria-label="Share this website with the Ku-Ila QR code">
              <img src="/share-qr" width="96" height="96" alt="QR code for the LGBTQIA++ SILBI Kumintang Ilaya website" className="h-24 w-24 rounded-lg bg-white p-1" />
              <span className="hidden max-w-[98px] text-sm font-semibold leading-snug text-white xl:inline">Scan to<br /><em className="font-[family-name:var(--font-pacifico)] text-base font-normal text-[#F4A137]">share</em></span>
            </a>
          </div>
        </div>

        <section className="mt-16 border-t border-white/15 pt-10" aria-labelledby="footer-pride-partners">
          <div className="mb-8 flex flex-col justify-between gap-3 sm:flex-row sm:items-end">
            <div>
              <p className="mb-2 text-[10px] font-bold uppercase tracking-[.2em] text-[#F15A24]">With gratitude</p>
              <h4 id="footer-pride-partners" className="font-[family-name:var(--font-heading)] text-2xl font-medium text-white">Pride Partners</h4>
            </div>
            <Link href="/pride-partners" className="inline-flex items-center gap-2 text-sm font-semibold text-white/75 transition-colors hover:text-[#F15A24]">See their story <ArrowRight className="h-4 w-4" /></Link>
          </div>
          <div className="grid grid-cols-1 gap-8 md:grid-cols-3">
            {partnerGroups.map(group => <div key={group.label}><h5 className="mb-4 text-[10px] font-bold uppercase tracking-[.16em] text-[#F4A137]">{group.label}</h5><ul className="space-y-2.5">{group.partners.map(partner => <li key={partner.name} className="text-sm leading-snug text-white/65">{partner.name}</li>)}</ul></div>)}
          </div>
        </section>
      </div>

      <div className="border-t border-white/15">
        <div className="max-w-[1300px] mx-auto px-6 lg:px-10 py-6 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-white/45 text-xs">
            &copy; {new Date().getFullYear()} LGBTQIA++ Kumintang Ilaya. All rights reserved.
          </p>
          <p className="text-white/45 text-xs flex items-center gap-1">
            Made with <Heart className="w-3 h-3 text-[#F15A24]" /> for the{" "}
            <a
              href="https://www.affordawebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#F15A24] transition-colors underline"
            >
              Community
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
