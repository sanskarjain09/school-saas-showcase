import { NextResponse, type NextRequest } from "next/server";

/**
 * ⚠️ STARTER TEMPLATE — not yet enforcing anything.
 *
 * Once real auth is wired up (NextAuth, Clerk, Supabase, custom JWT, etc.):
 * 1. Read the session/token from cookies or headers.
 * 2. If missing/invalid and the path starts with /admin (excluding /admin/login),
 *    redirect to /admin/login.
 *
 * Example:
 *
 * export function middleware(request: NextRequest) {
 *   const isAdminRoute = request.nextUrl.pathname.startsWith("/admin");
 *   const isLoginRoute = request.nextUrl.pathname === "/admin/login";
 *   const session = request.cookies.get("session_token");
 *
 *   if (isAdminRoute && !isLoginRoute && !session) {
 *     const loginUrl = new URL("/admin/login", request.url);
 *     return NextResponse.redirect(loginUrl);
 *   }
 *
 *   return NextResponse.next();
 * }
 */
export function middleware(request: NextRequest) {
  return NextResponse.next();
}

export const config = {
  matcher: ["/admin/:path*"],
};
