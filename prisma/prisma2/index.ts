import "dotenv/config";
import postgres from "@prisma/orm-postgres/runtime";
import contractJson from "./prisma/contract.json" with { type: "json" };
import type { Contract } from "./prisma/contract.d.js";

const db = postgres<Contract>({
  contractJson,
  url: process.env["DATABASE_URL"]!,
});

async function main() {
  // Start from an empty table so you can run this file more than once.
  await db.orm.public.User.where({}).deleteAll();

  // Write: insert one row.
  const alice = await db.orm.public.User.create({
    email: "alice@prisma.io",
    name: "Alice",
  });
  console.log("Created:", alice);

  // Update: change one row, picked by its primary key.
  const renamed = await db.orm.public.User
    .where({ id: alice.id })
    .update({ name: "Alice Smith" });
  console.log("Updated:", renamed);

  // Read: fetch every row.
  const users = await db.orm.public.User.all();
  console.log("All users:", users);

  await db.close();
}

main().catch((error) => {
  console.error(error);
  process.exit(1);
});