// Единый источник правды по контенту резюме/портфолио.
// Используется секциями лендинга и для генерации JSON-LD.

export const profile = {
  name: "Александр Быков",
  role: "AI Automation & Backend Developer",
  // Позиционирование «продуктовое», а не «резюме»: что я делаю, а не сколько мне лет.
  tagline:
    "Проектирую backend-сервисы и AI-пайплайны, которые превращают данные из API, сайтов и внешних систем в структурированную информацию для бизнеса.",
  subline:
    "Мой фокус — интеграции, API-клиенты, парсинг данных, LLM-extraction, event-driven backend и надёжное хранение результата в базе.",
  location: "Екатеринбург, Россия",
  experienceYears: "3 года 10 месяцев",
  email: "alsbykov.work@gmail.com",
  telegram: "https://t.me/alsbykov",
  github: "https://github.com/Sayonara143",
  resume: "https://ekaterinburg.hh.ru/resume/0f9512afff0c21cb330039ed1f783850716e46",
  phone: "+7 (992) 011-76-30",
  url: "https://example.com", // TODO: заменить на прод-домен
} as const;

// Почему backend-опыт релевантен роли AI-автоматизатора.
export const relevance: { title: string; text: string }[] = [
  {
    title: "Интеграции с внешними API",
    text: "Клиенты и адаптеры для разных API (включая биржевые): авторизация по ключам, подпись запросов, обработка ошибок, лимиты, нестандартные ответы и форматы данных — основа любой AI-автоматизации.",
  },
  {
    title: "Пайплайны обработки данных",
    text: "Сервисы получают данные из внешних систем, обрабатывают, приводят к единому внутреннему формату и сохраняют в БД. Мапперы, схемы (Pydantic/DTO), нормализация — готовый фундамент под LLM-пайплайны.",
  },
  {
    title: "Event-driven и масштаб",
    text: "Микросервисы на Kafka/Redis, интеграции с 1С под бизнес-критичные процессы. Умею проектировать асинхронные, отказоустойчивые потоки данных.",
  },
  {
    title: "Прототипы и автоматизация",
    text: "Рабочие прототипы для анализа и визуализации данных, desktop на PySide6, tg-боты и скрипты. Быстро собираю MVP, чтобы проверить идею.",
  },
];

export const skills: { group: string; items: string[] }[] = [
  {
    group: "Языки",
    items: ["Python", "Go (Golang)", "TypeScript / Node.js", "SQL"],
  },
  {
    group: "Backend & данные",
    items: [
      "asyncio",
      "SQLAlchemy 2.0",
      "Alembic",
      "PostgreSQL",
      "ClickHouse",
      "Redis",
      "MongoDB",
      "Elasticsearch",
    ],
  },
  {
    group: "Интеграции & обмен",
    items: ["REST API", "WebSocket", "gRPC", "Kafka", "RabbitMQ", "HMAC / подпись запросов", "Pydantic / DTO"],
  },
  {
    group: "Инфраструктура",
    items: ["Docker", "Docker Compose", "Kubernetes", "GitLab CI", "ELK", "Grafana", "Linux"],
  },
];

export type Job = {
  company: string;
  role: string;
  period: string;
  summary: string;
  highlights: string[];
  stack: string[];
};

export const experience: Job[] = [
  {
    company: "Фриланс",
    role: "Python-разработчик",
    period: "Январь 2026 — наст. время",
    summary:
      "Backend-разработка и интеграции с внешними API: получение, обработка и нормализация данных, сохранение в БД.",
    highlights: [
      "Клиенты/адаптеры для разных API, включая биржевые (ключи, подпись, лимиты, ошибки)",
      "Модульная архитектура: сетевой слой, мапперы, схемы, сервисы, клиент-специфичные правила",
      "Логика торгового/арбитражного сервиса: жизненный цикл сделок, восстановление состояния после рестарта",
      "Миграция Strapi 4 → 5: анализ структуры БД, SQL-скрипты восстановления",
    ],
    stack: ["Python", "asyncio", "SQLAlchemy 2.0", "Alembic", "PostgreSQL", "WebSocket", "PySide6"],
  },
  {
    company: "Сима-ленд",
    role: "Golang-разработчик",
    period: "Август 2023 — Январь 2025",
    summary:
      "Внутренние микросервисы под ключевые бизнес-процессы крупной e-commerce компании.",
    highlights: [
      "Сервисы интеграции с 1С, подключение к event-driven (Kafka), рост объёма обрабатываемых данных",
      "Узел обработки и объединения интернет-заказов по отправлениям для службы доставки",
      "Стандартизация разработки микросервисов — быстрее старт и онбординг",
      "Оптимизация SQL-запросов, снижение latency",
    ],
    stack: ["Golang", "Kafka", "Redis", "PostgreSQL", "ClickHouse", "Kubernetes", "Docker", "Grafana"],
  },
  {
    company: "Batonis Studio",
    role: "Backend-разработчик",
    period: "Май 2022 — Июль 2023",
    summary: "Бэкенд на Node.js/Python, микросервисы и проектирование БД под нужды бизнеса заказчика.",
    highlights: [
      "Проектирование микросервисов и структуры БД",
      "Разработка на Strapi",
      "Постановка задач на недельные спринты",
    ],
    stack: ["Node.js", "Python", "Strapi", "PostgreSQL", "MongoDB", "Redis", "RabbitMQ", "Docker"],
  },
];

export type Project = {
  title: string;
  blurb: string;
  tags: string[];
  href?: string; // ссылка на страницу кейса, если есть
};

export const projects: Project[] = [
  {
    title: "Supplier Intelligence (AI-сервис поиска поставщиков)",
    blurb:
      "Главный кейс: по категории и региону генерирует B2B-запросы, парсит сайты поставщиков, извлекает контакты/доставку/документы через LLM и строит таблицу с оценкой приоритета.",
    tags: ["Python", "FastAPI", "LLM-extraction", "Search API", "PostgreSQL"],
  },
  {
    title: "API-интеграционный слой",
    blurb:
      "Унифицированный слой клиентов/адаптеров для внешних (в т.ч. биржевых) API: подпись запросов, ретраи, лимиты, нормализация ответов в единый формат.",
    tags: ["Python", "asyncio", "REST/WebSocket", "Pydantic"],
  },
  {
    title: "Торгово-арбитражный сервис",
    blurb:
      "Хранение активных сделок, контроль жизненного цикла, расчёт объёмов, проверка ограничений по инструментам, восстановление состояния после рестарта из БД.",
    tags: ["Python", "SQLAlchemy 2.0", "PostgreSQL"],
  },
  {
    title: "Интеграции с 1С (event-driven)",
    blurb:
      "Сервисы интеграции с 1С на Kafka: рост объёма переработанных данных, снижение latency, оптимизация SQL.",
    tags: ["Golang", "Kafka", "ClickHouse"],
  },
  {
    title: "Миграция Strapi 4 → 5",
    blurb:
      "Анализ изменений структуры БД (document_id, локализации, draft/publish, связи), поиск расхождений, SQL-скрипты восстановления проблемных таблиц.",
    tags: ["Strapi", "Node.js", "SQL"],
  },
  {
    title: "Прототипы анализа и визуализации данных",
    blurb:
      "Рабочие Python-прототипы и desktop-приложение на PySide6 с модульной структурой для анализа и визуализации.",
    tags: ["Python", "PySide6"],
  },
];
