import Image from "next/image";

export function ClascheIntro() {
  return (
    <section className="px-4 py-8 sm:px-6">
      <div className="mx-auto flex max-w-5xl flex-col items-center gap-4 rounded-2xl bg-primary-50 px-6 py-6 text-center sm:flex-row sm:text-left">
        <Image src="/mascot-icon.png" alt="" width={48} height={48} className="shrink-0" />
        <div className="flex-1">
          <h2 className="text-sm font-bold text-slate-900">学校生活の管理にはClasche</h2>
          <p className="mt-1 text-xs leading-relaxed text-slate-600">
            時間割や学校の予定を、スマホやパソコンからかんたんに管理できます。
          </p>
        </div>
        <a
          href="https://clasche.com"
          className="w-full shrink-0 rounded-lg bg-primary-600 px-5 py-2.5 text-center text-xs font-semibold text-white transition-colors hover:bg-primary-700 sm:w-auto"
        >
          Clascheを見る
        </a>
      </div>
    </section>
  );
}
