import React from 'react'
import Image from 'next/image'
import Link from 'next/link'
import FadeUp from '@/components/ui/FadeUp'
import {
  Sparkles,
  HeartHandshake,
  Award,
  ShieldCheck,
  Compass,
  ArrowRight,
  FileDown,
  CreditCard,
  CheckCircle2,
  MapPin,
  Flame,
  Globe2,
  CalendarCheck,
  Zap,
  Star,
  Users,
  Luggage,
  Hotel,
  Car,
  Headphones,
  Check,
  X
} from 'lucide-react'

// Core Services provided by TripNova
const CORE_SERVICES = [
  {
    icon: Compass,
    title: "Handpicked Tour Packages",
    desc: "Pre-planned and customizable itineraries across India — from Chardham pilgrimage and Himalayan treks to Kerala backwaters and Rajasthan desert safaris.",
    badge: "All-Inclusive Circuits",
  },
  {
    icon: Hotel,
    title: "Verified Boutique Stays",
    desc: "We personally inspect and partner with heritage havelis, luxury riverside camps, tea estate bungalows, and star-rated hotels for comfortable stays.",
    badge: "Handpicked Stays",
  },
  {
    icon: Car,
    title: "Private Transport & Transfers",
    desc: "Seamless travel with clean sanitized private cabs, experienced local chauffeurs, airport pickups, and railway station transfers without surge pricing.",
    badge: "Reliable Transfers",
  },
  {
    icon: CreditCard,
    title: "Online Booking & Flexible Payments",
    desc: "Book confirmed tours in minutes using digital payments — UPI, QR scan, or cards. Get transparent itemized pricing with zero surprise costs.",
    badge: "Instant Confirmation",
  },
  {
    icon: FileDown,
    title: "1-Click Downloadable PDF Vouchers",
    desc: "Immediately upon booking, receive an official travel voucher with driver details, hotel vouchers, day-wise schedule, and emergency helpline.",
    badge: "Direct Voucher",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Trip Concierge",
    desc: "A dedicated travel manager remains on call throughout your journey to handle schedule adjustments, hotel queries, and immediate on-road assistance.",
    badge: "Continuous Support",
  },
];

// Step by step workflow of how TripNova works for a user
const HOW_TRIPNOVA_WORKS = [
  {
    step: "01",
    title: "Choose Your Destination",
    desc: "Browse our catalog of verified travel packages with day-by-day itineraries, inclusions, highlights, and transparent pricing.",
    icon: Globe2,
  },
  {
    step: "02",
    title: "Customize & Reserve",
    desc: "Select your travel dates, group size, and special preferences. Reserve instantly with our verified checkout process.",
    icon: CalendarCheck,
  },
  {
    step: "03",
    title: "Get Digital Trip Voucher",
    desc: "Instantly download your official booking confirmation voucher to your phone with all booking codes and contact details.",
    icon: FileDown,
  },
  {
    step: "04",
    title: "Travel Stress-Free",
    desc: "Arrive at your destination where our verified driver and tour guide welcome you for a well-coordinated, memorable holiday.",
    icon: Luggage,
  },
];

// Comparison table: Traditional Agent vs TripNova
const COMPARISON = [
  {
    feature: "Pricing Transparency",
    traditional: "Hidden driver allowances, state taxes & sudden surcharges",
    tripnova: "100% upfront pricing with zero surprise charges",
  },
  {
    feature: "Booking Speed",
    traditional: "Hours of back-and-forth phone calls and delayed quotes",
    tripnova: "Instant online booking with real-time slot reservation",
  },
  {
    feature: "Travel Voucher",
    traditional: "Messy WhatsApp screenshots or manual printed receipts",
    tripnova: "Official 1-click downloadable PDF voucher with QR verification",
  },
  {
    feature: "On-Ground Assistance",
    traditional: "Unreachable during off-hours or weekends",
    tripnova: "24/7 dedicated personal trip concierge on WhatsApp & phone",
  },
  {
    feature: "Accommodation Quality",
    traditional: "Generic, unverified hotel rooms far from attractions",
    tripnova: "Personally verified boutique stays, havelis & riverside camps",
  },
];

