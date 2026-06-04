"use client";

import React, { useRef } from "react";
import {
  ShieldCheck,
  Headphones,
  MapPin,
  CreditCard,
  SlidersHorizontal,
  BadgeCheck,
} from "lucide-react";

type CardItem = {
  icon: React.ReactNode;
  title: string;
  desc: string;
};

const data: CardItem[] = [
  {
    icon: <ShieldCheck />,
    title: "Fully Licensed & Insured",
    desc: "Government registered tour operator with travel insurance",
  },
  {
    icon: <Headphones />,
    title: "24/7 Support",
    desc: "Round-the-clock assistance during your journey",
  },
  {
    icon: <MapPin />,
    title: "Local Expertise",
    desc: "Native guides for authentic cultural experiences",
  },
  {
    icon: <CreditCard />,
    title: "Flexible Payments",
    desc: "Secure payments with refund protection",
  },
  {
    icon: <SlidersHorizontal />,
    title: "Customizable Itineraries",
    desc: "Tailor-made journeys based on your needs",
  },
  {
    icon: <BadgeCheck />,
    title: "Quality Assurance",
    desc: "Verified services and top-quality experience",
  },
];

const ChooseTripNova = () => {
  return (
    <div className="bg-linear-1200 from-[#ebe9e8] to-[#f7dbc2]/25 rounded-lg p-10 shadow-lg">
      <div className="flex flex-col justify-center items-center mt-20">
        <span className="bg-[#f7dbc2] text-[#d17016] rounded-full border text-xl font-bold border-orange-500 px-6 py-2">
          WHY CHOOSE US
        </span>

        <h1 className="text-4xl font-bold my-4 text-center">
          Why Choose TripNova?
        </h1>

        <h4 className="text-xl text-center text-gray-600">
          Discover why TripNova is your perfect travel companion.
        </h4>
      </div>

      <div className="mt-10">
        <Carousel data={data} />
      </div>
    </div>
  );
};

// ✅ Carousel Component

type CarouselProps = {
  data: CardItem[];
};

const Carousel: React.FC<CarouselProps> = ({ data }) => {
  const scrollRef = useRef<HTMLDivElement | null>(null);

  const scroll = (direction: "left" | "right") => {
    const scrollAmount = 300;

    if (!scrollRef.current) return;

    scrollRef.current.scrollBy({
      left: direction === "left" ? -scrollAmount : scrollAmount,
      behavior: "smooth",
    });
  };

  return (
    <div className="relative w-full">
      <button
        onClick={() => scroll("left")}
        className="absolute left-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        ◀
      </button>

      <button
        onClick={() => scroll("right")}
        className="absolute right-0 top-1/2 -translate-y-1/2 z-10 bg-white shadow p-2 rounded-full"
      >
        ▶
      </button>

      <div
        ref={scrollRef}
        className="flex gap-6 overflow-x-auto scroll-smooth p-4"
      >
        {data.map((item, index) => (
          <div
            key={index}
            className="min-w-[360px] bg-[#f7ebdf] rounded-2xl px-6 py-10 hover:-translate-y-2 transition text-center shadow-md"
          >
            <div className="flex justify-center mb-6">
              <div className="bg-orange-400 p-4 rounded-full text-white text-2xl">
                {item.icon}
              </div>
            </div>

            <h1 className="font-semibold text-2xl text-black">
              {item.title}
            </h1>

            <p className="text-gray-600 mt-2 text-lg">
              {item.desc}
            </p>
          </div>
        ))}
      </div>
    </div>
  );
};

export default ChooseTripNova;