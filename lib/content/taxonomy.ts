import type { Category, Tag } from "./types";

/**
 * Single source of truth for categories and tags. Articles' frontmatter
 * is validated against these lists (see articles.ts) -- an unknown
 * category/tag fails the build instead of silently creating an orphan
 * page, which matters once this grows past a handful of articles.
 */
export const CATEGORIES: Category[] = [
  { slug: "timetable", name: "時間割", description: "時間割の管理・組み方に関する記事" },
  { slug: "study-methods", name: "勉強法", description: "効率的な勉強のやり方に関する記事" },
  { slug: "exams", name: "テスト", description: "定期テスト・実力テスト対策に関する記事" },
  { slug: "school-life", name: "学校生活", description: "日々の学校生活に関する記事" },
  { slug: "school-supplies", name: "持ち物", description: "持ち物・忘れ物防止に関する記事" },
  { slug: "new-semester", name: "新学期", description: "新学年・新生活の準備に関する記事" },
  { slug: "school-events", name: "学校行事", description: "体育祭・文化祭・修学旅行などに関する記事" },
  { slug: "life-hacks", name: "ライフハック", description: "学校生活を便利にする小技に関する記事" },
  { slug: "student-apps", name: "学生向けアプリ", description: "勉強・生活に役立つアプリに関する記事" },
  { slug: "stationery", name: "文房具", description: "文房具の紹介・選び方に関する記事" },
];

export const TAGS: Tag[] = [
  { slug: "junior-high", name: "中学生" },
  { slug: "high-school", name: "高校生" },
  { slug: "new-student", name: "新入生" },
  { slug: "exam-student", name: "受験生" },
];

export function getCategory(slug: string): Category | undefined {
  return CATEGORIES.find((c) => c.slug === slug);
}

export function getTag(slug: string): Tag | undefined {
  return TAGS.find((t) => t.slug === slug);
}
