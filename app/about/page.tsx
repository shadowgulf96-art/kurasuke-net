import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/articles/Breadcrumb";

export const metadata: Metadata = {
  title: "Clascheについて",
  description:
    "KURASUKE.NETを運営するClascheについて紹介します。時間割・持ち物・学校イベントをまとめて管理できる、学生向けのスケジュール管理アプリです。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ name: "トップ", url: "/" }, { name: "Clascheについて", url: "/about" }]} />

      <h1 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">Clascheについて</h1>

      <div className="mt-6 flex items-center gap-3 rounded-2xl bg-primary-50 p-5">
        <Image src="/mascot-icon.png" alt="" width={44} height={44} />
        <p className="text-sm font-semibold text-slate-800">Clasche（クラスケ）</p>
      </div>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          KURASUKE.NETは、学生向けスケジュール管理アプリ「Clasche（クラスケ）」が運営する、中学生・高校生向けの学校生活メディアです。
        </p>
        <p>
          Clascheは、時間割・持ち物・学校イベントを1つのアプリでまとめて管理できるサービスです。教科・教室・先生を登録しておけば毎日の時間割がすぐに確認でき、今日と明日の持ち物も自動でリストアップされます。テストや提出物、学校行事もカレンダーで一元管理できます。
        </p>
        <p>
          スマートフォン・タブレット・パソコンのブラウザから利用でき、Googleアカウントまたはメールアドレスとパスワードで簡単に登録できます。無料プランで基本的な機能をすべて利用できます。
        </p>
        <p>
          KURASUKE.NETでは、Clascheの紹介だけでなく、時間割の管理方法やテスト勉強のコツ、学校行事の準備など、学校生活に役立つ情報を記事として発信しています。記事を読んで役立ったと感じた方は、あわせてClascheもチェックしてみてください。
        </p>
      </div>

      <a
        href="https://clasche.com"
        className="mt-8 inline-flex items-center justify-center rounded-xl bg-primary-600 px-6 py-3 text-sm font-semibold text-white transition-colors hover:bg-primary-700"
      >
        Clascheを見る
      </a>
    </main>
  );
}
