export default function HomePage() {
  return (
    <div className="flex min-h-screen flex-col bg-white">
      <header className="border-b border-slate-100 px-4 py-4 sm:px-6">
        <p className="text-sm font-semibold tracking-wide text-blue-600">KURASUKE.NET</p>
      </header>

      <main className="flex flex-1 flex-col items-center justify-center px-4 py-16 text-center sm:px-6">
        <h1 className="text-3xl font-bold tracking-tight text-slate-900 sm:text-4xl">
          KURASUKE.NET
        </h1>
        <p className="mt-4 max-w-md text-base leading-relaxed text-slate-700 sm:text-lg">
          中高生の学校生活を、もっと便利に。
        </p>
        <p className="mt-2 text-xs text-slate-400">Student school-life media</p>

        <a
          href="https://clasche.com/login"
          className="mt-10 inline-flex items-center justify-center rounded-full bg-blue-600 px-8 py-3 text-sm font-semibold text-white transition-colors hover:bg-blue-700 active:bg-blue-800"
        >
          Clascheを見る
        </a>
      </main>
    </div>
  );
}
