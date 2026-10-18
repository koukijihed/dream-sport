"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Star } from "lucide-react";

const ReviewsSection = () => {
  const t = useTranslations();

  const reviews = [
    {
      name: "Amine B.",
      rating: 5,
      comment: "Excellente salle ! Les coachs sont très professionnels et l'ambiance est super motivante. Je recommande vivement !",
      image: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?q=80&w=2070&auto=format&fit=crop",
    },
    {
      name: "Sarah M.",
      rating: 5,
      comment: "J'adore cette salle ! Les cours collectifs sont géniaux et les équipements sont neufs. Un vrai plaisir de venir s'entraîner !",
      image: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?q=80&w=1974&auto=format&fit=crop",
    },
    {
      name: "Omar T.",
      rating: 5,
      comment: "Super accueil, coachs à l'écoute et très pédagogues. J'ai fait de gros progrès en peu de temps. Merci Dream Sport !",
      image: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=1974&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("reviews.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("reviews.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {reviews.map((review, index) => (
            <div
              key={index}
              className="bg-gray-50 rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
            >
              <div className="flex items-center mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-5 w-5 text-yellow-400 fill-current"
                  />
                ))}
              </div>
              <p className="text-gray-600 mb-6 italic">&quot;{review.comment}&quot;</p>
              <div className="flex items-center">
                <div className="relative h-10 w-10 rounded-full overflow-hidden mr-3 rtl:mr-0 rtl:ml-3">
                  <Image
                    src={review.image}
                    alt={review.name}
                    fill
                    className="object-cover"
                    sizes="40px"
                  />
                </div>
                <div>
                  <p className="font-semibold text-gray-900">{review.name}</p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ReviewsSection;
