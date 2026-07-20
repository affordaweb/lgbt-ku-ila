import QRCode from "qrcode";

const siteUrl = "https://lgbt-ku-ila.vercel.app";

export async function GET() {
  const qrCode = await QRCode.toBuffer(siteUrl, {
    type: "png",
    width: 512,
    margin: 1,
    errorCorrectionLevel: "H",
    color: { dark: "#0A1D4A", light: "#FFFFFFFF" },
  });

  return new Response(new Uint8Array(qrCode), {
    headers: {
      "Content-Type": "image/png",
      "Cache-Control": "public, max-age=31536000, immutable",
    },
  });
}
