import { db } from '@/lib/drizzle'
import { DrizzleAdapter } from '@auth/drizzle-adapter'
import type { NextAuthConfig } from 'next-auth'
import GitHub from 'next-auth/providers/github'
import Google from 'next-auth/providers/google'

export const authConfig = {
  trustHost: true,
  adapter: DrizzleAdapter(db),
  pages: {
    signIn: '/login',
  },
  providers: [
    GitHub({
      clientId: process.env.GITHUB_CLIENT_ID as string,
      clientSecret: process.env.GITHUB_CLIENT_SECRET as string,
    }),
    Google({
      clientId: process.env.GOOGLE_CLIENT_ID as string,
      clientSecret: process.env.GOOGLE_CLIENT_SECRET as string,
    }),
  ],
  callbacks: {
    authorized({ auth, request: { nextUrl } }) {
      console.log('authorized', { auth, nextUrl })
      const isLoggedIn = !!auth?.user
      const isLoginPage = nextUrl.pathname === '/login'

      if (!isLoggedIn && !isLoginPage) {
        return false // Redireciona para login
      }

      if (isLoggedIn && isLoginPage) {
        return Response.redirect(new URL('/', nextUrl)) // Redireciona para home
      }

      return true
    },
  },
} satisfies NextAuthConfig
