"use client";
import React, { useState , useEffect} from "react";
import Image from "next/image";
import Link from "next/link";
import axios from  'axios';
import { Menu, X, Home, PackageOpen, Sparkles, Info, Phone } from "lucide-react";

const navLinks = [
  { href: "/", label: "Home", icon: Home },
  { href: "/packages", label: "Packages", icon: PackageOpen },
  { href: "/experiences", label: "Experiences", icon: Sparkles },
  { href: "/about", label: "About", icon: Info },
  { href: "/contact", label: "Contact", icon: Phone },
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [isLoggedIn, setIsLoggedIn] = useState(false);

  useEffect( ()=> {
    const loginStatus = localStorage.getItem('isLoggedIn');
    if(loginStatus === 'true'){
      setIsLoggedIn(true);
    }
  }, []);

  const handleLogout = async () =>{

    try{
      await axios.post('http://127.0.0.1:8000/api/accounts/logout/');

      localStorage.removeItem('isLoggedIn' );
      setIsLoggedIn(false);
      console.log("logout successful")
    }
    catch( error : any){
      console.log(error)
    }


  };

  return (
    <div className="flex flex-col items-center absolute z-50 w-full">
      <div className="flex items-center w-[90%] md:w-[80%] h-16 px-4 text-white bg-gray-200/80 backdrop-blur-md fixed mt-5 rounded-4xl border-b shadow-lg border-white-700">
        
        {/* Logo */}
        <Link href="/">
          <Image src="/logo.png" 
          alt="Logo" width={120} 
          height={120} 
          style={{ height: "auto" }}
          className="rounded-full transition duration-300 hover:translate-y-0.5" />
        </Link>

        {/* Desktop Links */}
        <div className="hidden md:flex gap-8 ml-auto py-4 space-x-2">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} className="flex items-center gap-1.5 text-gray-900 text-sm transition duration-300 hover:translate-y-0.5 hover:bg-[#c8782f] hover:text-white px-4 py-1.5 rounded-full">
              <Icon size={14} />
              {label}
            </Link>
          ))}
        </div>

        {/* Desktop Book Button */}
        {
          isLoggedIn ? (
            <button
              onClick={handleLogout}
              className="bg-red-500 h-10 text-white py-2 px-4 rounded-full transition duration-300 hover:bg-red-600"
            >
              Logout
            </button>
          ) : (
            <>
            <Link href="/login">
              <button className="bg-[#c8782f] h-10 text-white py-2 px-4 rounded-full transition duration-300 hover:bg-[#a56025]">
                Login
              </button>
            </Link>
            {/* <span>/</span> */}
            {/* <Link href="/register">
              <button className="bg-[#c8782f] h-10 text-white py-2 px-4 rounded-full transition duration-300 hover:bg-[#a56025]">
                Sign-up
              </button>
            </Link> */}
            </>
          )
        }

        {/* Hamburger Button */}
        <button className="md:hidden ml-auto text-gray-900" onClick={() => setIsOpen(!isOpen)}>
          {isOpen ? <X size={26} /> : <Menu size={26} />}
        </button>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden fixed top-24 w-[90%] bg-gray-100/95 backdrop-blur-md rounded-3xl shadow-lg z-50 flex flex-col items-center gap-4 py-6">
          {navLinks.map(({ href, label, icon: Icon }) => (
            <Link key={href} href={href} onClick={() => setIsOpen(false)} className="flex items-center justify-center gap-2 text-gray-900 text-base w-full text-center py-2 hover:bg-[#c8782f] hover:text-white rounded-full transition duration-300">
              <Icon size={16} />
              {label}
            </Link>
          ))}
          {
            isLoggedIn ? (
              <button
                onClick={() => {
                  handleLogout();
                  setIsOpen(false);
                }}
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
            )
          }
        </div>
      )}
    </div>
  );
};

export default Navbar;
