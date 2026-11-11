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
    <div className="relative rounded-3xl p-6 sm:p-8 w-full bg-white dark:bg-gray-900 border border-stone-200/80 dark:border-gray-800 shadow-[0_4px_25px_rgb(0,0,0,0.04)] transition-all duration-500 hover:-translate-y-2 hover:shadow-[0_20px_40px_rgb(0,0,0,0.08)] flex flex-col justify-between">
      {/* Top Header: Star rating & Quote icon */}
      <div>
        <div className="flex items-center justify-between mb-4">
          <div className="flex gap-1 text-amber-500">
            {Array.from({ length: 5 }).map((_, i) => (
              <Star key={i} size={15} fill="currentColor" />
            ))}
          </div>
          <div className="w-9 h-9 rounded-full bg-orange-50 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center">
            <Quote size={16} />
          </div>
        </div>

        <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base leading-relaxed font-poppins italic">
          "{item.desc}"
        </p>

        <div className="mt-3 inline-flex items-center gap-1 text-[11px] font-semibold text-emerald-600 dark:text-emerald-400 bg-emerald-50 dark:bg-emerald-950/60 px-2 py-0.5 rounded-md">
          <CheckCircle2 size={12} /> Verified Traveler &bull; {item.trip}
        </div>
      </div>

      {/* User Info Bar */}
      <div className="flex items-center gap-3.5 mt-6 pt-5 border-t border-stone-100 dark:border-gray-800">
        <div className="w-11 h-11 flex items-center justify-center rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white font-bold text-sm shadow-md shadow-orange-500/20 shrink-0">
          {item.initials}
        </div>
        <div>
          <h4 className="font-bold text-sm sm:text-base text-gray-900 dark:text-white font-playfair">
            {item.name}
          </h4>
          <p className="text-xs text-gray-500 dark:text-gray-400 flex items-center gap-1 mt-0.5 font-poppins">
            <MapPin size={12} className="text-orange-500" /> {item.location}
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
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#fcfbf9] via-stone-50 to-[#fcfbf9] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950 px-4 sm:px-6">
      <div className="max-w-6xl mx-auto">
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-900/50 text-xs font-bold uppercase tracking-wider">
              Traveler Stories
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mt-4 text-gray-900 dark:text-white tracking-tight">
              What Our Travelers Say
            </h2>
          </FadeUp>

          <FadeUp delay={0.18}>
            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 font-poppins">
              Authentic stories and verified memories from explorers across the globe.
            </p>
          </FadeUp>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
          {testimonials.map((item, index) => (
            <FadeUp key={index} delay={index * 0.1}>
              <TestimonialCard item={item} index={index} />
            </FadeUp>
          ))}
        </div>
      </div>
    </section>
  );
}
