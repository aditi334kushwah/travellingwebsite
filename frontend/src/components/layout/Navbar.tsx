"use client";
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { Menu, X } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home" },
  { href: "/packages", label: "Packages" },
  { href: "/experiences", label: "Experiences" },
  { href: "/about", label: "About" },
  { href: "/contact", label: "Contact" },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <div className="flex flex-col items-center absolute z-50 w-full">
      <div className="flex items-center w-[90%] md:w-[80%] h-16 px-4 text-white bg-gray-200/80 backdrop-blur-md fixed mt-5 rounded-4xl border-b shadow-lg border-white-700">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" alt="Logo" width={120} height={120} className="rounded-full transition duration-300 hover:translate-y-0.5" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 ml-auto py-4 space-x-2">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} className="text-gray-900 text-sm transition duration-300 hover:translate-y-0.5 hover:bg-[#c8782f] hover:text-white px-4 pt-1 rounded-full">
              {link.label}
            </Link>
          ))}
        </div>

        {/* Desktop Book Button */}
        <div className="hidden md:flex justify-center my-3 mr-5 ml-15">
          <Link href="/booking">
            <button className="bg-[#c8782f] h-10 text-white py-2 px-4 rounded-full transition duration-300 hover:-translate-y-0.5 hover:bg-[#a56025]">
              Book Your Trip
            </button>
          </Link>
        </div>

        {/* Hamburger Button */}
        <button className="md:hidden ml-auto text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-24 w-[90%] bg-gray-100/95 backdrop-blur-md rounded-3xl shadow-lg z-50 flex flex-col items-center gap-4 py-6">
          {navLinks.map((link) => (
            <Link key={link.href} href={link.href} onClick={() => setIsOpen(false)} className="text-gray-900 text-base w-full text-center py-2 hover:bg-[#c8782f] hover:text-white rounded-full transition duration-300">
              {link.label}
            </Link>
          ))}
          <Link href="/booking" onClick={() => setIsOpen(false)}>
            <button className="bg-[#c8782f] text-white py-2 px-6 rounded-full transition duration-300 hover:bg-[#a56025]">
              Book Your Trip
            </button>
          </Link>
        </div>
      )}
    </div>
  );
};

export default Navbar;
