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
  Code2,
  Cpu,
  Layers,
  FileDown,
  CreditCard,
  CheckCircle2,
  MapPin,
  Flame,
  Globe2,
  CalendarCheck,
  Zap,
  Star,
  Users
} from 'lucide-react'

// Core Mission Value Props
const VALUES = [
  {
    icon: HeartHandshake,
    title: "100% Verified Local Guides",
    desc: "Every journey is led by certified native storytellers and scholars who reveal authentic heritage, folklore, and hidden spots untouched by commercial crowds.",
    badge: "Verified Local",
  },
  {
    icon: Award,
    title: "Handpicked Boutique Stays",
    desc: "From 200-year-old royal Rajasthani havelis to eco-luxury glamping domes in Himachal and wooden houseboats in Alleppey backwaters.",
    badge: "Boutique Quality",
  },
  {
    icon: ShieldCheck,
    title: "Transparent & Safe Travel",
    desc: "Zero hidden taxes or surcharges. Includes 24/7 on-trip concierge, real-time weather & altitude advisory, and direct WhatsApp manager support.",
    badge: "Full Security",
  },
];

// Interactive Journey Architecture / How It Works
const ARCHITECTURE_STEPS = [
  {
    step: "01",
    title: "Curated Itinerary Discovery",
    desc: "Explore 25+ verified multi-day expeditions with day-by-day activity maps, hotel breakdowns, and packing guidelines.",
    icon: Compass,
  },
  {
    step: "02",
    title: "Instant Razorpay Checkout",
    desc: "Seamless zero-friction booking with UPI, QR code, netbanking, or cards powered by secure Razorpay demo flow.",
    icon: CreditCard,
  },
  {
    step: "03",
    title: "Direct 1-Click PDF Voucher",
    desc: "Instant vector booking voucher generation directly to device with package ID, QR verification, and emergency contacts.",
    icon: FileDown,
  },
  {
    step: "04",
    title: "End-to-End Ground Concierge",
    desc: "Dedicated personal coordinator oversees your airport pickup, hotel check-ins, VIP monument entries, and luggage transit.",
    icon: CalendarCheck,
  },
];

// Tech Stack Showcase for Recruiters & Engineering Excellence
const TECH_STACK = [
  {
    name: "Next.js 16 (Turbopack & App Router)",
    role: "Modern SSR/SSG architecture, high-performance static page generation, and optimized client bundle routing.",
    tag: "Frontend Core",
  },
  {
    name: "Django REST Framework (DRF)",
    role: "Production-ready REST APIs, atomic transactions for bookings, robust token authentication, and serializer validations.",
    tag: "Backend Engine",
  },
  {
    name: "Razorpay Payment Gateway",
    role: "Real-time payment order creation, secure client checkout popup, and backend server-side signature verification.",
    tag: "Fintech Integration",
  },
  {
    name: "Native jsPDF Vector Engine",
    role: "Instant client-side booking voucher generation and direct file download without clunky browser print dialogs.",
    tag: "PDF Automation",
  },
  {
    name: "Tailwind CSS v4 & Lucide Motion",
    role: "Warm luxury color tokens, fluid responsiveness, dark/light theme persistence, and smooth micro-interactions.",
    tag: "UI / UX Design",
  },
  {
    name: "Vercel & Cloud Infrastructure",
    role: "Continuous integration, edge caching, lightning-fast CDN image optimization, and zero-downtime automated deployments.",
    tag: "DevOps & Cloud",
  },
];

// Metrics
const KEY_METRICS = [
  { value: "25+", label: "Handcrafted Expeditions", sub: "Covering 14 Indian States" },
  { value: "10k+", label: "Satisfied Explorers", sub: "98% Positive Feedback" },
  { value: "4.95★", label: "Average Rating", sub: "Across 2,400+ Reviews" },
  { value: "1-Click", label: "Instant PDF Vouchers", sub: "Zero Waiting Time" },
];

