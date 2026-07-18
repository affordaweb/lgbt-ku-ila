import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import {
  Heart, Users, Scale, GraduationCap, Shield,
  Leaf, Target, Globe, ArrowRight, MessageCircle,
  HandHeart, Phone, Mail, Clock, MapPin
} from "lucide-react";
import { members, galleryImages, pastEvents } from "@/lib/data";
import ProgramCard from "@/components/ProgramCard";
import LeaderCarousel from "@/components/LeaderCarousel";
import EventCard from "@/components/EventCard";
import FacebookIcon from "@/components/FacebookIcon";

export const metadata: Metadata = {
  title: "LGBTQIA++ Kumintang Ilaya | LGBTQIA Community Organization in Batangas",
  description:
    "Ang LGBTQIA++ Kumintang Ilaya (Ku-Ila) ay isang komunidad na nakatuon sa pagbibigay ng suporta, adbokasiya, at ligtas na espasyo para sa lahat ng LGBTQIA++ individuals sa Batangas City at sa buong Pilipinas.",
};

const programs = [
  { icon: Heart, title: "Community Support", description: "Safe spaces, support groups, and community activities para sa lahat ng miyembro ng LGBTQIA++ komunidad." },
  { icon: Shield, title: "Mental Health", description: "Counseling services, mental health awareness programs, at peer support groups para sa emotional well-being." },
  { icon: Scale, title: "Legal Assistance", description: "Legal aid, know-your-rights seminars, at assistance para sa mga miyembro ng komunidad." },
  { icon: GraduationCap, title: "Education", description: "Scholarship programs, educational workshops, at skills training para sa empowerment." },
  { icon: Heart, title: "Health Programs", description: "Health screenings, wellness check-ups, at access sa affordable healthcare services." },
  { icon: Users, title: "Youth Leadership", description: "Youth empowerment programs na nagpapaunlad ng leadership skills at civic engagement." },
  { icon: Target, title: "Community Outreach", description: "Outreach programs na nagbibigay ng ayuda at suporta sa mga nangangailangan." },
  { icon: Globe, title: "Advocacy", description: "Patuloy na adbokasiya para sa equality, acceptance, at karapatan ng LGBTQIA++." },
];

const stories = [
  {
    image: galleryImages[0]?.src || "/images/stock/stock-01.jpg",
    headline: "Isang Hakbang Tungo sa Pagkakapantay-pantay",
    excerpt: "Ang kwento ng isang miyembro na natagpuan ang kanyang boses at lakas sa loob ng komunidad ng LGBTQIA++ Kumintang Ilaya.",
    date: "March 2026",
  },
  {
    image: galleryImages[1]?.src || "/images/stock/stock-02.jpg",
    headline: "Pride Month 2026: Rampa Na!",
    excerpt: "Ang kauna-unahang Pride Month Celebration sa Batangas City na may temang 'Kahit Ano Ka, Love Ka!'",
    date: "June 2026",
  },
  {
    image: galleryImages[2]?.src || "/images/stock/stock-03.jpg",
    headline: "Mental Health Workshop: Ating Alagaan ang Isa't Isa",
    excerpt: "Isang workshop na nagturo ng kahalagahan ng mental health at self-care sa LGBTQIA++ community.",
    date: "April 2026",
  },
];

const featuredEvent = pastEvents[0];
const otherEvents = pastEvents.slice(1, 4);

