"use client";

import { useState } from "react";
import { useTranslations } from "next-intl";
import Image from "next/image";
import { cn } from "@/lib/utils";

const GallerySection = () => {
  const t = useTranslations();
  const [activeFilter, setActiveFilter] = useState("all");

  const categories = [
    { id: "all", label: t("common.all") },
    { id: "gym", label: t("gallery.gym") },
    { id: "equipment", label: t("gallery.equipment") },
    { id: "classes", label: t("gallery.classes") },
    { id: "coaches", label: t("gallery.coaches") },
    { id: "events", label: t("gallery.events") },
  ];

  const images = [
    { id: 1, category: "gym", src: "https://images.unsplash.com/photo-1534438327276-14e5300c3a48?q=80&w=2070&auto=format&fit=crop" },
    { id: 2, category: "equipment", src: "https://images.unsplash.com/photo-1583454110551-21f2fa2afe61?q=80&w=2070&auto=format&fit=crop" },
    { id: 3, category: "classes", src: "https://images.unsplash.com/photo-1571019614242-c5c5dee9f50b?q=80&w=2070&auto=format&fit=crop" },
    { id: 4, category: "coaches", src: "https://images.unsplash.com/photo-1618842357528-0c3d227c9079?q=80&w=2070&auto=format&fit=crop" },
    { id: 5, category: "gym", src: "https://images.unsplash.com/photo-1540497077202-7c8a3999166f?q=80&w=2070&auto=format&fit=crop" },
    { id: 6, category: "events", src: "https://images.unsplash.com/photo-1517836357463-d25dfeac3438?q=80&w=2070&auto=format&fit=crop" },
  ];

  const filteredImages = activeFilter === "all"
    ? images
    : images.filter((img) => img.category === activeFilter);

  return (
    <section className="py-16 lg:py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold text-gray-900 mb-4">
            {t("gallery.title")}
          </h2>
          <p className="text-lg text-gray-600 max-w-3xl mx-auto">
            {t("gallery.subtitle")}
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap justify-center gap-2 mb-8">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveFilter(category.id)}
              className={cn(
                "px-4 py-2 rounded-full text-sm font-medium transition-colors",
                activeFilter === category.id
                  ? "bg-primary-600 text-white shadow-lg shadow-primary-600/20"
                  : "bg-gray-100 text-gray-700 hover:bg-gray-200"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {filteredImages.map((image) => (
            <div
              key={image.id}
              className="group relative aspect-[4/3] rounded-xl overflow-hidden cursor-pointer"
            >
              <Image
                src={image.src}
                alt={`Gallery image ${image.id}`}
                fill
                className="object-cover group-hover:scale-110 transition-transform duration-500"
                sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
              />
              <div className="absolute inset-0 bg-black/0 group-hover:bg-black/20 transition-colors" />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GallerySection;