export default function About() {
  return (
    <div className="bg-[#fcfbf9] dark:bg-[#09090b] text-stone-900 dark:text-stone-100 min-h-screen">

      {/* Hero Banner with Unified Warm Luxury Backdrop */}
      <section className="relative w-full h-[400px] sm:h-[480px] md:h-[540px] overflow-hidden flex items-center justify-center">
        <Image
          src="/images/premmandir.png"
          alt="TripNova Journey"
          fill
          className="object-cover scale-105"
          priority
        />
        
        {/* Ambient Darkened Gradient Overlay */}
        <div className="absolute inset-0 bg-gradient-to-b from-black/85 via-black/60 to-[#09090b]/95" />
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 -translate-y-1/2 w-96 h-96 bg-orange-600/20 rounded-full blur-[110px] pointer-events-none" />

        <div className="relative z-10 text-center px-4 max-w-4xl pt-16 sm:pt-20">
          <FadeUp delay={0.1}>
            <span className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs sm:text-sm font-semibold uppercase tracking-wider mb-4 border border-white/20 shadow-lg">
              <Sparkles size={14} className="text-amber-400 animate-spin-slow" />
              <span>Full-Stack Travel Experience Platform</span>
            </span>
          </FadeUp>

          <FadeUp delay={0.2}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-playfair text-white leading-tight tracking-tight drop-shadow-md">
              Connecting Curious Travelers with India's Soul
            </h1>
          </FadeUp>

          <FadeUp delay={0.35}>
            <p className="mt-4 sm:mt-5 text-sm sm:text-lg text-stone-200/95 font-poppins max-w-2xl mx-auto font-light leading-relaxed">
              TripNova is a comprehensive next-generation travel platform engineered to deliver authentic cultural itineraries, transparent booking, and seamless digital travel vouchers across India.
            </p>
          </FadeUp>

          {/* Micro feature pills */}
          <FadeUp delay={0.45}>
            <div className="mt-6 flex flex-wrap items-center justify-center gap-2.5 sm:gap-3 text-xs font-poppins text-stone-300">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
                <CheckCircle2 size={13} className="text-emerald-400" /> Razorpay Verified
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
                <CheckCircle2 size={13} className="text-amber-400" /> Direct PDF Vouchers
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-white/10 backdrop-blur-sm border border-white/15">
                <CheckCircle2 size={13} className="text-orange-400" /> Next.js & DRF Architecture
              </span>
            </div>
          </FadeUp>
        </div>
      </section>

      {/* Floating Key Metrics Bar */}
      <div className="relative -mt-10 sm:-mt-12 z-20 max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp delay={0.25}>
          <div className="bg-white/95 dark:bg-stone-900/95 backdrop-blur-xl rounded-2xl p-5 sm:p-6 border border-stone-200/80 dark:border-stone-800 shadow-xl grid grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 divide-y sm:divide-y-0 sm:divide-x divide-stone-200/60 dark:divide-stone-800/80">
            {KEY_METRICS.map((metric, idx) => (
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

      {/* Main Content Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-24 space-y-20 sm:space-y-28">

        {/* 1. What is TripNova? Mission & Value Narrative */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Visual Card */}
          <FadeUp className="lg:col-span-5 relative h-[400px] sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80 dark:border-stone-800 group">
            <Image
              src="/images/prem.png"
              fill
              sizes="(max-width: 1024px) 100vw, 42vw"
              alt="Discovering India"
              className="object-cover transition-transform duration-700 group-hover:scale-108"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/25 to-transparent" />
            
            <div className="absolute top-4 left-4 flex items-center gap-1.5 px-3 py-1 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white text-xs font-semibold">
              <Sparkles size={12} className="text-amber-400" />
              <span>Authentic Cultural Circuits</span>
            </div>

            <div className="absolute bottom-5 left-5 right-5 p-4 rounded-2xl bg-black/75 backdrop-blur-md border border-white/20 text-white space-y-1">
              <p className="text-[11px] uppercase font-bold tracking-wider text-amber-400">Handcrafted Itineraries</p>
              <p className="text-sm font-playfair font-semibold">Over 25+ curated circuits across 14 states</p>
              <p className="text-xs text-stone-300 font-light font-poppins">Rishikesh • Rajasthan • Ladakh • Varanasi • Kerala</p>
            </div>
          </FadeUp>

          {/* Right Explanation */}
          <FadeUp delay={0.2} className="lg:col-span-7 space-y-6">
            <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20">
              <Globe2 size={13} className="text-orange-500" /> What Is TripNova?
            </span>
            
            <h2 className="text-2xl sm:text-4xl font-playfair font-bold text-stone-900 dark:text-white leading-tight">
              An End-to-End Travel Companion Designed for the Modern Explorer
            </h2>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-poppins">
              Planning a trip across India is often fragmented — travelers juggle between disorganized travel agencies, opaque pricing, unreliable local taxi operators, and chaotic itineraries. 
            </p>

            <p className="text-sm sm:text-base text-stone-600 dark:text-stone-300 leading-relaxed font-poppins">
              <strong className="text-stone-900 dark:text-white font-semibold">TripNova solves this fundamentally:</strong> We combine the authenticity of locally guided heritage expeditions with modern software reliability. Travelers discover curated tours, book instantly with integrated Razorpay payments, and receive a cryptographically tracked travel voucher PDF with 1-click download.
            </p>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-poppins text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-600 shrink-0" />
                <span>Zero Hidden Convenience Surcharges</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-600 shrink-0" />
                <span>Day-by-Day Curated Activity Schedules</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-600 shrink-0" />
                <span>24/7 WhatsApp On-Ground Concierge</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-600 shrink-0" />
                <span>Full-Stack Verified Booking Flow</span>
              </div>
            </div>

            <div className="pt-4 flex flex-wrap gap-4">
              <Link href="/packages">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-lg shadow-orange-500/25 transition hover:scale-105 active:scale-95 cursor-pointer">
                  <span>Explore All Packages</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/contact">
                <button className="bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-white border border-stone-200 dark:border-stone-800 text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl transition cursor-pointer">
                  Contact Our Team
                </button>
              </Link>
            </div>
          </FadeUp>
        </div>

        {/* 2. Seamless Flow: How the Platform Operates */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12 sm:mb-16">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 mb-3">
                <Zap size={13} className="text-orange-500" /> Seamless Traveler Experience
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-playfair font-bold text-stone-900 dark:text-white">
                How TripNova Delivers Stress-Free Journeys
              </h3>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-3 text-xs sm:text-sm text-stone-600 dark:text-stone-400 font-poppins">
                From finding your dream destination to holding an official digital boarding voucher in your hands.
              </p>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {ARCHITECTURE_STEPS.map((step, idx) => {
              const Icon = step.icon;
              return (
                <FadeUp key={idx} delay={idx * 0.1}>
                  <div className="relative h-full p-6 rounded-2xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-sm hover:shadow-xl hover:-translate-y-1.5 transition-all duration-300 group flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-xl bg-orange-500/10 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 group-hover:bg-orange-500 group-hover:text-white transition-all duration-300">
                          <Icon size={22} />
                        </div>
                        <span className="text-xs font-black font-poppins text-stone-300 dark:text-stone-700 tracking-wider">
                          STEP {step.step}
                        </span>
                      </div>

                      <h4 className="font-playfair font-bold text-lg text-stone-900 dark:text-white mb-2 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                        {step.title}
                      </h4>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-poppins">
                        {step.desc}
                      </p>
                    </div>

                    <div className="mt-5 pt-3 border-t border-stone-100 dark:border-stone-800/80 text-[11px] font-semibold text-orange-600 dark:text-orange-400 flex items-center gap-1 font-poppins">
                      <span>Instant Feature</span>
                      <ArrowRight size={12} className="group-hover:translate-x-1 transition-transform" />
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

        {/* 3. Three Core Pillars (Hospitality, Luxury, Safety) */}
        <div>
          <div className="text-center max-w-2xl mx-auto mb-12">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-amber-500/10 text-amber-600 dark:text-amber-400 border border-amber-500/20 mb-3">
                <Flame size={13} className="text-amber-500 fill-amber-500 animate-pulse" /> Core Commitments
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="text-2xl sm:text-3xl font-playfair font-bold text-stone-900 dark:text-white">
                Our Guarantee to Every Traveler
              </h3>
            </FadeUp>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 sm:gap-8">
            {VALUES.map((val, i) => {
              const Icon = val.icon;
              return (
                <FadeUp key={i} delay={i * 0.1}>
                  <div className="h-full p-7 sm:p-8 rounded-3xl bg-white dark:bg-stone-900 border border-stone-200/80 dark:border-stone-800 shadow-md hover:shadow-xl transition-all duration-300 hover:-translate-y-1.5 group flex flex-col justify-between">
                    <div>
                      <div className="flex items-center justify-between mb-5">
                        <div className="w-12 h-12 rounded-2xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center group-hover:scale-110 transition-transform">
                          <Icon size={24} />
                        </div>
                        <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-300 border border-orange-500/20 font-poppins">
                          {val.badge}
                        </span>
                      </div>
                      <h4 className="font-playfair font-bold text-xl text-stone-900 dark:text-white mb-2.5">{val.title}</h4>
                      <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 leading-relaxed font-poppins">{val.desc}</p>
                    </div>

                    <div className="mt-5 pt-4 border-t border-stone-100 dark:border-stone-800/80 flex items-center gap-1.5 text-xs text-amber-500 font-semibold font-poppins">
                      <Star size={13} className="fill-amber-500" />
                      <span>Verified Standard</span>
                    </div>
                  </div>
                </FadeUp>
              );
            })}
          </div>
        </div>

        {/* 4. Engineering & Recruiter Spotlight: Technology Under the Hood */}
        <div className="relative rounded-3xl overflow-hidden bg-gradient-to-br from-stone-900 via-[#131110] to-stone-950 text-white p-7 sm:p-12 md:p-14 border border-stone-800/80 shadow-2xl">
          <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 max-w-3xl mb-10">
            <FadeUp>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/20 text-orange-400 border border-orange-500/30 mb-3">
                <Code2 size={13} className="text-orange-400" /> Technical Architecture & Stack
              </span>
            </FadeUp>
            <FadeUp delay={0.1}>
              <h3 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-white">
                Engineered for Scale, Security & Seamless Speed
              </h3>
            </FadeUp>
            <FadeUp delay={0.2}>
              <p className="mt-3 text-xs sm:text-sm text-stone-300 font-poppins font-light leading-relaxed">
                TripNova is designed as a modern decoupled full-stack application demonstrating end-to-end production patterns: typed client state, transactional REST backends, idempotent payment verifications, and client-side vector PDF compilation.
              </p>
            </FadeUp>
          </div>

          <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5">
            {TECH_STACK.map((item, idx) => (
              <FadeUp key={idx} delay={idx * 0.08}>
                <div className="p-5 rounded-2xl bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md border border-white/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between h-full group">
                  <div>
                    <div className="flex items-center justify-between mb-3">
                      <span className="text-[10px] font-mono px-2 py-0.5 rounded bg-orange-500/15 text-orange-300 border border-orange-500/25">
                        {item.tag}
                      </span>
                      <Cpu size={15} className="text-stone-500 group-hover:text-orange-400 transition-colors" />
                    </div>
                    <h5 className="font-poppins font-bold text-sm text-white group-hover:text-orange-300 transition-colors">
                      {item.name}
                    </h5>
                    <p className="text-xs text-stone-400 mt-2 font-poppins leading-relaxed font-light">
                      {item.role}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* 5. Guest Testimonial & Call to Action */}
        <FadeUp>
          <div className="relative rounded-3xl bg-gradient-to-br from-amber-500/10 via-orange-500/5 to-transparent border border-orange-200 dark:border-orange-900/40 p-8 sm:p-12 overflow-hidden flex flex-col md:flex-row items-center justify-between gap-8">
            <div className="max-w-2xl">
              <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-widest">
                Verified Explorer Experience
              </span>
              <p className="mt-3 text-lg sm:text-xl font-playfair font-semibold text-stone-900 dark:text-white leading-relaxed italic">
                &ldquo;Booking through TripNova was an extraordinary experience. The day-wise itinerary, transparent pricing, and instant 1-click PDF voucher download saved us hours of coordination.&rdquo;
              </p>
              <div className="mt-5 flex items-center gap-3">
                <div className="w-10 h-10 rounded-full bg-gradient-to-r from-orange-500 to-amber-500 flex items-center justify-center font-bold text-white text-sm shadow-md">
                  PK
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-stone-900 dark:text-white font-poppins">Prem Kelasi</h4>
                  <p className="text-xs text-stone-500 dark:text-stone-400 font-poppins">Rajasthan Heritage Tour • Traveled Nov 2024</p>
                </div>
              </div>
            </div>

            <div className="shrink-0 flex flex-col sm:flex-row gap-3 w-full md:w-auto">
              <Link href="/packages" className="w-full sm:w-auto">
                <button className="w-full sm:w-auto inline-flex items-center justify-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs sm:text-sm font-semibold px-6 py-3 rounded-xl shadow-lg shadow-orange-500/25 transition hover:scale-105 active:scale-95 cursor-pointer font-poppins">
                  <span>Browse All Tours</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
            </div>
          </div>
        </FadeUp>

      </div>
    </div>
  )
}
