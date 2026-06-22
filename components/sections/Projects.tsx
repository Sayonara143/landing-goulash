import Link from "next/link";
import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { projects } from "@/lib/data";

export function Projects() {
  return (
    <Section id="projects" eyebrow="Кейсы" title="Проекты под профиль роли">
      <div className="grid gap-6 sm:grid-cols-2">
        {projects.map((p, i) => {
          const card = (
            <article className="group h-full rounded-2xl border border-white/10 bg-surface/60 p-6 transition hover:-translate-y-1 hover:border-accent/40">
              <h3 className="mb-2 text-lg font-semibold transition group-hover:text-accent">
                {p.title}
                {p.href && <span className="ml-1 text-accent">→</span>}
              </h3>
              <p className="text-white/70">{p.blurb}</p>
              <div className="mt-4 flex flex-wrap gap-2">
                {p.tags.map((t) => (
                  <span
                    key={t}
                    className="rounded-md bg-white/5 px-2.5 py-1 text-xs text-white/60"
                  >
                    {t}
                  </span>
                ))}
              </div>
            </article>
          );

          return (
            <Reveal key={p.title} delay={i * 0.06}>
              {p.href ? (
                <Link href={p.href} className="block h-full">
                  {card}
                </Link>
              ) : (
                card
              )}
            </Reveal>
          );
        })}
      </div>
    </Section>
  );
}
