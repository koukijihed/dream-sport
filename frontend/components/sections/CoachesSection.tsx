"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Instagram, Phone } from "lucide-react";

const CoachesSection = () => {
  const t = useTranslations();

  const coaches = [
    {
      name: "Ahmed Ben Ali",
      speciality: "Coach Boxe & Kickboxing",
      experience: "8 ans",
      bio: "Coach passionné spécialisé en boxe et kickboxing. Il accompagne tous les niveaux avec patience et rigueur.",
      image: "https://images.unsplash.com/photo-1618842357528-0c3d227c9079?q=80&w=2070&auto=format&fit=crop",
      instagram: "#",
      phone: "+216 00 000 000",
    },
    {
      name: "Youssef Trabelsi",
      speciality: "Coach Taekwondo & Karaté",
      experience: "10 ans",
      bio: "Maître d'arts martiaux avec de nombreuses années d'expérience. Transmet les valeurs du respect et de la discipline.",
      image: "https://images.unsplash.com/photo-1594381898411-846e7d193883?q=80&w=1974&auto=format&fit=crop",
      instagram: "#",
      phone: "+216 00 000 000",
    },
    {
      name: "Karim Mansouri",
      speciality: "Personal Trainer & Musculation",
      experience: "7 ans",
      bio: "Spécialisé en musculation et coaching personnalisé. Aide ses clients à atteindre leurs objectifs efficacement.",
      image: "https://images.unsplash.com/photo-1579046758287-7b35f5791798?q=80&w=1974&auto=format&fit=crop",
      instagram: "#",
      phone: "+216 00 000 000",
    },
    {
      name: "Salma Bouzid",
      speciality: "Coach Fitness & Pilates",
      experience: "5 ans",
      bio: "Coach dynamique spécialisée en fitness et pilates. Crée des séances motivantes et adaptées à tous.",
      image: "https://images.unsplash.com/photo-1548690312-e3b507d8c110?q=80&w=1974&auto=format&fit=crop",
      instagram: "#",
      phone: "+216 00 000 000",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("coaches.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("coaches.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
          {coaches.map((coach, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-sm hover:shadow-lg transition-all overflow-hidden border border-gray-100 group"
            >
              <div className="relative aspect-square overflow-hidden">
                <Image
                  src={coach.image}
                  alt={coach.name}
                  fill
                  className="object-cover group-hover:scale-110 transition-transform duration-500"
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 25vw"
                />
              </div>
              <div className="p-6">
                <h3 className="text-xl font-bold text-gray-900 mb-1">
                  {coach.name}
                </h3>
                <p className="text-primary-600 font-medium mb-2">
                  {coach.speciality}
                </p>
                <p className="text-sm text-gray-500 mb-3">
                  {t("coaches.experience")}: {coach.experience}
                </p>
                <p className="text-sm text-gray-600 mb-4 line-clamp-2">
                  {coach.bio}
                </p>
                <div className="flex space-x-2 rtl:space-x-reverse">
                  <a
                    href={coach.instagram}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    aria-label="Instagram"
                  >
                    <Instagram className="h-4 w-4" />
                  </a>
                  <a
                    href={`tel:${coach.phone}`}
                    className="p-2 bg-gray-100 rounded-lg hover:bg-primary-100 hover:text-primary-600 transition-colors"
                    aria-label="Phone"
                  >
                    <Phone className="h-4 w-4" />
                  </a>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CoachesSection;
