"use client";

import { useEffect, useRef, useState } from "react";
import Image from "next/image";
import { ArrowLeft, ArrowRight } from "lucide-react";
import styles from "@/app/page.module.css";

const slides = [
  {
    image: "/images/events/john-carlo-salvana-champion.jpeg",
    alt: "Congratulations poster for John Carlo Salvana, Champion in Commercial Makeup",
    firstName: "John Carlo",
    surname: "Salvana",
    award: "Champion — Commercial Makeup",
    badge: "Champion",
    representation: "LGBTQIA++ SILBI Kumintang Ilaya",
    paragraphs: [
      "John Carlo Salvana proudly represented LGBTQIA++ SILBI Kumintang Ilaya and earned the Champion title in the Commercial Makeup category.",
      "His creativity, skill, and dedication brought pride to the organization and demonstrated the remarkable talent found within our community.",
    ],
  },
  {
    image: "/images/events/angel-morales-fourth-placer.jpeg",
    alt: "Congratulations poster for Angel Morales, 4th Placer in Commercial Makeup",
    firstName: "Angel",
    surname: "Morales",
    award: "4th Placer — Commercial Makeup",
    badge: "4th Placer",
    representation: "LGBTQIA++ SILBI Kumintang Ilaya",
    paragraphs: [
      "Angel Morales proudly represented LGBTQIA++ SILBI Kumintang Ilaya, earning 4th Place in the Commercial Makeup category.",
      "This achievement reflects talent, hard work, and a strong commitment to creative expression.",
    ],
  },
];

export default function AchievementSection() {
  const sectionRef = useRef<HTMLElement>(null);
  const pointerStart = useRef<number | null>(null);
  const [activeSlide, setActiveSlide] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const [isVisible, setIsVisible] = useState(false);
  const [scrollDirection, setScrollDirection] = useState<"down" | "up" | null>(null);
  const [pageVisible, setPageVisible] = useState(true);
  const slide = slides[activeSlide]!;

  const moveSlide = (direction: 1 | -1) => {
    setActiveSlide((current) => (current + direction + slides.length) % slides.length);
  };

  useEffect(() => {
    const section = sectionRef.current;
    if (!section) return;
    const observer = new IntersectionObserver(([entry]) => {
      if (entry?.isIntersecting) {
        setIsVisible(true);
        observer.disconnect();
      }
    }, { threshold: 0.22 });
    observer.observe(section);
    return () => observer.disconnect();
  }, []);

  useEffect(() => {
    const handleVisibility = () => setPageVisible(!document.hidden);
    document.addEventListener("visibilitychange", handleVisibility);
    return () => document.removeEventListener("visibilitychange", handleVisibility);
  }, []);

  useEffect(() => {
    if (isPaused || !pageVisible || window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    const timer = window.setInterval(() => moveSlide(1), 6500);
    return () => window.clearInterval(timer);
  }, [isPaused, pageVisible]);

  useEffect(() => {
    let lastY = window.scrollY;
    let frame = 0;
    const onScroll = () => {
      if (window.innerWidth <= 680 || frame) return;
      frame = window.requestAnimationFrame(() => {
        const nextY = window.scrollY;
        if (Math.abs(nextY - lastY) > 3) setScrollDirection(nextY > lastY ? "down" : "up");
        lastY = nextY;
        frame = 0;
      });
    };
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => {
      window.removeEventListener("scroll", onScroll);
      if (frame) window.cancelAnimationFrame(frame);
    };
  }, []);

  return (
    <section
      ref={sectionRef}
      className={`${styles.achievements} ${isVisible ? styles.achievementsVisible : ""}`}
      aria-labelledby="achievement-heading"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onFocusCapture={() => setIsPaused(true)}
      onBlurCapture={(event) => {
        if (!event.currentTarget.contains(event.relatedTarget)) setIsPaused(false);
      }}
    >
      <div className={styles.achievementGrid}>
        <div
          className={styles.achievementImageColumn}
          onPointerDown={(event) => { pointerStart.current = event.clientX; }}
          onPointerUp={(event) => {
            if (pointerStart.current === null) return;
            const distance = event.clientX - pointerStart.current;
            if (Math.abs(distance) > 40) moveSlide(distance > 0 ? -1 : 1);
            pointerStart.current = null;
          }}
        >
          <div className={styles.achievementImageFrame}>
            <div className={styles.achievementPosterStage}>
              {slides.map((item, index) => (
                <Image
                  key={item.image}
                  src={item.image}
                  alt={item.alt}
                  fill
                  priority={index === 0}
                  sizes="(max-width: 680px) 88vw, (max-width: 960px) 45vw, 560px"
                  className={`${styles.achievementPoster} ${index === activeSlide ? styles.achievementPosterActive : ""}`}
                />
              ))}
            </div>
          </div>
          <div className={styles.achievementLogoEntrance}>
            <div className={`${styles.achievementLogoMotion} ${scrollDirection === "down" ? styles.achievementScrollDown : scrollDirection === "up" ? styles.achievementScrollUp : ""}`}>
              <Image
                src="/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg"
                alt="SILBI Batangas City logo"
                width={150}
                height={150}
                className={styles.achievementLogo}
              />
            </div>
          </div>
        </div>

        <div className={styles.achievementContent} aria-live="polite">
          <div className={styles.achievementIntro}>
            <p className={styles.sectionTag}>Member achievement</p>
            <h2 id="achievement-heading">Celebrating talent,<br /><em>pride and excellence.</em></h2>
          </div>
          <div className={styles.achievementDetails} key={slide.image}>
            <p className={styles.achievementKicker}>Congratulations</p>
            <h3 className={styles.achievementName}>
              <span>{slide.firstName}</span>{" "}<em>{slide.surname}</em>
            </h3>
            <p className={styles.achievementAward}>{slide.award}</p>
            <span className={styles.achievementBadge}>{slide.badge} · Commercial Makeup</span>
            <p>{slide.paragraphs[0]}</p>
            <p>{slide.paragraphs[1]}</p>
            <p className={styles.achievementRepresentation}>{slide.representation}</p>
            <div className={styles.achievementControls}>
              <span>{String(activeSlide + 1).padStart(2, "0")} <i>/</i> {String(slides.length).padStart(2, "0")}</span>
              <button type="button" onClick={() => moveSlide(-1)} aria-label="Show previous member achievement"><ArrowLeft aria-hidden="true" /></button>
              <button type="button" onClick={() => moveSlide(1)} aria-label="Show next member achievement"><ArrowRight aria-hidden="true" /></button>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
