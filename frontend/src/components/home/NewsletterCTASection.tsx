"use client";

import { useState } from "react";
import { Mail, CheckCircle2, Send, Sparkles } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

export default function NewsletterCTASection() {
  const [email, setEmail] = useState("");
  const [subscribed, setSubscribed] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email) {
      setSubscribed(true);
      setEmail("");
      setTimeout(() => setSubscribed(false), 5000);
    }
  };

  return (
    <section className="py-20 sm:py-24 bg-gradient-to-b from-transparent to-slate-100/60 dark:to-gray-900/50">
      <div className="max-w-6xl mx-auto px-4 sm:px-6">
        <FadeUp>
          <div className="relative overflow-hidden rounded-3xl bg-gradient-to-br from-gray-900 via-gray-950 to-neutral-900 text-white p-8 sm:p-14 shadow-2xl border border-gray-800">
            {/* Background Glow Decorations */}
            <div className="absolute top-0 right-0 -mr-20 -mt-20 w-80 h-80 rounded-full bg-orange-500/20 blur-3xl pointer-events-none" />
            <div className="absolute bottom-0 left-0 -ml-20 -mb-20 w-80 h-80 rounded-full bg-amber-500/15 blur-3xl pointer-events-none" />

            <div className="relative z-10 max-w-2xl mx-auto text-center">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full bg-orange-500/20 text-orange-400 text-xs font-semibold uppercase tracking-wider mb-4 border border-orange-500/30">
                <Sparkles size={13} /> Exclusive Member Perks
              </span>

              <h2 className="text-3xl sm:text-4xl md:text-5xl font-playfair font-bold leading-tight">
                Get ₹2,500 Off On Your Next Journey
              </h2>

              <p className="mt-4 text-sm sm:text-base text-gray-300 font-poppins leading-relaxed">
                Subscribe to our curated newsletter for secret travel itineraries, seasonal discounts, and first access to new holiday packages across India.
              </p>

              {subscribed ? (
                <div className="mt-8 p-4 rounded-2xl bg-emerald-500/20 border border-emerald-500/40 text-emerald-300 inline-flex items-center gap-2 text-sm font-semibold animate-in fade-in zoom-in-95">
                  <CheckCircle2 size={18} />
                  <span>Thank you for joining! Your welcome discount code has been sent.</span>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="mt-8 flex flex-col sm:flex-row gap-3 max-w-md mx-auto">
                  <div className="relative flex-1">
                    <Mail className="absolute left-4 top-1/2 -translate-y-1/2 text-gray-400" size={18} />
                    <input
                      type="email"
                      required
                      placeholder="Enter your email address"
                      value={email}
                      onChange={(e) => setEmail(e.target.value)}
                      className="w-full pl-11 pr-4 py-3.5 rounded-2xl bg-white/10 backdrop-blur-md border border-white/20 text-white placeholder-gray-400 text-sm focus:outline-none focus:ring-2 focus:ring-orange-500"
                    />
                  </div>
                  <button
                    type="submit"
                    className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-500 to-amber-500 hover:from-orange-600 hover:to-amber-600 text-white font-semibold text-sm shadow-lg shadow-orange-500/30 transition hover:scale-105 active:scale-95 cursor-pointer"
                  >
                    <span>Subscribe</span>
                    <Send size={15} />
                  </button>
                </form>
              )}

              <p className="mt-4 text-xs text-gray-400">
                No spam ever. Unsubscribe at any time with one click.
              </p>
            </div>
          </div>
        </FadeUp>
      </div>
    </section>
  );
}
