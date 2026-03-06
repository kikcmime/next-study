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
  RocketOutlined,
  BulbOutlined,
  CodeOutlined,
  BarChartOutlined,
  TeamOutlined,
  SafetyOutlined,
  CrownOutlined,
  HeartOutlined,
  ThunderboltTwoTone
} from "@ant-design/icons";
import Link from "next/link";

type MenuItem = {
  key: string;
  icon: React.ReactNode;
  label: string;
  path?: string;
  badge?: number;
};

const menuItems: MenuItem[] = [
  { key: "1", icon: <DashboardOutlined />, label: "仪表盘", path: "/", badge: 3 },
  { key: "2", icon: <CheckSquareOutlined />, label: "待办事项", path: "/todos" },
  { key: "3", icon: <LockOutlined />, label: "认证演示", path: "/auth" },
  { key: "4", icon: <AppstoreOutlined />, label: "组件库", path: "/components" },
  { key: "5", icon: <DashboardOutlined />, label: "工作流", path: "/reactflow" },
  { key: "6", icon: <FileTextOutlined />, label: "文档中心", path: "/docs" },
  { key: "7", icon: <InfoCircleOutlined />, label: "项目介绍", path: "/about" },
  { key: "8", icon: <SettingOutlined />, label: "系统设置", path: "/settings" }
];

const stats = [
  { title: "总待办", value: "12", prefix: <CheckSquareOutlined />, gradient: "from-blue-500 to-cyan-500", bg: "bg-blue-50" },
  { title: "已完成", value: "8", prefix: <CheckSquareOutlined />, gradient: "from-emerald-500 to-teal-500", bg: "bg-emerald-50" },
  { title: "进行中", value: "4", prefix: <FileTextOutlined />, gradient: "from-orange-500 to-amber-500", bg: "bg-amber-50" },
  { title: "效率值", value: "92%", prefix: <ThunderboltTwoTone />, gradient: "from-purple-500 to-pink-500", bg: "bg-purple-50" }
];

const featureCards = [
  {
    title: "待办事项管理",
    description: "智能任务追踪，让工作更有序",
    icon: <CheckSquareOutlined />,
    path: "/todos",
    gradient: "from-blue-500 via-blue-600 to-cyan-600",
    iconBg: "from-blue-400 to-blue-500"
  },
  {
    title: "用户认证",
    description: "安全可靠的认证体系",
    icon: <LockOutlined />,
    path: "/auth",
    gradient: "from-emerald-500 via-green-600 to-teal-600",
    iconBg: "from-emerald-400 to-green-500"
  },
  {
    title: "组件库",
    description: "精美组件，开箱即用",
    icon: <AppstoreOutlined />,
    path: "/components",
    gradient: "from-violet-500 via-purple-600 to-fuchsia-600",
    iconBg: "from-violet-400 to-purple-500"
  },
  {
    title: "工作流编辑器",
    description: "可视化流程设计",
    icon: <DashboardOutlined />,
    path: "/reactflow",
    gradient: "from-orange-500 via-red-500 to-rose-600",
    iconBg: "from-orange-400 to-red-500"
  }
];

const highlightFeatures = [
  { icon: <BulbOutlined />, title: "智能分析", desc: "AI驱动的数据洞察", color: "text-blue-600", bg: "bg-blue-50" },
  { icon: <CodeOutlined />, title: "纯净代码", desc: "TypeScript严格模式", color: "text-purple-600", bg: "bg-purple-50" },
  { icon: <BarChartOutlined />, title: "实时监控", desc: "性能指标一目了然", color: "text-emerald-600", bg: "bg-emerald-50" },
  { icon: <SafetyOutlined />, title: "企业级安全", desc: "多层防护机制", color: "text-rose-600", bg: "bg-rose-50" }
];

