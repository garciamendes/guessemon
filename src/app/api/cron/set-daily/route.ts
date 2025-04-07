import { dailyPokemon } from '@/drizzle/schema'
import { db } from '@/lib/drizzle'
import { eq } from 'drizzle-orm'
import { NextResponse } from 'next/server'

export async function GET() {
  const today = new Date().toISOString().split('T')[0]

  const existing = await db.query.dailyPokemon.findFirst({
    where: eq(dailyPokemon.date, today),
  })

  if (existing) {
    return NextResponse.json({ message: 'Pokémon do dia já definido.' })
  }

  const id = Math.floor(Math.random() * 1025) + 1
  const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${id}`)
  const data = await response.json()

  const name = data.name
  const height = data.height
  const type = data.types[0].type.name
  const ability = data.abilities[0].ability.name

  await db.insert(dailyPokemon).values({
    date: today,
    name,
    height,
    type,
    ability,
  })

  return NextResponse.json({ message: `Pokémon do dia é ${name}` })
}
