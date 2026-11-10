"use client";

import { useState } from "react";
import { Calendar, ChevronDown, ChevronUp, Utensils, Compass } from "lucide-react";
import { motion, AnimatePresence } from "motion/react";
import FadeUp from "@/components/ui/FadeUp";

export type ItineraryDay = {
  id?: number;
  day_number: number;
  title: string;
  description: string;
  activities?: string;
  meals_included?: string;
};

interface PackageItinerarySectionProps {
  itineraries?: ItineraryDay[];
  durationDays?: number;
  durationNights?: number;
}

export default function PackageItinerarySection({
  itineraries = [],
  durationDays = 3,
  durationNights = 2,
}: PackageItinerarySectionProps) {
  const [openDay, setOpenDay] = useState<number | null>(1);

  // If backend hasn't added itineraries yet, provide default structured fallback based on duration
  const displayItineraries: ItineraryDay[] =
    itineraries && itineraries.length > 0
      ? itineraries
      : Array.from({ length: durationDays }, (_, i) => ({
          day_number: i + 1,
          title:
            i === 0
              ? "Arrival & Welcome"
              : i === durationDays - 1
              ? "Souvenir Shopping & Departure"
              : `Day ${i + 1} Exploration & Sightseeing`,
          description:
            i === 0
              ? "Arrival at the destination, check-in to your resort/hotel, evening welcome drink and leisure stroll."
              : i === durationDays - 1
              ? "Enjoy breakfast at hotel, pack your bags and transfer to airport/station with unforgettable memories."
              : "Full day sightseeing of top attractions, guided nature walk and authentic local dinner experience.",
          activities:
            i === 0
              ? "Hotel Check-in, Welcome Drink, Sunset Walk"
              : i === durationDays - 1
              ? "Breakfast, Check-out, Airport Transfer"
              : "Guided Sightseeing, Photography, Cultural Experience",
          meals_included: i === 0 ? "Dinner" : i === durationDays - 1 ? "Breakfast" : "Breakfast & Dinner",
        }));

  return (
    <div className="mt-12 sm:mt-16">
      <FadeUp>
        <div className="flex flex-col sm:flex-row sm:items-center justify-between pb-4 border-b border-gray-200 dark:border-gray-700">
          <div>
            <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/50 px-3 py-1 rounded-full">
              Day-by-Day Plan
            </span>
            <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-800 dark:text-white mt-2">
              Trip Itinerary
            </h2>
          </div>
          <p className="text-sm text-gray-500 dark:text-gray-400 mt-2 sm:mt-0">
            {durationDays} Days / {durationNights} Nights Detailed Schedule
          </p>
        </div>
      </FadeUp>

      <div className="mt-8 relative border-l-2 border-orange-300 dark:border-orange-500/40 ml-4 sm:ml-6 space-y-6">
        {displayItineraries.map((item) => {
          const isOpen = openDay === item.day_number;
          return (
            <div key={item.day_number} className="relative pl-6 sm:pl-8">
              {/* Timeline circle badge */}
              <div
                onClick={() => setOpenDay(isOpen ? null : item.day_number)}
                className={`absolute -left-[17px] top-4 w-8 h-8 rounded-full flex items-center justify-center text-xs font-bold transition-all duration-300 cursor-pointer shadow-md ${
                  isOpen
                    ? "bg-orange-500 text-white ring-4 ring-orange-200 dark:ring-orange-900/60 scale-110"
                    : "bg-white dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-2 border-orange-400"
                }`}
              >
                {item.day_number}
              </div>

              {/* Accordion Card */}
              <div
                className={`rounded-2xl transition-all duration-300 border ${
                  isOpen
                    ? "bg-white dark:bg-gray-800/90 shadow-xl border-orange-200 dark:border-orange-500/30"
                    : "bg-slate-50/80 dark:bg-gray-800/40 hover:bg-white dark:hover:bg-gray-800 border-gray-200 dark:border-gray-700"
                }`}
              >
                <button
                  type="button"
                  onClick={() => setOpenDay(isOpen ? null : item.day_number)}
                  className="w-full text-left p-5 sm:p-6 flex items-center justify-between gap-4"
                >
                  <div>
                    <div className="flex items-center gap-2 text-xs font-semibold text-orange-600 dark:text-orange-400 uppercase tracking-wide">
                      <Calendar size={14} /> Day {item.day_number}
                    </div>
                    <h3 className="text-lg sm:text-xl font-bold font-playfair text-gray-800 dark:text-white mt-1">
                      {item.title}
                    </h3>
                  </div>

                  <div className="text-gray-400 hover:text-orange-500 transition flex-shrink-0">
                    {isOpen ? <ChevronUp size={22} /> : <ChevronDown size={22} />}
                  </div>
                </button>

                <AnimatePresence>
                  {isOpen && (
                    <motion.div
                      initial={{ opacity: 0, height: 0 }}
                      animate={{ opacity: 1, height: "auto" }}
                      exit={{ opacity: 0, height: 0 }}
                      transition={{ duration: 0.3 }}
                      className="overflow-hidden px-5 sm:px-6 pb-6 pt-0"
                    >
                      <p className="text-gray-600 dark:text-gray-300 leading-relaxed font-poppins text-sm sm:text-base border-t border-gray-100 dark:border-gray-700/60 pt-4">
                        {item.description}
                      </p>

                      <div className="mt-4 flex flex-wrap gap-4 pt-3">
                        {item.activities && (
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 bg-orange-50 dark:bg-orange-950/30 px-3 py-1.5 rounded-lg border border-orange-200 dark:border-orange-900/40">
                            <Compass size={15} className="text-orange-500" />
                            <span><strong>Highlights:</strong> {item.activities}</span>
                          </div>
                        )}

                        {item.meals_included && (
                          <div className="flex items-center gap-2 text-xs sm:text-sm text-gray-600 dark:text-gray-300 bg-emerald-50 dark:bg-emerald-950/30 px-3 py-1.5 rounded-lg border border-emerald-200 dark:border-emerald-900/40">
                            <Utensils size={15} className="text-emerald-600 dark:text-emerald-400" />
                            <span><strong>Meals:</strong> {item.meals_included}</span>
                          </div>
                        )}
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </div>
            </div>
          );
        })}
      </div>
    </div>
  );
}

