import { LucideIcon } from "lucide-react";

interface ServiceCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  color?: "red" | "orange" | "yellow" | "teal";
}

const colorClasses = {
  red: "service-card-red",
  orange: "service-card-orange",
  yellow: "service-card-yellow",
  teal: "service-card-teal-bg",
};

export default function ServiceCard({
  icon: Icon,
  title,
  description,
  color = "red",
}: ServiceCardProps) {
  return (
    <div className={`${colorClasses[color]} p-8 text-white`}>
      <div className="flex items-start gap-4">
        <div className="w-12 h-12 rounded-full bg-white/20 flex items-center justify-center shrink-0">
          <Icon className="w-6 h-6 text-white" />
        </div>
        <div>
          <h4 className="text-lg font-bold mb-2">{title}</h4>
          <p className="text-white/80 text-sm leading-relaxed">{description}</p>
        </div>
      </div>
    </div>
  );
}
