import { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, CalendarDays, Heart, MapPin, Sparkles, Users } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import InnerCta from "@/components/InnerCta";
import styles from "@/components/InnerPage.module.css";
import { pastEvents } from "@/lib/data";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({ title: "LGBTQIA++ Events in Batangas City", description: "Join Ku-Ila events in Batangas City for connection, advocacy, creativity, and community celebration.", path: "/events", image: "/images/stock/stock-05.jpg" });
const initiatives = [
  { title: "Community Support", text: "Safe spaces, peer connection, and practical support for our community.", icon: Heart, href: "/contact" },
  { title: "Upcoming Events", text: "Gatherings that bring people together in dignity, joy, and shared purpose.", icon: CalendarDays, href: "/events" },
  { title: "Advocacy Programs", text: "Learning and action that advance LGBTQIA++ rights in our city.", icon: Sparkles, href: "/gallery" },
  { title: "Become a Member", text: "A meaningful way to belong, participate, and help shape what comes next.", icon: Users, href: "/become-member" },
];

export default function EventsPage() { return <main>
  <HeroSection title="Mga Kaganapan" subtitle="Home / Events" description="Stories, celebrations, and shared moments that make our community stronger." backgroundImage="/images/stock/stock-05.jpg" />
  <section className={`${styles.section} ${styles.cream}`}><div className={styles.wrap}><div className={styles.sectionHead}><div><p className={styles.eyebrow}>How we gather</p><h2 className={styles.heading}>Programs rooted in care and <em>connection.</em></h2></div><p className={styles.lead}>From creative celebrations to support-led initiatives, every program is designed to make belonging visible.</p></div>
    <div className={styles.programRows}>{initiatives.map(({title,text,icon:Icon,href}, index) => <Link href={href} className={styles.programRow} key={title}><span className={styles.rowNumber}>0{index+1}</span><Icon className={styles.rowIcon} size={22}/><h3>{title}</h3><p>{text}</p><span className={styles.rowArrow}><ArrowRight size={17}/></span></Link>)}</div>
  </div></section>
  <section className={styles.section}><div className={styles.wrap}><div className={styles.sectionHead}><div><p className={styles.eyebrow}>Community journal</p><h2 className={styles.heading}>Moments that move<br />our story forward.</h2></div><p className={styles.lead}>Explore the events, competitions, and community days that have brought Ku-Ila together.</p></div><div className={styles.cards}>{pastEvents.map((event) => <Link className={styles.imageCard} href={`/events/${event.slug}`} key={event.id}><figure><Image src={event.image} alt={event.title} fill sizes="(max-width: 820px) 90vw, 30vw" /></figure><p className={styles.tag}>{event.date}</p><h3>{event.title}</h3><p><MapPin size={13} style={{display:"inline", marginRight:5}} />{event.location}</p></Link>)}</div></div></section>
  <InnerCta label="Come as you are" title={<>Find your people,<br />make <em>the moment.</em></>} description="There is always room for another voice, another story, and another reason to gather." primaryHref="/become-member" primaryLabel="Join Ku-Ila" secondaryHref="/contact" secondaryLabel="Ask a question" />
</main>; }
