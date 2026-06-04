"use client";

import Form from "@/components/ui/Form";

// import Form from "@/components/ui/Form";

export default function BookingPage() {
  return (

    <section className="relative flex min-h-screen items-center overflow-hidden bg-gray-100 py-32 dark:bg-gray-900 sm:py-36 lg:py-40">
      
      {/* Top Left Blur Circle */}
      <div className="absolute left-0 top-0 aspect-square w-2/5 -translate-x-1/2 -translate-y-[66%] rounded-full bg-emerald-600/70 opacity-50 blur-3xl" />

      {/* Bottom Right Blur Circle */}
      <div className="absolute bottom-0 right-0 aspect-square w-2/5 translate-x-1/2 translate-y-[66%] rounded-full bg-emerald-600/70 opacity-50 blur-3xl" />

      {/* Top Right Gradient Shape */}
      <div className="absolute right-0 top-0 aspect-square min-w-[300px] w-[48%] translate-x-[40%] -translate-y-[40%] rounded-full bg-gradient-to-r from-emerald-400/5 md:w-2/5">
        <div className="absolute inset-[10%] rounded-full bg-gradient-to-l from-emerald-400/20">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-l from-emerald-400/30" />
        </div>
      </div>

      {/* Bottom Left Gradient Shape */}
      <div className="absolute bottom-0 left-0 aspect-square min-w-[300px] w-[48%] -translate-x-[40%] translate-y-[40%] rounded-full bg-gradient-to-l from-emerald-400/5 md:w-2/5">
        <div className="absolute inset-[10%] rounded-full bg-gradient-to-r from-emerald-400/40">
          <div className="absolute inset-[20%] rounded-full bg-gradient-to-r from-emerald-400/50" />
        </div>
      </div>

      {/* Main Content */}
      <div className="relative z-10 mx-auto w-full px-5 sm:px-10 md:px-12 lg:max-w-7xl lg:px-5">
        <div className="mb-10 flex flex-col items-center space-y-10 text-center">
          
          <span className="rounded-full border border-gray-500 bg-gray-50/50 px-3 py-1 text-gray-700 dark:bg-gray-950/50 dark:text-gray-300">
            Plan Your Visit
          </span>

          <h1 className="max-w-4xl text-4xl font-bold capitalize leading-tight text-gray-900 dark:text-white md:text-5xl lg:text-6xl xl:text-7xl">
            Book Your Dream Trip
          </h1>

          <p className="max-w-xl text-base text-gray-700 dark:text-gray-300">
            Plan your perfect journey with us. Fill in your details and let us create an unforgettable travel experience just for you.
          </p>
        </div>

        <Form />
      </div>
    </section>
     
  );
}





