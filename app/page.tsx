"use client";
import Link from "next/link";
import { motion } from "framer-motion";

export default function Home() {
  return (
    <main>
      <motion.h1
        initial={{ opacity: 0, y: -8 }}
        animate={{ opacity: 1, y: 0 }}
        className="text-3xl font-bold mb-4"
      >
        next-study — 前端练习合集
      </motion.h1>

      <p className="mb-6 text-slate-700">
        包含：Tailwind、Prisma+SQLite、NextAuth（Credentials）、SWR、React Hook Form、Framer Motion 示例。
      </p>

      <ul className="space-y-2">
        <li>
          <Link className="text-blue-600 underline" href="/todos">
            Todos (CRUD & Prisma)
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 underline" href="/auth">
            Auth Demo (NextAuth Credentials)
          </Link>
        </li>
        <li>
          <Link className="text-blue-600 underline" href="/components">
            组件库 Demo（Button / Card / Modal）
          </Link>
        </li>
      </ul>
    </main>
  );
}