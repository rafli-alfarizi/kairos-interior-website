"use client";

import { useState } from "react";
import { motion } from "framer-motion";
import { MessageCircle, X } from "lucide-react";
import { useTranslations } from "next-intl";

export default function WhatsAppButton() {
  const [isOpen, setIsOpen] = useState(false);
  const t = useTranslations("HomePage");

  return (
    <div className="fixed bottom-6 right-6 z-50">
      <motion.div
        initial={false}
        animate={isOpen ? "open" : "closed"}
        className="relative"
        onHoverStart={() => setIsOpen(true)}
        onHoverEnd={() => setIsOpen(false)}
      >
        {/* Chat window bubble */}
        <motion.div
          variants={{
            open: { opacity: 1, y: 0, scale: 1, pointerEvents: "auto" },
            closed: { opacity: 0, y: 20, scale: 0.9, pointerEvents: "none" }
          }}
          transition={{ duration: 0.2 }}
          className="absolute bottom-16 right-0 bg-white p-4 rounded-xl shadow-2xl mb-2 w-72 border border-gray-100"
        >
          <div className="flex justify-between items-center mb-4 border-b pb-2">
            <h3 className="font-bold text-gray-800">InteriorPro Sales</h3>
            <button onClick={() => setIsOpen(false)} className="text-gray-400 hover:text-gray-600 md:hidden">
              <X size={18} />
            </button>
          </div>
          <p className="text-sm text-gray-600 mb-4">
            Hello! How can we help you with your interior design project today?
          </p>
          <a
            href="https://wa.me/6281234567890?text=Halo%20saya%20tertarik%20dengan%20jasa%20interior"
            target="_blank"
            rel="noopener noreferrer"
            className="block w-full text-center bg-green-500 hover:bg-green-600 text-white py-2 rounded-lg font-medium transition"
          >
            Chat on WhatsApp
          </a>
        </motion.div>

        {/* Floating Button */}
        <button
          onClick={() => setIsOpen(!isOpen)}
          className="bg-green-500 hover:bg-green-600 text-white p-4 rounded-full shadow-lg flex items-center justify-center transition-colors"
        >
          <MessageCircle size={32} />
        </button>
      </motion.div>
    </div>
  );
}
