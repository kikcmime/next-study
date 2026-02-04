import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function POST(request: Request) {
  const { email, password } = await request.json();
  const user = await prisma.user.findUnique({ where: { email } });
  if (!user) {
    // create demo user
    const u = await prisma.user.create({
      data: { email, password, name: email.split("@")[0] }
    });
    return NextResponse.json({ ok: true, user: { id: u.id, email: u.email } });
  }
  if (user.password !== password) {
    return NextResponse.json({ ok: false, error: "Invalid credentials" }, { status: 401 });
  }
  return NextResponse.json({ ok: true, user: { id: user.id, email: user.email } });
}