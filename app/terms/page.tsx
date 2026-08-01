import type { Metadata } from "next";
import { Breadcrumb } from "@/components/articles/Breadcrumb";

export const metadata: Metadata = {
  title: "利用規約",
  description: "KURASUKE.NETの利用規約です。",
  alternates: { canonical: "/terms" },
};

export default function TermsPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ name: "トップ", url: "/" }, { name: "利用規約", url: "/terms" }]} />

      <h1 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">利用規約</h1>

      <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-700">
        <p>
          この利用規約（以下「本規約」といいます）は、KURASUKE.NET（以下「当サイト」といいます）の利用条件を定めるものです。当サイトをご利用いただく際は、本規約に同意いただいたものとみなします。
        </p>

        <section>
          <h2 className="text-base font-bold text-slate-900">コンテンツの利用について</h2>
          <p className="mt-2">
            当サイトに掲載する記事・画像等の著作権は、当サイト運営者または正当な権利者に帰属します。個人的な閲覧の範囲を超えて、無断で複製・転載することはご遠慮ください。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">免責事項</h2>
          <p className="mt-2">
            当サイトに掲載する情報は、できる限り正確な内容となるよう努めていますが、その正確性・最新性を保証するものではありません。当サイトの情報を利用したことにより生じた損害について、運営者は責任を負いかねます。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">外部リンクについて</h2>
          <p className="mt-2">
            当サイトから他のウェブサイト（Clascheアプリを含む）へのリンクを設置している場合がありますが、リンク先のサイトの内容について当サイトは責任を負いません。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">規約の変更</h2>
          <p className="mt-2">当サイトは、必要に応じて本規約の内容を変更することがあります。変更後の規約は、当サイトに掲載した時点から効力を生じるものとします。</p>
        </section>

        <p className="text-xs text-slate-400">最終更新日: 2026年8月1日</p>
      </div>
    </main>
  );
}
