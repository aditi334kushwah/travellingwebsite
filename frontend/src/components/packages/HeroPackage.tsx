'use client'
import React, { useState, useEffect } from 'react';
import axios from 'axios';
import { useRouter } from 'next/navigation';
import Image from 'next/image';
import { MapPin, CalendarDays, IndianRupee } from "lucide-react";
import { motion, AnimatePresence } from 'motion/react';

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

    useEffect(() => {
        axios.get("https://travellingwebsite-2.onrender.com/api/packages/")
            .then(res => setFeaturedPackages(res.data.results.slice(0, 5)))
            .catch(console.error);
    }, []);

    useEffect(() => {
        if (featuredPackages.length === 0) return;
        const interval = setInterval(() => {
            setCurrentSlide(prev => prev === featuredPackages.length - 1 ? 0 : prev + 1);
        }, 4000);
        return () => clearInterval(interval);
    }, [featuredPackages]);

    if (featuredPackages.length === 0) return null;

    const pkg = featuredPackages[currentSlide];

    return (
        <section className="py-16 sm:py-20 w-full overflow-hidden bg-transparent">
            <div className="max-w-7xl mx-auto px-4 sm:px-6">
                <div className="relative rounded-[32px] sm:rounded-[40px] overflow-hidden shadow-2xl min-h-[540px] sm:min-h-[580px] flex items-center border border-black/10 dark:border-white/10">

                    <Image src={pkg.image} alt={pkg.title} fill unoptimized className="object-cover transition-all duration-1000 scale-105" />
                    <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/65 to-black/30" />

                    <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between w-full p-6 sm:p-10 lg:p-14 gap-8">

                        {/* TEXT BLOCK */}
                        <AnimatePresence mode="wait">
                            <motion.div
                                key={currentSlide + '-text'}
                                initial={{ opacity: 0, y: 20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.6 }}
                                className="w-full lg:w-3/5 text-white space-y-4 sm:space-y-6"
                            >
                                <div className="flex items-center gap-2">
                                    <span className="font-mono text-xs font-bold px-3 py-1 rounded-full bg-orange-500/90 text-white backdrop-blur-md">
                                        FEATURED EXPEDITION
                                    </span>
                                    <span className="text-xs text-orange-300 font-semibold uppercase tracking-wider">
                                        Slide {currentSlide + 1} of {featuredPackages.length}
                                    </span>
                                </div>

                                <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold font-playfair tracking-tight leading-[1.1]">
                                    {pkg.title}
                                </h2>

                                <p className="text-sm sm:text-base md:text-lg text-gray-200 line-clamp-3 font-poppins leading-relaxed max-w-xl">
                                    {pkg.description}
                                </p>

                                <div className="flex flex-wrap items-center gap-4 text-xs sm:text-sm text-gray-300 pt-2 font-poppins">
                                    <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                                        <MapPin size={15} className="text-orange-400" /> {pkg.location}
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full">
                                        <CalendarDays size={15} className="text-orange-400" /> {pkg.duration_days}D / {pkg.duration_nights}N
                                    </span>
                                    <span className="flex items-center gap-1.5 bg-white/15 backdrop-blur-md px-3.5 py-1.5 rounded-full font-bold text-white">
                                        <IndianRupee size={15} className="text-orange-400" /> ₹{pkg.price} / Person
                                    </span>
                                </div>

                                <div className="pt-2">
                                    <button
                                        onClick={() => router.push(`/packages/${pkg.id}`)}
                                        className="inline-flex items-center gap-2 px-6 py-3.5 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-2xl font-bold text-sm shadow-xl shadow-orange-500/25 transition hover:scale-105 active:scale-95 cursor-pointer"
                                    >
                                        Explore This Circuit
                                    </button>
                                </div>
                            </motion.div>
                        </AnimatePresence>

                        {/* Slide Indicators */}
                        <div className="flex lg:flex-col gap-2 shrink-0">
                            {featuredPackages.map((_, i) => (
                                <button
                                    key={i}
                                    onClick={() => setCurrentSlide(i)}
                                    className={`h-2.5 rounded-full transition-all duration-300 cursor-pointer ${
                                        i === currentSlide ? "w-8 bg-orange-500" : "w-2.5 bg-white/40 hover:bg-white/70"
                                    }`}
                                />
                            ))}
                        </div>

                    </div>
                </div>
            </div>
        </section>
    );
};

export default HeroPackage;
