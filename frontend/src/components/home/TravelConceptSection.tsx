'use client';

import Image from 'next/image';
import Link from 'next/link';
import FadeUp from '@/components/ui/FadeUp';
import { ArrowRight, Sparkles, CheckCircle2, ShieldCheck, QrCode, FileDown, CreditCard, Plane } from 'lucide-react';

export default function TravelConceptSection() {
  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#fcfbf9] dark:bg-[#09090b] overflow-hidden border-b border-stone-200/70 dark:border-stone-800/80">
      
      {/* World Map Dotted / Silhouette Background Backdrop */}
      <div className="absolute inset-0 bg-[radial-gradient(#80808012_1px,transparent_1px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/4 -translate-y-1/2 w-[550px] h-[350px] bg-blue-500/5 dark:bg-orange-500/5 rounded-full blur-[120px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-14 items-center">
          
          {/* Left Side: Exact Composition from User Image (Phone, Boarding Pass, Passport, Credit Card, QR Code) */}
          <FadeUp className="lg:col-span-6 relative flex items-center justify-center">
            
            {/* World Flight Path Arc Overlay */}
            <div className="absolute -top-6 right-4 hidden sm:block pointer-events-none opacity-80">
              <svg width="220" height="90" viewBox="0 0 220 90" fill="none">
                <path
                  d="M10 75 Q 110 5 210 75"
                  stroke="#3b82f6"
                  strokeWidth="2"
                  strokeDasharray="6 6"
                  fill="none"
                  className="opacity-70 dark:stroke-amber-400"
                />
                <circle cx="10" cy="75" r="4" fill="#ef4444" />
                <circle cx="210" cy="75" r="4" fill="#ef4444" />
              </svg>
            </div>

            {/* Container for Image Illustration */}
            <div className="relative w-full max-w-[480px] h-[360px] sm:h-[420px] md:h-[460px] rounded-3xl overflow-hidden shadow-2xl border border-stone-200/80 dark:border-stone-800 bg-white/90 dark:bg-stone-900/90 backdrop-blur-md group">
              <Image
                src="/images/travel_concept.png"
                alt="TripNova Seamless Digital Travel Experience"
                fill
                priority
                className="object-contain p-2 sm:p-4 transition-transform duration-700 ease-out group-hover:scale-105"
              />

              {/* Floating Live Verification Badge (Bottom Left) */}
              <div className="absolute bottom-4 left-4 z-20 flex items-center gap-2 px-3.5 py-1.5 rounded-2xl bg-white/95 dark:bg-stone-900/95 backdrop-blur-md border border-stone-200/90 dark:border-stone-700 shadow-lg">
                <span className="w-2.5 h-2.5 rounded-full bg-emerald-500 animate-pulse" />
                <span className="text-[11px] font-bold font-poppins text-stone-900 dark:text-stone-100">
                  Instant Boarding Voucher Ready
                </span>
              </div>
            </div>

          </FadeUp>

          {/* Right Side: Exact Content Layout & Typography from User's Image */}
          <FadeUp delay={0.2} className="lg:col-span-6 space-y-6">
            
            {/* Flight Route Tag */}
            <div className="flex items-center gap-3">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-blue-500/10 dark:bg-orange-500/10 text-blue-600 dark:text-orange-400 border border-blue-500/20 dark:border-orange-500/20 font-poppins">
                <Plane size={13} className="text-blue-500 dark:text-orange-500" /> All-in-One Travel Desk
              </span>
              <div className="h-px flex-grow bg-gradient-to-r from-stone-300 dark:from-stone-700 to-transparent" />
            </div>

            {/* Main Header (Exact format: TRAVEL CONCEPT DESIGN) */}
            <div>
              <h2 className="text-2xl sm:text-4xl md:text-5xl font-black font-playfair tracking-tight text-stone-900 dark:text-white uppercase leading-tight">
                Travel Concept Design
              </h2>
              <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-blue-600 dark:text-amber-400 font-poppins mt-1">
                Zero Friction • Instant Booking • Digital Boarding Pass
              </p>
            </div>

            {/* TripNova Specific Tailored Description */}
            <p className="text-xs sm:text-sm md:text-base text-stone-600 dark:text-stone-300 font-poppins leading-relaxed font-light">
              Experience the future of holiday exploration across India. TripNova unifies complete multi-day itineraries, verified boutique accommodations, sanitized private cabs, and secure online checkouts into one seamless mobile-first journey.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-stone-600 dark:text-stone-300 font-poppins leading-relaxed font-light">
              No paper clutter, no confusing travel desks. Booking confirmation immediately delivers an official QR-verified digital travel pass and itinerary voucher directly to your device with 24/7 dedicated concierge assistance.
            </p>

            {/* Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-2 font-poppins text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600 dark:text-orange-500 shrink-0" />
                <span>Direct 1-Click PDF Voucher</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600 dark:text-orange-500 shrink-0" />
                <span>Encrypted Razorpay Checkout</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600 dark:text-orange-500 shrink-0" />
                <span>Real-Time Chauffeur Tracking</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-blue-600 dark:text-orange-500 shrink-0" />
                <span>24/7 WhatsApp Concierge</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/packages">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-blue-600 to-indigo-600 dark:from-orange-600 dark:to-amber-600 hover:opacity-90 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-2xl shadow-lg shadow-blue-500/20 dark:shadow-orange-500/20 transition hover:scale-105 active:scale-95 cursor-pointer font-poppins">
                  <span>Explore Tour Packages</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/about">
                <button className="inline-flex items-center gap-2 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-white border border-stone-200 dark:border-stone-800 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-2xl transition cursor-pointer font-poppins">
                  <span>Learn How It Works</span>
                </button>
              </Link>
            </div>

          </FadeUp>

        </div>
      </div>
    </section>
  );
}

