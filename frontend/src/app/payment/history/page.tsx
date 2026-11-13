"use client";

import React, { useEffect, useState } from "react";
import axios from "axios";
import Link from "next/link";
import { CreditCard, CheckCircle2, XCircle, Clock, ArrowLeft, ShieldCheck, Download, RefreshCw, FileText } from "lucide-react";
import FadeUp from "@/components/ui/FadeUp";

interface PaymentRecord {
  id: number;
  razorpay_order_id: string;
  razorpay_payment_id?: string;
  amount: string;
  currency: string;
  status: string;
  payment_method?: string;
  created_at: string;
  booking_details?: {
    id: number;
    name: string;
    travel_month: string;
    number_of_people: number;
    package_details?: {
      title: string;
      location: string;
      package_code?: string;
    };
  };
}

export default function PaymentHistoryPage() {
  const [payments, setPayments] = useState<PaymentRecord[]>([]);
  const [loading, setLoading] = useState(true);

  const fetchHistory = async () => {
    setLoading(true);
    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
      if (!token) return;
      const res = await axios.get("https://travellingwebsite-2.onrender.com/api/payments/history/", {
        headers: { Authorization: `Bearer ${token}` },
      });
      setPayments(res.data?.results || []);
    } catch (e) {
      console.error("Failed to load payment history:", e);
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    fetchHistory();
  }, []);

  return (
    <div className="min-h-screen pt-32 pb-20 px-4 bg-[#fcfbf9] dark:bg-[#09090b] text-stone-900 dark:text-white">
      <div className="max-w-5xl mx-auto">
        {/* Header */}
        <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4 mb-8">
          <div>
            <Link
              href="/dashboard"
              className="inline-flex items-center gap-1.5 text-xs text-orange-600 dark:text-orange-400 font-poppins font-semibold mb-2 hover:underline"
            >
              <ArrowLeft size={14} /> Back to Dashboard
            </Link>
            <h1 className="text-3xl sm:text-4xl font-bold font-playfair tracking-tight">
              Payment & Transaction History
            </h1>
            <p className="text-xs sm:text-sm text-stone-500 dark:text-stone-400 font-poppins mt-1">
              All Razorpay test transactions, orders, and verified settlement receipts.
            </p>
          </div>

          <button
            onClick={fetchHistory}
            className="px-4 py-2 rounded-xl border border-stone-200 dark:border-stone-800 text-xs font-semibold hover:bg-stone-100 dark:hover:bg-stone-800 transition flex items-center gap-1.5 font-poppins cursor-pointer"
          >
            <RefreshCw size={13} /> Refresh History
          </button>
        </div>

        {/* Security / Test Mode Notice */}
        <div className="mb-6 p-4 rounded-2xl bg-amber-50 dark:bg-amber-950/40 border border-amber-200 dark:border-amber-900/50 flex items-center gap-3 text-xs text-amber-800 dark:text-amber-200 font-poppins">
          <ShieldCheck size={18} className="text-amber-600 shrink-0" />
          <span>
            <strong>Razorpay Test Mode Active:</strong> All transactions listed below are simulated for verification and testing. No real cards or funds are debited.
          </span>
        </div>

        {/* History Table / Cards */}
        {loading ? (
          <div className="text-center py-20 text-stone-400 font-poppins">Loading payment records...</div>
        ) : payments.length === 0 ? (
          <div className="p-12 text-center bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-sm">
            <CreditCard size={40} className="text-stone-300 dark:text-stone-600 mx-auto mb-3" />
            <h3 className="font-playfair font-bold text-lg text-stone-800 dark:text-stone-200">No Payments Recorded Yet</h3>
            <p className="text-xs text-stone-500 dark:text-stone-400 max-w-sm mx-auto mt-1 mb-4 font-poppins">
              Complete a simulated booking payment using the Pay Now button to see real-time verified records here.
            </p>
            <Link
              href="/packages"
              className="inline-block px-5 py-2.5 rounded-xl bg-orange-600 text-white font-bold text-xs font-poppins hover:bg-orange-700 transition"
            >
              Browse Packages
            </Link>
          </div>
        ) : (
          <div className="bg-white dark:bg-stone-900 rounded-3xl border border-stone-200 dark:border-stone-800 shadow-xl overflow-hidden">
            <div className="overflow-x-auto">
              <table className="w-full text-left text-xs sm:text-sm font-poppins">
                <thead className="bg-stone-50 dark:bg-stone-800/60 uppercase text-[11px] tracking-wider text-stone-500 dark:text-stone-400 border-b border-stone-200 dark:border-stone-800">
                  <tr>
                    <th className="px-5 py-4">Transaction / Order</th>
                    <th className="px-5 py-4">Package / Traveler</th>
                    <th className="px-5 py-4">Amount</th>
                    <th className="px-5 py-4">Status</th>
                    <th className="px-5 py-4">Date</th>
                  </tr>
                </thead>
                <tbody className="divide-y divide-stone-100 dark:divide-stone-800">
                  {payments.map((p) => {
                    const isSuccess = p.status.toLowerCase() === "successful";
                    const isFailed = p.status.toLowerCase() === "failed";

                    return (
                      <tr key={p.id} className="hover:bg-stone-50/70 dark:hover:bg-stone-800/40 transition">
                        <td className="px-5 py-4">
                          <p className="font-mono font-bold text-xs text-stone-900 dark:text-white">
                            {p.razorpay_payment_id || p.razorpay_order_id}
                          </p>
                          <span className="text-[11px] text-stone-400 block font-mono">
                            Order: {p.razorpay_order_id}
                          </span>
                        </td>
                        <td className="px-5 py-4">
                          <p className="font-semibold text-stone-800 dark:text-stone-200">
                            {p.booking_details?.package_details?.title || "Custom Package"}
                          </p>
                          <span className="text-[11px] text-stone-400">
                            Traveler: {p.booking_details?.name || "Self"}
                          </span>
                        </td>
                        <td className="px-5 py-4 font-bold text-stone-900 dark:text-white">
                          ₹{Number(p.amount).toLocaleString("en-IN")}
                        </td>
                        <td className="px-5 py-4">
                          <span
                            className={`inline-flex items-center gap-1 text-[11px] font-bold px-2.5 py-1 rounded-full ${
                              isSuccess
                                ? "bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300"
                                : isFailed
                                ? "bg-red-100 dark:bg-red-950/60 text-red-700 dark:text-red-300"
                                : "bg-amber-100 dark:bg-amber-950/60 text-amber-700 dark:text-amber-300"
                            }`}
                          >
                            {isSuccess ? <CheckCircle2 size={12} /> : isFailed ? <XCircle size={12} /> : <Clock size={12} />}
                            {p.status.toUpperCase()}
                          </span>
                        </td>
                        <td className="px-5 py-4 text-xs text-stone-500 dark:text-stone-400">
                          {new Date(p.created_at).toLocaleDateString("en-IN", {
                            day: "numeric",
                            month: "short",
                            year: "numeric",
                          })}
                        </td>
                      </tr>
                    );
                  })}
                </tbody>
              </table>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}

