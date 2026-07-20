import styles from "@/app/page.module.css";

export default function AboutVisual() {
  return (
    <div className={styles.aboutVisual} aria-label="Stylized Kumintang Ilaya community map">
      <svg className={styles.communityMap} viewBox="0 0 560 560" role="img" aria-labelledby="map-title map-description">
        <title id="map-title">Kumintang Ilaya community connections</title>
        <desc id="map-description">A stylized map of Kumintang Ilaya with colored community hotspots connected to a central hub.</desc>
        <path
          className={styles.mapOutline}
          d="M106 116 177 76 266 93 326 67 414 113 453 190 431 267 466 337 409 426 316 470 229 443 155 469 100 410 117 334 73 268 105 196Z"
        />
        <path className={styles.mapRoad} d="M99 268C170 241 217 280 277 267S388 216 448 232" />
        <path className={styles.mapRoad} d="M154 468C196 394 245 369 281 293S361 181 414 114" />
        <path className={styles.mapRoad} d="M106 116C171 155 218 176 286 172S381 161 453 190" />

        <g className={styles.mapConnections}>
          <line x1="280" y1="281" x2="172" y2="156" />
          <line x1="280" y1="281" x2="398" y2="166" />
          <line x1="280" y1="281" x2="426" y2="285" />
          <line x1="280" y1="281" x2="352" y2="402" />
          <line x1="280" y1="281" x2="181" y2="385" />
          <line x1="280" y1="281" x2="126" y2="275" />
        </g>

        <g className={styles.mapLabels}>
          <text x="280" y="43">ALANGILAN</text>
          <text x="48" y="286">BOLBOK</text>
          <text x="465" y="286">TINGGA LABAC</text>
          <text x="280" y="516">KUMINTANG IBABA · CALICANTO</text>
          <text x="280" y="254" className={styles.mapCenterLabel}>KUMINTANG</text>
          <text x="280" y="273" className={styles.mapCenterLabel}>ILAYA</text>
        </g>

        <g className={`${styles.mapHotspot} ${styles.hotspotOrange}`}><circle cx="172" cy="156" r="8" /></g>
        <g className={`${styles.mapHotspot} ${styles.hotspotYellow}`}><circle cx="398" cy="166" r="8" /></g>
        <g className={`${styles.mapHotspot} ${styles.hotspotPink}`}><circle cx="426" cy="285" r="8" /></g>
        <g className={`${styles.mapHotspot} ${styles.hotspotTeal}`}><circle cx="352" cy="402" r="8" /></g>
        <g className={`${styles.mapHotspot} ${styles.hotspotPurple}`}><circle cx="181" cy="385" r="8" /></g>
        <g className={`${styles.mapHotspot} ${styles.hotspotGreen}`}><circle cx="126" cy="275" r="8" /></g>
        <g className={`${styles.mapHotspot} ${styles.mapHub}`}><circle cx="280" cy="281" r="11" /></g>
      </svg>
    </div>
  );
}
