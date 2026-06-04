import React from 'react'
import Image from 'next/image'
import { Phone, Mail, ImageIcon, MessageCircle } from "lucide-react"
import Form from '@/components/ui/Form'

const contactCards = [
  {
    icon: Phone,
    title: "Call Us",
    desc: "Our team is available 24/7 to assist you with any inquiries or issues.",
    info: "Phone: +91 98765 43210",
    gradient: "from-blue-500 to-purple-500",
  },
  {
    icon: MessageCircle,
    title: "WhatsApp",
    desc: "Instant Messaging Support",
    info: "WhatsApp: +91 98765 43210",
    gradient: "from-green-700 to-green-500",
  },
  {
    icon: Mail,
    title: "Email Us",
    desc: "Our team is available 24/7 to assist you with any inquiries or issues.",
    info: "Email: tripnova@gmail.com",
    gradient: "from-orange-700 to-orange-500",
  },
  {
    icon: ImageIcon,
    title: "Instagram",
    desc: "Follow our journey",
    info: "@tripnova",
    gradient: "from-pink-700 to-orange-500",
  },
]

const Contact = () => {
  return (
    <div className="w-full">

      {/* Hero Banner */}
      <div className="relative w-full h-[250px] sm:h-[320px] md:h-[400px]">
        <Image
          src="/images/contact.png"
          alt="Contact Us"
          fill
          className="object-cover opacity-60"
          priority
        />
        <div className="absolute inset-0 bg-black/40 flex flex-col items-center justify-center text-center px-4">
          <h1 className="text-2xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-3">
            Let's Plan Your Journey
          </h1>
          <h4 className="text-sm sm:text-base md:text-xl text-white/80 max-w-2xl">
            We're here to help you create unforgettable memories in India
          </h4>
        </div>
      </div>

      {/* Contact Cards */}
      <div className="container mx-auto px-4 sm:px-8 py-12 sm:py-16">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">Contact Us</h2>
        <p className="text-base sm:text-lg mb-8 sm:mb-10 text-center text-gray-600">
          Have questions or need assistance? Reach out to us!
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {contactCards.map((card, i) => {
            const Icon = card.icon
            return (
              <div
                key={i}
                className={`bg-gradient-to-l ${card.gradient} rounded-xl shadow-lg p-6 text-white text-center flex flex-col items-center justify-center transition duration-300 hover:-translate-y-2`}
              >
                <Icon className="w-10 h-10 mb-4" />
                <h3 className="text-xl font-bold mb-3">{card.title}</h3>
                <p className="text-sm mb-3 text-white/80">{card.desc}</p>
                <p className="text-base font-bold">{card.info}</p>
              </div>
            )
          })}
        </div>
      </div>

      {/* Form Section */}
      <section className="pb-16 px-4">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-bold mb-3 text-center">
          Send Us a Message
        </h2>
        <p className="text-base sm:text-lg mb-8 text-center text-gray-600">
          Fill out the form below and we'll get back to you within 24 hours
        </p>
        <Form />
      </section>

    </div>
  )
}

export default Contact
