import type { Metadata } from "next";
import { Bagel_Fat_One, Bricolage_Grotesque } from "next/font/google";
import Script from "next/script";
import "./globals.css";

const bagel = Bagel_Fat_One({
  variable: "--font-bagel",
  subsets: ["latin"],
  weight: "400",
});

const bricolage = Bricolage_Grotesque({
  variable: "--font-bricolage",
  subsets: ["latin"],
  weight: "variable",
  axes: ["opsz"],
});

export const metadata: Metadata = {
  title: "Softy & Co — Swirling in good times",
  description:
    "Soft serve, sundaes and new drops on Duplication Rd, Colombo 04. Open till midnight, and 1am on weekends.",
  icons: { icon: "/favicon.png" },
  openGraph: {
    title: "Softy & Co",
    description: "Soft serve & sundaes · Colombo 04",
    siteName: "Softy & Co",
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" className={`${bagel.variable} ${bricolage.variable}`}>
      <body>{children}</body>
      <Script src="https://www.instagram.com/embed.js" strategy="lazyOnload" />
    </html>
  );
}
