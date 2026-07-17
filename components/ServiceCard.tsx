import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  bg?: string;
}

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  bg = "bg-[#3a3d44]",
}: ServiceCardProps) {
  return (
    <div className={`${bg} p-8 text-white group relative overflow-hidden`}>
      <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 bg-gradient-to-br from-white/10 to-transparent" />
      <div className="relative z-10">
        <div className="w-14 h-14 bg-white/10 flex items-center justify-center mb-6">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <h4 className="text-xl font-bold mb-3 text-white">
          {title}
        </h4>
        <p className="text-sm leading-relaxed text-white/80">
          {description}
        </p>
      </div>
    </div>
  );
}
