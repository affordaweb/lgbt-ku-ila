import Link from "next/link";
import { ArrowRight } from "lucide-react";
import styles from "./InnerPage.module.css";

interface InnerCtaProps { label?: string; title: React.ReactNode; description: string; primaryHref?: string; primaryLabel?: string; secondaryHref?: string; secondaryLabel?: string; }

export default function InnerCta({ label = "Stay connected", title, description, primaryHref = "/contact", primaryLabel = "Contact us", secondaryHref, secondaryLabel }: InnerCtaProps) {
  return <section className={styles.cta}><div className={styles.wrap}><div className={styles.ctaCopy}>
    <p className={styles.eyebrow}>{label}</p><h2>{title}</h2><p>{description}</p>
    <div className={styles.actions}><Link href={primaryHref} className={styles.primaryButton}>{primaryLabel} <ArrowRight size={16} /></Link>{secondaryHref && secondaryLabel ? <Link href={secondaryHref} className={styles.secondaryButton}>{secondaryLabel}</Link> : null}</div>
  </div><div className={styles.ctaDetails}><div><span>Email</span><a href="mailto:lgbtkuila@outlook.com">lgbtkuila@outlook.com</a></div><div><span>Community</span><strong>Kumintang Ilaya<br />Batangas City</strong></div><div><span>Our promise</span><strong>Every person<br />belongs here.</strong></div></div></div></section>;
}
