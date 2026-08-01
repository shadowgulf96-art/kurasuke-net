import type { Metadata, Viewport } from "next";
import "./globals.css";
import { Header } from "@/components/layout/Header";

const SITE_TITLE = "KURASUKE.NET｜中高生の学校生活を便利にするメディア";
const SITE_DESCRIPTION =
  "KURASUKE.NETは、中学生・高校生の学校生活を便利にする情報を発信するメディアです。";

export const metadata: Metadata = {
  metadataBase: new URL("https://kurasuke.net"),
  title: SITE_TITLE,
  description: SITE_DESCRIPTION,
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
      <body className="font-sans antialiased">
        <Header />
        {children}
      </body>
    </html>
  );
}
