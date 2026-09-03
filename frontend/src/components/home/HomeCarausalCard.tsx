'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';
import { Compass, MapPin } from "lucide-react";
import FadeUp from '@/components/ui/FadeUp';

type Package = {
  id: number;
  title: string;
  description: string;
  image: string;
  price: string;
  location: string;
};

export default function HeroCarausalCard() {
  const [packages, setPackages] = useState<Package[]>([]);
  const router = useRouter();

  useEffect(() => {
    axios.get('https://travellingwebsite-2.onrender.com/api/packages/')
      .then(res => setPackages(res.data.results))
      .catch(console.error);
  }, []);

  return (
    <section className="py-12 sm:py-16 bg-white dark:bg-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">

        <FadeUp>
          <h2 className="text-2xl sm:text-4xl md:text-6xl font-playfair mb-8 text-gray-900 dark:text-white">
            Explore Destinations
          </h2>
        </FadeUp>

        <div className="flex gap-4 sm:gap-6 overflow-x-auto scrollbar-hide pb-4">
          {packages.map((pkg, i) => (
            <FadeUp key={pkg.id} delay={i * 0.08} className="flex-shrink-0">
              <div
                onClick={() => router.push(`/packages/${pkg.id}`)}
                className="relative min-w-[160px] sm:min-w-[200px] md:min-w-[270px] h-[260px] sm:h-[320px] md:h-[380px] rounded-[24px] sm:rounded-[32px] overflow-hidden cursor-pointer group"
              >
                <Image
                  src={pkg.image || "/default.jpg"}
                  alt={pkg.title}
                  fill
                  unoptimized
                  className="object-cover transition-transform duration-700 group-hover:scale-105"
                />
                <div className="absolute inset-0 bg-black/30" />
                <div className="absolute flex flex-col bottom-0 p-4 sm:p-6 md:p-8 text-white">
                  <h3 className="text-base sm:text-lg md:text-xl font-bold mt-2 flex items-center gap-2">
                    <Compass className="w-4 h-4 text-white flex-shrink-0" />
                    {pkg.title}
                  </h3>
                  <p className="text-xs sm:text-sm uppercase tracking-wider flex items-center gap-1.5 mt-1">
                    <MapPin className="w-3 h-3 text-white flex-shrink-0" />
                    {pkg.location}
                  </p>
                </div>
              </div>
            </FadeUp>
          ))}
        </div>

      </div>
    </section>
  );
}
