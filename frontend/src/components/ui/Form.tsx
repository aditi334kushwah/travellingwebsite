"use client"
import axios from "axios"
import { useState } from "react"
import { CheckCircle, X } from "lucide-react"

const Form = () => {

  const [showSuccess, setShowSuccess] = useState(false)
  const [ formData ,setFormData] = useState({

      name : "",
      email : "",
      phone : "",
      country : "",
      number_of_people : "",
      travel_month : "",
      budget_per_person : "", 
      special_requirements : ""
  });

  const handleChange = (e: React.ChangeEvent< 
      HTMLInputElement |
      HTMLTextAreaElement | 
      HTMLSelectElement>) =>{

    setFormData({
        ...formData,
         [e.target.name] : e.target.value
      })
  }

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();

    try {
      const response = await axios.post(
        "http://127.0.0.1:8000/api/bookings/", 
        formData);

      // console.log("Form submitted successfully:", response.data);
      setShowSuccess(true);
      setFormData({
        name: "",
        email: "",
        phone: "",
        country: "",
        number_of_people: "",
        travel_month: "",
        budget_per_person: "",
        special_requirements: ""
      });
    }
    catch (error) {
      console.error("Error submitting form:", error);
    }
  };


  return (
    <>
      {/* Success Popup */}
      {showSuccess && (
        <div className="fixed inset-0 z-50 flex items-center justify-center bg-black/50 px-4">
          <div className="bg-white rounded-3xl shadow-2xl p-8 max-w-md w-full text-center relative animate-in fade-in zoom-in duration-300">
            <button
              onClick={() => setShowSuccess(false)}
              className="absolute top-4 right-4 text-gray-400 hover:text-gray-600 transition"
            >
              <X size={22} />
            </button>
            <div className="flex justify-center mb-4">
              <CheckCircle className="w-16 h-16 text-green-500" />
            </div>
            <h2 className="text-2xl font-bold text-gray-800 mb-2">Booking Submitted!</h2>
            <p className="text-gray-500 mb-6">Thank you! We'll get back to you within 24 hours to confirm your dream journey. 🇮🇳</p>
            <button
              onClick={() => setShowSuccess(false)}
              className="bg-gradient-to-r from-blue-600 to-purple-600 text-white px-8 py-3 rounded-xl font-semibold hover:scale-105 transition duration-300"
            >
              Done
            </button>
          </div>
        </div>
      )}

      <section className="min-h-screen bg-transparent px-4">
      <div className="max-w-4xl mx-auto">

        <div className="bg-white shadow-2xl rounded-3xl overflow-hidden">

          <div className="bg-gradient-to-r from-blue-600 to-purple-600 p-8 text-white">
            <h1 className="text-4xl font-bold">
              Plan Your Dream Journey 
            </h1>

            <p className="mt-2 text-blue-100">
              Fill out the form and we'll create the perfect travel experience
              for you.
            </p>
          </div>

          <form
            onSubmit={handleSubmit}
            className="p-8 space-y-6"
          >
            <div className="grid md:grid-cols-2 gap-6">

              <div>
                <label className="block mb-2 font-medium">
                  Full Name
                </label>

                <input
                  type="text"
                  name="name"
                  placeholder="Enter your name"
                  value={formData.name}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Email Address
                </label>

                <input
                  type="email"
                  name="email"
                  placeholder="Enter your email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Phone Number
                </label>

                <input
                  type="tel"
                  name="phone"
                  placeholder="+91 9876543210"
                  value={formData.phone}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Country
                </label>

                <select
                  name="country"
                  value={formData.country}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Country</option>
                  <option>India</option>
                  <option>United States</option>
                  <option>Canada</option>
                  <option>Australia</option>
                  <option>United Kingdom</option>
                </select>
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Number of People
                </label>

                <input
                  type="number"
                  min="1"
                  name="number_of_people"
                  value={formData.number_of_people}
                  onChange={handleChange}
                  placeholder="2"
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />
              </div>

              <div>
                <label className="block mb-2 font-medium">
                  Travel Month
                </label>

                <select
                  name="travel_month"
                  value={formData.travel_month}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Month</option>
                  <option>January</option>
                  <option>February</option>
                  <option>March</option>
                  <option>April</option>
                  <option>May</option>
                  <option>June</option>
                  <option>July</option>
                  <option>August</option>
                  <option>September</option>
                  <option>October</option>
                  <option>November</option>
                  <option>December</option>
                </select>
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 font-medium">
                  Budget Per Person
                </label>

                <input
                  type="text"
                  name="budget_per_person"
                  value={formData.budget_per_person}
                  onChange={handleChange}
                  placeholder="$1,000 - $3,000"
                  className = "w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                />

                {/* <select
                  name="budget_per_person"
                  value={formData.budget_per_person}
                  onChange={handleChange}
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                  required
                >
                  <option value="">Select Budget</option>
                  <option value="0-1000">$0 - $1,000</option>
                  <option value="1000-3000">$1,000 - $3,000</option>
                  <option value="3000-5000">$3,000 - $5,000</option>
                  <option value="5000+">$5,000+</option>
                </select> */}
              </div>

              <div className="md:col-span-2">
                <label className="block mb-2 font-medium">
                  Special Requirements
                </label>

                <textarea
                  
                  name="special_requirements"
                  value={formData.special_requirements}
                  onChange={handleChange}
                  placeholder="Tell us about your travel preferences..."
                  className="w-full border rounded-xl p-3 focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
              </div>

            </div>

            <button
              type="submit"
              className="w-full bg-gradient-to-r from-blue-600 to-purple-600 text-white py-4 rounded-xl font-semibold text-lg hover:scale-[1.02] transition duration-300"
            >
              Submit Booking Request
            </button>

          </form>
        </div>
      </div>
    </section>
    </>  
  )
}

export default Form


// <div className="w-full px-4">
//       <form className="max-w-2xl mx-auto rounded-2xl shadow-lg p-6 sm:p-8 bg-gradient-to-br from-blue-200 to-gray-50">

//         <div className="mb-4">
//           <label htmlFor="name" className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Name</label>
//           <input type="text" id="name" name="name" className="w-full px-3 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" placeholder="Your Name" required />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="email" className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Email</label>
//           <input type="email" id="email" name="email" className="w-full px-3 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" placeholder="Your Email" required />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="phone" className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Phone</label>
//           <input type="tel" id="phone" name="phone" className="w-full px-3 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" placeholder="Your Phone Number" required />
//         </div>

//         <div className="mb-4">
//           <label htmlFor="subject" className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Subject</label>
//           <select id="subject" name="subject" className="w-full px-3 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" required>
//             <option value="">Select a subject</option>
//             <option value="existing">Existing Booking</option>
//             <option value="general">General Inquiry</option>
//             <option value="booking">Booking Related</option>
//             <option value="feedback">Feedback</option>
//           </select>
//         </div>

//         <div className="mb-6">
//           <label htmlFor="message" className="block text-gray-700 font-bold mb-2 text-sm sm:text-base">Message</label>
//           <textarea id="message" name="message" rows={4} className="w-full px-3 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base" placeholder="Your Message" required></textarea>
//         </div>

//         <button type="submit" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-6 rounded-lg transition duration-300 hover:-translate-y-0.5">
//           Send Message
//         </button>

//       </form>
//     </div>