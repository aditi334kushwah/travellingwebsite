'use client';

import React from 'react';
import Link from 'next/link';
import FadeUp from '@/components/ui/FadeUp';
import { ArrowRight, Plane, CheckCircle2, Wifi, Sparkles, MapPin, QrCode, ShieldCheck, FileDown, HeartHandshake } from 'lucide-react';

export default function TravelConceptSection() {
  return (
    <section className="relative w-full py-10 sm:py-14 bg-[#fcfbf9] dark:bg-[#09090b] overflow-hidden">
      
      {/* Background Soft Warm Brand Texture */}
      <div className="absolute inset-0 bg-[radial-gradient(#ea580c10_1.5px,transparent_1.5px)] [background-size:24px_24px] pointer-events-none" />
      <div className="absolute top-1/2 left-1/3 -translate-y-1/2 w-[600px] h-[380px] bg-gradient-to-r from-orange-500/10 via-amber-500/10 to-orange-500/5 rounded-full blur-[130px] pointer-events-none" />

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-14 items-center">
          
          {/* =========================================================
              LEFT SIDE: PURE CSS REALISTIC COMPOSITION (NOT AN IMAGE)
              1. Smartphone with Warm Saffron Boarding Pass & QR Code
              2. Rich Deep Obsidian/Burgundy Passport with Pure Gold Foil
              3. Paper Boarding Pass with Orange Flight Accents
              4. Warm Amber/Orange Credit Card with Gold EMV Chip
             ========================================================= */}
          <FadeUp className="lg:col-span-6 relative flex items-center justify-center min-h-[460px] sm:min-h-[520px]">
            
            {/* Ambient Shadow Pod */}
            <div className="absolute w-[360px] sm:w-[440px] h-[360px] bg-orange-500/10 dark:bg-black/40 rounded-full blur-3xl pointer-events-none -bottom-4" />

            <div className="relative w-full max-w-[420px] h-[480px] sm:h-[520px]">

              {/* 1. BACKGROUND PAPER BOARDING PASSES (Tilted Top Right at 16deg) */}
              <div 
                className="absolute right-0 top-2 w-[190px] sm:w-[220px] bg-white dark:bg-stone-900 rounded-2xl shadow-xl border border-stone-200 dark:border-stone-800 overflow-hidden text-stone-800 dark:text-stone-200 font-mono transition-transform duration-500 hover:rotate-12"
                style={{ transform: "rotate(16deg)" }}
              >
                {/* Boarding Pass Header in TripNova Brand Orange */}
                <div className="bg-gradient-to-r from-orange-600 to-amber-600 text-white px-3 py-2 flex items-center justify-between text-[10px] font-bold tracking-wider">
                  <span>TOUR VOUCHER</span>
                  <Plane size={12} className="rotate-45" />
                </div>
                
                {/* Route & Tour Details */}
                <div className="p-3 text-[10px] space-y-2 border-b border-dashed border-stone-300 dark:border-stone-700">
                  <div className="flex justify-between items-center">
                    <div>
                      <span className="text-[8px] text-stone-400 block font-poppins">CIRCUIT</span>
                      <span className="font-bold text-xs text-stone-900 dark:text-white">DELHI</span>
                    </div>
                    <Plane size={11} className="text-orange-500 rotate-90" />
                    <div className="text-right">
                      <span className="text-[8px] text-stone-400 block font-poppins">DESTINATION</span>
                      <span className="font-bold text-xs text-stone-900 dark:text-white">MANALI</span>
                    </div>
                  </div>

                  <div className="flex justify-between text-[8px] text-stone-500 dark:text-stone-400 font-poppins">
                    <span>CODE: PKG-B8A868</span>
                    <span>CAB: SEDAN</span>
                    <span>4D / 3N</span>
                  </div>
                </div>

                {/* Barcode Strip */}
                <div className="p-2 bg-stone-50 dark:bg-stone-800 flex items-center justify-center">
                  <div className="flex items-center gap-[2px] h-6 opacity-75">
                    <span className="w-[1.5px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[3px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[1px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[2px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[1px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[3px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[2px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[1px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[3px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[1px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[2px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[3px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[1px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[2.5px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[1px] h-full bg-stone-900 dark:bg-stone-100" />
                    <span className="w-[2px] h-full bg-stone-900 dark:bg-stone-100" />
                  </div>
                </div>
              </div>

              {/* 2. REALISTIC LUXURY PASSPORT (Center Tilted at 24deg) */}
              <div 
                className="absolute right-4 top-24 w-[190px] sm:w-[210px] h-[270px] sm:h-[290px] rounded-2xl bg-gradient-to-br from-[#1c1917] via-[#292524] to-[#0c0a09] shadow-2xl border border-amber-900/40 p-4 text-amber-200 flex flex-col justify-between transition-transform duration-500 hover:rotate-15"
                style={{ 
                  transform: "rotate(24deg)",
                  boxShadow: "0 25px 40px -10px rgba(0, 0, 0, 0.5)"
                }}
              >
                {/* Gold Foil Imprint Header */}
                <div className="text-center space-y-1">
                  <span className="text-[9px] uppercase font-bold tracking-[0.2em] text-amber-400/90 block font-poppins">
                    EXPLORE INCREDIBLE INDIA
                  </span>
                  <span className="text-sm sm:text-base font-serif tracking-[0.25em] font-bold text-amber-400 block border-b border-amber-500/30 pb-1">
                    TRIPNOVA PASS
                  </span>
                </div>

                {/* Golden Emblem */}
                <div className="w-20 h-20 mx-auto rounded-full border-2 border-amber-400/70 flex items-center justify-center p-2 relative shadow-inner">
                  <div className="w-full h-full rounded-full border border-dashed border-amber-400/60 flex items-center justify-center">
                    <div className="w-10 h-10 rounded-full border border-amber-400/80 flex items-center justify-center text-[10px] font-bold text-amber-300">
                      TN
                    </div>
                  </div>
                </div>

                {/* Biometric Chip Symbol */}
                <div className="text-center">
                  <div className="w-6 h-4 mx-auto rounded-sm border border-amber-400/70 flex items-center justify-center">
                    <span className="w-2.5 h-2.5 rounded-full border border-amber-400/70" />
                  </div>
                  <span className="text-[7px] tracking-widest text-amber-300/80 uppercase block mt-1 font-poppins">
                    Verified Tour Pass
                  </span>
                </div>
              </div>

              {/* 3. REALISTIC SMARTPHONE (Left Front, Tilted at -10deg) */}
              <div 
                className="absolute left-2 sm:left-4 top-6 w-[200px] sm:w-[230px] h-[390px] sm:h-[430px] rounded-[38px] bg-stone-900 p-2.5 shadow-2xl border-4 border-stone-800 z-20 transition-transform duration-500 hover:rotate-0"
                style={{ 
                  transform: "rotate(-10deg)",
                  boxShadow: "0 30px 60px -15px rgba(0, 0, 0, 0.5)"
                }}
              >
                {/* Speaker Grill & Selfie Cam */}
                <div className="absolute top-4 left-1/2 -translate-x-1/2 w-14 h-3.5 bg-black rounded-full flex items-center justify-center z-30">
                  <span className="w-2 h-2 rounded-full bg-stone-800" />
                </div>

                {/* Smartphone Display Screen in Warm Orange / Amber Gradient */}
                <div className="w-full h-full rounded-[30px] bg-gradient-to-b from-orange-600 via-amber-600 to-orange-700 overflow-hidden flex flex-col justify-between text-white font-poppins relative">
                  
                  {/* Phone Header App Bar */}
                  <div className="pt-6 px-4 pb-2 text-center border-b border-white/20">
                    <span className="text-[10px] uppercase font-bold tracking-widest text-amber-200 block">
                      TRIPNOVA BOARDING PASS
                    </span>
                    <span className="text-xs font-semibold text-white">PKG-FFE3BB</span>
                  </div>

                  {/* Route & Travel Info */}
                  <div className="p-3.5 space-y-2 text-center">
                    <div className="flex items-center justify-between text-xs font-bold">
                      <div>
                        <span className="text-[8px] text-amber-200 block uppercase">START</span>
                        <span className="text-sm font-black">DELHI</span>
                      </div>
                      <div className="flex flex-col items-center">
                        <Plane size={14} className="text-amber-200" />
                        <span className="text-[8px] text-amber-100 font-light">CONFIRMED</span>
                      </div>
                      <div>
                        <span className="text-[8px] text-amber-200 block uppercase">DESTINATION</span>
                        <span className="text-sm font-black">KERALA</span>
                      </div>
                    </div>

                    <div className="pt-1.5 flex justify-between text-[9px] text-amber-100 border-t border-white/15">
                      <span>STAY: 4★ RESORT</span>
                      <span>CAB: INCLUDED</span>
                      <span>GUIDE: YES</span>
                    </div>
                  </div>

                  {/* High Quality CSS/SVG QR Code (White Card Container) */}
                  <div className="m-3 p-3 bg-white rounded-2xl shadow-md text-stone-900 flex flex-col items-center">
                    {/* Stylized Vector QR Code Matrix */}
                    <div className="w-24 h-24 p-1 bg-white border border-stone-200 rounded-lg grid grid-cols-6 grid-rows-6 gap-0.5">
                      {/* Corner Target 1 (Top Left) */}
                      <div className="col-span-2 row-span-2 bg-stone-900 p-0.5">
                        <div className="w-full h-full bg-white p-0.5">
                          <div className="w-full h-full bg-stone-900" />
                        </div>
                      </div>
                      <div className="bg-stone-900" />
                      <div className="bg-transparent" />
                      {/* Corner Target 2 (Top Right) */}
                      <div className="col-span-2 row-span-2 bg-stone-900 p-0.5">
                        <div className="w-full h-full bg-white p-0.5">
                          <div className="w-full h-full bg-stone-900" />
                        </div>
                      </div>
                      <div className="bg-stone-900" />
                      <div className="bg-stone-900" />
                      {/* Mid Data Dots */}
                      <div className="bg-stone-900" />
                      <div className="bg-transparent" />
                      <div className="bg-stone-900" />
                      <div className="bg-stone-900" />
                      <div className="bg-transparent" />
                      <div className="bg-stone-900" />
                      {/* Corner Target 3 (Bottom Left) */}
                      <div className="col-span-2 row-span-2 bg-stone-900 p-0.5">
                        <div className="w-full h-full bg-white p-0.5">
                          <div className="w-full h-full bg-stone-900" />
                        </div>
                      </div>
                      <div className="bg-stone-900" />
                      <div className="bg-transparent" />
                      <div className="bg-stone-900" />
                      <div className="bg-stone-900" />
                      <div className="bg-transparent" />
                      <div className="bg-stone-900" />
                      <div className="bg-stone-900" />
                      <div className="bg-transparent" />
                    </div>
                    <span className="text-[8px] uppercase tracking-wider font-bold text-stone-600 mt-1 font-poppins">
                      SCAN FOR DIGITAL VOUCHER
                    </span>
                  </div>

                </div>
              </div>

              {/* 4. REALISTIC CREDIT CARD in Warm Brand Gradient (Front Left, Tilted at -26deg) */}
              <div 
                className="absolute left-0 bottom-8 sm:bottom-12 w-[190px] sm:w-[220px] h-[115px] sm:h-[135px] rounded-2xl bg-gradient-to-tr from-amber-600 via-orange-600 to-amber-500 p-3 text-white shadow-2xl border border-amber-400/40 z-30 transition-transform duration-500 hover:rotate-[-20deg]"
                style={{ 
                  transform: "rotate(-26deg)",
                  boxShadow: "0 20px 35px -10px rgba(234, 88, 12, 0.5)"
                }}
              >
                {/* Top Row: Bank Name + Contactless Wave */}
                <div className="flex items-center justify-between">
                  <span className="text-[10px] sm:text-xs font-black tracking-widest uppercase font-poppins drop-shadow">
                    TRIPNOVA PAY
                  </span>
                  <Wifi size={14} className="rotate-90 opacity-90" />
                </div>

                {/* Gold EMV Chip */}
                <div className="mt-2 w-8 h-6 rounded-md bg-gradient-to-br from-amber-200 via-amber-400 to-amber-500 shadow-inner border border-amber-300/80 p-0.5 grid grid-cols-2 grid-rows-2 gap-[1px]">
                  <span className="border border-amber-600/40 rounded-[1px]" />
                  <span className="border border-amber-600/40 rounded-[1px]" />
                  <span className="border border-amber-600/40 rounded-[1px]" />
                  <span className="border border-amber-600/40 rounded-[1px]" />
                </div>

                {/* Masked Card Number & Expiry */}
                <div className="mt-2 flex items-center justify-between font-mono text-[9px] sm:text-[10px] tracking-widest text-amber-100">
                  <span>•••• •••• •••• 4829</span>
                  <span className="text-[8px]">UPI / CARD</span>
                </div>
              </div>

            </div>

          </FadeUp>

          {/* =========================================================
              RIGHT SIDE: 100% TRIPNOVA-TAILORED BUSINESS INFORMATION
             ========================================================= */}
          <FadeUp delay={0.2} className="lg:col-span-6 space-y-6">
            
            {/* Dashed Flight Arc SVG in Warm Brand Colors */}
            <div className="relative w-full max-w-[280px] h-10 pointer-events-none">
              <svg width="240" height="36" viewBox="0 0 240 36" fill="none">
                <path
                  d="M10 30 Q 120 2 230 30"
                  stroke="#ea580c"
                  strokeWidth="2"
                  strokeDasharray="5 5"
                  fill="none"
                  className="opacity-70 dark:opacity-85"
                />
                <circle cx="10" cy="30" r="3.5" fill="#ea580c" />
                <circle cx="230" cy="30" r="3.5" fill="#ea580c" />
              </svg>
              <Plane size={15} className="absolute right-0 top-3 text-orange-600 dark:text-orange-400 rotate-45" />
            </div>

            {/* Main Heading Tailored for TripNova */}
            <div>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 mb-3 font-poppins">
                <Sparkles size={13} className="text-orange-500" /> Digital Travel Pass & Vouchers
              </span>
              <h2 className="text-3xl sm:text-4xl md:text-5xl font-black font-playfair tracking-tight text-stone-900 dark:text-white uppercase leading-tight">
                Seamless Digital Booking & On-Ground Concierge
              </h2>
              <p className="text-xs sm:text-sm font-semibold tracking-widest uppercase text-orange-600 dark:text-amber-400 font-poppins mt-2">
                100% Verified Stays • Dedicated Private Cabs • Direct PDF Vouchers
              </p>
            </div>

            {/* Real TripNova Website Story & Value Information */}
            <p className="text-xs sm:text-sm md:text-base text-stone-600 dark:text-stone-300 font-poppins leading-relaxed font-light">
              TripNova eliminates chaotic travel planning and unverified local middlemen. Whether you are reserving a spiritual pilgrimage across Uttarakhand, a royal haveli circuit in Rajasthan, or backwaters in Kerala, our platform provides a complete end-to-end holiday solution under one roof.
            </p>

            <p className="text-xs sm:text-sm md:text-base text-stone-600 dark:text-stone-300 font-poppins leading-relaxed font-light">
              As soon as you book online with our secure payment checkout, you receive an official QR-verified digital travel pass and downloadable PDF voucher on your phone — containing your chauffeur contact details, hotel check-in keys, day-wise schedule, and our 24/7 emergency concierge helpline.
            </p>

            {/* Real TripNova Feature Checkpoints */}
            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 pt-1 font-poppins text-xs sm:text-sm text-stone-700 dark:text-stone-300">
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-600 dark:text-orange-400 shrink-0" />
                <span>Instant 1-Click PDF Voucher Download</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-600 dark:text-orange-400 shrink-0" />
                <span>Zero Hidden Fees & Instant Confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-600 dark:text-orange-400 shrink-0" />
                <span>Sanitized Private Cab & Chauffeur</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 size={16} className="text-orange-600 dark:text-orange-400 shrink-0" />
                <span>24/7 Dedicated WhatsApp Trip Support</span>
              </div>
            </div>

            {/* Action Buttons */}
            <div className="pt-4 flex flex-wrap items-center gap-4">
              <Link href="/packages">
                <button className="inline-flex items-center gap-2 bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 text-white text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-2xl shadow-lg shadow-orange-500/25 transition hover:scale-105 active:scale-95 cursor-pointer font-poppins">
                  <span>Browse Holiday Packages</span>
                  <ArrowRight size={16} />
                </button>
              </Link>
              <Link href="/about">
                <button className="inline-flex items-center gap-2 bg-white dark:bg-stone-900 hover:bg-stone-100 dark:hover:bg-stone-800 text-stone-800 dark:text-white border border-stone-200 dark:border-stone-800 text-xs sm:text-sm font-semibold px-6 py-3.5 rounded-2xl transition cursor-pointer font-poppins">
                  <span>How TripNova Works</span>
                </button>
              </Link>
            </div>

          </FadeUp>

        </div>
      </div>
    </section>
  );
}
