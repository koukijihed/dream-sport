"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Image from "next/image";
import Link from "next/link";
import { ArrowRight, Target, Trophy, Users, Heart } from "lucide-react";

const AboutSection = () => {
  const t = useTranslations();
  const locale = useLocale();

  const features = [
    {
      icon: Target,
      title: t("about.goals"),
      description: "Des objectifs personnalisés pour chaque membre",
    },
    {
      icon: Trophy,
      title: t("about.philosophy"),
      description: "Performance, discipline et dépassement de soi",
    },
    {
      icon: Users,
      title: t("about.support"),
      description: "Accompagnement professionnel et bienveillant",
    },
    {
      icon: Heart,
      title: t("about.atmosphere"),
      description: "Une ambiance motivante et familiale",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
          {/* Content */}
          <div className="animate-slide-up">
            <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-6">
              {t("about.title")}
            </h2>
            <p className="text-lg text-gray-600 leading-relaxed mb-8">
              {t("about.description")}
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-6 mb-8">
              {features.map((feature, index) => (
                <div key={index} className="flex items-start space-x-3 rtl:space-x-reverse">
                  <div className="flex-shrink-0 p-2 bg-primary-100 rounded-lg">
                    <feature.icon className="h-6 w-6 text-primary-600" />
                  </div>
                  <div>
                    <h3 className="font-semibold text-gray-900 mb-1">
                      {feature.title}
                    </h3>
                    <p className="text-sm text-gray-600">
                      {feature.description}
                    </p>
                  </div>
                </div>
              ))}
            </div>

            <Link
              href={`/${locale}/about`}
              className="group inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20 hover:shadow-primary-600/30"
            >
              {t("buttons.discoverDreamSport")}
              <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-5 w-5 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
            </Link>
          </div>

          {/* Image */}
          <div className="relative">
            <div className="relative aspect-[4/5] rounded-2xl overflow-hidden shadow-2xl">
              <Image
                src="https://images.unsplash.com/photo-1546483875-ad9014c88eba?q=80&w=2082&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
                alt="Dream Sport Manouba - Salle de sport"
                fill
                className="object-cover"
                sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 600px"
                priority
              />
            </div>
            <div className="absolute -bottom-6 -left-6 rtl:-right-6 rtl:left-auto bg-white p-6 rounded-xl shadow-xl border border-gray-100">
              <p className="text-4xl font-bold text-primary-600">+5</p>
              <p className="text-sm text-gray-600">{t("stats.experience")}</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
