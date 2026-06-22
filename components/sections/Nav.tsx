import { profile } from "@/lib/data";

const links = [
  { href: "/#relevance", label: "Релевантность" },
  { href: "/#supplier", label: "Кейс" },
  { href: "/#supplier-demo", label: "Демо" },
  { href: "/#projects", label: "Проекты" },
  { href: "/#experience", label: "Опыт" },
  { href: "/#contact", label: "Контакты" },
];

export function Nav() {
  return (
    <header className="sticky top-0 z-50 border-b border-white/5 bg-bg/70 backdrop-blur-md">
      <nav className="container-x flex h-16 items-center justify-between">
        <a href="/" className="font-semibold tracking-tight">
          {profile.name}
        </a>
        <ul className="hidden gap-6 text-sm text-white/60 sm:flex">
          {links.map((l) => (
            <li key={l.href}>
              <a href={l.href} className="transition hover:text-white">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
      </nav>
    </header>
  );
}
