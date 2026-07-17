import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos and memories from LGBTQIA++ SILBI Kumintang Ilaya events, gatherings, and celebrations.",
};

const categories = ["Gallery", "Community", "Health", "Advocacy"];

export default function GalleryPage() {
  return (
    <main>
      <HeroSection
        title="Gallery"
        subtitle="Home / Gallery"
        backgroundImage="/images/stock/stock-05.jpg"
      />

      <section className="section-padding bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="mb-14">
            <p className="text-[#f3702b] text-xs uppercase tracking-[0.2em] mb-4 font-medium">Gallery</p>
            <h2 className="section-heading text-3xl">
              Photo Gallery
            </h2>
          </div>
          <GalleryGrid images={galleryImages} categories={categories} />
        </div>
      </section>
    </main>
  );
}
