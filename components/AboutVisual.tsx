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
          d="M24 68 34 38 104 52 160 58 219 64 287 62 340 54 403 41 415 56 404 76 416 90 446 101 456 139 502 156 511 193 545 212 520 236 527 269 498 302 449 284 413 290 357 261 307 245 249 231 191 215 148 202 138 181 107 168 112 147 21 168 19 123 30 100Z"
        />
        <g className={styles.mapConnections}>
          {connections.map((path, index) => <path key={path} d={path} className={styles[`purok${index + 1}`]} />)}
        </g>
        <text className={styles.mapTitle} x="286" y="126">KUMINTANG</text>
        <text className={styles.mapTitle} x="286" y="142">ILAYA</text>
        {hotspots.map(([cx, cy], index) => (
          <g key={`${cx}-${cy}`} className={`${styles.purokHotspot} ${styles[`purok${index + 1}`]}`}>
            <circle className={styles.mapPulseRing} cx={cx} cy={cy} r="11" />
            <circle cx={cx} cy={cy} r="8" />
          </g>
        ))}
        {connections.map((path, index) => (
          <circle key={`flow-${path}`} className={`${styles.flowDot} ${styles[`purok${index + 1}`]}`} r="4">
            <animateMotion dur={`${2.7 + index * .18}s`} repeatCount="indefinite" path={path} />
          </circle>
        ))}
        <g className={styles.purokHub}>
          <circle className={styles.hubPulse} cx="286" cy="160" r="24" />
          <image
            className={styles.hubLogo}
            href="/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg"
            x="266" y="140" width="40" height="40"
            preserveAspectRatio="xMidYMid slice"
            clipPath="url(#hub-logo-clip)"
          />
        </g>
        <defs><clipPath id="hub-logo-clip"><circle cx="286" cy="160" r="20" /></clipPath></defs>
      </svg>
    </div>
  );
}
