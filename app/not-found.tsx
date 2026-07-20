import Link from "next/link";
import { ArrowLeft, Home } from "lucide-react";

export default function NotFound() {
  return (
    <main className="grid min-h-[72vh] place-items-center bg-[#f7f5f0] px-6 py-24 text-center text-[#0a1d4a]">
      <div className="max-w-xl">
        <p className="mb-5 text-[10px] font-extrabold uppercase tracking-[.2em] text-[#f15a24]">404 · Page not found</p>
        <h1 className="font-[family-name:var(--font-heading)] text-[clamp(2.5rem,7vw,5.5rem)] font-medium leading-[.95] tracking-[-.05em]">This page has<br />moved <em className="font-[family-name:var(--font-pacifico)] text-[#f15a24]">on.</em></h1>
        <p className="mx-auto mt-7 max-w-md leading-7 text-[#0a1d4a]/65">The link may be outdated, or the page may no longer be available. Let&apos;s help you find your way back to the community.</p>
        <div className="mt-9 flex flex-wrap justify-center gap-3">
          <Link href="/" className="inline-flex min-h-12 items-center gap-2 rounded-full bg-[#0a1d4a] px-6 text-sm font-bold text-white transition hover:-translate-y-0.5 hover:bg-[#f15a24]"><Home size={16} /> Back to home</Link>
          <Link href="/events" className="inline-flex min-h-12 items-center gap-2 rounded-full border border-[#0a1d4a]/20 px-6 text-sm font-bold transition hover:-translate-y-0.5 hover:border-[#f15a24] hover:text-[#f15a24]"><ArrowLeft size={16} /> View events</Link>
        </div>
      </div>
    </main>
  );
}
