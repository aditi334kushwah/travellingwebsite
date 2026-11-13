"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MapPin, Users, Clock, Star, ChevronLeft, ChevronRight, Heart, Share2, Sparkles, Filter, Check } from "lucide-react";
import PackageFilterSidebar from "@/components/packages/PackageFilterSidebar";
import FadeUp from "@/components/ui/FadeUp";

type Package = {
  id: number;
  package_code?: string;
  title: string;
  description: string;
  location: string;
  image: string;
  price: string;
  is_popular: boolean;
  duration_days: number;
  duration_nights: number;
  max_guests: number;
  category: string;
};

export default function PackagesPage() {
  const router = useRouter();
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(false);
  const [page, setPage] = useState(1);
  const [totalCount, setTotalCount] = useState(0);
  const [totalPages, setTotalPages] = useState(1);
  const [hasNext, setHasNext] = useState(false);
  const [hasPrev, setHasPrev] = useState(false);
  const [categoryCounts, setCategoryCounts] = useState<Record<string, number>>({});
  const [durationCounts, setDurationCounts] = useState<Record<string, number>>({});
  const [budgetCounts, setBudgetCounts] = useState<Record<string, number>>({});
  
  // Interactive client features for recruiter attraction
  const [savedWishlist, setSavedWishlist] = useState<number[]>([]);
  const [copiedId, setCopiedId] = useState<number | null>(null);

  const PAGE_SIZE = 9;

  const [filters, setFilters] = useState({
    search: "", category: "", location: "", min_price: "", max_price: "",
    min_days: "", max_days: "", is_popular: false, ordering: "-created_at",
  });

  // Load wishlist from localStorage
  useEffect(() => {
    try {
      const stored = localStorage.getItem("tripnova_wishlist");
      if (stored) setSavedWishlist(JSON.parse(stored));
    } catch (e) {
      console.log(e);
    }
  }, []);

  const toggleWishlist = (pkgId: number, e: React.MouseEvent) => {
    e.stopPropagation();
    let updated: number[];
    if (savedWishlist.includes(pkgId)) {
      updated = savedWishlist.filter(id => id !== pkgId);
    } else {
      updated = [...savedWishlist, pkgId];
    }
    setSavedWishlist(updated);
    localStorage.setItem("tripnova_wishlist", JSON.stringify(updated));
  };

  const handleShare = (pkg: Package, e: React.MouseEvent) => {
    e.stopPropagation();
    const url = `${window.location.origin}/packages/${pkg.id}`;
    if (navigator.clipboard) {
      navigator.clipboard.writeText(url);
      setCopiedId(pkg.id);
      setTimeout(() => setCopiedId(null), 2500);
    }
  };

  const fetchPackages = async (currentPage = 1, activeFilters = filters) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.append("page", currentPage.toString());
      if (activeFilters.search) params.append("search", activeFilters.search);
      if (activeFilters.category) params.append("category", activeFilters.category);
      if (activeFilters.location) params.append("location", activeFilters.location);
      if (activeFilters.min_price) params.append("min_price", activeFilters.min_price);
      if (activeFilters.max_price) params.append("max_price", activeFilters.max_price);
      if (activeFilters.min_days) params.append("min_days", activeFilters.min_days);
      if (activeFilters.max_days) params.append("max_days", activeFilters.max_days);
      if (activeFilters.is_popular) params.append("is_popular", "true");
      if (activeFilters.ordering) params.append("ordering", activeFilters.ordering);
      const res = await axios.get(`https://travellingwebsite-2.onrender.com/api/packages/?${params}`);
      setPackages(res.data.results ?? []);
      setTotalCount(res.data.count ?? 0);
      setHasNext(!!res.data.next);
      setHasPrev(!!res.data.previous);
      setTotalPages(res.data.count > 0 ? Math.ceil(res.data.count / PAGE_SIZE) : 1);
    } catch (err) {
      console.error(err);
      setPackages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages(1, filters);
    axios.get('https://travellingwebsite-2.onrender.com/api/packages/categories/').then(res => setCategoryCounts(res.data)).catch(console.error);
    axios.get('https://travellingwebsite-2.onrender.com/api/packages/durations/').then(res => setDurationCounts(res.data)).catch(console.error);
    axios.get('https://travellingwebsite-2.onrender.com/api/packages/budgets/').then(res => setBudgetCounts(res.data)).catch(console.error);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  const applyFilters = () => { setPage(1); fetchPackages(1, filters); };
  const clearFilters = () => {
    const reset = { search: "", category: "", location: "", min_price: "", max_price: "", min_days: "", max_days: "", is_popular: false, ordering: "-created_at" };
    setFilters(reset); setPage(1); fetchPackages(1, reset);
  };
  const goToPage = (p: number) => { setPage(p); fetchPackages(p, filters); window.scrollTo({ top: 0, behavior: "smooth" }); };

  return (
    <div className="min-h-screen bg-[#fcfbf9] dark:bg-[#09090b] text-gray-900 dark:text-gray-100">
      
      {/* Header Banner */}
      <div className="relative pt-36 pb-20 px-4 bg-gradient-to-b from-stone-900 via-stone-950 to-[#fcfbf9] dark:to-[#09090b] text-white overflow-hidden">
        {/* Glow Effects */}
        <div className="absolute top-1/4 left-1/2 -translate-x-1/2 w-[600px] h-[350px] bg-orange-500/20 rounded-full blur-[120px] pointer-events-none" />
        <div className="absolute top-0 right-10 w-72 h-72 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

        <div className="max-w-6xl mx-auto text-center relative z-10">
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 px-4 py-1.5 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-bold uppercase tracking-widest mb-4 border border-white/20 shadow-sm">
              <Sparkles size={13} className="text-amber-400" /> Curated Indian Expeditions
            </span>
          </FadeUp>

          <FadeUp delay={0.08}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-playfair leading-[1.15] text-white tracking-tight">
              Discover Incredible India Packages
            </h1>
          </FadeUp>

          <FadeUp delay={0.16}>
            <p className="mt-4 text-stone-300 text-sm sm:text-lg max-w-2xl mx-auto font-poppins font-light leading-relaxed">
              Explore handpicked heritage circuits, mountain sanctuaries, and coastal escapes with verified transparent pricing.
            </p>
          </FadeUp>

          {/* Quick Metrics Bar */}
          <FadeUp delay={0.24}>
            <div className="mt-8 flex flex-wrap items-center justify-center gap-3 sm:gap-4 text-xs font-poppins">
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 text-stone-200">
                🧭 <strong>{totalCount}</strong> Verified Tours
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 text-stone-200">
                ❤️ <strong>{savedWishlist.length}</strong> Saved in Wishlist
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 text-stone-200">
                📄 Instant PDF Voucher Download
              </span>
              <span className="inline-flex items-center gap-1.5 bg-white/10 backdrop-blur-md px-4 py-2 rounded-2xl border border-white/15 text-stone-200">
                💳 Razorpay Protected Checkout
              </span>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* Main Content Layout with Standard Max-Width Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-10">
        <div className="grid grid-cols-1 lg:grid-cols-4 gap-8">
          
          {/* Filter Sidebar */}
          <div className="lg:col-span-1">
            <PackageFilterSidebar
              filters={filters} setFilters={setFilters}
              categoryCounts={categoryCounts} durationCounts={durationCounts} budgetCounts={budgetCounts}
              onApply={applyFilters} onClear={clearFilters}
            />
          </div>

          {/* Packages Grid */}
          <div className="lg:col-span-3">
            {/* Top Toolbar */}
            <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between pb-6 mb-6 border-b border-gray-200 dark:border-gray-800 gap-3">
              <p className="text-sm text-gray-500 dark:text-gray-400 font-medium">
                Showing <strong className="text-gray-800 dark:text-white">{packages.length}</strong> of {totalCount} curated trips
              </p>
              
              <div className="flex items-center gap-2">
                <span className="text-xs text-gray-400 font-semibold uppercase">Sort:</span>
                <select
                  value={filters.ordering}
                  onChange={(e) => {
                    const updated = { ...filters, ordering: e.target.value };
                    setFilters(updated);
                    fetchPackages(1, updated);
                  }}
                  className="bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 rounded-xl px-3 py-1.5 text-xs font-semibold text-gray-800 dark:text-gray-200 focus:outline-none cursor-pointer"
                >
                  <option value="-created_at">Newest First</option>
                  <option value="price">Price: Low to High</option>
                  <option value="-price">Price: High to Low</option>
                  <option value="duration_days">Shortest Trip</option>
                  <option value="-duration_days">Longest Trip</option>
                </select>
              </div>
            </div>

            {loading ? (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="animate-pulse rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden shadow-sm">
                    <div className="h-52 bg-gray-200 dark:bg-gray-800" />
                    <div className="p-5 space-y-3">
                      <div className="h-4 bg-gray-200 dark:bg-gray-800 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 dark:bg-gray-800 rounded w-full" />
                      <div className="h-8 bg-gray-200 dark:bg-gray-800 rounded-xl mt-4" />
                    </div>
                  </div>
                ))}
              </div>
            ) : packages.length === 0 ? (
              <div className="flex flex-col items-center justify-center p-12 bg-white dark:bg-gray-900 rounded-3xl border border-gray-200 dark:border-gray-800 text-center">
                <p className="text-xl font-bold font-playfair text-gray-800 dark:text-white">No Packages Matched</p>
                <p className="text-sm text-gray-500 dark:text-gray-400 mt-1 max-w-sm">Try broadening your search or resetting the active filters to see all available journeys.</p>
                <button
                  onClick={clearFilters}
                  className="mt-5 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white text-xs font-bold uppercase tracking-wider shadow-md hover:scale-105 transition cursor-pointer"
                >
                  Reset All Filters
                </button>
              </div>
            ) : (
              <div className="grid sm:grid-cols-2 md:grid-cols-3 gap-6">
                {packages.map((pkg, i) => {
                  const isFavorited = savedWishlist.includes(pkg.id);
                  const isCopied = copiedId === pkg.id;

                  return (
                    <FadeUp key={pkg.id} delay={i * 0.05}>
                      <div
                        onClick={() => router.push(`/packages/${pkg.id}`)}
                        className="group overflow-hidden rounded-[26px] bg-white dark:bg-gray-900 border border-stone-200/80 dark:border-gray-800 shadow-[0_4px_20px_rgb(0,0,0,0.04)] hover:shadow-[0_20px_40px_rgb(234,88,12,0.15)] hover:border-orange-300 dark:hover:border-orange-500/30 transition-all duration-500 hover:-translate-y-2 flex flex-col justify-between cursor-pointer"
                      >
                        <div>
                          {/* Image Thumbnail with Overlay Badges */}
                          <div className="relative h-[220px] overflow-hidden">
                            {pkg.image ? (
                              <Image
                                src={pkg.image}
                                alt={pkg.title}
                                fill
                                unoptimized
                                className="object-cover transition-transform duration-700 group-hover:scale-110"
                              />
                            ) : (
                              <div className="w-full h-full bg-stone-200 dark:bg-stone-800 flex items-center justify-center text-gray-400 text-xs">
                                No Image Available
                              </div>
                            )}

                            <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-black/30" />

                            {/* Top Left: Category & Rating */}
                            <div className="absolute top-3 left-3 flex items-center gap-1.5">
                              <span className="bg-black/60 backdrop-blur-md text-amber-300 border border-white/20 text-[10px] font-bold uppercase tracking-wider px-3 py-1 rounded-full capitalize">
                                {pkg.category}
                              </span>
                              <span className="inline-flex items-center gap-1 bg-amber-500 text-white text-[10px] font-bold px-2 py-0.8 rounded-full shadow-sm">
                                <Star size={10} fill="currentColor" /> 4.9
                              </span>
                            </div>

                            {/* Top Right: Wishlist & Share Buttons */}
                            <div className="absolute top-3 right-3 flex items-center gap-1.5">
                              <button
                                type="button"
                                onClick={(e) => handleShare(pkg, e)}
                                title="Share Tour Link"
                                className="w-8 h-8 rounded-full bg-black/60 backdrop-blur-md border border-white/20 text-white flex items-center justify-center hover:bg-white hover:text-black transition cursor-pointer"
                              >
                                {isCopied ? <Check size={14} className="text-emerald-400" /> : <Share2 size={13} />}
                              </button>

                              <button
                                type="button"
                                onClick={(e) => toggleWishlist(pkg.id, e)}
                                title={isFavorited ? "Remove from wishlist" : "Save to wishlist"}
                                className={`w-8 h-8 rounded-full backdrop-blur-md border border-white/20 flex items-center justify-center transition cursor-pointer ${
                                  isFavorited
                                    ? "bg-red-500 text-white"
                                    : "bg-black/60 text-white hover:bg-white hover:text-red-500"
                                }`}
                              >
                                <Heart size={14} fill={isFavorited ? "currentColor" : "none"} />
                              </button>
                            </div>

                            {/* Bottom Left: Location */}
                            <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/60 backdrop-blur-md text-white text-xs px-2.5 py-1 rounded-full border border-white/10 font-medium">
                              <MapPin size={12} className="text-orange-400" />
                              <span className="truncate max-w-[130px]">{pkg.location}</span>
                            </div>

                            {/* Bottom Right: Unique ID Badge */}
                            <div className="absolute bottom-3 right-3 font-mono font-bold bg-orange-500/90 text-white text-[10px] px-2.5 py-1 rounded-full backdrop-blur-md shadow-md border border-white/20">
                              {pkg.package_code || `PKG-${pkg.id}`}
                            </div>
                          </div>

                          {/* Body Information */}
                          <div className="p-5">
                            <h3 className="font-bold font-playfair text-gray-900 dark:text-white text-lg leading-snug group-hover:text-orange-600 dark:group-hover:text-orange-400 transition-colors">
                              {pkg.title}
                            </h3>

                            <p className="mt-2 text-gray-500 dark:text-gray-400 text-xs sm:text-sm line-clamp-2 font-poppins leading-relaxed">
                              {pkg.description}
                            </p>

                            <div className="mt-4 flex items-center justify-between text-xs text-gray-600 dark:text-gray-400 border-t border-stone-100 dark:border-gray-800 pt-3 font-poppins">
                              <span className="flex items-center gap-1.5 font-medium">
                                <Users size={13} className="text-orange-500" />
                                {pkg.max_guests} Guests
                              </span>
                              <span className="flex items-center gap-1.5 font-medium">
                                <Clock size={13} className="text-orange-500" />
                                {pkg.duration_days}D / {pkg.duration_nights}N
                              </span>
                            </div>
                          </div>
                        </div>

                        {/* Bottom Action Footer */}
                        <div className="px-5 pb-5 pt-1">
                          <div className="flex items-center justify-between pt-3 border-t border-stone-100 dark:border-gray-800">
                            <div>
                              <span className="block text-[10px] uppercase font-bold text-gray-400 tracking-wider">Starts From</span>
                              <span className="text-lg sm:text-xl font-bold text-orange-600 dark:text-orange-400 font-playfair">
                                ₹{pkg.price}
                              </span>
                            </div>

                            <button
                              type="button"
                              onClick={(e) => {
                                e.stopPropagation();
                                router.push(`/booking?packageId=${pkg.id}`);
                              }}
                              className="px-4 py-2 rounded-xl bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white text-xs font-bold shadow-md shadow-orange-500/20 transition hover:scale-105 active:scale-95 cursor-pointer"
                            >
                              Book Now
                            </button>
                          </div>
                        </div>

                      </div>
                    </FadeUp>
                  );
                })}
              </div>
            )}

            {/* Pagination Controls */}
            {!loading && packages.length > 0 && (
              <FadeUp>
                <div className="flex justify-center items-center gap-2 mt-12 flex-wrap">
                  <button
                    onClick={() => goToPage(page - 1)}
                    disabled={!hasPrev}
                    className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 transition cursor-pointer"
                  >
                    <ChevronLeft size={18} />
                  </button>
                  {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                    <button
                      key={p}
                      onClick={() => goToPage(p)}
                      className={`w-10 h-10 rounded-xl text-sm font-semibold transition cursor-pointer ${
                        p === page
                          ? "bg-gradient-to-r from-amber-500 to-orange-600 text-white shadow-md shadow-orange-500/20"
                          : "bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 hover:bg-gray-50 dark:hover:bg-gray-700 text-gray-700 dark:text-gray-300"
                      }`}
                    >
                      {p}
                    </button>
                  ))}
                  <button
                    onClick={() => goToPage(page + 1)}
                    disabled={!hasNext}
                    className="p-2.5 rounded-xl border border-gray-200 dark:border-gray-700 bg-white dark:bg-gray-800 hover:bg-gray-50 dark:hover:bg-gray-700 disabled:opacity-40 transition cursor-pointer"
                  >
                    <ChevronRight size={18} />
                  </button>
                  <span className="text-xs text-gray-400 ml-2 font-medium">Page {page} of {totalPages}</span>
                </div>
              </FadeUp>
            )}
          </div>

        </div>
      </div>
    </div>
  );
}
