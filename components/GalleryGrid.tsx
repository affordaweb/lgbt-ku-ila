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
        <div className="flex flex-wrap gap-3 mb-12 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-6 py-2.5 text-sm font-medium uppercase tracking-wider transition-all duration-300 ${
                activeFilter === filter
                  ? "rounded-full bg-[#f15a24] text-white shadow-lg shadow-[#f15a24]/20"
                  : "rounded-full border border-[#0a1d4a]/15 bg-transparent text-[#0a1d4a] hover:border-[#f15a24] hover:bg-[#f15a24] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-5">
        {images.map((image, index) => (
          <button
            key={index}
            onClick={() => openLightbox(index)}
            className="relative aspect-square overflow-hidden rounded-[18px] shadow-[0_14px_30px_rgba(0,0,0,.12)] group cursor-pointer transition duration-500 hover:-translate-y-1 hover:shadow-[0_22px_42px_rgba(0,0,0,.16)]"
          >
            <Image
              src={image.src}
              alt={image.alt}
              fill
              className="object-cover group-hover:scale-110 transition-transform duration-700"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-[#0a1d4a]/80 via-[#0a1d4a]/15 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
            <div className="absolute bottom-0 left-0 right-0 p-4 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-500 translate-y-2 group-hover:translate-y-0">
              <h3 className="font-bold text-sm">{image.alt}</h3>
            </div>
          </button>
        ))}
      </div>

      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-[#1f222b]/95 flex items-center justify-center p-4"
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
