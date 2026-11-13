"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { XCircle, RefreshCw, ArrowLeft, HelpCircle } from "lucide-react";

function PaymentFailedContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const bookingId = searchParams.get("booking_id") || "";
  const reason = searchParams.get("reason") || "The payment transaction could not be completed.";

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-stone-900 rounded-3xl shadow-2xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 text-center">
      <div className="w-20 h-20 rounded-full bg-red-100 dark:bg-red-950/60 text-red-600 dark:text-red-400 flex items-center justify-center mx-auto mb-6 shadow-inner animate-in zoom-in-75 duration-300">
        <XCircle size={44} />
      </div>

      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300 font-poppins">
        Transaction Unsuccessful
      </span>

      <h1 className="text-3xl sm:text-4xl font-bold font-playfair text-stone-900 dark:text-white mt-3 mb-2">
        Payment Failed
      </h1>
      <p className="text-sm text-stone-600 dark:text-stone-300 font-poppins max-w-md mx-auto">
        Don&apos;t worry, no amount was charged. Your booking reservation is still preserved as pending.
      </p>

      {/* Error Details */}
      <div className="mt-8 p-5 rounded-2xl bg-red-50/70 dark:bg-red-950/30 border border-red-200/80 dark:border-red-900/50 text-left font-poppins text-xs sm:text-sm space-y-2.5">
        <div className="flex justify-between items-center">
          <span className="text-stone-500 dark:text-stone-400">Booking Reference</span>
          <span className="font-mono font-bold text-stone-900 dark:text-white">
            {bookingId ? `#TRIP-${String(bookingId).padStart(6, "0")}` : "N/A"}
          </span>
        </div>
        <div>
          <span className="text-stone-500 dark:text-stone-400 block mb-1">Reason:</span>
          <p className="text-red-700 dark:text-red-300 font-medium bg-white/60 dark:bg-stone-900/60 p-2.5 rounded-xl border border-red-200/50 dark:border-red-900/30">
            {reason}
          </p>
        </div>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center font-poppins">
        {bookingId ? (
          <button
            type="button"
            onClick={() => router.push(`/booking?packageId=${bookingId}`)}
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm shadow-lg shadow-orange-500/20 transition hover:scale-105 active:scale-95 cursor-pointer"
          >
            <RefreshCw size={16} /> Retry Payment
          </button>
        ) : (
          <Link
            href="/packages"
            className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm shadow-lg shadow-orange-500/20 transition hover:scale-105 active:scale-95"
          >
            <RefreshCw size={16} /> Explore Packages
          </Link>
        )}
        <Link
          href="/contact"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-semibold text-sm transition"
        >
          <HelpCircle size={16} /> Contact Support
        </Link>
      </div>
    </div>
  );
}

export default function PaymentFailedPage() {
  return (
    <section className="min-h-screen pt-36 pb-20 px-4 bg-gradient-to-b from-[#fefbf6] via-[#fcfbf9] to-[#fcfbf9] dark:from-[#110e0c] dark:via-[#09090b] dark:to-[#09090b] flex items-center justify-center">
      <Suspense fallback={<div className="text-center py-12 text-stone-400">Loading details...</div>}>
        <PaymentFailedContent />
      </Suspense>
    </section>
  );
}

