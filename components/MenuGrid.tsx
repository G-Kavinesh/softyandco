import { menuCategories } from "@/data/menu";
import MenuCard from "./MenuCard";

export default function MenuGrid() {
  return (
    <section
      id="full-menu"
      style={{
        background: "#FFF4E2",
        borderTop: "4px solid #4A1530",
        padding: "clamp(64px,8vw,120px) clamp(16px,4vw,56px)",
      }}
    >
      <div
        style={{
          maxWidth: "1280px",
          margin: "0 auto",
          display: "flex",
          flexDirection: "column",
          gap: "clamp(36px,5vw,56px)",
        }}
      >
        {/* Header */}
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "20px",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "'Bagel Fat One', var(--font-bagel), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(56px,8vw,120px)",
              lineHeight: 0.9,
              color: "#E0263C",
              WebkitTextStroke: "3px #4A1530",
              paintOrder: "stroke fill",
              textShadow: "7px 7px 0 #4A1530",
            } as React.CSSProperties}
          >
            The Menu
          </h2>
          <div
            style={{
              fontWeight: 800,
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              fontSize: "15px",
              fontFamily: "var(--font-bricolage), sans-serif",
            }}
          >
            All prices in LKR
          </div>
        </div>

        {/* Grid */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill,minmax(min(100%,360px),1fr))",
            gap: "clamp(20px,2.5vw,32px)",
            alignItems: "start",
          }}
        >
          {menuCategories.map((cat, i) => (
            <MenuCard key={`${cat.title}-${i}`} category={cat} />
          ))}
        </div>
      </div>
    </section>
  );
}
