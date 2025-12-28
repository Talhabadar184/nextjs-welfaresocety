import React from "react";
import { motion } from "framer-motion";
import { FaLinkedin } from "react-icons/fa6";
const PersonMessage = ({
  name,
  title,
  image,
  message,
  linkedin,
  heading = "Message",
  logo = "/Logo.png",
}) => {
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
          {/* <img
            src={image}
            alt={name}
            className="w-48 h-64 object-cover rounded-lg shadow-lg mb-4"
          /> */}
          <motion.img
  whileHover={{ scale: 1.05 }}
  transition={{ type: "spring", stiffness: 300 }}
  src={image}
  alt={name}
  className="w-48 h-64 object-cover rounded-lg shadow-lg mb-4 cursor-pointer"
/>
          <h2 className="text-l font-semibold text-center text-black">{name}</h2>
          <h3 className="text-base text-center text-black">{title}</h3>

          {linkedin && (
            <a
            href={linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="mt-2 text-[#FFA016]"
          >
            <FaLinkedin className="w-6 h-6" />
          </a>
          )}
        </motion.div>

        {/* Right Side: Message and Description */}
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
          className="flex-1"
        >
          <h2 className="text-2xl font-bold bg-gradient-to-r from-black to-[#FFA016] text-transparent bg-clip-text mb-4">
            {heading.toUpperCase()}
          </h2>
          <p className="text-base leading-relaxed text-gray-700 whitespace-pre-line">
            {message}
          </p>

          <div className="my-6 h-[2px] bg-gradient-to-r from-black to-[#FFA016]"></div>

          <div className="mt-4 flex justify-center">
            <img
              src={logo}
              alt="Logo"
              className="w-14 h-auto object-contain rounded"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default PersonMessage;
