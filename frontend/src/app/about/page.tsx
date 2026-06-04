import React from 'react'
import Image from 'next/image'

const About = () => {
  return (
    <>
      {/* Hero Section */}
      <section className="relative w-full h-[300px] sm:h-[380px] md:h-[450px] lg:h-[500px]">
        <Image
          src="/images/premmandir.png"
          alt="hero image"
          fill
          className="object-cover"
          priority
        />
        <div className="absolute inset-0 bg-black/50 flex flex-col items-center justify-center text-center px-4 sm:px-10">
          <span className="text-[#da7619] text-sm sm:text-base tracking-widest mb-2 mt-15">
            A B O U T
          </span>
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl text-white font-bold leading-tight max-w-4xl">
            About TripNova – Your Travel Companion
          </h1>
          <p className="text-gray-200 text-sm sm:text-base md:text-lg mt-4 max-w-3xl">
            TriNova is a modern travel platform dedicated to helping you explore the beauty and diversity of India. From serene hill stations to vibrant cities and spiritual destinations, we bring you carefully curated travel experiences.
          </p>
        </div>
      </section>

      {/* Client Say Section */}
      <section className="py-12 sm:py-16">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10 sm:space-y-16">
          <div className="space-y-3 max-w-2xl">
            <span className="text-blue-600 font-semibold pl-6 relative before:absolute before:top-1/2 before:left-0 before:w-5 before:h-px before:bg-blue-600 before:rounded-full">
              Happy Clients
            </span>
            <h1 className="font-bold text-gray-800 text-2xl sm:text-3xl">
              Client's Say About Us
            </h1>
          </div>

          <div className="flex flex-col md:flex-row md:items-stretch gap-8 lg:gap-14">
            {/* Image - hidden on mobile */}
            <div className="hidden md:flex md:w-1/2 lg:w-2/5">
              <Image
                src="/images/prem.png"
                width={1900}
                height={1200}
                alt="Author Avatar"
                className="w-full h-full object-cover rounded-lg"
              />
            </div>

            {/* Text Content */}
            <div className="flex-1 flex flex-col justify-center space-y-6 md:py-6 lg:py-8">
              <p className="text-sm sm:text-base lg:text-lg font-medium text-gray-500 leading-relaxed">
                "TripNova is a modern travel platform dedicated to helping you explore the beauty and diversity of India. From serene hill stations to vibrant cities and spiritual destinations, we bring you carefully curated travel experiences designed to suit every kind of traveler."
                <br /><br />
                "We believe that travel is more than just visiting places—it's about creating memories, discovering new cultures, and experiencing life from a different perspective. That's why we focus on providing seamless planning, affordable packages, and personalized journeys."
                <br /><br />
                "Whether you're seeking adventure in the mountains, relaxation by the beaches, or spiritual peace in sacred destinations, TripNova ensures every trip is smooth, safe, and unforgettable."
              </p>

              <div className="flex items-center gap-4">
                <Image
                  src="/images/prem.png"
                  width={48}
                  height={48}
                  alt="Author avatar"
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h2 className="text-base sm:text-lg font-semibold text-gray-800">
                    Prem Kelasi
                  </h2>
                  <p className="text-sm text-gray-600">Traveller</p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Testimonials Section */}
      <section className="py-12 sm:py-20">
        <div className="max-w-7xl mx-auto px-5 sm:px-10 md:px-12 lg:px-5 space-y-10 sm:space-y-16">
          <div className="space-y-3 max-w-2xl">
            <span className="rounded-lg bg-blue-100 px-2.5 py-1 text-xs font-semibold tracking-wide text-blue-800">
              Testimonials
            </span>
            <h1 className="text-2xl sm:text-3xl font-bold text-gray-900">
              What they say about us
            </h1>
          </div>

          <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
            {/* Left Image */}
            <div className="w-full lg:w-1/2 h-[250px] sm:h-[350px] lg:h-auto relative rounded-2xl">
              <Image
                src="/images/jaipur.png"
                alt="Jaipur"
                fill
                className="object-cover rounded-2xl"
              />
            </div>

            {/* Testimonial Card */}
            <div className="w-full lg:w-1/2">
              <div className="rounded-2xl shadow-lg bg-white border border-gray-200/50">
                <div className="flex flex-col sm:flex-row gap-0">
                  <div className="w-full sm:w-36 md:w-40 h-48 sm:h-full relative flex-shrink-0 min-h-[180px]">
                    <Image
                      src="/images/jaipur2.png"
                      alt="Author Avatar"
                      fill
                      className="object-cover"
                    />
                  </div>
                  <div className="p-5 sm:p-6 md:p-8 flex flex-col gap-4">
                    <div>
                      <span className="text-lg sm:text-xl md:text-2xl font-semibold text-gray-800">
                        Radha Jadon
                      </span>
                      <p className="text-sm text-gray-600">Traveller</p>
                    </div>
                    <p className="text-sm sm:text-base text-gray-700 leading-relaxed">
                      Jaipur, known as the "Pink City," is famous for its stunning Rajput architecture and vibrant heritage sites.
                      Hawa Mahal (Palace of Winds): A five-story honeycomb-shaped facade with 953 small windows designed for royal women to observe street festivals.
                      Amer Fort: A majestic hilltop fort featuring the intricate Sheesh Mahal (Mirror Palace) and breathtaking views of Maota Lake.
                    </p>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}

export default About
