"use client";

import { useEffect } from "react";

const reels = [
  { url: "https://www.instagram.com/reel/DctOWhQIrUE/", color: "#E0263C" },
  { url: "https://www.instagram.com/reel/DdEiVPfIneO/", color: "#4CC3EA" },
  { url: "https://www.instagram.com/reel/Dc087jtov9I/", color: "#F6A11E" },
  { url: "https://www.instagram.com/reel/DeC6CekolzH/", color: "#F7B8D2" },
];

export default function InstagramGrid() {
  useEffect(() => {
    // If the embed script already loaded, re-process new blockquotes
    // eslint-disable-next-line @typescript-eslint/no-explicit-any
    (window as any).instgrm?.Embeds?.process();
  }, []);

  return (
    <section
      style={{
        background: "#FFF4E2",
        borderTop: "4px solid #4A1530",
        paddingTop: "clamp(56px,7vw,96px)",
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
          padding: "0 clamp(16px,4vw,56px) 36px",
          maxWidth: "1300px",
          margin: "0 auto",
        }}
      >
        <h2
          style={{
            margin: 0,
            fontFamily: "var(--font-bagel), sans-serif",
            fontWeight: 400,
            fontSize: "clamp(36px,5.5vw,76px)",
            lineHeight: 0.95,
          }}
        >
          @softyandco_
        </h2>
        <a
          href="https://www.instagram.com/softyandco_/"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill"
          style={{
            background: "#F6A11E",
            color: "#4A1530",
            border: "3px solid #4A1530",
            padding: "12px 22px",
            fontSize: "17px",
            boxShadow: "5px 5px 0 #4A1530",
          }}
        >
          Follow along
        </a>
      </div>

      {/* Reel embeds */}
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit, minmax(min(100%, 280px), 1fr))",
          borderTop: "4px solid #4A1530",
          gap: "clamp(20px,2vw,24px)",
          padding: "clamp(16px,3vw,32px)",
          background: "#FFF4E2",
          alignItems: "start",
        }}
      >
        {reels.map(({ url, color }) => (
          <div
            key={url}
            style={{
              border: `14px solid ${color}`,
              borderRadius: "16px",
              outline: "4px solid #4A1530",
              overflow: "hidden",
              boxShadow: `6px 6px 0 #4A1530`,
              maxHeight: "460px",
            }}
          >
            <blockquote
              className="instagram-media"
              data-instgrm-permalink={url}
              data-instgrm-version="14"
              style={{
                margin: 0,
                width: "100%",
                minWidth: "unset",
                maxWidth: "100%",
              }}
            />
          </div>
        ))}
      </div>
    </section>
  );
}
