import { Metadata } from "next";
import HeroSection from "@/components/HeroSection";
import GalleryGrid from "@/components/GalleryGrid";
import { galleryImages } from "@/lib/data";

export const metadata: Metadata = {
  title: "Gallery",
  description:
    "Browse photos and memories from LGBT Ku-Ila events, gatherings, and celebrations.",
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
        <div className="max-w-7xl mx-auto">
          <div className="mb-12">
            <h2 className="section-heading text-2xl">
              Photo Gallery
            </h2>
          </div>
          <GalleryGrid images={galleryImages} categories={categories} />
        </div>
      </section>
    </main>
  );
}
