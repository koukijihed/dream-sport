import createMiddleware from "next-intl/middleware";
import { locales, defaultLocale, localePrefix } from "./i18n/config";

const intlMiddleware = createMiddleware({
  locales,
  defaultLocale,
  localePrefix,
  pathnames: {
    "/": "/",
    "/about": "/about",
    "/activities": "/activities",
    "/planning": "/planning",
    "/coaches": "/coaches",
    "/subscriptions": "/subscriptions",
    "/gallery": "/gallery",
    "/promotions": "/promotions",
    "/news": "/news",
    "/reviews": "/reviews",
    "/registration": "/registration",
    "/contact": "/contact",
  },
});

export default intlMiddleware;

export const config = {
  matcher: [
    "/",
    "/(fr|ar)/:path*",
    "/((?!api|_next|_vercel|.*\\..*).*)",
  ],
};
