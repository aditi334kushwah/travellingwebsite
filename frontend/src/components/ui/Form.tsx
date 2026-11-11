"use client"
import axios from "axios"
import { useState, useEffect } from "react"
import { CheckCircle, X, Download, MapPin, Tag, Calendar, Users, IndianRupee } from "lucide-react";
import { useRouter } from "next/navigation";
import BookingTicketModal, { BookingTicketData } from "@/components/booking/BookingTicketModal";

type PackageInfo = {
  id: number;
  package_code?: string;
  title: string;
  location: string;
  price: string;
  duration_days: number;
  duration_nights: number;
  image?: string;
};

const Form = ({ packageId }: { packageId: number }) => {
  const router = useRouter();
  const [pkgDetails, setPkgDetails] = useState<PackageInfo | null>(null);
  const [loadingPkg, setLoadingPkg] = useState(false);
  const [showSuccess, setShowSuccess] = useState(false);
  const [showTicketModal, setShowTicketModal] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<BookingTicketData | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", country: "",
    number_of_people: "", travel_month: "", budget_per_person: "", special_requirements: ""
  });

  useEffect(() => {
    if (packageId) {
      setLoadingPkg(true);
      axios.get(`https://travellingwebsite-2.onrender.com/api/packages/${packageId}/`)
        .then(res => {
          setPkgDetails(res.data);
          if (res.data?.price && !formData.budget_per_person) {
            setFormData(prev => ({ ...prev, budget_per_person: `₹${res.data.price}` }));
          }
        })
        .catch(err => {
          console.error("Error fetching package details:", err);
        })
        .finally(() => setLoadingPkg(false));
    }
  }, [packageId]);

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMessage("");
    setSubmitting(true);
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        router.push('/login');
        return;
      }

      const numericBudget = formData.budget_per_person.replace(/[^0-9.]/g, '') || (pkgDetails?.price || '0');

      const res = await axios.post("https://travellingwebsite-2.onrender.com/api/bookings/", 
      {
        ...formData,
        package: packageId,
        budget_per_person: numericBudget,
      }, 
      {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      });

      setSubmittedBooking({
        id: res.data?.id || Date.now(),
        name: formData.name,
        email: formData.email,
        phone: formData.phone,
        country: formData.country,
        number_of_people: Number(formData.number_of_people),
        travel_month: formData.travel_month,
        budget_per_person: numericBudget,
        special_requirements: formData.special_requirements,
        status: "CONFIRMED",
        created_at: new Date().toISOString(),
        package_code: res.data?.package_details?.package_code || pkgDetails?.package_code || `PKG-${packageId}`,
        package_title: res.data?.package_details?.title || pkgDetails?.title || "Travel Package",
        package_location: res.data?.package_details?.location || pkgDetails?.location || "",
        duration_days: res.data?.package_details?.duration_days || pkgDetails?.duration_days,
        duration_nights: res.data?.package_details?.duration_nights || pkgDetails?.duration_nights,
      });

      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", country: "", number_of_people: "", travel_month: "", budget_per_person: "", special_requirements: "" });
    } catch (error: any) {
      if (error.response?.status === 401) {
        localStorage.removeItem("access_token");
        router.push("/login");
        return;
      }
      const backendErr = error.response?.data
        ? typeof error.response.data === "string"
          ? error.response.data
          : JSON.stringify(error.response.data)
        : "Booking failed. Please check your network and try again.";
      setErrorMessage(backendErr);
      console.log(error);
    } finally {
      setSubmitting(false);
    }
  };

  const inputClass = "w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white placeholder-gray-400 dark:placeholder-gray-500";
  const labelClass = "block mb-2 font-medium text-gray-700 dark:text-gray-300";

  return (
    <>
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/60 backdrop-blur-sm px-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-6 sm:p-8 max-w-lg w-full text-center relative border border-gray-100 dark:border-gray-700">
            <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition">
              <X size={22} />
            </button>
            <div className="flex justify-center mb-3"><CheckCircle className="w-14 h-14 text-emerald-500 animate-bounce" /></div>
            <h2 className="text-2xl font-bold font-playfair text-gray-800 dark:text-white mb-1">Booking Confirmed!</h2>
            <p className="text-gray-500 dark:text-gray-400 text-xs sm:text-sm mb-4">Aapki trip successfully register ho gayi hai.</p>

            {/* Booked Package Summary Card */}
            <div className="p-4 sm:p-5 rounded-2xl bg-orange-50 dark:bg-orange-950/40 border border-orange-200 dark:border-orange-900/50 text-left mb-6 shadow-sm">
              <div className="flex items-center justify-between pb-2 border-b border-orange-200/60 dark:border-orange-900/40">
                <span className="text-[11px] uppercase font-bold text-orange-600 dark:text-orange-400 tracking-wider">Booked Package</span>
                <span className="text-xs font-mono font-bold bg-orange-200 dark:bg-orange-900/80 text-orange-900 dark:text-orange-200 px-2.5 py-0.5 rounded-md">
                  {submittedBooking?.package_code || pkgDetails?.package_code || `PKG-${packageId}`}
                </span>
              </div>

              <div className="mt-3">
                <h3 className="font-bold text-gray-900 dark:text-white text-base sm:text-lg">
                  {submittedBooking?.package_title || pkgDetails?.title || "Travel Package"}
                </h3>
                {(submittedBooking?.package_location || pkgDetails?.location) && (
                  <p className="text-xs text-gray-600 dark:text-gray-300 flex items-center gap-1 mt-1 font-medium">
                    <MapPin size={13} className="text-orange-500" /> {submittedBooking?.package_location || pkgDetails?.location}
                  </p>
                )}
              </div>

              <div className="mt-3 pt-3 border-t border-orange-200/60 dark:border-orange-900/40 grid grid-cols-2 gap-2 text-xs text-gray-700 dark:text-gray-300">
                <div>Traveler: <strong className="text-gray-900 dark:text-white">{submittedBooking?.name}</strong></div>
                <div>Guests: <strong className="text-gray-900 dark:text-white">{submittedBooking?.number_of_people} Person(s)</strong></div>
                <div>Month: <strong className="text-gray-900 dark:text-white">{submittedBooking?.travel_month}</strong></div>
                <div>Rate: <strong className="text-gray-900 dark:text-white">₹{submittedBooking?.budget_per_person}</strong></div>
              </div>
            </div>

            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                type="button"
                onClick={() => {
                  setShowTicketModal(true);
                }}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-5 py-3 rounded-xl font-semibold hover:bg-orange-600 shadow-md transition hover:scale-105 text-sm"
              >
                <Download size={16} /> View & Download Voucher
              </button>
              <button
                type="button"
                onClick={() => {
                  setShowSuccess(false);
                  router.push("/dashboard");
                }}
                className="bg-gray-100 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-5 py-3 rounded-xl font-semibold hover:bg-gray-200 dark:hover:bg-gray-600 transition text-sm"
              >
                Go to Dashboard
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ticket / Voucher Modal */}
      {showTicketModal && (
        <BookingTicketModal
          booking={submittedBooking}
          onClose={() => setShowTicketModal(false)}
        />
      )}

      <section className="min-h-screen bg-transparent px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden">
            {/* Selected Package Banner on top of Form */}
            <div className="bg-gradient-to-r from-blue-600 via-indigo-600 to-purple-600 p-6 sm:p-8 text-white">
              <div className="flex flex-col sm:flex-row sm:items-center justify-between gap-4">
                <div>
                  <span className="text-xs uppercase font-bold tracking-wider px-2.5 py-1 rounded-full bg-white/20 text-white inline-block mb-2">
                    Booking For
                  </span>
                  <h1 className="text-2xl sm:text-3xl font-bold font-playfair">
                    {loadingPkg ? "Loading package..." : (pkgDetails?.title || "Plan Your Dream Journey")}
                  </h1>
                  {pkgDetails?.location && (
                    <p className="mt-1 text-blue-100 text-sm flex items-center gap-1.5">
                      <MapPin size={14} className="text-orange-300" /> {pkgDetails.location}
                    </p>
                  )}
                </div>

                {pkgDetails && (
                  <div className="flex sm:flex-col items-start sm:items-end justify-between border-t sm:border-t-0 pt-3 sm:pt-0 border-white/20">
                    <span className="text-xs font-mono font-bold bg-white text-gray-900 px-2.5 py-1 rounded-lg shadow-sm">
                      {pkgDetails.package_code || `PKG-${pkgDetails.id}`}
                    </span>
                    <span className="text-xl sm:text-2xl font-bold text-white mt-1">
                      ₹{pkgDetails.price}
                    </span>
                    <span className="text-xs text-blue-200">
                      {pkgDetails.duration_days}D / {pkgDetails.duration_nights}N
                    </span>
                  </div>
                )}
              </div>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              {errorMessage && (
                <div className="p-4 rounded-xl bg-red-50 dark:bg-red-950/40 border border-red-200 dark:border-red-800 text-red-600 dark:text-red-300 text-sm">
                  {errorMessage}
                </div>
              )}
              <div className="grid sm:grid-cols-2 gap-6">
                <div>
                  <label className={labelClass}>Full Name</label>
                  <input type="text"
                    name="name"
                    placeholder="Enter your name"
                    value={formData.name}
                    onChange={handleChange}
                    className={inputClass}
                    pattern="[a-z A-Z]+"
                    title="Alphabets only"
                    required />
                </div>

                <div>
                  <label className={labelClass}>Email Address</label>
                  <input
                    type="email"
                    name="email"
                    placeholder="Enter your email"
                    value={formData.email}
                    onChange={handleChange}
                    className={inputClass}
                    pattern="[a-zA-Z0-9._%+-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,}"
                    title="Please enter a valid email address"
                    required />
                </div>

                <div>
                  <label className={labelClass}>Phone Number</label>
                  <input type="tel"
                    name="phone"
                    placeholder="+91 9876543210"
                    value={formData.phone}
                    onChange={handleChange}
                    className={inputClass}
                    inputMode="numeric"
                    pattern="[0-9]{10}"
                    maxLength={10}
                    title="Phone number must be exactly 10 digits"
                    required
                  />
                </div>
                <div>
                  <label className={labelClass}>Country</label>
                  <select name="country" value={formData.country} onChange={handleChange} className={inputClass} required>
                    <option value="">Select Country</option>
                    <option>India</option><option>United States</option><option>Canada</option><option>Australia</option><option>United Kingdom</option>
                  </select>
                </div>
                <div><label className={labelClass}>Number of People</label><input type="number" min="1" name="number_of_people" value={formData.number_of_people} onChange={handleChange} placeholder="2" className={inputClass} required /></div>
                <div>
                  <label className={labelClass}>Travel Month</label>
                  <select name="travel_month" value={formData.travel_month} onChange={handleChange} className={inputClass} required>
                    <option value="">Select Month</option>
                    {["January", "February", "March", "April", "May", "June", "July", "August", "September", "October", "November", "December"].map(m => <option key={m}>{m}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2">
                  <label className={labelClass}>Budget Per Person</label>
                  <input type="text"
                    name="budget_per_person"
                    value={formData.budget_per_person}
                    onChange={handleChange}
                    placeholder="$1,000 - $3,000"
                    className={inputClass}
                    pattern="^\$\d{1,3}(,\d{3})*$|^\$\d+$"
                    required />
                </div>

                <div className="sm:col-span-2"><label className={labelClass}>Special Requirements</label><textarea name="special_requirements" value={formData.special_requirements} onChange={handleChange} placeholder="Tell us about your travel preferences..." className={inputClass} rows={4} /></div>
              </div>
              <button
                type="submit"
                disabled={submitting}
                className="w-full bg-gradient-to-r from-blue-600 to-purple-600 hover:from-blue-700 hover:to-purple-700 text-white py-4 rounded-xl font-semibold text-lg transition duration-300 disabled:opacity-60 disabled:cursor-not-allowed flex items-center justify-center gap-2"
              >
                {submitting ? (
                  <>
                    <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin"></span>
                    Submitting Booking...
                  </>
                ) : (
                  "Submit Booking Request"
                )}
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
