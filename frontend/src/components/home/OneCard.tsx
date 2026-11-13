import React from 'react';
import Image from 'next/image';
import { MapPin, Compass } from 'lucide-react';
import FadeUp from '@/components/ui/FadeUp';

const quotes = [
  {
    text: "Travel is not just about seeing new places, it's about discovering a new version of yourself.",
    author: "Wanderlust Philosophy",
    region: "Himalayan Trails",
    isActive: true, // First card has glowing orange border as in reference image
  },
  {
    text: "Collect moments, not things — the world is too majestic and sacred to stay in one place.",
    author: "Explorer Ethos",
    region: "Coastal Horizons",
    isActive: false,
  },
  {
    text: "The journey you take today becomes the timeless story you pass down tomorrow.",
    author: "Expedition Spirit",
    region: "Heritage Circuits",
    isActive: false,
  },
];

const OneCard = () => {
  return (
    <section className="relative w-full min-h-[580px] my-12 sm:my-20 flex justify-center items-center overflow-hidden">
      {/* Background Hero Image */}
      <div className="absolute inset-0">
        <Image
          src="/images/onecard.png"
          alt="Expedition Hero"
          fill
          unoptimized
          className="object-cover object-center"
        />
        {/* Cinematic Dual Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/92 via-black/75 to-black/85" />
      </div>

      {/* Floating Ambient Glow */}
      <div className="absolute -top-32 -left-32 w-96 h-96 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />

      <div className="relative z-10 flex flex-col text-white px-5 sm:px-8 md:px-12 py-16 sm:py-24 w-full max-w-7xl">

        {/* Section Pill */}
        <FadeUp>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-orange-400 border border-white/20 text-xs font-bold uppercase tracking-wider mb-4 font-poppins">
            <Compass size={14} className="animate-spin duration-3000" /> Curated Expeditions
          </span>
        </FadeUp>

        <FadeUp delay={0.08}>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-start max-w-3xl leading-[1.15] tracking-tight">
            Explore the World with <span className="bg-gradient-to-r from-orange-400 via-amber-300 to-orange-200 bg-clip-text text-transparent">Unforgettable Experiences</span>
          </h2>
        </FadeUp>

        <FadeUp delay={0.16}>
          <p className="text-sm sm:text-base md:text-lg text-start text-stone-300 max-w-2xl font-poppins mt-4 leading-relaxed font-light">
            Discover handpicked sanctuaries, private alpine expeditions, and sacred heritage trails across India crafted for discerning wanderers.
          </p>
        </FadeUp>

        {/* 3 EXACT CARDS MATCHING USER IMAGE 1 */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {quotes.map((q, i) => (
            <FadeUp key={i} delay={0.12 + i * 0.1}>
              <div 
                className={`group relative p-7 sm:p-8 font-poppins rounded-[34px] transition-all duration-500 hover:-translate-y-2.5 flex flex-col justify-between h-full backdrop-blur-2xl ${
                  q.isActive
                    ? "bg-[#18181b]/95 border-2 border-orange-500 shadow-[0_0_40px_rgba(234,88,12,0.35)]"
                    : "bg-[#1c1917]/80 hover:bg-[#18181b]/95 border border-white/15 hover:border-orange-500/80 shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_0_35px_rgba(234,88,12,0.25)]"
                }`}
              >
                <div>
                  {/* EXACT 3-BAR ORANGE DASHES (As in User Image: 3 slanted orange bars) */}
                  <div className="flex items-center gap-1.5 mb-6">
                    <span className="w-2.5 h-3.5 bg-orange-500 rounded-[2px] transform -skew-x-12 inline-block shadow-sm shadow-orange-500/50" />
                    <span className="w-2.5 h-3.5 bg-orange-500 rounded-[2px] transform -skew-x-12 inline-block shadow-sm shadow-orange-500/50" />
                    <span className="w-2.5 h-3.5 bg-orange-500 rounded-[2px] transform -skew-x-12 inline-block shadow-sm shadow-orange-500/50" />
                  </div>

                  {/* Quote Body in Exact Italic Font */}
                  <p className="font-light text-sm sm:text-base leading-relaxed text-stone-100 italic">
                    &ldquo;{q.text}&rdquo;
                  </p>
                </div>

                {/* Bottom Author & Location Row */}
                <div className="mt-8 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-semibold text-orange-400 font-poppins tracking-wide">
                    {q.author}
                  </span>
                  <span className="flex items-center gap-1.5 text-stone-300 font-poppins">
                    <MapPin size={13} className="text-orange-500 shrink-0" />
                    <span>{q.region}</span>
                  </span>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
};

export default OneCard;
