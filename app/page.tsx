"use client";
import { useState } from "react";
import { motion } from "framer-motion";
import {
  CheckSquareOutlined,
  LockOutlined,
  AppstoreOutlined,
  DashboardOutlined,
  FileTextOutlined,
  InfoCircleOutlined,
  SettingOutlined,
  StarOutlined,
  ThunderboltOutlined,
  RocketOutlined
} from "@ant-design/icons";
import Link from "next/link";

type MenuItem = {
  key: string;
  icon: React.ReactNode;
  label: string;
  path?: string;
};

const menuItems: MenuItem[] = [
  { key: "1", icon: <DashboardOutlined />, label: "仪表盘", path: "/" },
  { key: "2", icon: <CheckSquareOutlined />, label: "待办事项", path: "/todos" },
  { key: "3", icon: <LockOutlined />, label: "认证演示", path: "/auth" },
  { key: "4", icon: <AppstoreOutlined />, label: "组件库", path: "/components" },
  { key: "5", icon: <DashboardOutlined />, label: "工作流", path: "/reactflow" },
  { key: "6", icon: <FileTextOutlined />, label: "文档中心", path: "/docs" },
  { key: "7", icon: <InfoCircleOutlined />, label: "项目介绍", path: "/about" },
  { key: "8", icon: <SettingOutlined />, label: "系统设置", path: "/settings" }
];

const stats = [
  { title: "总待办", value: "12", prefix: <CheckSquareOutlined />, gradient: "from-blue-500 to-blue-600", bg: "bg-blue-50" },
  { title: "已完成", value: "8", prefix: <CheckSquareOutlined />, gradient: "from-emerald-500 to-emerald-600", bg: "bg-emerald-50" },
  { title: "进行中", value: "4", prefix: <FileTextOutlined />, gradient: "from-amber-500 to-amber-600", bg: "bg-amber-50" },
  { title: "用户数", value: "156", prefix: <DashboardOutlined />, gradient: "from-violet-500 to-violet-600", bg: "bg-violet-50" }
];

const featureCards = [
  {
    title: "待办事项管理",
    description: "完整的 CRUD 功能，优雅的交互体验",
    icon: <CheckSquareOutlined />,
    path: "/todos",
    color: "blue",
    gradient: "from-blue-400 to-blue-600"
  },
  {
    title: "用户认证",
    description: "安全可靠的认证方案",
    icon: <LockOutlined />,
    path: "/auth",
    color: "green",
    gradient: "from-emerald-400 to-emerald-600"
  },
  {
    title: "组件库演示",
    description: "丰富精美的组件集合",
    icon: <AppstoreOutlined />,
    path: "/components",
    color: "purple",
    gradient: "from-violet-400 to-violet-600"
  },
  {
    title: "工作流编辑器",
    description: "可视化的流程编辑体验",
    icon: <DashboardOutlined />,
    path: "/reactflow",
    color: "orange",
    gradient: "from-orange-400 to-orange-600"
  }
];

