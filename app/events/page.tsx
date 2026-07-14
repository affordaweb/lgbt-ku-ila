import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { Search } from "lucide-react";

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

const events = [
  {
    id: 1,
    title: "Pride Month Celebration",
    image: "/images/events/event-01.jpg",
    date: "June 15, 2026",
    description:
      "A vibrant celebration of identity, love, and equality featuring performances, speakers, and community activities.",
    location: "Laguna Provincial Park",
  },
  {
    id: 2,
    title: "Community Health Day",
    image: "/images/events/event-02.jpg",
    date: "May 20, 2026",
    description:
      "Free health screenings, consultations, and wellness workshops open to all community members.",
    location: "Ku-Ila Community Center",
  },
  {
    id: 3,
    title: "Legal Aid Workshop",
    image: "/images/events/event-03.jpg",
    date: "April 12, 2026",
    description:
      "Learn about your legal rights and access free legal consultations with experienced advocates.",
    location: "Laguna Town Hall",
  },
  {
    id: 4,
    title: "Youth Empowerment Summit",
    image: "/images/events/event-04.jpg",
    date: "March 28, 2026",
    description:
      "A summit dedicated to empowering LGBTQIA++ youth through mentorship, skill-building, and leadership development.",
    location: "University of Laguna Auditorium",
  },
  {
    id: 5,
    title: "Advocacy Training",
    image: "/images/events/event-05.jpg",
    date: "March 5, 2026",
    description:
      "Hands-on training sessions for aspiring advocates on policy, campaigning, and community organizing.",
    location: "Ku-Ila Training Hall",
  },
  {
    id: 6,
    title: "Cultural Night",
    image: "/images/events/event-06.jpg",
    date: "February 20, 2026",
    description:
      "An evening of music, dance, and art celebrating the rich cultural heritage of the LGBTQIA++ community.",
    location: "Calamba Cultural Center",
  },
];

export default function EventsPage() {
  return (
    <main>
      <HeroSection
        title="Events & Activities"
        subtitle="Home / Events"
        backgroundImage="/images/stock/stock-06.jpg"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4">
          <div className="grid grid-cols-1 gap-10 lg:grid-cols-3">
            {/* Sidebar */}
            <aside className="space-y-8 lg:col-span-1 order-2 lg:order-1">
              <div className="bg-[#f7f7f7] p-6 border border-[#e4e4e4]">
                <h3 className="mb-4 text-lg font-bold text-[#3a3d44] uppercase">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full border border-[#e4e4e4] py-2 pl-10 pr-4 text-sm focus:border-[#e85242] outline-none bg-white"
                  />
                  <Search className="absolute left-3 top-2.5 h-4 w-4 text-[#787878]" />
                </div>
              </div>

              <div className="bg-[#f7f7f7] p-6 border border-[#e4e4e4]">
                <h3 className="mb-4 text-lg font-bold text-[#3a3d44] uppercase">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="text-sm text-[#787878] transition hover:text-[#e85242]"
                      >
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#f7f7f7] p-6 border border-[#e4e4e4]">
                <h3 className="mb-4 text-lg font-bold text-[#3a3d44] uppercase">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="px-3 py-1 text-xs text-[#787878] bg-white border border-[#e4e4e4] hover:bg-[#e85242] hover:text-white hover:border-[#e85242] transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#f7f7f7] p-6 border border-[#e4e4e4]">
                <h3 className="mb-4 text-lg font-bold text-[#3a3d44] uppercase">Recent Posts</h3>
                <ul className="space-y-2">
                  {recentPosts.map((post) => (
                    <li key={post}>
                      <a
                        href="#"
                        className="text-sm text-[#787878] transition hover:text-[#e85242]"
                      >
                        {post}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>
            </aside>

            {/* Events Grid */}
            <div className="lg:col-span-2 order-1 lg:order-2">
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {events.map((event) => (
                  <div
                    key={event.id}
                    className="overflow-hidden bg-white border border-[#e4e4e4] group"
                  >
                    <div className="relative h-48 w-full overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#3a3d44]/70 via-transparent to-transparent" />
                      <div className="absolute bottom-3 left-3 right-3">
                        <h3 className="text-lg font-bold text-white">{event.title}</h3>
                      </div>
                    </div>
                    <div className="p-5">
                      <p className="mb-1 text-sm font-semibold text-[#e85242]">
                        {event.date}
                      </p>
                      <p className="mb-2 text-sm text-[#787878]">
                        {event.location}
                      </p>
                      <p className="text-sm text-[#787878] mb-4">{event.description}</p>
                      <Link
                        href="/events"
                        className="btn-theme btn-theme-primary text-sm inline-block"
                      >
                        Learn More
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
