import type { Metadata } from "next";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Equal, Eye, Heart, Target, Users } from "lucide-react";
import HeroSection from "@/components/HeroSection";
import InnerCta from "@/components/InnerCta";
import styles from "@/components/InnerPage.module.css";
import { pageSeo } from "@/lib/seo";

export const metadata: Metadata = pageSeo({ title: "About LGBTQIA++ Kumintang Ilaya", description: "Learn about the mission, values, and community work of LGBTQIA++ SILBI Kumintang Ilaya in Batangas City.", path: "/about", image: "/images/stock/stock-01.jpg" });

const values = [
  { icon: Equal, title: "Equality", description: "Pantay na dignidad, paggalang, at pagkakataon para sa bawat isa." },
  { icon: Heart, title: "Love", description: "Pagmamalasakit at pagtanggap ang nasa puso ng bawat gawaing sama-sama naming binubuo." },
  { icon: Users, title: "Community", description: "Mas malakas tayo kapag may ligtas na espasyong bukas para sa lahat." },
];

export default function AboutPage() {
  return <main>
    <HeroSection title="About Us" subtitle="Home / About Us" description="A community-led home for dignity, connection, and the freedom to live truthfully in Kumintang Ilaya." backgroundImage="/images/stock/stock-01.jpg" />

    <section className={styles.section}><div className={styles.wrap}><div className={styles.intro}>
      <div className={styles.copy}>
        <p className={styles.eyebrow}>Our community</p>
        <h2 className={styles.heading}>A place to be seen, supported, and <em>celebrated.</em></h2>
        <p>Ang LGBTQIA++ SILBI Kumintang Ilaya ay isang community-based organization na nagbibigay ng support, resources, at mas ligtas na espasyo para sa LGBTQIA++ community sa Batangas City.</p>
        <p>Nagkakaisa kami sa pagbuo ng mga programang may malasakit, adbokasiyang may boses, at mga pagkakataong magpapalakas sa bawat miyembro.</p>
        <div className={styles.featureList}>
          <div className={styles.feature}><span className={styles.featureIcon}><Target size={18} /></span><div><b>Aming misyon</b>Palakasin ang kalusugan, kagalingan, at boses ng LGBTQIA++ community.</div></div>
          <div className={styles.feature}><span className={styles.featureIcon}><Eye size={18} /></span><div><b>Aming bisyon</b>Isang lipunang malaya, pantay, at may tunay na pagtanggap para sa lahat.</div></div>
        </div>
        <div className={styles.actions}><Link href="/contact" className={styles.primaryButton}>Makipag-ugnayan <ArrowRight size={16} /></Link></div>
      </div>
      <div className={styles.visual}>
        <div className={styles.primaryVisual}><Image src="/images/stock/stock-02.jpg" alt="Hands holding LGBTQIA++ letters" fill sizes="(max-width: 820px) 82vw, 520px" /></div>
        <div className={styles.secondaryVisual}><Image src="/images/stock/stock-03.jpg" alt="Pride flag in the sunlight" fill sizes="235px" /></div>
      </div>
    </div></div></section>

    <section className={`${styles.section} ${styles.cream}`}><div className={styles.wrap}>
      <p className={styles.eyebrow}>What guides us</p><h2 className={styles.heading}>Values we carry<br />into every room.</h2><p className={styles.lead}>Our work begins with people—listening closely, showing up consistently, and making room for every identity to thrive.</p>
      <div className={styles.values}>{values.map(({ icon: Icon, title, description }) => <article className={styles.value} key={title}><Icon size={30} strokeWidth={1.5} /><h3>{title}</h3><p>{description}</p></article>)}</div>
    </div></section>

    <InnerCta label="Join the movement" title={<>There is room<br />for <em>everyone.</em></>} description="Whether you need support, want to volunteer, or simply want to connect, we would love to welcome you." primaryHref="/become-member" primaryLabel="Become a member" secondaryHref="/contact" secondaryLabel="Talk with us" />
  </main>;
}
