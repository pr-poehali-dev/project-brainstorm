export interface TechTalk {
  id: string;
  title: string;
  speaker: string;
  speakerTitle: string;
  date: string;
  duration: string;
  description: string;
  tags: string[];
  imageUrl: string;
  featured?: boolean;
  views?: string;
  category?: string;
  editorNote?: string;
}

export const PAINTINGS: TechTalk[] = [
  {
    id: "p-1",
    title: "Не замай — дай подойти!",
    speaker: "В. В. Верещагин",
    speakerTitle: "1887–1895",
    date: "1895-01-01",
    duration: "Холст, масло",
    description:
      "Один из ключевых образов серии об Отечественной войне. Верещагин показывает момент партизанской засады — крестьяне встречают французских солдат. Сцена полна напряжения и народного духа сопротивления.",
    tags: ["1812", "партизаны", "народная война"],
    imageUrl: "https://cdn.poehali.dev/projects/cf0a85e4-f435-46d0-ae04-fb568bb95847/files/c312a67d-de08-43bb-9a40-7f0ff0da72e2.jpg",
    category: "1812",
    featured: true,
  },
  {
    id: "p-2",
    title: "Наполеон на Бородинских высотах",
    speaker: "В. В. Верещагин",
    speakerTitle: "1897",
    date: "1897-01-01",
    duration: "Холст, масло",
    description:
      "Наполеон изображён в момент Бородинской битвы — в одиночестве на высоте, охваченной дымом. Верещагин развенчивает образ непобедимого полководца, показывая его растерянность и замешательство.",
    tags: ["1812", "Наполеон", "Бородино"],
    imageUrl: "https://cdn.poehali.dev/projects/cf0a85e4-f435-46d0-ae04-fb568bb95847/files/c312a67d-de08-43bb-9a40-7f0ff0da72e2.jpg",
    category: "1812",
  },
  {
    id: "p-3",
    title: "В покорённой Москве",
    speaker: "В. В. Верещагин",
    speakerTitle: "1891–1892",
    date: "1892-01-01",
    duration: "Холст, масло",
    description:
      "Французские офицеры в Успенском соборе Кремля. Верещагин передаёт горькую атмосферу оккупации — бесчинства завоевателей в святых для России местах.",
    tags: ["1812", "Москва", "оккупация"],
    imageUrl: "https://cdn.poehali.dev/projects/cf0a85e4-f435-46d0-ae04-fb568bb95847/files/c312a67d-de08-43bb-9a40-7f0ff0da72e2.jpg",
    category: "1812",
  },
  {
    id: "p-4",
    title: "Апофеоз войны",
    speaker: "В. В. Верещагин",
    speakerTitle: "1871",
    date: "1871-01-01",
    duration: "Холст, масло",
    description:
      "Пирамида черепов в выжженной пустыне — один из самых известных антивоенных образов в мировой живописи. Написано под впечатлением от Туркестанских походов. На раме надпись: «Посвящается всем великим завоевателям».",
    tags: ["туркестан", "антивоенное", "символизм"],
    imageUrl: "https://cdn.poehali.dev/projects/cf0a85e4-f435-46d0-ae04-fb568bb95847/files/8c2484a0-9a9f-4b5c-84eb-da3577b05fe4.jpg",
    category: "turkestan",
    featured: true,
    editorNote: "Знаковое произведение — манифест против любой войны.",
  },
  {
    id: "p-5",
    title: "Двери Тамерлана",
    speaker: "В. В. Верещагин",
    speakerTitle: "1872",
    date: "1872-01-01",
    duration: "Холст, масло",
    description:
      "Монументальные резные ворота дворца Тамерлана в Самарканде, охраняемые стражниками. Верещагин тщательно воспроизводит восточную архитектуру и детали быта, создавая образ величественного и таинственного Востока.",
    tags: ["туркестан", "Самарканд", "архитектура"],
    imageUrl: "https://cdn.poehali.dev/projects/cf0a85e4-f435-46d0-ae04-fb568bb95847/files/8c2484a0-9a9f-4b5c-84eb-da3577b05fe4.jpg",
    category: "turkestan",
  },
  {
    id: "p-6",
    title: "Смертельно раненый",
    speaker: "В. В. Верещагин",
    speakerTitle: "1873",
    date: "1873-01-01",
    duration: "Холст, масло",
    description:
      "Солдат, сражённый на поле боя в Средней Азии, из последних сил бежит прочь. Верещагин изображает войну без ложного героизма — только боль и смерть обычного человека.",
    tags: ["туркестан", "война", "реализм"],
    imageUrl: "https://cdn.poehali.dev/projects/cf0a85e4-f435-46d0-ae04-fb568bb95847/files/8c2484a0-9a9f-4b5c-84eb-da3577b05fe4.jpg",
    category: "turkestan",
  },
  {
    id: "p-7",
    title: "Перед атакой. Под Плевной",
    speaker: "В. В. Верещагин",
    speakerTitle: "1881",
    date: "1881-01-01",
    duration: "Холст, масло",
    description:
      "Русские солдаты залегли перед решающей атакой на турецкие укрепления у Плевны. Верещагин был очевидцем сражений, и это чувствуется в каждой детали — нервное ожидание боя передано с документальной точностью.",
    tags: ["1877", "Плевна", "Болгария"],
    imageUrl: "https://cdn.poehali.dev/projects/cf0a85e4-f435-46d0-ae04-fb568bb95847/files/82a85251-92a5-4748-a488-239dc511c79c.jpg",
    category: "russo-turkish",
    featured: true,
  },
  {
    id: "p-8",
    title: "Победители",
    speaker: "В. В. Верещагин",
    speakerTitle: "1878–1879",
    date: "1879-01-01",
    duration: "Холст, масло",
    description:
      "Турецкие солдаты осматривают тела убитых русских. Картина вызвала скандал: Верещагин показал победу врага, чтобы обнажить бессмысленность потерь. Александр II потребовал снять её с выставки.",
    tags: ["1877", "война", "провокация"],
    imageUrl: "https://cdn.poehali.dev/projects/cf0a85e4-f435-46d0-ae04-fb568bb95847/files/82a85251-92a5-4748-a488-239dc511c79c.jpg",
    category: "russo-turkish",
    editorNote: "Одна из самых скандальных картин художника — запрещалась к показу.",
  },
  {
    id: "p-9",
    title: "Шипка-Шейново (Скобелев под Шипкой)",
    speaker: "В. В. Верещагин",
    speakerTitle: "1883",
    date: "1883-01-01",
    duration: "Холст, масло",
    description:
      "Панорама битвы при Шейново — одного из ключевых сражений Русско-турецкой войны. Генерал Скобелев объезжает войска на белом коне на фоне кровавого поля боя.",
    tags: ["1877", "Шипка", "Скобелев"],
    imageUrl: "https://cdn.poehali.dev/projects/cf0a85e4-f435-46d0-ae04-fb568bb95847/files/82a85251-92a5-4748-a488-239dc511c79c.jpg",
    category: "russo-turkish",
  },
  {
    id: "p-10",
    title: "Взрыв испанского крейсера «Мэн»",
    speaker: "В. В. Верещагин",
    speakerTitle: "1898",
    date: "1898-01-01",
    duration: "Холст, масло",
    description:
      "Верещагин запечатлел гибель американского броненосца в гаванской бухте — событие, с которого началась Испано-американская война. Художник лично присутствовал на Кубе и наблюдал военные действия.",
    tags: ["1898", "Куба", "флот"],
    imageUrl: "https://cdn.poehali.dev/projects/cf0a85e4-f435-46d0-ae04-fb568bb95847/files/9482ca83-2f89-471f-accb-3645b767fd18.jpg",
    category: "spanish-american",
    featured: true,
  },
  {
    id: "p-11",
    title: "Солдаты в Гаване",
    speaker: "В. В. Верещагин",
    speakerTitle: "1899",
    date: "1899-01-01",
    duration: "Холст, масло",
    description:
      "Американские солдаты на улицах Гаваны после взятия города. Верещагин фиксирует облик новой колониальной войны — механизированной, жестокой, идущей за тысячи миль от метрополии.",
    tags: ["1898", "Гавана", "США"],
    imageUrl: "https://cdn.poehali.dev/projects/cf0a85e4-f435-46d0-ae04-fb568bb95847/files/9482ca83-2f89-471f-accb-3645b767fd18.jpg",
    category: "spanish-american",
  },
  {
    id: "p-12",
    title: "После атаки. Перевязочный пункт",
    speaker: "В. В. Верещагин",
    speakerTitle: "1901",
    date: "1901-01-01",
    duration: "Холст, масло",
    description:
      "Последняя крупная серия Верещагина, созданная под впечатлением от Испано-американской войны. Раненые солдаты и медицинский персонал — художник показывает изнанку войны, которую не принято показывать.",
    tags: ["1898", "медицина", "война"],
    imageUrl: "https://cdn.poehali.dev/projects/cf0a85e4-f435-46d0-ae04-fb568bb95847/files/9482ca83-2f89-471f-accb-3645b767fd18.jpg",
    category: "spanish-american",
  },
];

