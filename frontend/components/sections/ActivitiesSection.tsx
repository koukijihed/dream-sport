"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, Swords, Hand, Dumbbell, Heart, Zap, Activity, PersonStanding } from "lucide-react";

const ActivitiesSection = () => {
  const t = useTranslations();
  const locale = useLocale();

  const activities = [
    {
      icon: Swords,
      name: t("activities.taekwondo"),
      description: "Art martial coréen alliant technique, discipline et respect.",
      image: "https://images.unsplash.com/photo-1605001011156-cbf0b0f67a51?q=80&w=1974&auto=format&fit=crop",
      slug: "taekwondo",
    },
    {
      icon: Swords,
      name: t("activities.karate"),
      description: "Développez votre force mentale et physique.",
      image: "https://images.unsplash.com/photo-1541534741688-6078c6bfb5c5?q=80&w=2069&auto=format&fit=crop",
      slug: "karate",
    },
    {
      icon: Hand,
      name: t("activities.boxing"),
      description: "Cardio intense et technique de frappe.",
      image: "https://images.unsplash.com/photo-1632267534642-b1a6506f3c7e?q=80&w=2070&auto=format&fit=crop",
      slug: "boxing",
    },
    {
      icon: Hand,
      name: t("activities.kickboxing"),
      description: "Puissance, agilité et endurance.",
      image: "https://images.unsplash.com/photo-1584466977773-e625c37cdd50?q=80&w=1974&auto=format&fit=crop",
      slug: "kickboxing",
    },
    {
      icon: Dumbbell,
      name: t("activities.bodybuilding"),
      description: "Développez votre force et votre musculature.",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
      slug: "bodybuilding",
    },
    {
      icon: Zap,
      name: t("activities.fitness"),
      description: "Séances dynamiques pour tous les niveaux.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
      slug: "fitness",
    },
    {
      icon: Heart,
      name: t("activities.pilates"),
      description: "Renforcez votre corps et améliorez votre posture.",
      image: "https://images.unsplash.com/photo-1518611012118-696072aa579a?q=80&w=2070&auto=format&fit=crop",
      slug: "pilates",
    },
    {
      icon: Activity,
      name: t("activities.trx"),
      description: "Entraînement en suspension fonctionnel.",
      image: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop",
      slug: "trx",
    },
    {
      icon: PersonStanding,
      name: t("activities.running"),
      description: "Améliorez votre endurance et votre cardio.",
      image: "https://images.unsplash.com/photo-1476480862126-209bfaa8edc8?q=80&w=2070&auto=format&fit=crop",
      slug: "running",
    },
    {
      icon: Zap,
      name: t("activities.hyrox"),
      description: "Compétition de fitness fonctionnel mondiale.",
      image: "https://images.unsplash.com/photo-1552674605-db6ffd4facb5?q=80&w=2070&auto=format&fit=crop",
      slug: "hyrox",
    },
    {
      icon: Activity,
      name: t("activities.crossTraining"),
      description: "Entraînement varié et complet.",
      image: "https://images.unsplash.com/photo-1526401485004-46910ecc8e51?q=80&w=2070&auto=format&fit=crop",
      slug: "cross-training",
    },
    {
      icon: PersonStanding,
      name: t("activities.personalTraining"),
      description: "Coaching personnalisé 100% adapté à vos objectifs.",
      image: "https://images.unsplash.com/photo-1554344728-77cf90d9ed26?q=80&w=2070&auto=format&fit=crop",
      slug: "personal-training",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("activities.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("activities.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {activities.map((activity, index) => (
            <Link
              key={index}
              href={`/${locale}/activities#${activity.slug}`}
              className="group bg-white rounded-xl shadow-sm hover:shadow-xl transition-all overflow-hidden border border-gray-100 hover:border-primary-200"
            >
              <div className="relative aspect-[16/10] overflow-hidden">
                <Image
                  src={activity.image}
                  alt={activity.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, (max-width: 1280px) 33vw, 25vw"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute bottom-4 left-4 rtl:left-auto rtl:right-4">
                  <div className="p-2 bg-primary-600 rounded-lg">
                    <activity.icon className="h-5 w-5 text-white" />
                  </div>
                </div>
              </div>
              <div className="p-6">
                <h3 className="text-lg font-bold text-gray-900 mb-2 group-hover:text-primary-600 transition-colors">
                  {activity.name}
                </h3>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {activity.description}
                </p>
                <span className="inline-flex items-center text-sm font-medium text-primary-600 group-hover:text-primary-700">
                  {t("common.seeMore")}
                  <ArrowRight className="ml-1 rtl:mr-1 rtl:ml-0 h-4 w-4 group-hover:translate-x-1 rtl:group-hover:-translate-x-1 transition-transform" />
                </span>
              </div>
            </Link>
          ))}
        </div>

        <div className="text-center mt-10">
          <Link
            href={`/${locale}/activities`}
            className="inline-flex items-center px-6 py-3 border border-transparent text-base font-medium rounded-md text-white bg-primary-600 hover:bg-primary-700 transition-all shadow-lg shadow-primary-600/20"
          >
            {t("buttons.discoverActivities")}
            <ArrowRight className="ml-2 rtl:mr-2 rtl:ml-0 h-5 w-5" />
          </Link>
        </div>
      </div>
    </section>
  );
};

export default ActivitiesSection;
