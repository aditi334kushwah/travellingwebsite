'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { Compass, Sparkles, ArrowRight } from "lucide-react";
import FadeUp from '@/components/ui/FadeUp';

type Package = {
  id: number;
  title: string;
  description?: string;
  location: string;
  image: string;
  price: string;
  category?: string;
};

// Fallback curated packages matching Indian destinations
const FALLBACK_HANDPICKED: Package[] = [
  {
    id: 1,
    title: "Rajasthan",
    location: "Royal Haveli & Desert Circuits",
    image: "/images/jaipur.png",
    price: "4,499",
    category: "HERITAGE",
  },
  {
    id: 2,
    title: "Kerala",
    location: "Alleppey Houseboats & Munnar Hills",
    image: "/images/kerela.png",
    price: "5,800",
    category: "COASTAL",
  },
  {
    id: 3,
    title: "Himalayas",
    location: "Rishikesh & Uttarakhand Shrines",
    image: "/images/rishikesh.png",
    price: "3,200",
    category: "ADVENTURE",
  },
];

export default function HeroPackage() {
  const router = useRouter();
  const [packages, setPackages] = useState<Package[]>(FALLBACK_HANDPICKED);

  useEffect(() => {
    axios.get("https://travellingwebsite-2.onrender.com/api/packages/")
      .then(res => {
        const fetched = res.data.results || [];
        if (fetched.length >= 3) {
          setPackages(fetched.slice(0, 3));
        }
      })
      .catch(() => {
        // Fallback already preloaded
      });
  }, []);

  return (
    <section className="py-16 sm:py-24 bg-[#fcfbf9] dark:bg-[#09090b] relative overflow-hidden border-b border-stone-200/70 dark:border-stone-800/80">
      
      {/* Soft Ambient Radial Glow */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[700px] h-[350px] bg-orange-500/5 rounded-full blur-[140px] pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 relative z-10">

        {/* Section Header Matching User Image 2 */}
        <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider mb-3 font-poppins">
              <Sparkles size={13} className="text-orange-500" /> Exclusive Destinations
            </span>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-stone-900 dark:text-stone-100 tracking-tight">
              Handpicked Packages
            </h2>
          </FadeUp>
        </div>

        {/* 3 ARCH-CUTOUT CARDS IN EXACT SHAPE & DESIGN OF USER IMAGE 2 */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7 sm:gap-8 lg:gap-10 items-stretch">
          {packages.map((pkg, idx) => (
            <FadeUp key={pkg.id || idx} delay={idx * 0.12} className="h-full">
              <div
                onClick={() => router.push(`/packages/${pkg.id}`)}
                className="group relative flex flex-col items-center cursor-pointer transition-all duration-500 hover:-translate-y-2.5"
              >
                {/* 1. TOP IMAGE CONTAINER WITH ARCH/STADIUM CONTOUR (rounded-[42px]) */}
                <div className="relative w-full h-[360px] sm:h-[400px] rounded-[48px] overflow-hidden shadow-[0_12px_35px_rgb(0,0,0,0.12)] border border-stone-200/80 dark:border-stone-800 bg-stone-100 dark:bg-stone-800">
                  <Image
                    src={pkg.image || "/images/hero.jpg"}
                    alt={pkg.title}
                    fill
                    unoptimized
                    className="object-cover transition-transform duration-700 ease-out group-hover:scale-110"
                  />
                  {/* Subtle Gradient Shadow at bottom of image */}
                  <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-80 group-hover:opacity-60 transition-opacity" />
                </div>

                {/* 2. OVERLAPPING BOTTOM FLOATING SEMI-CIRCULAR ARCH WITH CROWN LOGO & DETAILS */}
                <div className="relative -mt-14 z-20 w-[84%] sm:w-[86%] bg-white dark:bg-stone-900 rounded-[32px] p-5 pt-3 shadow-[0_15px_30px_rgb(0,0,0,0.08)] border border-stone-200/90 dark:border-stone-800 flex flex-col items-center text-center transition-all duration-300 group-hover:shadow-[0_20px_40px_rgb(234,88,12,0.18)] group-hover:border-orange-500/50">
                  
                  {/* Floating Circular Crown/Lotus Icon Notch (As shown in user image) */}
                  <div className="-mt-8 w-13 h-13 rounded-full bg-white dark:bg-stone-900 p-1 shadow-md border border-stone-200/90 dark:border-stone-700 flex items-center justify-center">
                    <div className="w-full h-full rounded-full bg-gradient-to-br from-orange-500 to-amber-600 flex items-center justify-center text-white shadow-sm shadow-orange-500/30 group-hover:scale-110 transition-transform">
                      {/* Stylized Crown/Expedition Icon */}
                      <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
                        <path d="M5 16L3 5L8.5 10L12 4L15.5 10L21 5L19 16H5M19 19C19 19.6 18.6 20 18 20H6C5.4 20 5 19.6 5 19V18H19V19Z" />
                      </svg>
                    </div>
                  </div>

                  {/* Category Pill (EUROPE / HERITAGE / ADVENTURE) */}
                  <span className="mt-2 text-[10px] sm:text-[11px] font-bold font-poppins tracking-widest uppercase px-3 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
                    {pkg.category || "INDIA"}
                  </span>

                  {/* Destination Country / State Name */}
                  <h3 className="mt-2 text-xl sm:text-2xl font-bold font-playfair text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors leading-tight">
                    {pkg.title}
                  </h3>

                  {/* Starting Price (From ₹X,XXX) */}
                  <p className="mt-1 text-xs text-stone-500 dark:text-stone-400 font-poppins font-light">
                    From ₹{pkg.price}
                  </p>
                </div>

              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
