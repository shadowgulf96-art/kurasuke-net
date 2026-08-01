import Image from "next/image";
import Link from "next/link";

const LINKS = [
  { href: "/articles", label: "記事一覧" },
  { href: "/category", label: "カテゴリー" },
  { href: "/about", label: "Clascheについて" },
  { href: "/privacy", label: "プライバシーポリシー" },
  { href: "/terms", label: "利用規約" },
  { href: "/contact", label: "お問い合わせ" },
];

export function Footer() {
  return (
    <footer className="border-t border-slate-100 bg-white">
      <div className="mx-auto max-w-5xl px-4 py-10 sm:px-6">
        <Image
          src="/images/clasche-logo-wide.png"
          alt="KURASUKE.NET"
          width={489}
          height={160}
          className="h-auto w-[140px]"
        />

        <div className="mt-5 max-w-xl">
          <h2 className="text-sm font-semibold text-slate-900">KURASUKE.NETについて</h2>
          <p className="mt-2 text-sm leading-relaxed text-slate-600">
            KURASUKE.NETは、Clascheが運営する中学生・高校生向けの学校生活メディアです。
          </p>
        </div>

        <nav className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
          {LINKS.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm text-slate-500 transition-colors hover:text-slate-800"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <p className="mt-8 text-xs text-slate-400">&copy; 2026 KURASUKE.NET / Clasche</p>
      </div>
    </footer>
  );
}
