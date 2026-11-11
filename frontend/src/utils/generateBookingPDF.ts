import { jsPDF } from "jspdf";
import { BookingTicketData } from "@/components/booking/BookingTicketModal";

export function generateBookingPDF(booking: BookingTicketData) {
  const doc = new jsPDF({
    orientation: "portrait",
    unit: "mm",
    format: "a4",
  });

  const totalAmount =
    Number(booking.budget_per_person || 0) * Number(booking.number_of_people || 1);

  // Background Canvas / Frame
  doc.setFillColor(253, 250, 246);
  doc.rect(0, 0, 210, 297, "F");

  // Top Header Card (Gradient-like Solid Warm Orange)
  doc.setFillColor(234, 88, 12); // #ea580c
  doc.roundedRect(14, 14, 182, 38, 4, 4, "F");

  // Header Brand Name
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "bold");
  doc.setFontSize(24);
  doc.text("TripNova", 22, 28);

  // Header Subtitle Badge
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setFillColor(255, 255, 255);
  doc.roundedRect(22, 33, 42, 6, 2, 2, "F");
  doc.setTextColor(234, 88, 12);
  doc.text("OFFICIAL TRAVEL VOUCHER", 24, 37.5);

  // Status Badge on Header Right
  doc.setFillColor(220, 252, 231); // light green
  doc.roundedRect(148, 22, 38, 8, 2, 2, "F");
  doc.setTextColor(22, 101, 52);
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.text(booking.status || "CONFIRMED", 152, 27.5);

  // Booking Reference
  doc.setFontSize(9);
  doc.setTextColor(255, 255, 255);
  doc.setFont("helvetica", "normal");
  const refText = `Reference: #TRIP-${String(booking.id).padStart(6, "0")}`;
  doc.text(refText, 148, 36);

  // Package Card
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(254, 215, 170); // orange border
  doc.setLineWidth(0.6);
  doc.roundedRect(14, 58, 182, 38, 4, 4, "FD");

  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(234, 88, 12);
  doc.text("BOOKED TRAVEL PACKAGE", 22, 67);

  if (booking.package_code) {
    doc.setFillColor(255, 237, 213);
    doc.roundedRect(145, 62, 42, 7, 2, 2, "F");
    doc.setTextColor(154, 52, 18);
    doc.setFontSize(9);
    doc.text(`ID: ${booking.package_code}`, 148, 67);
  }

  doc.setFontSize(18);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  doc.text(booking.package_title || "Scenic Travel Experience", 22, 77);

  if (booking.package_location) {
    doc.setFontSize(10);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text(`Location: ${booking.package_location}`, 22, 85);
  }

  // 2-Column Details: Primary Traveler & Trip Breakdown
  // Column 1: Primary Traveler
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(14, 102, 88, 70, 4, 4, "FD");

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(234, 88, 12);
  doc.text("PRIMARY TRAVELER", 22, 112);

  doc.setFontSize(14);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  doc.text(booking.name || "N/A", 22, 122);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text(`Email: ${booking.email || "N/A"}`, 22, 132);
  doc.text(`Phone: ${booking.phone || "N/A"}`, 22, 142);
  doc.text(`Country: ${booking.country || "India"}`, 22, 152);

  // Column 2: Trip Breakdown
  doc.roundedRect(108, 102, 88, 70, 4, 4, "FD");

  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(234, 88, 12);
  doc.text("TRIP BREAKDOWN", 116, 112);

  doc.setFontSize(10);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(71, 85, 105);
  doc.text(`Travel Month: ${booking.travel_month || "Upcoming"}`, 116, 122);
  doc.text(`Total Guests: ${booking.number_of_people || 1} Person(s)`, 116, 132);
  doc.text(`Rate / Person: Rs. ${booking.budget_per_person || 0}`, 116, 142);

  // Estimated Total Box
  doc.setFillColor(255, 247, 237);
  doc.roundedRect(114, 150, 76, 14, 3, 3, "F");
  doc.setFontSize(10);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  doc.text("Total Est.:", 118, 159);
  doc.setFontSize(13);
  doc.setTextColor(234, 88, 12);
  doc.text(`Rs. ${totalAmount.toLocaleString("en-IN")}`, 148, 160);

  // Special Requirements Box
  let currentY = 178;
  if (booking.special_requirements) {
    doc.setFillColor(255, 255, 255);
    doc.setDrawColor(226, 232, 240);
    doc.roundedRect(14, currentY, 182, 26, 4, 4, "FD");

    doc.setFontSize(9);
    doc.setFont("helvetica", "bold");
    doc.setTextColor(234, 88, 12);
    doc.text("SPECIAL INSTRUCTIONS", 22, currentY + 8);

    doc.setFontSize(9);
    doc.setFont("helvetica", "normal");
    doc.setTextColor(71, 85, 105);
    doc.text(
      doc.splitTextToSize(booking.special_requirements, 166),
      22,
      currentY + 16
    );
    currentY += 32;
  }

  // Terms & Instructions
  doc.setFillColor(255, 255, 255);
  doc.setDrawColor(226, 232, 240);
  doc.roundedRect(14, currentY, 182, 38, 4, 4, "FD");

  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(15, 23, 42);
  doc.text("IMPORTANT TRAVELER GUIDELINES", 22, currentY + 8);

  doc.setFontSize(8.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(100, 116, 139);
  doc.text("1. Please present this official voucher and a valid government ID upon check-in.", 22, currentY + 16);
  doc.text("2. Free cancellation is applicable up to 48 hours prior to the scheduled departure.", 22, currentY + 23);
  doc.text("3. For any changes, emergency support, or itinerary requests, contact concierge below.", 22, currentY + 30);

  // Footer Note
  doc.setFontSize(9);
  doc.setFont("helvetica", "bold");
  doc.setTextColor(154, 52, 18);
  doc.text("TripNova Travel Concierge  |  support@tripnova.com  |  www.tripnova.com", 32, 275);

  doc.setFontSize(7.5);
  doc.setFont("helvetica", "normal");
  doc.setTextColor(148, 163, 184);
  const issuedDate = new Date(booking.created_at || Date.now()).toLocaleDateString("en-IN", {
    day: "numeric",
    month: "short",
    year: "numeric",
  });
  doc.text(`Voucher Generated: ${issuedDate}  -  Non-transferable Travel Document`, 48, 282);

  // 1-Click Trigger: Direct Device Download
  const fileName = `TripNova-Voucher-${booking.package_code || "BOOKING"}-${booking.id}.pdf`;
  doc.save(fileName);
}
