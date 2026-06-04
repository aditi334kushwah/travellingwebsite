
import ExperienceCategories from '@/components/experiences/ExperienceCategories'
import FeaturedExperiences from '@/components/experiences/FeaturedExperiences'
import WhatYouGet from '@/components/experiences/WhatYouGet'
import TestimonialCard from '@/components/home/TestimonialCard'
import Image from 'next/image'
import React from 'react'

const ExperienceSection = () => {
  return (
    <section>
      {/* Hero Banner */}
      <div className="relative w-full h-[300px] sm:h-[400px] md:h-[500px] lg:h-[520px]">
        <Image
          src="/images/night.png"
          alt="Experience"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/50 px-4">
          <h2 className="text-sm sm:text-base mt-15 font-bold mb-3 text-amber-500 tracking-widest">
            E X P E R I E N C E S
          </h2>
          <p className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight max-w-4xl">
            Discover unforgettable experiences around the world.
          </p>
          <p className="text-sm sm:text-base md:text-xl mt-4 max-w-2xl text-white/80">
            Join us on a journey to create memories that last a lifetime.
            Experience the Soul of India 🇮🇳
          </p>
        </div>
      </div>

      <div>
        <ExperienceCategories />
        <FeaturedExperiences />
        <WhatYouGet />
        <TestimonialCard />
      </div>
    </section>
  )
}

export default ExperienceSection
