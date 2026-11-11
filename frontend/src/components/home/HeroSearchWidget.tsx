"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";
import { MapPin, Calendar, Compass, Search } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

const POPULAR_DESTINATIONS = [
  "Agra",
  "Goa",
  "Auli",
  "Coorg",
  "Hampi",
  "Ziro Valley",
];

const CATEGORIES = [
  { label: "All Types", value: "" },
  { label: "Adventure", value: "adventure" },
  { label: "Spiritual", value: "spiritual" },
  { label: "Heritage", value: "heritage" },
  { label: "Nature", value: "nature" },
  { label: "Beach", value: "beach" },
];

export default function HeroSearchWidget() {
  const router = useRouter();
  const [destination, setDestination] = useState("");
  const [category, setCategory] = useState("");
  const [month, setMonth] = useState("");

  const handleSearch = (e: React.FormEvent) => {
    e.preventDefault();
    const params = new URLSearchParams();
    if (destination) params.append("search", destination);
    if (category) params.append("category", category);
    router.push(`/packages?${params.toString()}`);
  };

  return (
    <div className="relative -mt-16 z-30 max-w-5xl mx-auto px-4 sm:px-6">
      <FadeUp delay={0.2}>
        <div className="bg-white/95 dark:bg-gray-900/95 backdrop-blur-xl rounded-3xl shadow-2xl border border-white/40 dark:border-gray-800 p-4 sm:p-6">
          <form onSubmit={handleSearch} className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 items-center">
            
            {/* Destination Field */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/60 transition hover:border-orange-400">
              <MapPin className="text-orange-500 flex-shrink-0" size={20} />
              <div className="flex-1">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Where to?
                </label>
                <input
                  type="text"
                  placeholder="e.g. Agra, Goa, Auli"
                  value={destination}
                  onChange={(e) => setDestination(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-gray-800 dark:text-white placeholder-gray-400 focus:outline-none"
                />
              </div>
            </div>

            {/* Travel Category */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/60 transition hover:border-orange-400">
              <Compass className="text-orange-500 flex-shrink-0" size={20} />
              <div className="flex-1">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  Trip Type
                </label>
                <select
                  value={category}
                  onChange={(e) => setCategory(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-gray-800 dark:text-white focus:outline-none cursor-pointer"
                >
                  {CATEGORIES.map((c) => (
                    <option key={c.label} value={c.value} className="text-gray-800 dark:text-black">
                      {c.label}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* When / Month */}
            <div className="flex items-center gap-3 p-3.5 rounded-2xl bg-slate-50 dark:bg-gray-800/80 border border-gray-200/80 dark:border-gray-700/60 transition hover:border-orange-400">
              <Calendar className="text-orange-500 flex-shrink-0" size={20} />
              <div className="flex-1">
                <label className="block text-[11px] font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                  When?
                </label>
                <select
                  value={month}
                  onChange={(e) => setMonth(e.target.value)}
                  className="w-full bg-transparent text-sm font-semibold text-gray-800 dark:text-white focus:outline-none cursor-pointer"
                >
                  <option value="" className="text-gray-800 dark:text-black">Anytime</option>
                  {["October", "November", "December", "January", "February", "March", "Summer"].map((m) => (
                    <option key={m} value={m} className="text-gray-800 dark:text-black">
                      {m}
                    </option>
                  ))}
                </select>
              </div>
            </div>

            {/* Search Button */}
            <div>
              <button
                type="submit"
                className="w-full h-[54px] rounded-2xl bg-gradient-to-r from-orange-500 via-amber-500 to-orange-600 hover:from-orange-600 hover:to-orange-700 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
              >
                <Search size={18} />
                <span>Search Trips</span>
              </button>
            </div>
          </form>

          {/* Quick Trending Destinations Pills */}
          <div className="mt-4 pt-3 border-t border-gray-100 dark:border-gray-800 flex flex-wrap items-center gap-2 text-xs text-gray-500 dark:text-gray-400">
            <span className="font-semibold text-gray-700 dark:text-gray-300">🔥 Trending Destinations:</span>
            {POPULAR_DESTINATIONS.map((dest) => (
              <button
                key={dest}
                type="button"
                onClick={() => router.push(`/packages?search=${dest}`)}
                className="px-2.5 py-1 rounded-full bg-slate-100 hover:bg-orange-100 dark:bg-gray-800 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300 hover:text-orange-600 transition cursor-pointer"
              >
                {dest}
              </button>
            ))}
          </div>
        </div>
      </FadeUp>
    </div>
  );
}

