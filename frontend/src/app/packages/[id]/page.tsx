"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { MapPin, Users, Clock, Star, IndianRupee, Heart, Share2, Check, ShieldCheck, Sparkles, Calendar, Coffee, Bus, Camera, CheckCircle2 } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import { motion } from "motion/react";
import PackageItinerarySection, { ItineraryDay } from "@/components/packages/PackageItinerarySection";

type Package = {
  id: number;
  package_code?: string;
  title: string;
  description: string;
  location: string;
  image: string;
  price: string;
  is_popular: boolean;
  max_guests: number;
  duration_days: number;
  duration_nights: number;
  itineraries?: ItineraryDay[];
};

export default function PackageDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [pkg, setPkg] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);
  const [isWishlisted, setIsWishlisted] = useState(false);
  const [copied, setCopied] = useState(false);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const headers = token ? { Authorization: `Bearer ${token}` } : {};
        const response = await axios.get(`https://travellingwebsite-2.onrender.com/api/packages/${id}/`, {
          headers
        });
        setPkg(response.data);

        // Check if saved in wishlist
        const wishlist = JSON.parse(localStorage.getItem("tripnova_wishlist") || "[]");
        if (wishlist.includes(Number(id))) {
          setIsWishlisted(true);
        }
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackage();
  }, [id]);

  const toggleWishlist = () => {
    if (!pkg) return;
    const wishlist: number[] = JSON.parse(localStorage.getItem("tripnova_wishlist") || "[]");
    let updated: number[];
    if (wishlist.includes(pkg.id)) {
      updated = wishlist.filter(item => item !== pkg.id);
      setIsWishlisted(false);
    } else {
      updated = [...wishlist, pkg.id];
      setIsWishlisted(true);
    }
    localStorage.setItem("tripnova_wishlist", JSON.stringify(updated));
  };

  const handleShare = () => {
    if (typeof window !== "undefined" && navigator.clipboard) {
      navigator.clipboard.writeText(window.location.href);
      setCopied(true);
      setTimeout(() => setCopied(false), 2500);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center bg-[#fcfbf9] dark:bg-[#09090b]">
        <div className="flex flex-col items-center gap-3">
          <div className="w-10 h-10 border-4 border-amber-500 border-t-transparent rounded-full animate-spin" />
          <p className="font-poppins text-sm text-gray-500 dark:text-gray-400">Loading tour details...</p>
        </div>
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="flex flex-col min-h-screen items-center justify-center bg-[#fcfbf9] dark:bg-[#09090b] px-4 text-center">
        <h2 className="text-3xl font-bold font-playfair text-gray-800 dark:text-white">Package Not Found</h2>
        <p className="text-gray-500 mt-2 text-sm">The package you are looking for does not exist or has been relocated.</p>
        <button
          onClick={() => router.push("/packages")}
          className="mt-6 px-6 py-2.5 rounded-full bg-gradient-to-r from-amber-500 to-orange-600 text-white font-semibold text-sm shadow-md"
        >
          View All Packages
        </button>
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-[#fcfbf9] dark:bg-[#09090b] text-gray-900 dark:text-gray-100">

      {/* ── CINEMATIC LUXURY HERO BANNER ── */}
      <div className="relative h-[340px] sm:h-[440px] md:h-[520px] lg:h-[580px] overflow-hidden flex items-end">
        {/* Background Image */}
        <motion.img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 h-full w-full object-cover scale-105"
          animate={{ scale: [1.02, 1.06, 1.02] }}
          transition={{ duration: 16, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Dual-tone Dark Vignette Overlays */}
        <div className="absolute inset-0 bg-gradient-to-t from-[#09090b] via-black/40 to-black/60" />
        <div className="absolute inset-0 bg-gradient-to-r from-stone-950/70 via-transparent to-amber-950/40" />

        {/* Hero Top Action Buttons (Wishlist & Share) */}
        <div className="absolute top-28 right-4 sm:right-8 z-20 flex items-center gap-2">
          <button
            onClick={handleShare}
            className="flex items-center gap-1.5 px-3.5 py-2 rounded-full bg-black/50 hover:bg-white hover:text-black text-white backdrop-blur-md border border-white/20 text-xs font-semibold transition cursor-pointer"
          >
            {copied ? <Check size={14} className="text-emerald-400" /> : <Share2 size={14} />}
            <span>{copied ? "Link Copied!" : "Share"}</span>
          </button>

          <button
            onClick={toggleWishlist}
            className={`flex items-center gap-1.5 px-3.5 py-2 rounded-full backdrop-blur-md border border-white/20 text-xs font-semibold transition cursor-pointer ${
              isWishlisted
                ? "bg-red-500 text-white"
                : "bg-black/50 text-white hover:bg-white hover:text-red-500"
            }`}
          >
            <Heart size={14} fill={isWishlisted ? "currentColor" : "none"} />
            <span>{isWishlisted ? "Saved" : "Save"}</span>
          </button>
        </div>

        {/* Hero Foreground Content */}
        <div className="relative z-10 w-full max-w-6xl mx-auto px-4 sm:px-6 pb-12 sm:pb-16 flex flex-col md:flex-row md:items-end justify-between gap-6">
          <div className="max-w-2xl text-white">
            <FadeUp>
              <div className="flex flex-wrap items-center gap-2 mb-3">
                <span className="px-3 py-1 rounded-full bg-white/15 backdrop-blur-md text-amber-300 text-xs font-mono font-bold border border-white/20">
                  {pkg.package_code || `PKG-${pkg.id}`}
                </span>
                {pkg.is_popular && (
                  <span className="px-3 py-1 rounded-full bg-orange-500 text-white text-xs font-semibold flex items-center gap-1 shadow-md">
                    <Star size={11} fill="white" /> Most Popular Trip
                  </span>
                )}
              </div>
            </FadeUp>

            <FadeUp delay={0.1}>
              <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-playfair leading-tight text-white">
                {pkg.title}
              </h1>
            </FadeUp>

            <FadeUp delay={0.2}>
              <div className="mt-3 flex items-center gap-2 text-stone-200 text-sm sm:text-base font-medium">
                <MapPin size={17} className="text-amber-400" />
                <span>{pkg.location}</span>
                <span className="text-white/40">•</span>
                <span>{pkg.duration_days} Days / {pkg.duration_nights} Nights</span>
              </div>
            </FadeUp>
          </div>

          {/* Quick Hero CTA Card */}
          <FadeUp delay={0.3}>
            <div className="bg-white/10 backdrop-blur-xl border border-white/25 rounded-3xl p-5 sm:p-6 text-white text-left md:text-right flex-shrink-0 shadow-2xl">
              <span className="text-xs uppercase font-bold text-amber-300 tracking-wider block">Starting Rate</span>
              <div className="text-3xl sm:text-4xl font-extrabold font-playfair flex items-center md:justify-end gap-1 mt-1 text-white">
                <IndianRupee size={28} className="text-amber-400" />
                <span>{pkg.price}</span>
              </div>
              <span className="text-xs text-stone-300 block mt-0.5">per person (taxes included)</span>

              <button
                onClick={() => router.push(`/booking?packageId=${pkg.id}`)}
                className="mt-4 w-full md:w-auto px-7 py-3 rounded-full bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/30 transition hover:scale-105 active:scale-95 cursor-pointer"
              >
                Book This Trip Now
              </button>
            </div>
          </FadeUp>
        </div>
      </div>

      {/* ── MAIN CONTENT CONTAINER (Unified Max-Width & Grid) ── */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-12 sm:py-16">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10">

          {/* Left Column: Details & Itinerary */}
          <div className="lg:col-span-8 space-y-12">
            
            {/* Quick Metrics Bar */}
            <FadeUp>
              <div className="grid grid-cols-3 gap-4 p-5 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-md">
                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-amber-100 dark:bg-amber-950/60 text-amber-600 dark:text-amber-400 flex items-center justify-center flex-shrink-0">
                    <Clock size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-gray-400">Duration</span>
                    <p className="text-sm sm:text-base font-bold text-gray-800 dark:text-white">
                      {pkg.duration_days}D / {pkg.duration_nights}N
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3 border-x border-gray-100 dark:border-gray-800 px-3">
                  <div className="w-10 h-10 rounded-2xl bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 flex items-center justify-center flex-shrink-0">
                    <Users size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-gray-400">Max Group</span>
                    <p className="text-sm sm:text-base font-bold text-gray-800 dark:text-white">
                      {pkg.max_guests} People
                    </p>
                  </div>
                </div>

                <div className="flex items-center gap-3">
                  <div className="w-10 h-10 rounded-2xl bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center flex-shrink-0">
                    <ShieldCheck size={20} />
                  </div>
                  <div>
                    <span className="text-[11px] font-bold uppercase text-gray-400">Booking</span>
                    <p className="text-sm sm:text-base font-bold text-emerald-600 dark:text-emerald-400">
                      Verified
                    </p>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* About / Description */}
            <FadeUp delay={0.1}>
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-md">
                <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/60 px-3 py-1 rounded-full">
                  Overview
                </span>
                <h2 className="text-2xl sm:text-3xl font-playfair font-bold text-gray-900 dark:text-white mt-3 mb-4">
                  About This Experience
                </h2>
                <p className="text-gray-600 dark:text-gray-300 leading-relaxed text-sm sm:text-base font-poppins">
                  {pkg.description}
                </p>

                {/* Key Trip Inclusions / Highlights */}
                <div className="mt-8 pt-6 border-t border-gray-100 dark:border-gray-800">
                  <h3 className="font-playfair font-bold text-lg text-gray-900 dark:text-white mb-4">
                    What&apos;s Included In This Package
                  </h3>
                  <div className="grid grid-cols-2 sm:grid-cols-2 gap-3 text-xs sm:text-sm text-gray-700 dark:text-gray-300">
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Comfortable Boutique / Resort Stay</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Complimentary Breakfast & Dinner</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Private AC Cab for Sightseeing</span>
                    </div>
                    <div className="flex items-center gap-2">
                      <CheckCircle2 size={16} className="text-emerald-500 flex-shrink-0" />
                      <span>Certified Local Tour Guide & Support</span>
                    </div>
                  </div>
                </div>
              </div>
            </FadeUp>

            {/* Dynamic Day-wise Itinerary Accordion Section */}
            <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-8 border border-gray-100 dark:border-gray-800 shadow-md">
              <PackageItinerarySection
                itineraries={pkg.itineraries}
                durationDays={pkg.duration_days}
                durationNights={pkg.duration_nights}
              />
            </div>

          </div>

          {/* Right Column: Sticky Booking Card & Guarantees */}
          <div className="lg:col-span-4">
            <div className="sticky top-28 space-y-6">
              
              {/* Main Booking Card */}
              <div className="rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 p-6 sm:p-8 shadow-xl">
                <div className="flex items-center justify-between pb-4 border-b border-gray-100 dark:border-gray-800">
                  <div>
                    <span className="text-[11px] uppercase font-bold text-gray-400">Total Price</span>
                    <div className="flex items-center gap-1 text-2xl sm:text-3xl font-extrabold text-orange-600 dark:text-orange-400 font-playfair">
                      <IndianRupee size={24} /> {pkg.price}
                    </div>
                  </div>
                  <span className="text-xs font-mono font-bold bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300 px-2.5 py-1 rounded-md">
                    {pkg.package_code || `PKG-${pkg.id}`}
                  </span>
                </div>

                <div className="py-5 space-y-3 text-xs text-gray-600 dark:text-gray-300">
                  <div className="flex justify-between">
                    <span>Base Fare (Per Person)</span>
                    <strong className="text-gray-900 dark:text-white">₹{pkg.price}</strong>
                  </div>
                  <div className="flex justify-between">
                    <span>Taxes & Service Fees</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Included</span>
                  </div>
                  <div className="flex justify-between">
                    <span>Digital Trip Voucher</span>
                    <span className="text-emerald-600 dark:text-emerald-400 font-semibold">Instant Download</span>
                  </div>
                </div>

                <button
                  type="button"
                  onClick={() => router.push(`/booking?packageId=${pkg.id}`)}
                  className="w-full py-4 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-bold text-base shadow-lg shadow-orange-500/25 transition duration-300 hover:scale-[1.02] active:scale-[0.98] cursor-pointer"
                >
                  Proceed to Book
                </button>

                <p className="mt-3 text-center text-[11px] text-gray-400">
                  🔒 No advance payment required for initial inquiry.
                </p>
              </div>

              {/* TripNova Assurance Box */}
              <div className="rounded-3xl bg-amber-500/5 dark:bg-amber-950/20 border border-amber-200 dark:border-amber-900/40 p-6 space-y-3">
                <span className="text-xs font-bold text-amber-700 dark:text-amber-300 uppercase tracking-wider block">
                  TripNova Assurance
                </span>
                <p className="text-xs text-gray-600 dark:text-gray-400 leading-relaxed">
                  ✓ Free cancellation up to 48 hours before journey.<br />
                  ✓ 100% verified hotels & homestays.<br />
                  ✓ Dedicated 24/7 personal tour assistant.
                </p>
              </div>

            </div>
          </div>

        </div>
      </div>
    </section>
  );
}
