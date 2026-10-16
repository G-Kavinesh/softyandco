import { MenuCategory } from "@/data/menu";

interface Props {
  category: MenuCategory;
}

export default function MenuCard({ category }: Props) {
  const {
    title,
    tagline,
    bg,
    ink,
    titleColor,
    taglineColor,
    pillBg,
    pillInk,
    shadowColor,
    items,
  } = category;

  return (
    <div
      style={{
        background: bg,
        color: ink,
        border: "4px solid #4A1530",
        borderRadius: "28px",
        boxShadow: `8px 8px 0 ${shadowColor}`,
        padding: "clamp(24px,3vw,36px)",
        display: "flex",
        flexDirection: "column",
        gap: "22px",
      }}
    >
      <div style={{ display: "flex", flexDirection: "column", gap: "6px" }}>
        <h3
          style={{
            margin: 0,
            fontFamily: "'Bagel Fat One', var(--font-bagel), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(40px,4vw,56px)",
            lineHeight: 0.95,
            color: titleColor,
            WebkitTextStroke: bg === "#4A1530" ? "3px #2A0A18" : "3px #4A1530",
            paintOrder: "stroke fill",
            textShadow: bg === "#4A1530" ? "5px 5px 0 #2A0A18" : "5px 5px 0 #4A1530",
          } as React.CSSProperties}
        >
          {title}
        </h3>
        <div
          style={{
            fontWeight: 800,
            letterSpacing: "0.1em",
            textTransform: "uppercase",
            fontSize: "15px",
            color: taglineColor,
            fontFamily: "var(--font-bricolage), sans-serif",
          }}
        >
          {tagline}
        </div>
      </div>

      <div style={{ display: "flex", flexDirection: "column", gap: "14px" }}>
        {items.map((item) => (
          <div
            key={item.name}
            style={{
              display: "flex",
              alignItems: "center",
              justifyContent: "space-between",
              gap: "16px",
            }}
          >
            <span
              style={{
                fontWeight: 800,
                fontSize: "19px",
                lineHeight: 1.2,
                textTransform: "uppercase",
                fontFamily: "var(--font-bricolage), sans-serif",
              }}
            >
              {item.name}
            </span>
            <span
              style={{
                flexShrink: 0,
                background: pillBg,
                color: pillInk,
                borderRadius: "999px",
                padding: "5px 14px",
                fontWeight: 800,
                fontSize: "15px",
                whiteSpace: "nowrap",
                fontFamily: "var(--font-bricolage), sans-serif",
              }}
            >
              {item.price}
            </span>
          </div>
        ))}
      </div>
    </div>
  );
}
