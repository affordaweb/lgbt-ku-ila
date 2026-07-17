import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin, Heart } from "lucide-react";
import FacebookIcon from "./FacebookIcon";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* Support Us - Gold accent bar */}
      <div className="bg-gradient-to-r from-[#e85242] to-[#f3702b] py-12">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-2xl font-bold tracking-wide">Support Us</h3>
            <p className="text-white/70 text-sm mt-1 max-w-md">
              Bawat piso mo, pag-asa at lakas ang naibibigay sa komunidad. Mag-donate na!
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white/10 backdrop-blur-sm p-3 rounded-lg border border-white/20">
              <div className="w-24 h-24 flex items-center justify-center text-white/50 text-xs text-center">
                GCash QR
                <br />
                Coming Soon
              </div>
            </div>
            <div className="text-white text-sm">
              <p className="font-bold text-[#f3702b]">GCash</p>
              <p className="text-white/60">Scan to donate</p>
            </div>
          </div>
        </div>
      </div>

      {/* Main Footer - dark */}
      <div className="bg-[#3a3d44]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
            {/* About */}
            <div>
              <Link href="/" className="flex items-center gap-3 mb-6">
                <Image
                  src="/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg"
                  alt="LGBTQIA++ Ku-Ila Logo"
                  width={48}
                  height={48}
                  className="rounded-full object-cover ring-2 ring-[#f3702b]/30"
                />
                <div>
                  <h3 className="text-lg font-bold tracking-wide">LGBTQIA++ Ku-Ila</h3>
                  <p className="text-xs text-[#f3702b]">Kumintang Ilaya</p>
                </div>
              </Link>
              <p className="text-gray-500 text-sm leading-relaxed mb-6">
                The mission of our community center is to enhance and sustain the
                health and well-being of the LGBTQIA++ community through programs
                and services that create community and empower individuals.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61591420257367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#f3702b] hover:text-[#f3702b] transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Our Contacts */}
            <div>
              <h3 className="text-lg font-bold mb-6 tracking-wide">Our Contacts</h3>
              <ul className="space-y-4 text-gray-500 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#f3702b] mt-0.5 shrink-0" />
                  <span>Kumintang Ilaya, Batangas City, Philippines</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#f3702b] mt-0.5 shrink-0" />
                  <span>lgbtkuila@outlook.com</span>
                </li>
              </ul>
            </div>

            {/* Quick Links */}
            <div>
              <h3 className="text-lg font-bold mb-6 font-[var(--font-open-sans)] tracking-wide">Quick Links</h3>
              <ul className="space-y-3 text-sm">
                <li>
                  <Link href="/" className="text-gray-500 hover:text-[#f3702b] transition-colors">Home</Link>
                </li>
                <li>
                  <Link href="/about" className="text-gray-500 hover:text-[#f3702b] transition-colors">About Us</Link>
                </li>
                <li>
                  <Link href="/members" className="text-gray-500 hover:text-[#f3702b] transition-colors">Members</Link>
                </li>
                <li>
                  <Link href="/gallery" className="text-gray-500 hover:text-[#f3702b] transition-colors">Gallery</Link>
                </li>
                <li>
                  <Link href="/events" className="text-gray-500 hover:text-[#f3702b] transition-colors">Events</Link>
                </li>
                <li>
                  <Link href="/contact" className="text-gray-500 hover:text-[#f3702b] transition-colors">Contact</Link>
                </li>
                <li>
                  <Link href="/become-member" className="text-gray-500 hover:text-[#f3702b] transition-colors">Become a Member</Link>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - darker */}
      <div className="bg-[#1f222b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-600 text-xs">
            &copy; {new Date().getFullYear()} LGBTQIA++ Kumintang Ilaya. All
            rights reserved.
          </p>
          <p className="text-gray-600 text-xs">
            Made with <Heart className="w-3 h-3 inline text-[#f3702b]" /> for the{" "}
            <a
              href="https://www.affordawebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#f3702b] transition-colors underline"
            >
              Community
            </a>
          </p>
        </div>
      </div>
    </footer>
  );
}
