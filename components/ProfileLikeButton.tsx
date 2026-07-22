"use client";

import { Heart } from "lucide-react";
import { useEffect, useState } from "react";

export default function ProfileLikeButton({ slug }: { slug: string }) {
  const storageKey = `ku-ila-profile-liked:${slug}`;
  const [count, setCount] = useState<number | null>(null);
  const [liked, setLiked] = useState(false);
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    setLiked(localStorage.getItem(storageKey) === "true");
    fetch(`/api/members/${encodeURIComponent(slug)}/likes`)
      .then(response => response.ok ? response.json() : Promise.reject())
      .then(data => setCount(Number(data.count) || 0))
      .catch(() => setCount(null));
  }, [slug, storageKey]);

  const like = async () => {
    if (liked || loading) return;
    setLoading(true);
    try {
      const response = await fetch(`/api/members/${encodeURIComponent(slug)}/likes`, { method: "POST" });
      if (!response.ok) throw new Error();
      const data = await response.json();
      localStorage.setItem(storageKey, "true");
      setLiked(true);
      setCount(Number(data.count) || 0);
    } finally { setLoading(false); }
  };

  if (count === null) return null;
  return <button type="button" onClick={like} disabled={liked || loading} aria-pressed={liked} className={`inline-flex items-center gap-2 rounded-full border px-4 py-2 text-sm font-semibold transition-colors disabled:cursor-default ${liked ? "border-[#F15A24] bg-[#F15A24] text-white" : "border-[#0A1D4A]/20 bg-white text-[#0A1D4A] hover:border-[#F15A24] hover:text-[#F15A24]"}`}>
    <Heart className={`h-4 w-4 ${liked ? "fill-current" : ""}`} /> {count} {count === 1 ? "like" : "likes"}
  </button>;
}
