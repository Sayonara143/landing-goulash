"use client";

import { useState } from "react";
import { profile } from "@/lib/data";

const links = [
  { href: "/app", label: "Задание 2", className: "neo-nav-link--yellow" },
  { href: "#relevance", label: "Релевантность", className: "neo-nav-link--yellow" },
  { href: "#case", label: "Кейс", className: "neo-nav-link--cyan" },
  { href: "#demo", label: "Демо", className: "neo-nav-link--pink" },
  { href: "#projects", label: "Проекты", className: "neo-nav-link--purple" },
  { href: "#experience", label: "Опыт", className: "neo-nav-link--green" },
  { href: "#contact", label: "Контакты", className: "neo-nav-link--black" },
];

export function Nav() {
  const [open, setOpen] = useState(false);

  return (
    <>
      <div
        style={{
          background: "#111",
          color: "#F4EFE2",
          borderBottom: "3px solid #111",
          overflow: "hidden",
          whiteSpace: "nowrap",
          padding: "9px 0",
        }}
      >
        <div
          style={{
            display: "inline-block",
            animation: "ticker 26s linear infinite",
            fontFamily: "'Space Mono', monospace",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 1,
            textTransform: "uppercase",
          }}
        >
          <span style={{ padding: "0 22px" }}>✦ Открыт к роли AI Generalist</span>
          <span style={{ padding: "0 22px", color: "#FFCE2E" }}>★ AI Automation Specialist</span>
          <span style={{ padding: "0 22px" }}>✦ Backend / Data Pipelines</span>
          <span style={{ padding: "0 22px", color: "#45D4E8" }}>★ Екатеринбург · Remote</span>
          <span style={{ padding: "0 22px" }}>✦ Открыт к роли AI Generalist</span>
          <span style={{ padding: "0 22px", color: "#FFCE2E" }}>★ AI Automation Specialist</span>
          <span style={{ padding: "0 22px" }}>✦ Backend / Data Pipelines</span>
          <span style={{ padding: "0 22px", color: "#45D4E8" }}>★ Екатеринбург · Remote</span>
        </div>
      </div>

      <nav
        className="section-pad"
        style={{
          position: "sticky",
          top: 0,
          zIndex: 50,
          background: "#F4EFE2",
          borderBottom: "3px solid #111",
          padding: "14px 24px",
          fontFamily: "'Space Grotesk', sans-serif",
        }}
      >
        <div
          className="nav-bar"
          style={{
            maxWidth: 1180,
            margin: "0 auto",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: 20,
          }}
        >
          <a
            href="#top"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 12,
              textDecoration: "none",
              color: "#111",
            }}
          >
            <span
              style={{
                display: "inline-flex",
                alignItems: "center",
                justifyContent: "center",
                width: 42,
                height: 42,
                background: "#FFCE2E",
                border: "3px solid #111",
                borderRadius: 11,
                boxShadow: "3px 3px 0 #111",
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: 17,
              }}
            >
              АБ
            </span>
            <span style={{ fontWeight: 700, fontSize: 18 }}>{profile.name}</span>
          </a>

          <button
            type="button"
            className="nav-burger"
            aria-label="Меню"
            aria-expanded={open}
            aria-controls="nav-menu"
            onClick={() => setOpen((v) => !v)}
            style={{
              display: "none",
              alignItems: "center",
              justifyContent: "center",
              width: 44,
              height: 44,
              background: open ? "#FFCE2E" : "#F4EFE2",
              border: "3px solid #111",
              borderRadius: 11,
              boxShadow: "3px 3px 0 #111",
              cursor: "pointer",
              padding: 0,
            }}
          >
            <span aria-hidden style={{ position: "relative", width: 22, height: 16, display: "block" }}>
              <span style={burgerLine(open ? { transform: "translateY(7px) rotate(45deg)" } : { top: 0 })} />
              <span style={burgerLine(open ? { opacity: 0 } : { top: 7 })} />
              <span style={burgerLine(open ? { transform: "translateY(-7px) rotate(-45deg)" } : { top: 14 })} />
            </span>
          </button>

          <div
            id="nav-menu"
            className="nav-links"
            data-open={open}
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              flexWrap: "wrap",
              fontWeight: 600,
              fontSize: 15,
            }}
          >
            {links.map((l) => (
              <a
                key={l.href}
                href={l.href}
                className={`neo-nav-link ${l.className}`}
                onClick={() => setOpen(false)}
              >
                {l.label}
              </a>
            ))}
          </div>
        </div>
      </nav>
    </>
  );
}

function burgerLine(extra: React.CSSProperties): React.CSSProperties {
  return {
    position: "absolute",
    left: 0,
    width: "100%",
    height: 3,
    background: "#111",
    borderRadius: 2,
    transition: "transform 0.2s ease, opacity 0.2s ease, top 0.2s ease",
    ...extra,
  };
}
