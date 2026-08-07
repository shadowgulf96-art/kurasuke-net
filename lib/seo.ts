import type { Article } from "./content/types";

export const SITE_URL = "https://kurasuke.net";

export interface BreadcrumbItem {
  name: string;
  url: string;
}

/** JSON-LD for an article detail page. */
export function articleJsonLd(article: Article) {
  return {
    "@context": "https://schema.org",
    "@type": "Article",
    headline: article.title,
    description: article.description,
    image: `${SITE_URL}${article.coverImage || article.thumbnail}`,
    datePublished: article.publishedAt,
    dateModified: article.updatedAt,
    author: {
      "@type": "Organization",
      name: article.author,
    },
    publisher: {
      "@type": "Organization",
      name: "KURASUKE.NET",
      logo: {
        "@type": "ImageObject",
        url: `${SITE_URL}/images/kurasuke-logo-wide.png`,
      },
    },
    mainEntityOfPage: {
      "@type": "WebPage",
      "@id": `${SITE_URL}/articles/${article.slug}`,
    },
  };
}

/** JSON-LD for a breadcrumb trail. */
export function breadcrumbJsonLd(items: BreadcrumbItem[]) {
  return {
    "@context": "https://schema.org",
    "@type": "BreadcrumbList",
    itemListElement: items.map((item, index) => ({
      "@type": "ListItem",
      position: index + 1,
      name: item.name,
      item: `${SITE_URL}${item.url}`,
    })),
  };
}
