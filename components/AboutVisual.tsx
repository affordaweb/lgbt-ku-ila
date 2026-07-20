import styles from "@/app/page.module.css";

const hotspots = [
  [145, 84],
  [235, 76],
  [379, 88],
  [437, 153],
  [350, 234],
  [225, 218],
  [118, 159],
];

export default function AboutVisual() {
  return (
    <div className={styles.aboutVisual} aria-label="Illustrated Kumintang Ilaya map with seven connected purok hotspots">
      <svg className={styles.illustratedMap} viewBox="0 0 560 320" role="img" aria-labelledby="map-title map-description">
        <title id="map-title">Kumintang Ilaya community map</title>
        <desc id="map-description">An illustrated outline of Kumintang Ilaya with seven colorful pulsing purok hotspots connected to a central hub.</desc>
        <path
          className={styles.mapBoundary}
          d="M35 55 136 31 205 40 244 29 382 30 397 57 431 71 452 102 492 115 510 154 489 183 501 212 472 260 423 278 391 270 346 284 289 268 233 279 185 245 139 235 118 207 74 204 42 176 48 144 25 117Z"
        />
        <g className={styles.mapStreets}>
          <path d="M48 97C104 105 156 119 205 110S295 69 377 74 448 111 491 132" />
          <path d="M55 156C113 140 165 162 215 152S294 125 350 144 438 178 485 175" />
          <path d="M117 207C169 187 225 188 275 201S372 236 471 224" />
          <path d="M136 32C154 89 162 129 145 184S157 227 185 245" />
          <path d="M244 29C251 81 252 116 235 166S239 224 233 279" />
          <path d="M382 30C357 86 356 118 382 166S393 232 391 270" />
        </g>
        <g className={styles.mapConnections}>
          {hotspots.map(([x, y]) => <line key={`${x}-${y}`} x1="286" y1="160" x2={x} y2={y} />)}
        </g>
        <text className={styles.mapTitle} x="286" y="146">KUMINTANG</text>
        <text className={styles.mapTitle} x="286" y="164">ILAYA</text>
        {hotspots.map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`} className={`${styles.purokHotspot} ${styles[`purok${index + 1}`]}`}>
            <circle className={styles.mapPulseRing} cx={cx} cy={cy} r="10" />
            <circle cx={cx} cy={cy} r="8" />
          </g>
        ))}
        <g className={styles.purokHub}>
          <circle cx="286" cy="160" r="12" />
        </g>
      </svg>
    </div>
  );
}
