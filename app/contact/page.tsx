import type { Metadata } from "next";
import { Breadcrumb } from "@/components/articles/Breadcrumb";

export const metadata: Metadata = {
  title: "お問い合わせ",
  description: "KURASUKE.NETへのお問い合わせ方法についてご案内します。",
  alternates: { canonical: "/contact" },
};

export default function ContactPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ name: "トップ", url: "/" }, { name: "お問い合わせ", url: "/contact" }]} />

      <h1 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">お問い合わせ</h1>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          KURASUKE.NETの記事内容や当サイトに関するお問い合わせは、以下のメールアドレスまでご連絡ください。
        </p>
        <p>
          <a href="mailto:contact@kurasuke.net" className="font-semibold text-primary-600 underline">
            contact@kurasuke.net
          </a>
        </p>
        <p className="text-slate-500">
          内容を確認の上、必要に応じて返信いたします。返信までお時間をいただく場合がありますので、あらかじめご了承ください。
        </p>
      </div>
    </main>
  );
}
