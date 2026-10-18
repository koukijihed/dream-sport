"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import { ArrowLeft, Calendar, Clock, MapPin, Users } from "lucide-react";

type ActivityCategory = {
  id: string;
  name: string;
  icon: string;
  slug: string;
};

type Schedule = {
  id: string;
  day: string;
  startTime: string;
  endTime: string;
  coach: string;
  level: string;
  room: string;
  capacity: number;
};

const PlanningSection = () => {
  const t = useTranslations();
  const [selectedCategory, setSelectedCategory] = useState<string | null>(null);

  const categories: ActivityCategory[] = [
    { id: "taekwondo", name: t("activities.taekwondo"), icon: "🥋", slug: "taekwondo" },
    { id: "karate", name: t("activities.karate"), icon: "🥋", slug: "karate" },
    { id: "boxing", name: t("activities.boxing"), icon: "🥊", slug: "boxing" },
    { id: "kickboxing", name: t("activities.kickboxing"), icon: "🥊", slug: "kickboxing" },
    { id: "bodybuilding", name: t("activities.bodybuilding"), icon: "🏋️", slug: "bodybuilding" },
    { id: "fitness", name: t("activities.fitness"), icon: "🔥", slug: "fitness" },
    { id: "pilates", name: t("activities.pilates"), icon: "🧘", slug: "pilates" },
    { id: "trx", name: t("activities.trx"), icon: "💪", slug: "trx" },
    { id: "running", name: t("activities.running"), icon: "🏃", slug: "running" },
    { id: "hyrox", name: t("activities.hyrox"), icon: "🔥", slug: "hyrox" },
  ];

  // Données d'exemple (seront chargées depuis l'API/BDD)
  const mockSchedules: Record<string, Schedule[]> = {
    taekwondo: [
      {
        id: "1",
        day: "monday",
        startTime: "17:00",
        endTime: "18:00",
        coach: "Ahmed",
        level: "beginner",
        room: "Salle 1",
        capacity: 20,
      },
      {
        id: "2",
        day: "wednesday",
        startTime: "17:00",
        endTime: "18:00",
        coach: "Ahmed",
        level: "intermediate",
        room: "Salle 1",
        capacity: 15,
      },
      {
        id: "3",
        day: "saturday",
        startTime: "10:00",
        endTime: "11:30",
        coach: "Ahmed",
        level: "allLevels",
        room: "Salle 1",
        capacity: 20,
      },
    ],
    boxing: [
      {
        id: "4",
        day: "tuesday",
        startTime: "18:00",
        endTime: "19:00",
        coach: "Karim",
        level: "allLevels",
        room: "Salle 2",
        capacity: 12,
      },
      {
        id: "5",
        day: "thursday",
        startTime: "18:00",
        endTime: "19:00",
        coach: "Karim",
        level: "intermediate",
        room: "Salle 2",
        capacity: 12,
      },
    ],
    bodybuilding: [
      {
        id: "6",
        day: "monday",
        startTime: "06:00",
        endTime: "22:00",
        coach: "Team",
        level: "allLevels",
        room: "Salle Muscu",
        capacity: 50,
      },
    ],
  };

  const getDayLabel = (day: string) => {
    const days: Record<string, string> = {
      monday: t("planning.monday"),
      tuesday: t("planning.tuesday"),
      wednesday: t("planning.wednesday"),
      thursday: t("planning.thursday"),
      friday: t("planning.friday"),
      saturday: t("planning.saturday"),
      sunday: t("planning.sunday"),
    };
    return days[day] || day;
  };

  const getLevelLabel = (level: string) => {
    const levels: Record<string, string> = {
      beginner: t("activities.beginner"),
      intermediate: t("activities.intermediate"),
      advanced: t("activities.advanced"),
      allLevels: t("activities.allLevels"),
    };
    return levels[level] || level;
  };

  const schedules = selectedCategory ? mockSchedules[selectedCategory] || [] : [];

  return (
    <section className="py-16 lg:py-24 bg-gray-50 min-h-[70vh]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {!selectedCategory ? (
          <>
            {/* Categories View */}
            <div className="text-center mb-12">
              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
                {t("planning.title")}
              </h1>
              <p className="text-lg text-gray-600 max-w-3xl mx-auto">
                {t("planning.subtitle")}
              </p>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {categories.map((category) => (
                <button
                  key={category.id}
                  onClick={() => setSelectedCategory(category.id)}
                  className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all p-8 border border-gray-100 hover:border-primary-200 flex flex-col items-center justify-center text-center"
                >
                  <span className="text-5xl mb-4 group-hover:scale-110 transition-transform">
                    {category.icon}
                  </span>
                  <h3 className="text-lg font-bold text-gray-900 group-hover:text-primary-600 transition-colors">
                    {category.name}
                  </h3>
                </button>
              ))}
            </div>
          </>
        ) : (
          <>
            {/* Schedules View */}
            <div className="mb-8">
              <button
                onClick={() => setSelectedCategory(null)}
                className="inline-flex items-center text-primary-600 hover:text-primary-700 font-medium mb-6 group"
              >
                <ArrowLeft className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2 group-hover:-translate-x-1 rtl:group-hover:translate-x-1 transition-transform" />
                {t("buttons.backToActivities")}
              </button>

              <h1 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-2">
                {categories.find((c) => c.id === selectedCategory)?.name}
              </h1>
              <p className="text-lg text-gray-600">{t("planning.selectCategory")}</p>
            </div>

            {schedules.length > 0 ? (
              <div className="bg-white rounded-xl shadow-sm border border-gray-200 overflow-hidden">
                <div className="overflow-x-auto">
                  <table className="min-w-full divide-y divide-gray-200">
                    <thead className="bg-gray-50">
                      <tr>
                        <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t("planning.day")}
                        </th>
                        <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t("planning.schedule")}
                        </th>
                        <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t("planning.coach")}
                        </th>
                        <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t("planning.level")}
                        </th>
                        <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t("planning.room")}
                        </th>
                        <th className="px-6 py-3 text-left rtl:text-right text-xs font-medium text-gray-500 uppercase tracking-wider">
                          {t("planning.capacity")}
                        </th>
                      </tr>
                    </thead>
                    <tbody className="bg-white divide-y divide-gray-200">
                      {schedules.map((schedule) => (
                        <tr key={schedule.id} className="hover:bg-gray-50 transition-colors">
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Calendar className="h-4 w-4 text-gray-400 mr-2 rtl:mr-0 rtl:ml-2" />
                              <span className="text-sm font-medium text-gray-900">
                                {getDayLabel(schedule.day)}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Clock className="h-4 w-4 text-gray-400 mr-2 rtl:mr-0 rtl:ml-2" />
                              <span className="text-sm text-gray-900">
                                {schedule.startTime} – {schedule.endTime}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap text-sm text-gray-900">
                            {schedule.coach}
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <span className="inline-flex px-2 py-1 text-xs font-semibold rounded-full bg-primary-100 text-primary-800">
                              {getLevelLabel(schedule.level)}
                            </span>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <MapPin className="h-4 w-4 text-gray-400 mr-2 rtl:mr-0 rtl:ml-2" />
                              <span className="text-sm text-gray-900">
                                {schedule.room}
                              </span>
                            </div>
                          </td>
                          <td className="px-6 py-4 whitespace-nowrap">
                            <div className="flex items-center">
                              <Users className="h-4 w-4 text-gray-400 mr-2 rtl:mr-0 rtl:ml-2" />
                              <span className="text-sm text-gray-900">
                                {schedule.capacity}
                              </span>
                            </div>
                          </td>
                        </tr>
                      ))}
                    </tbody>
                  </table>
                </div>
              </div>
            ) : (
              <div className="text-center py-12 bg-white rounded-xl border border-gray-200">
                <Calendar className="h-12 w-12 text-gray-400 mx-auto mb-4" />
                <p className="text-gray-600">{t("planning.noClasses")}</p>
              </div>
            )}
          </>
        )}
      </div>
    </section>
  );
};

export default PlanningSection;
