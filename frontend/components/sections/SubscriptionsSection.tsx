"use client";

import { useTranslations, useLocale } from "next-intl";
import Link from "next/link";
import { Check, Star } from "lucide-react";
import { cn } from "@/lib/utils";

const SubscriptionsSection = () => {
  const t = useTranslations();
  const locale = useLocale();

  const plans = [
    {
      name: t("subscriptions.basic"),
      price: "150 TND",
      duration: "1 mois",
      features: [
        "Accès salle",
        "Musculation",
        "Cardio",
        "Vestiaires",
      ],
      popular: false,
    },
    {
      name: t("subscriptions.premium"),
      price: "250 TND",
      duration: "3 mois",
      features: [
        "Accès salle",
        "Cours collectifs",
        "Musculation",
        "Cardio",
        "Vestiaires",
        "Suivi basique",
      ],
      popular: true,
    },
    {
      name: t("subscriptions.vip"),
      price: "400 TND",
      duration: "6 mois",
      features: [
        "Accès complet",
        "Cours collectifs",
        "Musculation",
        "Cardio",
        "Coaching personnalisé",
        "Suivi personnalisé",
        "Programme sur-mesure",
        "Vestiaires premium",
      ],
      popular: false,
    },
  ];

  return (
    <section className="py-16 lg:py-24 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("subscriptions.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("subscriptions.subtitle")}
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-5xl mx-auto">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={cn(
                "bg-white rounded-2xl shadow-sm border overflow-hidden transition-all hover:shadow-xl",
                plan.popular
                  ? "border-primary-500 ring-2 ring-primary-500 ring-opacity-20 relative"
                  : "border-gray-200"
              )}
            >
              {plan.popular && (
                <div className="absolute top-0 left-1/2 -translate-x-1/2 -translate-y-1/2 bg-primary-600 text-white px-4 py-1 rounded-full text-sm font-medium flex items-center">
                  <Star className="h-4 w-4 mr-1" />
                  Populaire
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-gray-900 mb-2">
                  {plan.name}
                </h3>
                <div className="mb-6">
                  <span className="text-4xl font-bold text-gray-900">
                    {plan.price}
                  </span>
                  <span className="text-gray-600 ml-1">/ {plan.duration}</span>
                </div>
                <ul className="space-y-3 mb-8">
                  {plan.features.map((feature, idx) => (
                    <li key={idx} className="flex items-start">
                      <Check className="h-5 w-5 text-primary-600 mr-2 rtl:mr-0 rtl:ml-2 mt-0.5 flex-shrink-0" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <Link
                  href={`/${locale}/registration`}
                  className={cn(
                    "w-full inline-flex justify-center items-center px-6 py-3 border text-base font-medium rounded-md transition-all",
                    plan.popular
                      ? "border-transparent text-white bg-primary-600 hover:bg-primary-700 shadow-lg shadow-primary-600/20"
                      : "border-primary-600 text-primary-600 bg-white hover:bg-primary-50"
                  )}
                >
                  {t("buttons.register")}
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SubscriptionsSection;
