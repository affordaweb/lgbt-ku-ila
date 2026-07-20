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
            <div className="overflow-hidden border border-[#e85242]/20 p-3 md:p-5">
              <Image
                src={event.image}
                alt={event.title}
                width={1200}
                height={1200}
                sizes="(max-width: 896px) 100vw, 896px"
                className="h-auto w-full object-contain"
              />
            </div>

            <div>
              <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-[#e85242]/30 text-[#e85242] text-xs uppercase tracking-[0.2em] mb-4">
                Event Details
              </div>
              <h1 className="text-4xl font-bold text-[#3a3d44] mb-6">
                {event.title}
              </h1>

              <div className="flex flex-wrap gap-6 mb-8">
                <div className="flex items-center gap-2 text-[#787878]">
                  <Calendar className="w-4 h-4 text-[#e85242]" />
                  <span className="text-sm">{event.date}</span>
                </div>
                <div className="flex items-center gap-2 text-[#787878]">
                  <MapPin className="w-4 h-4 text-[#e85242]" />
                  <span className="text-sm">{event.location}</span>
                </div>
              </div>

              <div className="w-16 h-0.5 bg-gradient-to-r from-[#e85242] to-transparent mb-6" />

              <p className="text-[#787878] leading-relaxed text-lg">
                {event.description}
              </p>

              <dl className="mt-10 grid gap-5 border-t border-[#e4e4e4] pt-8 sm:grid-cols-2">
                {event.details.map((detail) => (
                  <div key={detail.label}>
                    <dt className="text-xs font-semibold uppercase tracking-[0.16em] text-[#e85242]">
                      {detail.label}
                    </dt>
                    <dd className="mt-2 text-sm leading-relaxed text-[#787878]">
                      {detail.value}
                    </dd>
                  </div>
                ))}
              </dl>
            </div>
          </div>

          <div className="mt-16 text-center">
            <Link href="/events" className="btn-theme btn-theme-outline inline-flex items-center gap-2" style={{ color: '#3a3d44', borderColor: '#e4e4e4' }}>
              <ArrowLeft className="w-4 h-4" />
              Back to Events
            </Link>
          </div>
        </div>
      </section>
    </main>
  );
}
