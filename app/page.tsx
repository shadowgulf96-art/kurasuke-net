import { Hero } from "@/components/home/Hero";
import { LatestArticles } from "@/components/home/LatestArticles";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { ClascheIntro } from "@/components/home/ClascheIntro";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <LatestArticles />
      <CategoryGrid />
      <ClascheIntro />
    </main>
  );
}
