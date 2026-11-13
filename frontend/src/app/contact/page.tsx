'use client'

import React, { useState } from 'react'
import Image from 'next/image'
import { Phone, Mail, Camera, MessageCircle, Send, CheckCircle2, Clock, MapPin, Sparkles } from "lucide-react"
import axios from "axios"
import { useRouter } from 'next/navigation'
import FadeUp from '@/components/ui/FadeUp'

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    desc: "Our travel advisors are ready to assist you.",
    info: "+91 9760404709",
    gradient: "from-amber-500 to-orange-600",
    href: "tel:+919760404709",
    label: "Tap to Call",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Instant itinerary & pricing assistance.",
    info: "+91 9760404709",
    gradient: "from-emerald-600 to-teal-600",
    href: "https://wa.me/919760404709",
    label: "Chat on WhatsApp",
  },
  {
    icon: Mail,
    title: "Email Support",
    desc: "Detailed tour queries & custom bookings.",
    info: "aaditikkushwah12530@gmail.com",
    gradient: "from-orange-500 to-amber-600",
    href: "mailto:aaditikkushwah12530@gmail.com",
    label: "Send Email",
  },
  {
    icon: Camera,
    title: "Instagram",
    desc: "Follow real stories and travel reels.",
    info: "@tripnova",
    gradient: "from-pink-600 via-rose-500 to-orange-500",
    href: "https://instagram.com/tripnova",
    label: "Visit Profile",
  },
];

