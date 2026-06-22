"use client";

import { motion, useReducedMotion } from "framer-motion";
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
    <section className="container-x flex min-h-[92vh] flex-col justify-center py-24">
      <motion.p
        {...m(0)}
        className="mb-5 inline-flex w-fit items-center gap-2 rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-sm text-white/70"
      >
        <span className="h-2 w-2 animate-float rounded-full bg-accent" />
        Открыт к роли AI Generalist / AI Automation Specialist
      </motion.p>

      <motion.h1
        {...m(0.05)}
        className="max-w-4xl text-4xl font-bold leading-[1.1] sm:text-6xl"
      >
        AI Automation &amp; <span className="text-gradient">Backend Developer</span>
      </motion.h1>

      <motion.p {...m(0.12)} className="mt-6 max-w-2xl text-lg text-white/75">
        {profile.tagline}
      </motion.p>

      <motion.p {...m(0.18)} className="mt-3 max-w-2xl text-base text-white/55">
        {profile.subline}
      </motion.p>

      <motion.div {...m(0.26)} className="mt-10 flex flex-wrap gap-3">
        <a
          href="#supplier-demo"
          className="rounded-lg bg-accent px-6 py-3 font-medium text-bg transition hover:brightness-110"
        >
          Демо Supplier Search
        </a>
        <a
          href={profile.github}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
        >
          GitHub
        </a>
        <a
          href={profile.telegram}
          target="_blank"
          rel="noopener noreferrer"
          className="rounded-lg border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
        >
          Telegram
        </a>
        <a
          href={profile.resume}
          className="rounded-lg border border-white/15 px-6 py-3 font-medium text-white/80 transition hover:bg-white/5"
        >
          Резюме (PDF)
        </a>
      </motion.div>

      {/* Тезис о подходе — «сначала поток данных, потом модель» */}
      <motion.blockquote
        {...m(0.34)}
        className="mt-12 max-w-2xl border-l-2 border-accent/50 pl-5 text-white/60"
      >
        Я не начинаю с модели. Сначала проектирую поток данных: откуда берём,
        как чистим, как проверяем, где храним, как объясняем результат.
        LLM — часть пайплайна, а не магическая чёрная коробка.
      </motion.blockquote>
    </section>
  );
}
