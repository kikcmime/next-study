import { PrismaClient } from "@prisma/client";

const prisma = new PrismaClient();

async function main() {
  // Demo user (password stored in plaintext for demo purposes only)
  const alice = await prisma.user.upsert({
    where: { email: "alice@example.com" },
    update: {},
    create: {
      name: "Alice",
      email: "alice@example.com",
      password: "pass1234"
    }
  });

  await prisma.todo.createMany({
    data: [
      { title: "学习 Next.js App Router", authorId: alice.id },
      { title: "练习 Tailwind 布局", completed: true, authorId: alice.id }
    ]
  });

  console.log("Seed finished.");
}

main()
  .catch((e) => {
    console.error(e);
    process.exit(1);
  })
  .finally(async () => {
    await prisma.$disconnect();
  });