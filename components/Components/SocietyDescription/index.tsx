import React from "react";
import { motion } from "framer-motion";

const SocietyDescription = () => {
  return (
    <section className="relative bg-black py-24 px-6 overflow-hidden">
      {/* Background patterns */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-[#FFA016]/5 rounded-full blur-[100px] -mr-48 -mt-48"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-[#FFA016]/5 rounded-full blur-[100px] -ml-48 -mb-48"></div>

      <div className="max-w-5xl mx-auto relative z-10 text-center">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.8 }}
        >
          <span className="text-[#FFA016] font-black uppercase tracking-[0.4em] text-xs mb-4 block">
            Our Vision
          </span>
          <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-12 tracking-tight">
            Our Mission
          </h2>
        </motion.div>

        <motion.div
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          transition={{ delay: 0.3, duration: 1 }}
          className="relative"
        >
          {/* Decorative quote mark */}
          <div className="absolute -top-10 -left-4 text-9xl text-[#1c872e]/10 font-serif pointer-events-none">"</div>

          <p className="text-lg md:text-xl leading-relaxed text-gray-400 font-medium max-w-4xl mx-auto mb-16 relative z-10">
            UCP Welfare Society is a purpose-driven and inclusive community dedicated to serving humanity through compassion, collaboration, and impactful initiatives. We provide a platform for students to engage in community service, develop leadership skills, and contribute to meaningful causes that create real-world impact.          .
            <br /><br />
            Through welfare drives, community visits, awareness campaigns, and fundraising initiatives, we strive to uplift underprivileged communities and spread kindness. Whether you’re someone eager to give back or looking to grow through service, UCP Welfare Society offers a space where every effort counts and every heart matters.
          </p>

          {/* Decorative quote mark */}
          <div className="absolute -bottom-20 -right-4 text-9xl text-[#1c872e]/10 font-serif pointer-events-none rotate-180">"</div>
        </motion.div>

        <div className="flex flex-col items-center">
          <div className="w-24 h-px bg-gradient-to-r from-transparent via-[#FFA016] to-transparent mb-8"></div>
          <img
            src="/logo3.png"
            alt="Society Logo"
            className="w-28 h-28 object-contain transition-all duration-500"
          />
        </div>
      </div>
    </section>
  );
};

export default SocietyDescription;
