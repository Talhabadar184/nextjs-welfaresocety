'use client';

import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from 'react-intersection-observer';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';

const EventImageSlider = ({ images }: { images: string[] }) => {
  const [currentIndex, setCurrentIndex] = useState(0);
  const [showOverlay, setShowOverlay] = useState(false);

  // InView hook to detect when the slider is in the viewport
  const { ref, inView } = useInView({ triggerOnce: false, threshold: 0.3 });

  // Show the overlay when the slider is in view
  useEffect(() => {
    if (inView) {
      setShowOverlay(true);

      // Hide overlay after 3 seconds
      const timer = setTimeout(() => {
        setShowOverlay(false);
      }, 3000);

      // Cleanup the timer on unmount or when inView changes
      return () => clearTimeout(timer);
    }
  }, [inView]);

  // Image auto slider logic
  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 3000);

    return () => clearInterval(timer);
  }, [images.length]);

  return (
    <div
      ref={ref}
      className="relative w-screen  h-[700px] overflow-hidden bg-black"
    >
      <AnimatePresence>
        <motion.img
          key={images[currentIndex]}
          src={images[currentIndex]}
          alt={`Event ${currentIndex}`}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 2.0, ease: 'easeInOut' }}
          className="absolute w-full h-full object-cover"
        />
      </AnimatePresence>

      <AnimatePresence>
        {showOverlay && (
          <motion.div
            key="event-slider-heading"
            initial={{ opacity: 0, y: 50 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: 50 }}
            transition={{ duration: 0.5, ease: 'easeInOut' }}
            className="absolute inset-0 z-20 flex justify-center items-center bg-black/30 backdrop-blur-md"
          >
            <h1 className="text-[9vw] font-extrabold uppercase text-transparent bg-clip-text bg-gradient-to-r from-white to-[#FFA016]">
              Events
            </h1>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default EventImageSlider;