const technologies = [
  "Next.js 14", "React 18", "TypeScript", "Tailwind CSS",
  "Prisma", "NextAuth", "SWR", "React Hook Form",
  "Framer Motion", "React Flow", "Ant Design", "Vitest"
];

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-white to-slate-100 flex">
      {/* Sidebar */}
      <aside
        className={`${collapsed ? "w-20" : "w-64"} bg-white border-r border-slate-200/60 flex flex-col transition-all duration-300 shadow-xl shadow-slate-900/[0.02]`}
      >
        {/* Logo */}
        <div className="h-16 flex items-center justify-center border-b border-slate-100">
          <div className="flex items-center gap-2">
            <div className={`w-8 h-8 rounded-lg bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center ${collapsed ? "" : "mr-2"}`}>
              <StarOutlined className="text-white text-sm" />
            </div>
            {!collapsed && (
              <span className="text-lg font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent">
                Next Study
              </span>
            )}
          </div>
        </div>

        {/* Menu */}
        <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
          {menuItems.map((item) => (
            <Link
              key={item.key}
              href={item.path || "#"}
              className={`flex items-center gap-3 px-3 py-2.5 rounded-xl transition-all duration-200
                ${item.key === "1"
                  ? "bg-gradient-to-r from-blue-50 to-indigo-50 text-blue-700"
                  : "text-slate-600 hover:bg-slate-50"
                }`}
            >
              <span className={`${item.key === "1" ? "text-blue-600" : "text-slate-400"} text-lg`}>
                {item.icon}
              </span>
              {!collapsed && <span className="font-medium">{item.label}</span>}
            </Link>
          ))}
        </nav>

        {/* Collapse Toggle */}
        <button
          onClick={() => setCollapsed(!collapsed)}
          className="m-4 p-3 rounded-xl bg-slate-50 text-slate-500 hover:bg-slate-100 transition-colors"
        >
          <DashboardOutlined rotate={collapsed ? 180 : 0} />
        </button>
      </aside>

      {/* Main Content */}
      <main className="flex-1 overflow-auto">
        {/* Header */}
        <header className="bg-white/80 backdrop-blur-sm border-b border-slate-200/50 sticky top-0 z-30">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 h-16 flex items-center justify-between">
            <motion.div
              initial={{ opacity: 0, y: -10 }}
              animate={{ opacity: 1, y: 0 }}
              className="flex items-center gap-3"
            >
              <div className="w-10 h-10 rounded-xl bg-gradient-to-br from-emerald-400 to-teal-500 flex items-center justify-center shadow-lg shadow-emerald-500/20">
                <ThunderboltOutlined className="text-white" />
              </div>
              <div>
                <h1 className="text-xl font-bold text-slate-900">欢迎回来</h1>
                <p className="text-sm text-slate-500">开始你的高效工作之旅</p>
              </div>
            </motion.div>

            <motion.button
              initial={{ opacity: 0, scale: 0.9 }}
              animate={{ opacity: 1, scale: 1 }}
              whileHover={{ scale: 1.05 }}
              whileTap={{ scale: 0.95 }}
              className="px-4 py-2 rounded-xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-medium shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all"
            >
              <RocketOutlined className="mr-1" />
              快速开始
            </motion.button>
          </div>
        </header>

        {/* Content */}
        <div className="p-4 sm:p-6 lg:p-8">
          <div className="max-w-7xl mx-auto space-y-8">
            {/* Stats */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
              {stats.map((stat, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={{ opacity: 1, y: 0 }}
                  transition={{ delay: index * 0.1 }}
                  className="bg-white rounded-2xl p-6 border border-slate-100 shadow-sm hover:shadow-md transition-shadow"
                >
                  <div className="flex items-center justify-between">
                    <div>
                      <p className="text-sm text-slate-500 mb-1">{stat.title}</p>
                      <p className="text-3xl font-bold text-slate-900">{stat.value}</p>
                    </div>
                    <div className={`w-12 h-12 rounded-xl ${stat.bg} flex items-center justify-center bg-gradient-to-br ${stat.gradient}`}>
                      <span className={`text-white text-xl`}>{stat.prefix}</span>
                    </div>
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Features */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm"
            >
              <div className="mb-6">
                <h2 className="text-xl font-bold text-slate-900 mb-2">功能概览</h2>
                <p className="text-slate-500">探索项目提供的核心功能模块</p>
              </div>

              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {featureCards.map((card, index) => (
                  <Link
                    key={index}
                    href={card.path}
                    className="group"
                  >
                    <motion.div
                      whileHover={{ y: -4 }}
                      className="h-full p-6 rounded-2xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-slate-200 transition-all"
                    >
                      <div className={`w-12 h-12 rounded-xl bg-gradient-to-br ${card.gradient} flex items-center justify-center mb-4 shadow-lg`}>
                        <span className="text-white text-xl">{card.icon}</span>
                      </div>
                      <h3 className="font-semibold text-slate-900 mb-2">{card.title}</h3>
                      <p className="text-sm text-slate-500 mb-4">{card.description}</p>
                      <span className="text-sm font-medium text-blue-600 group-hover:text-blue-700 inline-flex items-center gap-1">
                        查看详情
                        <svg className="w-4 h-4 group-hover:translate-x-1 transition-transform" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </motion.div>
                  </Link>
                ))}
              </div>
            </motion.div>

            {/* Tech Stack */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.4 }}
              className="bg-white rounded-2xl p-6 lg:p-8 border border-slate-100 shadow-sm"
            >
              <div className="flex items-center justify-between mb-6">
                <div>
                  <h2 className="text-xl font-bold text-slate-900 mb-2">技术栈</h2>
                  <p className="text-slate-500">项目使用的前沿技术</p>
                </div>
              </div>

              <div className="flex flex-wrap gap-3">
                {technologies.map((tech, index) => (
                  <motion.span
                    key={index}
                    initial={{ opacity: 0, scale: 0.9 }}
                    animate={{ opacity: 1, scale: 1 }}
                    transition={{ delay: 0.5 + index * 0.03 }}
                    className="px-4 py-2 rounded-full bg-gradient-to-r from-slate-50 to-slate-100 border border-slate-200 text-sm font-medium text-slate-700 hover:border-slate-300 transition-colors"
                  >
                    {tech}
                  </motion.span>
                ))}
              </div>
            </motion.div>
          </div>
        </div>
      </main>
    </div>
  );
}