import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Gift, Shield } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import InnerCta from "@/components/InnerCta";
import styles from "@/components/InnerPage.module.css";

export const metadata: Metadata = { title: "Support Us | LGBTQIA++ Kumintang Ilaya", description: "Support LGBTQIA++ Kumintang Ilaya through GCash donations." };

export default function SupportPage() { return <main>
  <HeroSection title="Support Us" subtitle="Home / Support Us" description="Every contribution becomes practical care, joyful gathering, and stronger support for our community." backgroundImage="/images/stock/stock-11.jpg" />
  <section className={`${styles.section} ${styles.cream}`}><div className={styles.wrap}><div className={styles.intro}>
    <div className={styles.copy}><p className={styles.eyebrow}>Make a difference</p><h2 className={styles.heading}>Give what you can.<br />Help someone <em>belong.</em></h2><p>Your donation helps sustain the programs and services that empower LGBTQIA++ people in Kumintang Ilaya. Bawat piso ay nagiging pag-asa at lakas para sa komunidad.</p><div className={styles.featureList}><div className={styles.feature}><span className={styles.featureIcon}><Gift size={18}/></span><div><b>Donate via GCash</b>GCash details will be shared by the organization as they become available.</div></div><div className={styles.feature}><span className={styles.featureIcon}><Shield size={18}/></span><div><b>Transparent by design</b>We are committed to honest reporting on the resources entrusted to our community.</div></div></div><div className={styles.actions}><Link className={styles.primaryButton} href="/contact">Ask about donating <ArrowRight size={16}/></Link></div></div>
    <div className={styles.visual}><div className={styles.primaryVisual}><Image src="/images/events/glow-beyond-limits.jpeg" alt="Ku-Ila event community" fill sizes="(max-width:820px) 82vw, 520px" /></div><div className={styles.secondaryVisual}><Image src="/images/events/batangas-city-queen-screening.jpeg" alt="Ku-Ila community gathering" fill sizes="235px" /></div></div>
  </div></div></section>
  <InnerCta label="Share the care" title={<>Small acts build<br />a stronger <em>home.</em></>} description="You can also support us by joining an event, volunteering your time, or sharing our work." primaryHref="/become-member" primaryLabel="Join Ku-Ila" secondaryHref="/contact" secondaryLabel="Volunteer with us" />
</main>; }