const technologies = [
  { name: "Next.js 14", icon: "⚡", color: "bg-slate-800" },
  { name: "React 18", icon: "⚛️", color: "bg-cyan-500" },
  { name: "TypeScript", icon: "📘", color: "bg-blue-500" },
  { name: "Tailwind", icon: "🎨", color: "bg-cyan-600" },
  { name: "Prisma", icon: "🗃️", color: "bg-slate-700" },
  { name: "NextAuth", icon: "🔐", color: "bg-indigo-600" },
  { name: "Framer", icon: "🎭", color: "bg-pink-500" },
  { name: "SWR", icon: "🔄", color: "bg-orange-500" }
];

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 via-blue-50/20 to-indigo-50/20">
      {/* 动态背景效果 */}
      <div className="fixed inset-0 pointer-events-none overflow-hidden">
        <motion.div
          className="absolute top-20 left-20 w-96 h-96 bg-blue-300/15 rounded-full blur-3xl"
          animate={{
            x: [0, 100, 0],
            y: [0, 50, 0],
            scale: [1, 1.2, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute bottom-40 right-20 w-80 h-80 bg-purple-300/15 rounded-full blur-3xl"
          animate={{
            x: [0, -80, 0],
            y: [0, -40, 0],
            scale: [1, 1.3, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute top-1/2 left-1/2 w-64 h-64 bg-emerald-300/15 rounded-full blur-3xl"
          animate={{
            x: [0, 60, -60, 0],
            y: [0, -60, 60, 0],
            scale: [1, 1.1, 1]
          }}
          transition={{ duration: 30, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="relative flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`${collapsed ? "w-20" : "w-72"} bg-white border-r border-slate-200 flex flex-col transition-all duration-500 ease-out z-50 shadow-sm`}
        >
          {/* Logo */}
          <div className="h-20 flex items-center justify-center border-b border-slate-100">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <motion.div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center shadow-lg ${
                  collapsed ? "" : "mr-3"
                }`}
                whileHover={{ scale: 1.1, rotate: 5 }}
                transition={{ type: "spring", stiffness: 300 }}
              >
                <StarOutlined className="text-white text-lg" />
              </motion.div>
              {!collapsed && (
                <motion.span
                  initial={{ opacity: 0 }}
                  animate={{ opacity: 1 }}
                  className="text-xl font-bold bg-gradient-to-r from-slate-800 to-slate-600 bg-clip-text text-transparent"
                >
                  Next Study
                </motion.span>
              )}
            </motion.div>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <Link key={item.key} href={item.path || "#"} className="group relative block">
                <motion.div
                  className={`flex items-center gap-3 px-4 py-3 rounded-xl transition-all duration-200 relative overflow-hidden
                    ${item.key === "1"
                      ? "bg-gradient-to-r from-blue-50 to-indigo-50 border border-blue-200 text-blue-700"
                      : "text-slate-600 hover:bg-slate-50 hover:text-slate-900"
                    }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  <span className={`text-lg ${item.key === "1" ? "text-blue-600" : "group-hover:scale-110 transition-transform"}`}>
                    {item.icon}
                  </span>
                  {!collapsed && <span className="font-medium">{item.label}</span>}
                  {!collapsed && item.badge && (
                    <span className="ml-auto px-2 py-0.5 text-xs bg-blue-100 text-blue-600 rounded-full font-medium">
                      {item.badge}
                    </span>
                  )}
                </motion.div>
              </Link>
            ))}
          </nav>

          {/* Collapse Toggle */}
          <motion.button
            onClick={() => setCollapsed(!collapsed)}
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            className="m-4 p-3 rounded-xl bg-slate-50 text-slate-500 hover:text-slate-700 hover:bg-slate-100 transition-colors border border-slate-100"
          >
            <DashboardOutlined rotate={collapsed ? 180 : 0} className="text-xl" />
          </motion.button>

          {/* User Profile */}
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 m-4 rounded-2xl bg-gradient-to-br from-blue-50 to-indigo-50 border border-blue-100"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-indigo-600 flex items-center justify-center text-white">
                  <TeamOutlined />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold text-slate-900 truncate">开发者</p>
                  <p className="text-xs text-slate-500 truncate">dev@example.com</p>
                </div>
              </div>
            </motion.div>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <header className="sticky top-0 z-40 bg-white/80 backdrop-blur-sm border-b border-slate-200">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-lg shadow-emerald-500/20"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <ThunderboltOutlined className="text-white text-xl" />
                </motion.div>
                <div>
                  <h1 className="text-2xl font-bold text-slate-900">
                    欢迎回来
                    <motion.span
                      animate={{ opacity: [1, 0.6, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block ml-2"
                    >
                      👋
                    </motion.span>
                  </h1>
                  <p className="text-slate-500">开启你的高效工作之旅</p>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-indigo-600 text-white font-semibold shadow-lg shadow-blue-500/25 hover:shadow-blue-500/40 transition-all flex items-center gap-2"
              >
                <RocketOutlined />
                <span>快速开始</span>
              </motion.button>
            </div>
          </header>

          {/* Content */}
          <div className="p-6 lg:p-8">
            <div className="max-w-7xl mx-auto space-y-8">
              {/* Hero Section */}
              <motion.div
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.8 }}
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600 via-indigo-600 to-purple-600 p-8 lg:p-12 text-white"
              >
                <motion.div
                  className="absolute -top-32 -right-32 w-64 h-64 bg-white/10 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.3, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-32 -left-32 w-64 h-64 bg-purple-400/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-white/20 backdrop-blur-sm border border-white/30 text-sm mb-6"
                  >
                    <CrownOutlined />
                    <span>Pro 版本已激活</span>
                  </motion.div>

                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    下一代全栈开发
                    <span className="bg-gradient-to-r from-blue-200 via-purple-200 to-pink-200 bg-clip-text text-transparent">
                      {" "}体验
                    </span>
                  </h2>
                  <p className="text-blue-100 text-lg mb-8 max-w-2xl">
                    这是一个现代化的全栈练习项目，集成了最先进的技术栈，提供极致的开发体验。
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/todos"
                      className="px-6 py-3 rounded-2xl bg-white text-blue-600 font-semibold shadow-lg hover:scale-105 transition-transform flex items-center gap-2"
                    >
                      <CheckSquareOutlined />
                      立即体验
                    </Link>
                    <Link
                      href="/about"
                      className="px-6 py-3 rounded-2xl bg-white/10 backdrop-blur-sm border border-white/20 text-white font-semibold hover:bg-white/20 transition-all flex items-center gap-2"
                    >
                      <HeartOutlined />
                      了解更多
                    </Link>
                  </div>
                </div>
              </motion.div>

              {/* Stats */}
              <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
                {stats.map((stat, index) => (
                  <motion.div
                    key={index}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.3 + index * 0.1 }}
                    whileHover={{ y: -5, scale: 1.02 }}
                    className="bg-white rounded-2xl p-6 shadow-sm border border-slate-100 hover:shadow-lg hover:border-blue-100 transition-all relative overflow-hidden"
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 hover:opacity-5 transition-opacity duration-300`}
                    />
                    <div className="relative">
                      <p className="text-sm text-slate-500 mb-2">{stat.title}</p>
                      <p className="text-4xl font-bold text-slate-900 mb-4">{stat.value}</p>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg ${stat.bg}`}>
                        <span className="text-white text-2xl">{stat.prefix}</span>
                      </div>
                    </div>
                  </motion.div>
                ))}
              </div>

              {/* Highlight Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.5 }}
                className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4"
              >
                {highlightFeatures.map((feature, index) => (
                  <motion.div
                    key={index}
                    whileHover={{ scale: 1.05, y: -5 }}
                    className="p-5 rounded-2xl bg-white border border-slate-100 shadow-sm hover:shadow-lg hover:border-blue-100 transition-all group"
                  >
                    <div className={`w-12 h-12 rounded-xl ${feature.bg} flex items-center justify-center mb-4 group-hover:scale-110 transition-transform`}>
                      <span className={`text-2xl ${feature.color}`}>{feature.icon}</span>
                    </div>
                    <h3 className="font-semibold text-slate-900 mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-500">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-100"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-slate-900 mb-2">核心功能</h2>
                  <p className="text-slate-500">探索我们提供的强大功能模块</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {featureCards.map((card, index) => (
                    <Link key={index} href={card.path} className="group block">
                      <motion.div
                        whileHover={{ y: -8 }}
                        className="h-full p-6 rounded-3xl bg-gradient-to-br from-slate-50 to-white border border-slate-100 hover:border-blue-200 hover:shadow-lg transition-all relative overflow-hidden"
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-5 transition-opacity duration-300`}
                        />
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                          <span className="text-white text-2xl">{card.icon}</span>
                        </div>
                        <h3 className="font-semibold text-slate-900 text-lg mb-3">{card.title}</h3>
                        <p className="text-sm text-slate-500 mb-5">{card.description}</p>
                        <span className="text-sm font-semibold text-blue-600 group-hover:text-blue-700 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
                          查看详情
                          <motion.svg
                            className="w-4 h-4"
                            initial={{ x: 0 }}
                            whileHover={{ x: 4 }}
                            fill="none"
                            stroke="currentColor"
                            viewBox="0 0 24 24"
                          >
                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                          </motion.svg>
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
                transition={{ delay: 0.7 }}
                className="bg-white rounded-3xl p-6 lg:p-8 shadow-sm border border-slate-100"
              >
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-slate-900 mb-2">技术栈</h2>
                    <p className="text-slate-500">采用业界领先的现代化技术</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-4 py-2 rounded-xl bg-emerald-100 text-emerald-700 text-sm font-medium">
                      12+ 技术
                    </span>
                    <span className="px-4 py-2 rounded-xl bg-blue-100 text-blue-700 text-sm font-medium">
                      最新版本
                    </span>
                  </div>
                </div>

                <div className="flex flex-wrap gap-3">
                  {technologies.map((tech, index) => (
                    <motion.span
                      key={index}
                      initial={{ opacity: 0, scale: 0.9 }}
                      animate={{ opacity: 1, scale: 1 }}
                      transition={{ delay: 0.8 + index * 0.05 }}
                      whileHover={{ scale: 1.1, y: -2 }}
                      className={`px-5 py-3 rounded-2xl bg-slate-50 border border-slate-200 hover:border-blue-200 hover:shadow-md transition-all flex items-center gap-2 group cursor-pointer`}
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span className="font-medium text-slate-700 group-hover:text-blue-600 transition-colors">{tech.name}</span>
                    </motion.span>
                  ))}
                </div>
              </motion.div>
            </div>
          </div>
        </main>
      </div>
    </div>
  );
}