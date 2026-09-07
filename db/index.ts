import { drizzle } from "drizzle-orm/d1";
import * as schema from "./schema";

interface MockRecord {
  [key: string]: unknown;
}

export function getDb() {
  try {
    const cf = globalThis as unknown as { env?: { DB?: Parameters<typeof drizzle>[0] } };
    if (cf?.env?.DB) {
      return drizzle(cf.env.DB, { schema });
    }
  } catch {
    // Cloudflare workers environment not available
  }

  console.warn("[AI Studio] Database not connected — using mock");
  const noOp = {
    findMany: async () => [],
    findFirst: async () => null,
    findUnique: async () => null,
    create: async (d?: { data?: MockRecord }) => d?.data ?? {},
    update: async (d?: { data?: MockRecord }) => d?.data ?? {},
    delete: async () => ({}),
  };
  return new Proxy({}, {
    get: (_, prop) =>
      prop === "query"
        ? new Proxy({}, { get: () => noOp })
        : () => ({
            from: () => ({
              orderBy: () => ({
                limit: async () => [],
              }),
            }),
            values: () => ({
              returning: async () => [{}],
            }),
          }),
  }) as unknown as ReturnType<typeof drizzle>;
}


