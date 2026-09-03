"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import { MapPin, Users, Clock, Star, IndianRupee } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

type Package = {
  id: number; title: string; description: string; location: string;
  image: string; price: string; is_popular: boolean;
  max_guests: number; duration_days: number; duration_nights: number;
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

      {/* Hero Image */}
      <div className="relative h-[300px] sm:h-[400px] md:h-[500px] lg:h-[550px]">
        <img src={pkg.image} alt={pkg.title} className="h-full w-full object-cover" />
        <div className="absolute inset-0 bg-black/40" />
        <div className="absolute bottom-6 sm:bottom-10 left-4 sm:left-10 text-white">
          <FadeUp delay={0.1}>
            <h1 className="text-2xl sm:text-4xl md:text-5xl font-bold">{pkg.title}</h1>
          </FadeUp>
          <FadeUp delay={0.2}>
            <div className="mt-3 flex items-center gap-2 text-base sm:text-lg">
              <MapPin size={18} /> {pkg.location}
            </div>
          </FadeUp>
        </div>
      </div>

      <div className="mx-auto max-w-6xl px-4 sm:px-6 py-8 sm:py-12">
        <div className="rounded-3xl bg-white dark:bg-gray-800 p-6 sm:p-8 shadow-xl">

          <FadeUp>
            <div className="flex flex-col gap-6 lg:flex-row lg:justify-between lg:items-start">
              <div>
                <h2 className="text-2xl sm:text-4xl font-bold text-gray-800 dark:text-white">{pkg.title}</h2>
                {pkg.is_popular && (
                  <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-100 dark:bg-orange-900/30 px-4 py-2 text-orange-600 dark:text-orange-300">
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

          {/* Package Info */}
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
              <h2 className="mb-4 text-2xl sm:text-3xl font-bold text-gray-800 dark:text-white">About This Package</h2>
              <p className="leading-8 text-gray-600 dark:text-gray-400">{pkg.description}</p>
            </div>
          </FadeUp>

          {/* Buttons */}
          <FadeUp delay={0.2}>
            <div className="mt-10 sm:mt-12 flex flex-col gap-4 sm:flex-row">
              <button onClick={() => router.push("/booking")} className="flex-1 rounded-xl bg-orange-500 py-4 text-lg font-semibold text-white transition hover:bg-orange-600">
                Book Now
              </button>
              <button onClick={() => router.push("/packages")} className="flex-1 rounded-xl border border-gray-300 dark:border-gray-600 py-4 text-lg font-semibold text-gray-800 dark:text-white dark:hover:bg-gray-700 transition">
                Back To Packages
              </button>
            </div>
          </FadeUp>

        </div>
      </div>
    </section>
  );
}
