import { Fragment } from "react";
import type { MarkdownBlock } from "@/lib/content/markdown";
import { parseInline } from "@/lib/content/markdown";

function Inline({ text }: { text: string }) {
  const tokens = parseInline(text);
  return (
    <>
      {tokens.map((token, i) => {
        if (token.type === "bold") return <strong key={i}>{token.value}</strong>;
        if (token.type === "link")
          return (
            <a key={i} href={token.href} className="text-primary-600 underline hover:text-primary-700">
              {token.text}
            </a>
          );
        return <Fragment key={i}>{token.value}</Fragment>;
      })}
    </>
  );
}

export function ArticleBody({ blocks }: { blocks: MarkdownBlock[] }) {
  return (
    <div className="prose-content">
      {blocks.map((block, index) => {
        if (block.type === "heading") {
          const Tag = block.level === 2 ? "h2" : "h3";
          return (
            <Tag
              key={index}
              id={block.id}
              className={
                block.level === 2
                  ? "mt-8 scroll-mt-24 text-lg font-bold text-slate-900 sm:text-xl"
                  : "mt-6 scroll-mt-24 text-base font-bold text-slate-900"
              }
            >
              {block.text}
            </Tag>
          );
        }

        if (block.type === "list") {
          const ListTag = block.ordered ? "ol" : "ul";
          return (
            <ListTag
              key={index}
              className={`mt-3 space-y-1.5 pl-5 text-sm leading-relaxed text-slate-700 ${
                block.ordered ? "list-decimal" : "list-disc"
              }`}
            >
              {block.items.map((item, i) => (
                <li key={i}>
                  <Inline text={item} />
                </li>
              ))}
            </ListTag>
          );
        }

        return (
          <p key={index} className="mt-3 text-sm leading-relaxed text-slate-700 sm:text-base">
            <Inline text={block.text} />
          </p>
        );
      })}
    </div>
  );
}
