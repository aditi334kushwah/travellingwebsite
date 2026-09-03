import React from 'react'
import { AnimatedTooltipPreview } from "@/components/toolfit"
import Link from 'next/dist/client/link'
import FadeUp from '@/components/ui/FadeUp'

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px]">
      <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
        <source src="/video/hero.mp4" type="video/mp4" />
      </video>

      <div className="absolute inset-0 flex flex-col items-center justify-center text-white text-center bg-black/40 px-4 pt-20">

        <FadeUp delay={0.1}>
          <h1 className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-playfair leading-tight">
            Explore Incredible India with TriNova
          </h1>
        </FadeUp>

        <FadeUp delay={0.25}>
          <p className="mt-4 text-sm sm:text-xl md:text-xl lg:text-2xl max-w-2xl font-poppins">
            Discover breathtaking destinations, rich culture, and unforgettable journeys across India — all in one place.
          </p>
        </FadeUp>

        <FadeUp delay={0.4}>
          <div className="mt-6 flex flex-wrap gap-4 justify-center">
            <Link href="/packages">
              <button className="bg-transparent rounded-full border py-2 sm:py-3 font-poppins border-white/35 backdrop-blur px-5 text-sm sm:text-base transition duration-300 hover:-translate-y-1 hover:bg-white/12">
                Explore Packages
              </button>
            </Link>
            <Link href="/booking">
              <button className="bg-[#c8782f] rounded-full border py-2 sm:py-3 font-poppins border-white/35 backdrop-blur px-5 text-sm sm:text-base transition duration-300 hover:-translate-y-1 hover:bg-white/12">
                Book Your Trip
              </button>
            </Link>
          </div>
        </FadeUp>

      </div>
    </div>
  )
}

export default HeroSection
