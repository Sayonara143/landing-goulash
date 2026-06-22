import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { relevance } from "@/lib/data";

// Ключевая секция теста: почему опыт релевантен роли AI-автоматизатора.
export function Relevance() {
  return (
    <Section id="relevance" eyebrow="Почему я подхожу" title="Опыт под профиль роли">
      <div className="grid gap-6 sm:grid-cols-2">
        {relevance.map((item, i) => (
          <Reveal key={item.title} delay={i * 0.08}>
            <article className="h-full rounded-2xl border border-white/10 bg-surface/60 p-6 transition hover:border-accent/40">
              <h3 className="mb-3 text-lg font-semibold text-accent">{item.title}</h3>
              <p className="text-white/70">{item.text}</p>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
