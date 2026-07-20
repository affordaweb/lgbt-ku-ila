import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";
import InnerCta from "@/components/InnerCta";
import styles from "@/components/InnerPage.module.css";
import { galleryImages } from "@/lib/data";
export const metadata: Metadata = { title: "Gallery", description: "Photos and memories from LGBTQIA++ SILBI Kumintang Ilaya events, gatherings, and celebrations." };
export default function GalleryPage() { return <main><HeroSection title="Gallery" subtitle="Home / Gallery" description="A growing visual record of joy, advocacy, creativity, and community." backgroundImage="/images/stock/stock-07.jpg" />
  <section className={styles.section}><div className={styles.wrap}><div className={styles.sectionHead}><div><p className={styles.eyebrow}>Our memories</p><h2 className={styles.heading}>The moments we<br /><em>make together.</em></h2></div><p className={styles.lead}>Every image holds a little more of the joy and care that moves this community forward.</p></div><GalleryGrid images={galleryImages} categories={["Community", "Health", "Advocacy"]} /></div></section>
  <InnerCta label="See what is next" title={<>More stories are<br />waiting to be <em>made.</em></>} description="Follow along, take part, and help make the next gathering unforgettable." primaryHref="/events" primaryLabel="View events" />
</main>; }
