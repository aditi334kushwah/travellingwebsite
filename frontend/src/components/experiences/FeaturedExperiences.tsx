'use client';
import Image from "next/image";
import FadeUp from "@/components/ui/FadeUp";

const featured = [
  { title: "River Rafting", location: "Rishikesh", img: "/images/rishikesh.png" },
  { title: "Desert Safari", location: "Rajasthan", img: "/images/rajasthan.png" },
  { title: "Houseboat Stay", location: "Kerala", img: "/images/kerela.png" },
];

export default function FeaturedExperiences() {
  return (
    <section className="py-12 sm:py-16 w-[90%] mx-auto">
      <FadeUp>
        <h2 className="text-2xl sm:text-3xl font-poppins mb-8 sm:mb-10 text-center dark:text-white">
          Featured Experiences
        </h2>
      </FadeUp>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">
        {featured.map((item, i) => (
          <FadeUp key={i} delay={i * 0.12}>
            <div className="relative h-[250px] sm:h-[320px] md:h-[400px] rounded-2xl overflow-hidden">
              <Image src={item.img} alt={item.title} fill className="object-cover" />
              <div className="absolute inset-0 bg-black/40 flex flex-col justify-end p-4">
                <h3 className="text-lg sm:text-xl font-playfair text-white">{item.title}</h3>
                <p className="text-sm font-poppins text-white/80">{item.location}</p>
              </div>
            </div>
          </FadeUp>
        ))}
      </div>
    </section>
  );
}
