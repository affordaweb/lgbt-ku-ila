import Image from "next/image";
import Link from "next/link";
import FacebookIcon from "./FacebookIcon";

interface MemberCardProps {
  name: string;
  image: string;
  role?: string;
  facebookUrl?: string;
  slug: string;
}

export default function MemberCard({
  name,
  image,
  role = "Member",
  facebookUrl,
  slug,
}: MemberCardProps) {
  return (
    <div className="bg-white border border-[#E5DDD3] text-center group card-luxury">
      <Link href={`/members/${slug}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-700"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#1A1A2E]/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
        </div>
      </Link>
      <div className="p-5">
        <Link href={`/members/${slug}`}>
          <h3 className="font-bold text-[#1A1A2E] text-lg hover:text-[#7B2D8E] transition-colors font-[var(--font-playfair)]">
            {name}
          </h3>
        </Link>
        <p className="text-xs text-[#D4AF37] uppercase tracking-wider mt-1 font-medium">{role}</p>
        {facebookUrl && (
          <div className="flex justify-center gap-3 mt-4">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#E5DDD3] flex items-center justify-center hover:border-[#D4AF37] hover:text-[#D4AF37] transition-colors text-[#6B7280]"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
