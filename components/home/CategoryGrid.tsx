import Link from "next/link";
import { CATEGORIES } from "@/lib/content/taxonomy";

export function CategoryGrid() {
  return (
    <section className="px-4 py-10 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <h2 className="text-lg font-bold text-slate-900 sm:text-2xl">カテゴリーから探す</h2>
        <div className="mt-5 grid grid-cols-2 gap-3 sm:grid-cols-3 md:grid-cols-5">
          {CATEGORIES.map((category) => (
            <Link
              key={category.slug}
              href={`/category/${category.slug}`}
              className="rounded-xl border border-slate-100 bg-white px-4 py-5 text-center transition-colors hover:border-primary-200 hover:bg-primary-50"
            >
              <span className="text-sm font-semibold text-slate-800">{category.name}</span>
            </Link>
          ))}
        </div>
      </div>
    </section>
  );
}
