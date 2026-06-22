import { skills } from "@/lib/data";
import type { CSSProperties } from "react";

const accents = ["#FFCE2E", "#45D4E8", "#FF73B3", "#7C66F0"];

export function Skills() {
  return (
    <section
      id="skills"
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
        Стек
      </span>
      <h2
        style={{
          fontFamily: "'Archivo Black', sans-serif",
          fontSize: "clamp(32px,5vw,56px)",
          lineHeight: 1,
          margin: "22px 0 36px",
        }}
      >
        Навыки и технологии
      </h2>
      <div
        className="grid-2"
        style={{
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 22,
        }}
      >
        {skills.map((category, index) => {
          const accent = accents[index];

          return (
            <div
              key={category.group}
              style={{
                background: "#fff",
                border: "3px solid #111",
                borderRadius: 16,
                boxShadow: "6px 6px 0 #111",
                padding: 24,
              }}
            >
              <div
                style={{
                  display: "flex",
                  alignItems: "center",
                  gap: 10,
                  marginBottom: 18,
                }}
              >
                <span
                  style={{
                    width: 18,
                    height: 18,
                    background: accent,
                    border: "2.5px solid #111",
                    borderRadius: 5,
                  }}
                />
                <h3
                  style={{
                    fontFamily: "'Archivo Black', sans-serif",
                    fontSize: 17,
                    margin: 0,
                    textTransform: "uppercase",
                    letterSpacing: 0.5,
                  }}
                >
                  {category.group}
                </h3>
              </div>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 9 }}>
                {category.items.map((item) => (
                  <span
                    key={item}
                    className="neo-skill-chip"
                    style={{
                      background: "#F4EFE2",
                      border: "2.5px solid #111",
                      borderRadius: 999,
                      padding: "6px 13px",
                      fontWeight: 600,
                      fontSize: 14,
                      "--chip-accent": accent,
                    } as CSSProperties}
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          );
        })}
      </div>
    </section>
  );
}
