"use client";

import { Search, SlidersHorizontal, Mountain, Church, Landmark, TreePine, Building2, Waves, Leaf, PawPrint, Clock, IndianRupee, RotateCcw, Check, Sparkles } from "lucide-react";

const DURATION_RANGES = [
  { label: "1-3 Days", min: "1", max: "3" },
  { label: "4-7 Days", min: "4", max: "7" },
  { label: "8-14 Days", min: "8", max: "14" },
  { label: "15+ Days", min: "15", max: "" },
];

const BUDGET_RANGES = [
  { label: "₹1,000 - 3,000", min: "1000", max: "3000" },
  { label: "₹3,000 - 5,000", min: "3000", max: "5000" },
  { label: "₹5,000+", min: "5000", max: "" },
];

const CATEGORIES = [
  { value: "adventure", label: "Adventure", icon: Mountain },
  { value: "spiritual", label: "Spiritual", icon: Church },
  { value: "cultural", label: "Cultural", icon: Landmark },
  { value: "nature", label: "Nature", icon: TreePine },
  { value: "heritage", label: "Heritage", icon: Building2 },
  { value: "relaxation", label: "Relaxation", icon: Leaf },
  { value: "wildlife", label: "Wildlife", icon: PawPrint },
  { value: "beach", label: "Beach", icon: Waves },
];

const ORDERING = [
  { value: "-created_at", label: "Newest Circuits" },
  { value: "price", label: "Price: Low to High" },
  { value: "-price", label: "Price: High to Low" },
  { value: "duration_days", label: "Duration: Short First" },
  { value: "-duration_days", label: "Duration: Long First" },
];

type Filters = {
  search: string;
  category: string;
  location: string;
  min_price: string;
  max_price: string;
  min_days: string;
  max_days: string;
  is_popular: boolean;
  ordering: string;
};

type Props = {
  filters: Filters;
  setFilters: (f: Filters) => void;
  categoryCounts: Record<string, number>;
  durationCounts: Record<string, number>;
  budgetCounts: Record<string, number>;
  onApply: () => void;
  onClear: () => void;
};

