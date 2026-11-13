'use client';
import { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import FadeUp from "@/components/ui/FadeUp";
import { Compass, Sparkles, Flame, Waves, Landmark, Trees, ArrowUpRight, Clock, Star } from "lucide-react";

type CategoryFilter = 'all' | 'adventure' | 'spiritual' | 'beach' | 'cultural' | 'nature';

interface ExperienceCategory {
  id: string;
  tag: CategoryFilter;
  title: string;
  badge: string;
  duration: string;
  rating: string;
  desc: string;
  img: string;
  packageSlug: string;
  highlights: string[];
}

const filterTabs = [
  { id: 'all', label: 'All Experiences', icon: Sparkles },
  { id: 'adventure', label: 'Adventure & Treks', icon: Flame },
  { id: 'spiritual', label: 'Spiritual & Sacred', icon: Landmark },
  { id: 'beach', label: 'Coastal & Waters', icon: Waves },
  { id: 'nature', label: 'Nature & Wildlife', icon: Trees },
  { id: 'cultural', label: 'Heritage & Royals', icon: Compass },
];

const categoriesData: ExperienceCategory[] = [
  {
    id: "exp-1",
    tag: "adventure",
    title: "Himalayan Snow Trek & Rapids",
    badge: "High Adrenaline",
    duration: "4 - 7 Days",
    rating: "4.95",
    desc: "Grade-IV white water river rafting in Rishikesh, cliff-jumping, and majestic mountain base camping under starry skies.",
    img: "/images/rishikesh.png",
    packageSlug: "/packages",
    highlights: ["Grade IV Rapids", "Cliff Diving", "Bonfire Nights"],
  },
  {
    id: "exp-2",
    tag: "spiritual",
    title: "Sacred Ghats & Temple Trails",
    badge: "Soulful Bliss",
    duration: "3 - 5 Days",
    rating: "4.98",
    desc: "Experience mesmerizing evening Ganga Aarti, divine Himalayan shrines of Chardham, and sacred chants at dawn.",
    img: "/images/chardham.png",
    packageSlug: "/packages",
    highlights: ["VIP Darshan Pass", "Ganga Sandhya Aarti", "Heritage Walk"],
  },
  {
    id: "exp-3",
    tag: "beach",
    title: "Sun-drenched Coastal Serenity",
    badge: "Relax & Unwind",
    duration: "3 - 6 Days",
    rating: "4.90",
    desc: "Golden sandy shores, sunset catamaran cruises, vibrant coastal shacks, and exhilarating scuba reef diving.",
    img: "/images/goa.png",
    packageSlug: "/packages",
    highlights: ["Catamaran Cruise", "Snorkeling Reef", "Sunset Sundowner"],
  },
  {
    id: "exp-4",
    tag: "cultural",
    title: "Royal Havelis & Fort Legends",
    badge: "Living Heritage",
    duration: "4 - 6 Days",
    rating: "4.92",
    desc: "Step into regal Rajputana history with royal palace banquets, pink sandstone ramparts, and colorful bazaar walks.",
    img: "/images/jaipur.png",
    packageSlug: "/packages",
    highlights: ["Palace Dinners", "Folk Dance Shows", "Curated Souks"],
  },
  {
    id: "exp-5",
    tag: "nature",
    title: "Verdant Tea Hills & Cloud Forests",
    badge: "Pure Wilderness",
    duration: "3 - 5 Days",
    rating: "4.89",
    desc: "Misty pine ridges, sunrise views over Kanchenjunga, heritage toy train rides, and lush organic tea estate trails.",
    img: "/images/darjeeling.png",
    packageSlug: "/packages",
    highlights: ["Toy Train Ride", "Tea Tasting Tour", "Tiger Hill Dawn"],
  },
  {
    id: "exp-6",
    tag: "adventure",
    title: "High Altitude Desert Expeditions",
    badge: "Epic Trail",
    duration: "6 - 9 Days",
    rating: "4.97",
    desc: "Traverse lunar landscapes of Nubra, world's highest motorable passes, and surreal turquoise waters of Pangong Lake.",
    img: "/images/ladakh.png",
    packageSlug: "/packages",
    highlights: ["Khardung La Pass", "Monastery Chants", "Stargazing Camp"],
  },
];

export default function ExperienceCategories() {
  const [activeFilter, setActiveFilter] = useState<CategoryFilter>('all');

  const filteredCategories = activeFilter === 'all'
    ? categoriesData
    : categoriesData.filter((item) => item.tag === activeFilter);

  return (
    <section className="w-full">
      {/* Section Header */}
      <div className="flex flex-col md:flex-row md:items-end justify-between mb-8 gap-4">
        <div>
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
              <Sparkles size={13} className="text-orange-500 animate-spin-slow" /> Tailored Styles
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair mt-2 text-stone-900 dark:text-stone-100">
              Immersive Categories Crafted for Every Traveler
            </h2>
          </FadeUp>
        </div>
        <FadeUp delay={0.2}>
          <p className="text-sm font-poppins text-stone-600 dark:text-stone-400 max-w-md">
            Whether seeking heart-pumping thrills, peaceful mindfulness, or timeless heritage, explore our verified journeys.
          </p>
        </FadeUp>
      </div>

      {/* Interactive Filter Pills */}
      <FadeUp delay={0.15}>
        <div className="flex items-center gap-2 overflow-x-auto pb-4 pt-1 scrollbar-none border-b border-stone-200/80 dark:border-stone-800/80 mb-8">
          {filterTabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeFilter === tab.id;
            return (
              <button
                key={tab.id}
                onClick={() => setActiveFilter(tab.id as CategoryFilter)}
                className={`group flex items-center gap-2 px-4 py-2.5 rounded-full text-xs sm:text-sm font-medium font-poppins transition-all duration-300 whitespace-nowrap cursor-pointer ${
                  isActive
                    ? 'bg-gradient-to-r from-orange-600 to-amber-600 text-white shadow-md shadow-orange-500/25 scale-[1.02]'
                    : 'bg-white/80 dark:bg-stone-900/80 text-stone-700 dark:text-stone-300 border border-stone-200/80 dark:border-stone-800 hover:border-orange-500/40 hover:bg-orange-50/50 dark:hover:bg-stone-800/80'
                }`}
              >
                <Icon size={14} className={`transition-transform duration-300 ${isActive ? 'scale-110' : 'group-hover:rotate-12 text-orange-500'}`} />
                <span>{tab.label}</span>
                {tab.id === 'all' && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full ${isActive ? 'bg-white/20 text-white' : 'bg-stone-200 dark:bg-stone-800 text-stone-600 dark:text-stone-400'}`}>
                    {categoriesData.length}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </FadeUp>

      {/* Responsive Grid with Modern Cards */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 sm:gap-7">
        {filteredCategories.map((item, i) => (
          <FadeUp key={item.id} delay={i * 0.08}>
            <div className="group relative bg-white dark:bg-stone-900/80 rounded-2xl overflow-hidden border border-stone-200/80 dark:border-stone-800/90 shadow-sm hover:shadow-xl hover:shadow-orange-500/10 hover:-translate-y-1.5 transition-all duration-300 flex flex-col h-full">
              
              {/* Image & Overlay Badges */}
              <div className="relative w-full h-[220px] sm:h-[240px] overflow-hidden bg-stone-100 dark:bg-stone-800">
                <Image
                  src={item.img}
                  alt={item.title}
                  fill
                  sizes="(max-width: 640px) 100vw, (max-width: 1024px) 50vw, 33vw"
                  className="object-cover transition-transform duration-700 ease-out group-hover:scale-108"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-stone-950/80 via-transparent to-black/25" />

                {/* Floating Top Pill */}
                <div className="absolute top-3.5 left-3.5 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/55 backdrop-blur-md border border-white/20 text-white text-[11px] font-semibold">
                  <span className="w-1.5 h-1.5 rounded-full bg-amber-400 animate-pulse" />
                  {item.badge}
                </div>

                {/* Rating Badge */}
                <div className="absolute top-3.5 right-3.5 flex items-center gap-1 px-2.5 py-1 rounded-full bg-white/90 dark:bg-stone-900/90 backdrop-blur-md text-stone-900 dark:text-stone-100 text-[11px] font-bold shadow-sm">
                  <Star size={12} className="text-amber-500 fill-amber-500" />
                  <span>{item.rating}</span>
                </div>

                {/* Duration Tag at bottom left of image */}
                <div className="absolute bottom-3 left-3.5 flex items-center gap-1.5 text-xs text-white/90 font-medium font-poppins">
                  <Clock size={13} className="text-amber-400" />
                  <span>{item.duration}</span>
                </div>
              </div>

              {/* Card Body */}
              <div className="p-5 flex flex-col flex-grow justify-between">
                <div>
                  <h3 className="text-xl font-bold font-playfair text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                    {item.title}
                  </h3>
                  <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-2 font-poppins line-clamp-2 leading-relaxed">
                    {item.desc}
                  </p>

                  {/* Micro Highlights Badges */}
                  <div className="flex flex-wrap gap-1.5 mt-3.5">
                    {item.highlights.map((h, idx) => (
                      <span
                        key={idx}
                        className="text-[11px] font-poppins px-2 py-0.5 rounded-md bg-stone-100 dark:bg-stone-800/80 text-stone-700 dark:text-stone-300 border border-stone-200/60 dark:border-stone-700/60"
                      >
                        {h}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Card CTA Link */}
                <div className="pt-4 mt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center justify-between">
                  <span className="text-xs font-semibold text-stone-500 dark:text-stone-400 uppercase tracking-wider">
                    Curated Expeditions
                  </span>
                  <Link
                    href={item.packageSlug}
                    className="inline-flex items-center gap-1 text-xs sm:text-sm font-semibold font-poppins text-orange-600 dark:text-orange-400 group-hover:translate-x-0.5 transition-transform"
                  >
                    <span>View Tours</span>
                    <ArrowUpRight size={15} />
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
