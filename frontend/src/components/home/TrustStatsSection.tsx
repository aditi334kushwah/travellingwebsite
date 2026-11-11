"use client";

import { Award, Users, Compass, ShieldCheck } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const STATS = [
  {
    icon: Compass,
    number: "50+",
    label: "Handcrafted Itineraries",
    desc: "Curated experiences across 20+ states in India",
  },
  {
    icon: Users,
    number: "12,000+",
    label: "Happy Explorers",
    desc: "Solo wanderers, couples & joyful families",
  },
  {
    icon: Award,
    number: "4.9 / 5",
    label: "Top Guest Rating",
    desc: "Verified reviews on service & comfort",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    label: "Secure Booking & Support",
    desc: "24/7 dedicated travel concierge",
  },
];

export default function TrustStatsSection() {
  return (
    <section className="py-16 sm:py-20 bg-slate-50 dark:bg-gray-900/60 border-y border-gray-200/60 dark:border-gray-800">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 sm:gap-8">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            return (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="p-6 rounded-3xl bg-white dark:bg-gray-800 shadow-md hover:shadow-xl border border-gray-100 dark:border-gray-700/60 transition-all duration-300 hover:-translate-y-1.5 group">
                  <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300">
                    <Icon size={24} />
                  </div>
                  <h3 className="text-3xl sm:text-4xl font-extrabold font-playfair bg-gradient-to-r from-orange-600 to-amber-600 bg-clip-text text-transparent">
                    {stat.number}
                  </h3>
                  <p className="mt-1 font-semibold text-gray-800 dark:text-white text-base">
                    {stat.label}
                  </p>
                  <p className="mt-1 text-xs sm:text-sm text-gray-500 dark:text-gray-400 leading-relaxed">
                    {stat.desc}
                  </p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>
    </section>
  );
}
