import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import { Sparkles, HeartHandshake, Award, ShieldCheck, MapPin, ArrowRight } from 'lucide-react'

const VALUES = [
  {
    icon: HeartHandshake,
    title: "Genuine Hospitality",
    desc: "Every trip is designed with authentic cultural warmth, verified homestays, and dedicated on-ground local guides.",
  },
  {
    icon: Award,
    title: "Handpicked Luxury",
    desc: "We personally curate itineraries and boutique stays to ensure unmatched comfort and aesthetic luxury.",
  },
  {
    icon: ShieldCheck,
    title: "Safe & Seamless",
    desc: "Transparent pricing with no hidden charges, 24/7 travel concierge, and digital verifiable trip vouchers.",
  },
];

const About = () => {
  return (
    <div className="bg-[#fcfbf9] dark:bg-[#09090b] text-gray-900 dark:text-gray-100 min-h-screen">

      {/* Hero Section */}
      <section className="relative w-full h-[340px] sm:h-[420px] md:h-[480px] overflow-hidden flex items-center justify-center">
        <Image src="/images/premmandir.png" alt="TripNova Journey" fill className="object-cover scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/85" />
        <div className="relative z-10 text-center px-4 max-w-4xl pt-16">
          <FadeUp delay={0.1}>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-white/20">
              <Sparkles size={13} /> Our Story & Mission
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-playfair text-white leading-tight">
              About TripNova – Your Trusted Travel Companion
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-4 text-sm sm:text-lg text-stone-200/90 font-poppins max-w-2xl mx-auto font-light leading-relaxed">
              We empower modern explorers to experience the untouched heritage, breathtaking nature, and soulful traditions across India.
            </p>
          </FadeUp>
        </div>
      </section>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-20">

        {/* Mission Story Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          <FadeUp className="lg:col-span-5 relative h-[380px] sm:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800">
            <Image
              src="/images/prem.png"
              fill
              alt="Discovering India"
              className="object-cover transition-transform duration-700 hover:scale-105"
            />
            <div className="absolute bottom-4 left-4 right-4 p-4 rounded-2xl bg-black/60 backdrop-blur-md border border-white/20 text-white">
              <p className="text-xs uppercase font-bold text-amber-400">Authentic Heritage</p>
              <p className="text-sm font-playfair font-semibold">Over 50+ handpicked cultural circuits</p>
            </div>
          </FadeUp>

          <FadeUp delay={0.2} className="lg:col-span-7 space-y-6">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/60 px-3 py-1 rounded-full">
              Who We Are
            </span>
            <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 dark:text-white leading-tight">
              Redefining Journeys Across Every Corner of India
            </h2>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-poppins">
              TripNova was born out of a deep passion for storytelling and exploration. India is not just a destination; it is an emotion filled with ancient spiritual traditions, vibrant festivals, untamed wild sanctuaries, and tranquil mountain valleys.
            </p>
            <p className="text-sm sm:text-base text-gray-600 dark:text-gray-300 leading-relaxed font-poppins">
              We take away the stress of planning by providing day-wise tailored itineraries, verified pricing, automated travel vouchers, and continuous on-trip assistance.
            </p>
            <div className="pt-2 flex flex-wrap gap-4">
              <Link href="/packages">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white text-sm font-semibold px-6 py-3 rounded-2xl shadow-lg shadow-orange-500/25 transition hover:scale-105 cursor-pointer">
                  <span>Explore Tours</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white dark:bg-gray-800 hover:bg-slate-100 dark:hover:bg-gray-700 text-gray-800 dark:text-white border border-gray-200 dark:border-gray-700 text-sm font-semibold px-6 py-3 rounded-2xl transition cursor-pointer">
                  Contact Our Concierge
                </button>
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* 3 Core Pillars */}
        <div className="py-6 border-t border-gray-200/60 dark:border-gray-800">
          <div className="text-center max-w-2xl mx-auto mb-12">
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/60 px-3 py-1 rounded-full">
              Our Core Pillars
            </span>
            <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 dark:text-white mt-3">
              Why Travelers Choose TripNova
            </h3>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
            {VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="h-full p-8 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group">
                    <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center mb-5 group-hover:scale-110 transition-transform">
                      <Icon size={24} />
                    </div>
                    <h4 className="font-playfair font-bold text-xl text-gray-900 dark:text-white mb-2">{val.title}</h4>
                    <p className="text-sm text-gray-600 dark:text-gray-400 leading-relaxed font-poppins">{val.desc}</p>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

        {/* Client Story Spotlight */}
        <FadeUp>
          <div className="relative rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-orange-200 dark:border-orange-900/40 p-8 sm:p-12 overflow-hidden">
            <div className="max-w-3xl">
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                Guest Experience
              </span>
              <p className="mt-4 text-lg sm:text-xl md:text-2xl font-playfair font-semibold text-gray-900 dark:text-white leading-relaxed italic">
                &ldquo;Booking our family trip through TripNova was seamless from start to finish. The day-wise itinerary made traveling so peaceful, and the instant voucher had all our pickup details ready.&rdquo;
              </p>
              <div className="mt-6 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center font-bold text-white text-sm">
                  PK
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-900 dark:text-white">Prem Kelasi</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Rajasthan Cultural Explorer</p>
                </div>
              </div>
            </div>
          </div>
        </FadeUp>

      </div>
    </div>
  )
}

export default About
