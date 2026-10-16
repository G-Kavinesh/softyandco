const PHRASE =
  "SWIRLING IN GOOD TIMES  •  SOFT SERVE  •  SUNDAES  •  NEW DROPS  •  ";

export default function Marquee() {
  const text = PHRASE.repeat(4);

  return (
    <div
      style={{
        background: "#4A1530",
        borderTop: "4px solid #4A1530",
        borderBottom: "4px solid #4A1530",
        padding: "18px 0",
        overflow: "hidden",
        position: "relative",
        zIndex: 2,
      }}
    >
      <div
        className="marquee-track"
        style={{
          display: "flex",
          width: "max-content",
          whiteSpace: "pre",
          animation: "softy-marquee 30s linear infinite",
          fontFamily: "'Bagel Fat One', var(--font-bagel), sans-serif",
          fontSize: "clamp(36px,5vw,72px)",
          lineHeight: 1,
          color: "#F6A11E",
        }}
      >
        <span>{text}</span>
        <span>{text}</span>
      </div>
    </div>
  );
}
