import { redis } from '@/lib/redis'
import { procedure } from '@/lib/trpc'

export const rankRouter = {
  rank: procedure.query(async () => {
    const today = new Date().toISOString().split('T')[0]

    const rank = (await redis.zrange(`rank:${today}`, 0, 9, {
      withScores: true,
    })) as [string, string][]

    // Returns: [{ userId: "abc", attempts: 2 }, ...]
    return rank.map(([userId, attempts]) => ({
      userId,
      attempts: Number(attempts),
    }))
  }),
}