export default function PackageFilterSidebar({ filters, setFilters, categoryCounts, durationCounts, budgetCounts, onApply, onClear }: Props) {

  const inputClass = "w-full border border-stone-200 dark:border-gray-700 p-2.5 rounded-xl text-xs sm:text-sm focus:outline-none focus:ring-2 focus:ring-orange-500 bg-stone-50/60 dark:bg-gray-800 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500 font-poppins transition";
  const labelClass = "text-xs uppercase font-bold tracking-wider text-gray-500 dark:text-gray-400 mb-2.5 font-poppins flex items-center gap-1.5";

  return (
    <aside className="bg-white dark:bg-gray-900 p-6 rounded-3xl border border-stone-200/80 dark:border-gray-800 shadow-[0_4px_25px_rgb(0,0,0,0.04)] space-y-6 h-fit lg:sticky lg:top-24">

      <div className="flex items-center justify-between pb-3 border-b border-stone-100 dark:border-gray-800">
        <h2 className="text-base font-bold flex items-center gap-2 font-playfair text-gray-900 dark:text-white">
          <SlidersHorizontal size={17} className="text-orange-500" /> Refine Tours
        </h2>
        <button
          onClick={onClear}
          title="Reset All Filters"
          className="text-[11px] font-semibold text-orange-600 dark:text-orange-400 hover:underline flex items-center gap-1 cursor-pointer"
        >
          <RotateCcw size={11} /> Reset
        </button>
      </div>

      {/* Search Input */}
      <div>
        <label className={labelClass}>Keyword / Place</label>
        <div className="relative">
          <Search size={14} className="absolute left-3.5 top-3.5 text-gray-400" />
          <input
            placeholder="e.g. Auli, Goa, Temple..."
            className={`${inputClass} pl-9`}
            value={filters.search}
            onChange={(e) => setFilters({ ...filters, search: e.target.value })}
            onKeyDown={(e) => e.key === "Enter" && onApply()}
          />
        </div>
      </div>

      {/* Travel Style Grid */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className={labelClass}>
            <Sparkles size={12} className="text-orange-500" /> Travel Style
          </label>
          {filters.category && (
            <button onClick={() => setFilters({ ...filters, category: "" })} className="text-[10px] text-orange-500 hover:underline">
              Clear
            </button>
          )}
        </div>
        <div className="grid grid-cols-2 gap-2">
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            const count = categoryCounts[c.value] ?? 0;
            const isActive = filters.category === c.value;
            return (
              <button
                key={c.value}
                type="button"
                onClick={() => setFilters({ ...filters, category: isActive ? "" : c.value })}
                className={`flex items-center justify-between p-2.5 rounded-xl border text-xs font-semibold transition-all duration-200 cursor-pointer text-left
                  ${isActive
                    ? "bg-gradient-to-r from-orange-500 to-amber-600 text-white border-transparent shadow-md shadow-orange-500/20 scale-[1.02]"
                    : "bg-stone-50/70 dark:bg-gray-800/80 text-gray-700 dark:text-gray-300 border-stone-200/80 dark:border-gray-700 hover:border-orange-400 hover:bg-orange-50/50 dark:hover:bg-orange-950/20"
                  }`}
              >
                <div className="flex items-center gap-1.5 truncate">
                  <Icon size={14} className={isActive ? "text-white" : "text-orange-500"} />
                  <span className="truncate">{c.label}</span>
                </div>
                {count > 0 && (
                  <span className={`text-[10px] px-1.5 py-0.2 rounded-full font-bold font-mono ${isActive ? "bg-white/20 text-white" : "bg-stone-200 dark:bg-gray-700 text-gray-500 dark:text-gray-400"}`}>
                    {count}
                  </span>
                )}
              </button>
            );
          })}
        </div>
      </div>

      {/* Location Filter */}
      <div>
        <label className={labelClass}>State / Region</label>
        <input
          placeholder="e.g. Uttarakhand, Kerala..."
          className={inputClass}
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
          onKeyDown={(e) => e.key === "Enter" && onApply()}
        />
      </div>

      {/* Duration Range */}
      <div>
        <div className="flex items-center justify-between mb-2">
          <label className={labelClass}>
            <Clock size={12} className="text-orange-500" /> Trip Duration
          </label>
          {(filters.min_days || filters.max_days) && (
            <button onClick={() => setFilters({ ...filters, min_days: "", max_days: "" })} className="text-[10px] text-orange-500 hover:underline">
              Clear
            </button>
          )}
        </div>
        <div className="space-y-1.5">
          {DURATION_RANGES.map((d) => {
            const isActive = filters.min_days === d.min && filters.max_days === d.max;
            return (
              <button
                key={d.label}
                type="button"
                onClick={() => {
                  if (isActive) {
                    setFilters({ ...filters, min_days: "", max_days: "" });
                  } else {
                    setFilters({ ...filters, min_days: d.min, max_days: d.max });
                  }
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl border text-xs font-medium transition-all duration-200 cursor-pointer
                  ${isActive
                    ? "bg-orange-500 text-white border-transparent shadow-sm"
                    : "bg-stone-50/70 dark:bg-gray-800 text-gray-700 dark:text-gray-300 border-stone-200 dark:border-gray-700 hover:border-orange-300"
                  }`}
              >
                <span>{d.label}</span>
                {isActive && <Check size={13} className="text-white" />}
              </button>
            );
          })}
        </div>
      </div>

      {/* Sort Selector */}
      <div>
        <label className={labelClass}>Sort Hierarchy</label>
        <select
          className={`${inputClass} cursor-pointer`}
          value={filters.ordering}
          onChange={(e) => setFilters({ ...filters, ordering: e.target.value })}
        >
          {ORDERING.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>

      {/* Action Buttons */}
      <div className="pt-2 space-y-2">
        <button
          type="button"
          onClick={onApply}
          className="w-full bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white py-3 rounded-xl text-xs font-bold uppercase tracking-wider shadow-lg shadow-orange-500/25 transition hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
        >
          Apply Filters
        </button>

        <button
          type="button"
          onClick={onClear}
          className="w-full border border-stone-200 dark:border-gray-700 text-gray-600 dark:text-gray-300 py-2.5 rounded-xl text-xs font-semibold hover:bg-stone-50 dark:hover:bg-gray-800 transition cursor-pointer"
        >
          Clear All
        </button>
      </div>

    </aside>
  );
}
