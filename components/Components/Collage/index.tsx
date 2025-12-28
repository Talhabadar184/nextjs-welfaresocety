import React, { useState, useEffect } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { useInView } from "react-intersection-observer";

const Collage = () => {
  const [showOverlay, setShowOverlay] = useState(false);
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.5 });

  const images = [
    "/g7.jpg",
    "/tech3.jpg",
    "/hite2.jpg",
    "/fyp1.jpg",
    "/hite3.jpg",
   "/a1.jpg",
   "/usmanasif.jpg",
    "/tw3.jpg",
    "/a2.jpg",
    "/hite4.jpg",
    "/fyp2.jpg",
    "/tech2.jpg",
  ];

  useEffect(() => {
    if (inView) {
      setShowOverlay(true);
      const timer = setTimeout(() => setShowOverlay(false), 2000);
      return () => clearTimeout(timer);
    }
  }, [inView]);

  return (
    <section ref={ref} className="relative w-full min-h-screen overflow-hidden">
      {/* Responsive collage grid */}
      <div className="absolute inset-0 grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 grid-rows-5 md:grid-rows-3 z-0">
        {images.map((src, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 1, ease: "easeInOut" }}
            className="relative w-full h-full min-w-0 min-h-0"
          >
            <img
              src={src}
              alt={`collage-${index}`}
              className="object-cover w-full h-full"
              loading="lazy"
            />
          </motion.div>
        ))}
      </div>

      {/* Overlay animation */}
      <AnimatePresence>
  {showOverlay && (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0 }}
      transition={{ duration: 0.5, ease: "easeInOut" }}
      className="absolute inset-0 z-30 flex justify-center items-center backdrop-blur-md bg-black/30 px-4"
    >
      {/* <h1 className="text-xl sm:text-2xl md:text-3xl lg:text-4xl xl:text-6xl font-extrabold uppercase whitespace-nowrap text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFA016]">
        Be part of the top tech society of UCP
      </h1> */}
       <h1 className="text-base sm:text-xl md:text-2xl lg:text-4xl xl:text-6xl font-extrabold uppercase whitespace-nowrap text-center text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFA016]">
    Be part of the top tech society of UCP
  </h1>
    </motion.div>
  )}
</AnimatePresence>

    </section>
  );
};

export default Collage;
