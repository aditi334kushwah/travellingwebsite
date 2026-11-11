"use client";

import React, { useState } from "react";
import { CheckCircle2, ShieldCheck, CreditCard, QrCode, Smartphone, Building2, X, Lock, ArrowRight, Loader2 } from "lucide-react";

interface RazorpayModalProps {
  isOpen: boolean;
  onClose: () => void;
  bookingData: {
    id: number | string;
    packageTitle?: string;
    packageCode?: string;
    name: string;
    email: string;
    amount: number;
  } | null;
  onPaymentSuccess: (paymentId: string) => void;
}

export default function RazorpayPaymentModal({
  isOpen,
  onClose,
  bookingData,
  onPaymentSuccess,
}: RazorpayModalProps) {
  const [paymentMethod, setPaymentMethod] = useState<"upi" | "card" | "netbanking">("upi");
  const [upiId, setUpiId] = useState("");
  const [cardNumber, setCardNumber] = useState("4111 2222 3333 4444");
  const [expiry, setExpiry] = useState("12/28");
  const [cvv, setCvv] = useState("888");
  const [cardName, setCardName] = useState(bookingData?.name || "Aditi Kushwah");
  const [processing, setProcessing] = useState(false);
  const [completed, setCompleted] = useState(false);
  const [txnId, setTxnId] = useState("");

  if (!isOpen || !bookingData) return null;

  const totalAmount = Number(bookingData.amount || 0);

  const handleSimulatePayment = () => {
    setProcessing(true);

    setTimeout(() => {
      const generatedPayId = `pay_rzp_${Math.random().toString(36).substring(2, 10).toUpperCase()}`;
      setTxnId(generatedPayId);
      setProcessing(false);
      setCompleted(true);

      // Trigger callback to update backend & UI
      setTimeout(() => {
        onPaymentSuccess(generatedPayId);
      }, 1200);
    }, 1800);
  };

  return (
    <div className="fixed inset-0 z-[10000] flex items-center justify-center bg-black/75 backdrop-blur-sm p-4 overflow-y-auto">
      <div className="relative w-full max-w-md bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 my-auto animate-in fade-in zoom-in-95 duration-200">
        
        {/* Header - Razorpay official branding style */}
        <div className="bg-[#0c2340] text-white p-5 flex items-center justify-between border-b border-blue-950">
          <div className="flex items-center gap-2.5">
            <div className="h-9 w-9 rounded-xl bg-blue-600 flex items-center justify-center font-bold text-lg text-white shadow-md">
              R
            </div>
            <div>
              <div className="flex items-center gap-1.5">
                <span className="font-bold tracking-tight text-white text-base">Razorpay</span>
                <span className="text-[10px] bg-amber-400 text-blue-950 font-bold px-1.5 py-0.2 rounded font-mono">
                  DEMO MODE
                </span>
              </div>
              <p className="text-xs text-gray-300">TripNova Travel Booking</p>
            </div>
          </div>

          <div className="flex items-center gap-2">
            <div className="text-right">
              <span className="text-xs text-gray-300 block">Amount</span>
              <span className="font-bold text-amber-400 text-base">₹{totalAmount.toLocaleString("en-IN")}</span>
            </div>
            {!completed && !processing && (
              <button
                type="button"
                onClick={onClose}
                className="p-1.5 text-gray-400 hover:text-white rounded-lg hover:bg-white/10 transition ml-2 cursor-pointer"
              >
                <X size={18} />
              </button>
            )}
          </div>
        </div>

        {completed ? (
          /* Payment Success State */
          <div className="p-8 text-center space-y-4">
            <div className="w-16 h-16 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-600 dark:text-emerald-400 flex items-center justify-center mx-auto shadow-inner animate-in zoom-in-75 duration-300">
              <CheckCircle2 size={36} />
            </div>
            <h3 className="text-2xl font-bold font-playfair text-gray-900 dark:text-white">
              Payment Successful!
            </h3>
            <p className="text-xs text-gray-500 dark:text-gray-400">
              Your transaction has been securely processed by Razorpay.
            </p>
            <div className="p-3 bg-gray-50 dark:bg-gray-800 rounded-xl text-xs font-mono text-gray-700 dark:text-gray-300 border border-gray-100 dark:border-gray-700">
              Transaction ID: <span className="font-bold text-blue-600 dark:text-blue-400">{txnId}</span>
            </div>
            <div className="text-xs text-emerald-600 dark:text-emerald-400 font-semibold flex items-center justify-center gap-1.5">
              <ShieldCheck size={14} /> Official Booking Voucher is now ready!
            </div>
          </div>
        ) : (
          /* Payment Selection Body */
          <div className="p-5 sm:p-6 space-y-5">
            {/* Package summary strip */}
            <div className="p-3 rounded-xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/50 flex justify-between items-center text-xs">
              <div>
                <span className="text-gray-500 dark:text-gray-400 block text-[10px] uppercase font-bold">Booking For</span>
                <span className="font-bold text-gray-900 dark:text-white">{bookingData.packageTitle || "Tour Package"}</span>
              </div>
              {bookingData.packageCode && (
                <span className="font-mono bg-white dark:bg-gray-800 px-2 py-0.5 rounded font-bold text-orange-600 dark:text-orange-400 border border-orange-200 dark:border-gray-700">
                  {bookingData.packageCode}
                </span>
              )}
            </div>

            {/* Payment Method Selector Tabs */}
            <div className="grid grid-cols-3 gap-2">
              <button
                type="button"
                onClick={() => setPaymentMethod("upi")}
                className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 text-xs font-semibold transition cursor-pointer ${
                  paymentMethod === "upi"
                    ? "border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <Smartphone size={18} />
                <span>UPI / QR</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("card")}
                className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 text-xs font-semibold transition cursor-pointer ${
                  paymentMethod === "card"
                    ? "border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <CreditCard size={18} />
                <span>Card</span>
              </button>

              <button
                type="button"
                onClick={() => setPaymentMethod("netbanking")}
                className={`p-2.5 rounded-xl border flex flex-col items-center justify-center gap-1 text-xs font-semibold transition cursor-pointer ${
                  paymentMethod === "netbanking"
                    ? "border-blue-600 bg-blue-50 dark:bg-blue-950/40 text-blue-600 dark:text-blue-400 shadow-sm"
                    : "border-gray-200 dark:border-gray-700 text-gray-600 dark:text-gray-400 hover:bg-gray-50 dark:hover:bg-gray-800"
                }`}
              >
                <Building2 size={18} />
                <span>Netbanking</span>
              </button>
            </div>

            {/* Method Content */}
            {paymentMethod === "upi" && (
              <div className="space-y-3">
                <div className="p-4 rounded-2xl bg-gray-50 dark:bg-gray-800 border border-gray-200 dark:border-gray-700 text-center">
                  <div className="w-32 h-32 mx-auto bg-white p-2 rounded-xl shadow-sm border border-gray-200 flex flex-col items-center justify-center">
                    <QrCode size={100} className="text-gray-900" />
                  </div>
                  <p className="text-[11px] text-gray-500 mt-2 font-medium">Scan with GPay, PhonePe, Paytm, or BHIM</p>
                </div>

                <div>
                  <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300 mb-1">Or enter UPI ID / VPA</label>
                  <input
                    type="text"
                    placeholder="user@okhdfcbank"
                    value={upiId}
                    onChange={(e) => setUpiId(e.target.value)}
                    className="w-full text-xs p-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            )}

            {paymentMethod === "card" && (
              <div className="space-y-3 text-xs">
                <div>
                  <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Card Number</label>
                  <input
                    type="text"
                    value={cardNumber}
                    onChange={(e) => setCardNumber(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 font-mono text-gray-900 dark:text-white"
                  />
                </div>
                <div className="grid grid-cols-2 gap-3">
                  <div>
                    <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Valid Thru</label>
                    <input
                      type="text"
                      value={expiry}
                      onChange={(e) => setExpiry(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono"
                    />
                  </div>
                  <div>
                    <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">CVV</label>
                    <input
                      type="password"
                      maxLength={4}
                      value={cvv}
                      onChange={(e) => setCvv(e.target.value)}
                      className="w-full p-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white font-mono"
                    />
                  </div>
                </div>
                <div>
                  <label className="block font-semibold text-gray-700 dark:text-gray-300 mb-1">Cardholder Name</label>
                  <input
                    type="text"
                    value={cardName}
                    onChange={(e) => setCardName(e.target.value)}
                    className="w-full p-2.5 rounded-xl border border-gray-300 dark:border-gray-700 bg-white dark:bg-gray-800 text-gray-900 dark:text-white"
                  />
                </div>
              </div>
            )}

            {paymentMethod === "netbanking" && (
              <div className="space-y-2">
                <label className="block text-xs font-semibold text-gray-700 dark:text-gray-300">Select Bank</label>
                <div className="grid grid-cols-2 gap-2 text-xs">
                  {["HDFC Bank", "State Bank of India", "ICICI Bank", "Axis Bank"].map((bank, idx) => (
                    <button
                      key={idx}
                      type="button"
                      className="p-2.5 border border-gray-200 dark:border-gray-700 rounded-xl hover:border-blue-500 hover:bg-blue-50 dark:hover:bg-blue-950/30 text-gray-800 dark:text-gray-200 text-left font-medium transition cursor-pointer"
                    >
                      {bank}
                    </button>
                  ))}
                </div>
              </div>
            )}

            {/* Pay Button */}
            <button
              type="button"
              disabled={processing}
              onClick={handleSimulatePayment}
              className="w-full py-3.5 bg-blue-600 hover:bg-blue-700 active:scale-[0.98] text-white rounded-xl font-bold text-sm shadow-lg shadow-blue-500/25 flex items-center justify-center gap-2 transition cursor-pointer disabled:opacity-50"
            >
              {processing ? (
                <>
                  <Loader2 size={18} className="animate-spin" />
                  <span>Processing ₹{totalAmount.toLocaleString("en-IN")}...</span>
                </>
              ) : (
                <>
                  <Lock size={15} />
                  <span>Pay ₹{totalAmount.toLocaleString("en-IN")}</span>
                  <ArrowRight size={16} />
                </>
              )}
            </button>

            {/* Trust Footer */}
            <div className="pt-2 flex items-center justify-center gap-3 text-[11px] text-gray-400">
              <span className="flex items-center gap-1">
                <ShieldCheck size={13} className="text-emerald-500" /> 256-bit SSL Encryption
              </span>
              <span>&bull;</span>
              <span>Razorpay Verified Merchant</span>
            </div>
          </div>
        )}
      </div>
    </div>
  );
}
