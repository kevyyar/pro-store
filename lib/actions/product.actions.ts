"use server";

import { prisma } from "@/db/prisma";
import { LATEST_PRODUCTS_LIMIT } from "../constants";
import { convertToRegularObject } from "../utils";

// get latest products
export const getLatestProducts = async () => {
  const products = await prisma.product.findMany({
    take: LATEST_PRODUCTS_LIMIT,
    orderBy: {
      createdAt: "desc",
    },
  });
  return convertToRegularObject(products);
};

// get product by slug
export const getProductBySlug = async (slug: string) => {
  return await prisma.product.findUnique({
    where: {
      slug,
    },
  });
};
