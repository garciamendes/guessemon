import { dailyPokemon } from '@/drizzle/schema'
import { db } from '@/lib/drizzle'
import { redis } from '@/lib/redis'
import { procedure } from '@/lib/trpc'
import { eq } from 'drizzle-orm'
import { z } from 'zod'

export const pokemonRouter = {
  guess: procedure
    .input(z.object({ name: z.string(), userId: z.string() }))
    .mutation(async ({ input }) => {
      const today = new Date().toISOString().split('T')[0]
      const result = await db
        .select()
        .from(dailyPokemon)
        .where(eq(dailyPokemon.date, today))
      const target = result[0]

      const key = `guess:${input.userId}:${today}`
      const attempts = Number(await redis.get(key)) || 0
      const isCorrect =
        input.name.toLowerCase().trim() === target.name.toLowerCase().trim()

      await redis.set(key, attempts + 1)

      if (isCorrect) {
        // Grava score no ranking
        await redis.zadd(`rank:${today}`, {
          score: attempts + 1,
          member: input.userId,
        })
      }

      return {
        correct: isCorrect,
        hints: isCorrect
          ? null
          : {
              height: target.height,
              type: target.type,
              ability: target.ability,
            },
      }
    }),
}
