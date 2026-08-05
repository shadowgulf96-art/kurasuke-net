import type { Metadata } from "next";
import Image from "next/image";
import { notFound } from "next/navigation";
import { ArticleBody } from "@/components/articles/ArticleBody";
import { Breadcrumb } from "@/components/articles/Breadcrumb";
import { RelatedArticles } from "@/components/articles/RelatedArticles";
import { TableOfContents } from "@/components/articles/TableOfContents";
import { getAllArticles, getArticleBySlug, getRelatedArticles } from "@/lib/content/articles";
import { extractHeadings, parseMarkdown } from "@/lib/content/markdown";
import { getCategory } from "@/lib/content/taxonomy";
import { articleJsonLd, SITE_URL } from "@/lib/seo";

export function generateStaticParams() {
  return getAllArticles().map((article) => ({ slug: article.slug }));
}

export function generateMetadata({ params }: { params: { slug: string } }): Metadata {
  const article = getArticleBySlug(params.slug);
  if (!article) return {};

  const image = article.coverImage || article.thumbnail;
  const metaTitle = article.metaTitle || article.title;

  return {
    title: metaTitle,
    description: article.description,
    alternates: { canonical: `/articles/${article.slug}` },
    openGraph: {
      title: metaTitle,
      description: article.description,
      type: "article",
      publishedTime: article.publishedAt,
      modifiedTime: article.updatedAt,
      images: [{ url: `${SITE_URL}${image}` }],
    },
    twitter: {
      card: "summary_large_image",
      title: metaTitle,
      description: article.description,
      images: [`${SITE_URL}${image}`],
    },
  };
}

function formatDate(iso: string): string {
  const [y, m, d] = iso.split("-");
  return `${y}年${Number(m)}月${Number(d)}日`;
}

export default function ArticlePage({ params }: { params: { slug: string } }) {
  const article = getArticleBySlug(params.slug);
  if (!article) notFound();

  const category = getCategory(article.category);
  const blocks = parseMarkdown(article.body);
  const headings = extractHeadings(blocks);
  const related = getRelatedArticles(article);
  const heroImage = article.coverImage || article.thumbnail;
  const heroImageAlt = article.coverImage ? article.coverImageAlt || article.title : article.thumbnailAlt;

  return (
    <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Breadcrumb
        items={[
          { name: "トップ", url: "/" },
          ...(category ? [{ name: category.name, url: `/category/${category.slug}` }] : []),
          { name: article.title, url: `/articles/${article.slug}` },
        ]}
      />

      <h1 className="mt-4 text-xl font-bold leading-snug text-slate-900 sm:text-2xl">
        {article.title}
      </h1>

      <div className="mt-3 flex items-center gap-3 text-xs text-slate-400">
        <span>{article.author}</span>
        <span aria-hidden="true">・</span>
        <time dateTime={article.publishedAt}>公開日: {formatDate(article.publishedAt)}</time>
        {article.updatedAt !== article.publishedAt && (
          <>
            <span aria-hidden="true">・</span>
            <time dateTime={article.updatedAt}>更新日: {formatDate(article.updatedAt)}</time>
          </>
        )}
      </div>

      <div className="relative mt-5 aspect-[1200/630] w-full overflow-hidden rounded-2xl bg-primary-50">
        <Image
          src={heroImage}
          alt={heroImageAlt}
          fill
          sizes="(min-width: 768px) 640px, 100vw"
          className="object-cover"
          priority
        />
      </div>

      <div className="mt-6">
        <TableOfContents headings={headings} />
      </div>

      <ArticleBody blocks={blocks} />

      <RelatedArticles articles={related} />

      <script
        type="application/ld+json"
        dangerouslySetInnerHTML={{ __html: JSON.stringify(articleJsonLd(article)) }}
      />
    </main>
  );
}
