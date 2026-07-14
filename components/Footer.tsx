import Link from "next/link";
import Image from "next/image";
import { Mail, MapPin } from "lucide-react";
import FacebookIcon from "./FacebookIcon";

export default function Footer() {
  return (
    <footer className="text-white">
      {/* Support Us Bar - orange */}
      <div className="bg-[#f3702b] py-10">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-col md:flex-row items-center justify-between gap-6">
          <div>
            <h3 className="text-xl font-bold">Support Us</h3>
            <p className="text-white/80 text-sm">
              Your support helps us build a more inclusive community
            </p>
          </div>
          <div className="flex items-center gap-4">
            <div className="bg-white p-3 rounded-lg">
              <div className="w-24 h-24 bg-gray-200 flex items-center justify-center text-gray-400 text-xs text-center">
                GCash QR
                <br />
                Coming Soon
              </div>
            </div>
            <div className="text-white text-sm">
              <p className="font-bold">GCash</p>
              <p className="text-white/80">Scan to donate</p>
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
                  className="rounded-full object-cover"
                />
                <div>
                  <h3 className="text-lg font-bold">LGBTQIA++ Ku-Ila</h3>
                  <p className="text-xs text-[#fcb315]">Kumintang Ilaya</p>
                </div>
              </Link>
              <p className="text-gray-400 text-sm leading-relaxed mb-6">
                The mission of our community center is to enhance and sustain the
                health and well-being of the LGBTQIA++ community through programs
                and services that create community and empower individuals.
              </p>
              <div className="flex gap-3">
                <a
                  href="https://www.facebook.com/profile.php?id=61591420257367"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-10 h-10 rounded-full border border-gray-600 flex items-center justify-center hover:border-[#fcb315] hover:text-[#fcb315] transition-colors"
                  aria-label="Facebook"
                >
                  <FacebookIcon className="w-5 h-5" />
                </a>
              </div>
            </div>

            {/* Our Contacts */}
            <div>
              <h3 className="text-lg font-bold mb-6">Our Contacts</h3>
              <ul className="space-y-4 text-gray-400 text-sm">
                <li className="flex items-start gap-3">
                  <MapPin className="w-5 h-5 text-[#fcb315] mt-0.5 shrink-0" />
                  <span>Kumintang Ilaya, Batangas City, Philippines</span>
                </li>
                <li className="flex items-start gap-3">
                  <Mail className="w-5 h-5 text-[#fcb315] mt-0.5 shrink-0" />
                  <span>lgbtkuila@outlook.com</span>
                </li>
              </ul>
            </div>

            {/* Recent Blogs */}
            <div>
              <h3 className="text-lg font-bold mb-6">Recent Blogs</h3>
              <ul className="space-y-4">
                <li className="flex gap-3">
                  <div className="w-16 h-16 shrink-0 relative overflow-hidden">
                    <Image
                      src="/images/stock/stock-03.jpg"
                      alt="Blog"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link href="/blog" className="text-sm text-white hover:text-[#fcb315] transition-colors leading-snug block">
                      Creating Spaces for Queer Families
                    </Link>
                    <span className="text-xs text-gray-500">Jan 17, 2018</span>
                  </div>
                </li>
                <li className="flex gap-3">
                  <div className="w-16 h-16 shrink-0 relative overflow-hidden">
                    <Image
                      src="/images/stock/stock-04.jpg"
                      alt="Blog"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div>
                    <Link href="/blog" className="text-sm text-white hover:text-[#fcb315] transition-colors leading-snug block">
                      Holiday Resources for LGBT Families
                    </Link>
                    <span className="text-xs text-gray-500">Jan 17, 2018</span>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>

      {/* Copyright - darker */}
      <div className="bg-[#1f222b]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col md:flex-row items-center justify-between gap-3">
          <p className="text-gray-500 text-xs">
            &copy; {new Date().getFullYear()} LGBTQIA++ Kumintang Ilaya. All
            rights reserved.
          </p>
          <p className="text-gray-500 text-xs">
            Made with <span className="text-[#e85242]">&#10084;</span> love for the{" "}
            <a
              href="https://www.affordawebsolutions.com"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fcb315] transition-colors underline"
            >
              Community
            </a>
          </p>
          <div className="flex gap-4 text-xs text-gray-500">
            <Link href="/about" className="hover:text-[#fcb315] transition-colors">
              Privacy Policy
            </Link>
            <Link href="/about" className="hover:text-[#fcb315] transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
