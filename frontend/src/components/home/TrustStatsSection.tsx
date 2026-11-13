"use client";

import { Award, Users, Compass, ShieldCheck } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const STATS = [
  {
    icon: Compass,
    number: "50+",
    label: "Handcrafted Itineraries",
    desc: "Curated experiences across 20+ states in India",
    gradient: "from-orange-500 to-amber-500",
    textGradient: "from-orange-600 to-amber-600 dark:from-orange-400 dark:to-amber-400",
    borderHover: "hover:border-orange-500/50",
    iconBg: "bg-gradient-to-br from-orange-500 to-amber-600 text-white",
    shadow: "shadow-orange-500/20",
    tag: "CURATED",
  },
  {
    icon: Users,
    number: "12,000+",
    label: "Happy Explorers",
    desc: "Solo wanderers, couples & joyful families",
    gradient: "from-amber-500 to-orange-600",
    textGradient: "from-amber-600 to-orange-600 dark:from-amber-400 dark:to-orange-400",
    borderHover: "hover:border-amber-500/50",
    iconBg: "bg-gradient-to-br from-amber-500 to-orange-600 text-white",
    shadow: "shadow-amber-500/20",
    tag: "COMMUNITY",
  },
  {
    icon: Award,
    number: "4.9 / 5",
    label: "Top Guest Rating",
    desc: "Verified reviews on service & comfort",
    gradient: "from-orange-600 to-amber-500",
    textGradient: "from-orange-600 to-amber-500 dark:from-orange-400 dark:to-amber-400",
    borderHover: "hover:border-orange-500/50",
    iconBg: "bg-gradient-to-br from-orange-600 to-amber-500 text-white",
    shadow: "shadow-orange-500/20",
    tag: "TOP RATED",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    label: "Secure Booking & Support",
    desc: "24/7 dedicated travel concierge",
    gradient: "from-amber-600 to-orange-500",
    textGradient: "from-amber-600 to-orange-500 dark:from-amber-400 dark:to-orange-400",
    borderHover: "hover:border-amber-500/50",
    iconBg: "bg-gradient-to-br from-amber-600 to-orange-500 text-white",
    shadow: "shadow-amber-500/20",
    tag: "VERIFIED",
  },
];

export default function TrustStatsSection() {
  return (
    <section className="relative py-10 sm:py-14 bg-[#fcfbf9] dark:bg-[#09090b] overflow-hidden">
      
      {/* Subtle Warm Amber Glow Backdrop */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Infographic Connected 4-Card Process Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            const isLast = i === STATS.length - 1;

            return (
              <FadeUp key={i} delay={i * 0.1} className="relative flex flex-col h-full">
                
                {/* Connecting Process Arrow for Desktop in Warm Brand Orange */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-3.5 top-[24%] -translate-y-1/2 z-20 items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className="text-orange-500/70 transition-transform group-hover:translate-x-0.5"
                    >
                      <path d="M13.025 1l-2.847 2.828 6.176 6.172h-16.354v4h16.354l-6.176 6.172 2.847 2.828 10.975-11z" />
                    </svg>
                  </div>
                )}

                {/* Main Card with Infographic Asymmetrical Leaf Contour */}
                <div
                  className={`group relative flex flex-col justify-between h-full p-6 sm:p-7 bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800/90 ${stat.borderHover} shadow-md hover:shadow-2xl hover:shadow-orange-500/15 transition-all duration-300 hover:-translate-y-1.5`}
                  style={{
                    borderRadius: "32px 32px 32px 8px", // Asymmetrical leaf contour
                  }}
                >
                  {/* Top Bar with Dotted Outline + Leaf Inner Cutout */}
                  <div className="relative z-10 flex items-center justify-between mb-6">
                    
                    {/* Inner Teardrop / Leaf Icon Container with Warm Brand Gradient */}
                    <div
                      className="relative w-16 h-16 rounded-[22px_22px_4px_22px] bg-stone-50 dark:bg-stone-800/90 shadow-sm flex items-center justify-center border border-stone-200/80 dark:border-stone-700/80 group-hover:scale-108 transition-all duration-300"
                    >
                      {/* Floating Notch at top border */}
                      <span className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                      
                      {/* Gradient Icon Badge matching TripNova brand */}
                      <div className={`w-11 h-11 rounded-[16px_16px_4px_16px] ${stat.iconBg} shadow-md ${stat.shadow} flex items-center justify-center transition-transform group-hover:rotate-6`}>
                        <Icon size={22} />
                      </div>
                    </div>

                    {/* Step Indicator Pill */}
                    <span className="text-[11px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/25">
                      0{i + 1}
                    </span>
                  </div>

                  {/* Card Content & Numbers in Warm Saffron / Amber Gradient */}
                  <div className="relative z-10 space-y-2 mt-auto">
                    <h3 className={`text-3xl sm:text-4xl font-extrabold font-poppins tracking-tight bg-gradient-to-r ${stat.textGradient} bg-clip-text text-transparent`}>
                      {stat.number}
                    </h3>

                    <h4 className="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 font-playfair leading-snug">
                      {stat.label}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-poppins leading-relaxed font-light">
                      {stat.desc}
                    </p>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="relative z-10 mt-5 pt-3 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 dark:text-stone-500 font-poppins">
                      {stat.tag}
                    </span>
                    <span className="w-2 h-2 rounded-full bg-gradient-to-r from-orange-500 to-amber-500" />
                  </div>

                </div>

              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}
