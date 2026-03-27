import { Calendar, Image, ExternalLink } from "lucide-react";
import { Card, CardContent } from "@/components/ui/card";
import type { TechTalk } from "@/lib/talks-data";

interface TalkCardProps {
  talk: TechTalk;
  featured?: boolean;
}

export function TalkCard({ talk, featured = false }: TalkCardProps) {
  return (
    <Card className="border-2 border-foreground bg-background flex flex-col h-full overflow-hidden rounded-none">
      <div className="relative w-full aspect-video overflow-hidden">
        <img
          src={talk.imageUrl}
          alt={talk.title}
          className="absolute inset-0 w-full h-full object-cover"
        />
        {featured && (
          <div className="absolute top-2 left-2 bg-accent text-accent-foreground px-3 py-1 font-mono text-xs font-bold uppercase">
            ИЗБРАННОЕ
          </div>
        )}
        <div className="absolute bottom-2 right-2 bg-foreground text-background px-2 py-1 font-mono text-xs font-bold">
          {talk.speakerTitle}
        </div>
      </div>

      <CardContent className="p-4 border-t-2 border-foreground flex flex-col flex-1">
        <h3 className="font-bold text-lg mb-3 text-foreground uppercase tracking-wide leading-tight">
          {talk.title}
        </h3>

        <div className="flex items-center gap-2 text-foreground text-sm mb-3 font-mono">
          <Image className="w-4 h-4" />
          <span className="font-bold uppercase">{talk.duration}</span>
        </div>

        <div className="flex items-center gap-4 text-foreground text-xs mb-4 font-mono">
          <div className="flex items-center gap-1">
            <Calendar className="w-4 h-4" />
            <span>{new Date(talk.date).getFullYear()}</span>
          </div>
          <span className="text-muted-foreground uppercase">{talk.speaker}</span>
        </div>

        {talk.editorNote && (
          <div className="border-2 border-accent bg-background p-3 mb-4">
            <div className="font-mono text-xs font-bold uppercase text-accent mb-1">
              ПРИМЕЧАНИЕ:
            </div>
            <p className="font-mono text-sm text-foreground">{talk.editorNote}</p>
          </div>
        )}

        <p className="text-foreground text-sm mb-4 font-mono leading-relaxed">
          {talk.description}
        </p>

        <div className="flex flex-wrap gap-2 mt-auto pt-3 border-t border-foreground">
          {talk.tags.map((tag) => (
            <span
              key={tag}
              className="bg-foreground text-background px-2 py-0.5 font-mono text-xs uppercase"
            >
              {tag}
            </span>
          ))}
        </div>
      </CardContent>
    </Card>
  );
}
