import { LucideIcon, ArrowRight } from "lucide-react";

interface ProgramCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
}

export default function ProgramCard({ icon: Icon, title, description }: ProgramCardProps) {
  return (
    <div className="group bg-white rounded-2xl border border-[#E5E7EB] p-6 lg:p-8 card-hover cursor-pointer">
      <div className="w-12 h-12 rounded-xl bg-[#F15A4A]/10 flex items-center justify-center mb-5 group-hover:bg-[#F15A4A] transition-all duration-300">
        <Icon className="w-5 h-5 text-[#F15A4A] group-hover:text-white transition-colors" />
      </div>
      <h3 className="font-heading text-xl text-[#1F2937] mb-3">{title}</h3>
      <p className="text-[#374151] text-sm leading-relaxed mb-4">{description}</p>
      <div className="inline-flex items-center gap-2 text-sm font-medium text-[#F15A4A] opacity-0 group-hover:opacity-100 transition-all duration-300 translate-x-[-8px] group-hover:translate-x-0">
        <span>Learn more</span>
        <ArrowRight className="w-3.5 h-3.5" />
      </div>
    </div>
  );
}
