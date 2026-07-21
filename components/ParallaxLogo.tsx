"use client";

import { useEffect, useRef } from "react";
import Image from "next/image";
import styles from "@/components/InnerPage.module.css";

export default function ParallaxLogo() {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const parent = el.closest("section")!;
    let ticking = false;

    const update = () => {
      const rect = parent.getBoundingClientRect();
      const viewportCenter = window.innerHeight / 2;
      const sectionCenter = rect.top + rect.height / 2;
      const offset = (sectionCenter - viewportCenter) / window.innerHeight;
      const translateX = -offset * 40;
      el.style.transform = `translateX(${translateX}px)`;
      ticking = false;
    };

    const onScroll = () => { if (!ticking) { requestAnimationFrame(update); ticking = true; } };
    update();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div ref={ref} className={styles.secondaryVisual}>
      <Image
        src="/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg"
        alt="LGBTQIA++ SILBI Kumintang Ilaya Logo"
        fill
        sizes="235px"
      />
    </div>
  );
}
