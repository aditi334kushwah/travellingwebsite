"use client";

import React, { useState } from "react";
import { Printer, Download, X, CheckCircle2, MapPin, Calendar, Users, IndianRupee, Mail, Phone, Globe, Loader2, CreditCard } from "lucide-react";
import { generateBookingPDF } from "@/utils/generateBookingPDF";
import PaymentButton from "@/components/booking/PaymentButton";

export type BookingTicketData = {
  id: number | string;
  name: string;
  email: string;
  phone: string;
  country: string;
  number_of_people: number;
  travel_month: string;
  budget_per_person: string | number;
  special_requirements?: string;
  status: string;
  created_at: string;
  package_id?: number | string;
  package_code?: string;
  package_title?: string;
  package_location?: string;
  duration_days?: number;
  duration_nights?: number;
};

interface BookingTicketModalProps {
  booking: BookingTicketData | null;
  onClose: () => void;
}

export default function BookingTicketModal({ booking, onClose }: BookingTicketModalProps) {
  const [downloading, setDownloading] = useState(false);

  if (!booking) return null;

  const totalAmount =
    Number(booking.budget_per_person || 0) * Number(booking.number_of_people || 1);

  const handleDirectDownload = () => {
    try {
      setDownloading(true);
      generateBookingPDF(booking);
    } catch (err) {
      console.error("Direct PDF download failed:", err);
      // Fallback to print
      handlePrint();
    } finally {
      setTimeout(() => setDownloading(false), 800);
    }
  };

  const handlePrint = () => {
    // Generate clean isolated print window with full styling so all browsers print immediately with 100% guarantee
    const printContent = document.getElementById("printable-voucher");
    if (!printContent) {
      window.print();
      return;
    }

    const printWindow = window.open("", "_blank", "width=850,height=950");
    if (!printWindow) {
      window.print();
      return;
    }

    const totalEst = Number(booking.budget_per_person || 0) * Number(booking.number_of_people || 1);

    printWindow.document.write(`<!DOCTYPE html>
<html>
  <head>
    <meta charset="utf-8" />
    <title>Booking Voucher - #TRIP-${String(booking.id).padStart(6, "0")}</title>
    <style>
      @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@600;700&family=Poppins:wght@400;500;600;700&display=swap');
      * { margin: 0; padding: 0; box-sizing: border-box; }
      body {
        font-family: 'Poppins', system-ui, sans-serif;
        background: #ffffff;
        color: #0f172a;
        padding: 32px 24px;
        -webkit-print-color-adjust: exact;
        print-color-adjust: exact;
      }
      .voucher-card {
        max-width: 680px;
        margin-top: auto;
        border: 2px solid #e2e8f0;
        border-radius: 20px;
        padding: 32px;
        background: #ffffff;
      }
      .header {
        display: flex;
        justify-content: space-between;
        align-items: flex-start;
        padding-bottom: 20px;
        border-bottom: 2px dashed #cbd5e1;
      }
      .logo-title {
        font-family: 'Playfair Display', serif;
        font-size: 26px;
        font-weight: 700;
        color: #f97316;
      }
      .badge-official {
        display: inline-block;
        background: #ffedd5;
        color: #ea580c;
        font-size: 11px;
        font-weight: 700;
        padding: 3px 8px;
        border-radius: 9999px;
        margin-left: 8px;
      }
      .ref {
        font-size: 12px;
        color: #64748b;
        margin-top: 4px;
      }
      .status-badge {
        display: inline-block;
        background: #dcfce7;
        color: #15803d;
        font-size: 12px;
        font-weight: 700;
        padding: 4px 12px;
        border-radius: 9999px;
        text-transform: uppercase;
      }
      .date-issued {
        font-size: 11px;
        color: #94a3b8;
        margin-top: 4px;
        text-align: right;
      }
      .package-box {
        margin-top: 24px;
        padding: 20px;
        background: #fff7ed;
        border: 1px solid #fed7aa;
        border-radius: 16px;
      }
      .pkg-top {
        display: flex;
        justify-content: space-between;
        align-items: center;
      }
      .pkg-label {
        font-size: 11px;
        font-weight: 700;
        color: #ea580c;
        text-transform: uppercase;
        letter-spacing: 0.05em;
      }
      .pkg-id {
        background: #ffedd5;
        color: #9a3412;
        font-family: monospace;
        font-size: 12px;
        font-weight: 700;
        padding: 3px 10px;
        border-radius: 6px;
      }
      .pkg-name {
        font-family: 'Playfair Display', serif;
        font-size: 22px;
        font-weight: 700;
        color: #0f172a;
        margin-top: 6px;
      }
      .pkg-loc {
        font-size: 13px;
        color: #475569;
        margin-top: 4px;
      }
      .grid-2 {
        display: grid;
        grid-template-columns: 1fr 1fr;
        gap: 16px;
        margin-top: 20px;
      }
      .info-box {
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 14px;
        padding: 16px;
        font-size: 13px;
      }
      .box-title {
        font-size: 11px;
        font-weight: 700;
        color: #94a3b8;
        text-transform: uppercase;
        letter-spacing: 0.05em;
        margin-bottom: 8px;
      }
      .row {
        margin-top: 6px;
        color: #334155;
      }
      .row strong {
        color: #0f172a;
      }
      .total-row {
        display: flex;
        justify-content: space-between;
        align-items: center;
        margin-top: 10px;
        padding-top: 10px;
        border-top: 1px solid #e2e8f0;
      }
      .total-amount {
        font-size: 18px;
        font-weight: 700;
        color: #ea580c;
      }
      .special-box {
        margin-top: 16px;
        padding: 14px;
        background: #f8fafc;
        border: 1px solid #e2e8f0;
        border-radius: 12px;
        font-size: 12px;
        color: #475569;
      }
      .footer-note {
        margin-top: 28px;
        padding-top: 16px;
        border-top: 1px solid #e2e8f0;
        display: flex;
        justify-content: space-between;
        font-size: 11px;
        color: #64748b;
      }
      @media print {
        body { padding: 0; }
        .voucher-card { border: none; padding: 12px; }
      }
    </style>
  </head>
  <body>
    <div class="voucher-card">
      <div class="header">
        <div>
          <div>
            <span class="logo-title">TripNova</span>
            <span class="badge-official">OFFICIAL VOUCHER</span>
          </div>
          <p class="ref">Booking Reference: #TRIP-${String(booking.id).padStart(6, "0")}</p>
        </div>
        <div>
          <div class="status-badge">${booking.status || "CONFIRMED"}</div>
          <p class="date-issued">Issued: ${new Date(booking.created_at || Date.now()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}</p>
        </div>
      </div>

      <div class="package-box">
        <div class="pkg-top">
          <span class="pkg-label">Booked Package</span>
          ${booking.package_code ? `<span class="pkg-id">ID: ${booking.package_code}</span>` : ""}
        </div>
        <div class="pkg-name">${booking.package_title || "Scenic Travel Experience"}</div>
        ${booking.package_location ? `<div class="pkg-loc">📍 ${booking.package_location}</div>` : ""}
      </div>

      <div class="grid-2">
        <div class="info-box">
          <div class="box-title">Primary Traveler</div>
          <div style="font-weight: 600; font-size: 15px; margin-bottom: 6px;">${booking.name}</div>
          <div class="row">✉ ${booking.email}</div>
          <div class="row">📞 ${booking.phone}</div>
          <div class="row">🌐 ${booking.country}</div>
        </div>

        <div class="info-box">
          <div class="box-title">Trip Breakdown</div>
          <div class="row">📅 Travel Month: <strong>${booking.travel_month}</strong></div>
          <div class="row">👥 Guests: <strong>${booking.number_of_people} Person(s)</strong></div>
          <div class="row">₹ Rate: <strong>₹${booking.budget_per_person} / Person</strong></div>
          <div class="total-row">
            <span style="font-weight: 600;">Total Est.</span>
            <span class="total-amount">₹${totalEst}</span>
          </div>
        </div>
      </div>

      ${booking.special_requirements ? `
        <div class="special-box">
          <strong>Special Instructions:</strong> ${booking.special_requirements}
        </div>
      ` : ""}

      <div class="footer-note">
        <span>Please present this voucher or ID upon arrival.</span>
        <span>support@tripnova.com</span>
      </div>
    </div>
    <script>
      window.onload = function() {
        window.focus();
        window.print();
      };
    </script>
  </body>
</html>`);
    printWindow.document.close();
  };

  return (
    <div
      id="voucher-modal-overlay"
      className="fixed inset-0 z-[999] flex items-center justify-center bg-black/80 backdrop-blur-md p-4 sm:p-6 overflow-y-auto"
      style={{ zIndex: 9999 }}
    >
      <div
        id="voucher-modal-card"
        className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 my-auto animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top Action Bar (always visible at top of card) */}
        <div className="no-print print:hidden flex items-center justify-between px-6 py-4 bg-orange-50/70 dark:bg-gray-800/90 border-b border-orange-100 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-bold text-gray-800 dark:text-gray-100">
              Trip Voucher Ready
            </span>
          </div>

          <div className="flex items-center gap-2 sm:gap-3">
            <button
              type="button"
              onClick={handleDirectDownload}
              disabled={downloading}
              className="inline-flex items-center gap-1.5 sm:gap-2 px-3 sm:px-4 py-2 bg-gradient-to-r from-orange-500 to-amber-600 hover:from-orange-600 hover:to-amber-700 text-white rounded-xl text-xs sm:text-sm font-semibold shadow-md transition hover:scale-105 active:scale-95 cursor-pointer disabled:opacity-50"
            >
              {downloading ? <Loader2 size={16} className="animate-spin" /> : <Download size={16} />}
              <span>{downloading ? "Downloading..." : "1-Click Download PDF"}</span>
            </button>
            <button
              type="button"
              onClick={handlePrint}
              title="Print Voucher"
              className="hidden sm:inline-flex items-center gap-1.5 px-3 py-2 bg-gray-100 hover:bg-gray-200 dark:bg-gray-700 dark:hover:bg-gray-600 text-gray-700 dark:text-gray-200 rounded-xl text-xs font-semibold transition cursor-pointer"
            >
              <Printer size={15} />
              Print
            </button>
            <button
              type="button"
              onClick={onClose}
              className="p-2 text-gray-400 hover:text-gray-700 dark:hover:text-white rounded-xl hover:bg-gray-200 dark:hover:bg-gray-700 transition cursor-pointer"
            >
              <X size={20} />
            </button>
          </div>
        </div>

        {/* Printable Ticket Area */}
        <div id="printable-voucher" className="p-6 sm:p-10 font-poppins text-gray-800 bg-white">
          {/* Header */}
          <div className="flex flex-col sm:flex-row justify-between items-start sm:items-center gap-4 pb-6 border-b-2 border-dashed border-gray-200 dark:border-gray-700">
            <div>
              <div className="flex items-center gap-2">
                <span className="text-2xl font-bold font-playfair bg-gradient-to-r from-orange-500 to-amber-600 bg-clip-text text-transparent">
                  TripNova
                </span>
                <span className="text-xs bg-orange-100 dark:bg-orange-900/40 text-orange-600 dark:text-orange-300 px-2 py-0.5 rounded-full font-bold">
                  OFFICIAL VOUCHER
                </span>
              </div>
              <p className="text-xs text-gray-500 dark:text-gray-400 mt-1">
                Booking Reference: #TRIP-{String(booking.id).padStart(6, "0")}
              </p>
            </div>

            <div className="text-left sm:text-right">
              <span className="inline-flex items-center gap-1 text-xs font-semibold px-3 py-1 rounded-full bg-emerald-100 dark:bg-emerald-950/60 text-emerald-700 dark:text-emerald-300 uppercase tracking-wider">
                <CheckCircle2 size={13} /> {booking.status || "CONFIRMED"}
              </span>
              <p className="text-xs text-gray-400 dark:text-gray-500 mt-1">
                Issued: {new Date(booking.created_at || Date.now()).toLocaleDateString("en-IN", { day: "numeric", month: "short", year: "numeric" })}
              </p>
            </div>
          </div>

          {/* Package Highlight Box */}
          <div className="my-6 p-5 rounded-2xl bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-transparent border border-orange-200 dark:border-orange-900/30">
            <div className="flex items-center justify-between">
              <span className="text-xs uppercase font-bold text-orange-600 dark:text-orange-400 tracking-wider">
                Booked Package
              </span>
              {booking.package_code && (
                <span className="text-xs font-mono font-bold px-2.5 py-0.5 rounded-md bg-orange-200 dark:bg-orange-900/60 text-orange-800 dark:text-orange-200">
                  ID: {booking.package_code}
                </span>
              )}
            </div>
            <h3 className="text-xl sm:text-2xl font-bold font-playfair text-gray-900 dark:text-white mt-1">
              {booking.package_title || "Scenic Travel Experience"}
            </h3>
            {booking.package_location && (
              <p className="text-sm text-gray-600 dark:text-gray-300 flex items-center gap-1.5 mt-1">
                <MapPin size={15} className="text-orange-500" />
                {booking.package_location}
              </p>
            )}
          </div>

          {/* Traveler & Trip Details Grid */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 text-sm">
            <div className="space-y-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Primary Traveler
              </p>
              <div>
                <p className="font-semibold text-gray-900 dark:text-white">{booking.name}</p>
              </div>
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Mail size={14} className="text-orange-500" /> {booking.email}
              </p>
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Phone size={14} className="text-orange-500" /> {booking.phone}
              </p>
              <p className="flex items-center gap-2 text-gray-600 dark:text-gray-300">
                <Globe size={14} className="text-orange-500" /> {booking.country}
              </p>
            </div>

            <div className="space-y-3 p-4 rounded-xl bg-gray-50 dark:bg-gray-800/50 border border-gray-100 dark:border-gray-800">
              <p className="text-xs font-bold uppercase tracking-wider text-gray-400 dark:text-gray-500">
                Trip Breakdown
              </p>
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Calendar size={14} className="text-orange-500" />
                Travel Month: <strong className="text-gray-900 dark:text-white">{booking.travel_month}</strong>
              </p>
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <Users size={14} className="text-orange-500" />
                Guests: <strong className="text-gray-900 dark:text-white">{booking.number_of_people} Person(s)</strong>
              </p>
              <p className="flex items-center gap-2 text-gray-700 dark:text-gray-300">
                <IndianRupee size={14} className="text-orange-500" />
                Rate: <strong className="text-gray-900 dark:text-white">₹{booking.budget_per_person} / Person</strong>
              </p>
              <div className="pt-2 border-t border-gray-200 dark:border-gray-700 flex justify-between items-center">
                <span className="font-semibold text-gray-700 dark:text-gray-200">Total Est.</span>
                <span className="text-lg font-bold text-orange-600 dark:text-orange-400">₹{totalAmount}</span>
              </div>
            </div>
          </div>

          {booking.special_requirements && (
            <div className="mt-4 p-4 rounded-xl bg-slate-50 dark:bg-gray-800/40 border border-gray-200 dark:border-gray-700 text-xs">
              <span className="font-bold text-gray-700 dark:text-gray-300">Special Instructions:</span>
              <p className="text-gray-500 dark:text-gray-400 mt-1">{booking.special_requirements}</p>
            </div>
          )}

          {/* Razorpay Online Payment Integration (Test Mode) */}
          {!booking.status?.includes("PAID") && (
            <div className="no-print print:hidden mt-6 p-5 rounded-2xl bg-gradient-to-br from-orange-500/10 via-amber-500/5 to-white dark:from-stone-900 dark:via-stone-900 dark:to-stone-950 border-2 border-orange-200 dark:border-orange-900/40">
              <div className="flex flex-col sm:flex-row items-start sm:items-center justify-between gap-4">
                <div>
                  <div className="flex items-center gap-1.5 mb-1">
                    <span className="h-2 w-2 rounded-full bg-emerald-500 animate-pulse"></span>
                    <span className="text-xs font-bold text-orange-600 dark:text-orange-400 uppercase tracking-wider">
                      Instant Confirmation
                    </span>
                  </div>
                  <h4 className="font-playfair font-bold text-base text-gray-900 dark:text-white">
                    Complete Payment via Razorpay
                  </h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400">
                    Pay securely using UPI, Google Pay, PhonePe, Debit/Credit Cards.
                  </p>
                </div>
                <div className="w-full sm:w-auto shrink-0">
                  <PaymentButton
                    bookingId={booking.id}
                    amountINR={totalAmount}
                    packageTitle={booking.package_title}
                    customerName={booking.name}
                    customerEmail={booking.email}
                    customerPhone={booking.phone}
                    btnText={`Pay ₹${totalAmount.toLocaleString("en-IN")}`}
                  />
                </div>
              </div>
            </div>
          )}

          {/* Footer Voucher Notice */}
          <div className="mt-8 pt-4 border-t border-gray-200 dark:border-gray-700 flex flex-col sm:flex-row justify-between items-center text-center sm:text-left text-xs text-gray-400">
            <p>Please present this voucher or ID upon arrival.</p>
            <p className="mt-1 sm:mt-0 font-medium text-gray-600 dark:text-gray-300">support@tripnova.com</p>
          </div>
        </div>
      </div>
    </div>
  );
}

