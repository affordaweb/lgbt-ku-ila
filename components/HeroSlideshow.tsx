"use client";

import { useState, useEffect } from "react";
import Image from "next/image";

const images = [
  "/images/events/733802303_122101099587380675_4257770319116326264_n.jpg",
  "/images/events/734896841_1747334810026168_6985617327012982623_n.jpg",
  "/images/events/736845534_122100813849380675_8484641132398570078_n.jpg",
];

export default function HeroSlideshow() {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="absolute inset-0 z-0 overflow-hidden">
      {images.map((src, index) => (
        <div
          key={src}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === currentIndex ? "opacity-100" : "opacity-0"
          }`}
        >
          <Image
            src={src}
            alt={`LGBTQIA++ Kumintang Ilaya Event ${index + 1}`}
            fill
            className={`object-cover ${
              index === currentIndex ? "animate-ken-burns" : ""
            }`}
            priority={index === 0}
          />
        </div>
      ))}
      <div className="absolute inset-0 bg-gradient-to-r from-[#1A1A2E]/85 via-[#1A1A2E]/60 to-[#0F0F1A]/80" />
    </div>
  );
}
