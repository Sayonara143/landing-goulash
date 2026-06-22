import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { roleFit } from "@/lib/supplier";

// Таблица соответствия: что нужно роли ↔ что у меня есть.
// Сильнее простого списка технологий — бьёт прямо в требования вакансии.
export function RoleFit() {
  return (
    <Section
      id="relevance"
      eyebrow="Почему я подхожу"
      title="Опыт под профиль роли"
    >
      <Reveal>
        <div className="overflow-hidden rounded-2xl border border-white/10 bg-surface/60">
          <table className="w-full border-collapse text-left">
            <thead>
              <tr className="border-b border-white/10 text-sm uppercase tracking-wide text-white/50">
                <th className="w-2/5 p-4 font-medium sm:p-5">Что нужно роли</th>
                <th className="p-4 font-medium sm:p-5">Что у меня есть</th>
              </tr>
            </thead>
            <tbody>
              {roleFit.map((row) => (
                <tr
                  key={row.need}
                  className="border-b border-white/5 align-top transition last:border-0 hover:bg-white/[0.03]"
                >
                  <td className="p-4 font-medium text-accent sm:p-5">
                    {row.need}
                  </td>
                  <td className="p-4 text-white/75 sm:p-5">{row.have}</td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </Reveal>
    </Section>
  );
}
