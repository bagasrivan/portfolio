import { ImageResponse } from "next/og";

export const alt = "Bagaskara Ridho Vandio | Portfolio";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function Image() {
  return new ImageResponse(
    <div
      style={{
        width: "100%",
        height: "100%",
        display: "flex",
        flexDirection: "column",
        justifyContent: "center",
        padding: 80,
        background: "#faf9f5",
        color: "#29261b",
      }}
    >
      <div
        style={{
          width: 96,
          height: 96,
          borderRadius: 48,
          background: "#c96442",
          color: "#ffffff",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
          fontSize: 56,
        }}
      >
        B
      </div>
      <div style={{ display: "flex", fontSize: 76, marginTop: 40 }}>
        Bagaskara Ridho Vandio
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 36,
          marginTop: 16,
          color: "#6b6860",
        }}
      >
        AI/ML Engineer
      </div>
      <div
        style={{
          display: "flex",
          fontSize: 28,
          marginTop: 48,
          color: "#c96442",
        }}
      >
        Ask me anything about my projects and experience.
      </div>
    </div>,
    { ...size },
  );
}
