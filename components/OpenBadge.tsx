"use client";

import { useEffect, useState } from "react";

function getStatus(now: number) {
  const parts = new Intl.DateTimeFormat("en-US", {
    timeZone: "Asia/Colombo",
    weekday: "short",
    hour: "numeric",
    hourCycle: "h23",
  }).formatToParts(new Date(now));

  const wd = parts.find((p) => p.type === "weekday")?.value ?? "Mon";
  const h = parseInt(parts.find((p) => p.type === "hour")?.value ?? "0", 10);

  const days = ["Sun", "Mon", "Tue", "Wed", "Thu", "Fri", "Sat"];
  const d = days.indexOf(wd);
  const prev = (d + 6) % 7;
  const lateNight = [5, 6, 0]; // Fri, Sat, Sun close at 1am

  if (h >= 12) {
    return {
      open: true,
      text: "Open now · till " + (lateNight.includes(d) ? "1am" : "12am"),
    };
  }
  if (h < 1 && lateNight.includes(prev)) {
    return { open: true, text: "Open now · till 1am" };
  }
  return { open: false, text: "Closed · opens 12pm" };
}

export default function OpenBadge() {
  const [status, setStatus] = useState<{ open: boolean; text: string } | null>(
    null
  );

  useEffect(() => {
    setStatus(getStatus(Date.now()));
    const t = setInterval(() => setStatus(getStatus(Date.now())), 60_000);
    return () => clearInterval(t);
  }, []);

  if (!status) return null;

  return (
    <div
      style={{
        display: "inline-flex",
        alignItems: "center",
        gap: "10px",
        background: "#FFF4E2",
        border: "3px solid #4A1530",
        borderRadius: "999px",
        padding: "8px 18px",
        fontWeight: 800,
        fontSize: "15px",
        letterSpacing: "0.06em",
        textTransform: "uppercase",
        boxShadow: "4px 4px 0 #4A1530",
        marginBottom: "28px",
        fontFamily: "var(--font-bricolage), sans-serif",
        color: "#4A1530",
      }}
    >
      <span
        style={{
          width: "12px",
          height: "12px",
          borderRadius: "50%",
          background: status.open ? "#3BD16F" : "#E0263C",
          border: "2px solid #4A1530",
          flexShrink: 0,
        }}
      />
      <span>{status.text}</span>
    </div>
  );
}
