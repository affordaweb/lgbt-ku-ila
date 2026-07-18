"use client";

import { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About" },
  { href: "/members", label: "Members" },
  { href: "/events", label: "Events" },
  { href: "/gallery", label: "Gallery" },
  { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <header
      className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
        scrolled ? "glass shadow-sm" : "bg-transparent"
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex items-center justify-between h-20 lg:h-24">
          <Link href="/" className="flex items-center gap-3">
            <Image
              src="/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg"
              alt="LGBTQIA++ SILBI Kumintang Ilaya Logo"
              width={40}
              height={40}
              className="rounded-full object-cover ring-2 ring-white/20"
            />
            <div className="flex flex-col">
              <span className={`text-base font-semibold leading-tight tracking-tight transition-colors ${scrolled ? "text-[#1F2937]" : "text-white"}`}>
                LGBTQIA++ SILBI
              </span>
              <span className="text-[10px] font-medium text-[#F15A4A] tracking-wider uppercase">
                Kumintang Ilaya
              </span>
            </div>
          </Link>

          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                className={`px-4 py-2 text-sm font-medium transition-colors tracking-wide ${
                  scrolled
                    ? "text-[#374151] hover:text-[#F15A4A]"
                    : "text-white/80 hover:text-white"
                }`}
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/support"
              className="ml-4 inline-flex items-center gap-2 px-5 py-2.5 text-sm font-semibold rounded-full bg-[#F15A4A] text-white hover:bg-[#d94a3a] transition-all hover:shadow-lg hover:shadow-[#F15A4A]/25"
            >
              Support Us
            </Link>
          </nav>

          <button
            onClick={() => setIsOpen(!isOpen)}
            className={`lg:hidden p-2 transition-colors ${
              scrolled ? "text-[#1F2937]" : "text-white"
            }`}
            aria-label="Toggle navigation"
          >
            {isOpen ? <X className="w-6 h-6" /> : <Menu className="w-6 h-6" />}
          </button>
        </div>
      </div>

      {isOpen && (
        <div className="lg:hidden bg-white border-t border-[#E5E7EB] shadow-xl">
          <div className="px-4 py-4 space-y-1">
            {navLinks.map((link) => (
              <Link
                key={link.href}
                href={link.href}
                onClick={() => setIsOpen(false)}
                className="block px-4 py-3 text-sm font-medium text-[#374151] hover:text-[#F15A4A] transition-colors tracking-wide rounded-lg hover:bg-[#F8FAFC]"
              >
                {link.label}
              </Link>
            ))}
            <Link
              href="/support"
              onClick={() => setIsOpen(false)}
              className="block mt-3 px-4 py-3 text-sm font-semibold text-center rounded-full bg-[#F15A4A] text-white hover:bg-[#d94a3a] transition-colors"
            >
              Support Us
            </Link>
          </div>
        </div>
      )}
    </header>
  );
}
