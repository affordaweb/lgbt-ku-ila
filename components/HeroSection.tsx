import Image from "next/image";
import styles from "./InnerHero.module.css";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage = "/images/stock/stock-01.jpg",
}: HeroSectionProps) {
  const label = title === "About Us" ? "Our story" : title;
  const supportingCopy = description ?? "A closer look at the people, stories, and possibilities that make our community stronger.";
  return (
    <section className={styles.hero}>
      <div className={styles.shell}>
        <div className={styles.copy}>
          {subtitle && <p className={styles.crumb}>{subtitle}</p>}
          <p className={styles.label}>{label}</p>
          <h1 className={styles.title}>{title}</h1>
          <p className={styles.description}>{supportingCopy}</p>
        </div>
        <div className={styles.visual}>
          <div className={styles.image}>
        <Image
          src={backgroundImage}
          alt={title}
          fill
          sizes="(max-width: 800px) 90vw, 42vw"
          priority
        />
          </div>
          <span className={styles.scroll}>Scroll to explore</span>
        </div>
      </div>
    </section>
  );
}
