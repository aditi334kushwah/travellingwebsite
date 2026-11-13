"use client";

import { Award, Users, Compass, ShieldCheck } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const STATS = [
  {
    icon: Compass,
    number: "50+",
    label: "Handcrafted Itineraries",
    desc: "Curated experiences across 20+ states in India",
    color: "#6366f1", // Indigo
    dotBorder: "border-[#6366f1]",
    accentBg: "bg-[#6366f1]/10 text-[#6366f1]",
    arrowColor: "text-[#6366f1]",
  },
  {
    icon: Users,
    number: "12,000+",
    label: "Happy Explorers",
    desc: "Solo wanderers, couples & joyful families",
    color: "#8b5cf6", // Purple
    dotBorder: "border-[#8b5cf6]",
    accentBg: "bg-[#8b5cf6]/10 text-[#8b5cf6]",
    arrowColor: "text-[#8b5cf6]",
  },
  {
    icon: Award,
    number: "4.9 / 5",
    label: "Top Guest Rating",
    desc: "Verified reviews on service & comfort",
    color: "#0ea5e9", // Sky Blue
    dotBorder: "border-[#0ea5e9]",
    accentBg: "bg-[#0ea5e9]/10 text-[#0ea5e9]",
    arrowColor: "text-[#0ea5e9]",
  },
  {
    icon: ShieldCheck,
    number: "100%",
    label: "Secure Booking & Support",
    desc: "24/7 dedicated travel concierge",
    color: "#14b8a6", // Teal
    dotBorder: "border-[#14b8a6]",
    accentBg: "bg-[#14b8a6]/10 text-[#14b8a6]",
    arrowColor: "text-[#14b8a6]",
  },
];

export default function TrustStatsSection() {
  return (
    <section className="relative py-16 sm:py-24 bg-gradient-to-b from-[#fcfbf9] via-slate-50/50 to-[#fcfbf9] dark:from-[#09090b] dark:via-stone-900/40 dark:to-[#09090b] border-y border-stone-200/70 dark:border-stone-800/80 overflow-hidden">
      
      {/* Background Soft Ambient Light */}
      <div className="absolute inset-0 bg-[radial-gradient(#e5e7eb_1px,transparent_1px)] dark:bg-[radial-gradient(#27272a_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none opacity-40" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        
        {/* Infographic Connected 4-Card Process Track */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 lg:gap-5 items-stretch">
          {STATS.map((stat, i) => {
            const Icon = stat.icon;
            const isLast = i === STATS.length - 1;

            return (
              <FadeUp key={i} delay={i * 0.12} className="relative flex flex-col h-full">
                
                {/* Connecting Process Arrow for Desktop */}
                {!isLast && (
                  <div className="hidden lg:flex absolute -right-3.5 top-[18%] -translate-y-1/2 z-20 items-center justify-center">
                    <svg
                      width="20"
                      height="20"
                      viewBox="0 0 24 24"
                      fill="currentColor"
                      className={`${stat.arrowColor} transition-transform group-hover:translate-x-0.5`}
                    >
                      <path d="M13.025 1l-2.847 2.828 6.176 6.172h-16.354v4h16.354l-6.176 6.172 2.847 2.828 10.975-11z" />
                    </svg>
                  </div>
                )}

                {/* Main Card with Custom Infographic Contour */}
                <div
                  className="group relative flex flex-col justify-between h-full p-6 sm:p-7 bg-white dark:bg-stone-900 shadow-lg hover:shadow-2xl transition-all duration-300 hover:-translate-y-1.5"
                  style={{
                    borderRadius: "32px 32px 32px 8px", // Infographic leaf contour
                  }}
                >
                  {/* Decorative Outer Border / Outline Path */}
                  <div
                    className="absolute inset-0 pointer-events-none transition-colors duration-300"
                    style={{
                      borderRadius: "32px 32px 32px 8px",
                      border: "2px solid transparent",
                      backgroundImage: `linear-gradient(white, white), linear-gradient(135deg, ${stat.color} 0%, transparent 60%)`,
                      backgroundOrigin: "border-box",
                      backgroundClip: "padding-box, border-box",
                    }}
                  />

                  {/* Top Bar with Dotted Outline + Leaf Inner Cutout */}
                  <div className="relative z-10 flex items-center justify-between mb-6">
                    
                    {/* Inner Teardrop / Leaf Icon Container (Matching the Reference) */}
                    <div
                      className="relative w-16 h-16 rounded-[22px_22px_4px_22px] bg-slate-50 dark:bg-stone-800 shadow-inner flex items-center justify-center border border-slate-200/80 dark:border-stone-700/80 group-hover:scale-108 transition-all duration-300"
                      style={{
                        boxShadow: "inset 0 2px 4px rgba(0,0,0,0.04), 0 4px 10px rgba(0,0,0,0.05)",
                      }}
                    >
                      {/* Floating Indicator Notch at top border */}
                      <span
                        className="absolute -top-1 left-1/2 -translate-x-1/2 w-4 h-1 rounded-full"
                        style={{ backgroundColor: stat.color }}
                      />
                      
                      <div className={`p-2.5 rounded-full ${stat.accentBg} transition-transform group-hover:rotate-6`}>
                        <Icon size={24} style={{ color: stat.color }} />
                      </div>
                    </div>

                    {/* Step Indicator Pill */}
                    <span
                      className="text-[11px] font-mono font-bold tracking-widest px-2.5 py-1 rounded-full"
                      style={{
                        backgroundColor: `${stat.color}15`,
                        color: stat.color,
                        border: `1px solid ${stat.color}35`,
                      }}
                    >
                      0{i + 1}
                    </span>
                  </div>

                  {/* Card Content & Stats */}
                  <div className="relative z-10 space-y-2 mt-auto">
                    <h3
                      className="text-3xl sm:text-4xl font-black font-poppins tracking-tight"
                      style={{ color: stat.color }}
                    >
                      {stat.number}
                    </h3>

                    <h4 className="font-bold text-base sm:text-lg text-stone-900 dark:text-stone-100 font-playfair leading-snug">
                      {stat.label}
                    </h4>

                    <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-poppins leading-relaxed font-light">
                      {stat.desc}
                    </p>
                  </div>

                  {/* Bottom Accent Bar */}
                  <div className="relative z-10 mt-5 pt-3 border-t border-slate-100 dark:border-stone-800/80 flex items-center justify-between">
                    <span className="text-[10px] uppercase font-bold tracking-wider text-stone-400 font-poppins">
                      Verified Standard
                    </span>
                    <span
                      className="w-2 h-2 rounded-full animate-ping"
                      style={{ backgroundColor: stat.color }}
                    />
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
