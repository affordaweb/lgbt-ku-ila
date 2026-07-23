"use client";

import { useState } from "react";
import { usePathname } from "next/navigation";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" }, { href: "/about", label: "About" }, { href: "/members", label: "Members" }, { href: "/member-center", label: "Member Center" }, { href: "/events", label: "Events" }, { href: "/gallery", label: "Gallery" }, { href: "/contact", label: "Contact" },
];

export default function Navbar() {
  const [isOpen, setIsOpen] = useState(false); const pathname = usePathname();
  const active = (href: string) => href === "/" ? pathname === href : pathname === href || pathname.startsWith(`${href}/`);
  return <header className="site-header fixed inset-x-0 top-0 z-50 border-b border-[#0A1D4A]/8 bg-[#f8f6f1]/[.98] shadow-[0_2px_14px_rgba(10,29,74,.04)] backdrop-blur-xl transition-none">
    <div className="mx-auto max-w-[1300px] px-6 lg:px-10"><div className="flex h-20 items-center justify-between lg:h-24">
      <Link href="/" className="flex items-center gap-3" onClick={() => setIsOpen(false)}><Image src="/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg" alt="LGBTQIA++ SILBI Kumintang Ilaya Logo" width={40} height={40} className="rounded-full object-cover ring-2 ring-[#0A1D4A]/10" /><div className="flex flex-col"><span className="text-base font-semibold leading-tight tracking-tight text-[#0A1D4A]">LGBTQIA++ SILBI</span><span className="text-[10px] font-bold uppercase tracking-wider text-[#F15A24]">Kumintang Ilaya</span></div></Link>
      <nav className="hidden items-center gap-1 lg:flex" aria-label="Primary navigation">{navLinks.map(link => link.href === "/contact" ? <Link key={link.href} href={link.href} className={`ml-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors ${active(link.href) ? "border-[#F15A24] bg-[#F15A24] text-white" : "border-[#0A1D4A] text-[#0A1D4A] hover:bg-[#0A1D4A] hover:text-white"}`}>{link.label}</Link> : <Link key={link.href} href={link.href} aria-current={active(link.href) ? "page" : undefined} className={`nav-link px-4 py-2 text-sm font-semibold tracking-wide transition-colors ${active(link.href) ? "text-[#F15A24]" : "text-[#0A1D4A] hover:text-[#F15A24]"}`}>{link.label}</Link>)}<Link href="/support" className="ml-3 inline-flex items-center rounded-full bg-[#F15A24] px-5 py-2.5 text-sm font-semibold text-white transition-colors hover:bg-[#cf4212]">Support Us</Link></nav>
      <button onClick={() => setIsOpen(value => !value)} className="p-2 text-[#0A1D4A] transition-colors hover:text-[#F15A24] lg:hidden" aria-label="Toggle navigation" aria-expanded={isOpen}>{isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}</button>
    </div></div>
    {isOpen ? <div className="border-t border-[#0A1D4A]/10 bg-[#f8f6f1] shadow-xl lg:hidden"><nav className="space-y-1 px-4 py-4" aria-label="Mobile navigation">{navLinks.map(link => <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} aria-current={active(link.href) ? "page" : undefined} className={`block rounded-lg px-4 py-3 text-sm font-semibold tracking-wide transition-colors ${active(link.href) ? "bg-[#F15A24]/10 text-[#F15A24]" : "text-[#0A1D4A] hover:bg-[#0A1D4A]/5 hover:text-[#F15A24]"}`}>{link.label}</Link>)}<Link href="/support" onClick={() => setIsOpen(false)} className="mt-3 block rounded-full bg-[#F15A24] px-4 py-3 text-center text-sm font-semibold text-white transition-colors hover:bg-[#cf4212]">Support Us</Link></nav></div> : null}
  </header>;
}
