/**
 * Minimal, dependency-free frontmatter parser.
 *
 * We intentionally avoid pulling in gray-matter/remark/MDX packages -- this
 * project stays on the same "zero unnecessary dependencies" philosophy as
 * the main Clasche app. Frontmatter here is a small, fully-controlled
 * subset of YAML (flat key: value pairs, plus one-level string arrays), so
 * a ~40-line hand-rolled parser covers everything content/articles/*.md
 * actually needs.
 */

export interface ParsedFile {
  data: Record<string, string | string[]>;
  content: string;
}

function parseValue(raw: string): string | string[] {
  const trimmed = raw.trim();

  if (trimmed.startsWith("[") && trimmed.endsWith("]")) {
    const inner = trimmed.slice(1, -1).trim();
    if (inner === "") return [];
    return inner.split(",").map((item) => stripQuotes(item.trim()));
  }

  return stripQuotes(trimmed);
}

function stripQuotes(value: string): string {
  if (
    (value.startsWith('"') && value.endsWith('"')) ||
    (value.startsWith("'") && value.endsWith("'"))
  ) {
    return value.slice(1, -1);
  }
  return value;
}

/**
 * Splits a `---\nkey: value\n---\nbody` file into its frontmatter object
 * and the remaining body text.
 */
export function parseFrontmatter(raw: string): ParsedFile {
  const normalized = raw.replace(/\r\n/g, "\n").trimStart();

  if (!normalized.startsWith("---\n")) {
    return { data: {}, content: normalized };
  }

  const end = normalized.indexOf("\n---", 4);
  if (end === -1) {
    return { data: {}, content: normalized };
  }

  const rawFrontmatter = normalized.slice(4, end);
  const content = normalized.slice(end + 4).replace(/^\n/, "");

  const data: Record<string, string | string[]> = {};
  for (const line of rawFrontmatter.split("\n")) {
    if (!line.trim()) continue;
    const colonIndex = line.indexOf(":");
    if (colonIndex === -1) continue;
    const key = line.slice(0, colonIndex).trim();
    const value = line.slice(colonIndex + 1);
    data[key] = parseValue(value);
  }

  return { data, content };
}
