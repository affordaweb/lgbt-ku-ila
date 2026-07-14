"use client";

import { useState } from "react";
import Image from "next/image";
import { X, ChevronLeft, ChevronRight } from "lucide-react";

interface GalleryImage {
  src: string;
  alt: string;
}

interface GalleryGridProps {
  images: GalleryImage[];
  categories?: string[];
}

export default function GalleryGrid({ images, categories = [] }: GalleryGridProps) {
  const [selectedIndex, setSelectedIndex] = useState<number | null>(null);
  const [activeFilter, setActiveFilter] = useState("All");

  const filters = ["All", ...categories];

  const openLightbox = (index: number) => setSelectedIndex(index);
  const closeLightbox = () => setSelectedIndex(null);
  const prevImage = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev - 1 + images.length) % images.length : null
    );
  const nextImage = () =>
    setSelectedIndex((prev) =>
      prev !== null ? (prev + 1) % images.length : null
    );

  return (
    <>
      {filters.length > 1 && (
        <div className="flex flex-wrap gap-3 mb-10 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? "bg-[#7B2D8E] text-white shadow-lg shadow-[#7B2D8E]/20"
                  : "bg-[#FAF8F5] text-[#6B7280] hover:bg-[#7B2D8E] hover:text-white border border-[#E5DDD3]"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-3">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-square overflow-hidden group cursor-pointer"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/80 via-[#1A1A2E]/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
              <h3 className="font-bold text-sm font-[var(--font-playfair)]">{image.alt}</h3>
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#0F0F1A]/95 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-6 right-6 text-white/60 hover:text-white z-10 transition-colors"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-6 text-white/60 hover:text-white z-10 transition-colors"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <div
            className="relative max-w-5xl max-h-[85vh] w-full aspect-video"
            onClick={(e) => e.stopPropagation()}
          >
            <Image
              src={images[selectedIndex].src}
              alt={images[selectedIndex].alt}
              fill
              className="object-contain"
            />
          </div>
          <button
            onClick={(e) => {
              e.stopPropagation();
              nextImage();
            }}
            className="absolute right-6 text-white/60 hover:text-white z-10 transition-colors"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="absolute bottom-6 text-white/50 text-sm tracking-wider">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
