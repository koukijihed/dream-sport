"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";
import { Tag, Clock } from "lucide-react";

const PromotionsSection = () => {
  const t = useTranslations();

  const promotions = [
    {
      title: "Offre Rentrée",
      description: "Profitez de -20% sur votre abonnement 3 mois à la rentrée scolaire !",
      originalPrice: "250 TND",
      promoPrice: "200 TND",
      endDate: "2026-10-01",
      image: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop",
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("promotions.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("promotions.subtitle")}
          </p>
        </div>

        <div className="max-w-3xl mx-auto">
          {promotions.map((promo, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl shadow-lg overflow-hidden border border-primary-200"
            >
              <div className="relative h-48">
                <Image
                  src={promo.image}
                  alt={promo.title}
                  fill
                  className="object-cover"
                  sizes="(max-width: 768px) 100vw, 768px"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent" />
                <div className="absolute top-4 left-4 rtl:left-auto rtl:right-4 bg-primary-600 text-white px-3 py-1 rounded-full text-sm font-bold flex items-center">
                  <Tag className="h-4 w-4 mr-1 rtl:mr-0 rtl:ml-1" />
                  {t("promotions.specialOffer")}
                </div>
              </div>
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {promo.title}
                </h3>
                <p className="text-gray-600 mb-6">{promo.description}</p>
                <div className="flex items-center justify-between flex-wrap gap-4">
                  <div className="flex items-center space-x-3 rtl:space-x-reverse">
                    <span className="text-lg text-gray-400 line-through">
                      {promo.originalPrice}
                    </span>
                    <span className="text-3xl font-bold text-primary-600">
                      {promo.promoPrice}
                    </span>
                  </div>
                  <div className="flex items-center text-gray-600">
                    <Clock className="h-5 w-5 mr-2 rtl:mr-0 rtl:ml-2" />
                    <span className="text-sm">
                      {t("promotions.validUntil")} {promo.endDate}
                    </span>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PromotionsSection;