const Contact = () => {
  const router = useRouter();
  const [formData, setFormData] = useState({ name: "", email: "", phone: "", subject: "", message: "" });
  const [loading, setLoading] = useState(false);
  const [success, setSuccess] = useState(false);
  const [errorMsg, setErrorMsg] = useState("");

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    setFormData(prev => ({ ...prev, [e.target.name]: e.target.value }));
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setErrorMsg("");
    setLoading(true);
    try {
      const token = localStorage.getItem("access_token");
      if (!token) {
        router.push('/login');
        return;
      }
      await axios.post("https://travellingwebsite-2.onrender.com/api/contact/", formData, {
        headers: { Authorization: `Bearer ${token}` }
      });
      setSuccess(true);
      setFormData({ name: "", email: "", phone: "", subject: "", message: "" });
      setTimeout(() => setSuccess(false), 6000);
    } catch (error: any) {
      if (error.response?.status === 401) {
        localStorage.removeItem("access_token");
        router.push('/login');
        return;
      }
      setErrorMsg(error.response?.data?.detail || "Message could not be sent. Please check your network and try again.");
      console.log("ERROR:", error.response?.data);
    } finally {
      setLoading(false);
    }
  };

  const inputClass = "w-full px-4 py-3.5 border rounded-2xl focus:outline-none focus:ring-2 focus:ring-orange-500 text-sm sm:text-base bg-white dark:bg-gray-800 border-gray-200 dark:border-gray-700 text-gray-900 dark:text-white transition placeholder-gray-400";
  const labelClass = "block text-gray-700 dark:text-gray-300 font-semibold mb-2 text-xs uppercase tracking-wider";

  return (
    <div className="w-full bg-[#fcfbf9] dark:bg-[#09090b] text-gray-900 dark:text-gray-100 min-h-screen">

      {/* Hero Banner with Warm Luxury Cinematic Gradient */}
      <div className="relative w-full h-[320px] sm:h-[400px] md:h-[460px] overflow-hidden flex items-center justify-center">
        <Image src="/images/jaipur.png" alt="Contact Us" fill className="object-cover scale-105" priority />
        <div className="absolute inset-0 bg-gradient-to-b from-black/75 via-black/50 to-black/85" />
        <div className="relative z-10 text-center px-4 max-w-4xl pt-16">
          <FadeUp delay={0.1}>
            <span className="inline-flex items-center gap-1.5 px-3.5 py-1 rounded-full bg-white/10 backdrop-blur-md text-amber-300 text-xs font-semibold uppercase tracking-wider mb-3 border border-white/20">
              <Sparkles size={13} /> We&apos;re Here For You
            </span>
          </FadeUp>
          <FadeUp delay={0.2}>
            <h1 className="text-3xl sm:text-5xl md:text-6xl font-bold font-playfair text-white leading-tight">
              Get in Touch with TripNova
            </h1>
          </FadeUp>
          <FadeUp delay={0.3}>
            <p className="mt-4 text-sm sm:text-lg text-stone-200/90 font-poppins max-w-2xl mx-auto font-light">
              Have a question about a package or need a personalized tour plan? Our travel specialists are just a message away.
            </p>
          </FadeUp>
        </div>
      </div>

      {/* Main Container */}
      <div className="max-w-6xl mx-auto px-4 sm:px-6 py-16 sm:py-20 space-y-16">

        {/* 4 Contact Cards Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, i) => {
            const Icon = card.icon;
            return (
              <FadeUp key={i} delay={i * 0.1}>
                <a
                  href={card.href}
                  target={card.href.startsWith("http") ? "_blank" : undefined}
                  rel={card.href.startsWith("http") ? "noopener noreferrer" : undefined}
                  className="block h-full p-6 rounded-3xl bg-white dark:bg-gray-900 border border-gray-100 dark:border-gray-800 shadow-md hover:shadow-2xl transition-all duration-300 hover:-translate-y-2 group cursor-pointer"
                >
                  <div className={`w-12 h-12 rounded-2xl bg-gradient-to-br ${card.gradient} text-white flex items-center justify-center mb-4 shadow-lg group-hover:scale-110 transition-transform duration-300`}>
                    <Icon size={22} />
                  </div>
                  <h3 className="font-playfair font-bold text-lg text-gray-800 dark:text-white mb-1">{card.title}</h3>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mb-3 leading-relaxed">{card.desc}</p>
                  <p className="text-sm font-semibold text-gray-900 dark:text-gray-100 break-all">{card.info}</p>
                  <span className="inline-block mt-4 text-xs font-semibold text-orange-600 dark:text-orange-400 group-hover:underline">
                    {card.label} →
                  </span>
                </a>
              </FadeUp>
            );
          })}
        </div>

        {/* Contact Form + Info Details Section */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 items-start">

          {/* Left: Contact Info & Value Prop */}
          <div className="lg:col-span-5 space-y-8">
            <FadeUp>
              <span className="text-xs font-semibold uppercase tracking-wider text-orange-600 dark:text-orange-400 bg-orange-100 dark:bg-orange-950/60 px-3 py-1 rounded-full">
                Direct Help Desk
              </span>
              <h2 className="text-3xl sm:text-4xl font-playfair font-bold text-gray-900 dark:text-white mt-3">
                Let&apos;s Design Your Dream Holiday Together
              </h2>
              <p className="text-gray-600 dark:text-gray-300 text-sm sm:text-base leading-relaxed mt-3">
                Fill out the form with your travel dates, preferred destination, or general queries. We respond promptly with detailed recommendations.
              </p>
            </FadeUp>

            <div className="space-y-4 pt-4 border-t border-gray-200 dark:border-gray-800">
              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex-shrink-0">
                  <Clock size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-800 dark:text-white">Operating Hours</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Monday - Sunday: 24/7 Concierge Support</p>
                </div>
              </div>

              <div className="flex items-start gap-4">
                <div className="p-3 rounded-2xl bg-orange-100 dark:bg-orange-950/50 text-orange-600 dark:text-orange-400 flex-shrink-0">
                  <MapPin size={20} />
                </div>
                <div>
                  <h4 className="font-semibold text-sm text-gray-800 dark:text-white">Headquarters</h4>
                  <p className="text-xs text-gray-500 dark:text-gray-400 mt-0.5">Agra, UP , India</p>
                </div>
              </div>
            </div>
          </div>

          {/* Right: Functional Form */}
          <div className="lg:col-span-7">
            <FadeUp delay={0.2}>
              <div className="bg-white dark:bg-gray-900 rounded-3xl p-6 sm:p-10 shadow-xl border border-gray-100 dark:border-gray-800">
                <h3 className="text-2xl font-playfair font-bold text-gray-900 dark:text-white mb-2">
                  Send Us a Message
                </h3>
                <p className="text-xs sm:text-sm text-gray-500 dark:text-gray-400 mb-6">
                  Guaranteed response within 24 hours.
                </p>

                {success && (
                  <div className="mb-6 p-4 rounded-2xl bg-emerald-50 dark:bg-emerald-950/50 border border-emerald-200 dark:border-emerald-800 text-emerald-800 dark:text-emerald-200 text-sm flex items-center gap-2">
                    <CheckCircle2 size={18} className="text-emerald-600" />
                    <span>Your message has been sent successfully! We will contact you soon.</span>
                  </div>
                )}

                {errorMsg && (
                  <div className="mb-6 p-4 rounded-2xl bg-red-50 dark:bg-red-950/50 border border-red-200 dark:border-red-800 text-red-700 dark:text-red-300 text-sm">
                    {errorMsg}
                  </div>
                )}

                <form onSubmit={handleSubmit} className="space-y-5">
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Your Name</label>
                      <input
                        type="text"
                        name="name"
                        required
                        placeholder="e.g. Aditi Sharma"
                        value={formData.name}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Email Address</label>
                      <input
                        type="email"
                        name="email"
                        required
                        placeholder="you@example.com"
                        value={formData.email}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-5">
                    <div>
                      <label className={labelClass}>Phone Number</label>
                      <input
                        type="tel"
                        name="phone"
                        required
                        placeholder="+91 9876543210"
                        value={formData.phone}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                    <div>
                      <label className={labelClass}>Subject</label>
                      <input
                        type="text"
                        name="subject"
                        required
                        placeholder="e.g. Rajasthan Trip Query"
                        value={formData.subject}
                        onChange={handleChange}
                        className={inputClass}
                      />
                    </div>
                  </div>

                  <div>
                    <label className={labelClass}>Message / Travel Requirements</label>
                    <textarea
                      name="message"
                      rows={4}
                      required
                      placeholder="Tell us about your trip plans, dates, number of people..."
                      value={formData.message}
                      onChange={handleChange}
                      className={inputClass}
                    />
                  </div>

                  <button
                    type="submit"
                    disabled={loading}
                    className="w-full h-14 rounded-2xl bg-gradient-to-r from-amber-500 via-orange-500 to-amber-600 hover:from-amber-600 hover:to-orange-600 text-white font-semibold flex items-center justify-center gap-2 shadow-lg shadow-orange-500/25 transition duration-300 hover:scale-[1.01] active:scale-[0.99] disabled:opacity-60 cursor-pointer text-sm sm:text-base"
                  >
                    {loading ? (
                      <>
                        <span className="w-5 h-5 border-2 border-white border-t-transparent rounded-full animate-spin" />
                        <span>Sending Message...</span>
                      </>
                    ) : (
                      <>
                        <span>Send Message</span>
                        <Send size={16} />
                      </>
                    )}
                  </button>
                </form>
              </div>
            </FadeUp>
          </div>

        </div>

      </div>
    </div>
  )
}

export default Contact
