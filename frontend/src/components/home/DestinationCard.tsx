"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { MapPin, Users, Clock } from "lucide-react";
import { useRouter } from "next/navigation";

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

export default function PackagesPage() {
  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  const router = useRouter();

  useEffect(() => {
    fetchPackages();
  }, []);

  const fetchPackages = async () => {
    try {
      const response = await axios.get(
        "http://127.0.0.1:8000/api/packages/"
      );

      setPackages(response.data);
    } catch (error) {
      console.error("Error Fetching Packages:", error);
    } finally {
      setLoading(false);
    }
  };

  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl font-semibold">
        Loading Packages...
      </div>
    );
  }

  return (
    <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">

      <div className="mx-auto max-w-7xl px-6">

        {/* <div className="mb-14 text-center">

          <h1 className="text-5xl font-bold text-gray-800">
            Explore Our Travel Packages
          </h1>

          <p className="mt-4 text-gray-600">
            Discover amazing destinations and unforgettable experiences.
          </p>

        </div> */}

        {packages.length === 0 ? (
          <div className="text-center text-xl text-gray-500">
            No Packages Available
          </div>
        ) : (

          <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

            {packages.map((pkg) => (

              <div
                key={pkg.id}
                className="group overflow-hidden rounded-3xl bg-white shadow-lg transition-all duration-500 hover:-translate-y-2 hover:shadow-2xl"
              >

                <div className="relative h-[300px] overflow-hidden">

                   <Image
                      src={pkg.image}
                      alt={pkg.title}
                      width={600}
                      height={400}
                      unoptimized
                      className="h-[300px] w-full object-cover"
                    /> 

                  {pkg.is_popular && (
                    <div className="absolute top-4 right-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">
                      MOST POPULAR
                    </div>
                  )}

                  <div className="absolute bottom-4 left-4 flex items-center gap-2 rounded-full bg-black/60 px-4 py-2 text-sm text-white backdrop-blur-md">

                    <MapPin size={16} />

                    {pkg.location}

                  </div>

                </div>

                <div className="p-6">

                  <div className="flex items-center justify-between">

                    <h2 className="text-2xl font-bold text-gray-800">
                      {pkg.title}
                    </h2>

                    <span className="text-xl font-bold text-orange-500">
                      ₹{pkg.price}
                    </span>

                  </div>

                  <p className="mt-4 line-clamp-3 text-gray-600">
                    {pkg.description}
                  </p>

                  <div className="mt-6 flex items-center justify-between border-t pt-4 text-sm text-gray-700">

                    <div className="flex items-center gap-2">
                      <Users size={16} />
                      {pkg.max_guests} Guests
                    </div>

                    <div className="flex items-center gap-2">
                      <Clock size={16} />
                      {pkg.duration_days}D / {pkg.duration_nights}N
                    </div>

                  </div>

                  <div className="mt-6 flex gap-3">

                    <button
                      onClick={() =>
                        router.push(`/packages/${pkg.id}`)
                      }
                      className="flex-1 rounded-full bg-orange-500 px-4 py-3 font-medium text-white transition hover:bg-orange-600"
                    >
                      View Details
                    </button>

                    <button
                      onClick={() =>
                        router.push("/booking")
                      }
                      className="flex-1 rounded-full bg-gray-800 px-4 py-3 font-medium text-white transition hover:bg-black"
                    >
                      Book Now
                    </button>

                  </div>

                </div>

              </div>

            ))}

          </div>

        )}

      </div>

    </section>
  );
}