"use client";

import { Star, Quote, MapPin } from "lucide-react";

type Testimonial = {
  desc: string;
  name: string;
  initials: string;
  location: string;
};

type Props = {
  item: Testimonial;
  index?: number;
};

const TestimonialCard: React.FC<Props> = ({ item, index = 0 }) => {
  const isGreen = index === 1;

  return (
    <div
      className={`relative rounded-2xl p-5 sm:p-6 w-full
      backdrop-blur-lg border border-white/20
      shadow-lg transition-all duration-300
      hover:scale-105 hover:shadow-2xl
      ${isGreen ? "bg-green-200/30" : "bg-orange-200/30"}`}
    >
      {/* Stars */}
      <div className="flex gap-1 text-black mb-4">
        {Array.from({ length: 5 }).map((_, i) => (
          <Star key={i} size={14} fill="black" />
        ))}
      </div>

      {/* Quote Icon */}
      <div className={`absolute top-5 right-5 ${isGreen ? "bg-green-600" : "bg-orange-500"} p-2 sm:p-3 rounded-full text-white`}>
        <Quote size={16} />
      </div>

      <p className="text-gray-800 text-sm my-6 italic">"{item.desc}"</p>

      <div className="flex items-center gap-3">
        <div className={`w-10 h-10 sm:w-12 sm:h-12 flex items-center justify-center rounded-full text-white font-semibold text-sm ${isGreen ? "bg-green-600" : "bg-orange-500"}`}>
          {item.initials}
        </div>
        <div>
          <h4 className="font-semibold text-sm text-gray-900">{item.name}</h4>
          <p className="text-xs text-gray-600 flex items-center gap-1">
            <MapPin size={11} /> {item.location}
          </p>
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
    <div className="flex flex-col items-center justify-center bg-gradient-to-r from-gray-200 via-gray-300 to-gray-200 py-12 sm:py-16 px-4 sm:px-8">
      <div className="text-center">
        <div className="flex justify-center items-center mb-5">
          <span className="text-black border text-base sm:text-xl font-bold border-gray-400 px-5 py-2 rounded-full">
            Testimonials
          </span>
        </div>
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold my-4">
          What Our Travelers Say
        </h1>
        <h4 className="text-base sm:text-xl text-gray-600">
          Real experiences from real travelers.
        </h4>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 mt-10 w-full max-w-5xl">
        {testimonials.map((item, index) => (
          <TestimonialCard key={index} item={item} index={index} />
        ))}
      </div>
    </div>
  );
}
