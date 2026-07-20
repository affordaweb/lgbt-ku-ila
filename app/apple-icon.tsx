import { ImageResponse } from "next/og";
import { Buffer } from "node:buffer";
import { readFile } from "node:fs/promises";

export const size = { width: 180, height: 180 };
export const contentType = "image/png";

export default async function AppleIcon() {
  const logo = `data:image/jpeg;base64,${Buffer.from(await readFile(new URL("../public/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg", import.meta.url))).toString("base64")}`;
  return new ImageResponse(
    <div style={{ alignItems: "center", background: "#0a1d4a", display: "flex", height: "100%", justifyContent: "center", width: "100%" }}>
      <div style={{ alignItems: "center", background: "#ffffff", borderRadius: "50%", display: "flex", height: 150, justifyContent: "center", overflow: "hidden", width: 150 }}>
        <img alt="LGBTQIA++ SILBI Kumintang Ilaya logo" src={logo} style={{ borderRadius: "50%", height: 138, objectFit: "cover", width: 138 }} />
      </div>
    </div>,
    size,
  );
}
