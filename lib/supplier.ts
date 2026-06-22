// Контент главного кейса лендинга — «Supplier Intelligence».
// Единый источник правды для интерактивного демо, схем и страницы кейса.
// Данные демо — сохранённый (cached) результат: демо не зависит от лимитов
// поискового API и доступности сайтов, но честно показывает логику продукта.

export type FieldConfidence = {
  value: string | null;
  // 0..1 — уверенность извлечения; null-значение помечается на ручную проверку
  confidence: number | null;
};

export type Supplier = {
  id: string;
  name: string;
  city: string;
  region: string;
  source: string; // домен-источник, на котором найдены данные
  phone: FieldConfidence;
  email: FieldConfidence;
  segments: string[]; // кому поставляет: рестораны, сети, опт...
  delivery: FieldConfidence;
  documents: boolean; // декларации/ветеринарные документы
  certificates: boolean; // ХАССП / сертификаты качества
  minimumOrder: FieldConfidence;
  price: FieldConfidence;
  // сырой фрагмент текста со страницы — основа извлечения (anti-hallucination)
  rawSnippet: string;
};

// --- Модель оценки поставщика (Supplier Score) -------------------------------
// Score помогает решить, кому звонить в первую очередь.

export type ScoreCriterion = {
  key: keyof Supplier | "completeness";
  label: string;
  weight: number;
  // как извлечь булев «есть/нет» сигнал из поставщика
  has: (s: Supplier) => boolean;
};

export const scoreModel: ScoreCriterion[] = [
  {
    key: "phone",
    label: "Есть телефон / email",
    weight: 20,
    has: (s) => Boolean(s.phone.value || s.email.value),
  },
  {
    key: "region",
    label: "Подходит регион",
    weight: 20,
    has: (s) => Boolean(s.delivery.value),
  },
  {
    key: "source",
    label: "Есть сайт-источник",
    weight: 15,
    has: (s) => Boolean(s.source),
  },
  {
    key: "documents",
    label: "Документы / сертификаты",
    weight: 15,
    has: (s) => s.documents || s.certificates,
  },
  {
    key: "delivery",
    label: "Условия доставки",
    weight: 10,
    has: (s) => Boolean(s.delivery.value),
  },
  {
    key: "price",
    label: "Указана цена",
    weight: 10,
    has: (s) => Boolean(s.price.value),
  },
  {
    key: "minimumOrder",
    label: "Минимальный заказ",
    weight: 10,
    has: (s) => Boolean(s.minimumOrder.value),
  },
];

export function scoreSupplier(s: Supplier): number {
  return scoreModel.reduce((acc, c) => acc + (c.has(s) ? c.weight : 0), 0);
}

// Разбивка score по критериям — для объяснимости в UI.
export function scoreBreakdown(s: Supplier) {
  return scoreModel.map((c) => ({
    label: c.label,
    weight: c.weight,
    earned: c.has(s) ? c.weight : 0,
    has: c.has(s),
  }));
}

// --- Демо-датасет (cached) ---------------------------------------------------

export const demoQuery = {
  category: "говядина оптом",
  city: "Екатеринбург",
  region: "Свердловская область",
};

// Запросы, которые «сгенерировала» бы LLM из категории и региона.
export const generatedQueries: string[] = [
  "говядина оптом Екатеринбург поставщики",
  "говядина для ресторанов Екатеринбург HoReCa",
  "поставщик говядины Свердловская область опт",
  "охлаждённая говядина оптом купить Екатеринбург",
  "мясокомбинат говядина оптовые поставки Урал",
];

