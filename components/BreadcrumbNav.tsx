"use client";
import { HomeOutlined } from "@ant-design/icons";
import Link from "next/link";
import { usePathname } from "next/navigation";
import { motion } from "framer-motion";

const routeMap: Record<string, string> = {
  "/": "首页",
  "/todos": "待办事项",
  "/auth": "认证演示",
  "/components": "组件库",
  "/reactflow": "工作流",
  "/docs": "文档中心",
  "/settings": "系统设置",
  "/about": "项目介绍"
};

export default function BreadcrumbNav() {
  const pathname = usePathname();

  if (pathname === "/") {
    return null;
  }

  const pathSegments = pathname.split("/").filter(Boolean);

  return (
    <nav className="w-full bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <ol className="flex items-center space-x-2 py-3 sm:py-4 text-sm">
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-1.5 px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 group"
            >
              <HomeOutlined className="text-base group-hover:scale-110 transition-transform" />
              <span className="font-medium">首页</span>
            </Link>
          </motion.li>

          {pathSegments.map((segment, index) => {
            const path = "/" + pathSegments.slice(0, index + 1).join("/");
            const title = routeMap[path] || segment;
            const isLast = index === pathSegments.length - 1;

            return (
              <motion.li
                key={path}
                initial={{ opacity: 0, x: -10 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ duration: 0.2, delay: index * 0.05 }}
                className="flex items-center"
              >
                <svg
                  className="w-4 h-4 text-slate-300 mx-2"
                  fill="none"
                  stroke="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth={2}
                    d="M9 5l7 7-7 7"
                  />
                </svg>
                {isLast ? (
                  <span className="inline-flex items-center px-3 py-1.5 rounded-lg text-slate-900 font-semibold bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200">
                    {title}
                  </span>
                ) : (
                  <Link
                    href={path}
                    className="inline-flex items-center px-3 py-1.5 rounded-lg text-slate-500 hover:text-slate-900 hover:bg-slate-100 transition-all duration-200 font-medium"
                  >
                    {title}
                  </Link>
                )}
              </motion.li>
            );
          })}
        </ol>
      </div>
    </nav>
  );
}