"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import axios from "axios";
import { Menu, X, Home, PackageOpen, Sparkles, Info, Phone, Sun, Moon } from "lucide-react";
import { useTheme } from "@/components/ThemeProvider";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/packages", label: "Packages", icon: PackageOpen },
  { href: "/experiences", label: "Experiences", icon: Sparkles },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Phone },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const { dark, toggle } = useTheme();

  useEffect(() => {
    const token = localStorage.getItem("access_token");
    setIsLoggedIn(!!token);
  }, []);

  const handleLogout = async () => {
    try {
      await axios.post("https://travellingwebsite-2.onrender.com/api/accounts/logout/");
      localStorage.removeItem("access_token");
      setIsLoggedIn(false);
    } catch (error: any) {
      console.log(error);
    }
  };

  return (
    <div className="flex flex-col items-center absolute z-50 w-full">
      <div className="flex items-center w-[90%] md:w-[80%] h-16 px-4 text-white bg-gray-200/80 dark:bg-gray-800/80 backdrop-blur-md fixed mt-5 rounded-4xl border-b shadow-lg border-white/20 dark:border-gray-700">

        {/* Logo */}
        <Link href="/">
          <Image
            src="/logo.png"
            alt="Logo"
            width={120}
            height={120}
            style={{ height: "auto" }}
            className="rounded-full transition duration-300 hover:translate-y-0.5"
          />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 ml-auto py-4 space-x-2">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              className="flex items-center gap-1.5 text-gray-900 dark:text-gray-100 text-sm transition duration-300 hover:translate-y-0.5 hover:bg-[#c8782f] hover:text-white px-4 py-1.5 rounded-full"
            >
              <Icon size={14} />
              {label}
            </Link>
          ))}
        </div>

        {/* Theme Toggle */}
        <button
          onClick={toggle}
          className="ml-3 p-2 rounded-full text-gray-900 dark:text-gray-100 hover:bg-gray-300 dark:hover:bg-gray-700 transition"
          aria-label="Toggle theme"
        >
          {dark ? <Sun size={18} /> : <Moon size={18} />}
        </button>

        {/* Auth Button */}
        {isLoggedIn ? (
          <button
            onClick={handleLogout}
            className="ml-3 bg-red-500 h-10 text-white py-2 px-4 rounded-full transition duration-300 hover:bg-red-600"
          >
            Logout
          </button>
        ) : (
          <Link href="/login" className="ml-3">
            <button className="bg-[#c8782f] h-10 text-white py-2 px-4 rounded-full transition duration-300 hover:bg-[#a56025]">
              Login
            </button>
          </Link>
        )}

        {/* Hamburger */}
        <button
          className="md:hidden ml-3 text-gray-900 dark:text-gray-100"
          onClick={() => setIsOpen(!isOpen)}
        >
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-24 w-[90%] bg-gray-100/95 dark:bg-gray-800/95 backdrop-blur-md rounded-3xl shadow-lg z-50 flex flex-col items-center gap-4 py-6">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link
              key={href}
              href={href}
              onClick={() => setIsOpen(false)}
              className="flex items-center justify-center gap-2 text-gray-900 dark:text-gray-100 text-base w-full text-center py-2 hover:bg-[#c8782f] hover:text-white rounded-full transition duration-300"
            >
              <Icon size={16} />
              {label}
            </Link>
          ))}
          {isLoggedIn ? (
            <button
              onClick={() => { handleLogout(); setIsOpen(false); }}
              className="bg-red-500 text-white py-2 px-6 rounded-full hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <Link href="/login" onClick={() => setIsOpen(false)}>
              <button className="bg-[#c8782f] text-white py-2 px-6 rounded-full transition duration-300 hover:bg-[#a56025]">
                Login
              </button>
            </Link>
          )}
        </div>
      )}
    </div>
  );
};

export default Navbar;
