import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { Search, ArrowRight } from "lucide-react";
import { pastEvents } from "@/lib/data";

export const metadata: Metadata = {
  title: "Events",
  description:
    "Join Ku-Ila's events and activities that promote LGBTQIA++ rights, community building, health awareness, and cultural celebration.",
};

const categories = ["Advocacy", "Community", "Health", "Education", "Fundraiser"];

const tags = ["Pride", "Health", "Legal", "Youth", "Culture", "Workshop"];

const recentPosts = [
  "Pride Month Kicked Off with a Bang",
  "Legal Aid Workshop Highlights",
  "Community Health Day Recap",
  "Youth Summit Success Story",
  "Cultural Night Photo Gallery",
];

export default function EventsPage() {
  return (
    <main>
      <HeroSection
        title="Mga Kaganapan"
        subtitle="Home / Events"
        backgroundImage="/images/stock/stock-06.jpg"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Sidebar */}
            <aside className="space-y-8 lg:col-span-1 order-2 lg:order-1">
              <div className="bg-[#f7f7f7] p-6 border border-[#e4e4e4]">
                <h3 className="mb-4 text-md font-bold text-[#3a3d44] uppercase tracking-wider">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full border border-[#e4e4e4] py-2.5 pl-10 pr-4 text-sm focus:border-[#f3702b] outline-none bg-white transition-colors"
                  />
                  <Search className="absolute left-3 top-3 h-4 w-4 text-[#787878]" />
                </div>
              </div>

              <div className="bg-[#f7f7f7] p-6 border border-[#e4e4e4]">
                <h3 className="mb-4 text-md font-bold text-[#3a3d44] uppercase tracking-wider">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="text-sm text-[#787878] transition hover:text-[#f3702b]"
                      >
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f7f7f7] p-6 border border-[#e4e4e4]">
                <h3 className="mb-4 text-md font-bold text-[#3a3d44] uppercase tracking-wider">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="px-3 py-1.5 text-xs text-[#787878] bg-white border border-[#e4e4e4] hover:bg-[#f3702b] hover:text-white hover:border-[#f3702b] transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#f7f7f7] p-6 border border-[#e4e4e4]">
                <h3 className="mb-4 text-md font-bold text-[#3a3d44] uppercase tracking-wider">Recent Posts</h3>
                <ul className="space-y-2">
                  {recentPosts.map((post) => (
                    <li key={post}>
                      <a
                        href="#"
                        className="text-sm text-[#787878] transition hover:text-[#f3702b]"
                      >
                        {post}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Past Events Grid */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <p className="text-[#f3702b] text-xs uppercase tracking-[0.2em] mb-4 font-medium">Events</p>
              <h2 className="section-heading text-3xl">
                Past Events
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {pastEvents.map((event) => (
                  <div
                    key={event.id}
                    className="overflow-hidden bg-white border border-[#e4e4e4] group card-hover"
                  >
                    <Link href={`/events/${event.slug}`}>
                      <div className="relative h-52 w-full overflow-hidden">
                        <Image
                          src={event.image}
                          alt={event.title}
                          fill
                          className="object-cover group-hover:scale-105 transition-transform duration-700"
                        />
                        <div className="absolute inset-0 bg-gradient-to-t from-[#3a3d44]/70 via-transparent to-transparent" />
                        <div className="absolute bottom-4 left-4 right-4">
                          <h3 className="text-lg font-bold text-white">{event.title}</h3>
                        </div>
                      </div>
                    </Link>
                    <div className="p-6">
                      <p className="mb-1 text-sm font-semibold text-[#f3702b]">
                        {event.date}
                      </p>
                      <p className="mb-3 text-xs text-[#787878]">
                        {event.location}
                      </p>
                      <p className="text-sm text-[#787878] mb-5 leading-relaxed">{event.description}</p>
                      <Link
                        href={`/events/${event.slug}`}
                        className="btn-theme btn-theme-primary text-xs inline-flex items-center gap-2"
                      >
                        Learn More <ArrowRight className="w-3 h-3" />
                      </Link>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
