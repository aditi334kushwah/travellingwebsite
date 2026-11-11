"use client";

import React from "react";
import { Printer, X, CheckCircle2, MapPin, Calendar, Users, IndianRupee, Mail, Phone, Globe } from "lucide-react";

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
  if (!booking) return null;

  const totalAmount =
    Number(booking.budget_per_person || 0) * Number(booking.number_of_people || 1);

  const handlePrint = () => {
    // Direct native browser print using optimized @media print stylesheet
    window.print();
  };

  return (
    <div
      id="voucher-modal-overlay"
      className="fixed inset-0 z-[100] flex items-center justify-center bg-black/70 backdrop-blur-md p-4 overflow-y-auto"
    >
      <div
        id="voucher-modal-card"
        className="relative w-full max-w-2xl bg-white dark:bg-gray-900 rounded-3xl shadow-2xl overflow-hidden border border-gray-200 dark:border-gray-800 my-8 animate-in fade-in zoom-in-95 duration-200"
      >
        {/* Top Action Bar (hidden when printing) */}
        <div className="no-print print:hidden flex items-center justify-between px-6 py-4 bg-gray-50 dark:bg-gray-800/80 border-b border-gray-200 dark:border-gray-700">
          <div className="flex items-center gap-2">
            <span className="h-3 w-3 rounded-full bg-emerald-500 animate-pulse"></span>
            <span className="text-sm font-semibold text-gray-800 dark:text-gray-100">
              Trip Voucher Ready
            </span>
          </div>

          <div className="flex items-center gap-3">
            <button
              type="button"
              onClick={handlePrint}
              className="inline-flex items-center gap-2 px-4 py-2 bg-orange-500 hover:bg-orange-600 text-white rounded-xl text-sm font-semibold shadow-md transition hover:scale-105 active:scale-95 cursor-pointer"
            >
              <Printer size={16} />
              Print / Save PDF
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

