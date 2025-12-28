'use client';

import { motion } from 'framer-motion';

const Bar = () => {
  return (
    <section className="relative bg-black py-16 px-4">
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.8 }}
        className="max-w-7xl mx-auto text-center"
      >
        <h2 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-black uppercase tracking-wide text-white mb-4">
          IEEE Computer Society UCP Student Chapter
        </h2>
        <motion.div
          initial={{ width: 0 }}
          animate={{ width: '200px' }}
          transition={{ delay: 0.5, duration: 0.8 }}
          className="h-1 bg-gradient-to-r from-[#FFA016] to-[#ff8c00] mx-auto"
        />
      </motion.div>
    </section>
  );
};

export default Bar;
