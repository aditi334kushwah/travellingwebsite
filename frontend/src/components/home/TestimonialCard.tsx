"use client";

import { Star, Quote, MapPin } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

type Testimonial = { desc: string; name: string; initials: string; location: string };
type Props = { item: Testimonial; index?: number };

const TestimonialCard: React.FC<Props> = ({ item, index = 0 }) => {
  const isGreen = index === 1;
  return (
    <div className={`relative rounded-2xl p-5 sm:p-6 w-full backdrop-blur-lg border border-white/20 shadow-lg transition-all duration-300 hover:scale-105 hover:shadow-2xl ${isGreen ? "bg-green-200/30 dark:bg-green-900/20" : "bg-orange-200/30 dark:bg-orange-900/20"}`}>
      <div className="flex gap-1 text-black dark:text-white mb-4">
        {Array.from({ length: 5 }).map((_, i) => <Star key={i} size={14} fill="currentColor" />)}
      </div>
      <div className={`absolute top-5 right-5 ${isGreen ? "bg-green-600" : "bg-orange-500"} p-2 sm:p-3 rounded-full text-white`}>
        <Quote size={16} />
      </div>
      <p className="text-gray-800 dark:text-gray-200 text-sm my-6 italic">"{item.desc}"</p>
      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white font-semibold text-sm ${isGreen ? "bg-green-600" : "bg-orange-500"}`}>
          {item.initials}
        </div>
        <div>
          <h4 className="font-semibold text-sm text-gray-900 dark:text-white">{item.name}</h4>
          <p className="text-xs text-gray-600 dark:text-gray-400 flex items-center gap-1"><MapPin size={11} /> {item.location}</p>
        </div>
      </div>
    </div>
  );
};

export default function TestimonialCardSection() {
  const testimonials: Testimonial[] = [
    { desc: "The cultural immersion was incredible.", name: "Maria Klein", initials: "MK", location: "Germany • Rajasthan" },
    { desc: "Perfect balance of adventure and comfort.", name: "James Davidson", initials: "JD", location: "UK • Kerala" },
    { desc: "Exceptional attention to detail.", name: "Sophie Laurent", initials: "SL", location: "France • Rishikesh" },
  ];

  return (
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 dark:from-gray-900 dark:via-gray-800 dark:to-gray-900 py-12 sm:py-16 px-4 sm:px-8">

      <div className="text-center">
        <FadeUp>
          <div className="flex justify-center items-center mb-5">
            <span className="text-black dark:text-white border text-base sm:text-xl font-poppins border-gray-400 dark:border-gray-600 px-5 py-2 rounded-full">
              Testimonials
            </span>
          </div>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h1 className="text-2xl sm:text-3xl md:text-6xl font-playfair my-4 text-gray-900 dark:text-white">
            What Our Travelers Say
          </h1>
        </FadeUp>
        <FadeUp delay={0.2}>
          <h4 className="text-base sm:text-2xl text-gray-600 dark:text-gray-400">
            Real experiences from real travelers.
          </h4>
        </FadeUp>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-5xl">
        {testimonials.map((item, index) => (
          <FadeUp key={index} delay={index * 0.12}>
            <TestimonialCard item={item} index={index} />
          </FadeUp>
        ))}
      </div>

    </div>
  );
}
