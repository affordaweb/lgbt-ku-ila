import { ImageResponse } from "next/og";
import { Buffer } from "node:buffer";
import { readFile } from "node:fs/promises";

export const alt = "LGBTQIA++ SILBI Kumintang Ilaya — Kahit ano ka, Love ka!";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default async function OpenGraphImage() {
  const logo = `data:image/jpeg;base64,${Buffer.from(await readFile(new URL("../public/images/logo/731350583_10238772116515608_5057049016834242279_n.jpg", import.meta.url))).toString("base64")}`;

  return new ImageResponse(
    <div style={{ alignItems: "center", background: "#071426", color: "white", display: "flex", height: "100%", overflow: "hidden", padding: "68px 82px", position: "relative", width: "100%" }}>
      <div style={{ border: "1px solid rgba(241,90,36,.45)", borderRadius: 999, height: 720, opacity: .72, position: "absolute", right: -190, top: -270, width: 720 }} />
      <div style={{ border: "1px solid rgba(241,90,36,.25)", borderRadius: 999, height: 500, opacity: .65, position: "absolute", right: -78, top: -160, width: 500 }} />
      <div style={{ alignItems: "center", background: "white", borderRadius: 999, display: "flex", height: 116, justifyContent: "center", marginRight: 38, overflow: "hidden", width: 116 }}>
        <img alt="LGBTQIA++ SILBI Kumintang Ilaya logo" src={logo} style={{ borderRadius: 999, height: 104, objectFit: "cover", width: 104 }} />
      </div>
      <div style={{ display: "flex", flexDirection: "column", maxWidth: 790 }}>
        <div style={{ color: "#f4a137", display: "flex", fontFamily: "sans-serif", fontSize: 19, fontWeight: 700, letterSpacing: 4, marginBottom: 24, textTransform: "uppercase" }}>LGBTQIA++ SILBI KUMINTANG ILAYA</div>
        <div style={{ display: "flex", flexDirection: "column", fontFamily: "Georgia, serif", fontSize: 72, fontWeight: 500, letterSpacing: -3, lineHeight: 1.03 }}>A community where<br />everyone can belong.</div>
        <div style={{ color: "#f15a24", display: "flex", fontFamily: "cursive", fontSize: 43, fontStyle: "italic", marginTop: 25 }}>Kahit ano ka, Love ka!</div>
      </div>
    </div>,
    size,
  );
}
