import { ImageResponse } from "next/og";

export const runtime = "edge";
export const alt = "Meridian Law";
export const size = { width: 1200, height: 630 };
export const contentType = "image/png";

export default function OGImage() {
  return new ImageResponse(
    (
      <div
        style={{
          width: "100%",
          height: "100%",
          display: "flex",
          background: "#1A1714",
          position: "relative",
          overflow: "hidden",
        }}
      >
        {/* Gold accent top-right */}
        <div
          style={{
            position: "absolute",
            top: 0,
            right: 0,
            width: 400,
            height: 400,
            borderRadius: "50%",
            background: "#C9A84C",
            opacity: 0.08,
            filter: "blur(80px)",
          }}
        />
        {/* Gold accent bottom-left */}
        <div
          style={{
            position: "absolute",
            bottom: 0,
            left: 0,
            width: 300,
            height: 300,
            borderRadius: "50%",
            background: "#C9A84C",
            opacity: 0.06,
            filter: "blur(60px)",
          }}
        />

        {/* Left gold border */}
        <div
          style={{
            position: "absolute",
            left: 60,
            top: 60,
            bottom: 60,
            width: 3,
            background: "#C9A84C",
            opacity: 0.6,
          }}
        />

        {/* Content */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "space-between",
            padding: "70px 80px 70px 100px",
            width: "100%",
          }}
        >
          {/* Top: label */}
          <div
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
            }}
          >
            <div style={{ width: 40, height: 2, background: "#C9A84C" }} />
            <span
              style={{
                color: "#C9A84C",
                fontSize: 14,
                letterSpacing: "0.25em",
                textTransform: "uppercase",
                fontWeight: 600,
              }}
            >
              Юридична фірма · Одеса
            </span>
          </div>

          {/* Middle: main text */}
          <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
            <div
              style={{
                fontSize: 80,
                fontWeight: 700,
                color: "#FFFFFF",
                lineHeight: 1.05,
                letterSpacing: "-0.02em",
              }}
            >
              Meridian
              <br />
              <span style={{ color: "#C9A84C" }}>Law</span>
            </div>
            <div
              style={{
                fontSize: 22,
                color: "rgba(255,255,255,0.55)",
                maxWidth: 580,
                lineHeight: 1.5,
              }}
            >
              Реалізуй своє право впевнено. Стратегічний підхід, чіткі результати.
            </div>
          </div>

          {/* Bottom: stats */}
          <div style={{ display: "flex", gap: 48, alignItems: "flex-end" }}>
            {[
              { num: "10+", label: "Років досвіду" },
              { num: "300+", label: "Виграних справ" },
              { num: "98%", label: "Задоволених клієнтів" },
            ].map((s) => (
              <div key={s.label} style={{ display: "flex", flexDirection: "column", gap: 4 }}>
                <span style={{ fontSize: 36, fontWeight: 700, color: "#C9A84C" }}>
                  {s.num}
                </span>
                <span
                  style={{
                    fontSize: 11,
                    color: "rgba(255,255,255,0.4)",
                    textTransform: "uppercase",
                    letterSpacing: "0.15em",
                  }}
                >
                  {s.label}
                </span>
              </div>
            ))}

            {/* ELF badge */}
            <div
              style={{
                marginLeft: "auto",
                background: "#C9A84C",
                padding: "16px 28px",
                display: "flex",
                flexDirection: "column",
                alignItems: "center",
              }}
            >
              <span style={{ fontSize: 22, fontWeight: 700, color: "#fff" }}>ML</span>
              <span style={{ fontSize: 10, color: "rgba(255,255,255,0.8)", letterSpacing: "0.2em" }}>
                SINCE 2014
              </span>
            </div>
          </div>
        </div>
      </div>
    ),
    { ...size }
  );
}
