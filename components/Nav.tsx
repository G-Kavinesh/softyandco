import Image from "next/image";
import Link from "next/link";

const links = [
  { label: "Menu", href: "#menu" },
  { label: "Visit", href: "#visit" },
  { label: "Reviews", href: "#reviews" },
];

export default function Nav() {
  return (
    <header style={{ background: "#FFF4E2", position: "sticky", top: 0, zIndex: 50 }}>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1fr auto 1fr",
          alignItems: "center",
          gap: "16px",
          padding: "18px clamp(16px,4vw,56px)",
        }}
      >
        {/* Cell 1 — wrapper always in grid; links hidden on mobile */}
        <div>
          <nav
            className="nav-links"
            style={{
              fontWeight: 800,
              fontSize: "15px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "var(--font-bricolage), sans-serif",
            }}
          >
            {links.map((l) => (
              <Link key={l.label} href={l.href}>
                {l.label}
              </Link>
            ))}
          </nav>
        </div>

        {/* Cell 2 — logo, always centred */}
        <Link href="#top">
          <Image
            src="/softy-logo.png"
            alt="Softy & Co — Swirling in good times"
            width={200}
            height={84}
            priority
            style={{ display: "block", height: "clamp(48px,7vw,84px)", width: "auto" }}
          />
        </Link>

        {/* Cell 3 — wrapper always in grid; link hidden on mobile */}
        <div style={{ display: "flex", justifyContent: "flex-end" }}>
          <a
            href="https://www.instagram.com/softyandco_/"
            target="_blank"
            rel="noopener noreferrer"
            className="nav-ig"
            style={{
              fontWeight: 800,
              fontSize: "15px",
              letterSpacing: "0.08em",
              textTransform: "uppercase",
              fontFamily: "var(--font-bricolage), sans-serif",
              color: "#4A1530",
            }}
          >
            @softyandco_
          </a>
        </div>
      </div>
    </header>
  );
}
