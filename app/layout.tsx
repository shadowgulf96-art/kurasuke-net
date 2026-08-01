import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";
import { Footer } from "@/components/layout/Footer";

const SITE_TITLE = "KURASUKE.NET｜中高生の学校生活を便利にするメディア";
const SITE_DESCRIPTION =
  "KURASUKE.NETは、時間割、勉強、テスト、持ち物、学校行事など、中学生・高校生の学校生活に役立つ情報を発信するメディアです。";

export const metadata: Metadata = {
  metadataBase: new URL("https://kurasuke.net"),
  title: {
    default: SITE_TITLE,
    template: "%s｜KURASUKE.NET",
  },
  description: SITE_DESCRIPTION,
  alternates: {
    canonical: "/",
  },
  openGraph: {
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
    siteName: "KURASUKE.NET",
    locale: "ja_JP",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: SITE_TITLE,
    description: SITE_DESCRIPTION,
  },
};

export const viewport: Viewport = {
  width: "device-width",
  initialScale: 1,
  maximumScale: 1,
  themeColor: "#284fea",
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="ja">
      <body className="flex min-h-screen flex-col font-sans antialiased">
        <Header />
        <div className="flex-1">{children}</div>
        <Footer />
      </body>
    </html>
  );
}
