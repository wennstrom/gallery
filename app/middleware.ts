import { type NextRequest } from 'next/server'
import { updateSession } from '@/lib/supabase/middleware'
import { createClient } from '@/lib/supabase/server'
import { redirect } from 'next/navigation'

// routes that require authentication
const protectedRoutes = ["/" ]

export async function middleware(request: NextRequest) {
  // check if route is protected
  const path = request.nextUrl.pathname;
  const isProtectedRoute = protectedRoutes.includes(path);

  // get user
  const client = await createClient();
  const { data, error } = await client.auth.getSession()

  if (error) {
    redirect('/error')
  }

  // redirect if unauthenticated
  if (isProtectedRoute && !data.session?.user) {
    redirect('/login')
  }

  // update session
  return await updateSession(request)
}

export const config = {
  matcher: [
    /*
     * Match all request paths except for the ones starting with:
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     * Feel free to modify this pattern to include more paths.
     */
    '/((?!_next/static|_next/image|favicon.ico|.*\\.(?:svg|png|jpg|jpeg|gif|webp)$).*)',
  ],
}