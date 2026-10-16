import Image from "next/image";

export default function GoodTimes() {
  return (
    <section
      style={{
        background: "#F7B8D2",
        borderTop: "4px solid #4A1530",
        borderBottom: "4px solid #4A1530",
        padding: "clamp(48px,7vw,96px) clamp(12px,3vw,40px)",
        position: "relative",
        textAlign: "center",
      }}
    >
      <div
        style={{
          fontFamily: "'Bagel Fat One', var(--font-bagel), sans-serif",
          fontSize: "clamp(48px,11.5vw,190px)",
          lineHeight: 0.9,
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {[
          { color: "#E0263C" },
          { color: "#F6A11E" },
          { color: "#4CC3EA" },
        ].map(({ color }, i) => (
          <span
            key={i}
            style={{
              color,
              WebkitTextStroke: "3px #4A1530",
              paintOrder: "stroke fill",
              textShadow: "8px 8px 0 #4A1530",
            } as React.CSSProperties}
          >
            GOOD TIMES
          </span>
        ))}
      </div>

      {/* Floating vanilla swirl */}
      <div
        style={{
          position: "absolute",
          left: "50%",
          top: "50%",
          width: "clamp(160px,24vw,340px)",
          aspectRatio: "1",
          transform: "translate(-50%,-50%) rotate(-6deg)",
        }}
      >
        <Image
          src="/vanillaswirl.png"
          alt="Vanilla Swirl"
          fill
          style={{ objectFit: "contain" }}
        />
      </div>
    </section>
  );
}
