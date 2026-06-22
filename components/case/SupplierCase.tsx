import { caseStudy, pipelineSteps } from "@/lib/supplier";

const colors = ["#FFCE2E", "#45D4E8", "#FF73B3", "#7C66F0", "#57D785", "#FFCE2E"];

export function SupplierCase() {
  return (
    <section
      id="case"
      style={{
        background: "#111",
        borderTop: "3px solid #111",
        borderBottom: "3px solid #111",
        padding: "74px 0",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
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
          Главный кейс
        </span>
        <h2
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(34px,6vw,68px)",
            lineHeight: 1,
            margin: "22px 0 0",
            color: "#F4EFE2",
          }}
        >
          Supplier Intelligence
        </h2>
        <p
          style={{
            color: "#cfc9bb",
            fontSize: 18,
            lineHeight: 1.55,
            fontWeight: 500,
            maxWidth: 760,
            margin: "22px 0 0",
          }}
        >
          AI-сервис для поиска и сравнения поставщиков продуктов питания.{" "}
          {caseStudy.scenario}
        </p>

        <div
          style={{
            marginTop: 42,
            display: "grid",
            gridTemplateColumns: "repeat(3,1fr)",
            gap: 18,
          }}
        >
          {pipelineSteps.map((step, index) => {
            const color = colors[index];

            return (
              <div
                key={step.id}
                style={{
                  background: "#F4EFE2",
                  border: "3px solid #111",
                  borderRadius: 14,
                  padding: 20,
                  boxShadow: `6px 6px 0 ${color}`,
                }}
              >
                <span
                  style={{
                    fontFamily: "'Space Mono', monospace",
                    fontWeight: 700,
                    fontSize: 13,
                    background: color,
                    border: "2.5px solid #111",
                    borderRadius: 7,
                    padding: "2px 9px",
                  }}
                >
                  ШАГ {index + 1}
                </span>
                <h3
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: 20,
                    margin: "16px 0 6px",
                  }}
                >
                  {step.title}
                </h3>
                <p
                  style={{
                    margin: 0,
                    fontSize: 14,
                    fontWeight: 500,
                    color: "#4a453a",
                  }}
                >
                  {step.short}
                </p>
              </div>
            );
          })}
        </div>

        <div
          style={{
            marginTop: 24,
            background: "#7C66F0",
            border: "3px solid #111",
            borderRadius: 14,
            padding: "20px 22px",
            boxShadow: "6px 6px 0 #FFCE2E",
            color: "#fff",
          }}
        >
          <p
            style={{
              margin: 0,
              fontSize: 16,
              lineHeight: 1.55,
              fontWeight: 500,
            }}
          >
            <strong
              style={{
                background: "#FFCE2E",
                color: "#111",
                padding: "1px 7px",
                borderRadius: 5,
              }}
            >
              LLM-генератор запросов.
            </strong>{" "}
            {pipelineSteps[0].detail}
          </p>
        </div>

        <div
          style={{
            display: "flex",
            gap: 14,
            marginTop: 28,
            flexWrap: "wrap",
          }}
        >
          <a
            href="/app"
            className="neo-case-button"
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
              boxShadow: "5px 5px 0 #F4EFE2",
            }}
          >
            Запустить демо ↗
          </a>
          <a
            href="#architecture"
            className="neo-case-link"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              fontWeight: 700,
              fontSize: 17,
              padding: "14px 22px",
              border: "3px solid #F4EFE2",
              borderRadius: 12,
              background: "transparent",
              color: "#F4EFE2",
              textDecoration: "none",
            }}
          >
            Подробный разбор кейса →
          </a>
        </div>
      </div>
    </section>
  );
}
