"use client";

import Image from "next/image";
import { useEffect, useRef, useState } from "react";
import styles from "@/app/page.module.css";

export default function AboutVisual() {
  const [horizontalOffset, setHorizontalOffset] = useState(0);
  const previousScrollY = useRef(0);

  useEffect(() => {
    previousScrollY.current = window.scrollY;

    const handleScroll = () => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > previousScrollY.current) {
        setHorizontalOffset(28);
      } else if (currentScrollY < previousScrollY.current) {
        setHorizontalOffset(-12);
      }

      previousScrollY.current = currentScrollY;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <div className={styles.aboutVisual}>
      <div className={styles.aboutImageCircle}>
        <Image
          src="/images/stock/pride-heart-hands.jpg"
          alt="Hands forming a rainbow heart shape"
          fill
          sizes="(max-width: 900px) 90vw, 48vw"
          className={styles.coverImage}
        />
      </div>
      <div
        className={styles.aboutLogoMotion}
        style={{ transform: `translateX(${horizontalOffset}px)` }}
      >
        <div className={styles.aboutLogo}>
          <Image
            src="/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg"
            alt="LGBTQIA++ SILBI Kumintang Ilaya logo"
            fill
            sizes="180px"
          />
        </div>
      </div>
    </div>
  );
}
