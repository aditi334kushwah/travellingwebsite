'use client';
import { Globe, Utensils, Map, Hotel } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const data = [
  { icon: Globe, text: "Local Culture" },
  { icon: Utensils, text: "Authentic Food" },
  { icon: Map, text: "Guided Tours" },
  { icon: Hotel, text: "Comfortable Stays" },
];

export default function WhatYouGet() {
  return (
    <section className="py-12 sm:py-16 bg-[#111827] text-white px-4">
      <FadeUp>
        <h2 className="text-2xl sm:text-3xl text-center font-playfair mb-8 sm:mb-10">
          What You'll Experience
        </h2>
      </FadeUp>

      <div className="grid grid-cols-2 sm:grid-cols-4 gap-8 max-w-3xl mx-auto">
        {data.map((item, i) => {
          const Icon = item.icon;
          return (
            <FadeUp key={i} delay={i * 0.1}>
              <div className="text-center">
                <Icon className="w-8 h-8 sm:w-10 sm:h-10 mx-auto text-yellow-400" />
                <p className="mt-3 text-sm sm:text-base">{item.text}</p>
              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
