"use client";
import QRCode from "qrcode.react";

export default function Home() {
  const qrValue = "https://karang-taruna-kertaaji.vercel.app/";
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        justifyContent: "center",
        height: "100vh",
      }}
    >
      <h1>Scan this QR Code</h1>
      <QRCode
        value={qrValue}
        size={256}
        bgColor="#ffffff"
        fgColor="#000000"
        level="H"
        includeMargin={true}
      />
    </div>
  );
}
