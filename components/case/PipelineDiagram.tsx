"use client";

import { useState } from "react";
import { motion, useReducedMotion } from "framer-motion";
import { pipelineSteps } from "@/lib/supplier";

// Интерактивная схема pipeline. Контент шагов и пояснений — в DOM (SEO),
// при наведении/фокусе раскрывается детальное описание шага.
export function PipelineDiagram() {
  const reduce = useReducedMotion();
  const [active, setActive] = useState(pipelineSteps[0].id);
  const current =
    pipelineSteps.find((s) => s.id === active) ?? pipelineSteps[0];

  return (
    <div className="rounded-2xl border border-white/10 bg-surface/60 p-5 sm:p-7">
      <ol className="flex flex-wrap items-stretch gap-3">
        {pipelineSteps.map((step, i) => {
          const isActive = step.id === active;
          return (
            <li key={step.id} className="flex items-center gap-3">
              <motion.button
                type="button"
                onMouseEnter={() => setActive(step.id)}
                onFocus={() => setActive(step.id)}
                onClick={() => setActive(step.id)}
                whileHover={reduce ? undefined : { y: -3 }}
                aria-pressed={isActive}
                className={`flex min-w-[9.5rem] flex-col rounded-xl border p-3 text-left transition ${
                  isActive
                    ? "border-accent/60 bg-accent/10"
                    : "border-white/10 bg-white/[0.02] hover:border-white/25"
                }`}
              >
                <span className="text-[0.7rem] font-medium uppercase tracking-wider text-white/40">
                  Шаг {i + 1}
                </span>
                <span className="mt-1 text-sm font-semibold text-white">
                  {step.title}
                </span>
                <span className="mt-0.5 text-xs text-white/55">
                  {step.short}
                </span>
              </motion.button>
              {i < pipelineSteps.length - 1 && (
                <span
                  aria-hidden="true"
                  className="hidden text-white/25 sm:inline"
                >
                  →
                </span>
              )}
            </li>
          );
        })}
      </ol>

      <motion.div
        key={current.id}
        initial={reduce ? false : { opacity: 0, y: 8 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.3 }}
        className="mt-5 rounded-xl border border-white/10 bg-bg/40 p-4 text-white/75"
      >
        <span className="font-semibold text-accent">{current.title}.</span>{" "}
        {current.detail}
      </motion.div>
    </div>
  );
}
