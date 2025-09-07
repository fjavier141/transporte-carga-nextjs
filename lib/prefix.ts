// /lib/prefix.ts
export const prefix =
  process.env.NEXT_PUBLIC_BASE_PATH ? `/${process.env.NEXT_PUBLIC_BASE_PATH}` : "";
