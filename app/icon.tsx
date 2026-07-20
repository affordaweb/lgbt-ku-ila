import { ImageResponse } from "next/og";
import { Buffer } from "node:buffer";
import { readFile } from "node:fs/promises";

export const size = { width: 512, height: 512 };
export const contentType = "image/png";

export default async function Icon() {
  const logo = `data:image/jpeg;base64,${Buffer.from(await readFile(new URL("../public/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg", import.meta.url))).toString("base64")}`;
  return new ImageResponse(
    <div style={{ alignItems: "center", background: "#0a1d4a", display: "flex", height: "100%", justifyContent: "center", width: "100%" }}>
      <div style={{ alignItems: "center", background: "#ffffff", borderRadius: "50%", boxShadow: "0 18px 40px rgba(0,0,0,.28)", display: "flex", height: 430, justifyContent: "center", overflow: "hidden", width: 430 }}>
        <img alt="LGBTQIA++ SILBI Kumintang Ilaya logo" src={logo} style={{ borderRadius: "50%", height: 398, objectFit: "cover", width: 398 }} />
      </div>
    </div>,
    size,
  );
}