// Real Impact Numbers
const METRICS = [
  { value: "25+", label: "Verified Tour Packages", sub: "Spiritual, Adventure & Leisure" },
  { value: "14+", label: "States Across India", sub: "From Ladakh to Kanyakumari" },
  { value: "10,000+", label: "Happy Travelers", sub: "Families, Couples & Solo Explorers" },
  { value: "24/7", label: "On-Ground Assistance", sub: "Always With You on the Road" },
];

export default function About() {
  return (
    <div className="bg-[#fcfbf9] dark:bg-[#09090b] text-stone-900 dark:text-stone-100 min-h-screen">

      {/* Hero Banner */}
      <section className="relative w-full h-[380px] sm:h-[450px] md:h-[500px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/premmandir.png"
          alt="TripNova Travel"
          fill
          className="object-cover scale-105"
          priority
        />
        
        {/* Ambient Dark Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-[#09090b]/95" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl pt-16 sm:pt-20">
          <FadeUp delay={0.1}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 border border-white/20 shadow-lg">
              <Sparkles size={14} className="text-amber-400 animate-spin-slow" />
              <span>India's Premium Travel & Tour Booking Platform</span>
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-playfair text-white leading-tight tracking-tight drop-shadow-md">
              We Make Exploring India Simple, Safe & Unforgettable
            </h1>
          </FadeUp>

          <FadeUp delay={0.35}>
            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-stone-200/95 font-poppins max-w-2xl mx-auto font-light leading-relaxed">
              TripNova is an all-in-one travel agency and booking platform that plans, organizes, and manages complete multi-day holidays across India with verified hotels, private cabs, and 24/7 on-trip assistance.
            </p>
          </FadeUp>

          {/* Micro trust pills */}
          <FadeUp delay={0.45}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-poppins text-stone-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
                <CheckCircle2 size={13} className="text-emerald-400" /> Complete Holiday Packages
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
                <CheckCircle2 size={13} className="text-amber-400" /> Verified Hotels & Private Cabs
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
                <CheckCircle2 size={13} className="text-orange-400" /> Instant PDF Booking Voucher
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Floating Metrics Bar */}
      <div className="relative -mt-10 sm:-mt-12 z-20 max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp delay={0.25}>
          <div className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-stone-200/80 dark:border-stone-800 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/60 dark:divide-stone-800/80">
            {METRICS.map((metric, idx) => (
              <div key={idx} className={`flex flex-col justify-center ${idx !== 0 ? 'pt-3 sm:pt-0 sm:pl-4 lg:pl-6' : ''}`}>
                <span className="text-2xl sm:text-3xl font-extrabold font-poppins text-orange-600 dark:text-orange-400">
                  {metric.value}
                </span>
                <span className="text-xs sm:text-sm font-semibold font-playfair text-stone-900 dark:text-stone-100 mt-0.5">
                  {metric.label}
                </span>
                <span className="text-[11px] text-stone-500 dark:text-stone-400 font-poppins">
                  {metric.sub}
                </span>
              </div>
            ))}
          </div>
        </FadeUp>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-20 sm:space-y-28">

        {/* 1. What Does TripNova Do? (Detailed Explanation) */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Visual Showcase Card */}
          <FadeUp className="lg:col-span-5 relative h-[420px] sm:h-[500px] rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80 dark:border-stone-800 group">
            <Image
              src="/images/prem.png"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              alt="Holiday with TripNova"
              className="object-cover transition-transform duration-700 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/30 to-transparent" />
            
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
              <Sparkles size={12} className="text-amber-400" />
              <span>Full Holiday Management</span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white space-y-1.5">
              <p className="text-[11px] uppercase font-bold tracking-wider text-amber-400">Zero Planning Stress</p>
              <p className="text-sm font-playfair font-semibold">From Airport Pickup to Hotel Drop</p>
              <p className="text-xs text-stone-300 font-light font-poppins">
                We take care of your hotels, verified private cab, sightseeing schedule, and local guidance.
              </p>
            </div>
          </FadeUp>

          {/* Core Purpose & Explanation */}
          <FadeUp delay={0.2} className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
              <Globe2 size={13} className="text-orange-500" /> What This Website Does
            </span>
            
            <h2 className="text-2xl sm:text-4xl font-playfair font-bold text-stone-900 dark:text-white leading-tight">
              A Complete End-to-End Travel Solution for Every Holiday
            </h2>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-poppins">
              When people plan trips to destinations like Rajasthan, Kashmir, Kerala, or Uttarakhand, they face multiple hassles: finding genuine local drivers, booking trustworthy hotels, avoiding tourist scams, and managing chaotic daily schedules.
            </p>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-poppins">
              <strong className="text-stone-900 dark:text-white font-semibold">TripNova is built to solve all of this under one roof:</strong>
            </p>

            {/* What TripNova handles */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-poppins text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-orange-600 shrink-0 mt-0.5" />
                <span><strong>Curated Tour Packages:</strong> 3 to 10 day ready-made packages across 14+ Indian states.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-orange-600 shrink-0 mt-0.5" />
                <span><strong>Hotel & Stay Arrangements:</strong> Clean, verified family & couple friendly accommodations.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-orange-600 shrink-0 mt-0.5" />
                <span><strong>Dedicated Private Cab:</strong> Sanitized vehicle with experienced driver for the entire trip.</span>
              </div>
              <div className="flex items-start gap-2">
                <CheckCircle2 size={16} className="text-orange-600 shrink-0 mt-0.5" />
                <span><strong>Instant Digital PDF Voucher:</strong> Downloadable trip voucher with booking ID and contacts.</span>
              </div>
            </div>

            <div className="pt-3 flex flex-wrap gap-4">
              <Link href="/packages">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-lg shadow-orange-500/25 transition hover:scale-105 active:scale-95 cursor-pointer font-poppins">
                  <span>Browse Tour Packages</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-white border border-stone-200 dark:border-stone-800 text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition cursor-pointer font-poppins">
                  Talk to a Travel Planner
                </button>
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* 2. 6 Core Services We Provide */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 mb-3">
                <Luggage size={13} className="text-orange-500" /> Full Holiday Coverage
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-stone-900 dark:text-white">
                Everything Included in Your TripNova Journey
              </h3>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-poppins">
                We handle the logistics from arrival to departure so you can simply relax and create memories.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
            {CORE_SERVICES.map((srv, idx) => {
              const Icon = srv.icon;
              return (
                <FadeUp key={idx} delay={idx * 0.08}>
                  <div className="h-full p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-4">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                          <Icon size={22} />
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-300 border border-orange-500/20 font-poppins">
                          {srv.badge}
                        </span>
                      </div>

                      <h4 className="font-playfair font-bold text-lg text-stone-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {srv.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-poppins">
                        {srv.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-stone-100 dark:border-stone-800/80 text-[11px] font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-1 font-poppins">
                      <span>Included in package</span>
                      <CheckCircle2 size={13} className="text-emerald-500" />
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

        {/* 3. How Booking Works for a Traveler */}
        <div className="py-6">
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-3">
                <Zap size={13} className="text-amber-500" /> 4-Step Simple Booking
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-stone-900 dark:text-white">
                How It Works for You
              </h3>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-poppins">
                Booking your dream vacation takes less than 2 minutes.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {HOW_TRIPNOVA_WORKS.map((item, idx) => {
              const Icon = item.icon;
              return (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                          <Icon size={22} />
                        </div>
                        <span className="text-xs font-black font-poppins text-stone-300 dark:text-stone-700 tracking-wider">
                          STEP {item.step}
                        </span>
                      </div>

                      <h4 className="font-playfair font-bold text-lg text-stone-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {item.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-poppins">
                        {item.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-stone-100 dark:border-stone-800/80 text-[11px] font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-1 font-poppins">
                      <span>Instant Process</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

        {/* 4. Why TripNova vs Traditional Local Travel Agents */}
        <div className="rounded-3xl bg-white dark:bg-stone-900/90 border border-stone-200/80 dark:border-stone-800 p-6 sm:p-10 md:p-12 shadow-xl">
          <div className="max-w-3xl mb-8">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 mb-3">
                <ShieldCheck size={13} className="text-orange-500" /> Transparent Comparison
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-stone-900 dark:text-white">
                How TripNova Is Different From Traditional Travel Agents
              </h3>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-2 text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-poppins">
                Why modern travelers choose our transparent, digital booking platform over conventional offline agencies.
              </p>
            </FadeUp>
          </div>

          <div className="overflow-x-auto">
            <table className="w-full text-left font-poppins text-xs sm:text-sm border-collapse">
              <thead>
                <tr className="border-b border-stone-200 dark:border-stone-800 text-stone-500 dark:text-stone-400 uppercase text-[11px] tracking-wider">
                  <th className="py-4 px-3 sm:px-4 font-semibold">Aspect</th>
                  <th className="py-4 px-3 sm:px-4 font-semibold text-rose-500">Traditional Agents</th>
                  <th className="py-4 px-3 sm:px-4 font-semibold text-emerald-600 dark:text-emerald-400">TripNova Platform</th>
                </tr>
              </thead>
              <tbody className="divide-y divide-stone-100 dark:divide-stone-800/80">
                {COMPARISON.map((row, idx) => (
                  <tr key={idx} className="hover:bg-stone-50/50 dark:hover:bg-stone-800/40 transition-colors">
                    <td className="py-4 px-3 sm:px-4 font-semibold text-stone-900 dark:text-stone-100 flex items-center gap-2">
                      <Sparkles size={13} className="text-orange-500 shrink-0" />
                      <span>{row.feature}</span>
                    </td>
                    <td className="py-4 px-3 sm:px-4 text-stone-500 dark:text-stone-400">
                      <div className="flex items-start gap-1.5">
                        <X size={15} className="text-rose-500 shrink-0 mt-0.5" />
                        <span>{row.traditional}</span>
                      </div>
                    </td>
                    <td className="py-4 px-3 sm:px-4 text-stone-800 dark:text-stone-200 font-medium">
                      <div className="flex items-start gap-1.5">
                        <Check size={15} className="text-emerald-500 shrink-0 mt-0.5" />
                        <span>{row.tripnova}</span>
                      </div>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* 5. Direct Call to Action for Visitors & Recruiters */}
        <FadeUp>
          <div className="relative rounded-3xl bg-gradient-to-r from-stone-900 via-[#181513] to-stone-950 border border-stone-800 p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8 text-white shadow-2xl">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-amber-400 uppercase tracking-widest font-poppins">
                Ready to Experience India?
              </span>
              <h3 className="mt-2 text-2xl sm:text-3xl font-playfair font-bold text-white">
                Find Your Next Unforgettable Journey Today
              </h3>
              <p className="mt-3 text-xs sm:text-sm text-stone-300 font-poppins font-light leading-relaxed">
                Explore handpicked spiritual journeys, mountain treks, beach holidays, and cultural heritage packages with transparent pricing and 24/7 on-ground assistance.
              </p>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link href="/packages" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-lg shadow-orange-500/25 transition hover:scale-105 active:scale-95 cursor-pointer font-poppins">
                  <span>Explore All Packages</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/contact" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-white/10 hover:bg-white/20 text-white border border-white/20 text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition cursor-pointer font-poppins">
                  <span>Contact Support</span>
                </button>
              </Link>
            </div>
          </div>
        </FadeUp>

      </div>
    </div>
  )
}
