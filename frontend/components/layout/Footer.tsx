"use client";

import { useTranslations } from "next-intl";
import { useLocale } from "next-intl";
import Link from "next/link";
import {
  Dumbbell,
  MapPin,
  Phone,
  Mail,
  Facebook,
  Instagram,
  Youtube,
  Music2,
} from "lucide-react";

const Footer = () => {
  const t = useTranslations();
  const locale = useLocale();

  const navLinks = [
    { href: "/", label: t("nav.home") },
    { href: "/about", label: t("nav.about") },
    { href: "/activities", label: t("nav.activities") },
    { href: "/planning", label: t("nav.planning") },
    { href: "/coaches", label: t("nav.coaches") },
    { href: "/subscriptions", label: t("nav.subscriptions") },
    { href: "/gallery", label: t("nav.gallery") },
    { href: "/contact", label: t("nav.contact") },
  ];

  const socialLinks = [
    { icon: Facebook, href: "#", label: "Facebook" },
    { icon: Instagram, href: "#", label: "Instagram" },
    { icon: Music2, href: "#", label: "TikTok" },
    { icon: Youtube, href: "#", label: "YouTube" },
  ];

  return (
    <footer className="bg-dark-900 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand Section */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-2 rtl:space-x-reverse mb-4">
              <Dumbbell className="h-8 w-8 text-primary-600" />
              <span className="text-xl font-bold text-white">
                {t("common.logo")}
              </span>
            </div>
            <p className="text-gray-400 mb-6 text-sm leading-relaxed">
              {t("footer.description")}
            </p>
            <div className="flex space-x-4 rtl:space-x-reverse">
              {socialLinks.map((social) => (
                <a
                  key={social.label}
                  href={social.href}
                  className="text-gray-400 hover:text-primary-600 transition-colors"
                  aria-label={social.label}
                >
                  <social.icon className="h-5 w-5" />
                </a>
              ))}
            </div>
          </div>

          {/* Navigation */}
          <div>
            <h3 className="text-white font-semibold mb-4">{t("nav.home")}</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <Link
                    href={`/${locale}${link.href}`}
                    className="text-gray-400 hover:text-white transition-colors text-sm"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Info */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("contact.info")}
            </h3>
            <ul className="space-y-3">
              <li className="flex items-start space-x-3 rtl:space-x-reverse">
                <MapPin className="h-5 w-5 text-primary-600 mt-0.5 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  {t("contact.addressText")}
                </span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Phone className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <span className="text-gray-400 text-sm">+216 00 000 000</span>
              </li>
              <li className="flex items-center space-x-3 rtl:space-x-reverse">
                <Mail className="h-5 w-5 text-primary-600 flex-shrink-0" />
                <span className="text-gray-400 text-sm">
                  contact@dreamsport.tn
                </span>
              </li>
            </ul>
          </div>

          {/* Opening Hours */}
          <div>
            <h3 className="text-white font-semibold mb-4">
              {t("footer.openingHours")}
            </h3>
            <ul className="space-y-2">
              <li className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">
                  {t("footer.mondayFriday")}
                </span>
                <span className="text-gray-300 text-sm">06:00 – 22:00</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">
                  {t("footer.saturday")}
                </span>
                <span className="text-gray-300 text-sm">07:00 – 20:00</span>
              </li>
              <li className="flex items-center justify-between">
                <span className="text-gray-400 text-sm">
                  {t("footer.sunday")}
                </span>
                <span className="text-gray-300 text-sm">08:00 – 14:00</span>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-gray-800 mt-8 pt-8 text-center">
          <p className="text-gray-400 text-sm">{t("footer.copyright")}</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
