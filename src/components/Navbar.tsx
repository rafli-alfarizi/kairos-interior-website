"use client";

import { useTranslations } from "next-intl";
import { Link, usePathname, useRouter } from "@/i18n/routing";
import { useLocale } from "next-intl";
import Image from "next/image";

export default function Navbar() {
  const t = useTranslations("Navigation");
  const locale = useLocale();
  const router = useRouter();
  const pathname = usePathname();

  const toggleLocale = () => {
    const nextLocale = locale === "id" ? "en" : "id";
    router.replace(pathname, { locale: nextLocale });
  };

  return (
    <nav className="w-full bg-white shadow-sm p-4 sticky top-0 z-40">
      <div className="max-w-7xl mx-auto flex justify-between items-center">
        <Link href="/" className="flex items-center gap-2">
          <Image src="/logo.jpeg" alt="Kairos Interior Logo" width={120} height={40} className="object-contain mix-blend-multiply" />
        </Link>

        <div className="hidden md:flex gap-6 items-center">
          <Link href="/" className="hover:text-blue-600 transition">
            {t("home")}
          </Link>
          <Link href="/projects" className="hover:text-blue-600 transition">
            {t("projects")}
          </Link>
          <Link href="/blog" className="hover:text-blue-600 transition">
            {t("blog")}
          </Link>
          <Link href="/estimator" className="hover:text-blue-600 transition">
            {t("estimator")}
          </Link>
          <Link href="/contact" className="bg-black text-white px-4 py-2 rounded-md hover:bg-gray-800 transition">
            {t("contact")}
          </Link>
          
          <button
            onClick={toggleLocale}
            className="ml-4 border border-gray-300 px-2 py-1 rounded text-sm hover:bg-gray-100"
          >
            {locale === "id" ? "EN" : "ID"}
          </button>
        </div>
      </div>
    </nav>
  );
}
