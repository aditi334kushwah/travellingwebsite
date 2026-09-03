'use client'
import { ArrowRight } from "lucide-react";
import { useRouter } from "next/navigation";
import FadeUp from "@/components/ui/FadeUp";

export default function HowItWorks() {
  const steps = [
    "Choose your destination and package",
    "Customize your itinerary",
    "Confirm booking & make payment",
    "Enjoy your hassle-free journey",
  ];

  const router = useRouter();

  return (
    <section className="py-12 sm:py-16 px-4 sm:px-8 md:px-16 bg-gray-100 dark:bg-gray-900">

      <div className="text-center mb-10 sm:mb-12">
        <FadeUp>
          <span className="bg-[#f7dbc2] dark:bg-orange-900/40 text-[#d17016] dark:text-orange-300 rounded-full border text-sm sm:text-base md:text-xl font-poppins border-orange-500 px-4 sm:px-6 py-1.5 sm:py-2">
            How it works
          </span>
        </FadeUp>
        <FadeUp delay={0.15}>
          <h1 className="text-2xl sm:text-3xl md:text-5xl lg:text-6xl font-playfair my-3 sm:my-4 text-center text-gray-900 dark:text-white">
            Book your tour in 4 easy steps
          </h1>
        </FadeUp>
      </div>

      <div className="grid md:grid-cols-2 gap-8 md:gap-6 items-center max-w-5xl mx-auto">

        {/* Steps */}
        <div className="relative">
          <div className="absolute left-5 top-5 bottom-5 w-[2px] bg-gradient-to-b from-orange-400 via-orange-300 to-orange-100 -z-0" />
          <div className="space-y-6">
            {steps.map((step, index) => (
              <FadeUp key={index} delay={index * 0.12}>
                <div className="relative flex items-center gap-4">
                  <div className="relative z-10 w-10 h-10 flex-shrink-0 flex items-center justify-center rounded-full bg-orange-400 text-white font-semibold shadow-md ring-4 ring-gray-100 dark:ring-gray-900">
                    {index + 1}
                  </div>
                  <div className="flex-1 bg-white dark:bg-gray-800 rounded-2xl p-4 sm:p-5 shadow-md flex items-center justify-between hover:shadow-lg hover:-translate-y-0.5 transition-all duration-300">
                    <p className="text-gray-700 dark:text-gray-200 text-sm sm:text-base">{step}</p>
                    <ArrowRight className="text-gray-400 flex-shrink-0 ml-3" size={18} />
                  </div>
                </div>
              </FadeUp>
            ))}
          </div>
        </div>

        {/* Video Card */}
        <FadeUp delay={0.2}>
          <div className="flex justify-center mt-4 sm:mt-0">
            <div className="relative w-[260px] sm:w-[300px] h-[400px] sm:h-[450px] rounded-3xl shadow-xl overflow-hidden flex flex-col justify-end">
              <video autoPlay loop muted playsInline className="absolute inset-0 w-full h-full object-cover">
                <source src="/video/hero.mp4" type="video/mp4" />
              </video>
              <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-black/10 to-transparent" />
              <div className="relative z-10 m-4 bg-white/95 dark:bg-gray-800/95 backdrop-blur rounded-2xl p-4 flex items-center justify-between">
                <div>
                  <p className="text-sm font-medium text-gray-800 dark:text-white">Aditi Kushwah</p>
                  <p className="text-xs text-gray-500 dark:text-gray-400">Traveler</p>
                </div>
                <button onClick={() => router.push("/booking")} className="bg-orange-400 text-white px-4 py-2 rounded-lg hover:bg-orange-500 transition-colors text-sm">
                  Book Your Trip
                </button>
              </div>
            </div>
          </div>
        </FadeUp>

      </div>
    </section>
  );
}
