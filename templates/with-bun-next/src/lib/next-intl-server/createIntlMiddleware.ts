import { NextRequest, NextResponse } from "next/server";
import type NextI18nConfig from "next-intl/dist/src/server/NextI18nConfig";
import NextIntlCookie from "next-intl/dist/src/server/NextIntlCookie";
import resolveLocale from "next-intl/dist/src/server/resolveLocale";

// If there's an exact match for this path, we'll add the locale to the URL
const REDIRECT_URL = "/";

function createIntlMiddleware(i18n: NextI18nConfig) {
  return function middleware(request: NextRequest) {
    // Ideally we could use the `headers()` and `cookies()` API here
    // as well, but they are currently not available in middleware.
    const locale = resolveLocale(
      i18n,
      request.headers,
      request.cookies,
      request.nextUrl.pathname
    );

    const isRedirect = request.nextUrl.pathname === REDIRECT_URL;

    const response = isRedirect
      ? NextResponse.rewrite(new URL(`${REDIRECT_URL}${locale}`, request.url))
      : NextResponse.next();

    new NextIntlCookie(response.cookies).setLocale(locale);

    return response;
  };
}

export default createIntlMiddleware;
