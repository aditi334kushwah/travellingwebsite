"use client";

import axios from "axios";
import { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";
import { MapPin, Users, Clock, Star, ChevronLeft, ChevronRight } from "lucide-react";
import PackageFilterSidebar from "@/components/packages/PackageFilterSidebar";

type Package = {
  id: number;
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

  const [packages, setPackages]               = useState<Package[]>([]);
  const [loading, setLoading]                 = useState(false);
  const [page, setPage]                       = useState(1);
  const [totalCount, setTotalCount]           = useState(0);
  const [totalPages, setTotalPages]           = useState(1);
  const [hasNext, setHasNext]                 = useState(false);
  const [hasPrev, setHasPrev]                 = useState(false);
  const [categoryCounts, setCategoryCounts]   = useState<Record<string, number>>({});
  const [durationCounts, setDurationCounts]   = useState<Record<string, number>>({});
  const [budgetCounts, setBudgetCounts]       = useState<Record<string, number>>({});

  const PAGE_SIZE = 9;

  const [filters, setFilters] = useState({
    search:     "",
    category:   "",
    location:   "",
    min_price:  "",
    max_price:  "",
    min_days:   "",
    max_days:   "",
    is_popular: false,
    ordering:   "-created_at",
  });

  // ── fetch ──────────────────────────────────────────
  const fetchPackages = async (currentPage = 1, activeFilters = filters) => {
    setLoading(true);
    try {
      const params = new URLSearchParams();
      params.append("page", currentPage.toString());

      if (activeFilters.search)     params.append("search",     activeFilters.search);
      if (activeFilters.category)   params.append("category",   activeFilters.category);
      if (activeFilters.location)   params.append("location",   activeFilters.location);
      if (activeFilters.min_price)  params.append("min_price",  activeFilters.min_price);
      if (activeFilters.max_price)  params.append("max_price",  activeFilters.max_price);
      if (activeFilters.min_days)   params.append("min_days",   activeFilters.min_days);
      if (activeFilters.max_days)   params.append("max_days",   activeFilters.max_days);
      if (activeFilters.is_popular) params.append("is_popular", "true");
      if (activeFilters.ordering)   params.append("ordering",   activeFilters.ordering);

      const res = await axios.get(`http://127.0.0.1:8000/api/packages/?${params}`);
      setPackages(res.data.results ?? []);
      setTotalCount(res.data.count ?? 0);
      setHasNext(!!res.data.next);
      setHasPrev(!!res.data.previous);
      const pageSize = res.data.results?.length || PAGE_SIZE;
      const count    = res.data.count ?? 0;
      setTotalPages(count > 0 ? Math.ceil(count / PAGE_SIZE) : 1);
    } catch (err) {
      console.error(err);
      setPackages([]);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchPackages(1, filters);
    axios.get('http://127.0.0.1:8000/api/packages/categories/')
      .then(res => setCategoryCounts(res.data))
      .catch(err => console.error(err));
    axios.get('http://127.0.0.1:8000/api/packages/durations/')
      .then(res => setDurationCounts(res.data))
      .catch(err => console.error(err));
    axios.get('http://127.0.0.1:8000/api/packages/budgets/')
      .then(res => setBudgetCounts(res.data))
      .catch(err => console.error(err));
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  // ── handlers ──────────────────────────────────────
  const applyFilters = () => {
    setPage(1);
    fetchPackages(1, filters);
  };

  const clearFilters = () => {
    const reset = { search: "", category: "", location: "", min_price: "", max_price: "", min_days: "", max_days: "", is_popular: false, ordering: "-created_at" };
    setFilters(reset);
    setPage(1);
    fetchPackages(1, reset);
  };

  const goToPage = (p: number) => {
    setPage(p);
    fetchPackages(p, filters);
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  // ── UI ────────────────────────────────────────────
  return (
      <div className="min-h-screen bg-gray-50 pt-24 px-4 pb-12">

        {/* Header */}
        <div className="text-center mb-8">
          <span className="border text-sm border-gray-300 rounded-full px-4 py-1 text-gray-600">
            Pure Adventure
          </span>
          <h2 className="text-3xl font-bold mt-3 mb-2 text-gray-800">Explore Packages</h2>
          <p className="text-gray-500 text-sm max-w-xl mx-auto">
            Personalized travel experiences across India — curated just for you.
          </p>
        </div>

        {/* ── MAIN LAYOUT ── */}
        <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-4 gap-6">

          {/* ── SIDEBAR FILTERS ── */}
          <PackageFilterSidebar
            filters={filters}
            setFilters={setFilters}
            categoryCounts={categoryCounts}
            durationCounts={durationCounts}
            budgetCounts={budgetCounts}
            onApply={applyFilters}
            onClear={clearFilters}
          />

          {/* ── PACKAGE CARDS ── */}
          <div className="lg:col-span-3 flex flex-col gap-6">

            {/* Result count */}
            {!loading && (
              <p className="text-sm text-gray-500">
                Showing <span className="font-semibold text-gray-800">{packages.length}</span> of <span className="font-semibold text-gray-800">{totalCount}</span> packages
              </p>
            )}

            {loading ? (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {Array.from({ length: 6 }).map((_, i) => (
                  <div key={i} className="bg-white rounded-3xl shadow animate-pulse">
                    <div className="h-[220px] bg-gray-200 rounded-t-3xl" />
                    <div className="p-5 space-y-3">
                      <div className="h-4 bg-gray-200 rounded w-3/4" />
                      <div className="h-3 bg-gray-200 rounded w-1/2" />
                      <div className="h-3 bg-gray-200 rounded w-1/3" />
                    </div>
                  </div>
                ))}
              </div>

            ) : packages.length === 0 ? (
              <div className="flex flex-col items-center justify-center h-64 text-gray-400">
                <p className="text-xl font-semibold">No packages found</p>
                <p className="text-sm mt-1">Try adjusting your filters</p>
                <button onClick={clearFilters} className="mt-4 text-orange-500 underline text-sm">Clear all filters</button>
              </div>

            ) : (
              <div className="grid md:grid-cols-2 xl:grid-cols-3 gap-6">
                {packages.map((pkg) => (
                  <div key={pkg.id}
                    className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

                    {/* Image */}
                    <div className="relative h-[220px] overflow-hidden">
                      {pkg.image ? (
                        <Image
                          src={pkg.image}
                          alt={pkg.title}
                          fill
                          unoptimized
                          className="object-cover transition-transform duration-500 group-hover:scale-105"
                        />
                      ) : (
                        <div className="w-full h-full bg-gray-200 flex items-center justify-center text-gray-400 text-sm">No Image</div>
                      )}

                      {pkg.is_popular && (
                        <span className="absolute top-3 right-3 bg-orange-500 text-white text-xs px-3 py-1 rounded-full flex items-center gap-1 font-semibold">
                          <Star size={10} fill="white" /> Popular
                        </span>
                      )}

                      <span className="absolute top-3 left-3 bg-black/50 text-white text-xs px-3 py-1 rounded-full capitalize backdrop-blur-sm">
                        {pkg.category}
                      </span>

                      <div className="absolute bottom-3 left-3 flex items-center gap-1 bg-black/50 text-white text-xs px-3 py-1 rounded-full backdrop-blur-sm">
                        <MapPin size={12} /> {pkg.location}
                      </div>
                    </div>

                    {/* Content */}
                    <div className="p-5">
                      <div className="flex items-start justify-between gap-2">
                        <h3 className="font-bold text-gray-800 text-base leading-tight">{pkg.title}</h3>
                        <span className="text-orange-500 font-bold text-base whitespace-nowrap">₹{pkg.price}</span>
                      </div>

                      <p className="mt-2 text-gray-500 text-sm line-clamp-2">{pkg.description}</p>

                      <div className="mt-3 flex items-center justify-between text-xs text-gray-400 border-t pt-3">
                        <span className="flex items-center gap-1"><Users size={12} /> {pkg.max_guests} Guests</span>
                        <span className="flex items-center gap-1"><Clock size={12} /> {pkg.duration_days}D / {pkg.duration_nights}N</span>
                      </div>

                      <div className="mt-4 flex gap-2">
                        <button onClick={() => router.push(`/packages/${pkg.id}`)}
                          className="flex-1 rounded-full bg-orange-500 hover:bg-orange-600 py-2 text-sm font-medium text-white transition">
                          View Details
                        </button>
                        <button onClick={() => router.push("/booking")}
                          className="flex-1 rounded-full bg-gray-800 hover:bg-black py-2 text-sm font-medium text-white transition">
                          Book Now
                        </button>
                      </div>
                    </div>
                  </div>
                ))}
              </div>
            )}

            {/* ── PAGINATION ── */}
            {!loading && packages.length > 0 && (
              <div className="flex justify-center items-center gap-2 mt-4">
                <button onClick={() => goToPage(page - 1)} disabled={!hasPrev}
                  className="p-2 rounded-lg border bg-white hover:bg-gray-50 disabled:opacity-40 transition">
                  <ChevronLeft size={18} />
                </button>

                {Array.from({ length: totalPages }, (_, i) => i + 1).map((p) => (
                  <button key={p} onClick={() => goToPage(p)}
                    className={`w-9 h-9 rounded-lg text-sm font-medium transition ${
                      p === page ? "bg-orange-500 text-white" : "bg-white border hover:bg-gray-50 text-gray-700"
                    }`}>
                    {p}
                  </button>
                ))}

                <button onClick={() => goToPage(page + 1)} disabled={!hasNext}
                  className="p-2 rounded-lg border bg-white hover:bg-gray-50 disabled:opacity-40 transition">
                  <ChevronRight size={18} />
                </button>

                <span className="text-xs text-gray-400 ml-2">
                  Page {page} of {totalPages}
                </span>
              </div>
            )}

          </div>
        </div>
      </div>
  );
}
