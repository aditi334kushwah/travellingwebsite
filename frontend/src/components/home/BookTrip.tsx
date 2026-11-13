'use client'
import { ArrowRight, Globe, Plane, Phone, Mail, MapPin, Sparkles, Luggage, Cloud, ShieldCheck, CalendarCheck, Award, Star, Compass } from "lucide-react";
import { useRouter } from "next/navigation";
import FadeUp from "@/components/ui/FadeUp";

export default function HowItWorks() {
  const steps = [
    { title: "Select Destination", desc: "Browse curated circuits with transparent pricing & verified stays." },
    { title: "Tailor Itinerary", desc: "Customize dates, hotel categories, meal plans, and group count." },
    { title: "Instant Confirmation", desc: "Secure 1-click booking with Razorpay UPI/Card & get your voucher." },
    { title: "Embark on Journey", desc: "Enjoy 24/7 dedicated local concierge support from takeoff to return." },
  ];

  const router = useRouter();

  return (
    <section className="py-12 sm:py-16 bg-gradient-to-b from-[#fcfbf9] via-stone-50/50 to-[#fcfbf9] dark:from-[#09090b] dark:via-stone-900/40 dark:to-[#09090b] overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        {/* Section Header */}
        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-18">
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 text-xs font-bold uppercase tracking-wider font-poppins">
              <Sparkles size={13} className="text-orange-500" /> Seamless Process
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mt-3 text-stone-900 dark:text-stone-100 tracking-tight">
              Book Your Tour in 4 Easy Steps
            </h2>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="mt-3 text-xs sm:text-base text-stone-600 dark:text-stone-400 font-poppins font-light leading-relaxed">
              Zero complicated paperwork. Plan, reserve, and download your travel slip in under two minutes.
            </p>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-12 gap-10 lg:gap-14 items-center">

          {/* Steps Column (Left Side - Sliding in from LEFT on Scroll) */}
          <div className="lg:col-span-6 space-y-4 sm:space-y-5">
            {steps.map((step, index) => (
              <FadeUp key={index} direction="left" distance={50} delay={index * 0.1}>
                <div className="flex items-start gap-4 p-5 sm:p-6 bg-white dark:bg-stone-900 rounded-[28px] border border-stone-200/90 dark:border-stone-800 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-orange-500/50 hover:shadow-[0_12px_30px_rgb(234,88,12,0.12)] hover:-translate-y-1 transition-all duration-300 group">
                  <div className="w-11 h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white font-bold font-mono text-sm sm:text-base flex items-center justify-center shadow-md shadow-orange-500/25 shrink-0 group-hover:scale-110 group-hover:rotate-3 transition-transform">
                    0{index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair font-bold text-lg sm:text-xl text-stone-900 dark:text-stone-100 group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-stone-600 dark:text-stone-400 mt-1 font-poppins leading-relaxed font-light">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* ========================================================
              RIGHT SIDE: 3-CARD 3D TILTED OVERLAPPING STACK DECK
              (Sliding in from RIGHT on Scroll)
             ======================================================== */}
          <FadeUp direction="right" distance={60} duration={0.8} delay={0.2} className="lg:col-span-6 flex justify-center items-center relative py-8">
            
            {/* Ambient Background Glow Pod */}
            <div className="absolute w-[360px] h-[400px] bg-gradient-to-br from-orange-500/15 via-amber-500/10 to-transparent rounded-full blur-3xl pointer-events-none" />

            {/* Overlapping Deck Wrapper */}
            <div className="relative w-full max-w-[340px] sm:max-w-[380px] h-[550px] sm:h-[580px] flex items-center justify-center">

              {/* ================= CARD 1: BACK LEFT OVERLAPPING CARD (-8deg Tilt) ================= */}
              <div 
                className="absolute top-3 -left-3 sm:-left-6 w-[290px] sm:w-[320px] h-[480px] sm:h-[510px] rounded-[40px] bg-gradient-to-br from-stone-900 via-stone-800 to-stone-950 text-white p-6 shadow-2xl border border-stone-700/60 transition-all duration-500 hover:rotate-[-12deg] hover:-translate-x-2 pointer-events-none sm:pointer-events-auto group/left"
                style={{
                  transform: "rotate(-8deg) scale(0.93)",
                  boxShadow: "0 25px 50px -12px rgba(0, 0, 0, 0.4)"
                }}
              >
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-3 border-b border-white/10">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-amber-400 flex items-center gap-1.5">
                    <Plane size={12} className="rotate-45" /> FLIGHT & CAB PASS
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-white/10 text-stone-300">
                    TN-PASS #01
                  </span>
                </div>

                <div className="mt-5 space-y-2">
                  <span className="text-[10px] uppercase text-stone-400 font-poppins">Verified Chauffeur</span>
                  <h4 className="text-base sm:text-lg font-bold font-playfair text-white">Private Sedan / SUV</h4>
                  <p className="text-xs text-stone-300 font-poppins">Pre-sanitized with 24/7 GPS tracking & English-speaking native guide.</p>
                </div>

                {/* Micro Stamp */}
                <div className="mt-8 p-3 rounded-2xl bg-white/5 border border-white/10 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-orange-500/20 text-orange-400 flex items-center justify-center shrink-0">
                    <ShieldCheck size={18} />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">100% Insured</span>
                    <span className="text-[10px] text-stone-400">Zero Surge Price Guarantee</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 pt-3 border-t border-white/10 flex items-center justify-between text-[11px] text-stone-400 font-poppins">
                  <span>Check-in Key</span>
                  <span className="font-mono text-amber-400 font-bold">READY</span>
                </div>
              </div>

              {/* ================= CARD 2: BACK RIGHT OVERLAPPING CARD (+8deg Tilt) ================= */}
              <div 
                className="absolute top-3 -right-3 sm:-right-6 w-[290px] sm:w-[320px] h-[480px] sm:h-[510px] rounded-[40px] bg-gradient-to-br from-amber-600 via-orange-600 to-amber-700 text-white p-6 shadow-2xl border border-amber-400/40 transition-all duration-500 hover:rotate-[12deg] hover:translate-x-2 pointer-events-none sm:pointer-events-auto group/right"
                style={{
                  transform: "rotate(8deg) scale(0.93)",
                  boxShadow: "0 25px 50px -12px rgba(234, 88, 12, 0.45)"
                }}
              >
                {/* Header Strip */}
                <div className="flex items-center justify-between pb-3 border-b border-white/20">
                  <span className="text-[10px] uppercase font-mono font-bold tracking-widest text-amber-100 flex items-center gap-1.5">
                    <Award size={12} /> BOUTIQUE HOTEL PASS
                  </span>
                  <span className="text-[10px] font-mono px-2 py-0.5 rounded-full bg-black/20 text-white">
                    TN-STAY #02
                  </span>
                </div>

                <div className="mt-5 space-y-2">
                  <span className="text-[10px] uppercase text-amber-100 font-poppins">Luxury Accommodations</span>
                  <h4 className="text-base sm:text-lg font-bold font-playfair text-white">4★ & Heritage Havelis</h4>
                  <p className="text-xs text-amber-50/90 font-poppins">Handpicked tea estate retreats, desert domes & royal suites.</p>
                </div>

                {/* Rating Badge */}
                <div className="mt-8 p-3 rounded-2xl bg-black/20 border border-white/20 flex items-center gap-3">
                  <div className="w-9 h-9 rounded-xl bg-white/20 text-white flex items-center justify-center shrink-0">
                    <Star size={18} className="fill-white" />
                  </div>
                  <div>
                    <span className="text-xs font-bold text-white block">4.95 Rating</span>
                    <span className="text-[10px] text-amber-100">Complimentary Breakfast</span>
                  </div>
                </div>

                <div className="absolute bottom-6 left-6 right-6 pt-3 border-t border-white/20 flex items-center justify-between text-[11px] text-amber-100 font-poppins">
                  <span>Room Voucher</span>
                  <span className="font-mono text-white font-bold">CONFIRMED</span>
                </div>
              </div>

              {/* ================= CARD 3: FRONT CENTER ACTIVE MAIN CARD (0deg) ================= */}
              <div 
                className="relative z-30 w-full max-w-[325px] sm:max-w-[350px] min-h-[520px] sm:min-h-[550px] rounded-[44px] overflow-hidden p-6 sm:p-7 shadow-[0_30px_70px_rgba(234,88,12,0.22)] border-2 border-orange-500 bg-gradient-to-b from-[#fefbf6] via-[#fffdf9] to-[#faf5ee] dark:from-[#181614] dark:via-[#1c1917] dark:to-[#141210] flex flex-col justify-between group transition-all duration-500 hover:-translate-y-2.5 hover:shadow-[0_35px_80px_rgba(234,88,12,0.32)]"
              >
                
                {/* Background Organic Wavy Accents */}
                <div 
                  className="absolute -top-12 -left-12 w-44 h-44 bg-gradient-to-br from-orange-400/25 to-amber-300/20 dark:from-orange-500/15 dark:to-transparent pointer-events-none transition-transform duration-700 group-hover:scale-110"
                  style={{ borderRadius: "38% 62% 63% 37% / 41% 44% 56% 59%" }}
                />

                <div 
                  className="absolute -bottom-14 -right-14 w-48 h-48 bg-gradient-to-tl from-amber-400/25 to-orange-300/15 dark:from-amber-600/15 dark:to-transparent pointer-events-none transition-transform duration-700 group-hover:scale-110"
                  style={{ borderRadius: "55% 45% 30% 70% / 60% 30% 70% 40%" }}
                />

                {/* Dotted Flight Arc 1 (Top Right) */}
                <div className="absolute top-8 right-6 w-24 h-24 pointer-events-none opacity-40 dark:opacity-60">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <path
                      d="M10 80 Q 70 10 90 60"
                      stroke="#ea580c"
                      strokeWidth="2.5"
                      strokeDasharray="5 5"
                    />
                    <circle cx="90" cy="60" r="3.5" fill="#ea580c" />
                  </svg>
                </div>

                {/* Dotted Flight Arc 2 (Bottom Left) */}
                <div className="absolute bottom-16 left-4 w-28 h-28 pointer-events-none opacity-40 dark:opacity-60">
                  <svg viewBox="0 0 100 100" fill="none" className="w-full h-full">
                    <path
                      d="M10 20 Q 40 90 90 70"
                      stroke="#d97706"
                      strokeWidth="2.5"
                      strokeDasharray="5 5"
                    />
                    <circle cx="10" cy="20" r="3.5" fill="#d97706" />
                  </svg>
                </div>

                {/* Floating Clouds */}
                <div className="absolute top-10 right-8 text-amber-500/40 dark:text-stone-600 pointer-events-none">
                  <Cloud size={26} strokeWidth={1.8} />
                </div>
                <div className="absolute top-36 left-4 text-orange-500/35 dark:text-stone-600 pointer-events-none">
                  <Cloud size={22} strokeWidth={1.8} />
                </div>

                {/* ================= TOP SECTION: WIREFRAME GLOBE & PIN ================= */}
                <div className="relative z-10 flex flex-col items-center pt-1">
                  
                  <div className="relative flex items-center justify-center mb-2.5">
                    <div className="absolute -top-3.5 text-orange-600 dark:text-orange-400 animate-bounce">
                      <MapPin size={20} className="fill-orange-500/20" />
                    </div>

                    <div className="w-20 h-20 rounded-full border-2 border-stone-800 dark:border-stone-200 flex items-center justify-center p-1 bg-white/80 dark:bg-stone-900/80 shadow-md group-hover:scale-105 transition-transform duration-500">
                      <div className="w-full h-full rounded-full border border-dashed border-stone-500/60 flex items-center justify-center relative overflow-hidden">
                        <svg viewBox="0 0 100 100" fill="none" className="w-14 h-14 text-stone-700 dark:text-stone-300">
                          <path
                            d="M30 20 C45 25, 40 45, 60 40 C75 35, 80 55, 65 75 C50 85, 30 75, 20 60 C15 45, 20 30, 30 20 Z"
                            stroke="currentColor"
                            strokeWidth="2"
                            fill="currentColor"
                            className="opacity-20"
                          />
                          <ellipse cx="50" cy="50" rx="42" ry="20" stroke="currentColor" strokeWidth="1.5" strokeDasharray="3 3" />
                          <line x1="50" y1="5" x2="50" y2="95" stroke="currentColor" strokeWidth="1.5" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  <h3 className="text-xl sm:text-2xl font-black tracking-tight text-stone-900 dark:text-white uppercase font-poppins text-center">
                    TRAVEL <span className="text-orange-600 dark:text-orange-400">AGENCY</span>
                  </h3>

                  <span className="text-[10px] font-bold uppercase tracking-[0.2em] text-stone-500 dark:text-stone-400 font-poppins">
                    TRIPNOVA VERIFIED DESK
                  </span>
                </div>

                {/* ================= MIDDLE SECTION: VERIFIED CONTACTS ================= */}
                <div className="relative z-10 text-center my-3 py-3 px-3.5 rounded-3xl bg-white/80 dark:bg-stone-900/80 border border-stone-200/90 dark:border-stone-800 backdrop-blur-md shadow-sm space-y-1.5">
                  <p className="text-xs font-bold text-stone-900 dark:text-stone-100 font-mono flex items-center justify-center gap-1.5">
                    <Phone size={12} className="text-orange-600 dark:text-orange-400" />
                    <span>+91 98765 43210</span>
                  </p>
                  <p className="text-[10px] text-stone-600 dark:text-stone-300 font-poppins flex items-center justify-center gap-1.5">
                    <Mail size={11} className="text-orange-600 dark:text-orange-400" />
                    <span>concierge@tripnova.com</span>
                  </p>
                  <p className="text-[10px] text-orange-600 dark:text-orange-400 font-semibold font-poppins flex items-center justify-center gap-1.5">
                    <Globe size={11} />
                    <span>www.tripnova.in</span>
                  </p>
                </div>

                {/* ================= BOTTOM SECTION: LUGGAGE & BOOK BUTTON ================= */}
                <div className="relative z-10 flex flex-col items-center">
                  
                  <div className="flex items-center justify-center gap-2 mb-2.5 text-stone-400 dark:text-stone-500">
                    <Cloud size={18} />
                    <div className="w-7 h-7 rounded-lg bg-gradient-to-br from-orange-500 to-amber-600 text-white flex items-center justify-center shadow-md shadow-orange-500/30 group-hover:rotate-6 transition-transform">
                      <Luggage size={14} />
                    </div>
                    <Cloud size={18} />
                  </div>

                  <button
                    onClick={() => router.push("/packages")}
                    className="w-full py-2.5 px-4 rounded-xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-500 hover:to-amber-500 active:scale-95 text-white font-bold text-xs uppercase tracking-wider font-poppins shadow-lg shadow-orange-500/25 transition-all flex items-center justify-center gap-2 cursor-pointer"
                  >
                    <span>Explore 25+ Packages</span>
                    <ArrowRight size={13} />
                  </button>

                  <p className="text-[9px] text-stone-400 font-poppins text-center mt-1.5">
                    Instant Boarding Voucher • 100% Refundable
                  </p>
                </div>

              </div>

            </div>

          </FadeUp>

        </div>

      </div>
    </section>
  );
}
