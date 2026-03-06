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
  { title: "总待办", value: "12", prefix: <CheckSquareOutlined />, gradient: "from-blue-500 to-cyan-500", glow: "bg-blue-500/20" },
  { title: "已完成", value: "8", prefix: <CheckSquareOutlined />, gradient: "from-emerald-500 to-teal-500", glow: "bg-emerald-500/20" },
  { title: "进行中", value: "4", prefix: <FileTextOutlined />, gradient: "from-orange-500 to-amber-500", glow: "bg-amber-500/20" },
  { title: "效率值", value: "92%", prefix: <ThunderboltTwoTone />, gradient: "from-purple-500 to-pink-500", glow: "bg-purple-500/20" }
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
  { icon: <BulbOutlined />, title: "智能分析", desc: "AI驱动的数据洞察" },
  { icon: <CodeOutlined />, title: "纯净代码", desc: "TypeScript严格模式" },
  { icon: <BarChartOutlined />, title: "实时监控", desc: "性能指标一目了然" },
  { icon: <SafetyOutlined />, title: "企业级安全", desc: "多层防护机制" }
];

const technologies = [
  { name: "Next.js 14", icon: "⚡", color: "text-gray-800" },
  { name: "React 18", icon: "⚛️", color: "text-cyan-600" },
  { name: "TypeScript", icon: "📘", color: "text-blue-600" },
  { name: "Tailwind", icon: "🎨", color: "text-cyan-500" },
  { name: "Prisma", icon: "🗃️", color: "text-slate-800" },
  { name: "NextAuth", icon: "🔐", color: "text-indigo-600" },
  { name: "Framer", icon: "🎭", color: "text-pink-600" },
  { name: "SWR", icon: "🔄", color: "text-orange-500" }
];

// 背景粒子组件
function FloatingParticles() {
  const particles = Array.from({ length: 20 }, (_, i) => ({
    id: i,
    x: Math.random() * 100,
    y: Math.random() * 100,
    size: Math.random() * 100 + 50,
    duration: Math.random() * 20 + 10,
    delay: Math.random() * 10
  }));

  return (
    <div className="absolute inset-0 overflow-hidden pointer-events-none">
      {particles.map((particle) => (
        <motion.div
          key={particle.id}
          className="absolute rounded-full blur-3xl opacity-30"
          style={{
            left: `${particle.x}%`,
            top: `${particle.y}%`,
            width: `${particle.size}px`,
            height: `${particle.size}px`,
            background: particle.id % 3 === 0
              ? 'linear-gradient(135deg, #3b82f6, #8b5cf6)'
              : particle.id % 3 === 1
              ? 'linear-gradient(135deg, #10b981, #06b6d4)'
              : 'linear-gradient(135deg, #f59e0b, #ef4444)'
          }}
          animate={{
            x: [0, Math.random() * 100 - 50],
            y: [0, Math.random() * 100 - 50],
            scale: [1, 1.2, 1]
          }}
          transition={{
            duration: particle.duration,
            delay: particle.delay,
            repeat: Infinity,
            repeatType: "reverse",
            ease: "easeInOut"
          }}
        />
      ))}
    </div>
  );
}

