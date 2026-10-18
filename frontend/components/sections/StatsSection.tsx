"use client";

import { useTranslations } from "next-intl";
import { Users, Trophy, UserCheck, Award } from "lucide-react";

const StatsSection = () => {
  const t = useTranslations();

  const stats = [
    {
      icon: Users,
      value: "+500",
      label: t("stats.members"),
    },
    {
      icon: Trophy,
      value: "+10",
      label: t("stats.disciplines"),
    },
    {
      icon: UserCheck,
      value: "+15",
      label: t("stats.coaches"),
    },
    {
      icon: Award,
      value: "+5",
      label: t("stats.experience"),
    },
  ];

  return (
    <section className="py-12 bg-dark-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-8">
          {stats.map((stat, index) => (
            <div
              key={index}
              className="text-center group hover:scale-105 transition-transform"
            >
              <div className="flex justify-center mb-4">
                <div className="p-3 bg-primary-600/10 rounded-full group-hover:bg-primary-600/20 transition-colors">
                  <stat.icon className="h-8 w-8 text-primary-600" />
                </div>
              </div>
              <h3 className="text-3xl sm:text-4xl font-bold text-white mb-2">
                {stat.value}
              </h3>
              <p className="text-gray-400 font-medium">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default StatsSection;
