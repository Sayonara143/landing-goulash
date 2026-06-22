import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { rawToStructured } from "@/lib/supplier";

// «Raw → Structured»: показывает, что это полноценный extraction pipeline,
// а не просто «вызов LLM».
export function RawToStructured() {
  return (
    <Section
      id="extraction"
      eyebrow="Extraction pipeline"
      title="Raw → Structured"
    >
      <div className="grid gap-5 lg:grid-cols-2 lg:items-stretch">
        <Reveal>
          <div className="flex h-full flex-col rounded-2xl border border-white/10 bg-surface/60 p-5 sm:p-6">
            <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-white/40">
              Сырой текст со страницы
            </h3>
            <p className="text-white/70">“{rawToStructured.raw}”</p>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex h-full flex-col rounded-2xl border border-accent/20 bg-surface/60 p-5 sm:p-6">
            <h3 className="mb-3 text-xs font-medium uppercase tracking-wider text-accent/80">
              Структурированный JSON
            </h3>
            <pre className="overflow-x-auto rounded-lg border border-white/10 bg-black/40 p-4 text-sm leading-relaxed text-white/75">
              {JSON.stringify(rawToStructured.structured, null, 2)}
            </pre>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
