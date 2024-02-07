import type {Config} from "drizzle-kit"
import * as dotenv from "dotenv"

dotenv.config({path: ".env.local"})

if (!process.env.POSTGRES_URL) throw new Error("DATABASE_URL is not set");

export default {
    schema: "./lib/schema.ts",
    out: "./drizzle",
    driver: "pg",
    dbCredentials: {
      connectionString: process.env.POSTGRES_URL,
    },
    verbose: true,
    strict: true
  } satisfies Config;