import { antiHallucination, engineeringDecisions } from "@/lib/supplier";

export function EngineeringNotes() {
  return (
    <section
      id="architecture"
      style={{
        maxWidth: 1180,
        margin: "0 auto",
        padding: "30px 24px 74px",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#111",
      }}
    >
      <span
        style={{
          display: "inline-block",
          background: "#FFCE2E",
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
        Инженерные решения
      </span>
      <h2
        style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: "clamp(32px,5vw,56px)",
          lineHeight: 1,
          margin: "22px 0 32px",
        }}
      >
        Почему такая архитектура
      </h2>
      <div
        style={{
          display: "grid",
          gridTemplateColumns: "1.25fr 0.75fr",
          gap: 22,
          alignItems: "start",
        }}
      >
        <div style={{ display: "grid", gap: 14 }}>
          {engineeringDecisions.map((item) => (
            <div
              key={item.decision}
              className="neo-architecture-card"
              style={{
                background: "#fff",
                border: "3px solid #111",
                borderRadius: 13,
                boxShadow: "4px 4px 0 #111",
                display: "grid",
                gridTemplateColumns: "0.8fr 1.2fr",
              }}
            >
              <div
                style={{
                  padding: "16px 18px",
                  borderRight: "3px solid #111",
                  display: "flex",
                  alignItems: "center",
                }}
              >
                <span
                  style={{
                    fontWeight: 700,
                    fontSize: 16,
                    color: "#7C66F0",
                  }}
                >
                  {item.decision}
                </span>
              </div>
              <div
                style={{
                  padding: "16px 18px",
                  fontSize: 15,
                  lineHeight: 1.5,
                  fontWeight: 500,
                }}
              >
                {item.why}
              </div>
            </div>
          ))}
        </div>
        <div
          style={{
            background: "#111",
            border: "3px solid #111",
            borderRadius: 14,
            boxShadow: "6px 6px 0 #FF73B3",
            padding: 24,
          }}
        >
          <h3
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: 22,
              margin: "0 0 18px",
              color: "#F4EFE2",
            }}
          >
            Anti-hallucination layer
          </h3>
          <div style={{ display: "grid", gap: 14 }}>
            {antiHallucination.map((item) => (
              <div
                key={item}
                style={{
                  display: "flex",
                  gap: 11,
                  alignItems: "flex-start",
                  color: "#F4EFE2",
                }}
              >
                <span
                  style={{
                    color: "#57D785",
                    fontWeight: 700,
                    fontFamily: "'Space Mono', monospace",
                  }}
                >
                  →
                </span>
                <span style={{ fontSize: 15, lineHeight: 1.45, fontWeight: 500 }}>
                  {item}
                </span>
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
