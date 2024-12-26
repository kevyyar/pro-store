const APP_NAME = process.env.NEXT_PUBLIC_APP_NAME || "Pro Store";
const APP_DESCRIPTION =
  process.env.NEXT_PUBLIC_APP_DESCRIPTION ||
  "A modern e-commerce store built with Next.js 15";
const SERVER_URL =
  process.env.NEXT_PUBLIC_SERVER_URL || "http://localhost:3000";

export { APP_DESCRIPTION, APP_NAME, SERVER_URL };
