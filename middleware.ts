
import { NextResponse } from 'next/server';
import type { NextRequest } from 'next/server';

export function middleware(request: NextRequest) {
  if (request.nextUrl.pathname === '/clinic') {
    return NextResponse.redirect(new URL('/', request.url), 308); // 👈 308 Permanent
  }

  return NextResponse.next();
}

// 👇 This config tells Next.js to apply this middleware only to "/clinic"
export const config = {
    matcher: ['/clinic'],
  };