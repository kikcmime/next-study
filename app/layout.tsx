import "../styles/globals.css";
import { ReactNode } from "react";
import BreadcrumbNav from "@/components/BreadcrumbNav";

export const metadata = {
  title: "next-study",
  description: "Next.js 全栈练习项目"
};

export default function RootLayout({ children }: { children: ReactNode }) {
  return (
    <html lang="zh-CN">
      <body className="bg-slate-50 min-h-screen">
        <div className="">
          <BreadcrumbNav />
          {children}
        </div>
      </body>
    </html>
  );
}