// 几何图形装饰
function GeometricDecorations() {
  return (
    <>
      <motion.div
        className="absolute top-20 right-20 w-64 h-64 border-2 border-blue-500/20 rounded-3xl rotate-12 animate-slow-rotate"
      />
      <motion.div
        className="absolute top-40 right-40 w-48 h-48 border-2 border-purple-500/20 rounded-full animate-pulse-glow"
      />
      <motion.div
        className="absolute bottom-40 left-20 w-32 h-32 border-2 border-emerald-500/20 rotate-45"
        animate={{ rotate: [45, 225, 45] }}
        transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
      />
      <motion.div
        className="absolute top-1/3 left-1/4 w-2 h-2 bg-blue-400 rounded-full"
        animate={{
          scale: [1, 1.5, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2, repeat: Infinity }}
      />
      <motion.div
        className="absolute top-1/2 right-1/3 w-3 h-3 bg-purple-400 rounded-full"
        animate={{
          scale: [1, 1.3, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 2.5, repeat: Infinity, delay: 0.5 }}
      />
      <motion.div
        className="absolute bottom-1/3 left-1/3 w-2 h-2 bg-emerald-400 rounded-full"
        animate={{
          scale: [1, 1.4, 1],
          opacity: [0.5, 1, 0.5]
        }}
        transition={{ duration: 3, repeat: Infinity, delay: 1 }}
      />
    </>
  );
}

export default function Home() {
  const [collapsed, setCollapsed] = useState(false);

  return (
    <div className="min-h-screen bg-slate-950 text-white overflow-hidden">
      {/* 动态背景 */}
      <div className="fixed inset-0">
        <div className="absolute inset-0 bg-gradient-to-br from-slate-950 via-slate-900 to-slate-950" />
        <FloatingParticles />
        <GeometricDecorations />
        <div className="absolute inset-0 bg-gradient-to-t from-slate-950/80 via-transparent to-slate-950/80" />
      </div>

      <div className="relative flex min-h-screen">
        {/* Sidebar */}
        <aside
          className={`${collapsed ? "w-20" : "w-72"} glass-dark border-r border-white/5 flex flex-col transition-all duration-500 ease-out z-50`}
        >
          {/* Logo */}
          <div className="h-20 flex items-center justify-center border-b border-white/5">
            <motion.div
              className="flex items-center gap-3"
              initial={{ opacity: 0, x: -20 }}
              animate={{ opacity: 1, x: 0 }}
            >
              <motion.div
                className={`w-11 h-11 rounded-xl bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center shadow-2xl shadow-blue-500/30 ${
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
                  className="text-xl font-bold bg-gradient-to-r from-white to-slate-400 bg-clip-text text-transparent"
                >
                  Next Study
                </motion.span>
              )}
            </motion.div>
          </div>

          {/* Menu */}
          <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
            {menuItems.map((item) => (
              <Link
                key={item.key}
                href={item.path || "#"}
                className="group relative block"
              >
                <motion.div
                  className={`flex items-center gap-3 px-4 py-3 rounded-2xl transition-all duration-300 relative overflow-hidden
                    ${item.key === "1"
                      ? "bg-gradient-to-r from-blue-500/20 to-purple-500/20 border border-blue-500/30 text-white"
                      : "text-slate-400 hover:text-white hover:bg-white/5"
                    }`}
                  whileHover={{ x: 4 }}
                  whileTap={{ scale: 0.98 }}
                >
                  {item.key === "1" && (
                    <motion.div
                      className="absolute inset-0 bg-gradient-to-r from-blue-500/20 to-purple-500/20"
                      initial={false}
                      animate={{
                        opacity: [0.5, 0.8, 0.5]
                      }}
                      transition={{ duration: 3, repeat: Infinity }}
                    />
                  )}
                  <span className={`text-lg relative z-10 ${item.key === "1" ? "text-blue-400" : "group-hover:scale-110 transition-transform"}`}>
                    {item.icon}
                  </span>
                  {!collapsed && (
                    <span className="font-medium relative z-10">{item.label}</span>
                  )}
                  {!collapsed && item.badge && (
                    <span className="ml-auto relative z-10 px-2 py-0.5 text-xs bg-blue-500/30 text-blue-300 rounded-full">
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
            className="m-4 p-3 rounded-xl bg-white/5 text-slate-400 hover:text-white hover:bg-white/10 transition-colors border border-white/5"
          >
            <DashboardOutlined rotate={collapsed ? 180 : 0} className="text-xl" />
          </motion.button>

          {/* User Profile */}
          {!collapsed && (
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="p-4 m-4 rounded-2xl bg-gradient-to-br from-blue-500/10 to-purple-500/10 border border-white/5"
            >
              <div className="flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-br from-blue-500 to-purple-600 flex items-center justify-center">
                  <TeamOutlined />
                </div>
                <div className="flex-1 min-w-0">
                  <p className="text-sm font-semibold truncate">开发者</p>
                  <p className="text-xs text-slate-400 truncate">dev@example.com</p>
                </div>
              </div>
            </motion.div>
          )}
        </aside>

        {/* Main Content */}
        <main className="flex-1 overflow-auto">
          {/* Header */}
          <header className="sticky top-0 z-40 glass-dark border-b border-white/5">
            <div className="max-w-7xl mx-auto px-6 lg:px-8 h-20 flex items-center justify-between">
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                className="flex items-center gap-4"
              >
                <motion.div
                  className="w-12 h-12 rounded-2xl bg-gradient-to-br from-emerald-400 to-cyan-500 flex items-center justify-center shadow-xl shadow-emerald-500/20 neon-glow-green"
                  whileHover={{ rotate: 360 }}
                  transition={{ duration: 0.6 }}
                >
                  <ThunderboltOutlined className="text-white text-xl" />
                </motion.div>
                <div>
                  <h1 className="text-2xl font-bold text-white">
                    欢迎回来
                    <motion.span
                      animate={{ opacity: [1, 0.5, 1] }}
                      transition={{ duration: 2, repeat: Infinity }}
                      className="inline-block ml-2"
                    >
                      👋
                    </motion.span>
                  </h1>
                  <p className="text-slate-400">开启你的高效工作之旅</p>
                </div>
              </motion.div>

              <motion.button
                initial={{ opacity: 0, scale: 0.9 }}
                animate={{ opacity: 1, scale: 1 }}
                whileHover={{ scale: 1.05 }}
                whileTap={{ scale: 0.95 }}
                className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all neon-glow flex items-center gap-2"
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
                className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-blue-600/20 via-purple-600/20 to-pink-600/20 border border-white/10 p-8 lg:p-12"
              >
                <div className="absolute inset-0 bg-gradient-to-r from-blue-500/10 to-purple-500/10" />
                <motion.div
                  className="absolute -top-24 -right-24 w-48 h-48 bg-blue-500/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity }}
                />
                <motion.div
                  className="absolute -bottom-24 -left-24 w-48 h-48 bg-purple-500/20 rounded-full blur-3xl"
                  animate={{ scale: [1, 1.2, 1] }}
                  transition={{ duration: 4, repeat: Infinity, delay: 2 }}
                />

                <div className="relative z-10">
                  <motion.div
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: 0.2 }}
                    className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-blue-500/20 border border-blue-500/30 text-blue-300 text-sm mb-6"
                  >
                    <CrownOutlined />
                    <span>Pro 版本已激活</span>
                  </motion.div>

                  <h2 className="text-3xl lg:text-4xl font-bold mb-4">
                    下一代全栈开发
                    <span className="bg-gradient-to-r from-blue-400 via-purple-400 to-pink-400 bg-clip-text text-transparent">
                      {" "}体验
                    </span>
                  </h2>
                  <p className="text-slate-300 text-lg mb-8 max-w-2xl">
                    这是一个现代化的全栈练习项目，集成了最先进的技术栈，提供极致的开发体验。
                  </p>

                  <div className="flex flex-wrap gap-4">
                    <Link
                      href="/todos"
                      className="px-6 py-3 rounded-2xl bg-gradient-to-r from-blue-500 to-purple-600 text-white font-semibold shadow-xl shadow-blue-500/25 hover:shadow-blue-500/40 transition-all neon-glow flex items-center gap-2"
                    >
                      <CheckSquareOutlined />
                      立即体验
                    </Link>
                    <Link
                      href="/about"
                      className="px-6 py-3 rounded-2xl bg-white/5 border border-white/10 text-white font-semibold hover:bg-white/10 transition-all flex items-center gap-2"
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
                    whileHover={{ y: -5 }}
                    className="card-elegant-dark p-6 rounded-3xl relative overflow-hidden group"
                  >
                    <motion.div
                      className={`absolute inset-0 bg-gradient-to-br ${stat.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                    />
                    <div className="relative">
                      <p className="text-sm text-slate-400 mb-2">{stat.title}</p>
                      <p className="text-4xl font-bold text-white mb-4">{stat.value}</p>
                      <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${stat.gradient} flex items-center justify-center shadow-lg ${stat.glow}`}>
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
                    whileHover={{ scale: 1.05 }}
                    className="p-5 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all group"
                  >
                    <div className="w-12 h-12 rounded-xl bg-white/5 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform">
                      <span className="text-2xl text-blue-400">{feature.icon}</span>
                    </div>
                    <h3 className="font-semibold text-white mb-2">{feature.title}</h3>
                    <p className="text-sm text-slate-400">{feature.desc}</p>
                  </motion.div>
                ))}
              </motion.div>

              {/* Features */}
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.6 }}
                className="card-elegant-dark p-6 lg:p-8 rounded-3xl border border-white/5"
              >
                <div className="mb-8">
                  <h2 className="text-2xl font-bold text-white mb-2">核心功能</h2>
                  <p className="text-slate-400">探索我们提供的强大功能模块</p>
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-5">
                  {featureCards.map((card, index) => (
                    <Link key={index} href={card.path} className="group block">
                      <motion.div
                        whileHover={{ y: -8 }}
                        className="h-full p-6 rounded-3xl bg-white/5 border border-white/5 hover:border-white/10 transition-all relative overflow-hidden"
                      >
                        <motion.div
                          className={`absolute inset-0 bg-gradient-to-br ${card.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-500`}
                        />
                        <div className={`w-14 h-14 rounded-2xl bg-gradient-to-br ${card.iconBg} flex items-center justify-center mb-5 shadow-lg group-hover:scale-110 transition-transform`}>
                          <span className="text-white text-2xl">{card.icon}</span>
                        </div>
                        <h3 className="font-semibold text-white text-lg mb-3">{card.title}</h3>
                        <p className="text-sm text-slate-400 mb-5">{card.description}</p>
                        <span className="text-sm font-semibold text-blue-400 group-hover:text-blue-300 inline-flex items-center gap-2 group-hover:gap-3 transition-all">
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
                className="card-elegant-dark p-6 lg:p-8 rounded-3xl border border-white/5"
              >
                <div className="flex items-center justify-between mb-8 flex-wrap gap-4">
                  <div>
                    <h2 className="text-2xl font-bold text-white mb-2">技术栈</h2>
                    <p className="text-slate-400">采用业界领先的现代化技术</p>
                  </div>
                  <div className="flex gap-2">
                    <span className="px-4 py-2 rounded-xl bg-emerald-500/20 text-emerald-400 text-sm font-medium border border-emerald-500/20">
                      12+ 技术
                    </span>
                    <span className="px-4 py-2 rounded-xl bg-blue-500/20 text-blue-400 text-sm font-medium border border-blue-500/20">
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
                      className={`px-5 py-3 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-all flex items-center gap-2 group cursor-pointer`}
                    >
                      <span className="text-lg">{tech.icon}</span>
                      <span className={`font-medium ${tech.color}`}>{tech.name}</span>
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