export const suppliers: Supplier[] = [
  {
    id: "myasnoy-dom",
    name: "Мясной Дом",
    city: "Екатеринбург",
    region: "Свердловская область",
    source: "myasnoy-dom.example",
    phone: { value: "+7 (343) 200-15-40", confidence: 0.98 },
    email: { value: "opt@myasnoy-dom.example", confidence: 0.91 },
    segments: ["рестораны", "кафе", "торговые сети"],
    delivery: { value: "Екатеринбург и область", confidence: 0.82 },
    documents: true,
    certificates: true,
    minimumOrder: { value: null, confidence: null },
    price: { value: null, confidence: null },
    rawSnippet:
      "Компания поставляет охлаждённую и замороженную говядину для ресторанов, кафе и торговых сетей. Гарантируем стабильные поставки по Екатеринбургу и Свердловской области, полный пакет документов и ветеринарные сертификаты.",
  },
  {
    id: "ural-meat",
    name: "Урал-Мит",
    city: "Екатеринбург",
    region: "Свердловская область",
    source: "uralmeat.example",
    phone: { value: "+7 (343) 311-09-22", confidence: 0.95 },
    email: { value: null, confidence: null },
    segments: ["опт", "переработка"],
    delivery: { value: "по УрФО, от 300 кг", confidence: 0.79 },
    documents: true,
    certificates: false,
    minimumOrder: { value: "от 300 кг", confidence: 0.74 },
    price: { value: "от 410 ₽/кг", confidence: 0.68 },
    rawSnippet:
      "Оптовые поставки говядины по УрФО. Минимальная партия — от 300 кг, цена от 410 руб/кг. Все декларации соответствия в наличии. Работаем с переработчиками и оптовыми покупателями.",
  },
  {
    id: "sibagro-trade",
    name: "СибАгро-Трейд",
    city: "Тюмень",
    region: "Тюменская область",
    source: "sibagro-trade.example",
    phone: { value: "+7 (3452) 55-71-30", confidence: 0.9 },
    email: { value: "sales@sibagro-trade.example", confidence: 0.88 },
    segments: ["торговые сети", "опт"],
    delivery: { value: "межрегиональная, от 1 т", confidence: 0.7 },
    documents: true,
    certificates: true,
    minimumOrder: { value: "от 1 т", confidence: 0.66 },
    price: { value: null, confidence: null },
    rawSnippet:
      "Поставщик мяса для федеральных и региональных торговых сетей. Межрегиональная логистика, отгрузка от 1 тонны. Сертификация по ХАССП, полный комплект сопроводительных документов.",
  },
  {
    id: "ferma-prikamya",
    name: "Ферма Прикамья",
    city: "Пермь",
    region: "Пермский край",
    source: "ferma-prikamya.example",
    phone: { value: null, confidence: null },
    email: { value: "info@ferma-prikamya.example", confidence: 0.84 },
    segments: ["кафе", "частные клиенты"],
    delivery: { value: null, confidence: null },
    documents: false,
    certificates: false,
    minimumOrder: { value: null, confidence: null },
    price: { value: "от 520 ₽/кг", confidence: 0.61 },
    rawSnippet:
      "Фермерская говядина из Прикамья. Продаём кафе и частным клиентам. Цена от 520 руб/кг. По вопросам поставок пишите на почту.",
  },
];

// Поставщики с уже посчитанным score, отсортированные по приоритету.
export const rankedSuppliers = suppliers
  .map((s) => ({ supplier: s, score: scoreSupplier(s) }))
  .sort((a, b) => b.score - a.score);

// Пример «Raw → Structured» для отдельного блока (берём первого поставщика).
export const rawToStructured = {
  raw: suppliers[0].rawSnippet,
  structured: {
    company_name: "Мясной Дом",
    category: "говядина",
    city: "Екатеринбург",
    customer_segment: ["рестораны", "кафе", "торговые сети"],
    delivery: "Екатеринбург и Свердловская область",
    documents: true,
    certificates: true,
    minimum_order: null,
    price: null,
    source: "myasnoy-dom.example",
  },
};

// --- Шаги pipeline (для интерактивной схемы) ---------------------------------

export type PipelineStep = {
  id: string;
  title: string;
  short: string;
  detail: string;
};

export const pipelineSteps: PipelineStep[] = [
  {
    id: "llm-queries",
    title: "LLM-генератор запросов",
    short: "категория + регион → B2B-запросы",
    detail:
      "LLM превращает «категория + регион» в набор коммерческих B2B-запросов с разными намерениями: опт, HoReCa, переработка, конкретные форматы поставки.",
  },
  {
    id: "search-api",
    title: "Search API",
    short: "получение кандидатов",
    detail:
      "Поисковый API (например, Yandex Search API) возвращает управляемый список страниц-кандидатов. Поиск отделён от модели — это дешевле и предсказуемее.",
  },
  {
    id: "crawler",
    title: "Playwright crawler",
    short: "рендеринг и текст со страниц",
    detail:
      "Playwright открывает страницы поставщиков, дожидается рендера и забирает текст для очистки. Парсинг вне LLM — стабильнее и дешевле, чем отдавать весь сайт в модель.",
  },
  {
    id: "llm-extract",
    title: "LLM-extractor",
    short: "контакты, доставка, документы",
    detail:
      "LLM по JSON Schema извлекает контакты, регион доставки, минимальный заказ, документы и сертификаты — только из текста источника, без додумывания.",
  },
  {
    id: "scoring",
    title: "Scoring",
    short: "кому звонить первым",
    detail:
      "Прозрачная весовая модель считает Supplier Score из наличия контактов, региона, документов, доставки и цены — чтобы понять приоритет обзвона.",
  },
  {
    id: "table",
    title: "Таблица решений",
    short: "структурированный результат",
    detail:
      "Результат — отсортированная таблица поставщиков со ссылкой на источник и JSON-выгрузкой для интеграции в CRM или дальнейшую обработку.",
  },
];

