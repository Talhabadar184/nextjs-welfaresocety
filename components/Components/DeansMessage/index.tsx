import React from "react";
import { motion } from "framer-motion";

const DeansMessage = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row items-center gap-10">
        {/* Left Side: Image, Name, LinkedIn */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
          className="flex flex-col items-center"
        >
          <img
            src="/dean.jpg" // Make sure this path matches where your image is located
            alt="Dean"
            className="w-48 h-64 object-cover rounded-lg shadow-lg mb-4"
          />
          <h2 className="text-l font-semibold text-center text-black">Dr. Muhammad Amjad Iqbal</h2>
          <h3 className="text-base text-center text-black">DEAN FOIT&amp;CS</h3>

          <a
            href="https://www.linkedin.com"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-[#FFA016]"
          >
            <img
              src="https://cdn.jsdelivr.net/gh/devicons/devicon/icons/linkedin/linkedin-original.svg"
              alt="LinkedIn"
              className="w-6 h-6"
            />
          </a>
        </motion.div>

        {/* Right Side: Message and Description */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3}}
          className="flex-1"
        >
          {/* <h2 className="text-2xl font-bold bg-gradient-to-r from-black to-[#FFA016] text-transparent bg-clip-text mb-4">
            DEAN'S MESSAGE
          </h2> */}
          <p className="text-base leading-relaxed text-gray-700">
          Dr. Muhammad Amjad Iqbal is an esteemed academic with over seven years of teaching experience at top Pakistani universities. Since joining UCP in 2010, he has been a key member of the Computer Science faculty. He earned his PhD from FAST and completed Post-Doctoral studies at GIST, South Korea, in 2015. Dr. Iqbal has mentored numerous MS/MPhil theses and supervised two PhD students. His research spans Machine Learning, Fuzzy Logic, Evolutionary Function Optimization, and Facial Expression Recognition. His work on classifier combinations has significantly advanced these fields. </p>

          <div className="my-6 h-[2px] bg-gradient-to-r from-black to-[#FFA016]"></div>

          <div className="mt-4 flex justify-center">
            <img
              src="/Logo.png"
              alt="Society Logo"
              className="w-14 h-auto object-contain rounded"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default DeansMessage;
