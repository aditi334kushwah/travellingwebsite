"use client";

import React from "react";
import { ShieldCheck, Headphones, MapPin, CreditCard, SlidersHorizontal, BadgeCheck } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

type CardItem = { icon: React.ReactNode; title: string; desc: string };

const data: CardItem[] = [
  { icon: <ShieldCheck size={28} />, title: "Fully Licensed & Insured", desc: "Government registered tour operator with travel insurance" },
  { icon: <Headphones size={28} />, title: "24/7 Support", desc: "Round-the-clock assistance during your journey" },
  { icon: <MapPin size={28} />, title: "Local Expertise", desc: "Native guides for authentic cultural experiences" },
  { icon: <CreditCard size={28} />, title: "Flexible Payments", desc: "Secure payments with refund protection" },
  { icon: <SlidersHorizontal size={28} />, title: "Customizable Itineraries", desc: "Tailor-made journeys based on your needs" },
  { icon: <BadgeCheck size={28} />, title: "Quality Assurance", desc: "Verified services and top-quality experience" },
];

const FeatureCard = ({ icon, title, desc }: CardItem) => (
  <div className="group relative w-full bg-white dark:bg-gray-800 rounded-2xl px-5 sm:px-7 py-8 sm:py-10 text-center shadow-md border border-orange-100 dark:border-gray-700 overflow-hidden transition-all duration-500 hover:-translate-y-3 hover:shadow-2xl hover:border-transparent">
    <div className="absolute -top-10 -right-10 w-24 h-24 rounded-full bg-gradient-to-br from-[#f7b26a] to-[#c8782f] scale-0 group-hover:scale-[6] transition-transform duration-700 ease-out z-0" />
    <div className="relative z-10">
      <div className="flex justify-center mb-5 sm:mb-6">
        <div className="bg-gradient-to-br from-[#f7b26a] to-[#c8782f] p-3.5 sm:p-4 rounded-2xl text-white shadow-md group-hover:rotate-6 transition-all duration-500">
          {icon}
        </div>
      </div>
      <h1 className="font-poppins font-semibold text-lg sm:text-xl md:text-2xl text-[#262626] dark:text-white group-hover:text-white transition-colors duration-500">{title}</h1>
      <div className="w-10 h-[3px] bg-[#c8782f] mx-auto my-3 rounded-full group-hover:bg-white transition-colors duration-500" />
      <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base font-poppins leading-relaxed group-hover:text-white/90 transition-colors duration-500">{desc}</p>
    </div>
  </div>
);

const ChooseTripNova = () => (
  <div className="bg-gradient-to-b from-[#ebe9e8] to-[#f7dbc2]/25 dark:from-gray-900 dark:to-gray-800 rounded-lg p-4 sm:p-6 md:p-10 shadow-lg">
    <div className="flex flex-col justify-center items-center mt-6 sm:mt-10 md:mt-16">
      <FadeUp>
        <span className="bg-[#f7dbc2] dark:bg-orange-900/40 text-[#d17016] dark:text-orange-300 rounded-full border text-sm sm:text-base md:text-xl font-poppins border-orange-500 px-4 sm:px-6 py-1.5 sm:py-2">
          WHY CHOOSE US
        </span>
      </FadeUp>
      <FadeUp delay={0.15}>
        <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-playfair my-3 sm:my-4 text-center text-gray-900 dark:text-white">
          Why Choose TripNova?
        </h1>
      </FadeUp>
    </div>

    <div className="mt-8 sm:mt-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
      {data.map((item, index) => (
        <FadeUp key={index} delay={index * 0.1}>
          <FeatureCard {...item} />
        </FadeUp>
      ))}
    </div>
  </div>
);

export default ChooseTripNova;
