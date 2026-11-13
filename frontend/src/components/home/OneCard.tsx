import React from 'react';
import Image from 'next/image';
import { Quote, MapPin, Compass } from 'lucide-react';
import FadeUp from '@/components/ui/FadeUp';

const quotes = [
  {
    text: "Travel is not just about seeing new places, it's about discovering a new version of yourself.",
    author: "Wanderlust Philosophy",
    region: "Himalayan Trails"
  },
  {
    text: "Collect moments, not things — the world is too majestic and sacred to stay in one place.",
    author: "Explorer Ethos",
    region: "Coastal Horizons"
  },
  {
    text: "The journey you take today becomes the timeless story you pass down tomorrow.",
    author: "Expedition Spirit",
    region: "Heritage Circuits"
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
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/80" />
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

        {/* 3 Premium Glassmorphic Cards Matching User Image 1 */}
        <div className="mt-10 sm:mt-14 grid grid-cols-1 md:grid-cols-3 gap-5 sm:gap-6">
          {quotes.map((q, i) => (
            <FadeUp key={i} delay={0.12 + i * 0.1}>
              <div className="group relative bg-[#1c1917]/70 hover:bg-[#1c1917]/90 backdrop-blur-2xl p-7 sm:p-8 font-poppins rounded-[32px] border border-white/15 hover:border-orange-500/60 transition-all duration-500 hover:-translate-y-2.5 shadow-[0_15px_35px_rgba(0,0,0,0.5)] hover:shadow-[0_20px_45px_rgba(234,88,12,0.22)] flex flex-col justify-between h-full">
                <div>
                  {/* Orange Double Quote Icon (Matching User Image 1) */}
                  <div className="text-orange-500 mb-4 flex items-center gap-1">
                    <span className="text-3xl font-serif font-black leading-none select-none text-orange-500">“</span>
                    <span className="text-3xl font-serif font-black leading-none select-none text-orange-500 -ml-1">“</span>
                  </div>

                  <p className="font-light text-sm sm:text-base leading-relaxed text-stone-100 italic">
                    &ldquo;{q.text}&rdquo;
                  </p>
                </div>

                {/* Bottom Author & Region Strip in Warm Orange/Gold */}
                <div className="mt-6 pt-4 border-t border-white/10 flex items-center justify-between text-xs">
                  <span className="font-semibold text-orange-400 font-poppins">
                    {q.author}
                  </span>
                  <span className="flex items-center gap-1 text-stone-400 font-poppins">
                    <MapPin size={12} className="text-orange-500" />
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
