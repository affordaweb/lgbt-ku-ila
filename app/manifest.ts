import type { MetadataRoute } from "next";

export default function manifest(): MetadataRoute.Manifest {
  return {
    name: "LGBTQIA++ SILBI Kumintang Ilaya",
    short_name: "Ku-Ila",
    description: "Community, advocacy, and belonging for LGBTQIA++ people in Kumintang Ilaya.",
    start_url: "/",
    scope: "/",
    display: "standalone",
    background_color: "#f7f5f0",
    theme_color: "#0a1d4a",
    orientation: "any",
    icons: [
      { src: "/icon", sizes: "512x512", type: "image/png", purpose: "any" },
      { src: "/apple-icon", sizes: "180x180", type: "image/png", purpose: "any" },
    ],
  };
}
