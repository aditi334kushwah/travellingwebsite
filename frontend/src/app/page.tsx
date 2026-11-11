
import HeroSection from "@/components/home/HeroSection"
import HeroSearchWidget from "@/components/home/HeroSearchWidget"
import TrustStatsSection from "@/components/home/TrustStatsSection"
import NewsletterCTASection from "@/components/home/NewsletterCTASection"
// import PopularDestination from "@/components/home/PopularDestination"
import OneCard from "@/components/home/OneCard"
import ChooseTripNova from "@/components/home/ChooseTripNova"
import TestimonialCardSection from "@/components/home/TestimonialCard"
import HowItWorks from "@/components/home/BookTrip"
import { LayoutGridSection } from "@/components/LayoutGridSection"
import LastTestimonial from "@/components/home/LastTestimonial"
import HeroPackage from "@/components/packages/HeroPackage"
import HeroCarausalCard from "@/components/home/HomeCarausalCard"


export default function Home() {
  return (
   <>
      
        <HeroSection />
        <HeroSearchWidget />
        <TrustStatsSection />
        <HeroPackage />
        <HeroCarausalCard />
        <OneCard />
        <ChooseTripNova />
        <HowItWorks />
        <TestimonialCardSection />
        <LayoutGridSection />
        <LastTestimonial />
        <NewsletterCTASection />
      
   </>
  );
}
