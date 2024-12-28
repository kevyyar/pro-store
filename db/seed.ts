import { prisma } from "./prisma";
import sampleData from "./sample-data";

async function seed() {
  // delete all products
  await prisma.product.deleteMany();

  // delete all accounts
  await prisma.account.deleteMany();

  // delete all sessions
  await prisma.session.deleteMany();

  // delete verification tokens
  await prisma.verificationToken.deleteMany();

  // delete all users
  await prisma.user.deleteMany();

  // create new products
  await prisma.product.createMany({
    data: sampleData.products,
  });

  // create new users
  await prisma.user.createMany({
    data: sampleData.users,
  });

  console.log("Seed completed");
}

seed();
