import type { Metadata } from "next";
import { notFound } from "next/navigation";
import { ArticleCard } from "@/components/articles/ArticleCard";
import { Breadcrumb } from "@/components/articles/Breadcrumb";
import { getArticlesByCategory } from "@/lib/content/articles";
import { CATEGORIES, getCategory } from "@/lib/content/taxonomy";

export function generateStaticParams() {
  return CATEGORIES.map((category) => ({ slug: category.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const category = getCategory(params.slug);
  if (!category) return {};

  return {
    title: `${category.name}の記事一覧`,
    description: category.description,
    alternates: { canonical: `/category/${category.slug}` },
  };
}

export default function CategoryPage({ params }: { params: { slug: string } }) {
  const category = getCategory(params.slug);
  if (!category) notFound();

  const articles = getArticlesByCategory(category.slug);

  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { name: "トップ", url: "/" },
          { name: "カテゴリー", url: "/category" },
          { name: category.name, url: `/category/${category.slug}` },
        ]}
      />

      <h1 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">{category.name}の記事一覧</h1>
      <p className="mt-1.5 text-sm text-slate-500">{category.description}</p>

      {articles.length === 0 ? (
        <p className="mt-6 text-sm text-slate-500">このカテゴリーの記事は近日公開予定です。</p>
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