// «Технический pipeline reasoning» — статистика прогона (не reasoning LLM).
export const pipelineRun: string[] = [
  "Сгенерировано 5 поисковых запросов",
  "Получено 27 результатов поиска",
  "Отфильтровано 11 нерелевантных страниц",
  "Распарсено 8 сайтов поставщиков",
  "Извлечено 4 поставщика",
  "У 3 поставщиков найдены прямые контакты",
  "У 3 поставщиков подтверждены документы/сертификаты",
];

// --- Anti-hallucination layer ------------------------------------------------

export const antiHallucination: string[] = [
  "Извлекаю данные только из текста источника",
  "Сохраняю ссылку и raw-snapshot страницы для проверки",
  "Структура ответа задана JSON Schema / Pydantic",
  "Отсутствующие поля помечаю как null, а не выдумываю",
  "Каждому полю присваиваю confidence score",
  "Не подставляю выдуманные цены и контакты",
];

// --- Engineering decisions ---------------------------------------------------

export const engineeringDecisions: { decision: string; why: string }[] = [
  {
    decision: "Yandex Search API",
    why: "Управляемый поиск по вебу с предсказуемым форматом результата.",
  },
  {
    decision: "LLM для генерации запросов",
    why: "Покрывает разные коммерческие B2B-намерения, а не один шаблон.",
  },
  {
    decision: "Парсер отдельно от LLM",
    why: "Дешевле и стабильнее, чем отдавать весь HTML-сайт в модель.",
  },
  {
    decision: "JSON Schema / Pydantic",
    why: "Жёсткий контроль структуры ответа и валидация полей.",
  },
  {
    decision: "Cached demo",
    why: "Демо не ломается из-за лимитов API и недоступности сайтов.",
  },
];

// --- Матрица соответствия роли ----------------------------------------------

export const roleFit: { need: string; have: string }[] = [
  {
    need: "AI automation / data workflows",
    have: "Проектировал Python-сервисы для получения, обработки и нормализации данных из внешних систем.",
  },
  {
    need: "API-интеграции",
    have: "Клиенты и адаптеры под разные API, включая биржевые: авторизация, подпись запросов (HMAC), обработка ошибок и лимитов.",
  },
  {
    need: "Data extraction / normalization",
    have: "DTO и Pydantic-схемы, мапперы, SQLAlchemy 2.0, Alembic — приведение разнородных данных к единому формату.",
  },
  {
    need: "Backend reliability",
    have: "PostgreSQL, Redis, Kafka, Docker, Kubernetes, логирование и метрики — production-инфраструктура.",
  },
  {
    need: "Business-oriented thinking",
    have: "Погружался в бизнес-процессы, проектировал внутренние сервисы под реальные процессы компании.",
  },
];

// --- Описание кейса Supplier Intelligence -----------------------------------

export const caseStudy = {
  title:
    "Supplier Intelligence — поиск и сравнение поставщиков продуктов питания",
  problem:
    "Поиск поставщиков вручную — это десятки вкладок, разрозненные сайты и неструктурированный текст. Менеджер тратит часы, чтобы собрать контакты, условия и документы, и всё равно не имеет единой картины: кому звонить в первую очередь.",
  scenario:
    "Пользователь указывает категорию товара и регион. Сервис генерирует коммерческие поисковые запросы, получает кандидатов из поиска, парсит сайты, извлекает через LLM ключевые признаки и формирует таблицу поставщиков с оценкой приоритета.",
  limitations: [
    "Поисковые API имеют лимиты и стоимость запроса — для демо используется сохранённый результат.",
    "Сайты поставщиков нестабильны: разная вёрстка, отсутствие части данных, защита от парсинга.",
    "LLM может ошибаться — поэтому извлечение привязано к тексту источника и снабжено confidence.",
    "Часть полей (цена, минимальный заказ) часто отсутствует на сайте и требует ручной проверки.",
  ],
  roadmap: [
    "Очередь и кэширование прогонов поиска, инкрементальное обновление поставщиков.",
    "Дедупликация компаний по ИНН/домену и слияние данных из нескольких источников.",
    "Обогащение из реестров (ЕГРЮЛ, проверка контрагентов) и истории поставок.",
    "Экспорт в CRM, вебхуки и регулярный мониторинг новых поставщиков по категории.",
  ],
};
