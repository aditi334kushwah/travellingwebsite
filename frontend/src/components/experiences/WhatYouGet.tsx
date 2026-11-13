'use client';
import { Globe, Utensils, Map, Hotel, ShieldCheck, Sparkles, Headphones, Award } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const benefits = [
  {
    icon: Globe,
    title: "Deep Cultural Immersion",
    desc: "Behind-the-scenes access to living temples, tribal artisans, and sacred ceremonies rarely open to mass tourism.",
    metric: "100% Authentic",
  },
  {
    icon: Utensils,
    title: "Regional Gastronomy",
    desc: "Savor heritage royal recipes, authentic street culinary walks, and organic farm-to-table dining curated by local chefs.",
    metric: "Curated Meals",
  },
  {
    icon: Map,
    title: "Certified Storytellers",
    desc: "Licensed native scholars and adventure guides with deep local knowledge, first-aid safety, and unmatched hospitality.",
    metric: "Verified Experts",
  },
  {
    icon: Hotel,
    title: "Boutique Stays & Camps",
    desc: "Handpicked luxury heritage havelis, eco-luxury treehouses, glamping domes, and authentic wooden backwater houseboats.",
    metric: "Premium Comfort",
  },
  {
    icon: ShieldCheck,
    title: "Full Safety Protocols",
    desc: "Sanitized transport, high-altitude oxygen monitors, certified safety harnesses, and round-the-clock emergency assistance.",
    metric: "Zero Compromise",
  },
  {
    icon: Headphones,
    title: "24/7 Dedicated Concierge",
    desc: "Your personal trip manager coordinates airport transfers, itinerary changes, and real-time updates via WhatsApp.",
    metric: "Always Connected",
  },
];

export default function WhatYouGet() {
  return (
    <section className="relative w-full rounded-3xl overflow-hidden bg-gradient-to-br from-stone-900 via-[#131110] to-stone-950 text-white p-6 sm:p-10 md:p-14 border border-stone-800/80 shadow-2xl">
      {/* Ambient background glow orbs */}
      <div className="absolute top-0 right-0 w-80 h-80 bg-orange-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

      {/* Header */}
      <div className="relative z-10 text-center max-w-2xl mx-auto mb-10 sm:mb-12">
        <FadeUp>
          <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/15 text-orange-400 border border-orange-500/30 mb-3">
            <Sparkles size={13} className="text-orange-400" /> The TripNova Standard
          </span>
        </FadeUp>
        <FadeUp delay={0.1}>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold font-playfair text-white">
            What Sets Every TripNova Experience Apart
          </h2>
        </FadeUp>
        <FadeUp delay={0.2}>
          <p className="mt-3 text-xs sm:text-sm text-stone-300 font-poppins font-light leading-relaxed">
            We don't just book tickets. We craft transformative, stress-free journeys backed by end-to-end luxury hospitality.
          </p>
        </FadeUp>
      </div>

      {/* 6-Card Grid */}
      <div className="relative z-10 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-5 sm:gap-6">
        {benefits.map((item, i) => {
          const Icon = item.icon;
          return (
            <FadeUp key={i} delay={i * 0.08}>
              <div className="group relative bg-white/[0.04] hover:bg-white/[0.08] backdrop-blur-md rounded-2xl p-5 sm:p-6 border border-white/10 hover:border-orange-500/40 transition-all duration-300 flex flex-col justify-between h-full hover:-translate-y-1">
                
                <div>
                  {/* Icon badge + metric tag */}
                  <div className="flex items-center justify-between mb-4">
                    <div className="w-12 h-12 rounded-xl bg-gradient-to-br from-orange-500/20 to-amber-500/20 border border-orange-500/30 flex items-center justify-center text-orange-400 group-hover:scale-110 group-hover:text-orange-300 transition-all duration-300 shadow-inner">
                      <Icon className="w-6 h-6" />
                    </div>
                    <span className="text-[10px] font-semibold uppercase tracking-wider px-2.5 py-0.5 rounded-full bg-orange-500/10 text-orange-300 border border-orange-500/20 font-poppins">
                      {item.metric}
                    </span>
                  </div>

                  <h3 className="text-lg font-bold font-playfair text-white group-hover:text-orange-300 transition-colors">
                    {item.title}
                  </h3>
                  <p className="mt-2 text-xs sm:text-sm text-stone-300/90 font-poppins font-light leading-relaxed">
                    {item.desc}
                  </p>
                </div>

                <div className="mt-4 pt-3 border-t border-white/10 flex items-center gap-1.5 text-[11px] text-amber-400 font-poppins">
                  <Award size={13} />
                  <span>Guaranteed Quality Standard</span>
                </div>

              </div>
            </FadeUp>
          );
        })}
      </div>
    </section>
  );
}
