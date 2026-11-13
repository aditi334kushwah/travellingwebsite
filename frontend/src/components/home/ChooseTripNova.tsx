"use client";

import React, { useState } from "react";
import { ShieldCheck, Headphones, MapPin, CreditCard, SlidersHorizontal, BadgeCheck, Sparkles, ArrowRight } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

type CardItem = { 
  id: number;
  icon: React.ReactNode; 
  title: string; 
  desc: string; 
  tag: string;
};

const data: CardItem[] = [
  { 
    id: 1,
    icon: <ShieldCheck size={28} />, 
    title: "Fully Licensed & Insured", 
    desc: "Government registered tour operator with comprehensive traveler insurance.", 
    tag: "VERIFIED" 
  },
  { 
    id: 2,
    icon: <Headphones size={28} />, 
    title: "24/7 Concierge Support", 
    desc: "Dedicated ground support and round-the-clock emergency assistance during your trip.", 
    tag: "ALWAYS ON" 
  },
  { 
    id: 3,
    icon: <MapPin size={28} />, 
    title: "Local Expert Guides", 
    desc: "Native storytellers and accredited cultural historians for authentic experiences.", 
    tag: "CURATED" 
  },
  { 
    id: 4,
    icon: <CreditCard size={28} />, 
    title: "Flexible & Secure Payments", 
    desc: "Razorpay 256-bit encrypted checkout with 100% money-back guarantee.", 
    tag: "PROTECTED" 
  },
  { 
    id: 5,
    icon: <SlidersHorizontal size={28} />, 
    title: "Customized Day Itineraries", 
    desc: "Bespoke circuits customized to your travel pace, diet, and luxury preferences.", 
    tag: "TAILORED" 
  },
  { 
    id: 6,
    icon: <BadgeCheck size={28} />, 
    title: "Premium Quality Stays", 
    desc: "Pre-screened boutique resorts, verified vehicles, and transparent pricing.", 
    tag: "CERTIFIED" 
  },
];

const FeatureCard = ({ id, icon, title, desc, tag, isHighlighted, onHover }: CardItem & { isHighlighted: boolean; onHover: () => void }) => (
  <div 
    onMouseEnter={onHover}
    className={`group relative w-full rounded-[34px] p-7 sm:p-9 text-left transition-all duration-500 cursor-pointer flex flex-col justify-between h-full ${
      isHighlighted 
        ? "bg-white dark:bg-stone-900 border-2 border-orange-500 shadow-[0_22px_45px_rgb(234,88,12,0.18)] -translate-y-2.5 scale-[1.02]" 
        : "bg-white/90 dark:bg-stone-900/80 border border-stone-200/90 dark:border-stone-800 shadow-[0_4px_24px_rgb(0,0,0,0.03)] hover:-translate-y-2 hover:border-orange-400 hover:shadow-[0_20px_40px_rgb(234,88,12,0.14)]"
    }`}
  >
    {/* Dynamic Background Organic Glow on Highlight/Hover */}
    <div 
      className={`absolute inset-0 rounded-[34px] pointer-events-none transition-opacity duration-500 ${
        isHighlighted ? "opacity-100 bg-gradient-to-br from-orange-500/[0.04] via-transparent to-amber-500/[0.06]" : "opacity-0 group-hover:opacity-100 bg-gradient-to-br from-orange-500/[0.03] to-transparent"
      }`} 
    />

    <div className="relative z-10">
      {/* Top Bar: Icon Pill Container (Matching Image 3) + Tag */}
      <div className="flex items-start justify-between mb-6">
        
        {/* Rounded Soft Square Icon Container in Rich Brand Orange */}
        <div 
          className={`w-14 h-14 rounded-[22px] flex items-center justify-center transition-all duration-500 shadow-md ${
            isHighlighted
              ? "bg-gradient-to-br from-orange-500 via-orange-600 to-amber-600 text-white shadow-orange-500/35 scale-110 rotate-3"
              : "bg-orange-500 text-white group-hover:bg-gradient-to-br group-hover:from-orange-500 group-hover:to-amber-600 group-hover:scale-110 group-hover:rotate-3 shadow-orange-500/20"
          }`}
        >
          {icon}
        </div>

        {/* Status Tag Pill (Matching Image 3: e.g. ALWAYS ON, VERIFIED, PROTECTED) */}
        <span 
          className={`text-[10px] sm:text-[11px] font-bold font-poppins uppercase tracking-wider px-3 py-1 rounded-full border transition-colors duration-300 ${
            isHighlighted
              ? "bg-orange-500 text-white border-orange-500 shadow-sm"
              : "text-orange-600 dark:text-orange-400 bg-orange-500/10 border-orange-500/25 group-hover:bg-orange-500 group-hover:text-white group-hover:border-orange-500"
          }`}
        >
          {tag}
        </span>
      </div>

      {/* Card Title (Highlights in Brand Orange on Active/Hover) */}
      <h3 
        className={`font-playfair font-bold text-xl sm:text-2xl tracking-tight transition-colors duration-300 leading-snug ${
          isHighlighted
            ? "text-orange-600 dark:text-orange-400"
            : "text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400"
        }`}
      >
        {title}
      </h3>

      {/* Card Description */}
      <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-poppins leading-relaxed font-light">
        {desc}
      </p>
    </div>

    {/* Bottom Footer Action (Matching "Learn more →") */}
    <div className="relative z-10 mt-6 pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between text-xs font-semibold text-orange-600 dark:text-orange-400 font-poppins">
      <span className="group-hover:translate-x-1 transition-transform inline-flex items-center gap-1.5">
        <span>Learn more</span>
        <ArrowRight size={14} />
      </span>
      <span 
        className={`w-2 h-2 rounded-full transition-all duration-300 ${
          isHighlighted ? "bg-orange-500 scale-125 animate-ping" : "bg-stone-300 dark:bg-stone-700 group-hover:bg-orange-500"
        }`} 
      />
    </div>
  </div>
);

const ChooseTripNova = () => {
  const [highlightedId, setHighlightedId] = useState<number>(2); // Default active card (24/7 Concierge Support as in user image)

  return (
    <section className="py-20 sm:py-28 bg-[#fcfbf9] dark:bg-[#09090b] relative overflow-hidden border-b border-stone-200/70 dark:border-stone-800/80">
      
      {/* Subtle Background Glow Orbs */}
      <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[700px] h-[350px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

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

        {/* 6-Card Grid Matching User Image 3 */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {data.map((item, index) => (
            <FadeUp key={item.id} delay={index * 0.08} className="h-full">
              <FeatureCard 
                {...item} 
                isHighlighted={highlightedId === item.id}
                onHover={() => setHighlightedId(item.id)}
              />
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
};

export default ChooseTripNova;
