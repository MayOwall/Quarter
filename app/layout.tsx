import type { Metadata } from "next";
import localFont from "next/font/local";
import "./globals.css";

export const metadata: Metadata = {
  title: "쿼터 Quarter",
  description: "Manage your todo within 4 priorities",
};

const pretendard = localFont({
  src: [
    {
      path: "../public/font/Pretendard-Bold.otf",
      weight: "700",
      style: "normal",
    },
    {
      path: "../public/font/Pretendard-Regular.otf",
      weight: "400",
      style: "normal",
    },
    {
      path: "../public/font/Pretendard-Light.otf",
      weight: "300",
      style: "normal",
    },
  ],
});

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="ko">
      <body className={pretendard.className}>{children}</body>
    </html>
  );
}
