'use client';

import { AnimatePresence, motion } from "framer-motion";
import { useState, useEffect } from "react";

const AnimatedImageGallery = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);

  // Optional: Cycle through images every 5 seconds
  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 5000); // change image every 5 seconds
    return () => clearInterval(interval);
  }, [images.length]);

  return (
    <div className="relative w-full h-full overflow-hidden">
      <AnimatePresence>
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`Event ${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.0, ease: "easeInOut" }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>
    </div>
  );
};

export default AnimatedImageGallery;
