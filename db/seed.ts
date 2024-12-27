import { prisma } from "./prisma";
import sampleData from "./sample-data";

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
