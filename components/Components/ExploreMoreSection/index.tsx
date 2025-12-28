import React from "react";
import { ArrowRight } from "lucide-react";
import Link from "next/link";
import { motion } from "framer-motion";

const exploreData = [
  {
    title: "ALL EVENTS",
    description: "Discover all upcoming university & society events.",
    path: "/events",
  },
  {
    title: "HIERARCHY",
    description: "Meet society leadership.",
    path: "/hierarchy",
  },
  {
    title: "Register",
    description: "Register now to join top tech society of UCP",
    path: "/register",
  },
];

const ExploreMoreSection = () => {
  return (
    <section className="bg-black py-20 px-8">
      <div className="max-w-7xl mx-auto">
        <h2 className="text-4xl sm:text-5xl font-black mb-12 uppercase text-white">
          Explore <span className="text-[#FFA016]">More</span>
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {exploreData.map((item, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.2, duration: 0.6 }}
              whileHover={{ y: -10 }}
              className="relative bg-white text-black p-8 rounded-2xl overflow-hidden group cursor-pointer shadow-xl hover:shadow-2xl transition-all duration-300 border-t-4 border-[#FFA016]"
            >

              <div className="relative z-10">
                <h3 className="text-2xl font-black uppercase text-black tracking-wide mb-4 group-hover:text-[#FFA016] transition-colors">
                  {item.title}
                </h3>
                <p className="text-base text-gray-700 mb-6">{item.description}</p>
              </div>

              <div className="flex justify-end">
                <Link href={item.path} className="w-12 h-12 rounded-full bg-black group-hover:bg-[#FFA016] flex items-center justify-center transition-all duration-300 shadow-lg">
                  <ArrowRight className="text-white w-5 h-5 transition-colors" />
                </Link>
              </div>

              {/* Background glow effect */}
              <div className="absolute -bottom-20 -right-20 w-40 h-40 bg-[#FFA016] rounded-full blur-3xl opacity-0 group-hover:opacity-10 transition-opacity duration-500"></div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default ExploreMoreSection;
