import { NextResponse } from "next/server";
import { prisma } from "../../../../lib/prisma";

export async function PATCH(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  const body = await request.json();
  const todo = await prisma.todo.update({
    where: { id },
    data: {
      ...(body.completed !== undefined && { completed: body.completed }),
      ...(body.title !== undefined && { title: body.title })
    }
  });
  return NextResponse.json(todo);
}

export async function DELETE(request: Request, { params }: { params: { id: string } }) {
  const id = Number(params.id);
  await prisma.todo.delete({ where: { id } });
  return NextResponse.json({ ok: true });
}