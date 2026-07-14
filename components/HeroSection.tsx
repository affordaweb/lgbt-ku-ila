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
        <div className="absolute inset-0 bg-[#3a3d44]/75" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-20 text-center w-full">
        <h1 className="text-4xl md:text-5xl font-bold text-white mb-4 uppercase tracking-wide">
          {title}
        </h1>
        {subtitle && (
          <p className="text-white/70 text-sm uppercase tracking-widest">
            {subtitle}
          </p>
        )}
        {description && (
          <p className="text-white/70 text-base max-w-2xl mx-auto mt-4 leading-relaxed">
            {description}
          </p>
        )}
      </div>
    </section>
  );
}
