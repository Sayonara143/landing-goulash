import { scoreModel } from "@/lib/supplier";

export function ScoreModel() {
  return (
    <section
      className="section-pad"
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
          background: "#7C66F0",
          color: "#fff",
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
        Принятие решения
      </span>
      <h2
        style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: "clamp(32px,5vw,56px)",
          lineHeight: 1,
          margin: "22px 0 0",
        }}
      >
        Supplier Score
      </h2>
      <p
        style={{
          fontSize: 16,
          lineHeight: 1.55,
          fontWeight: 500,
          color: "#3a352b",
          maxWidth: 680,
          margin: "18px 0 0",
        }}
      >
        Score = сумма весов по простым, объяснимым критериям. Цель — не
        «магическая оценка», а понятный приоритет обзвона.
      </p>
      <div
        className="grid-asym"
        style={{
          marginTop: 32,
          display: "grid",
          gridTemplateColumns: "1.3fr 0.7fr",
          gap: 22,
          alignItems: "start",
        }}
      >
        <div
          style={{
            background: "#fff",
            border: "3px solid #111",
            borderRadius: 14,
            boxShadow: "6px 6px 0 #111",
            overflow: "hidden",
          }}
        >
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              padding: "14px 20px",
              borderBottom: "3px solid #111",
              background: "#FFCE2E",
              fontWeight: 700,
              fontSize: 13,
              letterSpacing: 1,
              textTransform: "uppercase",
            }}
          >
            <span>Критерий</span>
            <span>Вес</span>
          </div>
          {scoreModel.map((item) => (
            <div
              key={item.label}
              style={{
                display: "flex",
                justifyContent: "space-between",
                alignItems: "center",
                padding: "15px 20px",
                borderBottom: "2px solid #e4ddcd",
              }}
            >
              <span style={{ fontWeight: 600, fontSize: 16 }}>
                {item.label}
              </span>
              <span
                style={{
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 700,
                  background: "#45D4E8",
                  border: "2.5px solid #111",
                  borderRadius: 7,
                  padding: "2px 10px",
                }}
              >
                {item.weight}
              </span>
            </div>
          ))}
          <div
            style={{
              display: "flex",
              justifyContent: "space-between",
              alignItems: "center",
              padding: "16px 20px",
              background: "#111",
              color: "#F4EFE2",
            }}
          >
            <span
              style={{
                fontFamily: "'Archivo Black', sans-serif",
                fontSize: 18,
              }}
            >
              Итого
            </span>
            <span
              style={{
                fontFamily: "'Space Mono', monospace",
                fontWeight: 700,
                fontSize: 18,
              }}
            >
              100
            </span>
          </div>
        </div>
        <div
          style={{
            background: "#57D785",
            border: "3px solid #111",
            borderRadius: 14,
            boxShadow: "6px 6px 0 #111",
            padding: "34px 26px",
            textAlign: "center",
          }}
        >
          <div
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: 64,
              lineHeight: 1,
              color: "#111",
            }}
          >
            82<span style={{ fontSize: 32 }}>/100</span>
          </div>
          <p
            style={{
              margin: "18px 0 0",
              fontSize: 15,
              lineHeight: 1.55,
              fontWeight: 600,
              color: "#0c2a18",
            }}
          >
            «Мясной Дом» — стоит связаться в первую очередь: есть контакты,
            регион, документы и сертификаты.
          </p>
        </div>
      </div>
    </section>
  );
}
