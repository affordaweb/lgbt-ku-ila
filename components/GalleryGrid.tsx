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
      {/* Filter Buttons */}
      {filters.length > 1 && (
        <div className="flex flex-wrap gap-2 mb-8 justify-center">
          {filters.map((filter) => (
            <button
              key={filter}
              onClick={() => setActiveFilter(filter)}
              className={`px-5 py-2 text-sm font-medium uppercase tracking-wide transition-colors ${
                activeFilter === filter
                  ? "bg-[#e85242] text-white"
                  : "bg-[#f7f7f7] text-[#787878] hover:bg-[#e85242] hover:text-white"
              }`}
            >
              {filter}
            </button>
          ))}
        </div>
      )}

      {/* Gallery Tiles */}
      <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-2">
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
              className="object-cover group-hover:scale-110 transition-transform duration-500"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <div className="absolute bottom-0 left-0 right-0 p-3 text-white opacity-0 group-hover:opacity-100 transition-opacity duration-300">
              <h3 className="font-bold text-sm">{image.alt}</h3>
            </div>
          </button>
        ))}
      </div>

      {/* Lightbox */}
      {selectedIndex !== null && (
        <div
          className="fixed inset-0 z-50 bg-black/90 flex items-center justify-center p-4"
          onClick={closeLightbox}
        >
          <button
            onClick={closeLightbox}
            className="absolute top-4 right-4 text-white/80 hover:text-white z-10"
          >
            <X className="w-8 h-8" />
          </button>
          <button
            onClick={(e) => {
              e.stopPropagation();
              prevImage();
            }}
            className="absolute left-4 text-white/80 hover:text-white z-10"
          >
            <ChevronLeft className="w-10 h-10" />
          </button>
          <div
            className="relative max-w-4xl max-h-[80vh] w-full aspect-video"
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
            className="absolute right-4 text-white/80 hover:text-white z-10"
          >
            <ChevronRight className="w-10 h-10" />
          </button>
          <div className="absolute bottom-4 text-white/70 text-sm">
            {selectedIndex + 1} / {images.length}
          </div>
        </div>
      )}
    </>
  );
}
