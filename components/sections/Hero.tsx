"use client";

import { motion, useReducedMotion } from "framer-motion";
import Image from "next/image";
import type { CSSProperties } from "react";
import { profile } from "@/lib/data";

const cta = (delay: number) =>
  ({
    initial: { opacity: 0, y: 24 },
    animate: { opacity: 1, y: 0 },
    transition: { duration: 0.7, delay },
  }) as const;

export function Hero() {
  const reduce = useReducedMotion();
  const m = (delay: number) =>
    reduce ? { animate: { opacity: 1, y: 0 } } : cta(delay);

  return (
    <div
      style={{
        background: "#F4EFE2",
        color: "#111",
        fontFamily: "'Space Grotesk', sans-serif",
      }}
    >
      <section
        id="top"
        style={{
          maxWidth: 1180,
          margin: "0 auto",
          padding: "64px 24px 40px",
          display: "grid",
          gridTemplateColumns: "1.15fr 0.85fr",
          gap: 48,
          alignItems: "center",
        }}
      >
        <div>
          <motion.p
            {...m(0)}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 9,
              background: "#fff",
              border: "3px solid #111",
              borderRadius: 999,
              padding: "8px 16px",
              boxShadow: "4px 4px 0 #111",
              fontWeight: 700,
              fontSize: 14,
              marginBottom: 26,
            }}
          >
            <span
              style={{
                width: 11,
                height: 11,
                borderRadius: "50%",
                background: "#57D785",
                border: "2px solid #111",
              }}
            />
            Открыт к роли AI Generalist / AI Automation Specialist
          </motion.p>

          <motion.h1
            {...m(0.05)}
            style={{
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: "clamp(40px,6.2vw,82px)",
              lineHeight: 0.94,
              letterSpacing: -1,
              margin: 0,
              textTransform: "uppercase",
            }}
          >
            AI&nbsp;Automation
            <span style={{ display: "block" }}>
              &amp;{" "}
              <span
                style={{
                  background: "#45D4E8",
                  border: "3px solid #111",
                  borderRadius: 10,
                  padding: "0 12px",
                  boxShadow: "5px 5px 0 #111",
                  display: "inline-block",
                  transform: "rotate(-1.5deg)",
                  marginTop: 8,
                }}
              >
                Backend
              </span>
            </span>
            <span style={{ display: "block", marginTop: 8 }}>Developer</span>
          </motion.h1>

          <motion.p
            {...m(0.12)}
            style={{
              fontSize: 19,
              lineHeight: 1.5,
              fontWeight: 500,
              maxWidth: 540,
              margin: "28px 0 0",
            }}
          >
            {profile.tagline}
          </motion.p>

          <motion.p
            {...m(0.18)}
            style={{
              fontSize: 16,
              lineHeight: 1.5,
              color: "#3a352b",
              maxWidth: 540,
              margin: "14px 0 0",
            }}
          >
            {profile.subline}
          </motion.p>

          <motion.div
            {...m(0.26)}
            style={{
              display: "flex",
              flexWrap: "wrap",
              gap: 14,
              marginTop: 34,
            }}
          >
            <a
              href="#demo"
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
              <span aria-hidden="true">▶</span>
              Демо Supplier Search
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
              Telegram
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
          </motion.div>

          <motion.blockquote
            {...m(0.34)}
            style={{
              marginTop: 34,
              background: "#fff",
              border: "3px solid #111",
              borderLeft: "10px solid #FF73B3",
              borderRadius: 12,
              padding: "18px 20px",
              maxWidth: 560,
              boxShadow: "5px 5px 0 #111",
            }}
          >
            <p
              style={{
                margin: 0,
                fontSize: 16,
                lineHeight: 1.5,
                fontWeight: 500,
              }}
            >
              «Я не начинаю с модели. Сначала проектирую поток данных: откуда
              берём, как чистим, как проверяем, где храним, как объясняем
              результат. <strong>LLM — часть пайплайна, а не магическая чёрная коробка.</strong>»
            </p>
          </motion.blockquote>
        </div>

        <motion.div
          {...m(0.16)}
          style={{
            position: "relative",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
            minHeight: 420,
          }}
        >
          <div
            style={{
              position: "relative",
              background: "#FF73B3",
              border: "3px solid #111",
              borderRadius: 20,
              boxShadow: "9px 9px 0 #111",
              padding: 14,
              transform: "rotate(2deg)",
            }}
          >
            <div
              style={{
                display: "block",
                width: 300,
                height: 360,
                position: "relative",
                overflow: "hidden",
                borderRadius: 12,
                background: "#F4EFE2",
              }}
            >
              <Image
                src="/images/hero.png"
                alt="Александр Быков"
                fill
                priority
                sizes="(max-width: 640px) 72vw, 300px"
                className="object-cover"
              />
            </div>
          </div>

          <div
            style={{
              position: "absolute",
              top: -6,
              right: 6,
              background: "#FFCE2E",
              border: "3px solid #111",
              borderRadius: 999,
              padding: "9px 18px",
              boxShadow: "4px 4px 0 #111",
              fontFamily: "'Archivo Black', sans-serif",
              fontSize: 16,
              transform: "rotate(6deg)",
              "--r": "6deg",
              animation: "floaty 5s ease-in-out infinite",
            } as CSSProperties}
          >
            Александр
          </div>
          <div
            style={{
              position: "absolute",
              top: 30,
              left: -26,
              background: "#16B8A6",
              border: "3px solid #111",
              borderRadius: 14,
              padding: 12,
              boxShadow: "4px 4px 0 #111",
              transform: "rotate(-8deg)",
            }}
          >
            <svg width="40" height="40" viewBox="0 0 48 48" aria-hidden="true">
              <rect x="7" y="27" width="8" height="13" fill="#111" />
              <rect x="20" y="17" width="8" height="23" fill="#111" />
              <rect x="33" y="8" width="8" height="32" fill="#111" />
            </svg>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: 38,
              right: -30,
              background: "#FFCE2E",
              border: "3px solid #111",
              borderRadius: "50%",
              width: 64,
              height: 64,
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "4px 4px 0 #111",
              transform: "rotate(-6deg)",
              "--r": "-6deg",
              animation: "floaty 6s ease-in-out infinite",
            } as CSSProperties}
          >
            <svg width="40" height="40" viewBox="0 0 48 48" aria-hidden="true">
              <path
                d="M4 24s8-11 20-11 20 11 20 11-8 11-20 11S4 24 4 24z"
                fill="#fff"
                stroke="#111"
                strokeWidth="2.5"
              />
              <circle cx="24" cy="24" r="6" fill="#111" />
            </svg>
          </div>
          <div
            style={{
              position: "absolute",
              bottom: -14,
              left: 0,
              background: "#57D785",
              border: "3px solid #111",
              borderRadius: 999,
              padding: "8px 15px",
              boxShadow: "4px 4px 0 #111",
              fontWeight: 700,
              fontSize: 13,
              transform: "rotate(-3deg)",
            }}
          >
            ● Available for work
          </div>
          <svg
            style={{ position: "absolute", top: -22, left: 60 }}
            width="34"
            height="34"
            viewBox="0 0 24 24"
            aria-hidden="true"
          >
            <path
              d="M12 1c.6 6 4 9.4 10 11-6 1.6-9.4 5-11 11-1.6-6-5-9.4-11-11C7 10.4 10.4 7 12 1z"
              fill="#7C66F0"
              stroke="#111"
              strokeWidth="1.5"
            />
          </svg>
        </motion.div>
      </section>
    </div>
  );
}
