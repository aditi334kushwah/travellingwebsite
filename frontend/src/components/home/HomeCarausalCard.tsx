'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { MapPin, ArrowRight, Sparkles, Star } from "lucide-react";
import FadeUp from '@/components/ui/FadeUp';

type Package = {
  id: number;
  title: string;
  description?: string;
  image: string;
  price: string;
  location: string;
  package_code?: string;
  duration_days?: number;
  duration_nights?: number;
};

// Fallback curated packages in case API is loading or empty
const FALLBACK_PACKAGES: Package[] = [
  {
    id: 1,
    title: "Meenakshi Temple",
    location: "Tamil Nadu",
    price: "1400.00",
    image: "/images/india.png",
    package_code: "PKG-FFE3BB",
  },
  {
    id: 2,
    title: "Ziro Valley",
    location: "Arunachal Pradesh",
    price: "2700.00",
    image: "/images/hero_card1.jpg",
    package_code: "PKG-B8A868",
  },
  {
    id: 3,
    title: "Coorg Mist & Estates",
    location: "Karnataka",
    price: "1800.00",
    image: "/images/darjeeling.png",
    package_code: "PKG-9AF204",
  },
  {
    id: 4,
    title: "Hampi Ruins & Boulder",
    location: "Karnataka",
    price: "2000.00",
    image: "/images/jaipur.png",
    package_code: "PKG-9BCA06",
  },
  {
    id: 5,
    title: "Rishikesh Himalayan Rapids",
    location: "Uttarakhand",
    price: "3200.00",
    image: "/images/rishikesh.png",
    package_code: "PKG-7D41C0",
  },
  {
    id: 6,
    title: "Alleppey Sunset Houseboat",
    location: "Kerala",
    price: "4500.00",
    image: "/images/kerela.png",
    package_code: "PKG-3E90A1",
  },
];

export default function HeroCarausalCard() {
  const [packages, setPackages] = useState<Package[]>(FALLBACK_PACKAGES);
  const router = useRouter();

  useEffect(() => {
    axios.get('https://travellingwebsite-2.onrender.com/api/packages/')
      .then(res => {
        const fetched = res.data.results || [];
        if (fetched.length > 0) {
          setPackages(fetched);
        }
      })
      .catch(() => {
        // Fallback already pre-set
      });
  }, []);

  // Double the array for seamless infinite marquee loop (Left to Right continuous movement)
  const marqueeItems = [...packages, ...packages];

  return (
    <section className="py-16 sm:py-24 bg-gradient-to-b from-[#fcfbf9] via-stone-50/60 to-[#fcfbf9] dark:from-[#09090b] dark:via-stone-900/40 dark:to-[#09090b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles size={13} className="text-orange-500" /> Handpicked Journeys
              </span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-stone-900 dark:text-stone-100 tracking-tight">
                Explore Destinations
              </h2>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="text-sm sm:text-base text-stone-600 dark:text-stone-400 font-poppins mt-1.5 max-w-lg font-light">
                Immerse yourself in India’s most breathtaking heritage sanctuaries and alpine heights.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <button
              onClick={() => router.push('/packages')}
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 dark:text-orange-400 transition group cursor-pointer font-poppins"
            >
              <span>View All 50+ Packages</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </FadeUp>
        </div>

      </div>

      {/* Infinite Continuous Marquee Track (Left to Right continuous auto-scroll) */}
      <div className="relative w-full overflow-hidden pt-3 pb-8">
        
        {/* Soft Edge Gradient Mask for Luxury Aesthetic */}
        <div className="absolute left-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-r from-[#fcfbf9] dark:from-[#09090b] to-transparent z-20 pointer-events-none" />
        <div className="absolute right-0 top-0 bottom-0 w-16 sm:w-28 bg-gradient-to-l from-[#fcfbf9] dark:from-[#09090b] to-transparent z-20 pointer-events-none" />

        <div className="animate-marquee flex gap-5 sm:gap-6 pl-4">
          {marqueeItems.map((pkg, i) => (
            <div
              key={`${pkg.id}-${i}`}
              onClick={() => router.push(`/packages/${pkg.id}`)}
              className="relative w-[240px] sm:w-[270px] md:w-[290px] h-[370px] sm:h-[410px] md:h-[430px] rounded-[30px] overflow-hidden cursor-pointer group shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(234,88,12,0.25)] transition-all duration-500 hover:-translate-y-2 border border-black/5 dark:border-white/10 shrink-0"
            >
              {/* Card Image */}
              <Image
                src={pkg.image || "/images/hero.jpg"}
                alt={pkg.title}
                fill
                unoptimized
                className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
              />

              {/* Rich Gradient Scrim (matching image card style) */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/95 via-black/35 to-black/15 group-hover:via-black/45 transition-colors duration-500" />

              {/* Top Bar: Code Pill + Rating Badge */}
              <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                <span className="font-mono text-[10px] sm:text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                  {pkg.package_code || `PKG-${String(pkg.id).padStart(3, '0')}`}
                </span>
                <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-500 text-white backdrop-blur-md shadow-sm">
                  <Star size={11} fill="currentColor" /> 4.9
                </span>
              </div>

              {/* Bottom Content Area */}
              <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white z-10 flex flex-col justify-end">
                {/* Location Badge */}
                <p className="text-[11px] uppercase tracking-wider font-semibold text-orange-400 flex items-center gap-1 mb-1 font-poppins">
                  <MapPin size={13} className="text-orange-400 shrink-0" />
                  <span>{pkg.location}</span>
                </p>

                {/* Title */}
                <h3 className="text-xl sm:text-2xl font-bold font-playfair tracking-tight text-white group-hover:text-orange-200 transition-colors line-clamp-1 leading-snug">
                  {pkg.title}
                </h3>

                {/* Price & Circular Action Pill */}
                <div className="mt-4 pt-3 border-t border-white/15 flex items-center justify-between">
                  <div>
                    <span className="text-[9px] sm:text-[10px] uppercase tracking-wider text-stone-300 block font-poppins font-light">
                      STARTING FROM
                    </span>
                    <span className="text-base sm:text-lg font-bold font-poppins text-white">
                      ₹{pkg.price}
                    </span>
                  </div>

                  {/* Circular Arrow Button (matching user image) */}
                  <span className="w-9 h-9 sm:w-10 sm:h-10 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-gradient-to-r group-hover:from-orange-600 group-hover:to-amber-600 group-hover:scale-110 transition-all duration-300 border border-white/15 shadow-sm">
                    <ArrowRight size={16} />
                  </span>
                </div>
              </div>

            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
