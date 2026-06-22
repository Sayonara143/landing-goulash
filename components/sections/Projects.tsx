const projects = [
  {
    tagLabel: "flagship",
    title: "Supplier Intelligence",
    sub: "AI-сервис поиска поставщиков",
    desc: "Главный кейс: по категории и региону генерирует B2B-запросы, парсит сайты поставщиков, извлекает контакты/доставку/документы через LLM и строит таблицу с оценкой приоритета.",
    tags: ["Python", "FastAPI", "LLM-extraction", "Search API", "PostgreSQL"],
    accent: "#FFCE2E",
  },
  {
    tagLabel: "integration",
    title: "API-интеграционный слой",
    sub: "Унификация внешних API",
    desc: "Унифицированный слой клиентов/адаптеров для внешних (в т.ч. биржевых) API: подпись запросов, ретраи, лимиты, нормализация ответов в единый формат.",
    tags: ["Python", "asyncio", "REST/WebSocket", "Pydantic"],
    accent: "#45D4E8",
  },
  {
    tagLabel: "trading",
    title: "Торгово-арбитражный сервис",
    sub: "Жизненный цикл сделок",
    desc: "Хранение активных сделок, контроль жизненного цикла, расчёт объёмов, проверка ограничений по инструментам, восстановление состояния после рестарта из БД.",
    tags: ["Python", "SQLAlchemy 2.0", "PostgreSQL"],
    accent: "#FF73B3",
  },
  {
    tagLabel: "event-driven",
    title: "Интеграции с 1С",
    sub: "Event-driven на Kafka",
    desc: "Сервисы интеграции с 1С на Kafka: рост объёма переработанных данных, снижение latency, оптимизация SQL.",
    tags: ["Golang", "Kafka", "ClickHouse"],
    accent: "#7C66F0",
  },
  {
    tagLabel: "migration",
    title: "Миграция Strapi 4 → 5",
    sub: "Анализ и восстановление БД",
    desc: "Анализ изменений структуры БД (document_id, локализации, draft/publish, связи), поиск расхождений, SQL-скрипты восстановления проблемных таблиц.",
    tags: ["Strapi", "Node.js", "SQL"],
    accent: "#57D785",
  },
  {
    tagLabel: "prototyping",
    title: "Прототипы анализа данных",
    sub: "Desktop на PySide6",
    desc: "Рабочие Python-прототипы и desktop-приложение на PySide6 с модульной структурой для анализа и визуализации данных.",
    tags: ["Python", "PySide6"],
    accent: "#FFCE2E",
  },
];

export function Projects() {
  return (
    <section
      id="projects"
      style={{
        background: "#45D4E8",
        borderTop: "3px solid #111",
        borderBottom: "3px solid #111",
        padding: "74px 0",
        fontFamily: "'Space Grotesk', sans-serif",
        color: "#111",
      }}
    >
      <div style={{ maxWidth: 1180, margin: "0 auto", padding: "0 24px" }}>
        <span
          style={{
            display: "inline-block",
            background: "#111",
            color: "#F4EFE2",
            border: "3px solid #111",
            fontWeight: 700,
            fontSize: 13,
            letterSpacing: 1.5,
            textTransform: "uppercase",
            padding: "6px 13px",
            borderRadius: 9,
          }}
        >
          Кейсы
        </span>
        <h2
          style={{
            fontFamily: "'Archivo Black', sans-serif",
            fontSize: "clamp(32px,5vw,56px)",
            lineHeight: 1,
            margin: "22px 0 36px",
          }}
        >
          Проекты под профиль роли
        </h2>
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 22,
          }}
        >
          {projects.map((project) => (
            <div
              key={project.title}
              className="neo-project-card"
              style={{
                background: "#F4EFE2",
                border: "3px solid #111",
                borderRadius: 16,
                boxShadow: "7px 7px 0 #111",
                padding: 24,
                display: "flex",
                flexDirection: "column",
              }}
            >
              <div
                style={{
                  display: "inline-flex",
                  width: "fit-content",
                  alignItems: "center",
                  gap: 8,
                  background: project.accent,
                  border: "2.5px solid #111",
                  borderRadius: 8,
                  padding: "3px 10px",
                  fontFamily: "'Space Mono', monospace",
                  fontWeight: 700,
                  fontSize: 13,
                  marginBottom: 14,
                }}
              >
                /{project.tagLabel}
              </div>
              <h3
                style={{
                  fontFamily: "'Archivo Black', sans-serif",
                  fontSize: 21,
                  margin: "0 0 4px",
                  lineHeight: 1.1,
                }}
              >
                {project.title}
              </h3>
              <div
                style={{
                  fontWeight: 600,
                  fontSize: 14,
                  color: "#7c7563",
                  marginBottom: 10,
                }}
              >
                {project.sub}
              </div>
              <p
                style={{
                  margin: "0 0 16px",
                  fontSize: 15,
                  lineHeight: 1.5,
                  fontWeight: 500,
                  flex: 1,
                }}
              >
                {project.desc}
              </p>
              <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                {project.tags.map((tag) => (
                  <span
                    key={tag}
                    style={{
                      background: "#fff",
                      border: "2px solid #111",
                      borderRadius: 999,
                      padding: "4px 11px",
                      fontWeight: 600,
                      fontSize: 13,
                    }}
                  >
                    {tag}
                  </span>
                ))}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
