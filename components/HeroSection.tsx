import Image from "next/image";

interface HeroSectionProps {
  title: string;
  subtitle?: string;
  description?: string;
  backgroundImage?: string;
}

export default function HeroSection({
  title,
  subtitle,
  description,
  backgroundImage = "/images/stock/stock-01.jpg",
}: HeroSectionProps) {
  return (
    <section className="relative min-h-[400px] flex items-center overflow-hidden">
      <div className="absolute inset-0 z-0">
        <Image
          src={backgroundImage}
          alt={title}
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-gradient-to-r from-[#3a3d44]/90 via-[#3a3d44]/75 to-[#1f222b]/80" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 w-full">
        {subtitle && (
          <p className="text-[#f3702b] text-xs uppercase tracking-[0.2em] mb-4 font-medium">
            {subtitle}
          </p>
        )}
        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
          {title}
        </h1>
        {description && (
          <p className="text-white/60 text-base max-w-2xl leading-relaxed">
            {description}
          </p>
        )}
        <div className="w-20 h-0.5 bg-gradient-to-r from-[#f3702b] to-transparent mt-6" />
      </div>
    </section>
  );
}
