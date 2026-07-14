import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import HeroSection from "@/components/HeroSection";
import { Search, ArrowRight } from "lucide-react";

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

const pastEvents = [
  {
    id: 1,
    title: "11th Batangan Pride Parade",
    image: "/images/events/733802303_122101099587380675_4257770319116326264_n.jpg",
    date: "June 16, 2026",
    description:
      "Sumali ang LGBTQIA++ Kumintang Ilaya sa 11th Batangan Pride Parade na ginanap sa Batangas Provincial Capitol. Isang masayang pagdiriwang ng pagkakaisa, pagmamahal, at pagtanggap sa lahi at kasarian.",
    location: "Batangas Provincial Capitol",
  },
  {
    id: 2,
    title: "2nd Citywide Pride Celebration",
    image: "/images/events/734768224_2070636277142827_2921723697569089008_n.jpg",
    date: "June 29, 2026",
    description:
      "Nakiisa ang Ku-Ila sa 2nd Citywide Pride Celebration na inorganisa ng LASO, SILBI, at CSWDO. Nagsimula sa Plaza Mabini at nagtapos sa Batangas City Convention Center.",
    location: "Plaza Mabini to Batangas City Convention Center",
  },
  {
    id: 3,
    title: "Pride Month Kickoff Walk",
    image: "/images/events/731788066_2070636043809517_8341410874233716056_n.jpg",
    date: "June 11, 2026",
    description:
      "Ang kauna-unahang Pride Month Celebration sa Batangas City na may temang 'Rampa Na: Kahit Ano Ka, Love Ka!' Mula Provincial Capitol patungo sa Batangas City Convention Center.",
    location: "Provincial Capitol to Batangas City Convention Center",
  },
  {
    id: 4,
    title: "Hair & Makeup Competition",
    image: "/images/events/734756136_2070636173809504_5831640839771367381_n.jpg",
    date: "June 11, 2026",
    description:
      "Nagpamalas ng talento ang mga miyembro ng Ku-Ila sa Hair and Makeup Competition na bahagi ng Pride Month Celebration sa Batangas City.",
    location: "Batangas City Convention Center",
  },
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
              <div className="bg-[#FAF8F5] p-6 border border-[#E5DDD3]">
                <h3 className="mb-4 text-md font-bold text-[#1A1A2E] uppercase tracking-wider font-[var(--font-playfair)]">Search</h3>
                <div className="relative">
                  <input
                    type="text"
                    placeholder="Search events..."
                    className="w-full border border-[#E5DDD3] py-2.5 pl-10 pr-4 text-sm focus:border-[#D4AF37] outline-none bg-white transition-colors"
                  />
                  <Search className="absolute left-3 top-3 h-4 w-4 text-[#6B7280]" />
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-6 border border-[#E5DDD3]">
                <h3 className="mb-4 text-md font-bold text-[#1A1A2E] uppercase tracking-wider font-[var(--font-playfair)]">Categories</h3>
                <ul className="space-y-2">
                  {categories.map((cat) => (
                    <li key={cat}>
                      <a
                        href="#"
                        className="text-sm text-[#6B7280] transition hover:text-[#7B2D8E]"
                      >
                        {cat}
                      </a>
                    </li>
                  ))}
                </ul>
              </div>

              <div className="bg-[#FAF8F5] p-6 border border-[#E5DDD3]">
                <h3 className="mb-4 text-md font-bold text-[#1A1A2E] uppercase tracking-wider font-[var(--font-playfair)]">Tags</h3>
                <div className="flex flex-wrap gap-2">
                  {tags.map((tag) => (
                    <a
                      key={tag}
                      href="#"
                      className="px-3 py-1.5 text-xs text-[#6B7280] bg-white border border-[#E5DDD3] hover:bg-[#7B2D8E] hover:text-white hover:border-[#7B2D8E] transition-colors"
                    >
                      {tag}
                    </a>
                  ))}
                </div>
              </div>

              <div className="bg-[#FAF8F5] p-6 border border-[#E5DDD3]">
                <h3 className="mb-4 text-md font-bold text-[#1A1A2E] uppercase tracking-wider font-[var(--font-playfair)]">Recent Posts</h3>
                <ul className="space-y-2">
                  {recentPosts.map((post) => (
                    <li key={post}>
                      <a
                        href="#"
                        className="text-sm text-[#6B7280] transition hover:text-[#7B2D8E]"
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
              <p className="text-[#D4AF37] text-xs uppercase tracking-[0.2em] mb-4 font-medium">Events</p>
              <h2 className="section-heading text-3xl font-[var(--font-playfair)]">
                Past Events
              </h2>
              <div className="grid grid-cols-1 gap-8 sm:grid-cols-2">
                {pastEvents.map((event) => (
                  <div
                    key={event.id}
                    className="overflow-hidden bg-white border border-[#E5DDD3] group card-luxury"
                  >
                    <div className="relative h-52 w-full overflow-hidden">
                      <Image
                        src={event.image}
                        alt={event.title}
                        fill
                        className="object-cover group-hover:scale-105 transition-transform duration-700"
                      />
                      <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/70 via-transparent to-transparent" />
                      <div className="absolute bottom-4 left-4 right-4">
                        <h3 className="text-lg font-bold text-white font-[var(--font-playfair)]">{event.title}</h3>
                      </div>
                    </div>
                    <div className="p-6">
                      <p className="mb-1 text-sm font-semibold text-[#D4AF37]">
                        {event.date}
                      </p>
                      <p className="mb-3 text-xs text-[#6B7280]">
                        {event.location}
                      </p>
                      <p className="text-sm text-[#6B7280] mb-5 leading-relaxed">{event.description}</p>
                      <Link
                        href="/events"
                        className="btn-luxury btn-luxury-primary text-xs inline-flex items-center gap-2"
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
