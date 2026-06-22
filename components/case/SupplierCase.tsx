import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { PipelineDiagram } from "@/components/case/PipelineDiagram";
import { caseStudy } from "@/lib/supplier";

// Центральный блок лендинга: описание главного кейса + интерактивная схема pipeline.
export function SupplierCase() {
  return (
    <Section
      id="supplier"
      eyebrow="Главный кейс"
      title="Supplier Intelligence"
    >
      <Reveal>
        <p className="-mt-6 mb-8 max-w-3xl text-lg text-white/75">
          AI-сервис для поиска и сравнения поставщиков продуктов питания.{" "}
          {caseStudy.scenario}
        </p>
      </Reveal>

      <Reveal delay={0.05}>
        <PipelineDiagram />
      </Reveal>

      <Reveal delay={0.1}>
        <div className="mt-6 flex flex-wrap gap-4">
          <a
            href="#supplier-demo"
            className="rounded-lg bg-accent px-6 py-3 font-medium text-bg transition hover:brightness-110"
          >
            Запустить демо ↓
          </a>
          <Link
            href="/case/supplier-intelligence"
            className="rounded-lg border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
          >
            Подробный разбор кейса →
          </Link>
        </div>
      </Reveal>
    </Section>
  );
}
