import Image from "next/image";
import Link from "next/link";
import { Calendar, MapPin } from "lucide-react";
import type { Event } from "@/lib/data";

interface EventCardProps {
  event: Event;
  featured?: boolean;
}

export default function EventCard({ event, featured }: EventCardProps) {
  return (
    <Link
      href={`/events/${event.slug}`}
      className={`group block rounded-2xl overflow-hidden border border-[#E5E7EB] card-hover bg-white ${
        featured ? "lg:col-span-2 lg:row-span-2" : ""
      }`}
    >
      <div className={`relative ${featured ? "aspect-[16/10] lg:aspect-[16/9]" : "aspect-[16/10]"}`}>
        <Image
          src={event.image}
          alt={event.title}
          fill
          className="object-cover group-hover:scale-105 transition-transform duration-700"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent" />
        <div className="absolute bottom-0 left-0 right-0 p-5">
          <span className="inline-block px-3 py-1 bg-[#F15A4A] text-white text-[10px] font-semibold uppercase tracking-wider rounded-full mb-2">
            {event.date}
          </span>
        </div>
      </div>
      <div className="p-5">
        <h3 className={`font-heading text-[#1F2937] group-hover:text-[#F15A4A] transition-colors ${
          featured ? "text-xl" : "text-base"
        }`}>
          {event.title}
        </h3>
        <div className="flex items-center gap-2 mt-2 text-xs text-[#374151]">
          <MapPin className="w-3 h-3" />
          <span>{event.location}</span>
        </div>
        <p className={`text-[#374151] mt-2 leading-relaxed line-clamp-2 ${
          featured ? "text-sm" : "text-xs"
        }`}>
          {event.description}
        </p>
      </div>
    </Link>
  );
}
