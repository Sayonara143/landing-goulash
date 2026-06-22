"use client";

import { Fragment, useState } from "react";
import { AnimatePresence, motion, useReducedMotion } from "framer-motion";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import {
  demoQuery,
  generatedQueries,
  pipelineRun,
  rankedSuppliers,
  scoreBreakdown,
  type Supplier,
} from "@/lib/supplier";

type Phase = "idle" | "done";

function scoreColor(score: number) {
  if (score >= 75) return "text-emerald-400";
  if (score >= 50) return "text-amber-400";
  return "text-white/50";
}

// Бейдж confidence для поля. null → требует ручной проверки.
function Confidence({ c }: { c: number | null }) {
  if (c === null)
    return (
      <span className="rounded bg-white/5 px-1.5 py-0.5 text-[0.7rem] text-white/40">
        не найдено
      </span>
    );
  return (
    <span
      className={`rounded px-1.5 py-0.5 text-[0.7rem] ${
        c >= 0.85
          ? "bg-emerald-500/15 text-emerald-300"
          : "bg-amber-500/15 text-amber-300"
      }`}
    >
      {c.toFixed(2)}
    </span>
  );
}

function SupplierDetail({ s }: { s: Supplier }) {
  const breakdown = scoreBreakdown(s);
  const fields: { label: string; v: string | null; c: number | null }[] = [
    { label: "Телефон", v: s.phone.value, c: s.phone.confidence },
    { label: "Email", v: s.email.value, c: s.email.confidence },
    { label: "Доставка", v: s.delivery.value, c: s.delivery.confidence },
    { label: "Мин. заказ", v: s.minimumOrder.value, c: s.minimumOrder.confidence },
    { label: "Цена", v: s.price.value, c: s.price.confidence },
  ];

  const json = {
    company_name: s.name,
    city: s.city,
    region: s.region,
    phone: s.phone.value,
    email: s.email.value,
    customer_segment: s.segments,
    delivery: s.delivery.value,
    documents: s.documents,
    certificates: s.certificates,
    minimum_order: s.minimumOrder.value,
    price: s.price.value,
    source: s.source,
  };

  return (
    <div className="grid gap-5 border-t border-white/10 bg-bg/40 p-4 sm:p-5 lg:grid-cols-3">
      {/* Извлечённые поля + confidence */}
      <div>
        <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-white/40">
          Извлечённые поля
        </h4>
        <ul className="space-y-1.5 text-sm">
          {fields.map((f) => (
            <li key={f.label} className="flex items-center justify-between gap-2">
              <span className="text-white/55">{f.label}</span>
              <span className="flex items-center gap-2 text-right text-white/80">
                {f.v ?? <span className="text-white/30">—</span>}
                <Confidence c={f.c} />
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* Разбивка score */}
      <div>
        <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-white/40">
          Supplier Score
        </h4>
        <ul className="space-y-1 text-sm">
          {breakdown.map((b) => (
            <li key={b.label} className="flex items-center justify-between gap-2">
              <span className={b.has ? "text-white/75" : "text-white/35"}>
                {b.has ? "✓" : "·"} {b.label}
              </span>
              <span className={b.has ? "text-emerald-400" : "text-white/30"}>
                {b.earned}/{b.weight}
              </span>
            </li>
          ))}
        </ul>
      </div>

      {/* JSON-результат + источник */}
      <div>
        <h4 className="mb-2 text-xs font-medium uppercase tracking-wider text-white/40">
          JSON-результат
        </h4>
        <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-3 text-[0.72rem] leading-relaxed text-white/70">
          {JSON.stringify(json, null, 2)}
        </pre>
        <p className="mt-2 text-xs text-white/40">
          Источник:{" "}
          <span className="text-white/60">{s.source}</span>
        </p>
      </div>
    </div>
  );
}

export function SupplierDemo() {
  const reduce = useReducedMotion();
  const [phase, setPhase] = useState<Phase>("idle");
  const [expanded, setExpanded] = useState<string | null>(null);
  const [showRun, setShowRun] = useState(false);

  const run = () => {
    setPhase("done");
    setExpanded(rankedSuppliers[0].supplier.id);
  };

  return (
    <Section
      id="supplier-demo"
      eyebrow="Живое демо"
      title="Найти поставщиков"
    >
      <Reveal>
        <p className="-mt-6 mb-6 max-w-2xl text-sm text-white/50">
          Для демонстрации используется сохранённый (cached) результат поиска —
          чтобы не зависеть от лимитов поискового API и доступности сайтов.
          Логика продукта при этом настоящая.
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        {/* Форма ввода */}
        <div className="rounded-2xl border border-white/10 bg-surface/60 p-5 sm:p-6">
          <div className="grid gap-4 sm:grid-cols-[1fr_1fr_auto] sm:items-end">
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wider text-white/40">
                Категория
              </span>
              <input
                readOnly
                defaultValue={demoQuery.category}
                className="w-full rounded-lg border border-white/10 bg-bg/50 px-4 py-2.5 text-white/90 outline-none focus:border-accent/50"
              />
            </label>
            <label className="block">
              <span className="mb-1.5 block text-xs uppercase tracking-wider text-white/40">
                Город / регион
              </span>
              <input
                readOnly
                defaultValue={`${demoQuery.city}, ${demoQuery.region}`}
                className="w-full rounded-lg border border-white/10 bg-bg/50 px-4 py-2.5 text-white/90 outline-none focus:border-accent/50"
              />
            </label>
            <button
              type="button"
              onClick={run}
              className="rounded-lg bg-accent px-6 py-2.5 font-medium text-bg transition hover:brightness-110"
            >
              {phase === "done" ? "Повторить" : "Найти поставщиков"}
            </button>
          </div>
        </div>
      </Reveal>

      <AnimatePresence>
        {phase === "done" && (
          <motion.div
            initial={reduce ? false : { opacity: 0, y: 16 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.4 }}
            className="mt-6 space-y-6"
          >
            {/* Сгенерированные запросы */}
            <div className="rounded-2xl border border-white/10 bg-surface/60 p-5 sm:p-6">
              <h3 className="mb-3 text-sm font-medium uppercase tracking-wider text-white/40">
                Сгенерированные запросы (LLM)
              </h3>
              <div className="flex flex-wrap gap-2">
                {generatedQueries.map((q) => (
                  <span
                    key={q}
                    className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/70"
                  >
                    {q}
                  </span>
                ))}
              </div>

              {/* Технический pipeline reasoning */}
              <button
                type="button"
                onClick={() => setShowRun((v) => !v)}
                className="mt-4 text-sm text-accent transition hover:brightness-110"
              >
                {showRun ? "Скрыть" : "Показать"} reasoning pipeline
              </button>
              <AnimatePresence>
                {showRun && (
                  <motion.ol
                    initial={reduce ? false : { opacity: 0, height: 0 }}
                    animate={{ opacity: 1, height: "auto" }}
                    exit={{ opacity: 0, height: 0 }}
                    className="mt-3 space-y-1 overflow-hidden text-sm text-white/60"
                  >
                    {pipelineRun.map((step, i) => (
                      <li key={step} className="flex gap-2">
                        <span className="text-accent">{i + 1}.</span>
                        {step}
                      </li>
                    ))}
                  </motion.ol>
                )}
              </AnimatePresence>
            </div>

            {/* Таблица результатов */}
            <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface/60">
              <div className="overflow-x-auto">
                <table className="w-full min-w-[640px] border-collapse text-left text-sm">
                  <thead>
                    <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/40">
                      <th className="p-4">Поставщик</th>
                      <th className="p-4">Город</th>
                      <th className="p-4">Контакты</th>
                      <th className="p-4">Документы</th>
                      <th className="p-4">Доставка</th>
                      <th className="p-4 text-right">Score</th>
                      <th className="p-4" />
                    </tr>
                  </thead>
                  <tbody>
                    {rankedSuppliers.map(({ supplier: s, score }) => {
                      const open = expanded === s.id;
                      return (
                        <Fragment key={s.id}>
                          <tr
                            onClick={() => setExpanded(open ? null : s.id)}
                            className="cursor-pointer border-b border-white/5 transition hover:bg-white/[0.03]"
                          >
                            <td className="p-4 font-medium text-white">
                              {s.name}
                            </td>
                            <td className="p-4 text-white/60">{s.city}</td>
                            <td className="p-4 text-white/60">
                              {s.phone.value || s.email.value ? "есть" : "—"}
                            </td>
                            <td className="p-4 text-white/60">
                              {s.documents || s.certificates ? "есть" : "—"}
                            </td>
                            <td className="p-4 text-white/60">
                              {s.delivery.value ?? "—"}
                            </td>
                            <td
                              className={`p-4 text-right font-semibold ${scoreColor(score)}`}
                            >
                              {score}/100
                            </td>
                            <td className="p-4 text-right text-white/40">
                              {open ? "▲" : "▼"}
                            </td>
                          </tr>
                          {open && (
                            <tr>
                              <td colSpan={7} className="p-0">
                                <SupplierDetail s={s} />
                              </td>
                            </tr>
                          )}
                        </Fragment>
                      );
                    })}
                  </tbody>
                </table>
              </div>
            </div>
            <p className="text-sm text-white/40">
              Кликните по строке, чтобы увидеть извлечённые поля, разбивку score,
              confidence и JSON-результат.
            </p>
          </motion.div>
        )}
      </AnimatePresence>
    </Section>
  );
}
