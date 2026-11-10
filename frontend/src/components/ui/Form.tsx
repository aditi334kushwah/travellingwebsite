"use client"
import axios from "axios"
import { useState } from "react"
import { CheckCircle, X, Download } from "lucide-react";
import { useRouter } from "next/navigation";
import BookingTicketModal, { BookingTicketData } from "@/components/booking/BookingTicketModal";

const Form = ({ packageId }: { packageId: number }) => {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);
  const [submittedBooking, setSubmittedBooking] = useState<BookingTicketData | null>(null);
  const [submitting, setSubmitting] = useState(false);
  const [errorMessage, setErrorMessage] = useState("");
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", country: "",
    number_of_people: "", travel_month: "", budget_per_person: "", special_requirements: ""
  });

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

      const res = await axios.post("https://travellingwebsite-2.onrender.com/api/bookings/", 
      { ...formData, package: packageId }, 
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
        budget_per_person: formData.budget_per_person,
        special_requirements: formData.special_requirements,
        status: "CONFIRMED",
        created_at: new Date().toISOString(),
        package_code: res.data?.package_details?.package_code || `PKG-${packageId}`,
        package_title: res.data?.package_details?.title || "Custom Package",
        package_location: res.data?.package_details?.location || "",
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
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white dark:bg-gray-800 rounded-3xl shadow-2xl p-8 max-w-md w-full text-center relative">
            <button onClick={() => setShowSuccess(false)} className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 dark:hover:text-gray-200 transition">
              <X size={22} />
            </button>
            <div className="flex justify-center mb-4"><CheckCircle className="w-16 h-16 text-green-500" /></div>
            <h2 className="text-2xl font-bold text-gray-800 dark:text-white mb-2">Booking Submitted!</h2>
            <p className="text-gray-500 dark:text-gray-400 mb-6">Thank you! Your travel voucher is ready for download. 🇮🇳</p>
            <div className="flex flex-col sm:flex-row gap-3 justify-center">
              <button
                onClick={() => {
                  setShowSuccess(false);
                }}
                className="inline-flex items-center justify-center gap-2 bg-orange-500 text-white px-5 py-2.5 rounded-xl font-semibold hover:bg-orange-600 transition"
              >
                <Download size={16} /> View Voucher
              </button>
              <button
                onClick={() => {
                  setShowSuccess(false);
                  setSubmittedBooking(null);
                }}
                className="bg-gray-200 dark:bg-gray-700 text-gray-700 dark:text-gray-200 px-5 py-2.5 rounded-xl font-semibold hover:bg-gray-300 dark:hover:bg-gray-600 transition"
              >
                Done
              </button>
            </div>
          </div>
        </div>
      )}

      {/* Ticket / Voucher Modal */}
      <BookingTicketModal
        booking={submittedBooking}
        onClose={() => setSubmittedBooking(null)}
      />

      <section className="min-h-screen bg-transparent px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 sm:p-8 text-white">
              <h1 className="text-2xl sm:text-4xl font-bold">Plan Your Dream Journey</h1>
              <p className="mt-2 text-blue-100 text-sm sm:text-base">Fill out the form and we'll create the perfect travel experience for you.</p>
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
