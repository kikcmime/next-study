# next-study

这是一个用于练习 Next.js 全栈技术的示例仓库（App Router + TypeScript + Tailwind + Prisma + NextAuth demo + SWR + React Hook Form + Framer Motion）。

快速开始
1. 克隆仓库
2. 安装依赖（使用 pnpm）:
   ```bash
   pnpm install
   ```
3. 运行 Prisma 迁移并 seed:
   ```bash
   npx prisma migrate dev --name init
   pnpm prisma:seed
   ```
4. 启动开发服务器:
   ```bash
   pnpm dev
   ```
默认 seed 会创建一个 demo 用户 alice@example.com / pass1234。

注意
- 这里的示例为了简洁演示使用了明文密码，仅用于学习和本地练习，生产环境请使用安全的密码哈希、邮箱验证以及真正的 OAuth 提供商。