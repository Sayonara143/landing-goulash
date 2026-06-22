import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { scoreModel } from "@/lib/supplier";

const total = scoreModel.reduce((acc, c) => acc + c.weight, 0);

// Прозрачная модель оценки поставщика — помогает решить, кому звонить первым.
export function ScoreModel() {
  return (
    <Section id="score" eyebrow="Принятие решения" title="Supplier Score">
      <Reveal>
        <p className="-mt-6 mb-8 max-w-2xl text-white/70">
          Score = сумма весов по простым, объяснимым критериям. Цель — не
          «магическая оценка», а понятный приоритет обзвона.
        </p>
      </Reveal>

      <div className="grid gap-5 lg:grid-cols-[1.4fr_1fr]">
        <Reveal>
          <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface/60">
            <table className="w-full border-collapse text-left">
              <thead>
                <tr className="border-b border-white/10 text-xs uppercase tracking-wide text-white/40">
                  <th className="p-4 font-medium">Критерий</th>
                  <th className="p-4 text-right font-medium">Вес</th>
                </tr>
              </thead>
              <tbody>
                {scoreModel.map((c) => (
                  <tr
                    key={c.label}
                    className="border-b border-white/5 transition last:border-0 hover:bg-white/[0.03]"
                  >
                    <td className="p-4 text-white/75">{c.label}</td>
                    <td className="p-4 text-right font-medium text-accent">
                      {c.weight}
                    </td>
                  </tr>
                ))}
                <tr className="bg-white/[0.02]">
                  <td className="p-4 font-semibold text-white">Итого</td>
                  <td className="p-4 text-right font-semibold text-white">
                    {total}
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </Reveal>

        <Reveal delay={0.08}>
          <div className="flex h-full flex-col justify-center rounded-2xl border border-emerald-500/20 bg-surface/60 p-6 text-center">
            <p className="text-5xl font-bold text-emerald-400">82/100</p>
            <p className="mt-3 text-white/70">
              «Мясной Дом» — стоит связаться в первую очередь: есть контакты,
              регион, документы и сертификаты.
            </p>
          </div>
        </Reveal>
      </div>
    </Section>
  );
}
