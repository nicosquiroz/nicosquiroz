import { NextResponse } from 'next/server'

export function middleware() {
  return new NextResponse(null, { status: 410 })
}

export const config = {
  matcher: [
    '/learning/:path*',
    '/projects/:path*',
    '/process/:path*',
    '/design/:path*',
  ],
}
