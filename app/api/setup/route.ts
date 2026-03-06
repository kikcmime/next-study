import { NextResponse } from "next/server";
import { prisma } from "../../../lib/prisma";

export async function GET() {
  try {

    // 创建 User 表
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "User" (
        "id" SERIAL PRIMARY KEY,
        "name" TEXT,
        "email" TEXT,
        "password" TEXT NOT NULL,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // 创建 Todo 表
    await prisma.$executeRaw`
      CREATE TABLE IF NOT EXISTS "Todo" (
        "id" SERIAL PRIMARY KEY,
        "title" TEXT NOT NULL,
        "completed" BOOLEAN NOT NULL DEFAULT false,
        "authorId" INTEGER,
        "createdAt" TIMESTAMP(3) NOT NULL DEFAULT CURRENT_TIMESTAMP
      )
    `;

    // 创建唯一索引
    await prisma.$executeRaw`
      CREATE UNIQUE INDEX IF NOT EXISTS "User_email_key" ON "User"("email")
    `;

    // 添加外键约束
    await prisma.$executeRaw`
      DO $$
      BEGIN
        IF NOT EXISTS (
          SELECT 1 FROM information_schema.table_constraints
          WHERE constraint_name = 'Todo_authorId_fkey'
        ) THEN
          ALTER TABLE "Todo" ADD CONSTRAINT "Todo_authorId_fkey"
          FOREIGN KEY ("authorId") REFERENCES "User"("id")
          ON DELETE SET NULL ON UPDATE CASCADE;
        END IF;
      END $$
    `;

    return NextResponse.json({ success: true, message: "数据库表创建成功" });
  } catch (error) {
    console.error(error);
    return NextResponse.json(
      { success: false, error: String(error) },
      { status: 500 }
    );
  }
}