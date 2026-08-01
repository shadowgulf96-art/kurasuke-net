import type { Metadata } from "next";
import Link from "next/link";
import { Breadcrumb } from "@/components/articles/Breadcrumb";
import { CATEGORIES } from "@/lib/content/taxonomy";
import { getArticlesByCategory } from "@/lib/content/articles";

export const metadata: Metadata = {
  title: "カテゴリー一覧",
  description: "KURASUKE.NETの記事カテゴリー一覧です。時間割・勉強法・テスト・学校生活などから記事を探せます。",
  alternates: { canonical: "/category" },
};

export default function CategoryIndexPage() {
  return (
    <main className="mx-auto max-w-5xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ name: "トップ", url: "/" }, { name: "カテゴリー", url: "/category" }]} />

      <h1 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">カテゴリー一覧</h1>

      <div className="mt-6 grid grid-cols-1 gap-4 sm:grid-cols-2">
        {CATEGORIES.map((category) => {
          const count = getArticlesByCategory(category.slug).length;
          return (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="rounded-2xl border border-slate-100 bg-white p-5 transition-colors hover:border-primary-200 hover:bg-primary-50"
            >
              <div className="flex items-center justify-between">
                <h2 className="text-sm font-bold text-slate-900">{category.name}</h2>
                <span className="text-xs text-slate-400">{count}件</span>
              </div>
              <p className="mt-1.5 text-xs leading-relaxed text-slate-500">{category.description}</p>
            </Link>
          );
        })}
      </div>
    </main>
  );
}
