"use client";

import React from "react";
import { ShieldCheck, Headphones, MapPin, CreditCard, SlidersHorizontal, BadgeCheck, Sparkles } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

type CardItem = { icon: React.ReactNode; title: string; desc: string; tag: string };

const data: CardItem[] = [
  { icon: <ShieldCheck size={26} />, title: "Fully Licensed & Insured", desc: "Government registered tour operator with comprehensive traveler insurance.", tag: "Verified" },
  { icon: <Headphones size={26} />, title: "24/7 Concierge Support", desc: "Dedicated ground support and round-the-clock emergency assistance during your trip.", tag: "Always On" },
  { icon: <MapPin size={26} />, title: "Local Expert Guides", desc: "Native storytellers and accredited cultural historians for authentic experiences.", tag: "Curated" },
  { icon: <CreditCard size={26} />, title: "Flexible & Secure Payments", desc: "Razorpay 256-bit encrypted checkout with 100% money-back guarantee.", tag: "Protected" },
  { icon: <SlidersHorizontal size={26} />, title: "Customized Day Itineraries", desc: "Bespoke circuits customized to your travel pace, diet, and luxury preferences.", tag: "Tailored" },
  { icon: <BadgeCheck size={26} />, title: "Premium Quality Stays", desc: "Pre-screened boutique resorts, verified vehicles, and transparent pricing.", tag: "Certified" },
];

const FeatureCard = ({ icon, title, desc, tag }: CardItem) => (
  <div className="group relative w-full bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 text-left shadow-[0_4px_20px_rgb(0,0,0,0.04)] border border-stone-200/80 dark:border-gray-800 transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(234,88,12,0.12)] hover:border-orange-300 dark:hover:border-orange-500/30">
    <div className="flex items-center justify-between mb-6">
      <div className="w-13 h-13 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-md shadow-orange-500/20 group-hover:scale-110 group-hover:rotate-3 transition-transform duration-300">
        {icon}
      </div>
      <span className="text-[11px] font-bold font-mono uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-50 dark:bg-orange-950/60 px-2.5 py-1 rounded-full border border-orange-200/60 dark:border-orange-900/40">
        {tag}
      </span>
    </div>

    <h3 className="font-playfair font-bold text-xl sm:text-2xl text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors duration-300">
      {title}
    </h3>

    <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-300 font-poppins leading-relaxed">
      {desc}
    </p>

    <div className="mt-6 pt-4 border-t border-stone-100 dark:border-gray-800 flex items-center text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:translate-x-1 transition-transform">
      Learn more &rarr;
    </div>
  </div>
);

const ChooseTripNova = () => (
  <section className="py-20 sm:py-24 bg-gradient-to-b from-[#fcfbf9] via-stone-50 to-[#fcfbf9] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
    <div className="max-w-7xl mx-auto px-4 sm:px-6">

      <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
        <FadeUp>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-900/50 text-xs font-bold uppercase tracking-wider">
            <Sparkles size={13} /> Why Travel With Us
          </span>
        </FadeUp>

        <FadeUp delay={0.1}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold mt-4 text-gray-900 dark:text-white tracking-tight">
            Why Choose TripNova?
          </h2>
        </FadeUp>

        <FadeUp delay={0.18}>
          <p className="mt-4 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 font-poppins max-w-2xl mx-auto">
            From verified mountain lodges to 24/7 dedicated concierges, we craft journeys with unmatched safety, elegance, and authenticity.
          </p>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-8">
        {data.map((item, index) => (
          <FadeUp key={index} delay={index * 0.08}>
            <FeatureCard {...item} />
          </FadeUp>
        ))}
      </div>

    </div>
  </section>
);

export default ChooseTripNova;
