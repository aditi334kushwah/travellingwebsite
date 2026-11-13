import ExperienceCategories from '@/components/experiences/ExperienceCategories'
import FeaturedExperiences from '@/components/experiences/FeaturedExperiences'
import WhatYouGet from '@/components/experiences/WhatYouGet'
import TestimonialCard from '@/components/home/TestimonialCard'
import Image from 'next/image'
import React from 'react'
import FadeUp from '@/components/ui/FadeUp'
import NewsletterCTASection from "@/components/home/NewsletterCTASection"
import { Sparkles, Compass, Shield, Award, MapPin, Users, HeartHandshake, CheckCircle2 } from 'lucide-react'

const stats = [
  { label: "Signature Expeditions", value: "25+", icon: Compass },
  { label: "Delighted Travelers", value: "10,000+", icon: Users },
  { label: "Traveler Satisfaction", value: "4.95 / 5", icon: Sparkles },
  { label: "Verified Safety Standard", value: "100%", icon: Shield },
];

const ExperienceSection = () => {
  return (
    <section className="bg-[#fcfbf9] dark:bg-[#09090b] text-gray-900 dark:text-gray-100 min-h-screen">

      {/* Hero Banner with Unified Warm Luxury Backdrop & Floating Particles */}
      <div className="relative w-full h-[380px] sm:h-[460px] md:h-[520px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/night.png"
          alt="Incredible Experiences"
          fill
          className="object-cover scale-105"
          priority
        />
        
        {/* Rich Ambient Gradient Overlays */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/55 to-[#09090b]/95" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-[100px] pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl pt-12 sm:pt-16">
          <FadeUp delay={0.1}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 border border-white/20 shadow-lg">
              <Sparkles size={14} className="text-amber-400 animate-spin-slow" />
              <span>Curated Indian Journeys & Expeditions</span>
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-playfair text-white leading-tight tracking-tight drop-shadow-md">
              Unforgettable Travel Experiences Across India
            </h1>
          </FadeUp>

          <FadeUp delay={0.35}>
            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-stone-200/95 font-poppins max-w-2xl mx-auto font-light leading-relaxed">
              From adrenaline-charged Himalayan whitewater rapids and desert star-gazing to sacred dawn aartis and royal palace heritage.
            </p>
          </FadeUp>

          {/* Micro Trust Pills */}
          <FadeUp delay={0.45}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-4 text-xs font-poppins text-stone-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <CheckCircle2 size={13} className="text-emerald-400" /> Instant Confirmation
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <CheckCircle2 size={13} className="text-amber-400" /> Licensed Native Guides
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/10">
                <CheckCircle2 size={13} className="text-orange-400" /> Zero Hidden Charges
              </span>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Floating Interactive Micro Stats Bar */}
      <div className="relative -mt-10 sm:-mt-12 z-20 max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp delay={0.25}>
          <div className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl rounded-2xl p-4 sm:p-6 border border-stone-200/80 dark:border-stone-800 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/60 dark:divide-stone-800/80">
            {stats.map((stat, idx) => {
              const Icon = stat.icon;
              return (
                <div key={idx} className={`flex items-center gap-3.5 ${idx !== 0 ? 'pt-3 sm:pt-0 sm:pl-4 lg:pl-6' : ''}`}>
                  <div className="w-11 h-11 rounded-xl bg-orange-500/10 dark:bg-orange-500/15 text-orange-600 dark:text-orange-400 flex items-center justify-center shrink-0 border border-orange-500/20">
                    <Icon size={20} />
                  </div>
                  <div>
                    <span className="text-lg sm:text-2xl font-bold font-poppins text-stone-900 dark:text-stone-100 block leading-tight">
                      {stat.value}
                    </span>
                    <span className="text-xs text-stone-500 dark:text-stone-400 font-poppins font-medium">
                      {stat.label}
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </FadeUp>
      </div>

      {/* Consistent Section Layout Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-20 sm:space-y-24">
        <ExperienceCategories />
        <FeaturedExperiences />
        <WhatYouGet />
        <TestimonialCard />
        <NewsletterCTASection />
      </div>
    </section>
  )
}

export default ExperienceSection