export const CATEGORIES = [
  { id: "all", label: "Все картины" },
  { id: "1812", label: "Отечественная война 1812" },
  { id: "turkestan", label: "Туркестанские походы" },
  { id: "russo-turkish", label: "Русско-турецкая война 1877–1878" },
  { id: "spanish-american", label: "Испано-американская война 1898" },
];

export function getAllTalks(): TechTalk[] {
  return PAINTINGS;
}

export function getFeaturedTalks(): TechTalk[] {
  return PAINTINGS.filter((p) => p.featured);
}

export function getRandomTalk(): TechTalk | null {
  const featured = getFeaturedTalks();
  if (featured.length === 0) return null;
  return featured[Math.floor(Math.random() * featured.length)];
}

export function searchTalks(query: string): TechTalk[] {
  if (!query) return PAINTINGS;
  const q = query.toLowerCase();
  return PAINTINGS.filter(
    (p) =>
      p.title.toLowerCase().includes(q) ||
      p.description.toLowerCase().includes(q) ||
      p.tags.some((t) => t.toLowerCase().includes(q)) ||
      (p.category && p.category.toLowerCase().includes(q))
  );
}

export function getPaintingsByCategory(category: string): TechTalk[] {
  if (category === "all") return PAINTINGS;
  return PAINTINGS.filter((p) => p.category === category);
}
