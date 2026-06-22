import { Section } from "@/components/ui/Section";
import { Reveal } from "@/components/ui/Reveal";
import { profile } from "@/lib/data";

export function Contact() {
  return (
    <Section id="contact" eyebrow="Контакты" title="Давайте поговорим">
      <Reveal>
        <div className="rounded-2xl border border-white/10 bg-surface/60 p-8 sm:p-10">
          <p className="max-w-xl text-white/70">
            Открыт к роли AI-автоматизатора и обсуждению задач по интеграциям,
            пайплайнам данных и автоматизации. Самый быстрый способ связи —
            Telegram.
          </p>
          <div className="mt-8 flex flex-wrap gap-4">
            <a
              href={`mailto:${profile.email}`}
              className="rounded-lg bg-accent px-6 py-3 font-medium text-bg transition hover:brightness-110"
            >
              {profile.email}
            </a>
            <a
              href={profile.telegram}
              target="_blank"
              rel="noopener noreferrer"
              className="rounded-lg border border-white/15 px-6 py-3 font-medium text-white transition hover:bg-white/5"
            >
              Telegram
            </a>
          </div>
        </div>
      </Reveal>
    </Section>
  );
}
