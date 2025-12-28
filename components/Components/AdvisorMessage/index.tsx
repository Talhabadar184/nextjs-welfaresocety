import React from "react";
import { motion } from "framer-motion";

const AdvisorMessage = () => {
  return (
    <section className="bg-white py-12 px-6">
      <div className="max-w-6xl mx-auto flex flex-col lg:flex-row-reverse items-center gap-10">
        <motion.div
          initial={{ x: 100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
          className="flex flex-col items-center"
        >
          <img
            src="/f3.jpg"
            alt="Advisor"
            className="w-48 h-64 object-cover rounded-lg shadow-lg mb-4"
          />
          <h2 className="text-l font-semibold text-center text-black">
            Muhammad Zulkifl Hasan
          </h2>
          <h3 className="text-base text-center text-black">
            Advisor & Patron IEEE CS UCP
          </h3>
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

        {/* Left Side: Message and Description */}
        <motion.div
          initial={{ x: -100, opacity: 0 }}
          animate={{ x: 0, opacity: 1 }}
          transition={{ duration: 1.3 }}
          className="flex-1"
        >
          <h2 className="text-2xl uppercase font-bold bg-gradient-to-r from-black to-[#FFA016] text-transparent bg-clip-text mb-4">
            Advisor's Message
          </h2>
          <p className="text-base leading-relaxed text-gray-700">
            I am delighted to welcome you to the IEEE Computer Society Student
            Chapter at the University of Central Punjab. This chapter marks an
            exciting step forward in fostering innovation, collaboration, and
            professional development in the field of computer science and
            information technology.
            <br />
            <br />
            At the Faculty of Information Technology and Computer Science (FoIT
            &amp; CS), we are committed to creating a dynamic environment where
            students can engage with emerging technologies, explore research
            opportunities, and grow into future leaders of the tech industry.
            The IEEE Computer Society Chapter provides a unique platform for
            students to enhance their technical knowledge, participate in global
            initiatives, and connect with like-minded peers and professionals
            across the world.
          </p>

          <div className="my-6 h-[2px] bg-gradient-to-r from-black to-[#FFA016]"></div>


          <div className="mt-4 flex justify-center">
            <img
              src="/Logo2.png"
              alt="Society Logo"
              className="w-14 h-auto object-contain rounded"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AdvisorMessage;
