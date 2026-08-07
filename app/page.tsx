import { Hero } from "@/components/home/Hero";
import { LatestArticles } from "@/components/home/LatestArticles";
import { CategoryGrid } from "@/components/home/CategoryGrid";

export default function HomePage() {
  return (
    <main className="bg-white">
      <Hero />
      <LatestArticles />
      <CategoryGrid />
    </main>
  );
}
