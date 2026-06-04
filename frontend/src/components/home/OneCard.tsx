import React from 'react'
import Image from 'next/image'

const quotes = [
  `"Travel is not just about seeing new places, it's about discovering a new version of yourself."`,
  `"Collect moments, not things — the world is too beautiful to stay in one place."`,
  `"The journey you take today becomes the story you tell tomorrow."`,
]

const OneCard = () => {
  return (
    <div className="relative w-full min-h-[500px] h-auto mt-20 flex justify-center items-center">

      {/* Background Image */}
      <Image
        src="/images/onecard.png"
        alt="image"
        fill
        className="object-cover rounded-xl"
      />

      {/* Overlay */}
      <div className="absolute inset-0 bg-black/50 rounded-xl" />

      {/* Content */}
      <div className="relative z-10 flex flex-col text-white px-6 sm:px-10 md:px-16 py-12 w-full max-w-6xl">

        {/* Heading */}
        <h1 className="text-2xl sm:text-3xl md:text-4xl font-bold text-start mb-4 leading-snug">
          Explore the World with Unforgettable Experiences
        </h1>

        <h4 className="text-sm sm:text-base md:text-xl text-start text-white/80 max-w-2xl">
          Discover handpicked destinations, curated travel packages, and seamless journeys across India.
        </h4>

        {/* Quote Cards */}
        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
          {quotes.map((quote, i) => (
            <div key={i} className="bg-white/20 backdrop-blur-md p-5 rounded-xl text-center text-sm sm:text-base">
              <h2 className="font-semibold leading-relaxed">{quote}</h2>
            </div>
          ))}
        </div>

      </div>
    </div>
  )
}

export default OneCard
