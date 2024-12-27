"use server";

import { PrismaClient } from "@prisma/client";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { convertToRegularObject } from "../utils";

const prisma = new PrismaClient();

export const getLatestProducts = async () => {
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });
  return convertToRegularObject(products);
};
