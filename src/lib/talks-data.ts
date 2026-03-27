export interface TechTalk {
  id: string;
  title: string;
  speaker: string;
  speakerTitle: string;
  date: string;
  duration: string;
  description: string;
  tags: string[];
  videoUrl: string;
  featured?: boolean;
  views?: string;
  channel?: string;
  editorNote?: string;
}

export const DEMO_TALKS: TechTalk[] = [
  {
    id: "demo-1",
    title: "Будущее веб-разработки: тренды 2026",
    speaker: "Андрей Ситников",
    speakerTitle: "Технический директор",
    date: "2025-11-15",
    duration: "42:30",
    description:
      "Обзор передовых технологий и фреймворков, которые определят развитие веб-разработки в ближайшие годы. От серверных компонентов до ИИ-ассистентов.",
    tags: ["веб", "будущее", "технологии"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    channel: "DevConf Russia",
    views: "1 234 567",
    editorNote: "Это демо-данные. Подключите YouTube API для отображения реальных видео!",
  },
  {
    id: "demo-2",
    title: "Масштабируемая архитектура: от стартапа до миллионов пользователей",
    speaker: "Елена Воронова",
    speakerTitle: "Архитектор систем",
    date: "2025-10-20",
    duration: "38:15",
    description: "Практические принципы и паттерны построения приложений, способных масштабироваться под нагрузку миллионов пользователей без переписывания кода.",
    tags: ["масштабирование", "архитектура"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    channel: "HighLoad++",
    views: "892 341",
  },
  {
    id: "demo-3",
    title: "TypeScript: продвинутые типы и паттерны",
    speaker: "Максим Петров",
    speakerTitle: "Frontend-разработчик",
    date: "2025-09-10",
    duration: "35:45",
    description: "Глубокое погружение в систему типов TypeScript: условные типы, инференс, mapped types и практические примеры их применения в реальных проектах.",
    tags: ["typescript", "паттерны"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    channel: "FrontendConf",
    views: "567 890",
  },
  {
    id: "demo-4",
    title: "ИИ в разработке: как нейросети меняют процесс создания кода",
    speaker: "Ольга Смирнова",
    speakerTitle: "ML-инженер",
    date: "2025-08-05",
    duration: "45:20",
    description: "Как искусственный интеллект трансформирует процессы написания, тестирования и развертывания программного обеспечения. Практика использования ИИ-инструментов.",
    tags: ["ИИ", "разработка"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    channel: "AI Conf",
    views: "1 456 789",
  },
  {
    id: "demo-5",
    title: "React Server Components: революция или эволюция?",
    speaker: "Дмитрий Козлов",
    speakerTitle: "Senior Frontend Developer",
    date: "2025-07-22",
    duration: "52:10",
    description: "Подробный разбор серверных компонентов React: как они работают, когда их использовать и какие преимущества дают для производительности приложений.",
    tags: ["react", "ssr"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    channel: "ReactConf",
    views: "723 456",
    editorNote: "Один из лучших докладов года по React",
  },
  {
    id: "demo-6",
    title: "Оптимизация PostgreSQL: от теории к практике",
    speaker: "Игорь Николаев",
    speakerTitle: "DBA Engineer",
    date: "2025-06-18",
    duration: "48:30",
    description: "Практические техники оптимизации PostgreSQL: индексы, explain analyze, партиционирование и настройка конфигурации для высоконагруженных систем.",
    tags: ["postgresql", "оптимизация", "базы данных"],
    videoUrl: "https://www.youtube.com/watch?v=dQw4w9WgXcQ",
    channel: "PGConf Russia",
    views: "445 123",
  },
];

export function getAllTalks(): TechTalk[] {
  return DEMO_TALKS;
}

export function getFeaturedTalks(): TechTalk[] {
  return DEMO_TALKS.slice(0, 3);
}

export function getRandomTalk(): TechTalk | null {
  if (DEMO_TALKS.length === 0) return null;
  const randomIndex = Math.floor(Math.random() * DEMO_TALKS.length);
  return DEMO_TALKS[randomIndex];
}

export function searchTalks(query: string): TechTalk[] {
  if (!query) return DEMO_TALKS;

  const lowercaseQuery = query.toLowerCase();
  return DEMO_TALKS.filter(
    (talk) =>
      talk.title.toLowerCase().includes(lowercaseQuery) ||
      talk.speaker.toLowerCase().includes(lowercaseQuery) ||
      talk.description.toLowerCase().includes(lowercaseQuery) ||
      talk.tags.some((tag) => tag.toLowerCase().includes(lowercaseQuery))
  );
}
