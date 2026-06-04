"use client";

import Image from "next/image";
import { Link, MapPin } from "lucide-react";
import { useRouter } from "next/navigation";
// import { button } from "motion/react-m";
// // import Link from 'next/dist/client/link'

// ✅ TYPE DEFINE
type Packages = {
  id: string;
  title: string;
  location: string;
  image: string;
  desc: string;
};

// ✅ PROPS TYPE
type Props = {
  item: Packages;
};

const DestinationCard: React.FC<Props> = ({ item }) => {
  const router = useRouter();

  return (
    <div className="w-[340px] rounded-3xl overflow-hidden shadow-lg bg-gray-100">

      <div className="relative h-[350px]">
        <Image src={item.image} alt={item.title} fill className="object-cover" />

        <div className="absolute top-4 right-4 bg-orange-500 text-white text-xs px-3 py-1 rounded-full font-semibold">
          MOST POPULAR
        </div>

        <div className="absolute bottom-4 left-4 flex items-center gap-2 bg-black/60 text-white text-sm px-3 py-1 rounded-full backdrop-blur-md">
          <MapPin size={14} />
          {item.location}
        </div>
      </div>

      <div className="p-5">
        <h2 className="text-xl font-semibold text-gray-800">
          {item.title}
        </h2>

        <p className="mt-2 text-sm text-gray-600 leading-relaxed">
          {item.desc}
        </p>
      </div>

      <div className="flex justify-between p-5">
        
         <button
          type="button"
          onClick={() => router.push(`/packages/${item.id}`)}
          className="flex-1 rounded-full bg-[#c8782f] px-4 py-2 text-white transition duration-300 hover:-translate-y-1 hover:opacity-90"
        >
          Detail View
        </button>

        <button
          type="button"
          onClick={() => router.push("/booking")}
          className="flex-1 rounded-full bg-[#74706d] px-4 py-2 text-white transition duration-300 hover:-translate-y-1 hover:opacity-90"
        >
          Book Now
        </button>
       
      </div>
    </div>
  );
};

export default DestinationCard;