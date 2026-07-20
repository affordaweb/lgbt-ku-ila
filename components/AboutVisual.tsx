import styles from "@/app/page.module.css";

const hotspots = [
  [145, 84],
  [235, 76],
  [379, 88],
  [437, 153],
  [350, 234],
  [170, 210],
];

const connections = [
  "M145 84 Q218 70 286 160",
  "M235 76 Q268 104 286 160",
  "M379 88 Q332 109 286 160",
  "M437 153 Q360 125 286 160",
  "M350 234 Q321 192 286 160",
  "M170 210 Q236 207 286 160",
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
        <g className={styles.mapConnections}>
          {connections.map((path, index) => <path key={path} d={path} className={styles[`purok${index + 1}`]} />)}
        </g>
        {hotspots.map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`} className={`${styles.purokHotspot} ${styles[`purok${index + 1}`]}`}>
            <circle className={styles.mapPulseRing} cx={cx} cy={cy} r="10" />
            <circle cx={cx} cy={cy} r="8" />
          </g>
        ))}
        {connections.map((path, index) => (
          <circle key={`flow-${path}`} className={`${styles.flowDot} ${styles[`purok${index + 1}`]}`} r="4">
            <animateMotion dur={`${2.7 + index * .18}s`} repeatCount="indefinite" path={path} />
          </circle>
        ))}
        <g className={styles.purokHub}>
          <circle className={styles.hubPulse} cx="286" cy="160" r="19" />
          <image
            href="/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg"
            x="271" y="145" width="30" height="30"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#hub-logo-clip)"
          />
          <circle cx="286" cy="160" r="16" />
        </g>
        <defs><clipPath id="hub-logo-clip"><circle cx="286" cy="160" r="15" /></clipPath></defs>
      </svg>
    </div>
  );
}
