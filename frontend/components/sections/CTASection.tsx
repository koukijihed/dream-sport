"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight } from "lucide-react";

const CTASection = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="py-16 lg:py-20 bg-primary-600">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-white mb-6">
          Prêt à commencer votre transformation ?
        </h2>
        <p className="text-lg text-primary-100 mb-8 max-w-3xl mx-auto">
          Rejoignez Dream Sport Manouba aujourd&apos;hui et atteignez vos objectifs avec nos coachs professionnels.
        </p>
        <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
          <Link
            href={`/${locale}/registration`}
            className="group inline-flex items-center px-8 py-4 border border-transparent text-lg font-medium rounded-md text-primary-600 bg-white hover:bg-gray-100 transition-all shadow-lg hover:scale-105"
          >
            {t("buttons.register")}
            <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-5 w-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
          </Link>
          <Link
            href={`/${locale}/contact`}
            className="inline-flex items-center px-8 py-4 border border-white text-lg font-medium rounded-md text-white bg-transparent hover:bg-white/10 transition-all"
          >
            {t("nav.contact")}
          </Link>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
