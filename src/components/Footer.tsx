"use client";

import { useTranslations } from "next-intl";
import Image from "next/image";

export default function Footer() {
  const t = useTranslations("Navigation");

  return (
    <footer className="w-full bg-gray-900 text-white p-8 mt-auto">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row justify-between items-center">
        <div className="mb-4 md:mb-0 bg-white p-2 inline-block rounded-xl">
          <Image src="/logo.jpeg" alt="Kairos Interior" width={140} height={50} className="object-contain" />
        </div>
        <p className="text-gray-400 mt-4 md:mt-0 text-sm max-w-sm text-center md:text-left">
            Providing top quality interior design services to make your dream space a reality.
        </p>

        <div className="flex gap-4 text-sm text-gray-400">
          <a href="/" className="hover:text-white transition">
            {t("home")}
          </a>
          <a href="/projects" className="hover:text-white transition">
            {t("projects")}
          </a>
          <a href="/blog" className="hover:text-white transition">
            {t("blog")}
          </a>
          <a href="/contact" className="hover:text-white transition">
            {t("contact")}
          </a>
        </div>
      </div>
      <div className="max-w-7xl mx-auto mt-8 border-t border-gray-800 pt-4 text-center text-sm text-gray-500">
        &copy; {new Date().getFullYear()} Kairos Interior. All rights reserved.
      </div>
    </footer>
  );
}
