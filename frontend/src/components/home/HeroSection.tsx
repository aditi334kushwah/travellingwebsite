import React from 'react'
import Link from 'next/dist/client/link'
import FadeUp from '@/components/ui/FadeUp'
import { Sparkles, ArrowRight, ShieldCheck, Compass } from 'lucide-react'

const HeroSection = () => {
  return (
    <div className="relative w-full min-h-[680px] lg:min-h-[740px] flex items-center justify-center overflow-hidden">
      {/* Video Background */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute inset-0 w-full h-full object-cover scale-105"
      >
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      {/* Luxury Cinematic Gradient Overlays */}
      <div className="absolute inset-0 bg-gradient-to-b from-black/70 via-black/45 to-black/85" />
      <div className="absolute inset-0 bg-gradient-to-r from-stone-950/60 via-transparent to-amber-950/30" />

      {/* Decorative Subtle Ambient Light */}
      <div className="absolute -top-32 left-1/2 -translate-x-1/2 w-[600px] h-[300px] bg-amber-500/20 blur-[120px] rounded-full pointer-events-none" />

      {/* Hero Content */}
      <div className="relative z-10 w-full max-w-5xl mx-auto px-4 sm:px-6 pt-28 pb-20 text-center flex flex-col items-center">
        
        {/* Top Badge */}
        <FadeUp delay={0.1}>
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md border border-white/20 text-amber-200 text-xs sm:text-sm font-medium tracking-wide mb-6 shadow-lg shadow-black/20">
            <Sparkles size={14} className="text-amber-400" />
            <span>Discover India&apos;s Most Soulful Destinations</span>
          </div>
        </FadeUp>

        {/* Main Title with Elegant Typography */}
        <FadeUp delay={0.2}>
          <h1 className="text-4xl sm:text-6xl md:text-7xl font-bold font-playfair text-white tracking-tight leading-[1.12]">
            Explore Incredible India <br className="hidden sm:inline" />
            with <span className="bg-gradient-to-r from-amber-400 via-orange-300 to-amber-200 bg-clip-text text-transparent italic">TripNova</span>
          </h1>
        </FadeUp>

        {/* Subtitle */}
        <FadeUp delay={0.3}>
          <p className="mt-5 text-base sm:text-lg md:text-xl text-stone-200/90 font-poppins max-w-2xl font-light leading-relaxed">
            From the snow peaks of the Himalayas to serene Kerala backwaters — experience handcrafted journeys, certified stays, and unforgettable stories.
          </p>
        </FadeUp>

        {/* Action Buttons */}
        <FadeUp delay={0.4}>
          <div className="mt-8 flex flex-wrap gap-4 justify-center items-center">
            <Link href="/packages">
              <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-semibold px-7 py-3.5 rounded-full shadow-lg shadow-orange-500/30 transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-sm sm:text-base">
                <span>Explore All Packages</span>
                <ArrowRight size={17} />
              </button>
            </Link>
            <Link href="/booking">
              <button className="inline-flex items-center gap-2 bg-white/10 hover:bg-white/20 text-white font-medium border border-white/30 backdrop-blur-md px-7 py-3.5 rounded-full transition-all duration-300 hover:scale-105 active:scale-95 cursor-pointer text-sm sm:text-base">
                <Compass size={17} className="text-amber-300" />
                <span>Custom Trip Booking</span>
              </button>
            </Link>
          </div>
        </FadeUp>

        {/* Micro Trust Proof */}
        <FadeUp delay={0.5}>
          <div className="mt-10 flex flex-wrap justify-center items-center gap-6 text-xs text-stone-300/80 font-poppins pt-6 border-t border-white/10">
            <span className="flex items-center gap-1.5">
              <ShieldCheck size={15} className="text-amber-400" /> 100% Verified Stays
            </span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>⭐ 4.9/5 Guest Experience</span>
            <span className="hidden sm:inline text-white/30">•</span>
            <span>Instant Digital Voucher</span>
          </div>
        </FadeUp>

      </div>
    </div>
  )
}

export default HeroSection
