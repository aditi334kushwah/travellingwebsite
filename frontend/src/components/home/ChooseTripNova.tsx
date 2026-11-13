"use client";

import React, { useState } from "react";
import { ShieldCheck, Headphones, MapPin, CreditCard, SlidersHorizontal, BadgeCheck, Sparkles, ArrowRight, Luggage, Plane, Compass } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

type CardItem = { 
  id: number;
  icon: React.ReactNode; 
  title: string; 
  desc: string; 
  tag: string;
  badgeNumber: string;
};

const data: CardItem[] = [
  { 
    id: 1,
    icon: <ShieldCheck size={26} />, 
    title: "Fully Licensed & Insured", 
    desc: "Government registered tour operator with comprehensive traveler insurance.", 
    tag: "VERIFIED",
    badgeNumber: "01"
  },
  { 
    id: 2,
    icon: <Headphones size={26} />, 
    title: "24/7 Concierge Support", 
    desc: "Dedicated ground support and round-the-clock emergency assistance during your trip.", 
    tag: "ALWAYS ON",
    badgeNumber: "02"
  },
  { 
    id: 3,
    icon: <MapPin size={26} />, 
    title: "Local Expert Guides", 
    desc: "Native storytellers and accredited cultural historians for authentic experiences.", 
    tag: "CURATED",
    badgeNumber: "03"
  },
  { 
    id: 4,
    icon: <CreditCard size={26} />, 
    title: "Flexible & Secure Payments", 
    desc: "Razorpay 256-bit encrypted checkout with 100% money-back guarantee.", 
    tag: "PROTECTED",
    badgeNumber: "04"
  },
  { 
    id: 5,
    icon: <SlidersHorizontal size={26} />, 
    title: "Customized Day Itineraries", 
    desc: "Bespoke circuits customized to your travel pace, diet, and luxury preferences.", 
    tag: "TAILORED",
    badgeNumber: "05"
  },
  { 
    id: 6,
    icon: <BadgeCheck size={26} />, 
    title: "Premium Quality Stays", 
    desc: "Pre-screened boutique resorts, verified vehicles, and transparent pricing.", 
    tag: "CERTIFIED",
    badgeNumber: "06"
  },
];

