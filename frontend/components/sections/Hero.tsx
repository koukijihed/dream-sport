"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { ArrowRight, Calendar } from "lucide-react";

const Hero = () => {
  const t = useTranslations();
  const locale = useLocale();

  return (
    <section className="relative h-[85vh] min-h-[600px] flex items-center justify-center overflow-hidden bg-dark-900">
      {/* Background Image Overlay */}
      <div className="absolute inset-0 bg-[url('https://images.unsplash.com/photo-1571902943202-507ec2618e8f?q=80&w=1975&auto=format&fit=crop')] bg-cover bg-center bg-no-repeat">
        <div className="absolute inset-0 bg-hero-gradient" />
      </div>

      {/* Content */}
      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
        <div className="animate-fade-in">
          <h1 className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl font-bold text-white mb-6 tracking-tight">
            {t("hero.title")}
          </h1>

          <div className="space-y-2 mb-8">
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light">
              {t("hero.tagline1")}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-gray-200 font-light">
              {t("hero.tagline2")}
            </p>
            <p className="text-xl sm:text-2xl md:text-3xl text-primary-500 font-semibold">
              {t("hero.tagline3")}
            </p>
          </div>

          <p className="text-base sm:text-lg md:text-xl text-gray-300 mb-10 max-w-3xl mx-auto">
            {t("hero.subtitle")}
          </p>

          <div className="flex flex-col sm:flex-row items-center justify-center gap-4">
            <Link
              href={`/${locale}/activities`}
              className="group inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 border border-transparent text-base sm:text-lg font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/30 hover:shadow-primary-600/50 hover:scale-105"
            >
              {t("buttons.discoverActivities")}
              <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-5 w-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>

            <Link
              href={`/${locale}/planning`}
              className="group inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 border border-white/30 text-base sm:text-lg font-medium rounded-md text-white bg-white/10 backdrop-blur-sm hover:bg-white/20 transition-all"
            >
              <Calendar className="mr-2 rtl:mr-0 rtl:ml-2 h-5 w-5" />
              {t("buttons.seePlanning")}
            </Link>

            <Link
              href={`/${locale}/registration`}
              className="group inline-flex items-center px-6 py-3 sm:px-8 sm:py-4 border border-primary-600 text-base sm:text-lg font-medium rounded-md text-primary-600 bg-transparent hover:bg-primary-600 hover:text-white transition-all"
            >
              {t("buttons.register")}
            </Link>
          </div>
        </div>
      </div>

      {/* Scroll Indicator */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-white/30 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-white/60 rounded-full mt-2 animate-pulse-slow" />
        </div>
      </div>
    </section>
  );
};

export default Hero;
