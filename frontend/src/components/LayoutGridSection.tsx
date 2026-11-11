"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridSection() {
  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-[#fcfbf9] via-stone-50 to-[#fcfbf9] dark:from-gray-950 dark:via-gray-900 dark:to-gray-950">
      <div className="max-w-7xl mx-auto px-4 sm:px-6">
        <div className="text-center max-w-3xl mx-auto mb-12 sm:mb-16">
          <div className="flex justify-center items-center mb-4">
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1.5 rounded-full bg-orange-100 dark:bg-orange-950/60 text-orange-700 dark:text-orange-300 border border-orange-200 dark:border-orange-900/50 text-xs font-bold uppercase tracking-wider">
              Visual Memories
            </span>
          </div>
          <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair font-bold text-gray-900 dark:text-white tracking-tight">
            Feel the Experience
          </h2>
          <p className="mt-3 text-sm sm:text-base md:text-lg text-gray-600 dark:text-gray-400 font-poppins">
            From timeless temple spires to snow-dusted alpine ridges, glimpse the sacred moments awaiting your arrival.
          </p>
        </div>

        <LayoutGrid cards={cards} />
      </div>
    </section>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-playfair md:text-4xl text-xl text-white">
        Ram Mandir – A Symbol of Faith and Devotion
      </p>
      <p className="font-poppins text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Experience the divine presence and spiritual energy at one of India’s most sacred temples.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-playfair md:text-4xl text-xl text-white">
        Char Dham Yatra – A Journey of Faith
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-poppins text-base my-4 max-w-lg text-neutral-200">
        Embark on a sacred pilgrimage to the four holy shrines and experience divine peace and spiritual awakening.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-playfair md:text-4xl text-xl text-white">
        Varanasi – The City of Eternal Faith 🛕
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-poppins text-base my-4 max-w-lg text-neutral-200">
       Experience the divine energy of the Ganges, ancient temples, and timeless traditions. 
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-playfair md:text-4xl text-xl text-white">
        Prem Mandir, Vrindavan 🛕
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-poppins text-base my-4 max-w-lg text-neutral-200">
        Witness the divine love of Radha Krishna through stunning architecture, light shows, and peaceful surroundings.
      </p>
    </div>
  );
};

const cards = [
  {
    id: 1,
    content: <SkeletonOne />,
    className: "md:col-span-2",
    thumbnail:
      "/images/rammandir.png",
  },
  {
    id: 2,
    content: <SkeletonTwo />,
    className: "col-span-1",
    thumbnail:
      "/images/chardham.png",
  },
  {
    id: 3,
    content: <SkeletonThree />,
    className: "col-span-1",
    thumbnail:
      "/images/vanaras.png",
  },
  {
    id: 4,
    content: <SkeletonFour />,
    className: "md:col-span-2",
    thumbnail:
    "/images/prem.png",
     
  },
];
