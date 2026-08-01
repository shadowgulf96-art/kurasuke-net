/**
 * Minimal, dependency-free Markdown parser.
 *
 * Supports exactly what our own articles need: ##/### headings (with
 * stable ids for the table of contents), paragraphs, bullet/numbered
 * lists, and inline **bold** / [links](url). No external MDX/remark
 * dependency -- see frontmatter.ts for why.
 */

export type MarkdownBlock =
  | { type: "heading"; level: 2 | 3; id: string; text: string }
  | { type: "paragraph"; text: string }
  | { type: "list"; ordered: boolean; items: string[] };

export interface Heading {
  id: string;
  level: 2 | 3;
  text: string;
}

export function parseMarkdown(markdown: string): MarkdownBlock[] {
  const lines = markdown.replace(/\r\n/g, "\n").split("\n");
  const blocks: MarkdownBlock[] = [];
  let headingCount = 0;

  let i = 0;
  while (i < lines.length) {
    const line = lines[i];

    if (!line.trim()) {
      i++;
      continue;
    }

    if (line.startsWith("### ")) {
      headingCount++;
      blocks.push({ type: "heading", level: 3, id: `heading-${headingCount}`, text: line.slice(4).trim() });
      i++;
      continue;
    }

    if (line.startsWith("## ")) {
      headingCount++;
      blocks.push({ type: "heading", level: 2, id: `heading-${headingCount}`, text: line.slice(3).trim() });
      i++;
      continue;
    }

    if (/^[-*]\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^[-*]\s/.test(lines[i])) {
        items.push(lines[i].replace(/^[-*]\s/, "").trim());
        i++;
      }
      blocks.push({ type: "list", ordered: false, items });
      continue;
    }

    if (/^\d+\.\s/.test(line)) {
      const items: string[] = [];
      while (i < lines.length && /^\d+\.\s/.test(lines[i])) {
        items.push(lines[i].replace(/^\d+\.\s/, "").trim());
        i++;
      }
      blocks.push({ type: "list", ordered: true, items });
      continue;
    }

    // Paragraph: collect consecutive non-blank, non-special lines.
    const paragraphLines: string[] = [];
    while (
      i < lines.length &&
      lines[i].trim() &&
      !lines[i].startsWith("## ") &&
      !lines[i].startsWith("### ") &&
      !/^[-*]\s/.test(lines[i]) &&
      !/^\d+\.\s/.test(lines[i])
    ) {
      paragraphLines.push(lines[i].trim());
      i++;
    }
    blocks.push({ type: "paragraph", text: paragraphLines.join(" ") });
  }

  return blocks;
}

export function extractHeadings(blocks: MarkdownBlock[]): Heading[] {
  return blocks
    .filter((b): b is Extract<MarkdownBlock, { type: "heading" }> => b.type === "heading")
    .map(({ id, level, text }) => ({ id, level, text }));
}

/** Splits inline `**bold**` and `[text](url)` markers out of a plain-text run. */
export type InlineToken =
  | { type: "text"; value: string }
  | { type: "bold"; value: string }
  | { type: "link"; text: string; href: string };

export function parseInline(text: string): InlineToken[] {
  const tokens: InlineToken[] = [];
  const pattern = /\*\*(.+?)\*\*|\[(.+?)\]\((.+?)\)/g;
  let lastIndex = 0;
  let match: RegExpExecArray | null;

  while ((match = pattern.exec(text)) !== null) {
    if (match.index > lastIndex) {
      tokens.push({ type: "text", value: text.slice(lastIndex, match.index) });
    }
    if (match[1] !== undefined) {
      tokens.push({ type: "bold", value: match[1] });
    } else {
      tokens.push({ type: "link", text: match[2], href: match[3] });
    }
    lastIndex = pattern.lastIndex;
  }
  if (lastIndex < text.length) {
    tokens.push({ type: "text", value: text.slice(lastIndex) });
  }
  return tokens;
}
