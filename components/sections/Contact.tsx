import { profile } from "@/lib/data";

export function Contact() {
  return (
    <section
      id="contact"
      style={{
        background: "#111",
        borderTop: "3px solid #111",
        padding: "74px 0",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div className="section-pad" style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <span
          style={{
            display: "inline-block",
            background: "#FFCE2E",
            color: "#111",
            border: "3px solid #FFCE2E",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            padding: "6px 13px",
            borderRadius: 9,
          }}
        >
          Контакты
        </span>
        <h2
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(36px,6vw,72px)",
            lineHeight: 1,
            margin: "22px 0 0",
            color: "#F4EFE2",
          }}
        >
          Давайте поговорим
        </h2>
        <div
          style={{
            marginTop: 30,
            background: "#F4EFE2",
            border: "3px solid #111",
            borderRadius: 18,
            boxShadow: "8px 8px 0 #FF73B3",
            padding: 32,
          }}
        >
          <p
            style={{
              margin: "0 0 24px",
              fontSize: 18,
              lineHeight: 1.55,
              fontWeight: 500,
              maxWidth: 680,
            }}
          >
            Открыт к роли AI-автоматизатора и обсуждению задач по интеграциям,
            пайплайнам данных и автоматизации. Самый быстрый способ связи —
            Telegram.
          </p>
          <div style={{ display: "flex", gap: 14, flexWrap: "wrap" }}>
            <a
              href={`mailto:${profile.email}`}
              className="neo-action-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 700,
                fontSize: 17,
                padding: "14px 22px",
                border: "3px solid #111",
                borderRadius: 12,
                background: "#FFCE2E",
                color: "#111",
                textDecoration: "none",
                boxShadow: "5px 5px 0 #111",
              }}
            >
              ✉ {profile.email}
            </a>
            <a
              href={profile.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-action-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 700,
                fontSize: 17,
                padding: "14px 22px",
                border: "3px solid #111",
                borderRadius: 12,
                background: "#7C66F0",
                color: "#fff",
                textDecoration: "none",
                boxShadow: "5px 5px 0 #111",
              }}
            >
              Telegram ↗
            </a>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-action-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 700,
                fontSize: 17,
                padding: "14px 22px",
                border: "3px solid #111",
                borderRadius: 12,
                background: "#fff",
                color: "#111",
                textDecoration: "none",
                boxShadow: "5px 5px 0 #111",
              }}
            >
              GitHub ↗
            </a>
            <a
              href={profile.resume}
              target="_blank"
              rel="noopener noreferrer"
              className="neo-action-button"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                fontWeight: 700,
                fontSize: 17,
                padding: "14px 22px",
                border: "3px solid #111",
                borderRadius: 12,
                background: "#fff",
                color: "#111",
                textDecoration: "none",
                boxShadow: "5px 5px 0 #111",
              }}
            >
              Резюме на HH ↗
            </a>
          </div>
        </div>
      </div>
    </section>
  );
}
