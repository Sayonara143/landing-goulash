import { profile } from "@/lib/data";

const links = [
  { href: "#relevance", label: "Релевантность", className: "neo-nav-link--yellow" },
  { href: "#case", label: "Кейс", className: "neo-nav-link--cyan" },
  { href: "#demo", label: "Демо", className: "neo-nav-link--pink" },
  { href: "#projects", label: "Проекты", className: "neo-nav-link--purple" },
  { href: "#experience", label: "Опыт", className: "neo-nav-link--green" },
  { href: "#contact", label: "Контакты", className: "neo-nav-link--black" },
];

export function Nav() {
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

          <div
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
