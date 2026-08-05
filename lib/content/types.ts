export interface Category {
  slug: string;
  name: string;
  description: string;
}

export interface Tag {
  slug: string;
  name: string;
}

export interface Article {
  slug: string;
  title: string;
  description: string;
  category: string;
  tags: string[];
  publishedAt: string;
  updatedAt: string;
  thumbnail: string;
  thumbnailAlt: string;
  /**
   * Optional per-article eyecatch/cover image. When set, it's shown instead
   * of `thumbnail` on article cards and the article page's hero image.
   * Articles without one keep showing `thumbnail` (the current default
   * icon), so this is purely additive -- no article is required to have it.
   */
  coverImage?: string;
  coverImageAlt?: string;
  author: string;
  body: string;
}
