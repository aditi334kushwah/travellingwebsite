"use client";
import React, { useState, useRef, useEffect } from "react";
import { LayoutGrid } from "@/components/ui/layout-grid";

export function LayoutGridSection() {
  return (
    <div className="h-auto py-20 w-full">
        <div>
        <div className='flex  justify-center align-center mb-5'>
             <span className='bg-transparent align-center justify-center text-gray-800 backdrop-blur-2xl rounded-full border text-xl font-bold border-gray-300 px-6 py-2'> Experience </span>
             
         </div>
         <h1 className='text-4xl font-bold my-4 text-center '> Feel Experience </h1>
         <h4 className='text-xl text-center text-gray-600'>
           From serene landscapes to thrilling adventures, discover moments that turn into lifelong memories.
         </h4>
        </div>
      <LayoutGrid cards={cards} />
      
    </div>
  );
}

const SkeletonOne = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Ram Mandir – A Symbol of Faith and Devotion
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Experience the divine presence and spiritual energy at one of India’s most sacred temples.
      </p>
    </div>
  );
};

const SkeletonTwo = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Char Dham Yatra – A Journey of Faith
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
        Embark on a sacred pilgrimage to the four holy shrines and experience divine peace and spiritual awakening.
      </p>
    </div>
  );
};
const SkeletonThree = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Varanasi – The City of Eternal Faith 🛕
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
       Experience the divine energy of the Ganges, ancient temples, and timeless traditions. 
      </p>
    </div>
  );
};
const SkeletonFour = () => {
  return (
    <div>
      <p className="font-bold md:text-4xl text-xl text-white">
        Prem Mandir, Vrindavan 🛕
      </p>
      <p className="font-normal text-base text-white"></p>
      <p className="font-normal text-base my-4 max-w-lg text-neutral-200">
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