export default function HomePage() {
  return (
    <main>
      {/* ─── HERO ─── */}
      <section className="relative min-h-screen flex items-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={galleryImages[0]?.src || "/images/stock/stock-01.jpg"}
            alt="LGBTQIA++ Kumintang Ilaya Community"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F2937]/95 via-[#1F2937]/80 to-[#1F2937]/70" />
        </div>
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="absolute top-20 left-10 w-64 h-64 rounded-full bg-[#F15A4A]/5 blur-3xl animate-float" />
          <div className="absolute bottom-20 right-10 w-96 h-96 rounded-full bg-[#1E9CD7]/5 blur-3xl animate-float" style={{ animationDelay: "2s" }} />
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 w-full py-32 lg:py-40">
          <div className="max-w-3xl">
            <div className="inline-flex items-center gap-2 px-4 py-1.5 border border-white/20 text-white/70 text-[11px] uppercase tracking-[0.2em] font-medium mb-6 rounded-full backdrop-blur-sm">
              LGBTQIA++ SILBI Kumintang Ilaya &bull; Batangas City
            </div>
            <h1 className="font-heading text-5xl sm:text-6xl md:text-7xl lg:text-8xl text-white leading-[1.1] mb-8">
              A community where{" "}
              <span className="text-[#F15A4A]">everyone belongs</span>
            </h1>
            <p className="text-white/60 text-base sm:text-lg max-w-xl leading-relaxed mb-10">
              We believe every person deserves respect, opportunity, support, and a place where they can truly belong. Together, we build a stronger and more inclusive community.
            </p>
            <div className="flex flex-wrap gap-4">
              <Link href="/become-member" className="btn-primary">
                Become a Member
                <ArrowRight className="w-4 h-4" />
              </Link>
              <Link href="/support" className="btn-secondary">
                Support Our Mission
              </Link>
            </div>
          </div>
          <div className="grid grid-cols-3 gap-4 sm:gap-6 mt-16 lg:mt-20 max-w-lg">
            {[
              { number: "350+", label: "Community Members" },
              { number: "25+", label: "Programs" },
              { number: "15+", label: "Community Events" },
            ].map((stat) => (
              <div key={stat.label} className="text-center p-4 rounded-2xl bg-white/5 backdrop-blur-sm border border-white/10">
                <div className="font-heading text-2xl sm:text-3xl text-white font-bold">{stat.number}</div>
                <div className="text-[10px] sm:text-xs text-white/50 uppercase tracking-wider mt-1">{stat.label}</div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* ─── ABOUT ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20 items-center">
            <div>
              <div className="section-label">About Us</div>
              <h2 className="font-heading text-4xl sm:text-5xl text-[#1F2937] leading-[1.15] mb-6">
                Ano ang LGBTQIA++<br />
                <span className="text-[#F15A4A]">SILBI Kumintang</span> Ilaya?
              </h2>
              <p className="text-[#374151] leading-relaxed mb-6">
                Ang LGBTQIA++ Kumintang Ilaya ay isang community-based organization na nagbibigay ng safe space para sa lahat ng LGBTQIA++ individuals sa Batangas City. Dito, everyone is welcome — walang judgment, walang discrimination. Lahat ay tanggap at may boses.
              </p>
              <p className="text-[#374151] leading-relaxed mb-8">
                Sama-sama tayong magkaisa — walang agwat, walang hatulan. Join us and be part of the movement for a more inclusive Kumintang Ilaya.
              </p>
              <Link href="/about" className="btn-outline">
                Learn More About Us
                <ArrowRight className="w-4 h-4" />
              </Link>
            </div>
            <div className="relative">
              <div className="relative rounded-2xl overflow-hidden aspect-[4/5]">
                <Image
                  src={galleryImages[1]?.src || "/images/stock/stock-02.jpg"}
                  alt="LGBTQIA++ Kumintang Ilaya Community"
                  fill
                  className="object-cover"
                />
              </div>
              <div className="absolute -bottom-6 -left-6 bg-white rounded-2xl shadow-xl border border-[#E5E7EB] p-5 max-w-[200px]">
                <div className="font-heading text-3xl text-[#F15A4A] font-bold">15+</div>
                <div className="text-xs text-[#374151]">Years of Community Service</div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* ─── PROGRAMS ─── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Our Programs</div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#1F2937] leading-[1.15] mb-4">
              Community Programs
            </h2>
            <p className="text-[#374151] leading-relaxed">
              Aming mga programa at serbisyo na nakatuon sa pagpapalakas at pag-angat ng LGBTQIA++ komunidad.
            </p>
          </div>
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {programs.map((program) => (
              <ProgramCard
                key={program.title}
                icon={program.icon}
                title={program.title}
                description={program.description}
              />
            ))}
          </div>
        </div>
      </section>

      {/* ─── LEADERS ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <div className="section-label">Our Team</div>
              <h2 className="font-heading text-4xl sm:text-5xl text-[#1F2937] leading-[1.15]">
                Meet Our{" "}
                <span className="text-[#F15A4A]">Leaders</span>
              </h2>
            </div>
            <p className="text-[#374151] max-w-sm leading-relaxed">
              Ang mga taong nagtutulak ng pagbabago at nagbibigay inspirasyon sa ating komunidad araw-araw.
            </p>
          </div>
          <LeaderCarousel />
        </div>
      </section>

      {/* ─── EVENTS ─── */}
      <section className="section-padding bg-[#F8FAFC]">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row lg:items-end justify-between gap-6 mb-14">
            <div className="max-w-xl">
              <div className="section-label">Events</div>
              <h2 className="font-heading text-4xl sm:text-5xl text-[#1F2937] leading-[1.15]">
                Featured{" "}
                <span className="text-[#F15A4A]">Events</span>
              </h2>
            </div>
            <Link href="/events" className="text-sm font-medium text-[#F15A4A] hover:text-[#d94a3a] transition-colors inline-flex items-center gap-2">
              View All Events
              <ArrowRight className="w-3.5 h-3.5" />
            </Link>
          </div>
          <div className="grid lg:grid-cols-3 gap-6">
            {featuredEvent && <EventCard event={featuredEvent} featured />}
            {otherEvents.map((event) => (
              <EventCard key={event.id} event={event} />
            ))}
          </div>
        </div>
      </section>

      {/* ─── STORIES ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center max-w-2xl mx-auto mb-14">
            <div className="section-label justify-center">Community Stories</div>
            <h2 className="font-heading text-4xl sm:text-5xl text-[#1F2937] leading-[1.15] mb-4">
              Stories from Our{" "}
              <span className="text-[#F15A4A]">Community</span>
            </h2>
          </div>
          <div className="grid lg:grid-cols-2 gap-8">
            <div className="group rounded-2xl overflow-hidden border border-[#E5E7EB] card-hover bg-white">
              <div className="relative aspect-[16/10]">
                <Image
                  src={stories[0].image}
                  alt={stories[0].headline}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-700"
                />
              </div>
              <div className="p-6 lg:p-8">
                <span className="text-[11px] font-semibold text-[#F15A4A] uppercase tracking-wider">{stories[0].date}</span>
                <h3 className="font-heading text-2xl text-[#1F2937] mt-2 mb-3 group-hover:text-[#F15A4A] transition-colors">{stories[0].headline}</h3>
                <p className="text-[#374151] text-sm leading-relaxed mb-4">{stories[0].excerpt}</p>
                <Link href="/events" className="inline-flex items-center gap-2 text-sm font-medium text-[#F15A4A] hover:text-[#d94a3a] transition-colors">
                  Read Story
                  <ArrowRight className="w-3.5 h-3.5" />
                </Link>
              </div>
            </div>
            <div className="space-y-6">
              {stories.slice(1).map((story, i) => (
                <div key={i} className="group flex gap-5 rounded-2xl overflow-hidden border border-[#E5E7EB] card-hover bg-white p-4">
                  <div className="relative w-28 h-28 sm:w-32 sm:h-32 rounded-xl overflow-hidden shrink-0">
                    <Image
                      src={story.image}
                      alt={story.headline}
                      fill
                      className="object-cover group-hover:scale-105 transition-transform duration-700"
                    />
                  </div>
                  <div className="flex-1 min-w-0">
                    <span className="text-[10px] font-semibold text-[#F15A4A] uppercase tracking-wider">{story.date}</span>
                    <h3 className="font-heading text-base text-[#1F2937] mt-1 mb-1.5 group-hover:text-[#F15A4A] transition-colors line-clamp-2">{story.headline}</h3>
                    <p className="text-[#374151] text-xs leading-relaxed line-clamp-2">{story.excerpt}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* ─── CTA ─── */}
      <section className="relative py-28 lg:py-36 overflow-hidden">
        <div className="absolute inset-0 z-0">
          <Image
            src={galleryImages[3]?.src || "/images/stock/stock-05.jpg"}
            alt="Join LGBTQIA++ Kumintang Ilaya"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-r from-[#1F2937]/95 via-[#1F2937]/85 to-[#1F2937]/90" />
        </div>
        <div className="absolute inset-0 z-[1] overflow-hidden pointer-events-none">
          <div className="absolute top-10 right-20 w-72 h-72 rounded-full bg-[#F15A4A]/5 blur-3xl animate-float" />
        </div>
        <div className="relative z-10 max-w-4xl mx-auto px-4 text-center">
          <h2 className="font-heading text-5xl sm:text-6xl lg:text-7xl text-white leading-[1.1] mb-6">
            You belong<br />
            <span className="text-[#F15A4A]">with us</span>
          </h2>
          <p className="text-white/60 text-lg max-w-2xl mx-auto mb-10 leading-relaxed">
            Whether you need support, want to make a difference, or simply want to be part of a community that celebrates who you are — there is a place for you here.
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <Link href="/become-member" className="btn-primary">
              Become a Member
              <ArrowRight className="w-4 h-4" />
            </Link>
            <Link href="/support" className="btn-secondary">
              Support Our Mission
            </Link>
            <Link href="/contact" className="btn-secondary">
              Volunteer
            </Link>
          </div>
        </div>
      </section>

      {/* ─── CONTACT ─── */}
      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid lg:grid-cols-2 gap-16 lg:gap-20">
            <div>
              <div className="section-label">Contact Us</div>
              <h2 className="font-heading text-4xl sm:text-5xl text-[#1F2937] leading-[1.15] mb-6">
                Let&apos;s{" "}
                <span className="text-[#F15A4A]">connect</span>
              </h2>
              <p className="text-[#374151] leading-relaxed mb-8">
                May tanong ka ba? Gustong makipag-collaborate? O gusto mo lang kumustahin ang komunidad? Nandito kami para sa iyo. Huwag mag-atubiling mag-message sa amin.
              </p>
              <div className="flex flex-wrap gap-4">
                <Link href="/contact" className="btn-primary">
                  Send a Message
                  <MessageCircle className="w-4 h-4" />
                </Link>
                <Link href="/become-member" className="btn-outline">
                  Become a Volunteer
                  <HandHeart className="w-4 h-4" />
                </Link>
              </div>
            </div>
            <div className="space-y-4">
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#E5E7EB] bg-white">
                <div className="w-10 h-10 rounded-xl bg-[#F15A4A]/10 flex items-center justify-center shrink-0">
                  <MapPin className="w-4 h-4 text-[#F15A4A]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1F2937]">Office Address</h4>
                  <p className="text-sm text-[#374151] mt-1">Kumintang Ilaya, Batangas City, Philippines</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#E5E7EB] bg-white">
                <div className="w-10 h-10 rounded-xl bg-[#F15A4A]/10 flex items-center justify-center shrink-0">
                  <Mail className="w-4 h-4 text-[#F15A4A]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1F2937]">Email Address</h4>
                  <p className="text-sm text-[#374151] mt-1">lgbtkuila@outlook.com</p>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#E5E7EB] bg-white">
                <div className="w-10 h-10 rounded-xl bg-[#F15A4A]/10 flex items-center justify-center shrink-0">
                  <Phone className="w-4 h-4 text-[#F15A4A]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1F2937]">Facebook</h4>
                  <a
                    href="https://www.facebook.com/profile.php?id=61591420257367"
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-sm text-[#F15A4A] hover:text-[#d94a3a] transition-colors mt-1 inline-flex items-center gap-2"
                  >
                    <FacebookIcon className="w-3.5 h-3.5" />
                    LGBTQIA++ SILBI Kumintang Ilaya
                  </a>
                </div>
              </div>
              <div className="flex items-start gap-4 p-5 rounded-2xl border border-[#E5E7EB] bg-white">
                <div className="w-10 h-10 rounded-xl bg-[#F15A4A]/10 flex items-center justify-center shrink-0">
                  <Clock className="w-4 h-4 text-[#F15A4A]" />
                </div>
                <div>
                  <h4 className="text-sm font-semibold text-[#1F2937]">Office Hours</h4>
                  <p className="text-sm text-[#374151] mt-1">Monday to Friday, 9:00 AM — 5:00 PM</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
