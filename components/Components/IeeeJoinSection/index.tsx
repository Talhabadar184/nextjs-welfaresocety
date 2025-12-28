'use client';

import React from "react";
import { SiIeee } from "react-icons/si";
import { FaUniversity } from "react-icons/fa";
import { motion } from 'framer-motion';

const IeeeJoinSection = () => {
  return (
    <section className="bg-zinc-900 text-white px-4 sm:px-6 py-24 relative overflow-hidden">
      {/* Subtle background pattern */}
      <div className="absolute inset-0 opacity-5">
        <div className="absolute inset-0 bg-[linear-gradient(45deg,transparent_25%,rgba(255,160,22,.3)_50%,transparent_75%,transparent_100%)] bg-[length:200px_200px]"></div>
      </div>

      <motion.div
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
        className="relative z-10 max-w-4xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl font-black uppercase tracking-wide mb-4 leading-tight">
          Become an International
          <br />
          <span className="text-[#FFA016]">IEEE Student Member</span>
        </h2>

        <p className="text-gray-400 text-lg mb-12 max-w-2xl mx-auto">
          Join the world's largest technical professional organization dedicated to advancing technology
        </p>

        <div className="flex justify-center items-center gap-8 mb-12">
          <motion.div
            whileHover={{ scale: 1.1, rotate: 5 }}
            className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 hover:border-[#FFA016]/50 hover:shadow-lg hover:shadow-[#FFA016]/20"
          >
            <SiIeee title="IEEE Logo" className="w-16 h-16 text-white" />
          </motion.div>

          <div className="text-[#FFA016] text-4xl font-light">×</div>

          <motion.div
            whileHover={{ scale: 1.1, rotate: -5 }}
            className="p-6 bg-white/5 backdrop-blur-sm rounded-2xl border border-white/10 transition-all duration-300 hover:border-[#FFA016]/50 hover:shadow-lg hover:shadow-[#FFA016]/20"
          >
            <img src="Logo2.png" alt="IEEE Computer Society" className="w-16 h-16 object-contain" />
          </motion.div>
        </div>

        <motion.button
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="bg-[#FFA016] text-white font-bold px-12 py-4 rounded-full hover:bg-[#ff8c00] transition-all duration-300 shadow-xl"
        >
          <a href="https://www.ieee.org/" target="_blank" rel="noopener noreferrer" className="flex items-center gap-2">
            Join Now <span className="text-lg">→</span>
          </a>
        </motion.button>
      </motion.div>
    </section>
  );
};

export default IeeeJoinSection;
