import { NextResponse } from "next/server";
import type { NextRequest } from "next/server";

export const config = {
  matcher: [
    /**
     * Match home page
     */
    "/",

    /*
     * Match all request paths except for the ones starting with:
     *
     * - api (API routes)
     * - _next/static (static files)
     * - _next/image (image optimization files)
     * - favicon.ico (favicon file)
     */
    "/((?!api|_next/static|_next/image|assets|\\[|favicon.ico|.*woff|.*eot|.*otf|.*ttf).*)",
  ],
};

function localePathMiddleware(req: NextRequest) {
  const lang = req.cookies.get("NEXT_LOCALE")?.value || "en";
  req.nextUrl.pathname = `/${lang}${req.nextUrl.pathname}`;
}

export default function middleware(req: NextRequest) {
  // rewrite /.* to /lang/.*
  if (process.env.__NEXT_I18N_SUPPORT) localePathMiddleware(req);

  return NextResponse.rewrite(req.nextUrl);
}
