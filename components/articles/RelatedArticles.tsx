import { ArticleCard } from "@/components/articles/ArticleCard";
import type { Article } from "@/lib/content/types";

export function RelatedArticles({ articles }: { articles: Article[] }) {
  if (articles.length === 0) return null;

  return (
    <section className="mt-12">
      <h2 className="text-base font-bold text-slate-900">関連記事</h2>
      <div className="mt-4 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
        {articles.map((article) => (
          <ArticleCard key={article.slug} article={article} />
        ))}
      </div>
    </section>
  );
}
