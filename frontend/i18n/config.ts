import { Pathnames } from "next-intl/navigation";

export const locales = ["fr", "ar"] as const;
export const defaultLocale = "fr" as const;

export type Locale = (typeof locales)[number];

export const pathnames = {
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
  "/admin": "/admin",
  "/admin/login": "/admin/login",
} satisfies Pathnames<typeof locales>;

export const localePrefix = "always" as const;
