"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MapPin, Mail, Clock } from "lucide-react";
import FacebookIcon from "./FacebookIcon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/members", label: "Members" },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/blog", label: "Blog" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Dark Bar */}
      <div className="bg-[#3a3d44] text-white text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61591420257367"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#fcb315] transition-colors"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5">
              <Clock className="w-3 h-3 text-[#fcb315]" />
              Mon - Sat, 8:00 AM - 5:00 PM
            </span>
            <span className="flex items-center gap-1.5">
              <MapPin className="w-3 h-3 text-[#fcb315]" />
              Kumintang Ilaya, Batangas City
            </span>
            <span className="flex items-center gap-1.5">
              <Mail className="w-3 h-3 text-[#fcb315]" />
              info@lgbt-ku-ila.vercel.app
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white shadow-sm">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg"
                alt="LGBTQIA++ Ku-Ila Logo"
                width={50}
                height={50}
                className="rounded-full object-cover"
              />
              <div className="flex flex-col">
                <span className="text-xl font-bold text-[#3a3d44] leading-tight">
                  LGBTQIA++ Ku-Ila
                </span>
                <span className="text-xs text-[#e85242] font-medium">
                  Kumintang Ilaya
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => (
                <Link
                  key={link.href}
                  href={link.href}
                  className="px-4 py-2 text-sm font-medium text-[#787878] hover:text-[#e85242] transition-colors uppercase tracking-wide"
                >
                  {link.label}
                </Link>
              ))}
              <Link
                href="/contact"
                className="ml-3 btn-theme btn-theme-secondary text-sm"
              >
                Support Us
              </Link>
            </nav>

            <button
              onClick={() => setIsOpen(!isOpen)}
              className="lg:hidden p-2 text-[#3a3d44]"
              aria-label="Toggle navigation"
            >
              {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#e4e4e4]">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-[#787878] hover:text-[#e85242] transition-colors uppercase tracking-wide"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/contact"
              onClick={() => setIsOpen(false)}
              className="block mt-2 btn-theme btn-theme-secondary text-center text-sm"
            >
              Support Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
