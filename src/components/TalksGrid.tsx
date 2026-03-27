import { useState } from "react";
import { TalkCard } from "./TalkCard";
import type { TechTalk } from "@/lib/talks-data";
import { CATEGORIES, getPaintingsByCategory } from "@/lib/talks-data";

interface TalksGridProps {
  talks: TechTalk[];
}

export function TalksGrid({ talks }: TalksGridProps) {
  const [activeCategory, setActiveCategory] = useState("all");

  const displayedTalks =
    activeCategory === "all"
      ? talks
      : talks.filter((t) => t.category === activeCategory);

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <h3 className="text-2xl md:text-3xl font-bold text-foreground mb-8 text-center uppercase font-mono tracking-wider">
          ВСЕ КАРТИНЫ
        </h3>

        <div className="flex flex-wrap justify-center gap-2 mb-10">
          {CATEGORIES.map((cat) => (
            <button
              key={cat.id}
              onClick={() => setActiveCategory(cat.id)}
              className={`px-4 py-2 font-mono text-xs font-bold uppercase border-2 border-foreground transition-colors ${
                activeCategory === cat.id
                  ? "bg-foreground text-background"
                  : "bg-background text-foreground hover:bg-foreground hover:text-background"
              }`}
            >
              {cat.label}
            </button>
          ))}
        </div>

        <div className="text-center mb-10">
          <div className="inline-block bg-foreground text-background px-4 py-2 font-mono font-bold text-sm">
            {displayedTalks.length}{" "}
            {displayedTalks.length === 1
              ? "КАРТИНА"
              : displayedTalks.length < 5
              ? "КАРТИНЫ"
              : "КАРТИН"}
          </div>
        </div>

        {displayedTalks.length === 0 ? (
          <div className="text-center">
            <p className="text-foreground font-mono uppercase tracking-wide text-lg">
              В ЭТОМ РАЗДЕЛЕ КАРТИНЫ НЕ НАЙДЕНЫ.
            </p>
          </div>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {displayedTalks.map((talk) => (
              <TalkCard key={talk.id} talk={talk} />
            ))}
          </div>
        )}
      </div>
    </section>
  );
}
