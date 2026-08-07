import type { Metadata } from "next";
import Image from "next/image";
import { Breadcrumb } from "@/components/articles/Breadcrumb";

export const metadata: Metadata = {
  title: "サイトについて",
  description:
    "KURASUKE.NETについて紹介します。中学生・高校生向けに、時間割・勉強・テスト・持ち物・学校行事など学校生活に役立つ情報を発信するメディアサイトです。",
  alternates: { canonical: "/about" },
};

export default function AboutPage() {
  return (
    <main className="mx-auto max-w-2xl px-4 py-8 sm:px-6">
      <Breadcrumb items={[{ name: "トップ", url: "/" }, { name: "サイトについて", url: "/about" }]} />

      <h1 className="mt-4 text-xl font-bold text-slate-900 sm:text-2xl">サイトについて</h1>

      <div className="mt-6 flex items-center gap-3 rounded-2xl bg-primary-50 p-5">
        <Image src="/mascot-icon.png" alt="" width={44} height={44} />
        <p className="text-sm font-semibold text-slate-800">KURASUKE.NET</p>
      </div>

      <div className="mt-6 space-y-4 text-sm leading-relaxed text-slate-700">
        <p>
          KURASUKE.NETは、中学生・高校生向けの学校生活メディアです。時間割の管理方法やテスト勉強のコツ、持ち物の準備、学校行事の過ごし方など、日々の学校生活に役立つ情報を記事として発信しています。
        </p>
        <p>
          忙しい毎日の中で「知っていると得すること」を、できるだけわかりやすく、実践しやすい形で紹介することを大切にしています。
        </p>
        <p>
          記事の内容やサイトに関するご意見・ご要望は、お問い合わせページよりお気軽にご連絡ください。
        </p>
      </div>
    </main>
  );
}
