import { roleFit } from "@/lib/supplier";

export function RoleFit() {
  return (
    <div
      style={{
        background: "#F4EFE2",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#111",
      }}
    >
      <section
        id="relevance"
        className="section-pad"
        style={{ maxWidth: 1180, margin: "0 auto", padding: "70px 24px" }}
      >
        <span
          style={{
            display: "inline-block",
            background: "#45D4E8",
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
          Почему я подхожу
        </span>
        <h2
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(32px,5vw,56px)",
            lineHeight: 1,
            margin: "22px 0 0",
          }}
        >
          Опыт под профиль роли
        </h2>
        <div style={{ marginTop: 36, display: "grid", gap: 16 }}>
          {roleFit.map((row, index) => (
            <div
              key={row.need}
              className="neo-relevance-card split-2"
              style={{
                background: "#fff",
                border: "3px solid #111",
                borderRadius: 14,
                boxShadow: "5px 5px 0 #111",
                display: "grid",
                gridTemplateColumns: "0.85fr 1.15fr",
                gap: 0,
              }}
            >
              <div
                style={{
                  padding: "22px 24px",
                  borderRight: "3px solid #111",
                  display: "flex",
                  alignItems: "center",
                  gap: 12,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: 700,
                    background: "#FFCE2E",
                    border: "2.5px solid #111",
                    borderRadius: 8,
                    padding: "2px 9px",
                    fontSize: 14,
                  }}
                >
                  {String(index + 1).padStart(2, "0")}
                </span>
                <span style={{ fontWeight: 700, fontSize: 18 }}>
                  {row.need}
                </span>
              </div>
              <div
                style={{
                  padding: "22px 24px",
                  display: "flex",
                  alignItems: "center",
                  fontSize: 16,
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                {row.have}
              </div>
            </div>
          ))}
        </div>
      </section>
    </div>
  );
}
