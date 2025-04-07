import { dbFirebase } from '@/lib/firebase-admin'
import { procedure } from '@/lib/trpc'
import { z } from 'zod'

export const guessRouter = {
  getGuesses: procedure
    .input(z.object({ userId: z.string() }))
    .query(async ({ input }) => {
      const snapshot = await dbFirebase
        .collection('guesses')
        .where('userId', '==', input.userId)
        .orderBy('createdAt', 'desc')
        .get()

      return snapshot.docs.map(doc => ({
        id: doc.id,
        ...doc.data(),
      }))
    }),

  addGuess: procedure
    .input(z.object({ userId: z.string(), value: z.string() }))
    .mutation(async ({ input }) => {
      const doc = await dbFirebase.collection('guesses').add({
        ...input,
        createdAt: new Date().toISOString(),
      })

      const saved = await doc.get()
      return { id: saved.id, ...saved.data() }
    }),
}
