export default function Visit() {
  return (
    <section
      id="visit"
      style={{
        background: "#4CC3EA",
        borderTop: "4px solid #4A1530",
        padding: "clamp(64px,8vw,120px) clamp(16px,4vw,56px)",
      }}
    >
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
          gap: "clamp(32px,4vw,56px)",
          alignItems: "stretch",
        }}
      >
        {/* Left: heading + card */}
        <div style={{ display: "flex", flexDirection: "column", gap: "48px" }}>
          <h2
            style={{
              margin: 0,
              fontFamily: "var(--font-bagel), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(40px,5.5vw,84px)",
              lineHeight: 0.95,
              color: "#FFF4E2",
              WebkitTextStroke: "3px #4A1530",
              paintOrder: "stroke fill",
              textShadow: "7px 7px 0 #4A1530",
            } as React.CSSProperties}
          >
            Come swirl<br />with us
          </h2>

          <div
            style={{
              background: "#FFF4E2",
              border: "4px solid #4A1530",
              borderRadius: "24px",
              boxShadow: "8px 8px 0 #4A1530",
              padding: "28px",
              display: "flex",
              flexDirection: "column",
              gap: "20px",
            }}
          >
            {/* Hours */}
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "auto 1fr",
                gap: "12px 24px",
                fontSize: "20px",
                fontFamily: "var(--font-bricolage), sans-serif",
              }}
            >
              <div style={{ fontWeight: 800 }}>Mon – Thu</div>
              <div style={{ fontWeight: 600 }}>12pm – 12am</div>
              <div style={{ fontWeight: 800 }}>Fri – Sun</div>
              <div style={{ fontWeight: 600 }}>12pm – 1am</div>
            </div>

            <div
              style={{
                height: "3px",
                background: "#4A1530",
                borderRadius: "2px",
              }}
            />

            {/* Address */}
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                gap: "8px",
                fontSize: "20px",
                fontWeight: 600,
                lineHeight: 1.4,
                fontFamily: "var(--font-bricolage), sans-serif",
              }}
            >
              <div>27/1 Visaka Rd, Colombo 00400</div>
              <div style={{ fontSize: "16px", opacity: 0.85 }}>
                Colombo 04 · Duplication Rd
              </div>
              <a
                href="tel:+94114701333"
                style={{ fontWeight: 800, color: "#4A1530" }}
              >
                0114 701 333
              </a>
            </div>

            {/* Directions button */}
            <a
              href="https://www.google.com/maps/dir/?api=1&destination=Softy+%26+Co+27%2F1+Visaka+Rd+Colombo"
              target="_blank"
              rel="noopener noreferrer"
              className="btn-pill"
              style={{
                alignSelf: "flex-start",
                background: "#E0263C",
                color: "#FFF4E2",
                border: "3px solid #4A1530",
                padding: "14px 26px",
                fontSize: "19px",
                boxShadow: "5px 5px 0 #4A1530",
              }}
            >
              Get directions
            </a>
          </div>
        </div>

        {/* Right: map */}
        <div
          style={{
            border: "4px solid #4A1530",
            borderRadius: "24px",
            overflow: "hidden",
            boxShadow: "8px 8px 0 #4A1530",
            minHeight: "420px",
            background: "#FFF4E2",
          }}
        >
          <iframe
            title="Map"
            src="https://maps.google.com/maps?q=Softy%20%26%20Co%2027%2F1%20Visaka%20Rd%20Colombo&z=16&output=embed"
            style={{
              width: "100%",
              height: "100%",
              minHeight: "420px",
              border: 0,
              display: "block",
            }}
            loading="lazy"
          />
        </div>
      </div>
    </section>
  );
}
