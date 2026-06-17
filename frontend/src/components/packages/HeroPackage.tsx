
'use client'
import React, { useState , useEffect} from 'react';
import axios  from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';

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


const HeroPackage = () => {

    const router = useRouter();
    const [featuredPackages, setFeaturedPackages] = useState<Package[]>([]);
    const [currentSlide, setCurrentSlide] = useState(0);

    const fetchFeaturedPackages = async () => {
        try {
            const response = await axios.get(
            "http://127.0.0.1:8000/api/packages/"
            );

            console.log(response.data);

            setFeaturedPackages(
            response.data.results.slice(0, 5)
            );

            

        } catch (error) {
            console.error(error);
        }
        };

    useEffect(() => {
        fetchFeaturedPackages();
        }, []);

    useEffect(() => {
        if (featuredPackages.length === 0) return;

        const interval = setInterval(() => {
            setCurrentSlide((prev) =>
            prev === featuredPackages.length - 1
                ? 0
                : prev + 1
            );
        }, 4000);

        return () => clearInterval(interval);
        }, [featuredPackages]);

  return (
    <div>
        {/* HERO CAROUSEL */}

            {featuredPackages.length > 0 && (

            <div className="relative mb-16 h-screen  w-full bg-amber-600  overflow-hidden flex flex-col lg:flex-row ">

                <Image
                src={featuredPackages[currentSlide].image}
                alt={featuredPackages[currentSlide].title}
                fill
                unoptimized
                className="object-cover"
                />

                <div className="absolute inset-0 bg-black/50" />

                <div className="absolute inset-0 flex items-center">

                <div className="max-w-2xl px-12 text-white">

                    <span className="rounded-full bg-orange-500 px-4 py-2 text-sm font-semibold">
                    Featured Destination
                    </span>

                    <h1 className="mt-6 text-5xl font-bold">
                    {featuredPackages[currentSlide].title}
                    </h1>

                    <p className="mt-4 text-lg">
                    {featuredPackages[currentSlide].description}
                    </p>

                    <div className="mt-6 flex gap-6">

                    <span>
                         {featuredPackages[currentSlide].location}
                    </span>

                    <span>
                         {featuredPackages[currentSlide].duration_days} Days
                    </span>

                    <span>
                        {featuredPackages[currentSlide].price}
                    </span>

                    </div>

                    <button
                    onClick={() =>
                        router.push(
                        `/packages/${featuredPackages[currentSlide].id}`
                        )
                    }
                    className="mt-8 rounded-full bg-orange-500 px-8 py-3 font-semibold"
                    >
                    Explore Now
                    </button>

                </div>

                 <Image
                src={featuredPackages[currentSlide].image}
                alt={featuredPackages[currentSlide].title}
                width={500}
                height = {500}
                unoptimized
                className="object-cover rounded-2xl border-amber-950"
                />



                </div>

                {/* Dots */}

                <div className="absolute bottom-6 left-1/2 flex -translate-x-1/2 gap-3">

                {featuredPackages.map((_, index) => (

                    <button
                    key={index}
                    onClick={() => setCurrentSlide(index)}
                    className={`h-3 w-3 rounded-full ${
                        currentSlide === index
                        ? "bg-white"
                        : "bg-white/40"
                    }`}
                    />

                ))}

                </div>

            </div>

            )}
    </div>
  )
}


export default HeroPackage