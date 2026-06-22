import type { Metadata } from "next";
import Link from "next/link";
import { AnimatedBackground } from "@/components/ui/AnimatedBackground";
import { Nav } from "@/components/sections/Nav";
import { Footer } from "@/components/sections/Footer";
import { Reveal } from "@/components/ui/Reveal";
import { PipelineDiagram } from "@/components/case/PipelineDiagram";
import {
  caseStudy,
  pipelineSteps,
  rawToStructured,
  scoreModel,
  antiHallucination,
  generatedQueries,
} from "@/lib/supplier";
import { profile } from "@/lib/data";
import { siteUrl } from "@/lib/seo";

const pageUrl = `${siteUrl}/case/supplier-intelligence`;

export const metadata: Metadata = {
  title: "Supplier Intelligence — AI-сервис поиска поставщиков",
  description:
    "Кейс: AI-сервис, который по категории и региону генерирует B2B-запросы, парсит сайты поставщиков, извлекает данные через LLM и строит таблицу с оценкой приоритета. Архитектура, pipeline, scoring, ограничения.",
  alternates: { canonical: "/case/supplier-intelligence" },
  openGraph: {
    type: "article",
    locale: "ru_RU",
    url: pageUrl,
    title: "Supplier Intelligence — AI-сервис поиска поставщиков",
    description:
      "Архитектура, pipeline, scoring и ограничения AI-сервиса поиска поставщиков продуктов питания.",
  },
};

function jsonLd() {
  return {
    "@context": "https://schema.org",
    "@type": "TechArticle",
    headline: caseStudy.title,
    description: caseStudy.problem,
    author: { "@type": "Person", name: profile.name, url: siteUrl },
    url: pageUrl,
    inLanguage: "ru",
  };
}

function Block({
  n,
  title,
  children,
}: {
  n: string;
  title: string;
  children: React.ReactNode;
}) {
  return (
    <Reveal>
      <section className="border-t border-white/10 py-12">
        <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
          {n}
        </p>
        <h2 className="mb-5 text-2xl font-bold sm:text-3xl">{title}</h2>
        {children}
      </section>
    </Reveal>
  );
}

export default function CaseStudyPage() {
  return (
    <>
      <AnimatedBackground />
      <Nav />
      <main className="container-x py-20">
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd()) }}
        />

        <Link
          href="/#supplier"
          className="text-sm text-white/50 transition hover:text-white"
        >
          ← На главную
        </Link>

        <article className="mt-6">
          <header className="mb-4">
            <p className="mb-3 text-sm font-medium uppercase tracking-widest text-accent">
              Case study
            </p>
            <h1 className="max-w-3xl text-3xl font-bold leading-tight sm:text-5xl">
              Supplier Intelligence
            </h1>
            <p className="mt-4 max-w-2xl text-lg text-white/70">
              AI-сервис для поиска и сравнения поставщиков продуктов питания.
            </p>
          </header>

          <Block n="01 · Проблема" title="Что болит у бизнеса">
            <p className="max-w-3xl text-white/70">{caseStudy.problem}</p>
          </Block>

          <Block n="02 · Сценарий" title="Пользовательский сценарий">
            <p className="max-w-3xl text-white/70">{caseStudy.scenario}</p>
            <div className="mt-5 flex flex-wrap gap-2">
              {generatedQueries.map((q) => (
                <span
                  key={q}
                  className="rounded-md border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/65"
                >
                  {q}
                </span>
              ))}
            </div>
          </Block>

          <Block n="03 · Архитектура" title="Как работает pipeline">
            <PipelineDiagram />
            <ol className="mt-6 space-y-3">
              {pipelineSteps.map((s, i) => (
                <li key={s.id} className="flex gap-3 text-white/70">
                  <span className="font-semibold text-accent">{i + 1}.</span>
                  <span>
                    <span className="font-medium text-white">{s.title}.</span>{" "}
                    {s.detail}
                  </span>
                </li>
              ))}
            </ol>
          </Block>

          <Block n="04 · Данные" title="Какие данные извлекаются">
            <div className="grid gap-5 lg:grid-cols-2">
              <div className="rounded-2xl border border-white/10 bg-surface/60 p-5">
                <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
                  Сырой текст со страницы
                </h3>
                <p className="text-white/70">“{rawToStructured.raw}”</p>
              </div>
              <div className="rounded-2xl border border-accent/20 bg-surface/60 p-5">
                <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-accent/80">
                  Структурированный JSON
                </h3>
                <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 text-sm leading-relaxed text-white/75">
                  {JSON.stringify(rawToStructured.structured, null, 2)}
                </pre>
              </div>
            </div>
          </Block>

          <Block n="05 · Scoring" title="Как считается Supplier Score">
            <p className="mb-5 max-w-2xl text-white/70">
              Прозрачная весовая модель: сумма баллов за наличие сигналов.
              Объяснимо и пригодно для приоритизации обзвона.
            </p>
            <ul className="grid gap-2 sm:grid-cols-2">
              {scoreModel.map((c) => (
                <li
                  key={c.label}
                  className="flex items-center justify-between rounded-lg border border-white/10 bg-surface/60 px-4 py-2.5 text-sm"
                >
                  <span className="text-white/75">{c.label}</span>
                  <span className="font-medium text-accent">{c.weight}</span>
                </li>
              ))}
            </ul>
          </Block>

          <Block
            n="06 · Надёжность"
            title="Ограничения и как я снижаю риск ошибок LLM"
          >
            <div className="grid gap-5 lg:grid-cols-2">
              <div>
                <h3 className="mb-3 text-sm font-medium text-white/80">
                  Ограничения
                </h3>
                <ul className="space-y-2 text-white/70">
                  {caseStudy.limitations.map((l) => (
                    <li key={l} className="flex gap-2.5">
                      <span className="mt-1 text-amber-400">!</span>
                      {l}
                    </li>
                  ))}
                </ul>
              </div>
              <div>
                <h3 className="mb-3 text-sm font-medium text-white/80">
                  Anti-hallucination layer
                </h3>
                <ul className="space-y-2 text-white/70">
                  {antiHallucination.map((a) => (
                    <li key={a} className="flex gap-2.5">
                      <span className="mt-1 text-accent2">→</span>
                      {a}
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </Block>

          <Block n="07 · Развитие" title="Что улучшу при production-разработке">
            <ul className="space-y-2 text-white/70">
              {caseStudy.roadmap.map((r) => (
                <li key={r} className="flex gap-2.5">
                  <span className="mt-1 text-accent">+</span>
                  {r}
                </li>
              ))}
            </ul>
          </Block>

          <div className="mt-12 flex flex-wrap gap-4 border-t border-white/10 pt-10">
            <Link
              href="/#supplier-demo"
              className="rounded-lg bg-accent px-6 py-3 font-medium text-bg transition hover:brightness-110"
            >
              Запустить демо
            </Link>
            <a
              href={profile.github}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
            >
              GitHub
            </a>
          </div>
        </article>
      </main>
      <Footer />
    </>
  );
}
