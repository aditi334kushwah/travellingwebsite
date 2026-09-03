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
        <div className="relative mb-10 sm:mb-16 w-full overflow-hidden bg-gray-900 dark:bg-gray-950">

            <Image src={pkg.image} alt={pkg.title} fill unoptimized className="object-cover opacity-60" />
            <div className="absolute inset-0 bg-black/40" />

            <div className="relative z-10 flex flex-col lg:flex-row items-center justify-between
                            min-h-screen lg:min-h-0 lg:h-screen
                            px-6 sm:px-10 lg:px-16
                            pt-28 pb-16 lg:py-0
                            gap-8 lg:gap-12">

                {/* TEXT BLOCK */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide + '-text'}
                        className="w-full lg:max-w-xl text-white"
                        initial={{ opacity: 0, y: 50 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: -30 }}
                        transition={{ duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <motion.span
                            className="rounded-full bg-orange-500 px-4 py-2 text-xs sm:text-sm font-poppins"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.1, duration: 0.5 }}
                        >
                            Featured Destination
                        </motion.span>

                        <motion.h1
                            className="mt-5 text-3xl sm:text-4xl md:text-5xl font-playfair leading-tight"
                            initial={{ opacity: 0, y: 30 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.2, duration: 0.6, ease: [0.22, 1, 0.36, 1] }}
                        >
                            {pkg.title}
                        </motion.h1>

                        <motion.p
                            className="mt-3 text-sm sm:text-base md:text-lg font-poppins text-white/85 line-clamp-3"
                            initial={{ opacity: 0, y: 25 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.3, duration: 0.6 }}
                        >
                            {pkg.description}
                        </motion.p>

                        <motion.div
                            className="mt-5 flex flex-wrap gap-4 text-sm sm:text-base"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.4, duration: 0.5 }}
                        >
                            <span className="flex items-center gap-1.5"><MapPin size={15} className="text-orange-400" />{pkg.location}</span>
                            <span className="flex items-center gap-1.5"><CalendarDays size={15} className="text-orange-400" />{pkg.duration_days} Days</span>
                            <span className="flex items-center gap-1.5"><IndianRupee size={15} className="text-orange-400" />{pkg.price}</span>
                        </motion.div>

                        <motion.button
                            onClick={() => router.push(`/packages/${pkg.id}`)}
                            className="mt-7 rounded-full bg-orange-500 hover:bg-orange-600 transition px-7 py-3 text-sm sm:text-base font-poppins"
                            initial={{ opacity: 0, y: 20 }}
                            animate={{ opacity: 1, y: 0 }}
                            transition={{ delay: 0.5, duration: 0.5 }}
                            whileHover={{ scale: 1.05 }}
                            whileTap={{ scale: 0.97 }}
                        >
                            Explore Now
                        </motion.button>
                    </motion.div>
                </AnimatePresence>

                {/* IMAGE CARD */}
                <AnimatePresence mode="wait">
                    <motion.div
                        key={currentSlide + '-img'}
                        className="w-full sm:w-[80%] md:w-[60%] lg:w-[420px] xl:w-[480px] flex-shrink-0"
                        initial={{ opacity: 0, y: 60 }}
                        animate={{ opacity: 1, y: 0 }}
                        exit={{ opacity: 0, y: 40 }}
                        transition={{ duration: 0.7, delay: 0.15, ease: [0.22, 1, 0.36, 1] }}
                    >
                        <Image
                            src={pkg.image}
                            alt={pkg.title}
                            width={480}
                            height={360}
                            unoptimized
                            className="w-full h-[220px] sm:h-[280px] md:h-[320px] lg:h-[380px] object-cover rounded-2xl shadow-2xl border-2 border-white/20"
                        />
                    </motion.div>
                </AnimatePresence>

            </div>

            {/* Dots */}
            <div className="absolute bottom-5 left-1/2 -translate-x-1/2 flex gap-2.5 z-20">
                {featuredPackages.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentSlide(index)}
                        className={`h-2.5 rounded-full transition-all duration-300 ${currentSlide === index ? "bg-white w-5" : "bg-white/40 w-2.5"}`}
                    />
                ))}
            </div>
        </div>
    );
};

export default HeroPackage;
