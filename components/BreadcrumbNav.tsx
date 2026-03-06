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
    <nav className="w-full glass-dark border-b border-white/5 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto px-6 lg:px-8">
        <ol className="flex items-center space-x-1 py-4 text-sm">
          <motion.li
            initial={{ opacity: 0, x: -10 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ duration: 0.2 }}
          >
            <Link
              href="/"
              className="flex items-center space-x-2 px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 group"
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
                  className="w-5 h-5 text-slate-600 mx-1"
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
                  <motion.span
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    className="inline-flex items-center px-4 py-2 rounded-xl text-white font-semibold bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30"
                  >
                    {title}
                  </motion.span>
                ) : (
                  <Link
                    href={path}
                    className="inline-flex items-center px-4 py-2 rounded-xl text-slate-400 hover:text-white hover:bg-white/5 transition-all duration-200 font-medium"
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