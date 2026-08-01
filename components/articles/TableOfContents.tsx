import type { Heading } from "@/lib/content/markdown";

export function TableOfContents({ headings }: { headings: Heading[] }) {
  if (headings.length === 0) return null;

  return (
    <nav aria-label="目次" className="rounded-2xl border border-slate-100 bg-slate-50 p-4">
      <p className="text-xs font-semibold text-slate-500">目次</p>
      <ol className="mt-2 space-y-1.5">
        {headings.map((heading) => (
          <li key={heading.id} className={heading.level === 3 ? "pl-3" : ""}>
            <a href={`#${heading.id}`} className="text-sm text-primary-600 hover:text-primary-700">
              {heading.text}
            </a>
          </li>
        ))}
      </ol>
    </nav>
  );
}
