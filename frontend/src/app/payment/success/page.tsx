"use client";

import React, { Suspense } from "react";
import { useSearchParams, useRouter } from "next/navigation";
import Link from "next/link";
import { CheckCircle2, ArrowRight, Download, Calendar, ShieldCheck, Home, FileText } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

function PaymentSuccessContent() {
  const searchParams = useSearchParams();
  const router = useRouter();

  const bookingId = searchParams.get("booking_id") || "N/A";
  const paymentId = searchParams.get("payment_id") || "pay_test_verified";
  const orderId = searchParams.get("order_id") || "order_test_verified";
  const amount = searchParams.get("amount") || "";

  return (
    <div className="max-w-xl mx-auto bg-white dark:bg-stone-900 rounded-3xl shadow-2xl p-6 sm:p-10 border border-stone-200 dark:border-stone-800 text-center">
      {/* Animated Check Badge */}
      <div className="w-20 h-20 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto mb-6 shadow-inner animate-in zoom-in-75 duration-300">
        <CheckCircle2 size={44} />
      </div>

      <span className="text-xs font-bold uppercase tracking-wider px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 font-poppins">
        Payment Verified & Confirmed
      </span>

      <h1 className="text-3xl sm:text-4xl font-bold font-playfair text-stone-900 dark:text-white mt-3 mb-2">
        Payment Successful!
      </h1>
      <p className="text-sm text-stone-600 dark:text-stone-300 font-poppins max-w-md mx-auto">
        Your travel reservation has been officially confirmed via Razorpay Test Gateway.
      </p>

      {/* Payment Receipt Box */}
      <div className="mt-8 p-5 rounded-2xl bg-stone-50 dark:bg-stone-800/50 border border-stone-200/80 dark:border-stone-700/60 text-left font-poppins text-xs sm:text-sm space-y-3">
        <div className="flex justify-between items-center pb-2.5 border-b border-stone-200 dark:border-stone-700">
          <span className="text-stone-500 dark:text-stone-400">Booking Reference</span>
          <span className="font-mono font-bold text-stone-900 dark:text-white">
            #TRIP-{String(bookingId).padStart(6, "0")}
          </span>
        </div>

        <div className="flex justify-between items-center pb-2.5 border-b border-stone-200 dark:border-stone-700">
          <span className="text-stone-500 dark:text-stone-400">Razorpay Payment ID</span>
          <span className="font-mono text-xs font-semibold text-orange-600 dark:text-orange-400 select-all">
            {paymentId}
          </span>
        </div>

        <div className="flex justify-between items-center pb-2.5 border-b border-stone-200 dark:border-stone-700">
          <span className="text-stone-500 dark:text-stone-400">Order ID</span>
          <span className="font-mono text-xs font-semibold text-stone-600 dark:text-stone-300 select-all">
            {orderId}
          </span>
        </div>

        {amount && (
          <div className="flex justify-between items-center pt-1 text-sm font-bold">
            <span className="text-stone-800 dark:text-stone-200">Amount Paid</span>
            <span className="text-base text-emerald-600 dark:text-emerald-400">₹{amount}</span>
          </div>
        )}
      </div>

      <div className="mt-4 flex items-center justify-center gap-1.5 text-xs text-stone-500 dark:text-stone-400 font-poppins">
        <ShieldCheck size={14} className="text-emerald-500" />
        <span>Simulated Transaction &bull; Razorpay Test Mode</span>
      </div>

      {/* Action Buttons */}
      <div className="mt-8 flex flex-col sm:flex-row gap-3 justify-center font-poppins">
        <Link
          href="/dashboard"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-gradient-to-r from-orange-600 to-amber-600 hover:from-orange-700 hover:to-amber-700 text-white font-bold text-sm shadow-lg shadow-orange-500/20 transition hover:scale-105 active:scale-95"
        >
          <FileText size={16} /> View in Dashboard
        </Link>
        <Link
          href="/"
          className="inline-flex items-center justify-center gap-2 px-6 py-3.5 rounded-2xl bg-stone-100 hover:bg-stone-200 dark:bg-stone-800 dark:hover:bg-stone-700 text-stone-800 dark:text-stone-200 font-semibold text-sm transition"
        >
          <Home size={16} /> Return to Home
        </Link>
      </div>
    </div>
  );
}

export default function PaymentSuccessPage() {
  return (
    <section className="min-h-screen pt-36 pb-20 px-4 bg-gradient-to-b from-[#fefbf6] via-[#fcfbf9] to-[#fcfbf9] dark:from-[#110e0c] dark:via-[#09090b] dark:to-[#09090b] flex items-center justify-center">
      <Suspense fallback={<div className="text-center py-12 text-stone-400">Loading receipt...</div>}>
        <PaymentSuccessContent />
      </Suspense>
    </section>
  );
}

