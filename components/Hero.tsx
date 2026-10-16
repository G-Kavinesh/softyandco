import Image from "next/image";
import OpenBadge from "./OpenBadge";

export default function Hero() {
  return (
    <section
      id="top"
      style={{
        background: "#F6A11E",
        position: "relative",
        padding: "clamp(24px,4vw,56px) clamp(16px,4vw,56px) 0",
        textAlign: "center",
        overflow: "hidden",
      }}
    >
      <OpenBadge />

      <h1
        style={{
          margin: "0 auto",
          maxWidth: "1200px",
          fontFamily: "var(--font-bagel), sans-serif",
          fontWeight: 400,
          fontSize: "clamp(48px,11vw,168px)",
          lineHeight: 0.92,
          color: "#FFF4E2",
          WebkitTextStroke: "3px #4A1530",
          paintOrder: "stroke fill",
          textShadow: "8px 8px 0 #4A1530",
        } as React.CSSProperties}
      >
        Swirls of happiness<br />start here
      </h1>

      <p
        style={{
          margin: "32px auto 0",
          maxWidth: "560px",
          fontSize: "clamp(16px,1.8vw,22px)",
          fontWeight: 600,
          lineHeight: 1.4,
        }}
      >
        Soft serve, sundaes and new drops on Duplication Rd, Colombo 04. Open
        till midnight, and 1am on weekends.
      </p>

      <div
        style={{
          display: "flex",
          gap: "14px",
          justifyContent: "center",
          flexWrap: "wrap",
          marginTop: "32px",
        }}
      >
        <a
          href="#menu"
          className="btn-pill"
          style={{
            background: "#FFF4E2",
            color: "#4A1530",
            border: "3px solid #4A1530",
            padding: "14px 28px",
            fontSize: "20px",
            boxShadow: "5px 5px 0 #4A1530",
          }}
        >
          See the menu
        </a>
        <a
          href="https://www.google.com/maps/dir/?api=1&destination=Softy+%26+Co+27%2F1+Visaka+Rd+Colombo"
          target="_blank"
          rel="noopener noreferrer"
          className="btn-pill"
          style={{
            background: "#4A1530",
            color: "#FFF4E2",
            border: "3px solid #4A1530",
            padding: "14px 28px",
            fontSize: "20px",
            boxShadow: "5px 5px 0 #E0263C",
          }}
        >
          Get directions
        </a>
      </div>

      {/* 3-photo row */}
      <div
        className="hero-photos"
        style={{
          display: "grid",
          gridTemplateColumns: "repeat(3,minmax(0,1fr))",
          gap: "clamp(10px,2vw,28px)",
          maxWidth: "1100px",
          margin: "clamp(40px,6vw,72px) auto 0",
          alignItems: "end",
        }}
      >
        <div
          className="hero-photo-side"
          style={{
            aspectRatio: "3/4",
            transform: "rotate(-5deg) translateY(30px)",
            border: "4px solid #4A1530",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "8px 8px 0 #4A1530",
            background: "#E0263C",
            position: "relative",
          }}
        >
          <Image
            src="/sundae.png"
            alt="Sundae"
            fill
            style={{ objectFit: "contain", padding: "32px", objectPosition: "center", transform: "rotate(8deg)" }}
          />
        </div>
        <div
          style={{
            aspectRatio: "3/4",
            border: "4px solid #4A1530",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "8px 8px 0 #4A1530",
            background: "#4CC3EA",
            position: "relative",
          }}
        >
          <Image
            src="/cone.png"
            alt="Soft serve cone"
            fill
            style={{ objectFit: "contain", padding: "52px", objectPosition: "center" }}
          />
        </div>
        <div
          className="hero-photo-side"
          style={{
            aspectRatio: "3/4",
            transform: "rotate(5deg) translateY(30px)",
            border: "4px solid #4A1530",
            borderRadius: "28px",
            overflow: "hidden",
            boxShadow: "8px 8px 0 #4A1530",
            background: "#F7B8D2",
            position: "relative",
          }}
        >
          <Image
            src="/milkshake.png"
            alt="Milkshake"
            fill
            style={{ objectFit: "contain", padding: "32px", objectPosition: "center" }}
          />
        </div>
      </div>
    </section>
  );
}
