import Link from "next/link";

export function Hero() {
  return (
    <section className="px-4 pb-10 pt-12 text-center sm:px-6 sm:pt-16">
      <h1 className="mx-auto max-w-xl text-2xl font-bold leading-snug tracking-tight text-slate-900 sm:text-4xl">
        学校生活を、もっと便利に。もっと楽しく。
      </h1>
      <p className="mx-auto mt-4 max-w-lg text-sm leading-relaxed text-slate-600 sm:text-base">
        時間割、勉強、テスト、持ち物、学校行事など、中学生・高校生に役立つ情報を発信します。
      </p>
      <div className="mt-7 flex flex-col items-center justify-center gap-3 sm:flex-row">
        <Link
          href="/articles"
          className="inline-flex w-full items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 sm:w-auto"
        >
          新着記事を見る
        </Link>
      </div>
    </section>
  );
}
