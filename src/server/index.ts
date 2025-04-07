import { router } from '@/lib/trpc'
import { guessRouter } from '@/trpc/guess'
import { pokemonRouter } from '@/trpc/pokemon'
import { rankRouter } from '@/trpc/rank'

const appRouter = router({
  ...guessRouter,
  ...pokemonRouter,
  ...rankRouter,
})

// Export type router type signature,
// NOT the router itself.
export type AppRouter = typeof appRouter

export const serveClient = appRouter.createCaller({})
