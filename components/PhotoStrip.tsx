import Image from "next/image";

const srcs = [
  "/googleimages/1.webp",
  "/googleimages/2.webp",
  "/googleimages/3.webp",
  "/googleimages/4.webp",
  "/googleimages/5.webp",
  "/googleimages/6.webp",
  "/googleimages/9.webp",
  "/googleimages/10.webp",
];

// 4x for seamless loop (animate to -25%)
const photos = [...srcs, ...srcs, ...srcs, ...srcs];

const words = Array(10).fill("SWIRLING IN GOOD TIMES · ").join("");

export default function PhotoStrip() {
  return (
    <div style={{ borderTop: "4px solid #4A1530", borderBottom: "4px solid #4A1530", overflow: "hidden" }}>
      {/* Photo reel */}
      <div style={{ overflow: "hidden" }}>
        <div
          style={{
            display: "inline-flex",
            animation: "photo-strip 16s linear infinite",
            willChange: "transform",
          }}
        >
          {photos.map((src, i) => (
            <div
              key={i}
              style={{
                flexShrink: 0,
                width: "50vw",
                height: "50vw",
                maxWidth: "320px",
                maxHeight: "320px",
                position: "relative",
              }}
            >
              <Image
                src={src}
                alt="Softy & Co"
                fill
                style={{ objectFit: "cover" }}
              />
            </div>
          ))}
        </div>
      </div>

      {/* Text marquee banner */}
      <div
        style={{
          background: "#E0263C",
          borderTop: "4px solid #4A1530",
          padding: "14px 0",
          overflow: "hidden",
        }}
      >
        <div
          className="marquee-track"
          style={{
            display: "flex",
            gap: "0",
            animation: "softy-marquee 12s linear infinite",
            willChange: "transform",
            whiteSpace: "nowrap",
          }}
        >
          <span
            style={{
              fontFamily: "var(--font-bagel), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(24px,3.5vw,44px)",
              color: "#FFF4E2",
              WebkitTextStroke: "2px #4A1530",
              paintOrder: "stroke fill",
              letterSpacing: "0.04em",
              paddingRight: "40px",
            } as React.CSSProperties}
          >
            {words}
          </span>
          <span
            aria-hidden
            style={{
              fontFamily: "var(--font-bagel), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(24px,3.5vw,44px)",
              color: "#FFF4E2",
              WebkitTextStroke: "2px #4A1530",
              paintOrder: "stroke fill",
              letterSpacing: "0.04em",
              paddingRight: "40px",
            } as React.CSSProperties}
          >
            {words}
          </span>
        </div>
      </div>
    </div>
  );
}
