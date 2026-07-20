import Image from "next/image";
import styles from "@/app/page.module.css";

const puroks = [
  ["25%", "26%"],
  ["41%", "28%"],
  ["65%", "24%"],
  ["75%", "46%"],
  ["63%", "65%"],
  ["41%", "62%"],
  ["24%", "51%"],
];

export default function AboutVisual() {
  return (
    <div className={styles.aboutVisual}>
      <div className={styles.barangayMap} aria-label="Kumintang Ilaya barangay map with seven connected purok hotspots">
        <Image
          src="/images/stock/kumintang-ilaya-map.png"
          alt="Kumintang Ilaya barangay map"
          fill
          sizes="(max-width: 900px) 90vw, 48vw"
          priority
        />
        <svg className={styles.purokConnections} viewBox="0 0 100 100" preserveAspectRatio="none" aria-hidden="true">
          <line x1="50" y1="47" x2="25" y2="26" />
          <line x1="50" y1="47" x2="41" y2="28" />
          <line x1="50" y1="47" x2="65" y2="24" />
          <line x1="50" y1="47" x2="75" y2="46" />
          <line x1="50" y1="47" x2="63" y2="65" />
          <line x1="50" y1="47" x2="41" y2="62" />
          <line x1="50" y1="47" x2="24" y2="51" />
        </svg>
        {puroks.map(([left, top], index) => (
          <span
            key={`${left}-${top}`}
            className={`${styles.purokHotspot} ${styles[`purok${index + 1}`]}`}
            style={{ left, top }}
            aria-label={`Purok ${index + 1}`}
          />
        ))}
        <span className={styles.purokHub} aria-label="Kumintang Ilaya community hub" />
      </div>
    </div>
  );
}
