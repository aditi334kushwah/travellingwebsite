"use client";

import { Star, Quote, MapPin, CheckCircle2 } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

type Testimonial = {
  desc: string;
  name: string;
  initials: string;
  location: string;
  trip: string;
  rating: number;
};

type Props = { item: Testimonial; index?: number };

const TestimonialCard: React.FC<Props> = ({ item, index = 0 }) => {
  return (
    <div className="group relative rounded-[32px] p-7 sm:p-9 w-full bg-white dark:bg-stone-900 border border-stone-200/90 dark:border-stone-800 shadow-[0_6px_30px_rgb(0,0,0,0.04)] hover:shadow-[0_24px_50px_rgb(234,88,12,0.14)] transition-all duration-500 hover:-translate-y-2 hover:border-orange-500/40 flex flex-col justify-between h-full">
      
      {/* Top Header: Star rating & Orange Quote icon pill (Matching User Image 2) */}
      <div>
        <div className="flex items-center justify-between mb-5">
          {/* 5-Star Rating in Brand Amber/Orange */}
          <div className="flex gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={16} fill="currentColor" className="drop-shadow-sm" />
            ))}
          </div>

          {/* Soft Quote Icon Pill */}
          <div className="w-10 h-10 rounded-full bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
            <Quote size={17} />
          </div>
        </div>

        {/* Testimonial Quote in Playfair / Poppins */}
        <p className="text-stone-700 dark:text-stone-200 text-sm sm:text-base leading-relaxed font-poppins font-light italic">
          &ldquo;{item.desc}&rdquo;
        </p>

        {/* Verified Traveler Pill with Green Indicator */}
        <div className="mt-4 inline-flex items-center gap-1.5 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 border border-emerald-200/60 dark:border-emerald-900/40 px-2.5 py-1 rounded-full font-poppins">
          <CheckCircle2 size={13} />
          <span>Verified Traveler • {item.trip}</span>
        </div>
      </div>

      {/* User Info Bar at Bottom with Gradient Avatar (Matching User Image 2) */}
      <div className="flex items-center gap-3.5 mt-7 pt-5 border-t border-stone-100 dark:border-stone-800/80">
        <div className="w-12 h-12 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/25 shrink-0 group-hover:scale-105 transition-transform">
          {item.initials}
        </div>
        <div>
          <h4 className="font-bold text-base text-stone-900 dark:text-white font-playfair leading-tight">
            {item.name}
          </h4>
          <p className="text-xs text-stone-500 dark:text-stone-400 flex items-center gap-1 mt-0.5 font-poppins">
            <MapPin size={12} className="text-orange-500 shrink-0" />
            <span>{item.location}</span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialCardSection() {
  const testimonials: Testimonial[] = [
    {
      desc: "The cultural immersion in Rajasthan was beyond words. From private desert camps to local folk artists, every detail felt royally curated.",
      name: "Maria Klein",
      initials: "MK",
      location: "Frankfurt, Germany",
      trip: "Royal Rajasthan Circuit",
      rating: 5,
    },
    {
      desc: "Perfect balance of adrenaline and tranquil mountain comfort. Our guide was extraordinarily knowledgeable and safety-first.",
      name: "James Davidson",
      initials: "JD",
      location: "London, United Kingdom",
      trip: "Kerala Backwaters & Munnar",
      rating: 5,
    },
    {
      desc: "Exceptional attention to detail and zero booking friction. The digital voucher on phone made check-in seamless across every destination.",
      name: "Sophie Laurent",
      initials: "SL",
      location: "Paris, France",
      trip: "Spiritual Rishikesh Escape",
      rating: 5,
    },
  ];

  return (
    <section className="py-20 sm:py-28 bg-gradient-to-b from-[#fcfbf9] via-stone-50/50 to-[#fcfbf9] dark:from-[#09090b] dark:via-stone-900/40 dark:to-[#09090b] px-4 sm:px-6 border-b border-stone-200/70 dark:border-stone-800/80">
      <div className="max-w-7xl mx-auto">
        
        {/* Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider mb-2 font-poppins">
              <Quote size={13} className="text-orange-500" /> Traveler Stories
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              What Our Travelers Say
            </h2>
          </FadeUp>
          <FadeUp delay={0.2}>
            <p className="mt-3 text-xs sm:text-base text-stone-600 dark:text-stone-400 font-poppins font-light">
              Real experiences from real explorers who trusted TripNova for their holidays across India.
            </p>
          </FadeUp>
        </div>

        {/* 3 Testimonials in Grid Matching Image 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8 items-stretch">
          {testimonials.map((item, index) => (
            <FadeUp key={index} delay={index * 0.1} className="h-full">
              <TestimonialCard item={item} index={index} />
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
