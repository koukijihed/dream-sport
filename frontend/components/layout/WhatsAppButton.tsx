"use client";

import { useTranslations } from "next-intl";
import { MessageCircle } from "lucide-react";

const WhatsAppButton = () => {
  const t = useTranslations();
  const whatsappNumber = "21600000000"; // Configurable via settings
  const whatsappUrl = `https://wa.me/${whatsappNumber}`;

  return (
    <a
      href={whatsappUrl}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 rtl:left-6 rtl:right-auto z-50 bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg shadow-green-500/20 transition-all hover:scale-110 group"
      aria-label={t("whatsapp.chat")}
    >
      <MessageCircle className="h-6 w-6" />
      <span className="absolute right-full rtl:left-full rtl:right-auto mr-3 rtl:ml-3 top-1/2 -translate-y-1/2 bg-dark-900 text-white px-3 py-2 rounded-lg text-sm whitespace-nowrap opacity-0 group-hover:opacity-100 transition-opacity pointer-events-none">
        {t("whatsapp.chat")}
      </span>
    </a>
  );
};

export default WhatsAppButton;
