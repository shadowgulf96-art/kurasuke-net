# KURASUKE.NET

中高生の学校生活を便利にするメディアサイト（[Clasche](https://clasche.com)の紹介サイト）。

Clasche本体（Supabase・認証を含む学生向けスケジュール管理アプリ）とは完全に別のリポジトリ・別のプロジェクトです。このリポジトリは静的なメディア/紹介サイトのみを扱い、認証機能やSupabaseへの接続は一切含みません。

## 技術構成

- Next.js 14（App Router）
- TypeScript
- Tailwind CSS
- ESLint

## 起動方法

```bash
npm install
npm run dev
```

http://localhost:3000 を開いてください。

## ビルド確認

```bash
npm run build
```

## Lint / 型チェック

```bash
npm run lint
npx tsc --noEmit
```
