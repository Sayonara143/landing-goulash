import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { engineeringDecisions, antiHallucination } from "@/lib/supplier";

// Инженерная зрелость: почему такая архитектура + как снижаю риск ошибок LLM.
export function EngineeringNotes() {
  return (
    <Section
      id="engineering"
      eyebrow="Инженерные решения"
      title="Почему такая архитектура"
    >
      <div className="grid gap-5 lg:grid-cols-[1.3fr_1fr]">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface/60">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/40">
                  <th className="p-4 font-medium">Решение</th>
                  <th className="p-4 font-medium">Почему</th>
                </tr>
              </thead>
              <tbody>
                {engineeringDecisions.map((d) => (
                  <tr
                    key={d.decision}
                    className="border-b border-white/5 align-top transition last:border-0 hover:bg-white/[0.03]"
                  >
                    <td className="whitespace-nowrap p-4 font-medium text-accent">
                      {d.decision}
                    </td>
                    <td className="p-4 text-white/70">{d.why}</td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </Reveal>

        {/* Anti-hallucination layer */}
        <Reveal delay={0.08}>
          <div className="flex h-full flex-col rounded-2xl border border-accent2/25 bg-surface/60 p-6">
            <h3 className="mb-4 text-lg font-semibold text-white">
              Anti-hallucination layer
            </h3>
            <ul className="space-y-2.5 text-white/70">
              {antiHallucination.map((item) => (
                <li key={item} className="flex gap-2.5">
                  <span className="mt-1 text-accent2">→</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
