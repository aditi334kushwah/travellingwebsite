import HeroSection from "@/components/home/HeroSection"
import HeroSearchWidget from "@/components/home/HeroSearchWidget"
import TrustStatsSection from "@/components/home/TrustStatsSection"
import TravelConceptSection from "@/components/home/TravelConceptSection"
import HeroCarausalCard from "@/components/home/HomeCarausalCard"
import HeroPackage from "@/components/packages/HeroPackage"
import OneCard from "@/components/home/OneCard"
import ChooseTripNova from "@/components/home/ChooseTripNova"
import HowItWorks from "@/components/home/BookTrip"
import { LayoutGridSection } from "@/components/LayoutGridSection"
import TestimonialCardSection from "@/components/home/TestimonialCard"
import FAQSection from "@/components/home/FAQSection"
import LastTestimonial from "@/components/home/LastTestimonial"

export default function Home() {
  return (
    <main className="min-h-screen bg-transparent text-gray-900 dark:text-gray-100 overflow-x-hidden selection:bg-orange-500 selection:text-white relative">
      {/* 1. Cinematic Hero with slow-motion scenic video */}
      <HeroSection />

      {/* 2. Interactive Quick Search Floating Widget */}
      <HeroSearchWidget />

      {/* 3. Verified Metrics & Trust Stats */}
      <TrustStatsSection />

      {/* 4. Travel Concept Design (Digital Boarding Pass, Passport & Seamless Travel) - EXACTLY BEFORE EXPLORE DESTINATIONS */}
      <TravelConceptSection />

      {/* 5. Trending Destinations Continuous Infinite Marquee Carousel */}
      <HeroCarausalCard />

      {/* 6. Featured Luxury Packages Showcase */}
      <HeroPackage />

      {/* 7. Curated Expeditions (Atmospheric Visual Storytelling) */}
      <OneCard />

      {/* 8. Why Choose TripNova (Value Proposition & Trust Pillars) */}
      <ChooseTripNova />

      {/* 9. How It Works (Simple 4-Step Booking Guide) */}
      <HowItWorks />

      {/* 10. Feel the Experience (Interactive Visual Photo Gallery) */}
      <LayoutGridSection />

      {/* 11. Frequently Asked Questions (Interactive Accordion) */}
      <FAQSection />

      {/* 12. Verified Traveler Testimonials */}
      <TestimonialCardSection />

      {/* 13. Final Conversion Pitch */}
      <LastTestimonial />
    </main>
  );
}
