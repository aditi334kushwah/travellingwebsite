'use client';
import PackagesPage from "./DestinationCard";
import { SlidersHorizontal } from "lucide-react";


const PopularDestination = () => {



  return (
    <>
     

      <div className='flex flex-col justify-center align-center mt-25'>
        <div className='flex justify-center align-center mb-5'>
           
      
      
           <span className='bg-transparent text-black backdrop-blur-2xl rounded-full border text-sm border-gray-200 p-3 font-poppins'>
              Pure Adventure
           </span>
           <div className="bg-white/20 backdrop-blur-md p-3 w-fit border border-gray-200 rounded-full">
                <SlidersHorizontal className="text-black w-5 h-5" />
           </div>
         </div>

         <h2 className="text-3xl font-playfair text-center mb-2">
           Popular Destinations
         </h2>

         <div className="mb-5  text-center">
          <span className="font-poppins">
             At TriNova, we specialize in creating personalized travel experiences across India.
          </span>
         </div>
      </div>
    
      <div>
        <PackagesPage />
      </div>

      
    </>
  );
};

export default PopularDestination;