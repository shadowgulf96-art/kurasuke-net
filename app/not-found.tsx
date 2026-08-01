import type { Metadata } from "next";
import Link from "next/link";

export const metadata: Metadata = {
  title: "ページが見つかりません",
  robots: { index: false, follow: false },
};

export default function NotFound() {
  return (
    <main className="mx-auto flex max-w-lg flex-col items-center px-4 py-24 text-center sm:px-6">
      <p className="text-sm font-semibold text-primary-600">404</p>
      <h1 className="mt-3 text-xl font-bold text-slate-900 sm:text-2xl">
        ページが見つかりませんでした
      </h1>
      <p className="mt-3 text-sm leading-relaxed text-slate-600">
        お探しのページは移動または削除された可能性があります。URLをご確認いただくか、下記のリンクからお探しください。
      </p>
      <div className="mt-8 flex flex-col gap-3 sm:flex-row">
        <Link
          href="/"
          className="inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
        >
          トップページへ戻る
        </Link>
        <Link
          href="/articles"
          className="inline-flex items-center justify-center rounded-xl bg-slate-100 px-6 py-3 text-sm font-semibold text-slate-800 transition-colors hover:bg-slate-200"
        >
          記事一覧を見る
        </Link>
      </div>
    </main>
  );
}
