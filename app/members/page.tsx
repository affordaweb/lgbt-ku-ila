import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import MemberCard from "@/components/MemberCard";
import InnerCta from "@/components/InnerCta";
import styles from "@/components/InnerPage.module.css";
import { members } from "@/lib/data";
export const metadata: Metadata = { title: "Our Members", description: "Meet the dedicated members of LGBTQIA++ SILBI Kumintang Ilaya." };
export default function MembersPage() { return <main><HeroSection title="Our Members" subtitle="Home / Members" description="The people who listen, organize, advocate, and make safer spaces possible." backgroundImage="/images/events/king-and-queen-of-pride-parade.jpeg" />
  <section className={styles.section}><div className={styles.wrap}><div className={styles.sectionHead}><div><p className={styles.eyebrow}>People of Ku-Ila</p><h2 className={styles.heading}>Leadership shaped by<br /><em>lived experience.</em></h2></div><p className={styles.lead}>Meet the members building connection and a stronger future for the LGBTQIA++ community in Batangas City.</p></div><div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">{members.map((member) => <MemberCard key={member.slug} {...member} />)}</div></div></section>
  <InnerCta label="Community is a practice" title={<>Together, we make<br />belonging <em>real.</em></>} description="Join a group that creates space for people to show up fully and support one another." primaryHref="/become-member" primaryLabel="Become a member" />
</main>; }
