import Image from "next/image";
import Link from "next/link";

const navLinks = [
  { label: "Menu", href: "#menu" },
  { label: "Visit", href: "#visit" },
  { label: "Reviews", href: "#reviews" },
  { label: "Instagram", href: "https://www.instagram.com/softyandco_/", external: true },
  { label: "Links", href: "https://urlkub.co/hoKkGz", external: true },
];

export default function Footer() {
  return (
    <footer style={{ background: "#4A1530", color: "#FFF4E2" }}>
      {/* Main row */}
      <div
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "clamp(40px,6vw,72px) clamp(16px,4vw,56px) clamp(32px,4vw,48px)",
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "32px",
        }}
        className="footer-main"
      >
        {/* Left: logo */}
        <div>
          <Image
            src="/softy-logo.png"
            alt="Softy & Co"
            width={200}
            height={130}
            style={{ display: "block", height: "clamp(72px,9vw,110px)", width: "auto", transform: "rotate(-3deg)" }}
          />
        </div>

        {/* Center: Instagram icon */}
        <div style={{ display: "flex", gap: "28px", alignItems: "center" }}>
          <a
            href="https://www.instagram.com/softyandco_/"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FFF4E2", lineHeight: 0 }}
            aria-label="Instagram"
          >
            <svg width="36" height="36" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.8" strokeLinecap="round" strokeLinejoin="round">
              <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
              <circle cx="12" cy="12" r="4"/>
              <circle cx="17.5" cy="6.5" r="1" fill="currentColor" stroke="none"/>
            </svg>
          </a>
          <a
            href="https://www.tiktok.com/@softyandco_"
            target="_blank"
            rel="noopener noreferrer"
            style={{ color: "#FFF4E2", lineHeight: 0 }}
            aria-label="TikTok"
          >
            <svg width="32" height="32" viewBox="0 0 24 24" fill="currentColor">
              <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.3 6.3 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.75a4.85 4.85 0 0 1-1.01-.06z"/>
            </svg>
          </a>
        </div>

        {/* Right: nav links */}
        <nav
          className="footer-nav"
          style={{
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "flex-end",
            alignItems: "center",
            gap: "8px 0",
            fontFamily: "var(--font-bricolage), sans-serif",
            fontWeight: 700,
            fontSize: "clamp(14px,1.2vw,17px)",
          }}
        >
          {navLinks.map(({ label, href, external }, i) => (
            <span key={label} style={{ display: "flex", alignItems: "center" }}>
              {i > 0 && (
                <span style={{ margin: "0 10px", color: "#F6A11E", fontSize: "8px" }}>●</span>
              )}
              {external ? (
                <a href={href} target="_blank" rel="noopener noreferrer" style={{ color: "#FFF4E2" }}>
                  {label}
                </a>
              ) : (
                <Link href={href} style={{ color: "#FFF4E2" }}>{label}</Link>
              )}
            </span>
          ))}
        </nav>
      </div>

      {/* Disclaimer banner */}
      <div style={{ padding: "0 clamp(16px,4vw,56px) clamp(24px,3vw,36px)" }}>
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            background: "#2A0A18",
            border: "3px solid #6B2340",
            borderRadius: "16px",
            padding: "18px 28px",
            textAlign: "center",
            fontSize: "clamp(11px,1vw,13px)",
            fontWeight: 700,
            letterSpacing: "0.08em",
            textTransform: "uppercase",
            fontFamily: "var(--font-bricolage), sans-serif",
            color: "#FFF4E2",
            opacity: 0.8,
          }}
        >
          The images shown are for illustration purposes only and may not be an exact representation of the product.
        </div>
      </div>

      {/* Copyright bar */}
      <div
        style={{
          borderTop: "2px solid #6B2340",
          padding: "18px clamp(16px,4vw,56px)",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            display: "flex",
            flexWrap: "wrap",
            justifyContent: "space-between",
            gap: "8px",
            fontSize: "12px",
            fontWeight: 600,
            letterSpacing: "0.07em",
            textTransform: "uppercase",
            fontFamily: "var(--font-bricolage), sans-serif",
            opacity: 0.6,
          }}
        >
          <span>© 2026 Softy &amp; Co. All rights reserved.</span>
          <span>27/1 Visaka Rd, Colombo 04</span>
        </div>
      </div>
    </footer>
  );
}
