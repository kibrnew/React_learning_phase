import { useSession } from 'next-auth/react';
import type { NextRequest } from 'next/server';
import { NextResponse } from 'next/server';

export function middleware(request: NextRequest) {
    const currentUser = request.cookies.get('currentUser')?.value;
    console.log("this" , currentUser)
    if (!currentUser && request.nextUrl.pathname.startsWith('/listing')) {
       console.log("not  access now")
        return NextResponse.redirect(new URL('/auth/signin', request.url));
    }
  
    return NextResponse.next();
}
