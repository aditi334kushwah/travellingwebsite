"use client";

import { useEffect, useState } from "react";
import Image from "next/image";
import axios from "axios";
import { MapPin, Users, Clock } from "lucide-react";
import { useRouter } from "next/navigation";


type Props = {
  currentPage: number;
  totalPages: number;
  setCurrentPage: any;
};

type Package = {
  id: number;
  title: string;
  description: string;
  location: string;
  image: string;
  price: string;
  category: string;
  duration_days: number;
  duration_nights: number;
  max_guests: number;
};

type PropsSet = {
  setSearch: any;
  setCategory: any;
  setMinPrice: any;
  setMaxPrice: any;
  setMinDays: any;
  setMaxDays: any;
};

const PackagesPage = () => {

  const [packages, setPackages] = useState<Package[]>([]);
  const [loading, setLoading] = useState(true);

  const [currentPage, setCurrentPage] = useState(1);

  const [totalPages, setTotalPages] = useState(1);

  const [search, setSearch] = useState("");

  const [category, setCategory] = useState("");

  const [minPrice, setMinPrice] = useState("");

  const [maxPrice, setMaxPrice] = useState("");

  const [minDays, setMinDays] = useState("");

  const [maxDays, setMaxDays] = useState("");


  const router = useRouter();

  const fetchPackages = async () => {

    try {
      setLoading(true);
      const params = new URLSearchParams();

      params.append("page", currentPage.toString());

      if (search)
        params.append("search", search);

      if (category)
        params.append("category", category);

      if (minPrice)
        params.append("min_price", minPrice);

      if (maxPrice)
        params.append("max_price", maxPrice);

      if (minDays)
        params.append("min_days", minDays);

      if (maxDays)
        params.append("max_days", maxDays);

      const response = await axios.get(

        `https://travellingwebsite-2.onrender.com/api/packages/?${params}`

      );

      setPackages(response.data.results);

      setTotalPages(
        Math.ceil(response.data.count / 9)
      );

    } catch (error: any) {
      console.log("STATUS:", error.response?.status);
      console.log("DATA:", error.response?.data);
      console.log("FULL ERROR:", error);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {

    fetchPackages();
  },
    [
      currentPage,
      search,
      category,
      minPrice,
      maxPrice,
      minDays,
      maxDays
    ]
  );



  if (loading) {
    return (
      <div className="flex min-h-screen items-center justify-center text-2xl font-semibold">
        Loading Packages...
      </div>
    );
  }

  return (

    <>

      <section className="min-h-screen bg-gradient-to-b from-blue-50 to-white py-16">

        <div className="mx-auto max-w-7xl px-6">


          {packages.length === 0 ? (
            <div className="text-center text-xl text-gray-500">
              No Packages Available
            </div>
          ) : (

            <div className="grid gap-10 md:grid-cols-2 lg:grid-cols-3">

              <div className="mx-auto max-w-7xl px-4">

                <div className="flex gap-8">

                  {/* Packages */}
                  <div className="flex-1">
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

                          {/* {pkg.is_popular && (
                            <div className="absolute top-4 right-4 rounded-full bg-orange-500 px-4 py-2 text-xs font-bold text-white">
                              MOST POPULAR
                            </div>
                          )} */}

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

                  {/* dynamica pagination  */}

                  <div>
                    {
                      Array.from(
                        { length: totalPages },
                        (_, i) => i + 1
                      ).map((page) => (

                        <button
                          key={page}
                          onClick={() =>
                            setCurrentPage(page)
                          }
                        >
                          {page}
                        </button>

                      ))
                    }
                  </div>

                </div>

              </div>



            </div>

          )}

        </div>

      </section>


    </>
  );

}



export default PackagesPage;