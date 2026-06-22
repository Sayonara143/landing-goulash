import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { experience } from "@/lib/data";

export function Experience() {
  return (
    <Section id="experience" eyebrow="Карьера" title="Опыт работы">
      <div className="space-y-6">
        {experience.map((job, i) => (
          <Reveal key={job.company} delay={i * 0.06}>
            <article className="rounded-2xl border border-white/10 bg-surface/60 p-6 sm:p-8">
              <div className="flex flex-wrap items-baseline justify-between gap-2">
                <h3 className="text-xl font-semibold">
                  {job.role} · <span className="text-accent">{job.company}</span>
                </h3>
                <span className="text-sm text-white/50">{job.period}</span>
              </div>
              <p className="mt-3 text-white/70">{job.summary}</p>
              <ul className="mt-4 list-disc space-y-1.5 pl-5 text-white/70 marker:text-accent">
                {job.highlights.map((h) => (
                  <li key={h}>{h}</li>
                ))}
              </ul>
              <div className="mt-5 flex flex-wrap gap-2">
                {job.stack.map((s) => (
                  <span
                    key={s}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/60"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </article>
          </Reveal>
        ))}
      </div>
    </Section>
  );
}
