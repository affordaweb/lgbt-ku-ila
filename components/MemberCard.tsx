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
    <div className="bg-white border border-[#e4e4e4] text-center group hover:shadow-lg transition-shadow duration-300">
      <Link href={`/members/${slug}`}>
        <div className="relative aspect-square overflow-hidden">
          <Image
            src={image}
            alt={name}
            fill
            className="object-cover group-hover:scale-105 transition-transform duration-500"
          />
        </div>
      </Link>
      <div className="p-4 border-t-2 border-[#e85242]">
        <Link href={`/members/${slug}`}>
          <h3 className="font-bold text-[#3a3d44] text-lg hover:text-[#e85242] transition-colors">
            {name}
          </h3>
        </Link>
        <p className="text-sm text-[#787878] mt-1">{role}</p>
        {facebookUrl && (
          <div className="flex justify-center gap-3 mt-3">
            <a
              href={facebookUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="w-8 h-8 rounded-full border border-[#e4e4e4] flex items-center justify-center hover:border-[#e85242] hover:text-[#e85242] transition-colors text-[#787878]"
            >
              <FacebookIcon className="w-4 h-4" />
            </a>
          </div>
        )}
      </div>
    </div>
  );
}
