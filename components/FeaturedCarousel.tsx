"use client";

import { useState } from "react";
import Image from "next/image";

const slides = [
  {
    bg: "#E0263C",
    photoBg: "#F6A11E",
    photoBorder: "#4A1530",
    photoShadow: "#4A1530",
    ink: "#FFF4E2",
    label: "01 / 03 · The original",
    title: "Classic Swirl",
    titleColor: "#FFF4E2",
    titleStroke: "#4A1530",
    titleShadow: "#4A1530",
    body: "Our vanilla soft serve, piled high in a cup and finished with a crisp wafer.",
    image: "/vanillaswirl.png",
    imagePadding: "24px",
  },
  {
    bg: "#4CC3EA",
    photoBg: "#6B2340",
    photoBorder: "#FFF4E2",
    photoShadow: "#F6A11E",
    ink: "#FFF4E2",
    label: "02 / 03 · Fully loaded",
    title: "The Sundae",
    titleColor: "#F6A11E",
    titleStroke: "#2A0A18",
    titleShadow: "#2A0A18",
    body: "Soft serve layered with chocolate sauce, crunch and a wafer on top.",
    image: "/newsundae.png",
    imagePadding: "24px",
  },
  {
    bg: "#4CC3EA",
    photoBg: "#F7B8D2",
    photoBorder: "#4A1530",
    photoShadow: "#4A1530",
    ink: "#4A1530",
    label: "03 / 03 · New drop",
    title: "Coke Float",
    titleColor: "#FFF4E2",
    titleStroke: "#4A1530",
    titleShadow: "#4A1530",
    body: "Soft serve swirled into ice-cold Coke. Sweet, fizzy, and dangerously good.",
    image: "/cokefloat.png",
    imagePadding: "8px",
  },
];

export default function FeaturedCarousel() {
  const [slide, setSlide] = useState(0);
  const prev = () => setSlide((s) => (s + 2) % 3);
  const next = () => setSlide((s) => (s + 1) % 3);
  const s = slides[slide];

  return (
    <section id="menu" className="carousel-section" style={{ position: "relative" }}>
      <div
        className="carousel-inner"
        style={{
          background: s.bg,
          display: "grid",
          gridTemplateColumns: "repeat(auto-fit,minmax(min(100%,420px),1fr))",
          gap: "clamp(24px,4vw,64px)",
          alignItems: "center",
          padding: "clamp(56px,8vw,110px) clamp(56px,8vw,140px)",
          minHeight: "640px",
          transition: "background 0.3s",
        }}
      >
        {/* Circular photo */}
        <div
          style={{
            aspectRatio: "1",
            maxWidth: "520px",
            width: "100%",
            justifySelf: "center",
            border: `4px solid ${s.photoBorder}`,
            borderRadius: "50%",
            overflow: "hidden",
            boxShadow: `10px 10px 0 ${s.photoShadow}`,
            background: s.photoBg,
            position: "relative",
          }}
        >
          {s.image && (
            <Image
              src={s.image}
              alt={s.title}
              fill
              style={{ objectFit: "contain", padding: s.imagePadding, objectPosition: "center" }}
            />
          )}
        </div>

        {/* Text */}
        <div style={{ color: s.ink }}>
          <div
            style={{
              fontWeight: 800,
              letterSpacing: "0.14em",
              textTransform: "uppercase",
              fontSize: "15px",
              fontFamily: "var(--font-bricolage), sans-serif",
            }}
          >
            {s.label}
          </div>
          <h2
            style={{
              margin: "12px 0 0",
              fontFamily: "'Bagel Fat One', var(--font-bagel), sans-serif",
              fontWeight: 400,
              fontSize: "clamp(52px,7vw,104px)",
              lineHeight: 0.92,
              color: s.titleColor,
              WebkitTextStroke: `3px ${s.titleStroke}`,
              paintOrder: "stroke fill",
              textShadow: `7px 7px 0 ${s.titleShadow}`,
            } as React.CSSProperties}
          >
            {s.title}
          </h2>
          <p
            style={{
              margin: "20px 0 0",
              maxWidth: "440px",
              fontSize: "20px",
              fontWeight: 600,
              lineHeight: 1.45,
            }}
          >
            {s.body}
          </p>
        </div>
      </div>

      {/* Prev button */}
      <button
        onClick={prev}
        aria-label="Previous"
        className="carousel-btn"
        style={{
          position: "absolute",
          left: "clamp(8px,2vw,32px)",
          top: "50%",
          transform: "translateY(-50%)",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "3px solid #4A1530",
          background: "#FFF4E2",
          color: "#4A1530",
          fontFamily: "var(--font-bagel), sans-serif",
          fontSize: "26px",
          cursor: "pointer",
          boxShadow: "4px 4px 0 #4A1530",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ‹
      </button>

      {/* Next button */}
      <button
        onClick={next}
        aria-label="Next"
        className="carousel-btn"
        style={{
          position: "absolute",
          right: "clamp(8px,2vw,32px)",
          top: "50%",
          transform: "translateY(-50%)",
          width: "56px",
          height: "56px",
          borderRadius: "50%",
          border: "3px solid #4A1530",
          background: "#FFF4E2",
          color: "#4A1530",
          fontFamily: "var(--font-bagel), sans-serif",
          fontSize: "26px",
          cursor: "pointer",
          boxShadow: "4px 4px 0 #4A1530",
          display: "flex",
          alignItems: "center",
          justifyContent: "center",
        }}
      >
        ›
      </button>
    </section>
  );
}
