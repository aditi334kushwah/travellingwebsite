'use client';

import { useEffect, useState } from 'react';
import axios from 'axios';
import Image from 'next/image';
import { useRouter } from 'next/navigation';

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
        fetchPackages();
    }, []);

    const fetchPackages = async () => {
        try {
            const response = await axios.get(
                'http://127.0.0.1:8000/api/packages/'
            );

            setPackages(response.data.results);
        } catch (error) {
            console.error(error);
        }
    };

    return (
        <section className="py-16 bg-white">

            <div className="max-w-7xl mx-auto px-6">

                <h2 className="md:text-6xl text-xl font-bold mb-10">
                    Explore Destinations
                </h2>

                <div className="flex gap-6 overflow-x-auto scrollbar-hide pb-4">

                    {packages.map((pkg) => (

                        <div
                            key={pkg.id}
                            onClick={() => router.push(`/packages/${pkg.id}`)}
                            className="
                relative
                min-w-[320px]
                md:min-w-[420px]
                h-[500px]
                rounded-[32px]
                overflow-hidden
                cursor-pointer
                flex-shrink-0
                group
              "
                        >

                            <Image
                                src={pkg.image}
                                alt={pkg.title}
                                fill
                                unoptimized
                                className="
                  object-cover
                  transition-transform
                  duration-700
                  group-hover:scale-105
                "
                            />

                            <div className="absolute inset-0 bg-black/30" />

                            <div className="absolute bottom-0 p-8 text-white">

                                <p className="text-sm uppercase tracking-wider">
                                    {pkg.location}
                                </p>

                                <h3 className="text-3xl font-bold mt-2">
                                    {pkg.title}
                                </h3>

                                {/* <p className="mt-3 line-clamp-2">
                  {pkg.description}
                </p> */}

                                {/* <p className="mt-4 text-xl font-semibold">
                  ₹{pkg.price}
                </p> */}

                            </div>

                        </div>

                    ))}

                </div>

            </div>

        </section>
    );
}