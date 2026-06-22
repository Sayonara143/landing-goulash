import type { ReactNode } from "react";

// Семантическая секция с заголовком — единообразная структура и SEO-иерархия.
export function Section({
  id,
  title,
  eyebrow,
  children,
}: {
  id: string;
  title?: string;
  eyebrow?: string;
  children: ReactNode;
}) {
  return (
    <section id={id} className="container-x scroll-mt-24 py-20 sm:py-28">
      {(eyebrow || title) && (
        <header className="mb-12">
          {eyebrow && (
            <p className="mb-2 text-sm font-medium uppercase tracking-widest text-accent">
              {eyebrow}
            </p>
          )}
          {title && <h2 className="text-3xl font-bold sm:text-4xl">{title}</h2>}
        </header>
      )}
      {children}
    </section>
  );
}
