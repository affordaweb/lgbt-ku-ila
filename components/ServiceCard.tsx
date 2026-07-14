import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "red" | "orange" | "yellow" | "teal";
}

const gradientClasses = {
  red: "from-[#7B2D8E] to-[#9B4DAC]",
  orange: "from-[#D4AF37] to-[#E8C84A]",
  yellow: "from-[#1A1A2E] to-[#2D2D4E]",
  teal: "from-[#7B2D8E] to-[#D4AF37]",
};

const iconBgClasses = {
  red: "bg-white/15",
  orange: "bg-[#1A1A2E]/10",
  yellow: "bg-white/15",
  teal: "bg-white/15",
};

const titleColorClasses = {
  red: "text-white",
  orange: "text-[#1A1A2E]",
  yellow: "text-white",
  teal: "text-white",
};

const descColorClasses = {
  red: "text-white/70",
  orange: "text-[#1A1A2E]/70",
  yellow: "text-white/70",
  teal: "text-white/70",
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  color = "red",
}: ServiceCardProps) {
  return (
    <div className={`bg-gradient-to-br ${gradientClasses[color]} p-8 text-white group relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-white/5" />
      <div className="relative z-10">
        <div className={`w-14 h-14 ${iconBgClasses[color]} flex items-center justify-center mb-6`}>
          <Icon className="w-6 h-6" />
        </div>
        <h4 className={`text-xl font-bold mb-3 font-[var(--font-playfair)] ${titleColorClasses[color]}`}>
          {title}
        </h4>
        <p className={`text-sm leading-relaxed ${descColorClasses[color]}`}>
          {description}
        </p>
      </div>
    </div>
  );
}
