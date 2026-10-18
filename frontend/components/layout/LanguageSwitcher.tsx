"use client";

import { useLocale, useTranslations } from "next-intl";
import { usePathname, useRouter } from "@/i18n/routing";

const LanguageSwitcher = () => {
  const t = useTranslations();
  const locale = useLocale();
  const pathname = usePathname();
  const router = useRouter();

  const switchLanguage = (newLocale: "fr" | "ar") => {
    if (newLocale === locale) return;
    router.replace(pathname, { locale: newLocale });
  };

  return (
    <div className="flex items-center space-x-1 rtl:space-x-reverse bg-gray-800 rounded-lg p-1">
      <button
        onClick={() => switchLanguage("fr")}
        className={`px-2 py-1 text-xs md:text-sm font-medium rounded-md transition-colors ${
          locale === "fr"
            ? "bg-primary-600 text-white"
            : "text-gray-300 hover:text-white"
        }`}
        aria-label={t("common.fr")}
      >
        FR
      </button>
      <button
        onClick={() => switchLanguage("ar")}
        className={`px-2 py-1 text-xs md:text-sm font-medium rounded-md transition-colors ${
          locale === "ar"
            ? "bg-primary-600 text-white"
            : "text-gray-300 hover:text-white"
        }`}
        aria-label={t("common.ar")}
        dir="rtl"
      >
        العربية
      </button>
    </div>
  );
};

export default LanguageSwitcher;
