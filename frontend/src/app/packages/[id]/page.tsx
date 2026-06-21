"use client";

import { useEffect, useState } from "react";
import { useParams, useRouter } from "next/navigation";
import axios from "axios";
import Image from "next/image";
import {
  MapPin,
  Users,
  Clock,
  Star,
  IndianRupee,
} from "lucide-react";

type Package = {
  id: number;
  title: string;
  description: string;
  location: string;
  image: string;
  price: string;
  is_popular: boolean;
  max_guests: number;
  duration_days: number;
  duration_nights: number;
};

export default function PackageDetailPage() {
  const { id } = useParams();
  const router = useRouter();

  const [pkg, setPkg] = useState<Package | null>(null);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    fetchPackage();
  }, []);

  const fetchPackage = async () => {
    try {

      const token = localStorage.getItem("access_token")
      const response = await axios.get(
        `https://travellingwebsite-2.onrender.com/api/packages/${id}/`,
        {
          headers: {
            Authorization: `Bearer ${token}`
          }
        }
      );

      setPkg(response.data);
    } catch (error) {
      console.error(error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl">
        Loading...
      </div>
    );
  }

  if (!pkg) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl">
        Package Not Found
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-slate-50">

      {/* Hero Image */}
      <div className="relative h-[500px]">

        <img
          src={pkg.image}
          alt={pkg.title}
          className="h-full w-full object-cover"
        />

        <div className="absolute inset-0 bg-black/40" />

        <div className="absolute bottom-10 left-10 text-white">

          <h1 className="text-5xl font-bold">
            {pkg.title}
          </h1>

          <div className="mt-4 flex items-center gap-2 text-lg">

            <MapPin />

            {pkg.location}

          </div>

        </div>

      </div>

      <div className="mx-auto max-w-6xl px-6 py-12">

        <div className="rounded-3xl bg-white p-8 shadow-xl">

          <div className="flex flex-col gap-8 lg:flex-row lg:justify-between">

            <div>

              <h2 className="text-4xl font-bold text-gray-800">
                {pkg.title}
              </h2>

              {pkg.is_popular && (
                <div className="mt-4 inline-flex items-center gap-2 rounded-full bg-orange-100 px-4 py-2 text-orange-600">

                  <Star size={18} />

                  Most Popular Package

                </div>
              )}

            </div>

            <div className="rounded-2xl bg-orange-500 px-8 py-6 text-center text-white">

              <p className="text-lg">
                Starting From
              </p>

              <div className="mt-2 flex items-center justify-center gap-1 text-4xl font-bold">

                <IndianRupee />

                {pkg.price}

              </div>

            </div>

          </div>

          {/* Package Info */}

          <div className="mt-10 grid gap-6 md:grid-cols-3">

            <div className="rounded-2xl bg-slate-100 p-6">

              <Users
                className="mb-3"
                size={28}
              />

              <h3 className="font-semibold">
                Guests
              </h3>

              <p>{pkg.max_guests} People</p>

            </div>

            <div className="rounded-2xl bg-slate-100 p-6">

              <Clock
                className="mb-3"
                size={28}
              />

              <h3 className="font-semibold">
                Duration
              </h3>

              <p>
                {pkg.duration_days} Days /
                {pkg.duration_nights} Nights
              </p>

            </div>

            <div className="rounded-2xl bg-slate-100 p-6">

              <MapPin
                className="mb-3"
                size={28}
              />

              <h3 className="font-semibold">
                Location
              </h3>

              <p>{pkg.location}</p>

            </div>

          </div>

          {/* Description */}

          <div className="mt-12">

            <h2 className="mb-4 text-3xl font-bold">
              About This Package
            </h2>

            <p className="leading-8 text-gray-600">
              {pkg.description}
            </p>

          </div>

          {/* Buttons */}

          <div className="mt-12 flex flex-col gap-4 md:flex-row">

            <button
              onClick={() => router.push("/booking")}
              className="flex-1 rounded-xl bg-orange-500 py-4 text-lg font-semibold text-white transition hover:bg-orange-600"
            >
              Book Now
            </button>

            <button
              onClick={() => router.push("/packages")}
              className="flex-1 rounded-xl border border-gray-300 py-4 text-lg font-semibold"
            >
              Back To Packages
            </button>

          </div>

        </div>

      </div>

    </section>
  );
}