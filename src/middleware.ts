import { NextResponse } from 'next/server'
import type { MiddlewareConfig, NextRequest } from 'next/server'
import { auth } from '../auth'

export async function middleware(request: NextRequest) {
  const session = await auth()
  const isLoggedIn = !!session?.user
  const isLoginPage = request.nextUrl.pathname === '/login'

  if (!isLoggedIn && !isLoginPage) {
    const loginUrl = new URL('/login', request.url)
    return NextResponse.redirect(loginUrl)
  }

  if (isLoggedIn && isLoginPage) {
    return NextResponse.redirect(new URL('/', request.url))
  }

  return NextResponse.next()
}

export const config: MiddlewareConfig = {
  matcher: ['/((?!api|_next|static|favicon.ico|auth|.*\\..*).*)'],
}
