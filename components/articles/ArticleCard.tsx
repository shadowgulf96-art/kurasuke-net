import Image from "next/image";
import Link from "next/link";
import { getCategory } from "@/lib/content/taxonomy";
import type { Article } from "@/lib/content/types";

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${y}年${Number(m)}月${Number(d)}日`;
}

export function ArticleCard({ article }: { article: Article }) {
  const category = getCategory(article.category);

  return (
    <article className="flex flex-col overflow-hidden rounded-2xl border border-slate-100 bg-white">
      <Link href={`/articles/${article.slug}`} className="block">
        <div className="relative aspect-[1200/630] w-full bg-primary-50">
          <Image
            src={article.thumbnail}
            alt={article.thumbnailAlt}
            fill
            sizes="(min-width: 768px) 33vw, 100vw"
            className="object-cover"
          />
        </div>
      </Link>
      <div className="flex flex-1 flex-col p-4">
        {category && (
          <Link
            href={`/category/${category.slug}`}
            className="w-fit rounded-full bg-primary-50 px-2.5 py-1 text-xs font-medium text-primary-600"
          >
            {category.name}
          </Link>
        )}
        <h3 className="mt-2.5 text-sm font-semibold leading-snug text-slate-900">
          <Link href={`/articles/${article.slug}`}>{article.title}</Link>
        </h3>
        <p className="mt-1.5 line-clamp-2 text-xs leading-relaxed text-slate-500">
          {article.description}
        </p>
        <div className="mt-3 flex items-center justify-between">
          <time dateTime={article.publishedAt} className="text-xs text-slate-400">
            {formatDate(article.publishedAt)}
          </time>
          <Link
            href={`/articles/${article.slug}`}
            className="text-xs font-semibold text-primary-600 hover:text-primary-700"
          >
            読む →
          </Link>
        </div>
      </div>
    </article>
  );
}
