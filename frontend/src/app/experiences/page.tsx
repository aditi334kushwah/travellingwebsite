import ExperienceCategories from '@/components/experiences/ExperienceCategories'
import FeaturedExperiences from '@/components/experiences/FeaturedExperiences'
import WhatYouGet from '@/components/experiences/WhatYouGet'
import TestimonialCard from '@/components/home/TestimonialCard'
import Image from 'next/image'
import React from 'react'
import FadeUp from '@/components/ui/FadeUp'
import NewsletterCTASection from "@/components/home/NewsletterCTASection"
import { Sparkles, Compass, Shield, Award } from 'lucide-react'

const ExperienceSection = () => {
  return (
    <section className="bg-[#fcfbf9] dark:bg-[#09090b] text-gray-900 dark:text-gray-100 min-h-screen">

      {/* Hero Banner with Unified Warm Saffron Gradient */}
      <div className="relative w-full h-[340px] sm:h-[420px] md:h-[480px] overflow-hidden flex items-center justify-center">
        <Image src="/images/night.png" alt="Incredible Experiences" fill className="object-cover scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/85" />
        <div className="relative z-10 text-center px-4 max-w-4xl pt-16">
          <FadeUp delay={0.1}>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-white/20">
              <Sparkles size={13} /> Curated Journeys
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-playfair text-white leading-tight">
              Unforgettable Travel Experiences Across India
            </h1>
          </FadeUp>
          <FadeUp delay={0.35}>
            <p className="mt-4 text-sm sm:text-lg text-stone-200/90 font-poppins max-w-2xl mx-auto font-light leading-relaxed">
              From thrilling Himalayan snow treks to serene backwater houseboats and sacred spiritual ghats.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Consistent Section Layout Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 space-y-12">
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
