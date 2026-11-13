"use client";

import React, { useState } from "react";
import { CreditCard, Loader2, ShieldCheck, AlertCircle } from "lucide-react";
import axios from "axios";
import { useRouter } from "next/navigation";
import { loadRazorpayScript } from "@/utils/loadRazorpay";

interface PaymentButtonProps {
  bookingId: number | string;
  amountINR?: number | string;
  packageTitle?: string;
  customerName?: string;
  customerEmail?: string;
  customerPhone?: string;
  onSuccess?: (paymentData: any) => void;
  onError?: (err: any) => void;
  className?: string;
  btnText?: string;
}

export default function PaymentButton({
  bookingId,
  amountINR,
  packageTitle,
  customerName,
  customerEmail,
  customerPhone,
  onSuccess,
  onError,
  className = "",
  btnText = "Pay with Razorpay",
}: PaymentButtonProps) {
  const router = useRouter();
  const [loading, setLoading] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");

  const handlePayment = async () => {
    setErrorMessage("");
    setLoading(true);

    try {
      const token = typeof window !== "undefined" ? localStorage.getItem("access_token") : null;
      if (!token) {
        router.push("/login");
        return;
      }

      // 1. Step 1: Create Order via Django Backend (Authoritative Server-side Price)
      const orderRes = await axios.post(
        "https://travellingwebsite-2.onrender.com/api/payments/create-order/",
        { booking_id: bookingId },
        { headers: { Authorization: `Bearer ${token}` } }
      );

      const orderData = orderRes.data;
      if (!orderData.success || !orderData.order_id) {
        throw new Error(orderData.error || "Failed to initialize payment order.");
      }

      // 2. Step 2: Load Razorpay Checkout Script
      const isLoaded = await loadRazorpayScript();
      if (!isLoaded) {
        throw new Error("Razorpay Checkout failed to load. Please check your internet connection.");
      }

      // 3. Step 3: Open Razorpay Test Mode Checkout
      const options = {
        key: orderData.key_id,
        amount: orderData.amount, // in paise
        currency: orderData.currency || "INR",
        name: "TripNova Holidays",
        description: `Booking #${bookingId} - ${orderData.package_title || packageTitle || "Expedition"}`,
        image: "/images/logo.png",
        order_id: orderData.order_id,
        prefill: {
          name: orderData.customer?.name || customerName || "",
          email: orderData.customer?.email || customerEmail || "",
          contact: orderData.customer?.phone || customerPhone || "",
        },
        theme: {
          color: "#ea580c", // TripNova brand saffron
        },
        modal: {
          ondismiss: () => {
            setLoading(false);
          },
        },
        handler: async (response: any) => {
          try {
            // 4. Step 4: Verify Payment Signature on Django Backend
            const verifyRes = await axios.post(
              "https://travellingwebsite-2.onrender.com/api/payments/verify/",
              {
                razorpay_order_id: response.razorpay_order_id,
                razorpay_payment_id: response.razorpay_payment_id,
                razorpay_signature: response.razorpay_signature,
                payment_method: "razorpay_checkout",
              },
              { headers: { Authorization: `Bearer ${token}` } }
            );

            if (verifyRes.data.success) {
              if (onSuccess) {
                onSuccess(verifyRes.data);
              } else {
                router.push(
                  `/payment/success?booking_id=${bookingId}&payment_id=${response.razorpay_payment_id}&order_id=${response.razorpay_order_id}&amount=${orderData.amount_inr}`
                );
              }
            } else {
              throw new Error(verifyRes.data.error || "Payment signature verification failed.");
            }
          } catch (verifyErr: any) {
            console.error("Payment verification failed:", verifyErr);
            const msg = verifyErr.response?.data?.error || verifyErr.message || "Verification failed.";
            setErrorMessage(msg);
            if (onError) onError(verifyErr);
            router.push(`/payment/failed?booking_id=${bookingId}&reason=${encodeURIComponent(msg)}`);
          } finally {
            setLoading(false);
          }
        },
      };

      const paymentObject = new (window as any).Razorpay(options);
      paymentObject.on("payment.failed", (response: any) => {
        console.error("Payment failed event:", response.error);
        const reason = response.error?.description || "Payment failed.";
        setErrorMessage(reason);
        setLoading(false);
        if (onError) onError(response.error);
        router.push(`/payment/failed?booking_id=${bookingId}&reason=${encodeURIComponent(reason)}`);
      });

      paymentObject.open();
    } catch (err: any) {
      console.error("Order initiation error:", err);
      const msg = err.response?.data?.error || err.message || "Failed to start payment.";
      setErrorMessage(msg);
      setLoading(false);
      if (onError) onError(err);
    }
  };

  return (
    <div className="w-full">
      {errorMessage && (
        <div className="mb-3 p-3 rounded-xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 text-xs flex items-center gap-2">
          <AlertCircle size={16} className="shrink-0" />
          <span>{errorMessage}</span>
        </div>
      )}

      <button
        type="button"
        onClick={handlePayment}
        disabled={loading}
        className={`w-full py-3.5 px-6 rounded-2xl font-poppins font-bold text-sm text-white bg-gradient-to-r from-orange-600 via-amber-600 to-orange-500 hover:from-orange-700 hover:to-amber-700 shadow-lg shadow-orange-500/25 active:scale-98 transition-all flex items-center justify-center gap-2.5 disabled:opacity-60 disabled:cursor-not-allowed cursor-pointer ${className}`}
      >
        {loading ? (
          <>
            <Loader2 size={18} className="animate-spin" />
            <span>Opening Razorpay Gateway...</span>
          </>
        ) : (
          <>
            <CreditCard size={18} />
            <span>{btnText}</span>
            {amountINR && <span className="bg-white/20 px-2 py-0.5 rounded-full text-xs font-mono">₹{amountINR}</span>}
          </>
        )}
      </button>

      <div className="mt-2 flex items-center justify-center gap-2 text-[11px] text-gray-500 dark:text-gray-400 font-poppins">
        <ShieldCheck size={13} className="text-emerald-500" />
        <span>Razorpay 256-bit Encrypted &bull; <strong>TEST MODE ONLY</strong></span>
      </div>
    </div>
  );
}

