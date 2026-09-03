"use client"
import axios from "axios"
import { useState } from "react"
import { CheckCircle, X } from "lucide-react";
import { useRouter } from "next/navigation";

const Form = () => {
  const router = useRouter();
  const [showSuccess, setShowSuccess] = useState(false);
  const [formData, setFormData] = useState({
    name: "", email: "", phone: "", country: "",
    number_of_people: "", travel_month: "", budget_per_person: "", special_requirements: ""
  });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      if (!token) { router.push('/login'); return; }
      await axios.post("https://travellingwebsite-2.onrender.com/api/bookings/", formData, {
        headers: { 'Content-Type': 'application/json', Authorization: `Bearer ${token}` }
      });
      setShowSuccess(true);
      setFormData({ name: "", email: "", phone: "", country: "", number_of_people: "", travel_month: "", budget_per_person: "", special_requirements: "" });
    } catch (error: any) {
      if (error.response?.status === 401) { localStorage.removeItem("access_token"); router.push("/login"); }
      console.log(error);
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
            <p className="text-gray-500 dark:text-gray-400 mb-6">Thank you! We'll get back to you within 24 hours. 🇮🇳</p>
            <button onClick={() => setShowSuccess(false)} className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300">
              Done
            </button>
          </div>
        </div>
      )}

      <section className="min-h-screen bg-transparent px-4">
        <div className="max-w-4xl mx-auto">
          <div className="bg-white dark:bg-gray-800 shadow-2xl rounded-3xl overflow-hidden">
            <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-6 sm:p-8 text-white">
              <h1 className="text-2xl sm:text-4xl font-bold">Plan Your Dream Journey</h1>
              <p className="mt-2 text-blue-100 text-sm sm:text-base">Fill out the form and we'll create the perfect travel experience for you.</p>
            </div>

            <form onSubmit={handleSubmit} className="p-6 sm:p-8 space-y-6">
              <div className="grid sm:grid-cols-2 gap-6">
                <div><label className={labelClass}>Full Name</label><input type="text" name="name" placeholder="Enter your name" value={formData.name} onChange={handleChange} className={inputClass} required /></div>
                <div><label className={labelClass}>Email Address</label><input type="email" name="email" placeholder="Enter your email" value={formData.email} onChange={handleChange} className={inputClass} required /></div>
                <div><label className={labelClass}>Phone Number</label><input type="tel" name="phone" placeholder="+91 9876543210" value={formData.phone} onChange={handleChange} className={inputClass} required /></div>
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
                    {["January","February","March","April","May","June","July","August","September","October","November","December"].map(m => <option key={m}>{m}</option>)}
                  </select>
                </div>
                <div className="sm:col-span-2"><label className={labelClass}>Budget Per Person</label><input type="text" name="budget_per_person" value={formData.budget_per_person} onChange={handleChange} placeholder="$1,000 - $3,000" className={inputClass} required /></div>
                <div className="sm:col-span-2"><label className={labelClass}>Special Requirements</label><textarea name="special_requirements" value={formData.special_requirements} onChange={handleChange} placeholder="Tell us about your travel preferences..." className={inputClass} rows={4} /></div>
              </div>
              <button type="submit" className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:scale-[1.02] transition duration-300">
                Submit Booking Request
              </button>
            </form>
          </div>
        </div>
      </section>
    </>
  );
};

export default Form;
