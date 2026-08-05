import fs from "node:fs";
import path from "node:path";
import { parseFrontmatter } from "./frontmatter";
import { CATEGORIES, TAGS } from "./taxonomy";
import type { Article } from "./types";

const ARTICLES_DIR = path.join(process.cwd(), "content", "articles");
const CATEGORY_SLUGS = new Set(CATEGORIES.map((c) => c.slug));
const TAG_SLUGS = new Set(TAGS.map((t) => t.slug));

const REQUIRED_FIELDS = [
  "title",
  "description",
  "category",
  "publishedAt",
  "thumbnail",
  "thumbnailAlt",
] as const;

function toArray(value: string | string[] | undefined): string[] {
  if (!value) return [];
  return Array.isArray(value) ? value : [value];
}

function loadArticle(filename: string): Article {
  const slug = filename.replace(/\.md$/, "");
  const raw = fs.readFileSync(path.join(ARTICLES_DIR, filename), "utf-8");
  const { data, content } = parseFrontmatter(raw);

  for (const field of REQUIRED_FIELDS) {
    if (!data[field]) {
      throw new Error(`content/articles/${filename}: missing required frontmatter field "${field}"`);
    }
  }

  const category = data.category as string;
  if (!CATEGORY_SLUGS.has(category)) {
    throw new Error(
      `content/articles/${filename}: unknown category "${category}" -- add it to lib/content/taxonomy.ts first`
    );
  }

  const tags = toArray(data.tags);
  for (const tag of tags) {
    if (!TAG_SLUGS.has(tag)) {
      throw new Error(
        `content/articles/${filename}: unknown tag "${tag}" -- add it to lib/content/taxonomy.ts first`
      );
    }
  }

  const publishedAt = data.publishedAt as string;
  const updatedAt = (data.updatedAt as string) || publishedAt;

  return {
    slug,
    title: data.title as string,
    description: data.description as string,
    category,
    tags,
    publishedAt,
    updatedAt,
    thumbnail: data.thumbnail as string,
    thumbnailAlt: data.thumbnailAlt as string,
    coverImage: (data.coverImage as string) || undefined,
    coverImageAlt: (data.coverImageAlt as string) || undefined,
    metaTitle: (data.metaTitle as string) || undefined,
    author: (data.author as string) || "KURASUKE.NET編集部",
    body: content,
  };
}

let cache: Article[] | null = null;

/** All articles, newest publishedAt first. */
export function getAllArticles(): Article[] {
  if (cache) return cache;

  const filenames = fs.readdirSync(ARTICLES_DIR).filter((f) => f.endsWith(".md"));
  const articles = filenames.map(loadArticle);
  articles.sort((a, b) => (a.publishedAt < b.publishedAt ? 1 : -1));

  cache = articles;
  return articles;
}

export function getArticleBySlug(slug: string): Article | undefined {
  return getAllArticles().find((a) => a.slug === slug);
}

export function getArticlesByCategory(categorySlug: string): Article[] {
  return getAllArticles().filter((a) => a.category === categorySlug);
}

/** Same-category articles, newest first, excluding the article itself. */
export function getRelatedArticles(article: Article, limit = 3): Article[] {
  return getAllArticles()
    .filter((a) => a.slug !== article.slug && a.category === article.category)
    .slice(0, limit);
}

export function getLatestArticles(limit = 6): Article[] {
  return getAllArticles().slice(0, limit);
}
