import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { skills } from "@/lib/data";

export function Skills() {
  return (
    <Section id="skills" eyebrow="Стек" title="Навыки и технологии">
      <div className="grid gap-6 sm:grid-cols-2">
        {skills.map((group, i) => (
          <Reveal key={group.group} delay={i * 0.06}>
            <div className="rounded-2xl border border-white/10 bg-surface/60 p-6">
              <h3 className="mb-4 text-sm font-medium uppercase tracking-widest text-white/50">
                {group.group}
              </h3>
              <div className="flex flex-wrap gap-2">
                {group.items.map((item) => (
                  <span
                    key={item}
                    className="rounded-lg border border-white/10 bg-white/5 px-3 py-1.5 text-sm text-white/80"
                  >
                    {item}
                  </span>
                ))}
              </div>
            </div>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
