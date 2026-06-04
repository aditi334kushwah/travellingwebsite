
import HeroSection from "@/components/home/HeroSection"
import PopularDestination from "@/components/home/PopularDestination"
import OneCard from "@/components/home/OneCard"
import ChooseTripNova from "@/components/home/ChooseTripNova"
import TestimonialCardSection from "@/components/home/TestimonialCard"
import HowItWorks from "@/components/home/BookTrip"
import { LayoutGridSection } from "@/components/LayoutGridSection"
import LastTestimonial from "@/components/home/LastTestimonial"

export default function Home() {
  return (
   <>
      
        <HeroSection />
        <PopularDestination />
        <OneCard />
        <ChooseTripNova />
        <HowItWorks />
        <TestimonialCardSection />
        <LayoutGridSection />
        <LastTestimonial />
      
   </>
  );
}
