'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Compass, MapPin, ArrowRight, Sparkles, Star } from "lucide-react";
import FadeUp from '@/components/ui/FadeUp';

type Package = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  location: string;
  package_code?: string;
  duration_days?: number;
  duration_nights?: number;
};

export default function HeroCarausalCard() {
  const [packages, setPackages] = useState<Package[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios.get('https://travellingwebsite-2.onrender.com/api/packages/')
      .then(res => setPackages(res.data.results || []))
      .catch(console.error);
  }, []);

  return (
    <section className="py-16 sm:py-20 bg-gradient-to-b from-stone-50/50 via-white to-stone-50/30 dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="flex flex-col sm:flex-row sm:items-end justify-between mb-8 sm:mb-12 gap-4">
          <div>
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 text-xs font-bold uppercase tracking-wider mb-2">
                <Sparkles size={13} /> Handpicked Journeys
              </span>
            </FadeUp>
            <FadeUp delay={0.08}>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold text-gray-900 dark:text-white tracking-tight">
                Explore Destinations
              </h2>
            </FadeUp>
            <FadeUp delay={0.14}>
              <p className="text-sm sm:text-base text-gray-500 dark:text-gray-400 font-poppins mt-1 max-w-lg">
                Immerse yourself in India’s most breathtaking heritage sanctuaries and alpine heights.
              </p>
            </FadeUp>
          </div>

          <FadeUp delay={0.2}>
            <button
              onClick={() => router.push('/packages')}
              className="inline-flex items-center gap-2 text-sm font-bold text-orange-600 hover:text-orange-700 dark:text-orange-400 transition group cursor-pointer"
            >
              <span>View All 50+ Packages</span>
              <ArrowRight size={16} className="transition-transform group-hover:translate-x-1" />
            </button>
          </FadeUp>
        </div>

        {/* Horizontal Carousel */}
        <div className="flex gap-5 sm:gap-6 overflow-x-auto scrollbar-hide pb-6 pt-2 snap-x">
          {packages.map((pkg, i) => (
            <FadeUp key={pkg.id} delay={i * 0.06} className="flex-shrink-0 snap-start">
              <div
                onClick={() => router.push(`/packages/${pkg.id}`)}
                className="relative min-w-[220px] sm:min-w-[260px] md:min-w-[300px] h-[360px] sm:h-[400px] md:h-[440px] rounded-[28px] overflow-hidden cursor-pointer group shadow-[0_8px_30px_rgb(0,0,0,0.08)] hover:shadow-[0_20px_40px_rgb(234,88,12,0.22)] transition-all duration-500 hover:-translate-y-2 border border-black/5 dark:border-white/10"
              >
                {/* Background Image */}
                <Image
                  src={pkg.image || "/default.jpg"}
                  alt={pkg.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-110"
                />

                {/* Subtle vignette + gradient overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-black/10 group-hover:from-black/95 transition-colors duration-500" />

                {/* Top Badge (Package ID / Rating) */}
                <div className="absolute top-4 left-4 right-4 flex justify-between items-center z-10">
                  <span className="font-mono text-[11px] font-bold px-2.5 py-1 rounded-full bg-white/20 backdrop-blur-md text-white border border-white/20">
                    {pkg.package_code || `PKG-${pkg.id}`}
                  </span>
                  <span className="inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full bg-amber-500/90 text-white backdrop-blur-md shadow-sm">
                    <Star size={11} fill="currentColor" /> 4.9
                  </span>
                </div>

                {/* Content Overlay */}
                <div className="absolute bottom-0 left-0 right-0 p-5 sm:p-6 text-white z-10 flex flex-col justify-end">
                  <p className="text-xs uppercase tracking-wider font-semibold text-orange-400 flex items-center gap-1 mb-1">
                    <MapPin size={13} className="text-orange-400 shrink-0" />
                    {pkg.location}
                  </p>

                  <h3 className="text-lg sm:text-xl md:text-2xl font-bold font-playfair tracking-tight text-white group-hover:text-orange-200 transition-colors">
                    {pkg.title}
                  </h3>

                  <div className="mt-3 pt-3 border-t border-white/15 flex items-center justify-between">
                    <div>
                      <span className="text-[10px] uppercase tracking-wider text-gray-300 block">Starting from</span>
                      <span className="text-lg font-bold text-white">₹{pkg.price}</span>
                    </div>

                    <span className="w-9 h-9 rounded-full bg-white/20 backdrop-blur-md flex items-center justify-center text-white group-hover:bg-orange-500 group-hover:scale-110 transition-all duration-300">
                      <ArrowRight size={16} />
                    </span>
                  </div>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
