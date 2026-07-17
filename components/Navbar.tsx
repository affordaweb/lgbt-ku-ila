"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X, MapPin, Mail, ChevronDown } from "lucide-react";
import FacebookIcon from "./FacebookIcon";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/about", label: "About", hasDropdown: true },
  { href: "/members", label: "Members", hasDropdown: true },
  { href: "/gallery", label: "Gallery" },
  { href: "/events", label: "Events" },
  { href: "/contact", label: "Contact" },
];

const aboutDropdown = [
  { href: "/about", label: "About Us" },
  { href: "/transparency", label: "Transparency" },
];

const membersDropdown = [
  { href: "/members", label: "All Members" },
  { href: "/become-member", label: "Become a Member" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <header className="sticky top-0 z-50">
      {/* Top Gold Bar */}
      <div className="bg-[#3a3d44] text-white text-xs hidden md:block">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex items-center justify-between h-10">
          <div className="flex items-center gap-6">
            <a
              href="https://www.facebook.com/profile.php?id=61591420257367"
              target="_blank"
              rel="noopener noreferrer"
              className="hover:text-[#e85242] transition-colors"
            >
              <FacebookIcon className="w-3.5 h-3.5" />
            </a>
          </div>
          <div className="flex items-center gap-6">
            <span className="flex items-center gap-1.5 text-gray-400">
              <MapPin className="w-3 h-3 text-[#e85242]" />
              Kumintang Ilaya, Batangas City
            </span>
            <span className="flex items-center gap-1.5 text-gray-400">
              <Mail className="w-3 h-3 text-[#e85242]" />
              lgbtkuila@outlook.com
            </span>
          </div>
        </div>
      </div>

      {/* Main Header */}
      <div className="bg-white/95 backdrop-blur-md border-b border-[#e4e4e4]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex items-center justify-between h-20">
            <Link href="/" className="flex items-center gap-3">
              <Image
                src="/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg"
                alt="LGBTQIA++ SILBI Kumintang Ilaya Logo"
                width={50}
                height={50}
                className="rounded-full object-cover ring-2 ring-[#e85242]/30"
              />
              <div className="flex flex-col">
                <span className="text-lg font-bold text-[#3a3d44] leading-tight tracking-wide">
                  LGBTQIA++ SILBI
                </span>
                <span className="text-xs font-medium text-[#e85242]">
                  Kumintang Ilaya
                </span>
              </div>
            </Link>

            <nav className="hidden lg:flex items-center gap-1">
              {navLinks.map((link) => {
                const dropdownItems = link.label === "About"
                  ? aboutDropdown
                  : link.label === "Members"
                    ? membersDropdown
                    : null;

                return link.hasDropdown ? (
                  <div key={link.href} className="relative group">
                    <Link
                      href={link.href}
                      className="px-4 py-2 text-sm font-medium text-[#787878] hover:text-[#e85242] transition-colors uppercase tracking-wider inline-flex items-center gap-1"
                    >
                      {link.label}
                      <ChevronDown className="w-3 h-3" />
                    </Link>
                    <div className="absolute top-full left-0 bg-white/95 backdrop-blur-md border border-[#e4e4e4] shadow-xl opacity-0 invisible group-hover:opacity-100 group-hover:visible transition-all min-w-[200px] z-50">
                      <div className="py-2">
                        {dropdownItems?.map((item) => (
                          <Link
                            key={item.href}
                            href={item.href}
                            className="block px-5 py-3 text-sm text-[#787878] hover:text-[#e85242] hover:bg-[#f7f7f7] transition-colors uppercase tracking-wider"
                          >
                            {item.label}
                          </Link>
                        ))}
                      </div>
                    </div>
                  </div>
                ) : (
                  <Link
                    key={link.href}
                    href={link.href}
                    className="px-4 py-2 text-sm font-medium text-[#787878] hover:text-[#e85242] transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                );
              })}
              <Link
                href="/support"
                className="ml-3 btn-theme btn-theme-secondary text-xs"
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
        <div className="lg:hidden bg-white/95 backdrop-blur-md border-t border-[#e4e4e4]">
          <div className="px-4 py-3 space-y-1">
            {navLinks.map((link) => {
              const dropdownItems = link.label === "About"
                ? aboutDropdown
                : link.label === "Members"
                  ? membersDropdown
                  : null;

              return link.hasDropdown ? (
                <div key={link.href}>
                  <Link
                    href={link.href}
                    onClick={() => setIsOpen(false)}
                    className="block px-4 py-3 text-sm font-medium text-[#787878] hover:text-[#e85242] transition-colors uppercase tracking-wider"
                  >
                    {link.label}
                  </Link>
                  {dropdownItems?.map((item) => (
                    <Link
                      key={item.href}
                      href={item.href}
                      onClick={() => setIsOpen(false)}
                      className="block pl-8 pr-4 py-2 text-sm text-[#787878] hover:text-[#e85242] transition-colors"
                    >
                      {item.label}
                    </Link>
                  ))}
                </div>
              ) : (
                <Link
                  key={link.href}
                  href={link.href}
                  onClick={() => setIsOpen(false)}
                  className="block px-4 py-3 text-sm font-medium text-[#787878] hover:text-[#e85242] transition-colors uppercase tracking-wider"
                >
                  {link.label}
                </Link>
              );
            })}
            <Link
              href="/support"
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
