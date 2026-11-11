import Link from "next/link";
import { ArrowRight, Compass, Sparkles } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const LastTestimonial = () => {
  return (
    <section className="py-20 sm:py-24 bg-transparent">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="relative rounded-[36px] sm:rounded-[44px] overflow-hidden bg-gradient-to-br from-stone-900 via-gray-900 to-black text-white p-8 sm:p-12 lg:p-16 shadow-2xl border border-white/10">

          {/* Ambient Glow Circles */}
          <div className="absolute -top-24 -right-24 w-80 h-80 bg-orange-500/20 rounded-full blur-3xl pointer-events-none" />
          <div className="absolute -bottom-24 -left-24 w-80 h-80 bg-amber-500/15 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between gap-10">

            <FadeUp className="lg:w-3/5 text-center lg:text-left space-y-4">
              <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-500/20 border border-orange-500/40 text-orange-300 text-xs font-bold uppercase tracking-wider">
                <Sparkles size={13} /> Your Journey Begins Here
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold tracking-tight text-white leading-[1.15]">
                Your Next Life-Changing Journey Awaits.
              </h2>

              <p className="text-sm sm:text-base md:text-lg text-stone-300 font-poppins max-w-xl">
                Leave the planning, itinerary logistics, and booking stress to us. Step into curated luxury and handcrafted memories.
              </p>
            </FadeUp>

            <FadeUp delay={0.15} className="flex flex-col sm:flex-row items-center gap-4 shrink-0 w-full sm:w-auto">
              <Link
                href="/booking"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-8 py-4 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-2xl font-bold text-sm shadow-xl shadow-orange-500/25 transition hover:scale-105 active:scale-95 cursor-pointer"
              >
                <span>Book Your Trip Now</span>
                <ArrowRight size={16} />
              </Link>

              <Link
                href="/packages"
                className="w-full sm:w-auto inline-flex items-center justify-center gap-2 px-7 py-4 rounded-2xl bg-white/10 hover:bg-white/20 backdrop-blur-md border border-white/20 text-white font-semibold text-sm transition hover:scale-105 cursor-pointer"
              >
                <Compass size={16} />
                <span>Explore Packages</span>
              </Link>
            </FadeUp>

          </div>

        </div>
      </div>
    </section>
  );
};

export default LastTestimonial;
