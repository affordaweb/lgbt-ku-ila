import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, ShieldCheck } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import InnerCta from "@/components/InnerCta";
import styles from "@/components/InnerPage.module.css";

export const metadata: Metadata = { title: "Transparency", description: "Our commitment to accountability and openness in managing funds and resources." };
export default function TransparencyPage() { return <main>
  <HeroSection title="Transparency" subtitle="Home / About / Transparency" description="Accountability, honesty, and care for the trust our community places in us." backgroundImage="/images/stock/stock-12.jpg" />
  <section className={styles.section}><div className={styles.wrap}><div className={styles.intro}><div className={styles.copy}><p className={styles.eyebrow}>Accountability</p><h2 className={styles.heading}>Trust is something we <em>practice.</em></h2><p>We value transparency and accountability in everything we do. As of now, LGBTQIA++ SILBI Kumintang Ilaya has not yet undergone a formal audit.</p><p>As our organization grows, we are committed to providing accurate and honest reporting of our funds and resources. For questions about donations or financial matters, please contact us.</p><div className={styles.actions}><Link className={styles.primaryButton} href="/contact">Contact us <ArrowRight size={16}/></Link></div></div><div className={styles.visual}><div className={styles.primaryVisual}><Image src="/images/events/laso-photo-contest.jpeg" alt="LGBTQIA++ community gathering" fill sizes="(max-width:820px) 82vw, 520px" /></div><div className={styles.secondaryVisual}><span className="grid h-full w-full place-items-center rounded-[18px] bg-[#0a1d4a] text-[#f15a24] shadow-[0_16px_36px_rgba(0,0,0,.13)]"><ShieldCheck size={52} strokeWidth={1.25}/></span></div></div></div></div></section>
  <InnerCta label="Questions are welcome" title={<>Let&apos;s keep the<br />conversation <em>open.</em></>} description="Reach out if you need clarification or would like to know more about our work." />
</main>; }
