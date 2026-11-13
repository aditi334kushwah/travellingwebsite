'use client';
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import { Sparkles, MapPin, Compass, ArrowRight, ShieldCheck, Flame, Heart } from "lucide-react";
import { useState } from "react";

interface FeaturedItem {
  id: string;
  title: string;
  location: string;
  state: string;
  duration: string;
  difficulty: string;
  price: string;
  bestSeason: string;
  img: string;
  packageSlug: string;
  tags: string[];
}

const featuredData: FeaturedItem[] = [
  {
    id: "feat-1",
    title: "White Water Rafting & Cliff Jump",
    location: "Rishikesh",
    state: "Uttarakhand",
    duration: "3 Days / 2 Nights",
    difficulty: "Moderate",
    price: "₹3,999",
    bestSeason: "Sep - Jun",
    img: "/images/rishikesh.png",
    packageSlug: "/packages",
    tags: ["Grade-IV", "Bonfire", "Riverside Camp"],
  },
  {
    id: "feat-2",
    title: "Sam Sand Dunes & Desert Starry Camp",
    location: "Jaisalmer",
    state: "Rajasthan",
    duration: "4 Days / 3 Nights",
    difficulty: "Easy & Relaxed",
    price: "₹5,499",
    bestSeason: "Oct - Mar",
    img: "/images/rajasthan.png",
    packageSlug: "/packages",
    tags: ["Camel Safari", "Kalbelia Dance", "Sunset Dune"],
  },
  {
    id: "feat-3",
    title: "Luxury Alleppey Backwater Cruise",
    location: "Alleppey",
    state: "Kerala",
    duration: "3 Days / 2 Nights",
    difficulty: "Pure Leisure",
    price: "₹6,800",
    bestSeason: "All Year",
    img: "/images/kerela.png",
    packageSlug: "/packages",
    tags: ["Private Chef", "Sunset Deck", "Spice Canal"],
  },
];

export default function FeaturedExperiences() {
  const [likedMap, setLikedMap] = useState<Record<string, boolean>>({});

  const toggleLike = (id: string) => {
    setLikedMap((prev) => ({ ...prev, [id]: !prev[id] }));
  };

  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20">
              <Flame size={13} className="text-amber-500 fill-amber-500 animate-pulse" /> Handpicked Signature
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair mt-2 text-stone-900 dark:text-stone-100">
              Featured Iconic Experiences
            </h2>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <Link
            href="/packages"
            className="inline-flex items-center gap-2 text-sm font-semibold font-poppins text-orange-600 dark:text-orange-400 hover:text-orange-700 transition-colors group cursor-pointer"
          >
            <span>Explore All 25+ Packages</span>
            <ArrowRight size={16} className="group-hover:translate-x-1 transition-transform" />
          </Link>
        </FadeUp>
      </div>

      {/* Featured Grid */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-7">
        {featuredData.map((item, i) => (
          <FadeUp key={item.id} delay={i * 0.12}>
            <div className="group relative rounded-3xl overflow-hidden bg-stone-900 h-[430px] sm:h-[460px] md:h-[490px] border border-stone-800/80 shadow-lg hover:shadow-2xl hover:shadow-orange-500/20 transition-all duration-500 flex flex-col justify-between">
              
              {/* Background Image with Zoom on Hover */}
              <Image
                src={item.img}
                alt={item.title}
                fill
                sizes="(max-width: 768px) 100vw, 33vw"
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Gradient Scrim for perfect contrast */}
              <div className="absolute inset-0 bg-gradient-to-t from-black via-black/40 to-black/20 group-hover:via-black/50 transition-colors duration-300" />

              {/* Top Floating Info Bar */}
              <div className="relative z-10 p-5 flex items-start justify-between">
                <div className="flex flex-col gap-1.5">
                  <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold">
                    <MapPin size={12} className="text-orange-400" />
                    <span>{item.location}, {item.state}</span>
                  </span>
                  <span className="inline-flex items-center gap-1 px-2.5 py-0.5 rounded-full bg-orange-600/80 backdrop-blur-md text-white text-[10px] font-medium tracking-wide w-fit">
                    Best: {item.bestSeason}
                  </span>
                </div>

                <button
                  type="button"
                  onClick={() => toggleLike(item.id)}
                  aria-label="Wishlist this experience"
                  className="w-9 h-9 rounded-full bg-black/50 backdrop-blur-md border border-white/20 flex items-center justify-center text-white hover:scale-110 active:scale-95 transition-transform cursor-pointer"
                >
                  <Heart
                    size={16}
                    className={`transition-colors ${
                      likedMap[item.id] ? "text-rose-500 fill-rose-500" : "text-white group-hover:text-rose-300"
                    }`}
                  />
                </button>
              </div>

              {/* Bottom Card Content */}
              <div className="relative z-10 p-5 sm:p-6 bg-gradient-to-t from-black/95 via-black/80 to-transparent">
                
                {/* Meta Pills (Difficulty & Duration) */}
                <div className="flex items-center gap-2 mb-2.5 flex-wrap">
                  <span className="px-2.5 py-0.5 rounded-md bg-white/15 backdrop-blur-sm text-stone-200 text-[11px] font-medium font-poppins border border-white/10">
                    {item.duration}
                  </span>
                  <span className="px-2.5 py-0.5 rounded-md bg-amber-500/20 backdrop-blur-sm text-amber-300 text-[11px] font-medium font-poppins border border-amber-500/30">
                    {item.difficulty}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold font-playfair text-white group-hover:text-orange-300 transition-colors leading-snug">
                  {item.title}
                </h3>

                {/* Micro Tags */}
                <div className="flex flex-wrap gap-1.5 mt-3">
                  {item.tags.map((tag, idx) => (
                    <span
                      key={idx}
                      className="text-[10px] font-poppins text-stone-300 bg-white/10 backdrop-blur-sm px-2 py-0.5 rounded"
                    >
                      #{tag}
                    </span>
                  ))}
                </div>

                {/* Price and Action Button */}
                <div className="mt-4 pt-4 border-t border-white/15 flex items-center justify-between">
                  <div>
                    <span className="text-[10px] text-stone-400 uppercase tracking-wider block font-poppins">Starting from</span>
                    <span className="text-lg sm:text-xl font-bold font-poppins text-white">{item.price}</span>
                    <span className="text-xs text-stone-400 font-light"> / person</span>
                  </div>

                  <Link
                    href={`/booking?title=${encodeURIComponent(item.title)}&location=${encodeURIComponent(item.location)}&price=${encodeURIComponent(item.price)}`}
                    className="inline-flex items-center gap-1.5 px-4 py-2 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs sm:text-sm font-semibold font-poppins shadow-md shadow-orange-600/30 group-hover:scale-105 active:scale-95 transition-all cursor-pointer"
                  >
                    <span>Book Now</span>
                    <ArrowRight size={14} />
                  </Link>
                </div>

              </div>

            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
