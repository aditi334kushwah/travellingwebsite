// components/HowItWorks.jsx
'use client'
import { ArrowRight, Link } from "lucide-react";
import router from "next/dist/shared/lib/router/router";
import Image from "next/image";
import { useRouter } from "next/navigation";

export default function HowItWorks() {
  const steps = [
    "Choose your destination and package",
    "Customize your itinerary",
    "Confirm booking & make payment",
    "Enjoy your hassle-free journey",
  ];

  const router = useRouter();

  return (
    <section className="py-16 px-6 md:px-16 bg-gray-100">

      
      
      {/* Heading */}
      <div className="text-center mb-12">
        <span className="text-gray-600 text-sm border border-gray-300 px-6 py-2 rounded-full mb-5">How it works</span>
        <h2 className="text-3xl md:text-4xl font-semibold mt-5">
          Book your tour in 4 easy steps
        </h2>
      </div>

      {/* Layout */}
      <div className="grid md:grid-cols-2 gap-6 items-center">
        
        {/* LEFT SIDE - Steps */}
        <div className="space-y-6">
          {steps.map((step, index) => (
            <div
              key={index}
              className="bg-white rounded-2xl p-5 shadow-md flex items-center justify-between hover:shadow-lg transition"
            >
              <div className="flex items-center gap-4">
                
                {/* Step Number */}
                <div className="w-10 h-10 flex items-center justify-center rounded-full bg-orange-400 text-white font-semibold">
                  {index + 1}
                </div>

                <p className="text-gray-700">{step}</p>
              </div>

              <ArrowRight className="text-gray-400" />
            </div>
          ))}
        </div>

        {/* RIGHT SIDE - Card */}
        <div className="flex justify-center  mt-4 sm:mt-10">
          <div className="w-[300px] h-[450px] bg-white rounded-3xl shadow-xl p-4 flex flex-col justify-end">

            <Image src="/images/hero_card1.jpg" alt="Booking Image" width={300} height={150} className="rounded-t-3xl object-cover mb-4" />
            {/* Bottom Card */}
            <div className="bg-gray-100 rounded-2xl p-4 flex items-center justify-between">
              
              <div>
                <p className="text-sm font-medium">Aditi Kushwah</p> 
                <p className="text-xs text-gray-500">Traveler</p>
              </div>

                <button
                  onClick={() => router.push("/booking")}
                  className="bg-orange-400 text-white px-4 py-2 rounded-lg"
                >
                  Book Your Trip
                </button>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
}


