"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { MapPin, Users, Clock, Star, IndianRupee } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";
import { motion } from "motion/react";
import PackageItinerarySection, { ItineraryDay } from "@/components/packages/PackageItinerarySection";

type Package = {
  id: number; package_code?: string; title: string; description: string; location: string;
  image: string; price: string; is_popular: boolean;
  max_guests: number; duration_days: number; duration_nights: number;
  itineraries?: ItineraryDay[];
};

export default function PackageDetailPage() {
  const { id } = useParams();
  const router = useRouter();
  const [pkg, setPkg] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    const fetchPackage = async () => {
      try {
        const token = localStorage.getItem("access_token");
        const response = await axios.get(`https://travellingwebsite-2.onrender.com/api/packages/${id}/`, {
          headers: { Authorization: `Bearer ${token}` }
        });
        setPkg(response.data);
      } catch (error) {
        console.error(error);
      } finally {
        setLoading(false);
      }
    };
    fetchPackage();
  }, [id]);

  if (loading) return <div className="flex min-h-screen items-center justify-center text-2xl dark:bg-gray-950 dark:text-white">Loading...</div>;
  if (!pkg) return <div className="flex min-h-screen items-center justify-center text-2xl dark:bg-gray-950 dark:text-white">Package Not Found</div>;

  return (
    <section className="min-h-screen bg-slate-50 dark:bg-gray-950">

      {/* ── HERO ── */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[580px] overflow-hidden">

        {/* Background image — floating up-down */}
        <motion.img
          src={pkg.image}
          alt={pkg.title}
          className="absolute inset-0 h-full w-full object-cover"
          animate={{ y: [0, -20, 0] }}
          transition={{ duration: 7, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Overlays */}
        <div className="absolute inset-0 bg-black/45" />
        <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/20 to-transparent" />

        {/* Floating decorative orb */}
        <motion.div
          className="absolute top-10 right-10 w-40 h-40 rounded-full bg-orange-500/15 blur-3xl pointer-events-none"
          animate={{ y: [0, -20, 0], opacity: [0.4, 0.8, 0.4] }}
          transition={{ duration: 5, repeat: Infinity, ease: "easeInOut" }}
        />

        {/* Hero content */}
        <div className="absolute inset-0 flex items-center justify-center align-center">
          <div className="flex flex-col sm:flex-row gap-6 sm:gap-10 p-10 sm:p-10 w-full items-end">

            {/* Floating small image card */}
            <motion.div
              className="hidden sm:block flex-shrink-0"
              animate={{ y: [0, -12, 0] }}
              transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
            >
              <img
                src={pkg.image}
                alt={pkg.title}
                className="w-[160px] md:w-[200px] lg:w-[240px] h-[120px] md:h-[180px] lg:h-[200px] object-cover rounded-2xl border-2 border-white/30 shadow-2xl"
              />
            </motion.div>

            {/* Text + buttons */}
            <div className="text-white">
              <FadeUp delay={0.1}>
                <h1 className="text-2xl sm:text-4xl md:text-5xl font-playfair leading-tight">
                  {pkg.title}
                </h1>
              </FadeUp>

              <FadeUp delay={0.2}>
                <p className="text-sm sm:text-base mt-3 text-white/80 font-poppins max-w-xl line-clamp-2">
                  {pkg.description}
                </p>
              </FadeUp>

              <FadeUp delay={0.3}>
                <div className="mt-3 flex items-center gap-2 text-sm sm:text-base font-poppins text-white/90">
                  <MapPin size={16} className="text-orange-400" /> {pkg.location}
                </div>
              </FadeUp>

              <FadeUp delay={0.4}>
                <div className="mt-6 flex flex-wrap gap-3">
                  <motion.button
                    onClick={() => router.push("/booking")}
                    className="rounded-xl bg-orange-500 py-2.5 px-6 text-base font-poppins text-white"
                    whileHover={{ scale: 1.07, y: -4, backgroundColor: "#c2621a" }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    Book Now
                  </motion.button>

                  <motion.button
                    onClick={() => router.push("/packages")}
                    className="rounded-xl border border-white/40 bg-white/10 backdrop-blur-sm py-2.5 px-6 text-base font-poppins text-white"
                    whileHover={{ scale: 1.07, y: -4, backgroundColor: "rgba(255,255,255,0.2)" }}
                    whileTap={{ scale: 0.96 }}
                    transition={{ type: "spring", stiffness: 300, damping: 18 }}
                  >
                    All Packages
                  </motion.button>
                </div>
              </FadeUp>
            </div>

          </div>
        </div>
      </div>

      {/* ── DETAIL CARD ── */}
      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="rounded-3xl bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-xl">

          <FadeUp>
            <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-start">
              <div>
                <div className="flex items-center gap-3">
                  <h2 className="text-2xl sm:text-4xl font-playfair text-gray-800 dark:text-white">{pkg.title}</h2>
                  {pkg.package_code && (
                    <span className="text-xs sm:text-sm font-mono font-bold px-3 py-1 rounded-lg bg-orange-100 dark:bg-orange-950/60 text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-orange-900/40">
                      ID: {pkg.package_code}
                    </span>
                  )}
                </div>
                {pkg.is_popular && (
                  <div className="mt-4 font-poppins inline-flex items-center gap-2 rounded-full bg-orange-100 dark:bg-orange-900/30 px-4 py-2 text-orange-600 dark:text-orange-300">
                    <Star size={18} /> Most Popular Package
                  </div>
                )}
              </div>
              <div className="rounded-2xl bg-orange-500 px-6 sm:px-8 py-5 sm:py-6 text-center text-white flex-shrink-0">
                <p className="text-base sm:text-lg">Starting From</p>
                <div className="mt-2 flex items-center justify-center gap-1 text-3xl sm:text-4xl font-bold">
                  <IndianRupee size={28} /> {pkg.price}
                </div>
              </div>
            </div>
          </FadeUp>

          {/* Info cards */}
          <div className="mt-8 sm:mt-10 grid gap-4 sm:gap-6 grid-cols-1 sm:grid-cols-3">
            {[
              { icon: <Users size={28} />, label: "Guests", value: `${pkg.max_guests} People` },
              { icon: <Clock size={28} />, label: "Duration", value: `${pkg.duration_days} Days / ${pkg.duration_nights} Nights` },
              { icon: <MapPin size={28} />, label: "Location", value: pkg.location },
            ].map((item, i) => (
              <FadeUp key={i} delay={i * 0.1}>
                <div className="rounded-2xl bg-slate-100 dark:bg-gray-700 p-5 sm:p-6">
                  <div className="mb-3 text-gray-700 dark:text-gray-300">{item.icon}</div>
                  <h3 className="font-semibold text-gray-800 dark:text-white">{item.label}</h3>
                  <p className="text-gray-600 dark:text-gray-400">{item.value}</p>
                </div>
              </FadeUp>
            ))}
          </div>

          {/* Description */}
          <FadeUp delay={0.15}>
            <div className="mt-10 sm:mt-12">
              <h2 className="mb-4 text-2xl sm:text-3xl font-playfair text-gray-800 dark:text-white">About This Package</h2>
              <p className="leading-8 text-gray-600 dark:text-gray-400">{pkg.description}</p>
            </div>
          </FadeUp>

          {/* Day-Wise Dynamic Itinerary Section */}
          <PackageItinerarySection
            itineraries={pkg.itineraries}
            durationDays={pkg.duration_days}
            durationNights={pkg.duration_nights}
          />

          {/* Bottom buttons */}
          <FadeUp delay={0.2}>
            <div className="mt-10 sm:mt-12 flex flex-col gap-4 sm:flex-row">
              <motion.button
                onClick={() => router.push("/booking")}
                className="flex-1 rounded-xl bg-orange-500 py-4 text-lg font-semibold text-white"
                whileHover={{ scale: 1.03, y: -3, backgroundColor: "#c2621a" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                Book Now
              </motion.button>
              <motion.button
                onClick={() => router.push("/packages")}
                className="flex-1 rounded-xl border border-gray-300 dark:border-gray-600 py-4 text-lg font-semibold text-gray-800 dark:text-white"
                whileHover={{ scale: 1.03, y: -3, backgroundColor: "rgba(0,0,0,0.04)" }}
                whileTap={{ scale: 0.97 }}
                transition={{ type: "spring", stiffness: 300, damping: 18 }}
              >
                Back To Packages
              </motion.button>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
