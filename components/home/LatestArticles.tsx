import Link from "next/link";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { getLatestArticles } from "@/lib/content/articles";

export function LatestArticles() {
  const articles = getLatestArticles(6);

  if (articles.length === 0) return null;

  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="mx-auto flex max-w-5xl items-end justify-between">
        <h2 className="text-lg font-bold text-slate-900 sm:text-2xl">新着記事</h2>
        <Link href="/articles" className="text-sm font-medium text-primary-600 hover:text-primary-700">
          記事一覧へ →
        </Link>
      </div>
      <div className="mx-auto mt-5 grid max-w-5xl grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
