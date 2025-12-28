import React from "react";
import { motion } from "framer-motion";

const backgroundImage = '/a2.jpg';

const AboutUsOverlaySection = () => {
  return (
    <section className="relative h-[80vh] w-full overflow-hidden bg-gradient-to-r from-black via-zinc-900 to-[#FFA016]">
      <div className="relative z-10 h-full flex flex-col md:flex-row">
        {/* Left: Image without overlay */}
        <div className="relative w-full md:w-1/2 h-full">
          <div
            className="absolute inset-0 bg-cover bg-center"
            style={{ backgroundImage: `url(${backgroundImage})` }}
          />
        </div>

        {/* Right: Content with gradient background */}
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
          className="w-full md:w-1/2 bg-transparent flex items-center justify-center p-8 md:p-12"
        >
          <div className="max-w-xl">
            <motion.h2
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2, duration: 0.6 }}
              className="text-5xl sm:text-6xl md:text-7xl font-black uppercase text-white mb-8"
            >
              About Us
            </motion.h2>
            <div className="w-20 h-1 bg-gradient-to-r from-[#FFA016] to-[#ff8c00] mb-6"></div>
            <h3 className="text-3xl md:text-4xl font-black mb-6 text-white">
              IEEE Computer Society
              <br />
              <span className="text-[#FFA016]">UCP Chapter</span>
            </h3>
            <p className="text-lg md:text-xl leading-relaxed text-gray-300">
              The IEEE Computer Society UCP Student Chapter connects students globally through innovation, leadership, and learning. We host events, workshops, and competitions to inspire collaboration and technical excellence.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default AboutUsOverlaySection;
