import { experience, profile } from "@/lib/data";

export function Experience() {
  return (
    <section
      id="experience"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "74px 24px",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#111",
      }}
    >
      <span
        style={{
          display: "inline-block",
          background: "#FF73B3",
          color: "#111",
          border: "3px solid #111",
          fontWeight: 700,
          fontSize: 13,
          letterSpacing: 1.5,
          textTransform: "uppercase",
          padding: "6px 13px",
          borderRadius: 9,
          boxShadow: "3px 3px 0 #111",
        }}
      >
        Карьера
      </span>
      <h2
        style={{
          fontFamily: "'Archivo Black', 'Space Grotesk', sans-serif",
          fontSize: "clamp(32px,5vw,56px)",
          lineHeight: 1,
          margin: "22px 0 36px",
        }}
      >
        Опыт работы
      </h2>
      <div style={{ display: "grid", gap: 24 }}>
        {experience.slice(0, 2).map((job) => (
          <div
            key={`${job.role}-${job.company}`}
            style={{
              background: "#fff",
              border: "3px solid #111",
              borderRadius: 16,
              boxShadow: "7px 7px 0 #111",
              padding: 28,
            }}
          >
            <div
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "flex-start",
                gap: 16,
                flexWrap: "wrap",
              }}
            >
              <h3
                style={{
                  fontFamily: "'Archivo Black', 'Space Grotesk', sans-serif",
                  fontSize: 23,
                  margin: 0,
                }}
              >
                {job.role} ·{" "}
                <span style={{ color: "#7C66F0" }}>{job.company}</span>
              </h3>
              <span
                style={{
                  fontFamily: "'Space Mono', 'Space Grotesk', monospace",
                  fontWeight: 700,
                  fontSize: 13,
                  background: "#FFCE2E",
                  border: "2.5px solid #111",
                  borderRadius: 8,
                  padding: "4px 11px",
                  whiteSpace: "nowrap",
                }}
              >
                {job.period}
              </span>
            </div>
            <p
              style={{
                margin: "14px 0 16px",
                fontSize: 16,
                lineHeight: 1.5,
                fontWeight: 500,
                fontFamily: "'Space Grotesk', sans-serif",
              }}
            >
              {job.summary}
            </p>
            <div style={{ display: "grid", gap: 9, marginBottom: 18 }}>
              {job.highlights.map((point) => (
                <div
                  key={point}
                  style={{
                    display: "flex",
                    gap: 10,
                    alignItems: "flex-start",
                  }}
                >
                  <span
                    style={{
                      color: "#FF73B3",
                      fontWeight: 700,
                      fontSize: 18,
                      lineHeight: 1.3,
                    }}
                  >
                    ▪
                  </span>
                  <span
                    style={{
                      fontSize: 15,
                      lineHeight: 1.5,
                      fontWeight: 500,
                      fontFamily: "'Space Grotesk', sans-serif",
                    }}
                  >
                    {point}
                  </span>
                </div>
              ))}
            </div>
            <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
              {job.stack.map((tag) => (
                <span
                  key={tag}
                  style={{
                    background: "#F4EFE2",
                    border: "2px solid #111",
                    borderRadius: 999,
                    padding: "4px 11px",
                    fontWeight: 600,
                    fontSize: 13,
                    fontFamily: "'Space Grotesk', sans-serif",
                  }}
                >
                  {tag}
                </span>
              ))}
            </div>
          </div>
        ))}
      </div>
      <div style={{ display: "flex", marginTop: 30 }}>
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
            background: "#FFCE2E",
            color: "#111",
            textDecoration: "none",
            boxShadow: "5px 5px 0 #111",
          }}
        >
          Подробнее на HH ↗
        </a>
      </div>
    </section>
  );
}
