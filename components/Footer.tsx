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
            <div className="flex gap-3">
              <a
                href="https://www.facebook.com/profile.php?id=61591420257367"
                target="_blank"
                rel="noopener noreferrer"
                className="w-10 h-10 rounded-full border border-white/30 flex items-center justify-center hover:border-[#F15A24] hover:text-[#F15A24] transition-all"
                aria-label="Facebook"
              >
                <FacebookIcon className="w-4 h-4" />
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
