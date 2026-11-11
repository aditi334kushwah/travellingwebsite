
import HeroSection from "@/components/home/HeroSection"
import HeroSearchWidget from "@/components/home/HeroSearchWidget"
import TrustStatsSection from "@/components/home/TrustStatsSection"
import HeroCarausalCard from "@/components/home/HomeCarausalCard"
import HeroPackage from "@/components/packages/HeroPackage"
import OneCard from "@/components/home/OneCard"
import ChooseTripNova from "@/components/home/ChooseTripNova"
import HowItWorks from "@/components/home/BookTrip"
import { LayoutGridSection } from "@/components/LayoutGridSection"
import TestimonialCardSection from "@/components/home/TestimonialCard"
import LastTestimonial from "@/components/home/LastTestimonial"
import NewsletterCTASection from "@/components/home/NewsletterCTASection"

export default function Home() {
  return (
    <main className="min-h-screen bg-[#fcfbf9] dark:bg-[#09090b] text-gray-900 dark:text-gray-100 overflow-x-hidden selection:bg-orange-500 selection:text-white">
      {/* 1. Cinematic Hero with slow-motion scenic video */}
      <HeroSection />

      {/* 2. Interactive Quick Search Floating Widget */}
      <HeroSearchWidget />

      {/* 3. Verified Metrics & Trust Stats */}
      <TrustStatsSection />

      {/* 4. Trending Destinations Horizontal Carousel */}
      <HeroCarausalCard />

      {/* 5. Featured Luxury Packages Showcase */}
      <HeroPackage />

      {/* 6. Curated Expeditions (Atmospheric Visual Storytelling) */}
      <OneCard />

      {/* 7. Why Choose TripNova (Value Proposition & Trust Pillars) */}
      <ChooseTripNova />

      {/* 8. How It Works (Simple 4-Step Booking Guide) */}
      <HowItWorks />

      {/* 9. Feel the Experience (Interactive Visual Photo Gallery) */}
      <LayoutGridSection />

      {/* 10. Verified Traveler Testimonials */}
      <TestimonialCardSection />

      {/* 11. Final Conversion Pitch */}
      <LastTestimonial />

      {/* 12. Newsletter & Privilege Club Discount CTA */}
      <NewsletterCTASection />
    </main>
  );
}
