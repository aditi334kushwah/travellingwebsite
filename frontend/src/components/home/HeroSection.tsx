import React from 'react'
import { AnimatedTooltipPreview } from "@/components/toolfit"
import Image from 'next/image'
import Link from 'next/dist/client/link'

const HeroSection = () => {
  return (
    <div className="relative w-full h-screen min-h-[600px]">

      {/* Background Image */}
      <Image
        src="/images/hero.jpg"
        alt="hero image"
        fill
        className="object-cover"
        priority
      />

      {/* Overlay Content */}
      <div className="absolute inset-0 flex flex-col items-center justify-end text-white text-center bg-black/40 px-4">

        {/* Heading */}
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Explore Incredible India with TriNova 🇮🇳
        </h1>

        {/* Subheading */}
        <p className="mt-4 text-sm sm:text-base md:text-xl lg:text-2xl max-w-2xl">
          Discover breathtaking destinations, rich culture, and unforgettable journeys across India — all in one place.
        </p>

        {/* Buttons */}
        <div className="mt-6 flex flex-wrap gap-4 justify-center">
          <Link href="/packages">
            <button className="bg-transparent rounded-full border py-2 sm:py-3 border-white/35 backdrop-blur px-5 text-sm sm:text-base transition duration-300 hover:-translate-y-1 hover:bg-white/12">
              Explore Packages
            </button>
          </Link>
          <Link href="/booking">
            <button className="bg-[#c8782f] rounded-full border py-2 sm:py-3 border-white/35 backdrop-blur px-5 text-sm sm:text-base transition duration-300 hover:-translate-y-1 hover:bg-white/12">
              Book Your Trip
            </button>
          </Link>
        </div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row mt-10 md:mt-16 gap-6 md:gap-10 items-center justify-center w-full max-w-5xl pb-6 px-2">

          {/* LEFT CARD */}
          <div className="w-full md:w-1/3 bg-transparent backdrop-blur-md border border-white/35 rounded-xl p-5 text-white">
            <AnimatedTooltipPreview />
            <p className="text-xs sm:text-sm mt-2">
              Book amazing travel packages across India with TriNova.
            </p>
            <Link href="/booking">
              <button className="bg-transparent border border-white/35 mt-3 text-white text-sm py-1 px-4 rounded-full transition duration-300 hover:-translate-y-0.5 hover:bg-white/12">
                Book Your Trip
              </button>
            </Link>
          </div>

          
        </div>
      </div>

    </div>
  )
}

export default HeroSection
