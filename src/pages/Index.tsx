import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TalksGrid } from "@/components/TalksGrid";
import { DemoBanner } from "@/components/DemoBanner";
import { getAllTalks, getRandomTalk } from "@/lib/talks-data";

const Index = () => {
  const allTalks = getAllTalks();
  const randomTalk = getRandomTalk();

  return (
    <div className="min-h-screen bg-background">
      <Header allTalks={allTalks} />
      <div className="max-w-6xl mx-auto px-4 pt-4">
        <DemoBanner />
      </div>
      <HeroSection randomTalk={randomTalk} />
      <TalksGrid talks={allTalks} title="Все доклады" />
    </div>
  );
};

export default Index;
