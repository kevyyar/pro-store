import { PrismaClient } from "@prisma/client";
import sampleData from "./sample-data";

const prisma = new PrismaClient();

async function seed() {
  // delete all products
  await prisma.product.deleteMany();

  // create new products
  await prisma.product.createMany({
    data: sampleData.products,
  });

  console.log("Seed completed");
}

seed();
