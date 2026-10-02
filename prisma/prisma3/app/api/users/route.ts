import { PrismaPg } from "@prisma/adapter-pg";
import { PrismaClient } from "@/app/generated/prisma/client";

const adapter = new PrismaPg({
  connectionString: process.env.DATABASE_URL,
});

const prisma = new PrismaClient({ adapter });

export async function POST() {
  const user = await prisma.user.create({
    data: {
      name: "Rana Khan",
      email: "rana@example.com",
      password: "123456",
    },
  });

  return Response.json(user);
}