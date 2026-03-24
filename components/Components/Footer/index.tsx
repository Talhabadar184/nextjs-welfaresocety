'use client';

import React from "react";
import {
  FaFacebookF,
  FaInstagram,
  FaLinkedinIn,
  FaLocationDot,
  FaArrowUp,
  FaEnvelope,
  FaPhone
} from "react-icons/fa6";
import Link from "next/link";
import { motion } from "framer-motion";

const Footer = () => {
  const scrollToTop = () => {
    window.scrollTo({ top: 0, behavior: "smooth" });
  };

  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { icon: <FaFacebookF />, url: "https://www.facebook.com/profile.php?viewas=100000686899395&id=61581628452395", label: "Facebook" },
    { icon: <FaInstagram />, url: "https://www.instagram.com/ucp.welfaresociety/", label: "Instagram" },
    { icon: <FaLinkedinIn />, url: "https://www.linkedin.com/company/ucp-welfare-society/", label: "LinkedIn" },
  ];

  const quickLinks = [
    { name: "Home", path: "/" },
    { name: "About Us", path: "/about" },
    { name: "Leadership", path: "/hierarchy" },
    { name: "Events", path: "/events" },
    { name: "Contact", path: "/contact" },
  ];

  return (
    <footer className="relative bg-gray-200 text-black pt-20 pb-10 overflow-hidden border-t border-gray-100">
      {/* Background Decoration */}
      <div className="absolute top-0 left-0 w-full h-px bg-gradient-to-r from-transparent via-[#FFA016]/30 to-transparent"></div>

      <div className="max-w-7xl mx-auto px-6 relative z-10">
        <div className="grid grid-cols-1 md:grid-cols-12 gap-12 mb-16">
          {/* Brand Column */}
          <div className="md:col-span-5 flex flex-col space-y-6">
            <Link href="/" className="flex items-center space-x-3 group">
              <img src="/Logo2.png" alt="IEEE CS Logo" className="w-16 h-16 object-contain" />
              <div className="flex flex-col">
                <span className="text-black font-black text-xl tracking-tighter uppercase leading-none">
                  UCP Welfare Society
                </span>
                {/* <span className="text-[#FFA016] text-[10px] font-bold uppercase tracking-[0.2em] mt-1">
                  UCP Student Chapter
                </span> */}
              </div>
            </Link>
            <p className="text-gray-800 text-sm leading-relaxed max-w-sm font-medium">
              Empowering the next generation of tech leaders at the University of Central Punjab.
              Connecting students with global opportunities in computing and technology.
            </p>
            <div className="flex space-x-4">
              {socialLinks.map((social, index) => (
                <motion.a
                  key={index}
                  href={social.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  whileHover={{ y: -5, scale: 1.1 }}
                  className="w-10 h-10 rounded-full bg-gray-50 border border-gray-100 flex items-center justify-center text-[#1c872e] hover:bg-[#1c872e] hover:text-white transition-all duration-300 shadow-sm"
                  aria-label={social.label}
                >
                  {social.icon}
                </motion.a>
              ))}
            </div>
          </div>

          {/* Quick Links */}
          <div className="md:col-span-3">
            <h3 className="text-black font-black uppercase tracking-widest text-sm mb-8 border-l-4 border-[#1c872e] pl-4">
              Quick Navigation
            </h3>
            <ul className="space-y-4">
              {quickLinks.map((link) => (
                <li key={link.name}>
                  <Link
                    href={link.path}
                    className="text-gray-800 hover:text-[#1c872e] transition-colors duration-300 text-sm font-bold flex items-center group"
                  >
                    <span className="w-0 group-hover:w-4 h-px bg-[#1c872e] mr-0 group-hover:mr-2 transition-all duration-300"></span>
                    {link.name}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Contact Details */}
          <div className="md:col-span-4">
            <h3 className="text-black font-black uppercase tracking-widest text-sm mb-8 border-l-4 border-[#1c872e] pl-4">
              Contact Info
            </h3>
            <div className="space-y-6">
              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#FFA016]/5 flex items-center justify-center text-[#1c872e] group-hover:bg-[#1c872e] group-hover:text-white transition-colors duration-300 shrink-0 border border-gray-50">
                  <FaLocationDot />
                </div>
                <div>
                  <p className="text-black font-black text-sm mb-1 uppercase tracking-tight">Visit Us</p>
                  <p className="text-gray-800 text-xs leading-relaxed font-bold">
                    Avenue 1 Khayaban-e-Jinnah, Johar Town,<br />
                    Lahore, Punjab, Pakistan
                  </p>
                </div>
              </div>

              <div className="flex items-start space-x-4 group">
                <div className="w-10 h-10 rounded-xl bg-[#FFA016]/5 flex items-center justify-center text-[#1c872e] group-hover:bg-[#1c872e] group-hover:text-white transition-colors duration-300 shrink-0 border border-gray-50">
                  <FaEnvelope />
                </div>
                <div>
                  <p className="text-black font-black text-sm mb-1 uppercase tracking-tight">Email Us</p>
                  <p className="text-gray-800 text-xs font-bold">welfaresociety@ucp.edu.pk</p>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="h-px w-full bg-gray-100 mb-8"></div>

        {/* Footer Bottom */}
        <div className="flex flex-col md:flex-row justify-between items-center py-6 space-y-4 md:space-y-0">
          <p className="text-gray-600 text-[10px] uppercase font-black tracking-widest text-center md:text-left">
            &#169; {currentYear} UCP Welfare Society. ALL RIGHTS RESERVED.
          </p>

          <p className="text-gray-600 text-[10px] font-black uppercase tracking-widest">
            Developed by{" "}
            <a
              href="https://www.linkedin.com/in/hassanjamshaid10"
              target="_blank"
              rel="noopener noreferrer"
              className="text-black hover:text-[#FFA016] transition-colors duration-300 border-b border-[#FFA016]/30 pb-0.5"
            >
             Talha Badar
            </a>
          </p>

          <button
            onClick={scrollToTop}
            className="group flex flex-col items-center space-y-2 text-[#1c872e] hover:text-black transition-colors"
          >
            <div className="w-10 h-10 rounded-full border border-[#FFA016]/30 flex items-center justify-center group-hover:border-black transition-all">
              <FaArrowUp className="animate-bounce" />
            </div>
            <span className="text-[10px] font-bold uppercase tracking-tighter">Back to Top</span>
          </button>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
