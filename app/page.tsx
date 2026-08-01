export default function HomePage() {
  return (
    <main className="flex min-h-[calc(100vh-56px)] flex-col items-center justify-center bg-white px-4 py-16 text-center sm:px-6">
      <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
        KURASUKE.NET
      </h1>
      <p className="mt-4 max-w-md text-base leading-relaxed text-slate-700 sm:text-lg">
        中高生の学校生活を、もっと便利に。
      </p>
      <p className="mt-2 text-xs text-slate-400">Student school-life media</p>

      <a
        href="https://clasche.com/login"
        className="mt-10 inline-flex items-center justify-center rounded-full bg-primary-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700 active:bg-primary-800"
      >
        Clascheを見る
      </a>
    </main>
  );
}
