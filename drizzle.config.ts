import type { Config } from 'drizzle-kit'

export default {
  schema: './src/drizzle/schema.ts',
  out: './src/drizzle/migrations',
  dialect: 'postgresql',
  dbCredentials: {
    url: process.env.POSTGRES_URL as string,
  },
} satisfies Config
