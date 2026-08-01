import type { Metadata } from "next";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Breadcrumb } from "@/components/articles/Breadcrumb";
import { getAllArticles } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "記事一覧",
  description: "KURASUKE.NETに掲載されている、中学生・高校生向けの学校生活記事の一覧です。",
  alternates: { canonical: "/articles" },
};

export default function ArticlesPage() {
  const articles = getAllArticles();

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ name: "トップ", url: "/" }, { name: "記事一覧", url: "/articles" }]} />

      <h1 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">記事一覧</h1>

      {articles.length === 0 ? (
        <p className="mt-6 text-sm text-slate-500">まだ記事がありません。近日公開予定です。</p>
      ) : (
        <div className="mt-6 grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
          {articles.map((article) => (
            <ArticleCard key={article.slug} article={article} />
          ))}
        </div>
      )}
    </main>
  );
}
