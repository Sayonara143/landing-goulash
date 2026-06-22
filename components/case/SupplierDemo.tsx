import { demoQuery, rawToStructured } from "@/lib/supplier";

export function SupplierDemo() {
  return (
    <section
      id="demo"
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
          background: "#57D785",
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
        Живое демо
      </span>
      <h2
        style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: "clamp(32px,5vw,56px)",
          lineHeight: 1,
          margin: "22px 0 0",
        }}
      >
        Найти поставщиков
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
        Для демонстрации используется сохранённый (cached) результат поиска —
        чтобы не зависеть от лимитов поискового API и доступности сайтов.
        Логика продукта при этом настоящая.
      </p>

      <div
        style={{
          marginTop: 28,
          background: "#fff",
          border: "3px solid #111",
          borderRadius: 16,
          boxShadow: "7px 7px 0 #111",
          padding: 26,
        }}
      >
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr auto",
            gap: 16,
            alignItems: "end",
          }}
        >
          <div>
            <label
              style={{
                display: "block",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Категория
            </label>
            <div
              style={{
                border: "3px solid #111",
                borderRadius: 10,
                padding: "13px 14px",
                fontSize: 16,
                fontWeight: 500,
                background: "#F4EFE2",
              }}
            >
              {demoQuery.category}
            </div>
          </div>
          <div>
            <label
              style={{
                display: "block",
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                textTransform: "uppercase",
                marginBottom: 8,
              }}
            >
              Город / регион
            </label>
            <div
              style={{
                border: "3px solid #111",
                borderRadius: 10,
                padding: "13px 14px",
                fontSize: 16,
                fontWeight: 500,
                background: "#F4EFE2",
              }}
            >
              {demoQuery.city}, {demoQuery.region}
            </div>
          </div>
          <button
            type="button"
            className="neo-demo-button"
            style={{
              fontWeight: 700,
              fontSize: 16,
              padding: "14px 22px",
              border: "3px solid #111",
              borderRadius: 11,
              background: "#FFCE2E",
              color: "#111",
              boxShadow: "4px 4px 0 #111",
              cursor: "pointer",
              whiteSpace: "nowrap",
            }}
          >
            Найти поставщиков
          </button>
        </div>
      </div>

      <div style={{ marginTop: 54 }}>
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
          Extraction Pipeline
        </span>
        <h2
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(30px,4.5vw,52px)",
            lineHeight: 1,
            margin: "20px 0 30px",
          }}
        >
          Raw → Structured
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 22,
          }}
        >
          <div
            style={{
              background: "#fff",
              border: "3px solid #111",
              borderRadius: 14,
              boxShadow: "6px 6px 0 #111",
              padding: 22,
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "#7c7563",
                marginBottom: 14,
              }}
            >
              Сырой текст со страницы
            </div>
            <p
              style={{
                margin: 0,
                fontSize: 16,
                lineHeight: 1.6,
                fontWeight: 500,
              }}
            >
              «{rawToStructured.raw}»
            </p>
          </div>
          <div
            style={{
              background: "#111",
              border: "3px solid #111",
              borderRadius: 14,
              boxShadow: "6px 6px 0 #45D4E8",
              padding: 22,
              overflowX: "auto",
            }}
          >
            <div
              style={{
                fontWeight: 700,
                fontSize: 13,
                letterSpacing: 1,
                textTransform: "uppercase",
                color: "#45D4E8",
                marginBottom: 14,
              }}
            >
              Структурированный JSON
            </div>
            <pre
              style={{
                margin: 0,
                fontFamily: "'Space Mono', monospace",
                fontSize: 13.5,
                lineHeight: 1.65,
                color: "#F4EFE2",
                whiteSpace: "pre",
              }}
            >
              {"{\n  "}
              <span style={{ color: "#FF73B3" }}>{'"company_name"'}</span>
              {": "}
              <span style={{ color: "#57D785" }}>{`"${rawToStructured.structured.company_name}"`}</span>
              {",\n  "}
              <span style={{ color: "#FF73B3" }}>{'"category"'}</span>
              {": "}
              <span style={{ color: "#57D785" }}>{`"${rawToStructured.structured.category}"`}</span>
              {",\n  "}
              <span style={{ color: "#FF73B3" }}>{'"city"'}</span>
              {": "}
              <span style={{ color: "#57D785" }}>{`"${rawToStructured.structured.city}"`}</span>
              {",\n  "}
              <span style={{ color: "#FF73B3" }}>{'"customer_segment"'}</span>
              {": [\n    "}
              <span style={{ color: "#57D785" }}>{'"рестораны"'}</span>
              {", "}
              <span style={{ color: "#57D785" }}>{'"кафе"'}</span>
              {", "}
              <span style={{ color: "#57D785" }}>{'"торговые сети"'}</span>
              {"\n  ],\n  "}
              <span style={{ color: "#FF73B3" }}>{'"delivery"'}</span>
              {": "}
              <span style={{ color: "#57D785" }}>{`"${rawToStructured.structured.delivery}"`}</span>
              {",\n  "}
              <span style={{ color: "#FF73B3" }}>{'"documents"'}</span>
              {": "}
              <span style={{ color: "#FFCE2E" }}>true</span>
              {",\n  "}
              <span style={{ color: "#FF73B3" }}>{'"certificates"'}</span>
              {": "}
              <span style={{ color: "#FFCE2E" }}>true</span>
              {",\n  "}
              <span style={{ color: "#FF73B3" }}>{'"minimum_order"'}</span>
              {": "}
              <span style={{ color: "#7C9CFF" }}>null</span>
              {",\n  "}
              <span style={{ color: "#FF73B3" }}>{'"price"'}</span>
              {": "}
              <span style={{ color: "#7C9CFF" }}>null</span>
              {",\n  "}
              <span style={{ color: "#FF73B3" }}>{'"source"'}</span>
              {": "}
              <span style={{ color: "#57D785" }}>{`"${rawToStructured.structured.source}"`}</span>
              {"\n}"}
            </pre>
          </div>
        </div>
      </div>
    </section>
  );
}
