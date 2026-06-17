"use client";

import { Search, SlidersHorizontal, Mountain, Church, Landmark, TreePine, Building2, Waves, Leaf, PawPrint, Clock, IndianRupee } from "lucide-react";

const DURATION_RANGES = [
  { label: "1-3 Days", min: "1", max: "3" },
  { label: "4-7 Days", min: "4", max: "7" },
  { label: "8-14 Days", min: "8", max: "14" },
  { label: "15+ Days", min: "15", max: "" },
];

const BUDGET_RANGES = [
  { label: "₹100-300", min: "100", max: "300" },
  { label: "₹300-500", min: "300", max: "500" },
  { label: "₹500+", min: "500", max: "" },
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
  { value: "-created_at", label: "Newest First" },
  { value: "created_at", label: "Oldest First" },
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
  return (
    <aside className="bg-white p-5 rounded-2xl shadow-md shadow-gray-400  space-y-5 h-fit lg:sticky lg:top-24">
      <h2 className="text-lg font-bold flex items-center gap-2 text-gray-800">
        <SlidersHorizontal size={18} /> Filters
      </h2>

      {/* Search */}
      <div className="relative">
        <Search size={15} className="absolute left-3 top-3 text-gray-400" />
        <input
          placeholder="Search title, location..."
          className="w-full border pl-9 pr-3 py-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={filters.search}
          onChange={(e) => setFilters({ ...filters, search: e.target.value })}
          onKeyDown={(e) => e.key === "Enter" && onApply()}
        />
      </div>

      {/* Travel Style — 3 per row */}
      <div>
        <p className="text-lg text-gray-500 mb-2 font-medium">Travel Style</p>
        <div className="grid grid-cols-3 gap-2">
          {CATEGORIES.map((c) => {
            const Icon = c.icon;
            const count = categoryCounts[c.value] ?? 0;
            const isActive = filters.category === c.value;
            return (
              <button
                key={c.value}
                onClick={() => setFilters({ ...filters, category: isActive ? "" : c.value })}
                className={`flex flex-col items-center justify-center gap-1 p-2.5 rounded-xl border text-xs font-medium transition-all duration-200
                  ${isActive
                    ? "bg-orange-500 text-white border-orange-500 shadow-md scale-105"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:border-orange-400 hover:bg-orange-50"
                  }`}
              >
                <Icon size={18} strokeWidth={1.5} />
                <span className="text-[11px]">{c.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full font-bold ${isActive ? "bg-white/30 text-white" : "bg-gray-200 text-gray-500"
                  }`}>{count}</span>
              </button>
            );
          })}
        </div>
        {filters.category && (
          <button onClick={() => setFilters({ ...filters, category: "" })}
            className="mt-2 text-xs text-orange-500 hover:underline w-full text-center">
            Clear style
          </button>
        )}
      </div>

      {/* Location */}
      <div>
        <p className="text-lg  text-gray-500 mb-1 font-medium">Location</p>
        <input
          placeholder="e.g. Ladakh, Goa..."
          className="w-full border p-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={filters.location}
          onChange={(e) => setFilters({ ...filters, location: e.target.value })}
        />
      </div>

      {/* Budget Range */}
      <div>
        <p className="text-lg text-gray-500 mb-2 font-medium flex items-center gap-1">
          <IndianRupee size={12} /> Budget Range
        </p>
        <div className="space-y-2">
          {BUDGET_RANGES.map((b) => {
            const isActive = filters.min_price === b.min && filters.max_price === b.max;
            const count = budgetCounts[b.label] ?? 0;
            return (
              <button
                key={b.label}
                onClick={() => {
                  if (isActive) {
                    setFilters({ ...filters, min_price: "", max_price: "" });
                  } else {
                    setFilters({ ...filters, min_price: b.min, max_price: b.max });
                  }
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl border text-sm font-medium transition-all duration-200
                  ${isActive
                    ? "bg-orange-500 text-white border-orange-500 shadow-md"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:border-orange-400 hover:bg-orange-50"
                  }`}
              >
                <span>{b.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${isActive ? "bg-white/30 text-white" : "bg-gray-200 text-gray-500"
                  }`}>{count}</span>
              </button>
            );
          })}
        </div>
        {(filters.min_price || filters.max_price) && (
          <button onClick={() => setFilters({ ...filters, min_price: "", max_price: "" })}
            className="mt-2 text-xs text-orange-500 hover:underline w-full text-center">
            Clear budget
          </button>
        )}
      </div>

      {/* Trip Duration */}
      <div>
        <p className="text-lg text-gray-500 mb-2 font-medium flex items-center gap-1">
          <Clock size={12} /> Trip Duration
        </p>
        <div className="space-y-2">
          {DURATION_RANGES.map((d) => {
            const isActive = filters.min_days === d.min && filters.max_days === d.max;
            const count = durationCounts[d.label] ?? 0;
            return (
              <button
                key={d.label}
                onClick={() => {
                  if (isActive) {
                    setFilters({ ...filters, min_days: "", max_days: "" });
                  } else {
                    setFilters({ ...filters, min_days: d.min, max_days: d.max });
                  }
                }}
                className={`w-full flex items-center justify-between px-3 py-2 rounded-xl border text-sm font-medium transition-all duration-200
                  ${isActive
                    ? "bg-orange-500 text-white border-orange-500 shadow-md"
                    : "bg-gray-50 text-gray-700 border-gray-200 hover:border-orange-400 hover:bg-orange-50"
                  }`}
              >
                <span>{d.label}</span>
                <span className={`text-xs px-2 py-0.5 rounded-full font-bold ${isActive ? "bg-white/30 text-white" : "bg-gray-200 text-gray-500"
                  }`}>{count}</span>
              </button>
            );
          })}
        </div>
        {(filters.min_days || filters.max_days) && (
          <button onClick={() => setFilters({ ...filters, min_days: "", max_days: "" })}
            className="mt-2 text-xs text-orange-500 hover:underline w-full text-center">
            Clear duration
          </button>
        )}
      </div>

      {/* Sort By */}
      <div>
        <p className="text-lg text-gray-500 mb-1 font-medium">Sort By</p>
        <select
          className="w-full border p-2 rounded-lg text-sm focus:outline-none focus:ring-2 focus:ring-orange-400"
          value={filters.ordering}
          onChange={(e) => setFilters({ ...filters, ordering: e.target.value })}
        >
          {ORDERING.map((o) => (
            <option key={o.value} value={o.value}>{o.label}</option>
          ))}
        </select>
      </div>



      <button onClick={onApply}
        className="w-full bg-orange-500 hover:bg-orange-600 text-white p-2.5 rounded-lg text-sm font-semibold transition">
        Apply Filters
      </button>

      <button onClick={onClear}
        className="w-full border border-gray-300 text-gray-600 p-2.5 rounded-lg text-sm hover:bg-gray-50 transition">
        Clear Filters
      </button>
    </aside>
  );
}
