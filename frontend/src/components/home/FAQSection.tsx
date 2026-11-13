'use client';
import { useState } from 'react';
import FadeUp from '@/components/ui/FadeUp';
import { Sparkles, Plus, X, HelpCircle } from 'lucide-react';

interface FAQItem {
  id: string;
  question: string;
  answer: string;
  category: string;
}

const faqs: FAQItem[] = [
  {
    id: "faq-1",
    category: "About TripNova",
    question: "What is TripNova and how does it plan my holiday across India?",
    answer: "TripNova is an end-to-end travel platform that curates, organizes, and manages complete multi-day holiday packages across India. From verified hotel accommodations and dedicated private cabs with local chauffeurs to day-wise itineraries, instant online booking, and 24/7 on-ground assistance, we handle every detail so you travel stress-free.",
  },
  {
    id: "faq-2",
    category: "Booking & Payments",
    question: "How does the online booking and payment process work?",
    answer: "Booking a tour on TripNova takes less than 2 minutes. Simply choose your destination package, select your preferred travel dates, and confirm your reservation via our secure payment gateway. We support UPI, QR Code scanning, debit/credit cards, and net banking with 100% upfront pricing and zero hidden surcharges.",
  },
  {
    id: "faq-3",
    category: "Vouchers & Confirmation",
    question: "How do I get my booking voucher and travel details?",
    answer: "As soon as your booking is confirmed, an official verifiable PDF travel voucher is generated with 1-click direct download to your device. The voucher contains your unique booking ID, package itinerary, hotel check-in details, chauffeur contact information, and our 24/7 emergency helpline.",
  },
  {
    id: "faq-4",
    category: "Customization",
    question: "Can I customize the day-wise itinerary or hotel category?",
    answer: "Yes, absolutely! While our packages have pre-tested optimal itineraries, our dedicated travel concierge can tailor your schedule, upgrade hotel tiers (from boutique heritage havelis to luxury camps or 5-star resorts), or adjust pickup/drop locations based on your family or group requirements.",
  },
  {
    id: "faq-5",
    category: "On-Trip Support",
    question: "What kind of support is available during the actual journey?",
    answer: "You receive continuous 24/7 dedicated concierge assistance via WhatsApp and direct phone call throughout your tour. Your dedicated trip coordinator oversees flight/train pickups, hotel check-ins, local entry passes, and remains on standby for any real-time adjustments or roadside emergencies.",
  },
  {
    id: "faq-6",
    category: "Cancellations & Safety",
    question: "What is TripNova's cancellation and refund policy?",
    answer: "We offer traveler-friendly flexible cancellation policies. Depending on how many days prior to the travel date you notify us, refunds are processed transparently back to your original payment method. All our drivers are verified, and vehicles are sanitized with full commercial passenger permits.",
  },
];

export default function FAQSection() {
  const [openId, setOpenId] = useState<string | null>("faq-1");

  const toggleFAQ = (id: string) => {
    setOpenId((prev) => (prev === id ? null : id));
  };

  return (
    <section className="relative w-full py-16 sm:py-24 bg-[#fcfbf9] dark:bg-[#09090b]">
      
      {/* Subtle grid pattern background matching user's design */}
      <div className="absolute inset-0 bg-[linear-gradient(to_right,#8080800a_1px,transparent_1px),linear-gradient(to_bottom,#8080800a_1px,transparent_1px)] bg-[size:28px_28px] pointer-events-none" />

      <div className="relative z-10 max-w-4xl mx-auto px-4 sm:px-6">
        
        {/* Section Header */}
        <div className="text-center mb-10 sm:mb-14">
          <FadeUp>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full text-xs font-semibold uppercase tracking-wider bg-orange-500/10 text-orange-600 dark:text-orange-400 border border-orange-500/20 mb-3">
              <HelpCircle size={13} className="text-orange-500" /> Frequently Asked Questions
            </span>
          </FadeUp>

          <FadeUp delay={0.1}>
            <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold font-playfair text-stone-900 dark:text-stone-100 tracking-tight">
              Got Questions? We&apos;ve Got Answers
            </h2>
          </FadeUp>

          <FadeUp delay={0.2}>
            <p className="mt-3 text-xs sm:text-base text-stone-600 dark:text-stone-400 font-poppins max-w-xl mx-auto font-light leading-relaxed">
              Everything you need to know about TripNova, booking packages, direct PDF vouchers, and on-ground concierge support.
            </p>
          </FadeUp>
        </div>

        {/* Accordion List */}
        <div className="space-y-4">
          {faqs.map((faq, idx) => {
            const isOpen = openId === faq.id;
            return (
              <FadeUp key={faq.id} delay={idx * 0.06}>
                <div
                  className={`rounded-3xl border transition-all duration-300 ${
                    isOpen
                      ? "bg-white dark:bg-stone-900 border-stone-300/80 dark:border-stone-700 shadow-xl shadow-stone-200/50 dark:shadow-black/50"
                      : "bg-white/80 dark:bg-stone-900/60 border-stone-200/80 dark:border-stone-800/80 hover:border-orange-500/40 hover:bg-white dark:hover:bg-stone-900"
                  }`}
                >
                  {/* Clickable Header Button */}
                  <button
                    type="button"
                    onClick={() => toggleFAQ(faq.id)}
                    aria-expanded={isOpen}
                    className="w-full flex items-center justify-between p-5 sm:p-6 text-left cursor-pointer gap-4 transition-colors"
                  >
                    <span className="text-base sm:text-lg font-bold font-playfair text-stone-900 dark:text-stone-100 leading-snug">
                      {faq.question}
                    </span>

                    {/* Circular toggle pill */}
                    <div
                      className={`w-9 h-9 sm:w-10 sm:h-10 rounded-full flex items-center justify-center shrink-0 transition-transform duration-300 ${
                        isOpen
                          ? "bg-[#09090b] dark:bg-white text-white dark:text-[#09090b] rotate-90"
                          : "bg-stone-900 dark:bg-stone-100 text-white dark:text-stone-900 hover:scale-105"
                      }`}
                    >
                      {isOpen ? <X size={18} strokeWidth={2.5} /> : <Plus size={18} strokeWidth={2.5} />}
                    </div>
                  </button>

                  {/* Smooth Expandable Content */}
                  {isOpen && (
                    <div className="px-5 sm:px-6 pb-6 pt-1 text-xs sm:text-sm text-stone-600 dark:text-stone-300 font-poppins leading-relaxed border-t border-stone-100 dark:border-stone-800/80 mt-1 animate-fadeIn">
                      <p>{faq.answer}</p>
                    </div>
                  )}
                </div>
              </FadeUp>
            );
          })}
        </div>

      </div>
    </section>
  );
}

