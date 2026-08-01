import type { Metadata } from "next";
import { Breadcrumb } from "@/components/articles/Breadcrumb";

export const metadata: Metadata = {
  title: "プライバシーポリシー",
  description: "KURASUKE.NETにおける個人情報の取り扱いについて説明します。",
  alternates: { canonical: "/privacy" },
};

export default function PrivacyPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ name: "トップ", url: "/" }, { name: "プライバシーポリシー", url: "/privacy" }]} />

      <h1 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">プライバシーポリシー</h1>

      <div className="mt-6 space-y-6 text-sm leading-relaxed text-slate-700">
        <p>
          KURASUKE.NET（以下「当サイト」といいます）は、Clascheが運営する学校生活メディアです。当サイトにおける個人情報の取り扱いについて、以下の通り定めます。
        </p>

        <section>
          <h2 className="text-base font-bold text-slate-900">取得する情報</h2>
          <p className="mt-2">
            当サイトは記事の閲覧を主目的としており、会員登録機能は設けていません。アクセス解析のために、閲覧ページやアクセス日時などの情報を取得する場合があります。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">Cookieの利用について</h2>
          <p className="mt-2">
            当サイトでは、サイトの利用状況を把握する目的で、Cookie等の技術を利用する場合があります。Cookieを無効にすることで、これらの情報の収集を制限できます。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">外部サービスへのリンク</h2>
          <p className="mt-2">
            当サイトから遷移する「Clasche」アプリ（clasche.com）は当サイトとは別のサービスであり、独自のプライバシーポリシーに基づいて運営されています。Clasche利用時に登録される情報については、Clasche側の定めをご確認ください。
          </p>
        </section>

        <section>
          <h2 className="text-base font-bold text-slate-900">お問い合わせ</h2>
          <p className="mt-2">
            本ポリシーに関するお問い合わせは、
            <a href="/contact" className="text-primary-600 underline">
              お問い合わせページ
            </a>
            よりご連絡ください。
          </p>
        </section>

        <p className="text-xs text-slate-400">最終更新日: 2026年8月1日</p>
      </div>
    </main>
  );
}
