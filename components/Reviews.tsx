const GOOGLE_REVIEWS_URL =
  "https://www.google.com/search?q=Softy+%26+Co+Colombo+reviews";

export default function Reviews() {
  return (
    <section
      id="reviews"
      style={{
        background: "#FFF4E2",
        padding: "clamp(64px,8vw,120px) clamp(16px,4vw,56px)",
      }}
    >
      <div
        style={{
          maxWidth: "1100px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,320px),1fr))",
          gap: "clamp(32px,5vw,72px)",
          alignItems: "center",
        }}
      >
        {/* Rating */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            alignItems: "flex-start",
            gap: "8px",
          }}
        >
          <div
            style={{
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontSize: "15px",
              fontFamily: "var(--font-bricolage), sans-serif",
            }}
          >
            Google reviews
          </div>
          <div
            style={{
              fontFamily: "var(--font-bagel), sans-serif",
              fontSize: "clamp(120px,16vw,220px)",
              lineHeight: 0.85,
              color: "#F6A11E",
              WebkitTextStroke: "4px #4A1530",
              paintOrder: "stroke fill",
              textShadow: "10px 10px 0 #4A1530",
            } as React.CSSProperties}
          >
            4.7
          </div>
          <div
            style={{
              fontSize: "34px",
              letterSpacing: "4px",
              color: "#E0263C",
              marginTop: "16px",
            }}
          >
            ★★★★★
          </div>
        </div>

        {/* Copy + buttons */}
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            gap: "20px",
            alignItems: "flex-start",
          }}
        >
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-bagel), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(40px,5vw,68px)",
              lineHeight: 0.95,
            }}
          >
            119 people have already had their swirl
          </h2>
          <p
            style={{
              margin: 0,
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: 1.45,
              maxWidth: "440px",
            }}
          >
            Been in? Tell everyone else what you ordered.
          </p>
          <div style={{ display: "flex", gap: "14px", flexWrap: "wrap" }}>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill"
              style={{
                background: "#4A1530",
                color: "#FFF4E2",
                border: "3px solid #4A1530",
                padding: "14px 26px",
                fontSize: "19px",
                boxShadow: "5px 5px 0 #F6A11E",
              }}
            >
              Read reviews
            </a>
            <a
              href={GOOGLE_REVIEWS_URL}
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill"
              style={{
                background: "#FFF4E2",
                color: "#4A1530",
                border: "3px solid #4A1530",
                padding: "14px 26px",
                fontSize: "19px",
                boxShadow: "5px 5px 0 #4A1530",
              }}
            >
              Write one
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
