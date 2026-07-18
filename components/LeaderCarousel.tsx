"use client";

import { useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import { ChevronLeft, ChevronRight } from "lucide-react";
import FacebookIcon from "./FacebookIcon";
import { members } from "@/lib/data";

const leaders = members.filter((m) => m.role !== "Member");

export default function LeaderCarousel() {
  const scrollRef = useRef<HTMLDivElement>(null);

  const scroll = (dir: "left" | "right") => {
    if (!scrollRef.current) return;
    const amount = 340;
    scrollRef.current.scrollBy({
      left: dir === "left" ? -amount : amount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative">
      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto snap-x snap-mandatory scrollbar-hide pb-4"
        style={{ scrollbarWidth: "none", msOverflowStyle: "none" }}
      >
        {leaders.map((member) => (
          <Link
            key={member.slug}
            href={`/members/${member.slug}`}
            className="snap-start shrink-0 w-[300px] group"
          >
            <div className="bg-white rounded-2xl overflow-hidden border border-[#E5E7EB] card-hover">
              <div className="relative aspect-[4/5] overflow-hidden">
                <Image
                  src={member.image}
                  alt={member.name}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg text-[#1F2937] group-hover:text-[#F15A4A] transition-colors">
                  {member.name}
                </h3>
                <p className="text-xs font-semibold text-[#F15A4A] uppercase tracking-wider mt-1">
                  {member.role}
                </p>
                {member.facebookUrl && (
                  <div className="mt-3 pt-3 border-t border-[#E5E7EB]">
                    <a
                      href={member.facebookUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      onClick={(e) => e.stopPropagation()}
                      className="inline-flex items-center gap-2 text-sm text-[#374151] hover:text-[#F15A4A] transition-colors"
                    >
                      <FacebookIcon className="w-4 h-4" />
                      <span className="text-xs">Facebook</span>
                    </a>
                  </div>
                )}
              </div>
            </div>
          </Link>
        ))}
      </div>
      <div className="hidden lg:flex justify-end gap-3 mt-6">
        <button
          onClick={() => scroll("left")}
          className="w-12 h-12 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:border-[#F15A4A] hover:text-[#F15A4A] transition-all bg-white shadow-sm"
          aria-label="Previous"
        >
          <ChevronLeft className="w-5 h-5" />
        </button>
        <button
          onClick={() => scroll("right")}
          className="w-12 h-12 rounded-full border border-[#E5E7EB] flex items-center justify-center hover:border-[#F15A4A] hover:text-[#F15A4A] transition-all bg-white shadow-sm"
          aria-label="Next"
        >
          <ChevronRight className="w-5 h-5" />
        </button>
      </div>
    </div>
  );
}
