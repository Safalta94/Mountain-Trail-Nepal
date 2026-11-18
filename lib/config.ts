export const BASE_URL = (
  process.env.NEXT_PUBLIC_BASE_URL ?? "https://mountain-trail-nepal.com/"
).replace(/\/+$/, "");

export const API_BASE_URL = (
  process.env.API_BASE_URL ?? `${BASE_URL}/wp-json/site/v1`
).replace(/\/+$/, "");
