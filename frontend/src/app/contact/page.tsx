'use client'

import React from 'react'
import Image from 'next/image'
import { Phone, Mail, ImageIcon, MessageCircle } from "lucide-react"
import axios from "axios"
import { useState } from 'react'
import { useRouter } from 'next/navigation'
import FadeUp from '@/components/ui/FadeUp'

const contactCards = [
  { icon: Phone, title: "Call Us", desc: "Our team is available 24/7 to assist you.", info: "Phone: +91 98765 43210", gradient: "from-blue-500 to-purple-500" },
  { icon: MessageCircle, title: "WhatsApp", desc: "Instant Messaging Support", info: "WhatsApp: +91 98765 43210", gradient: "from-green-700 to-green-500" },
  { icon: Mail, title: "Email Us", desc: "Our team is available 24/7 to assist you.", info: "Email: tripnova@gmail.com", gradient: "from-orange-700 to-orange-500" },
  { icon: ImageIcon, title: "Instagram", desc: "Follow our journey", info: "@tripnova", gradient: "from-pink-700 to-orange-500" },
];

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement | HTMLSelectElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    try {
      const token = localStorage.getItem("access_token");
      if (!token) { router.push('/login'); return; }
      await axios.post("https://travellingwebsite-2.onrender.com/api/contact/", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      alert("Message sent successfully!");
    } catch (error: any) {
      console.log("ERROR:", error.response?.data);
    }
  };

  const inputClass = "w-full px-3 py-2 sm:py-3 border rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500 text-sm sm:text-base bg-white dark:bg-gray-700 border-gray-300 dark:border-gray-600 text-gray-900 dark:text-white";
  const labelClass = "block text-gray-700 dark:text-gray-300 font-bold mb-2 text-sm sm:text-base";

  return (
    <div className="w-full bg-white dark:bg-gray-950">

      {/* Hero Banner */}
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px]">
        <Image src="/images/contact.png" alt="Contact Us" fill className="object-cover opacity-60" priority />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <FadeUp delay={0.1}>
            <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-playfair text-white mb-3">Let's Plan Your Journey</h1>
          </FadeUp>
          <FadeUp delay={0.25}>
            <h4 className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl font-poppins">We're here to help you create unforgettable memories in India</h4>
          </FadeUp>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <FadeUp>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair mb-3 text-center text-gray-900 dark:text-white">Contact Us</h2>
          <p className="text-base sm:text-lg mb-8 sm:mb-10 text-center text-gray-600 dark:text-gray-400 font-poppins">Have questions or need assistance? Reach out to us!</p>
        </FadeUp>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeUp key={i} delay={i * 0.1}>
                <div className={`bg-gradient-to-l ${card.gradient} rounded-xl shadow-lg p-6 text-white text-center flex flex-col items-center justify-center transition duration-300 hover:-translate-y-2`}>
                  <Icon className="w-10 h-10 mb-4" />
                  <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                  <p className="text-sm mb-3 text-white/80">{card.desc}</p>
                  <p className="text-base font-bold">{card.info}</p>
                </div>
              </FadeUp>
            );
          })}
        </div>
      </div>

      {/* Form Section */}
      <section className="pb-16 px-4">
        <FadeUp>
          <h2 className="text-2xl sm:text-3xl md:text-4xl font-playfair mb-3 text-center text-gray-900 dark:text-white">Send Us a Message</h2>
          <p className="text-base sm:text-lg mb-8 text-center text-gray-600 dark:text-gray-400 font-poppins">Fill out the form below and we'll get back to you within 24 hours</p>
        </FadeUp>
        <FadeUp delay={0.15}>
          <div className="w-full px-4">
            <form onSubmit={handleSubmit} className="max-w-2xl mx-auto rounded-2xl shadow-lg p-6 sm:p-8 bg-gradient-to-br from-blue-200 to-gray-50 dark:from-gray-800 dark:to-gray-900">
              <div className="mb-4"><label className={labelClass}>Name</label><input type="text" name="name" value={formData.name} onChange={handleChange} className={inputClass} placeholder="Your Name" required /></div>
              <div className="mb-4"><label className={labelClass}>Email</label><input type="email" name="email" value={formData.email} onChange={handleChange} className={inputClass} placeholder="Your Email" required /></div>
              <div className="mb-4"><label className={labelClass}>Phone</label><input type="tel" name="phone" value={formData.phone} onChange={handleChange} className={inputClass} placeholder="Your Phone Number" required /></div>
              <div className="mb-4">
                <label className={labelClass}>Subject</label>
                <select name="subject" value={formData.subject} onChange={handleChange} className={inputClass} required>
                  <option value="">Select a subject</option>
                  <option value="existing">Existing Booking</option>
                  <option value="general">General Inquiry</option>
                  <option value="booking">Booking Related</option>
                  <option value="feedback">Feedback</option>
                </select>
              </div>
              <div className="mb-6"><label className={labelClass}>Message</label><textarea name="message" value={formData.message} onChange={handleChange} rows={4} className={inputClass} placeholder="Your Message" required /></div>
              <button type="submit" className="w-full sm:w-auto bg-blue-500 hover:bg-blue-700 text-white font-bold py-2 sm:py-3 px-6 rounded-lg transition duration-300 hover:-translate-y-0.5">
                Send Message
              </button>
            </form>
          </div>
        </FadeUp>
      </section>

    </div>
  );
};

export default Contact;