export default function ChooseTripNova() {
  const [activeCard, setActiveCard] = useState<number>(5); // 5 is "Customized Day Itineraries" active in user screenshot

  return (
    <section className="py-20 sm:py-28 bg-[#fcfbf9] dark:bg-[#09090b] relative overflow-hidden border-b border-stone-200/70 dark:border-stone-800/80">
      
      {/* Background Soft Dotted Flight Path & Clouds Texture (Matching Reference Style) */}
      <div className="absolute inset-0 bg-[radial-gradient(#ea580c0a_1.5px,transparent_1.5px)] [background-size:28px_28px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto mb-14 sm:mb-18">
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider mb-2 font-poppins">
              <Sparkles size={13} className="text-orange-500" /> Why Travel With Us
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mt-3 text-stone-900 dark:text-stone-100 tracking-tight">
              Why Choose TripNova?
            </h2>
          </FadeUp>

          <FadeUp delay={0.18}>
            <p className="mt-3.5 text-xs sm:text-base text-stone-600 dark:text-stone-400 font-poppins max-w-2xl mx-auto font-light leading-relaxed">
              From verified mountain lodges to 24/7 dedicated concierges, we craft journeys with unmatched safety, elegance, and authenticity.
            </p>
          </FadeUp>
        </div>

        {/* 6-CARD GRID: TRAVEL PASS ID / BOARDING CARD DESIGN WITH ORGANIC CORNER FLUID BLOBS */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-7 sm:gap-8 lg:gap-9 items-stretch">
          {data.map((item, index) => {
            const isActive = activeCard === item.id;

            return (
              <FadeUp key={item.id} delay={index * 0.08} className="h-full">
                <div
                  onMouseEnter={() => setActiveCard(item.id)}
                  className={`group relative w-full h-full rounded-[38px] p-7 sm:p-8 text-left transition-all duration-500 cursor-pointer overflow-hidden flex flex-col justify-between ${
                    isActive
                      ? "bg-white dark:bg-stone-900 border-2 border-orange-500 shadow-[0_24px_50px_rgba(234,88,12,0.22)] -translate-y-2.5 scale-[1.02]"
                      : "bg-white dark:bg-stone-900/90 border border-stone-200/90 dark:border-stone-800 shadow-[0_8px_30px_rgb(0,0,0,0.04)] hover:border-orange-400 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgba(234,88,12,0.14)]"
                  }`}
                >
                  
                  {/* ========================================================
                      ORGANIC FLUID SHAPES (Directly Inspired by Image 2 Travel Card):
                      1. Top-Right Soft Wave Blob
                      2. Bottom-Left Soft Wave Blob
                      3. Dotted Dashed Flight Path Track
                     ======================================================== */}
                  
                  {/* Top-Right Ambient Fluid Shape in Warm Palette */}
                  <div
                    className={`absolute -top-10 -right-10 w-36 h-36 rounded-full transition-transform duration-700 ease-out pointer-events-none group-hover:scale-125 ${
                      isActive ? "bg-orange-500/15" : "bg-orange-500/8 dark:bg-orange-500/10"
                    }`}
                    style={{ borderRadius: "42% 58% 70% 30% / 45% 45% 55% 55%" }}
                  />

                  {/* Bottom-Left Ambient Fluid Shape in Warm Palette */}
                  <div
                    className={`absolute -bottom-10 -left-10 w-32 h-32 rounded-full transition-transform duration-700 ease-out pointer-events-none group-hover:scale-125 ${
                      isActive ? "bg-amber-500/15" : "bg-amber-500/8 dark:bg-amber-500/10"
                    }`}
                    style={{ borderRadius: "58% 42% 38% 62% / 42% 58% 42% 58%" }}
                  />

                  {/* Subtle Dotted Flight Path Arc Curve */}
                  <div className="absolute top-12 right-6 w-20 h-16 pointer-events-none opacity-20 dark:opacity-30">
                    <svg viewBox="0 0 100 80" fill="none" className="w-full h-full">
                      <path
                        d="M10 60 Q 50 10 90 40"
                        stroke="#ea580c"
                        strokeWidth="2.5"
                        strokeDasharray="4 4"
                      />
                      <circle cx="90" cy="40" r="3" fill="#ea580c" />
                    </svg>
                  </div>

                  {/* ================= CARD HEADER ================= */}
                  <div className="relative z-10 flex items-start justify-between mb-6">
                    
                    {/* Rounded Circular Avatar Badge (Matching User's "Your Name / Photo" circle from Image 2) */}
                    <div className="relative flex items-center justify-center">
                      {/* Outer Dotted Orbit Ring */}
                      <div className="absolute -inset-1 rounded-full border border-dashed border-orange-500/40 group-hover:rotate-45 transition-transform duration-700 pointer-events-none" />

                      {/* Icon Container with Warm Orange Gradient */}
                      <div
                        className={`w-14 h-14 rounded-full flex items-center justify-center transition-all duration-500 shadow-md ${
                          isActive
                            ? "bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white shadow-orange-500/35 scale-105"
                            : "bg-orange-500 text-white group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-600 group-hover:scale-105 shadow-orange-500/20"
                        }`}
                      >
                        {item.icon}
                      </div>
                    </div>

                    {/* Top Right: Tag & Step ID (e.g. "ALWAYS ON", "VERIFIED") */}
                    <div className="flex flex-col items-end gap-1">
                      <span
                        className={`text-[10px] sm:text-[11px] font-bold font-poppins uppercase tracking-wider px-3 py-1 rounded-full border transition-all duration-300 ${
                          isActive
                            ? "bg-orange-500 text-white border-orange-500 shadow-sm"
                            : "text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/25 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500"
                        }`}
                      >
                        {item.tag}
                      </span>
                      <span className="text-[10px] font-mono text-stone-400 font-semibold tracking-widest">
                        PASS #{item.badgeNumber}
                      </span>
                    </div>

                  </div>

                  {/* ================= CARD BODY ================= */}
                  <div className="relative z-10 mt-1">
                    <h3
                      className={`font-playfair font-bold text-xl sm:text-2xl tracking-tight transition-colors duration-300 leading-snug ${
                        isActive
                          ? "text-orange-600 dark:text-orange-400"
                          : "text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400"
                      }`}
                    >
                      {item.title}
                    </h3>

                    <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-poppins leading-relaxed font-light">
                      {item.desc}
                    </p>
                  </div>

                  {/* ================= CARD FOOTER ================= */}
                  <div className="relative z-10 mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs font-semibold text-orange-600 dark:text-orange-400 font-poppins">
                    <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
                      <span>Learn more</span>
                      <ArrowRight size={14} />
                    </span>

                    {/* Small Travel Bag Icon Indicator matching Image 2 */}
                    <div className="flex items-center gap-1 text-[11px] text-stone-400 font-normal">
                      <Luggage size={14} className={isActive ? "text-orange-500" : "text-stone-400 group-hover:text-orange-500"} />
                      <span>TripNova</span>
                    </div>
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
