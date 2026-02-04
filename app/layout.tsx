import "../styles/globals.css";
import { ReactNode } from "react";

export const metadata = {
  title: "next-study",
  description: "Next.js 全栈练习项目"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-slate-50 min-h-screen">
        <div className="max-w-4xl mx-auto p-4">{children}</div>
      </body>
    </html>
  );
}