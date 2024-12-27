const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Pro Store";
const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A modern e-commerce store built with Next.js 15";
const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";
const LATEST_PRODUCTS_LIMIT =
  Number(process.env.NEXT_PUBLIC_LATEST_PRODUCTS_LIMIT) || 4;

export { APP_DESCRIPTION, APP_NAME, LATEST_PRODUCTS_LIMIT, SERVER_URL };
