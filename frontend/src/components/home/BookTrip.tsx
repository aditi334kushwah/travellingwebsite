'use client'
import { ArrowRight } from "lucide-react";
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
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#fcfbf9] via-stone-50 to-[#fcfbf9] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <div className="text-center max-w-2xl mx-auto mb-14 sm:mb-16">
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-900/50 text-xs font-bold uppercase tracking-wider">
              Seamless Process
            </span>
          </FadeUp>
          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold mt-4 text-gray-900 dark:text-white tracking-tight">
              Book Your Tour in 4 Easy Steps
            </h2>
          </FadeUp>
          <FadeUp delay={0.18}>
            <p className="mt-3 text-sm sm:text-base text-gray-600 dark:text-gray-400 font-poppins">
              Zero complicated paperwork. Plan, reserve, and download your travel slip in under two minutes.
            </p>
          </FadeUp>
        </div>

        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 items-center">

          {/* Steps Column */}
          <div className="space-y-4 sm:space-y-5">
            {steps.map((step, index) => (
              <FadeUp key={index} delay={index * 0.08}>
                <div className="flex items-start gap-4 p-5 sm:p-6 bg-white dark:bg-gray-900 rounded-3xl border border-stone-200/80 dark:border-gray-800 shadow-[0_4px_20px_rgb(0,0,0,0.03)] hover:border-orange-300 hover:shadow-[0_10px_30px_rgb(234,88,12,0.1)] transition-all duration-300 group">
                  <div className="w-10 h-10 sm:w-11 sm:h-11 rounded-2xl bg-gradient-to-br from-orange-500 to-amber-600 text-white font-bold font-mono text-sm sm:text-base flex items-center justify-center shadow-md shadow-orange-500/20 shrink-0 group-hover:scale-105 transition-transform">
                    0{index + 1}
                  </div>
                  <div className="flex-1">
                    <h3 className="font-playfair font-bold text-lg sm:text-xl text-gray-900 dark:text-white group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                      {step.title}
                    </h3>
                    <p className="text-xs sm:text-sm text-gray-600 dark:text-gray-400 mt-1 font-poppins leading-relaxed">
                      {step.desc}
                    </p>
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Video Preview Card */}
          <FadeUp delay={0.2}>
            <div className="relative w-full max-w-md mx-auto aspect-[4/5] rounded-[36px] overflow-hidden shadow-2xl border-4 border-white dark:border-gray-800 group">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover transition-transform duration-700 group-hover:scale-105">
                <source src="/video/hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
              <div className="absolute bottom-6 left-6 right-6 text-white">
                <span className="text-[10px] font-bold uppercase tracking-wider bg-orange-500 px-2.5 py-1 rounded-full font-mono">
                  LIVE EXPEDITION
                </span>
                <h4 className="text-xl sm:text-2xl font-bold font-playfair mt-2">
                  The Great Himalayan Pass
                </h4>
                <p className="text-xs text-stone-200 mt-1 font-poppins">
                  Guided alpine trekking & boutique stays across Ladakh & Spiti.
                </p>
                <div className="mt-4 pt-3 border-t border-white/20 flex items-center justify-between">
                  <div>
                    <p className="text-xs font-medium text-white">Aditi Kushwah</p>
                    <p className="text-[10px] text-stone-300">Verified Explorer</p>
                  </div>
                  <button
                    onClick={() => router.push("/booking")}
                    className="bg-orange-500 hover:bg-orange-600 active:scale-95 text-white px-3.5 py-1.5 rounded-xl transition text-xs font-bold cursor-pointer"
                  >
                    Book Tour
                  </button>
                </div>
              </div>
            </div>
          </FadeUp>

        </div>

      </div>
    </section>
  );
}
