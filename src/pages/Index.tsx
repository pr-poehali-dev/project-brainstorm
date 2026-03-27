import { Header } from "@/components/Header";
import { HeroSection } from "@/components/HeroSection";
import { TalksGrid } from "@/components/TalksGrid";
import { getAllTalks, getRandomTalk } from "@/lib/talks-data";

const Index = () => {
  const allTalks = getAllTalks();
  const randomTalk = getRandomTalk();

  return (
    <div className="min-h-screen bg-background">
      <Header allTalks={allTalks} />
      <HeroSection randomTalk={randomTalk} />
      <TalksGrid talks={allTalks} />
    </div>
  );
};

export default Index;
