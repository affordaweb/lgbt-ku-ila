import { Metadata } from "next";
import { notFound } from "next/navigation";
import Image from "next/image";
import Link from "next/link";
import { ArrowLeft, Calendar, MapPin } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import { pastEvents } from "@/lib/data";

export function generateStaticParams() {
  return pastEvents.map((event) => ({
    slug: event.slug,
  }));
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>;
}): Promise<Metadata> {
  const { slug } = await params;
  const event = pastEvents.find((e) => e.slug === slug);

  if (!event) {
    return { title: "Event Not Found" };
  }

  return {
    title: event.title,
    description: event.description,
  };
}

export default async function EventPage({
  params,
}: {
  params: Promise<{ slug: string }>;
}) {
  const { slug } = await params;
  const event = pastEvents.find((e) => e.slug === slug);

  if (!event) {
    notFound();
  }

  return (
    <main>
      <HeroSection
        title={event.title}
        subtitle={`Home / Events / ${event.title}`}
        backgroundImage={event.image}
      />

      <section className="section-padding bg-white">
        <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-12">
            <div className="relative h-80 md:h-[480px] overflow-hidden">
              <div className="absolute inset-0 border border-[#D4AF37]/20 z-10 m-5" />
              <Image
                src={event.image}
                alt={event.title}
                fill
                className="object-cover"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#D4AF37]/30 text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4">
                Event Details
              </div>
              <h1 className="text-4xl font-bold text-[#1A1A2E] mb-6">
                {event.title}
              </h1>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-[#6B7280]">
                  <Calendar className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-[#6B7280]">
                  <MapPin className="w-4 h-4 text-[#D4AF37]" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>

              <div className="w-16 h-0.5 bg-gradient-to-r from-[#D4AF37] to-transparent mb-6" />

              <p className="text-[#6B7280] leading-relaxed text-lg">
                {event.description}
              </p>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/events" className="btn-luxury btn-luxury-outline inline-flex items-center gap-2" style={{ color: '#1A1A2E', borderColor: '#E5DDD3' }}>
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
